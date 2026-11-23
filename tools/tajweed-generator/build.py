"""يولّد صفحات دروس التجويد التفاعلية من template.html وملفات البيانات.

التشغيل:  python3 build.py   ثم   cp out/*.html ../../public/quran-kids/
"""
import json, os, importlib

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'out')
os.makedirs(OUT, exist_ok=True)

RULES = {
    'izhar':     {'ar': 'إظهار حلقي',      'en': 'Izhar Halqi',       'color': '#1E88E5'},
    'idgham_g':  {'ar': 'إدغام بغنة',      'en': 'Idgham with ghunnah', 'color': '#8E24AA'},
    'idgham_ng': {'ar': 'إدغام بغير غنة',  'en': 'Idgham without ghunnah', 'color': '#6D4C41'},
    'iqlab':     {'ar': 'إقلاب',           'en': 'Iqlab',             'color': '#E53935'},
    'ikhfa':     {'ar': 'إخفاء حقيقي',     'en': 'Ikhfa Haqiqi',      'color': '#F57C00'},
    'ghunna':    {'ar': 'غنة مشددة',       'en': 'Doubled ghunnah',   'color': '#D81B60'},
    'ikhfa_sh':  {'ar': 'إخفاء شفوي',      'en': 'Ikhfa Shafawi',     'color': '#F4511E'},
    'idgham_sh': {'ar': 'إدغام شفوي',      'en': 'Idgham Shafawi',    'color': '#7B1FA2'},
    'izhar_sh':  {'ar': 'إظهار شفوي',      'en': 'Izhar Shafawi',     'color': '#00897B'},
    'qalqala':   {'ar': 'قلقلة',           'en': 'Qalqalah',          'color': '#3949AB'},
    'tafkheem':  {'ar': 'تفخيم',           'en': 'Heavy (tafkheem)',  'color': '#B45309'},
    'tarqeeq':   {'ar': 'ترقيق',           'en': 'Light (tarqeeq)',   'color': '#0284C7'},
    'madd_t':    {'ar': 'مد طبيعي',        'en': 'Natural madd',      'color': '#16A34A'},
    'alif7':     {'ar': 'ألف تُحذف وصلًا', 'en': 'Alif dropped when continuing', 'color': '#64748B'},
    'madd_iwad': {'ar': 'مد العوض',        'en': 'Madd al-iwad',      'color': '#0D9488'},
    'madd_badal':{'ar': 'مد البدل',        'en': 'Madd al-badal',     'color': '#65A30D'},
    'madd_muttasil': {'ar': 'مد متصل',     'en': 'Connected madd',    'color': '#DC2626'},
    'madd_munfasil': {'ar': 'مد منفصل',    'en': 'Separated madd',    'color': '#EA580C'},
    'sila_s':    {'ar': 'صلة صغرى',        'en': 'Minor silah',       'color': '#0891B2'},
    'sila_k':    {'ar': 'صلة كبرى',        'en': 'Major silah',       'color': '#BE185D'},
    'madd_arid': {'ar': 'مد عارض للسكون',  'en': 'Madd arid',         'color': '#7C3AED'},
    'madd_leen': {'ar': 'مد اللين',        'en': 'Madd al-leen',      'color': '#059669'},
    'madd_lazim':{'ar': 'مد لازم',         'en': 'Madd lazim',        'color': '#991B1B'},
    'lam_qamari':{'ar': 'لام قمرية (إظهار)', 'en': 'Lunar laam (clear)', 'color': '#1D4ED8'},
    'lam_shamsi':{'ar': 'لام شمسية (إدغام)', 'en': 'Solar laam (merged)', 'color': '#CA8A04'},
    'lam_idgham':{'ar': 'إدغام اللام', 'en': 'Merged laam', 'color': '#A16207'},
    'lam_izhar': {'ar': 'إظهار اللام', 'en': 'Clear laam', 'color': '#0369A1'},
}

SURAHS = {1: ('الفاتحة', 'Al-Fatihah'), 2: ('البقرة', 'Al-Baqarah'), 6: ('الأنعام', 'Al-An\'am'), 16: ('النحل', 'An-Nahl'),
          58: ('المجادلة', 'Al-Mujadilah'), 73: ('المزمل', 'Al-Muzzammil'), 78: ('النبأ', 'An-Naba\''), 87: ('الأعلى', 'Al-A\'la'),
          92: ('الليل', 'Al-Layl'), 95: ('التين', 'At-Tin'), 96: ('العلق', 'Al-\'Alaq'), 97: ('القدر', 'Al-Qadr'),
          99: ('الزلزلة', 'Az-Zalzalah'), 101: ('القارعة', 'Al-Qari\'ah'), 102: ('التكاثر', 'At-Takathur'), 104: ('الهمزة', 'Al-Humazah'),
          105: ('الفيل', 'Al-Fil'), 106: ('قريش', 'Quraysh'), 108: ('الكوثر', 'Al-Kawthar'), 112: ('الإخلاص', 'Al-Ikhlas'),
          113: ('الفلق', 'Al-Falaq'), 114: ('الناس', 'An-Nas'),
          4: ('النساء', 'An-Nisa\''), 10: ('يونس', 'Yunus'), 17: ('الإسراء', 'Al-Isra\''), 18: ('الكهف', 'Al-Kahf'), 19: ('مريم', 'Maryam'),
          20: ('طه', 'Ta-Ha'), 33: ('الأحزاب', 'Al-Ahzab'), 50: ('ق', 'Qaf'), 54: ('القمر', 'Al-Qamar'), 67: ('الملك', 'Al-Mulk'),
          69: ('الحاقة', 'Al-Haqqah'), 76: ('الإنسان', 'Al-Insan'), 80: ('عبس', '\'Abasa'), 86: ('الطارق', 'At-Tariq'), 89: ('الفجر', 'Al-Fajr'),
          90: ('البلد', 'Al-Balad'), 91: ('الشمس', 'Ash-Shams'), 98: ('البينة', 'Al-Bayyinah'), 100: ('العاديات', 'Al-\'Adiyat'),
          103: ('العصر', 'Al-\'Asr'), 109: ('الكافرون', 'Al-Kafirun'), 110: ('النصر', 'An-Nasr'),
          3: ('آل عمران', 'Al \'Imran'), 5: ('المائدة', 'Al-Ma\'idah'), 11: ('هود', 'Hud'), 12: ('يوسف', 'Yusuf'), 27: ('النمل', 'An-Naml'),
          36: ('يس', 'Ya-Sin'), 75: ('القيامة', 'Al-Qiyamah'), 77: ('المرسلات', 'Al-Mursalat'), 83: ('المطففين', 'Al-Mutaffifin')}

SETS = [
    # (ملف البيانات، بادئة اسم الملف، المستوى بالعربية، بالإنجليزية)
    ('kids1', 'tajweed-k1', 'تجويد الأطفال – المستوى الأول', 'Tajweed for Kids – Level 1'),
    ('kids2', 'tajweed-k2', 'تجويد الأطفال – المستوى الثاني', 'Tajweed for Kids – Level 2'),
    ('short', 'tajweed-s', 'التجويد المختصر', 'Tajweed – Short Course'),
    ('full', 'tajweed-f', 'التجويد الكامل', 'Tajweed – Full Course'),
]

AR_DIGITS = '٠١٢٣٤٥٦٧٨٩'
def ar_num(n): return ''.join(AR_DIGITS[int(d)] for d in str(n))

tpl = open(os.path.join(HERE, 'template.html'), encoding='utf8').read()
errors, index = [], []

def check_refs(obj, where):
    if isinstance(obj, dict):
        if 's' in obj and 'a' in obj and obj['s'] not in SURAHS: errors.append(f'{where}: surah {obj["s"]} has no name')
        if obj.get('rule') and obj['rule'] not in RULES: errors.append(f'{where}: unknown rule {obj["rule"]}')
        for v in obj.values(): check_refs(v, where)
    elif isinstance(obj, (list, tuple)):
        for v in obj:
            if isinstance(v, str) and v in ('izhar',) : pass
            check_refs(v, where)

for mod, prefix, lvl_ar, lvl_en in SETS:
    lessons = importlib.import_module(mod).LESSONS
    for i, L in enumerate(lessons, 1):
        slug = f'{prefix}-{i:02d}'
        check_refs(L, slug)
        for a in L['ex']:
            if a['t'] == 'mcq':
                for q in a['items']:
                    for o in q['o']:
                        if isinstance(o, str) and o not in RULES: errors.append(f'{slug}: option rule {o}')
            if a['t'] == 'sort':
                for b in a['buckets']:
                    if isinstance(b, str) and b not in RULES: errors.append(f'{slug}: bucket rule {b}')
        data = {'title': L['title'], 'cards': L['cards'], 'ex': L['ex']}
        hue = round((i * 47 + 200) % 360)
        html = (tpl.replace('__DATA__', json.dumps(data, ensure_ascii=False))
                   .replace('__SURAHS__', json.dumps({k: v for k, v in SURAHS.items()}, ensure_ascii=False))
                   .replace('__RULES__', json.dumps(RULES, ensure_ascii=False))
                   .replace('__TITLE_AR__', L['title'][0]).replace('__TITLE_EN__', L['title'][1])
                   .replace('__SUB_AR__', L['sub'][0]).replace('__SUB_EN__', L['sub'][1])
                   .replace('__LEVEL_AR__', lvl_ar).replace('__LEVEL_EN__', lvl_en)
                   .replace('__NUM_AR__', ar_num(i)).replace('__NUM__', str(i))
                   .replace('__ICON__', L['icon']).replace('__HUE__', str(hue)))
        open(os.path.join(OUT, slug + '.html'), 'w', encoding='utf8').write(html)
        index.append((slug, L['icon'], L['title'][0], L['title'][1]))

json.dump(index, open(os.path.join(OUT, 'index.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
print('built', len(index), 'errors', errors)
