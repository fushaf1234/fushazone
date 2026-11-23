"""Generate surah lesson pages from the Fatiha page's styles + body.tpl + lesson data."""
import json, os, sys, importlib, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
FATIHA = sys.argv[1]
OUT = os.path.join(HERE, 'out')
os.makedirs(OUT, exist_ok=True)

COUNTS = {1:7,58:22,59:24,60:13,61:14,62:11,63:11,64:18,65:12,66:12,67:30,68:52,69:52,70:44,71:28,72:28,
          73:20,74:56,75:40,76:31,77:50,78:40,79:46,80:42,81:29,82:19,83:36,84:25,85:22,86:17,87:19,
          88:26,89:30,90:20,91:15,92:21,93:11,94:8,95:8,96:19,97:5,98:8,99:8,100:11,101:11,102:8,
          103:3,104:9,105:5,106:4,107:7,108:3,109:6,110:3,111:5,112:4,113:5,114:6}

src = open(FATIHA, encoding='utf8').read()
head = src[:src.index('</style>')]
# خط القرآن الواضح (Scheherazade New بوزن عريض) من Google Fonts
FONT_LINK = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
             '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
             '<link href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet">\n')
if 'Scheherazade+New' not in head:
    head = head.replace('<style>', FONT_LINK + '<style>', 1)
body = open(os.path.join(HERE, 'body.tpl'), encoding='utf8').read()

surahs = []
for mod in ['data01', 'data28', 'data29', 'data30a', 'data30b']:
    surahs += importlib.import_module(mod).SURAHS
surahs.sort(key=lambda s: s[0])

errors = []
for (n, ar, en, cards, lessons, order, blanks, quiz) in surahs:
    c = COUNTS[n]
    # sanity checks on ayah references
    for x in [k[0] for k in cards] + list(order) + list(blanks):
        if not 1 <= x <= c: errors.append(f'{n}: ayah {x} out of range')
    if order[0] >= order[1]: errors.append(f'{n}: bad order range')
    # rotate quiz options so the right answer isn't always first
    q2 = []
    for qi, (qa, qe, opts, corr) in enumerate(quiz):
        r = (n + qi) % len(opts)
        rot = opts[r:] + opts[:r]
        q2.append([qa, qe, [list(o) for o in rot], (corr - r) % len(opts)])
    data = {'n': n, 'count': c, 'cards': [list(k) for k in cards], 'lessons': [list(l) for l in lessons],
            'order': list(order), 'blanks': list(blanks), 'quiz': q2}
    h = round((n * 137.508) % 360)
    theme = (f'  /* لون خاص بهذه السورة */\n  :root{{ --green-deep:hsl({h} 55% 17%); --green:hsl({h} 48% 27%); '
             f'--green-mid:hsl({h} 42% 38%); --green-soft:hsl({h} 50% 91%); }}\n')
    html = head.replace('<title>سورة الفاتحة للأطفال</title>', f'<title>سورة {ar} للأطفال</title>') + theme + body
    html = (html.replace('__DATA__', json.dumps(data, ensure_ascii=False))
                .replace('__NAME_AR__', ar).replace('__NAME_EN__', en)
                .replace('__NUM3__', f'{n:03d}'))
    open(os.path.join(OUT, f'surah-{n:03d}.html'), 'w', encoding='utf8').write(html)

missing = sorted(set(COUNTS) - {s[0] for s in surahs})
print('built', len(surahs), 'missing', missing)
print('\n'.join(errors) or 'no range errors')
