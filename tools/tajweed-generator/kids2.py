# تجويد الأطفال — المستوى الثاني (بنفس ترتيب سلسلة الرواء، بشرح أصلي)
from kids1 import E, C, ALL_LETTERS

LESSONS = [
# 1 ---------------------------------------------------------------
dict(icon='🏋️', title=('التفخيم والترقيق', 'Heavy and Light Letters'),
 sub=('حروف ثقيلة تملأ الفم وحروف خفيفة', 'Heavy letters that fill the mouth, and light ones'),
 cards=[
  C('🏋️', ('التفخيم', 'Tafkheem (Heavy)'), line=('صوت ممتلئ وثقيل', 'A full, heavy sound'),
    x=('**التفخيم** أن ننطق الحرف **ثقيلًا سمينًا** فيمتلئ الفم بصوته، ويرتفع آخر اللسان نحو سقف الحلق.', '**Tafkheem** means saying a letter **heavy and full**, so its sound fills the mouth and the back of the tongue rises.')),
  C('🪶', ('الترقيق', 'Tarqeeq (Light)'), line=('صوت نحيف وخفيف', 'A thin, light sound'),
    x=('**الترقيق** أن ننطق الحرف **نحيفًا خفيفًا** فلا يمتلئ الفم بصوته.', '**Tarqeeq** means saying a letter **thin and light**, without filling the mouth.')),
  C('🦁', ('حروف مفخّمة دائمًا', 'Always Heavy'), line=('خُصَّ ضَغْطٍ قِظْ', 'خص ضغط قظ'),
    big='خ ص ض غ ط ق ظ', letters='خ ص ض غ ط ق ظ',
    x=('هذه **حروف الاستعلاء** السبعة، تُفخَّم في كل أحوالها، وتجمعها عبارة **«خُصَّ ضَغْطٍ قِظْ»**.', 'These seven **elevated letters** are always heavy. They are gathered in **«خص ضغط قظ»**.'),
    ex=[E(1, 6, 'الصراط', 'tafkheem'), E(98, 8, 'خالدين', 'tafkheem'), E(86, 1, 'والطارق', 'tafkheem')]),
  C('🐣', ('حروف مرقّقة دائمًا', 'Always Light'), line=('أكثر الحروف', 'Most letters'),
    x=('باقي الحروف **مرقّقة دائمًا**، ما عدا ثلاثة تُفخَّم أحيانًا وتُرقَّق أحيانًا: **اللام في لفظ الجلالة، والألف المدّية، والراء**. نتعلّمها في الدروس القادمة.\n\n⚠️ انتبه أن تبقى الحروف المرققة خفيفة حتى لو جاءت بجوار حرف مفخّم.', 'All other letters are **always light**, except three that are sometimes heavy and sometimes light: **the laam in "Allah", the madd alif, and raa**. We learn them in the next lessons.\n\n⚠️ Keep light letters light even next to a heavy letter.'),
    ex=[E(1, 1, 'بسم', 'tarqeeq'), E(112, 3, 'يلد', 'tarqeeq')]),
 ],
 ex=[
  dict(t='letters', p=('لوّن الحروف المفخّمة دائمًا', 'Colour the always-heavy letters'), all=ALL_LETTERS, ok='خ ص ض غ ط ق ظ'),
  dict(t='sort', buckets=[('مفخّم', 'Heavy', '#B45309'), ('مرقّق', 'Light', '#0EA5E9')],
    items=[dict(b=0, x=('ص', 'ص')), dict(b=0, x=('ق', 'ق')), dict(b=0, x=('ط', 'ط')), dict(b=1, x=('س', 'س')), dict(b=1, x=('ك', 'ك')), dict(b=1, x=('ت', 'ت')), dict(b=0, x=('ظ', 'ظ')), dict(b=1, x=('د', 'د'))]),
  dict(t='tf', items=[
    ('حروف الاستعلاء سبعة تجمعها «خص ضغط قظ».', 'The seven elevated letters are «خص ضغط قظ».', True),
    ('السين حرف مفخّم.', 'Seen is a heavy letter.', False, ('السين مرققة دائمًا، والصاد هي المفخّمة.', 'Seen is always light; saad is the heavy one.')),
    ('الراء تُفخّم أحيانًا وتُرقّق أحيانًا.', 'Raa is sometimes heavy, sometimes light.', True)]),
 ]),
# 2 ---------------------------------------------------------------
dict(icon='✨', title=('اللام في لفظ الجلالة', 'The Laam in "Allah"'),
 sub=('متى نفخّمها ومتى نرقّقها؟', 'When is it heavy, and when light?'),
 cards=[
  C('✨', ('لام لفظ الجلالة', 'The Laam of "Allah"'), line=('تتبع الحركة التي قبلها', 'It follows the vowel before it'),
    x=('اللام في القرآن **مرقّقة دائمًا**، إلا اللام في **لفظ الجلالة «الله»** فهي تُفخَّم أو تُرقَّق حسب **الحركة التي قبلها**.', 'Laam is **always light** in the Qur\'an, except the laam in the word **"Allah"**, which is heavy or light depending on **the vowel before it**.')),
  C('🏔️', ('تُفخَّم', 'Heavy'), line=('بعد الفتح أو الضم، وفي البداية', 'After fatha or damma, or at the start'),
    lst=[('إذا كان قبلها **فتح**.', 'If a **fatha** comes before it.'), ('إذا كان قبلها **ضم**.', 'If a **damma** comes before it.'), ('إذا **بدأنا** بها القراءة.', 'If we **start** reading with it.')],
    ex=[E(112, 1, 'هو الله', 'tafkheem'), E(112, 2, 'الله', 'tafkheem'), E(110, 1, 'نصر الله', 'tafkheem')]),
  C('🌸', ('تُرقَّق', 'Light'), line=('بعد الكسر', 'After kasra'),
    x=('إذا كان قبلها **كسر** رقّقناها.', 'If a **kasra** comes before it, it is light.'),
    ex=[E(1, 1, 'بسم الله', 'tarqeeq'), E(1, 2, 'لله', 'tarqeeq')]),
 ],
 ex=[
  dict(t='sort', buckets=[('لام مفخّمة', 'Heavy laam', '#B45309'), ('لام مرقّقة', 'Light laam', '#0EA5E9')],
    items=[dict(b=0, s=112, a=1, hl='هو الله'), dict(b=0, s=110, a=1, hl='نصر الله'), dict(b=1, s=1, a=1, hl='بسم الله'), dict(b=1, s=1, a=2, hl='لله'), dict(b=0, s=112, a=2, hl='الله')]),
  dict(t='mcq', items=[
    dict(q=('اللام في الموضع الملوّن:', 'The laam in the coloured part is:'), ex=E(110, 1, 'نصر الله'), o=[('مفخّمة', 'Heavy'), ('مرقّقة', 'Light')]),
    dict(q=('اللام في الموضع الملوّن:', 'The laam in the coloured part is:'), ex=E(1, 1, 'بسم الله'), o=[('مرقّقة', 'Light'), ('مفخّمة', 'Heavy')]),
    dict(q=('تُرقّق لام لفظ الجلالة إذا كان قبلها:', 'The laam of "Allah" is light after a:'), o=[('كسر', 'Kasra'), ('فتح', 'Fatha'), ('ضم', 'Damma')])]),
 ]),
# 3 ---------------------------------------------------------------
dict(icon='🪞', title=('تفخيم الألف وترقيقها', 'The Madd Alif: Heavy or Light'),
 sub=('الألف مثل المرآة: تتبع ما قبلها', 'The alif is like a mirror: it copies the letter before it'),
 cards=[
  C('🪞', ('الألف تتبع ما قبلها', 'Alif Copies the Letter Before'), line=('لا تُوصف بتفخيم ولا ترقيق', 'It has no weight of its own'),
    x=('**الألف المدّية** لا تُوصف بتفخيم ولا ترقيق، بل **تتبع الحرف الذي قبلها**: إن كان مفخّمًا فُخِّمت، وإن كان مرقّقًا رُقِّقت.', 'The **madd alif** has no heaviness of its own: it **follows the letter before it**. After a heavy letter it is heavy; after a light letter it is light.')),
  C('🏔️', ('ألف مفخّمة', 'Heavy Alif'), line=('بعد حرف مفخّم', 'After a heavy letter'),
    ex=[E(1, 7, 'الضالين', 'tafkheem'), E(2, 33, 'قال', 'tafkheem'), E(98, 8, 'خالدين', 'tafkheem')]),
  C('🌸', ('ألف مرقّقة', 'Light Alif'), line=('بعد حرف مرقّق', 'After a light letter'),
    ex=[E(1, 4, 'مالك', 'tarqeeq'), E(1, 2, 'العالمين', 'tarqeeq')]),
 ],
 ex=[
  dict(t='sort', buckets=[('ألف مفخّمة', 'Heavy alif', '#B45309'), ('ألف مرقّقة', 'Light alif', '#0EA5E9')],
    items=[dict(b=0, s=1, a=7, hl='الضالين'), dict(b=0, s=2, a=33, hl='قال'), dict(b=1, s=1, a=4, hl='مالك'), dict(b=1, s=1, a=2, hl='العالمين'), dict(b=0, s=98, a=8, hl='خالدين')]),
  dict(t='tf', items=[('الألف تتبع الحرف الذي قبلها.', 'The alif follows the letter before it.', True), ('الألف مفخّمة دائمًا.', 'The alif is always heavy.', False)]),
 ]),
# 4 ---------------------------------------------------------------
dict(icon='🦁', title=('تفخيم الراء', 'When Raa Is Heavy'),
 sub=('مواضع تفخيم الراء', 'The places where raa is heavy'),
 cards=[
  C('🦁', ('الراء المتحركة', 'Voweled Raa'), line=('مفتوحة أو مضمومة', 'With fatha or damma'),
    x=('تُفخَّم الراء إذا كانت **مفتوحة** أو **مضمومة**.', 'Raa is heavy when it has a **fatha** or a **damma**.'),
    ex=[E(1, 2, 'رب', 'tafkheem'), E(96, 1, 'ربك', 'tafkheem'), E(2, 5, 'ربهم', 'tafkheem')]),
  C('🎯', ('الراء الساكنة بعد فتح أو ضم', 'Silent Raa after Fatha or Damma'), line=('رْ قبلها ـَ أو ـُ', 'رْ after ـَ or ـُ'),
    ex=[E(73, 4, 'القران', 'tafkheem'), E(19, 16, 'مريم', 'tafkheem')]),
  C('🚪', ('بعد همزة الوصل', 'After a Connecting Hamza'), line=('كسر عارض', 'A temporary kasra'),
    x=('إذا كانت الراء ساكنة وقبلها **همزة وصل** مكسورة عند البدء، فُخِّمت، لأن الكسر **عارض** وليس أصليًا.', 'A silent raa after a **connecting hamza** (said with kasra when starting) is heavy, because that kasra is **temporary**.'),
    ex=[E(89, 28, 'ارجعي', 'tafkheem')]),
  C('🧱', ('بعد كسر وقبل حرف استعلاء', 'After Kasra, before an Elevated Letter'), line=('مثل: مِرْصادا', 'Like: مرصادا'),
    x=('إذا كانت الراء ساكنة بعد كسر أصلي، وجاء بعدها **حرف استعلاء** في نفس الكلمة، فُخِّمت.', 'A silent raa after an original kasra is heavy if an **elevated letter** follows it in the same word.'),
    ex=[E(78, 21, 'مرصادا', 'tafkheem')]),
  C('🛑', ('عند الوقف', 'When Stopping'), line=('ساكن قبلها فتح أو ضم', 'A silent letter before it, then fatha or damma'),
    x=('إذا وقفنا على الراء وقبلها حرف ساكن، وقبل الساكن **فتح أو ضم**، فُخِّمت.', 'When we stop on raa with a silent letter before it, and **fatha or damma** before that, it is heavy.'),
    ex=[E(103, 1, 'والعصر', 'tafkheem'), E(97, 1, 'القدر', 'tafkheem')]),
 ],
 ex=[
  dict(t='tapword', p=('اضغط على الكلمة التي فيها راء مفخّمة', 'Tap the word with a heavy raa'), items=[E(96, 1, 'ربك'), E(73, 4, 'القران'), E(78, 21, 'مرصادا'), E(89, 28, 'ارجعي')]),
  dict(t='tf', items=[
    ('الراء المضمومة تُفخّم.', 'A raa with damma is heavy.', True),
    ('الراء بعد همزة الوصل تُرقّق.', 'Raa after a connecting hamza is light.', False, ('تُفخّم لأن الكسر عارض.', 'It is heavy because the kasra is temporary.')),
    ('الراء الساكنة بعد فتح تُفخّم.', 'A silent raa after fatha is heavy.', True)]),
 ]),
# 5 ---------------------------------------------------------------
dict(icon='🐰', title=('ترقيق الراء', 'When Raa Is Light'),
 sub=('مواضع ترقيق الراء', 'The places where raa is light'),
 cards=[
  C('🐰', ('الراء المكسورة', 'Raa with Kasra'), line=('رِ', 'رِ'),
    x=('تُرقَّق الراء إذا كانت **مكسورة** في أول الكلمة أو وسطها أو آخرها (عند الوصل).', 'Raa is light when it has a **kasra**, at the start, middle or end of a word (when continuing).'),
    ex=[E(33, 23, 'رجال', 'tarqeeq'), E(1, 7, 'غير', 'tarqeeq')]),
  C('🌙', ('الراء الساكنة بعد كسر أصلي', 'Silent Raa after an Original Kasra'), line=('وليس بعدها حرف استعلاء', 'With no elevated letter after it'),
    ex=[E(73, 16, 'فرعون', 'tarqeeq')]),
  C('🛑', ('عند الوقف', 'When Stopping'), line=('قبلها ياء ساكنة أو كسر', 'After a silent yaa, or a kasra'),
    lst=[('إذا وقفنا على الراء وقبلها **ياء ساكنة**.', 'When we stop on raa after a **silent yaa**.'),
         ('إذا وقفنا عليها وقبلها ساكن، وقبل الساكن **كسر**.', 'When we stop on it with a silent letter before it, and a **kasra** before that.')],
    ex=[E(67, 1, 'قدير', 'tarqeeq'), E(100, 11, 'لخبير', 'tarqeeq'), E(89, 5, 'حجر', 'tarqeeq')]),
 ],
 ex=[
  dict(t='sort', buckets=[('راء مفخّمة', 'Heavy raa', '#B45309'), ('راء مرقّقة', 'Light raa', '#0EA5E9')],
    items=[dict(b=0, s=96, a=1, hl='ربك'), dict(b=1, s=33, a=23, hl='رجال'), dict(b=0, s=19, a=16, hl='مريم'), dict(b=1, s=73, a=16, hl='فرعون'), dict(b=1, s=67, a=1, hl='قدير'), dict(b=0, s=103, a=1, hl='والعصر')]),
  dict(t='mcq', items=[
    dict(q=('الراء في الموضع الملوّن:', 'The raa in the coloured part is:'), ex=E(33, 23, 'رجال'), o=[('مرقّقة', 'Light'), ('مفخّمة', 'Heavy')]),
    dict(q=('الراء في الموضع الملوّن (عند الوقف):', 'The raa in the coloured part (when stopping):'), ex=E(67, 1, 'قدير'), o=[('مرقّقة', 'Light'), ('مفخّمة', 'Heavy')])]),
 ]),
# 6 ---------------------------------------------------------------
dict(icon='〰️', title=('المد الطبيعي والألفات السبع', 'Natural Madd and the Seven Alifs'),
 sub=('حروف المد الثلاثة', 'The three madd letters'),
 cards=[
  C('〰️', ('ما هو المد؟', 'What Is Madd?'), line=('إطالة الصوت', 'Stretching the sound'),
    x=('**المد** إطالة الصوت بحرف من **حروف المد** الثلاثة: **الألف والواو والياء**.', '**Madd** means stretching the sound with one of the three **madd letters**: **alif, waw and yaa**.'),
    big='ا و ي'),
  C('🌊', ('المد الطبيعي', 'Natural Madd'), line=('حركتان', 'Two counts'),
    lst=[('**ألف** ساكنة قبلها **فتح**.', 'A silent **alif** after a **fatha**.'),
         ('**واو** ساكنة قبلها **ضم**.', 'A silent **waw** after a **damma**.'),
         ('**ياء** ساكنة قبلها **كسر**.', 'A silent **yaa** after a **kasra**.')],
    x=('نمدّه **حركتين** فقط، ولا يأتي بعده همز ولا سكون.', 'We stretch it **two counts** only; no hamza or sukoon comes after it.'),
    ex=[E(1, 4, 'مالك', 'madd_t'), E(112, 3, 'يولد', 'madd_t'), E(1, 4, 'الدين', 'madd_t')]),
  C('7️⃣', ('الألفات السبع', 'The Seven Alifs'), line=('تُكتب ولا تُقرأ عند الوصل', 'Written, but silent when continuing'),
    x=('سبع كلمات في القرآن فيها ألف **تُحذف عند الوصل** و**تثبت عند الوقف**: «أنا»، و«لكنّا»، و«الظنونا»، و«الرسولا»، و«السبيلا»، و«قواريرا» الأولى، و«سلاسلا».', 'Seven words in the Qur\'an have an alif that is **dropped when continuing** and **said when stopping**: ana, lakinna, adh-dhununa, ar-rasula, as-sabila, the first qawarira, and salasila.'),
    ex=[E(18, 38, 'لكنا', 'alif7'), E(33, 10, 'الظنونا', 'alif7'), E(76, 4, 'سلاسلا', 'alif7')]),
 ],
 ex=[
  dict(t='tapword', p=('اضغط على الكلمة التي فيها مد طبيعي', 'Tap the word with a natural madd'), items=[E(1, 4, 'مالك'), E(112, 3, 'يولد'), E(1, 4, 'الدين')]),
  dict(t='mcq', items=[
    dict(q=('مقدار المد الطبيعي:', 'The length of natural madd:'), o=[('حركتان', 'Two counts'), ('أربع حركات', 'Four counts'), ('ست حركات', 'Six counts')]),
    dict(q=('حرف المد في الكلمة الملوّنة:', 'The madd letter in the coloured word:'), ex=E(112, 3, 'يولد', 'madd_t'), o=[('الواو', 'Waw'), ('الألف', 'Alif'), ('الياء', 'Yaa')])]),
  dict(t='tf', items=[('حروف المد ثلاثة: الألف والواو والياء.', 'There are three madd letters: alif, waw and yaa.', True), ('الواو الساكنة بعد الفتح حرف مد.', 'A silent waw after fatha is a madd letter.', False, ('حرف المد واو ساكنة قبلها ضم.', 'The madd waw comes after a damma.'))]),
 ]),
# 7 ---------------------------------------------------------------
dict(icon='🔁', title=('مد العوض ومد البدل', 'Madd Al-Iwad and Madd Al-Badal'),
 sub=('مدّان مقدار كل منهما حركتان', 'Two madds, each two counts'),
 cards=[
  C('🔁', ('مد العوض', 'Madd Al-Iwad'), line=('ـًا عند الوقف تصبح ألفًا', 'Tanween fatha becomes an alif when stopping'),
    x=('إذا **وقفنا** على كلمة آخرها **تنوين فتح**، نحذف التنوين ونمدّ بدلًا منه **ألفًا** بمقدار **حركتين**. سُمّي **عوضًا** لأن الألف عوض عن التنوين.', 'When we **stop** on a word ending in **tanween fatha**, we drop the tanween and say an **alif** for **two counts** instead. It is called **iwad** (replacement) because the alif replaces the tanween.'),
    ex=[E(100, 1, 'ضبحا', 'madd_iwad'), E(100, 3, 'صبحا', 'madd_iwad'), E(73, 4, 'ترتيلا', 'madd_iwad')]),
  C('🔄', ('مد البدل', 'Madd Al-Badal'), line=('همزة ثم حرف مد', 'Hamza, then a madd letter'),
    x=('إذا جاءت **الهمزة قبل حرف المد** في كلمة واحدة، فهو **مد البدل**، ونمدّه **حركتين**.', 'When a **hamza comes before a madd letter** in the same word, it is **madd al-badal**, stretched **two counts**.'),
    ex=[E(95, 6, 'امنوا', 'madd_badal'), E(98, 4, 'اوتوا', 'madd_badal'), E(106, 2, 'ايلافهم|الافهم', 'madd_badal')]),
 ],
 ex=[
  dict(t='sort', buckets=['madd_iwad', 'madd_badal'],
    items=[dict(b=0, s=100, a=1, hl='ضبحا'), dict(b=0, s=100, a=3, hl='صبحا'), dict(b=1, s=95, a=6, hl='امنوا'), dict(b=1, s=106, a=2, hl='ايلافهم|الافهم'), dict(b=0, s=73, a=4, hl='ترتيلا'), dict(b=1, s=98, a=4, hl='اوتوا')]),
  dict(t='tf', items=[('مد العوض يكون عند الوقف على تنوين الفتح.', 'Madd al-iwad happens when stopping on tanween fatha.', True), ('في مد البدل تأتي الهمزة بعد حرف المد.', 'In madd al-badal the hamza comes after the madd letter.', False, ('بل قبله.', 'No: before it.'))]),
 ]),
# 8 ---------------------------------------------------------------
dict(icon='🔗', title=('المد المتصل والمنفصل', 'Connected and Separated Madd'),
 sub=('حرف مد بعده همزة', 'A madd letter followed by a hamza'),
 cards=[
  C('🔗', ('المد المتصل', 'Connected Madd'), line=('في كلمة واحدة', 'In one word'),
    x=('إذا جاء **حرف المد ثم الهمزة في كلمة واحدة** فهو **مد متصل واجب**، نمدّه **٤ أو ٥ حركات**.', 'When a **madd letter and then a hamza are in the same word**, it is the **obligatory connected madd**, stretched **4 or 5 counts**.'),
    ex=[E(110, 1, 'جاء', 'madd_muttasil'), E(86, 1, 'والسماء', 'madd_muttasil')]),
  C('✂️', ('المد المنفصل', 'Separated Madd'), line=('في كلمتين', 'Across two words'),
    x=('إذا جاء **حرف المد في آخر كلمة** و**الهمزة في أول الكلمة التي بعدها** فهو **مد منفصل جائز**، نمدّه **٤ أو ٥ حركات** في القراءة التي نتعلّمها.', 'When the **madd letter ends one word** and the **hamza starts the next**, it is the **permissible separated madd**, stretched **4 or 5 counts** in the reading we learn.'),
    ex=[E(108, 1, 'انا اعطيناك', 'madd_munfasil'), E(109, 1, 'يايها|يا ايها', 'madd_munfasil')]),
 ],
 ex=[
  dict(t='sort', buckets=['madd_muttasil', 'madd_munfasil'],
    items=[dict(b=0, s=110, a=1, hl='جاء'), dict(b=0, s=86, a=1, hl='والسماء'), dict(b=1, s=108, a=1, hl='انا اعطيناك'), dict(b=1, s=109, a=1, hl='يايها|يا ايها')]),
  dict(t='mcq', items=[
    dict(q=('ما نوع المد في الموضع الملوّن؟', 'Which madd is in the coloured part?'), ex=E(110, 1, 'جاء'), o=['madd_muttasil', 'madd_munfasil', 'madd_t']),
    dict(q=('ما نوع المد في الموضع الملوّن؟', 'Which madd is in the coloured part?'), ex=E(109, 1, 'يايها|يا ايها'), o=['madd_munfasil', 'madd_muttasil', 'madd_badal'])]),
 ]),
# 9 ---------------------------------------------------------------
dict(icon='🎀', title=('مد الصلة الصغرى والكبرى', 'Madd As-Silah (Minor and Major)'),
 sub=('هاء الضمير الممدودة', 'The stretched pronoun haa'),
 cards=[
  C('🎀', ('مد الصلة', 'Madd As-Silah'), line=('هاء بين حرفين متحركين', 'A haa between two voweled letters'),
    x=('**هاء الضمير** للمفرد المذكر الغائب (ـهُ، ـهِ) إذا جاءت **بين حرفين متحركين**، نصلها بواو صغيرة إن كانت مضمومة، وبياء صغيرة إن كانت مكسورة.', 'The **pronoun haa** ("his/him") that sits **between two voweled letters** is joined with a small waw if it has damma, or a small yaa if it has kasra.')),
  C('🔹', ('الصلة الصغرى', 'Minor Silah'), line=('ليس بعدها همزة', 'No hamza after it'),
    x=('إذا **لم يأتِ بعدها همزة** نمدّها **حركتين**.', 'If **no hamza** follows, we stretch it **two counts**.'),
    ex=[E(100, 7, 'وانه علي', 'sila_s'), E(100, 8, 'وانه لحب', 'sila_s')]),
  C('🔷', ('الصلة الكبرى', 'Major Silah'), line=('بعدها همزة', 'A hamza after it'),
    x=('إذا **جاء بعدها همزة** نمدّها **٤ أو ٥ حركات** مثل المد المنفصل.', 'If a **hamza** follows, we stretch it **4 or 5 counts**, like the separated madd.'),
    ex=[E(104, 3, 'ماله اخلده', 'sila_k'), E(90, 7, 'يره احد', 'sila_k')]),
  C('🛑', ('عند الوقف', 'When Stopping'), line=('لا صلة', 'No silah'),
    x=('إذا **وقفنا** على الهاء نسكّنها ولا نمدّها.', 'When we **stop** on the haa, we make it silent and do not stretch it.')),
 ],
 ex=[
  dict(t='sort', buckets=['sila_s', 'sila_k'],
    items=[dict(b=0, s=100, a=7, hl='وانه علي'), dict(b=0, s=100, a=8, hl='وانه لحب'), dict(b=1, s=104, a=3, hl='ماله اخلده'), dict(b=1, s=90, a=7, hl='يره احد')]),
  dict(t='tf', items=[('الصلة الكبرى يأتي بعدها همزة.', 'Major silah is followed by a hamza.', True), ('نمدّ هاء الصلة عند الوقف.', 'We stretch the silah haa when stopping.', False)]),
 ]),
# 10 --------------------------------------------------------------
dict(icon='⏸️', title=('المد العارض للسكون ومد اللين', 'Madd Arid and Madd Al-Leen'),
 sub=('مدود تظهر عند الوقف', 'Madds that appear when we stop'),
 cards=[
  C('⏸️', ('المد العارض للسكون', 'Madd Arid Lis-Sukoon'), line=('حرف مد ثم وقف', 'A madd letter, then a stop'),
    x=('إذا جاء بعد حرف المد حرف **سكّنّاه بسبب الوقف**، فهو **مد عارض للسكون**. يجوز مدّه **٢ أو ٤ أو ٦ حركات**، ونلتزم مقدارًا واحدًا في القراءة كلها.', 'When a letter after a madd letter becomes **silent because we stop**, it is **madd arid**. It may be **2, 4 or 6 counts**; we keep one length throughout.'),
    ex=[E(1, 2, 'العالمين', 'madd_arid'), E(1, 3, 'الرحيم', 'madd_arid'), E(1, 4, 'الدين', 'madd_arid')]),
  C('🍃', ('مد اللين', 'Madd Al-Leen'), line=('وْ أو يْ بعد فتح، ثم وقف', 'Silent waw or yaa after fatha, then a stop'),
    x=('**حرفا اللين**: الواو والياء **الساكنتان بعد فتح**. إذا وقفنا على حرف بعدهما فهو **مد لين**، يجوز **٢ أو ٤ أو ٦ حركات**.', 'The **leen letters** are waw and yaa **silent after a fatha**. If we stop on the letter after them, it is **madd al-leen**: **2, 4 or 6 counts**.'),
    ex=[E(106, 1, 'قريش', 'madd_leen'), E(106, 4, 'خوف', 'madd_leen'), E(106, 3, 'البيت', 'madd_leen')]),
 ],
 ex=[
  dict(t='sort', buckets=['madd_arid', 'madd_leen'],
    items=[dict(b=0, s=1, a=2, hl='العالمين'), dict(b=0, s=1, a=3, hl='الرحيم'), dict(b=1, s=106, a=1, hl='قريش'), dict(b=1, s=106, a=4, hl='خوف'), dict(b=1, s=106, a=3, hl='البيت'), dict(b=0, s=1, a=4, hl='الدين')]),
  dict(t='mcq', items=[dict(q=('يجوز في المد العارض للسكون:', 'Madd arid may be:'), o=[('٢ أو ٤ أو ٦ حركات', '2, 4 or 6 counts'), ('حركتان فقط', 'Only 2 counts'), ('٥ حركات فقط', 'Only 5 counts')])]),
 ]),
# 11 --------------------------------------------------------------
dict(icon='🔒', title=('المد اللازم والحروف المقطعة', 'Madd Lazim and the Opening Letters'),
 sub=('أطول مد: ست حركات', 'The longest madd: six counts'),
 cards=[
  C('🔒', ('المد اللازم', 'Madd Lazim'), line=('سكون أصلي بعد حرف المد', 'An original sukoon after the madd letter'),
    x=('إذا جاء بعد حرف المد **سكون أصلي** ثابت في الوصل والوقف، فهو **مد لازم**، نمدّه **ست حركات** دائمًا.', 'When an **original sukoon** (kept whether we stop or continue) follows a madd letter, it is **madd lazim**, always **six counts**.')),
  C('🏰', ('اللازم الكلمي المثقّل', 'Heavy Word Lazim'), line=('بعد المد حرف مشدّد', 'A doubled letter after the madd'),
    ex=[E(69, 1, 'الحاقه', 'madd_lazim'), E(1, 7, 'الضالين', 'madd_lazim'), E(80, 33, 'الصاخه', 'madd_lazim')]),
  C('🪶', ('اللازم الكلمي المخفّف', 'Light Word Lazim'), line=('في كلمة «آلآن» فقط', 'Only in «آلآن»'),
    x=('بعد المد حرف ساكن غير مشدّد، ويأتي في القرآن في موضعين فقط من سورة يونس.', 'A silent, non-doubled letter after the madd; it appears only twice in the Qur\'an, both in Surat Yunus.'),
    ex=[E(10, 91, 'الان', 'madd_lazim')]),
  C('🔠', ('الحروف المقطّعة', 'The Opening Letters'), line=('في أوائل بعض السور', 'At the start of some surahs'),
    lst=[('**تُمدّ ست حركات:** حروف «نَقَصَ عَسَلُكُمْ»: ن ق ص ع س ل ك م (وفي العين يجوز ٤ أو ٦).', '**Six counts:** the letters of «نقص عسلكم» (ain may be 4 or 6).'),
         ('**تُمدّ حركتين:** حروف «حَيٌّ طَهُرَ»: ح ي ط هـ ر.', '**Two counts:** the letters of «حي طهر».'),
         ('**لا تُمدّ:** الألف.', '**Not stretched:** alif.')],
    ex=[E(2, 1, 'الم', 'madd_lazim'), E(50, 1, 'ق', 'madd_lazim'), E(20, 1, 'طه', 'madd_t'), E(19, 1, 'كهيعص', 'madd_lazim')]),
 ],
 ex=[
  dict(t='letters', p=('لوّن حروف «نقص عسلكم» التي تُمدّ ست حركات', 'Colour the letters of «نقص عسلكم» (six counts)'), all='ن ق ص ع س ل ك م ح ي ط هـ ر ا', ok='ن ق ص ع س ل ك م'),
  dict(t='mcq', items=[
    dict(q=('مقدار المد اللازم:', 'The length of madd lazim:'), o=[('ست حركات', 'Six counts'), ('حركتان', 'Two counts'), ('أربع حركات', 'Four counts')]),
    dict(q=('ما نوع المد في الكلمة الملوّنة؟', 'Which madd is in the coloured word?'), ex=E(69, 1, 'الحاقه'), o=['madd_lazim', 'madd_muttasil', 'madd_t'])]),
 ]),
# 12 --------------------------------------------------------------
dict(icon='🎯', title=('إتمام الحركات', 'Completing the Vowels'),
 sub=('نعطي كل حركة حقها', 'Giving every vowel its full right'),
 cards=[
  C('🎯', ('ما معنى إتمام الحركات؟', 'What Does It Mean?'), line=('حركة كاملة واضحة', 'A full, clear vowel'),
    x=('أن ننطق كل **فتحة وضمة وكسرة** كاملة واضحة، فلا نختصرها ولا نخلطها بغيرها.', 'Saying every **fatha, damma and kasra** fully and clearly, without cutting it short or mixing it with another vowel.')),
  C('😮', ('الفتحة · الضمة · الكسرة', 'Fatha · Damma · Kasra'), line=('الفم يتحرّك مع الحركة', 'The mouth moves with the vowel'),
    lst=[('**الفتحة:** نفتح الفم.', '**Fatha:** open the mouth.'), ('**الضمة:** نضمّ الشفتين للأمام.', '**Damma:** round the lips forward.'), ('**الكسرة:** نخفض الفك السفلي.', '**Kasra:** lower the jaw.')],
    ex=[E(1, 2, 'الحمد لله رب العالمين')]),
  C('⚠️', ('أخطاء نتجنّبها', 'Mistakes to Avoid'), line=('لا نختلس ولا نمطّ', 'No cutting, no stretching'),
    lst=[('اختلاس الحركة (نطقها ناقصة).', 'Swallowing the vowel (saying it too short).'), ('مطّ الحركة حتى تصير حرف مد.', 'Stretching a vowel until it becomes a madd letter.'), ('خلط الفتحة بالكسرة أو بالضمة.', 'Mixing fatha with kasra or damma.')]),
 ],
 ex=[
  dict(t='mcq', items=[
    dict(q=('عند نطق الضمة:', 'When saying a damma we:'), o=[('نضمّ الشفتين', 'Round the lips'), ('نفتح الفم', 'Open the mouth'), ('نخفض الفك', 'Lower the jaw')]),
    dict(q=('عند نطق الكسرة:', 'When saying a kasra we:'), o=[('نخفض الفك', 'Lower the jaw'), ('نضمّ الشفتين', 'Round the lips'), ('نغلق الفم', 'Close the mouth')])]),
  dict(t='tf', items=[('مطّ الحركة حتى تصير حرف مد خطأ.', 'Stretching a vowel into a madd letter is a mistake.', True), ('نختصر الحركات لنقرأ بسرعة.', 'We shorten vowels to read faster.', False)]),
 ]),
]

LESSONS[0]['mouth'] = ['adna', 'q', 'd', 'szs', 'tdt', 'zdt']
LESSONS[5]['mouth'] = ['jawf']
