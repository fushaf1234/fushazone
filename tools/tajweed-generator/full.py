# التجويد الكامل (رواية حفص من طريق الشاطبية) — بنفس ترتيب «علم التجويد المصور»، بشرح أصلي
from kids1 import E, C, ALL_LETTERS
import kids1, kids2, short

K1 = kids1.LESSONS; K2 = kids2.LESSONS; S = short.LESSONS

LESSONS = [
# 1 ---------------------------------------------------------------
dict(icon='📖', title=('التجويد ومراتب القراءة', 'Tajweed and the Levels of Reading'),
 sub=('التعريف، والحكم، والمراتب، وتناسب زمن الحروف', 'Definition, ruling, levels, and proportional timing'),
 cards=K1[0]['cards'][:3] + [
  C('🪜', ('مراتب القراءة', 'The Levels of Reading'), line=('تحقيق · تدوير · حدر', 'Tahqeeq · Tadweer · Hadr'),
    lst=[('**التحقيق:** أبطأ المراتب، للتعليم والتدريب.', '**Tahqeeq:** the slowest, for teaching and practice.'),
         ('**التدوير:** وسط بين التحقيق والحدر.', '**Tadweer:** between tahqeeq and hadr.'),
         ('**الحدر:** أسرعها مع إتمام الأحكام.', '**Hadr:** the fastest, with all rules kept.'),
         ('**الترتيل** (تطبيق الأحكام بتمهّل وتدبّر) واجب في المراتب كلها، وهو أفضلها.', '**Tarteel** (applying the rules calmly with reflection) is required at every level and is the best.')]),
  C('⏱️', ('تناسب زمن الحروف', 'Proportional Timing'), line=('النسبة ثابتة في المرتبة الواحدة', 'Fixed proportions within one level'),
    x=('زمن الحرف في التحقيق أطول قليلًا منه في التدوير، وفي التدوير أطول قليلًا منه في الحدر. والمهم أن يتساوى في **المرتبة الواحدة** زمن الحرف المفتوح والمضموم والمكسور، وأن تتساوى المدود المتماثلة في القراءة كلها.', 'A letter takes a little longer in tahqeeq than in tadweer, and a little longer in tadweer than in hadr. Within **one level**, fatha, damma and kasra take equal time, and equal madds stay equal throughout.')),
 ],
 ex=K1[0]['ex']),
# 2 ---------------------------------------------------------------
dict(icon='🛡️', title=('الاستعاذة والبسملة', 'Isti\'adhah and Basmalah'),
 sub=('حكمهما وأوجه البدء', 'Their rulings and ways of starting'),
 cards=K1[2]['cards'], ex=K1[2]['ex']),
# 3 ---------------------------------------------------------------
dict(icon='🔔', title=('الغنة ومراتبها', 'Ghunnah and Its Degrees'),
 sub=('مواضع الغنة، ومراتبها، وأخطاؤها', 'Where it occurs, its degrees, and common mistakes'),
 cards=K1[3]['cards'][:3] + [
  C('📶', ('مراتب الغنة', 'Degrees of Ghunnah'), line=('من الأكمل إلى الأقل', 'From the fullest to the least'),
    lst=[('١. **المشدّد:** النون والميم المشدّدتان (نّ، مّ).', '1. **Doubled:** doubled noon and meem.'),
         ('٢. **المدغم:** الإدغام بغنة والإدغام الشفوي.', '2. **Merged:** idgham with ghunnah and idgham shafawi.'),
         ('٣. **المُخفى:** الإخفاء الحقيقي والشفوي والإقلاب.', '3. **Hidden:** ikhfa, ikhfa shafawi and iqlab.'),
         ('٤. **الساكن المُظهر:** مثل الإظهار الحلقي والشفوي.', '4. **Silent and clear:** as in izhar.'),
         ('٥. **المتحرك:** النون والميم المتحركتان.', '5. **Voweled:** noon and meem with a vowel.'),
         ('في الأولى والثانية والثالثة تُمدّ الغنة **حركتين**، وفي الرابعة والخامسة تكون **أصل الصفة** فقط.', 'In the first three the ghunnah lasts **two counts**; in the last two only its **basic trace** remains.')]),
  C('⚠️', ('أخطاء في نطق الغنة', 'Ghunnah Mistakes'), line=('انتبه لهذه الأخطاء', 'Watch out for these'),
    lst=[('إطالتها أكثر من حركتين أو تقصيرها.', 'Making it longer or shorter than two counts.'),
         ('مدّ الحرف الذي قبلها.', 'Stretching the letter before it.'),
         ('إظهار الغنة في الإدغام بغير غنة (اللام والراء).', 'Adding ghunnah in idgham without ghunnah (laam, raa).'),
         ('إخراج الغنة من الحلق أو الفم بدل الخيشوم.', 'Producing it from the throat or mouth instead of the nose.')]),
 ],
 ex=K1[3]['ex']),
# 4 ---------------------------------------------------------------
dict(icon='💗', title=('أحكام الميم الساكنة', 'Rules of the Silent Meem'), sub=K1[9]['sub'], cards=K1[9]['cards'], ex=K1[9]['ex']),
# 5 ---------------------------------------------------------------
dict(icon='🔵', title=('النون الساكنة والتنوين (١)', 'Silent Noon and Tanween (1)'),
 sub=('التعريف والإظهار والإدغام', 'Definition, izhar and idgham'),
 cards=K1[4]['cards'][:4] + K1[5]['cards'][:3] + K1[6]['cards'][:3] + [K1[6]['cards'][4]],
 ex=K1[5]['ex'][:2] + K1[6]['ex'][1:3]),
# 6 ---------------------------------------------------------------
dict(icon='🟠', title=('النون الساكنة والتنوين (٢)', 'Silent Noon and Tanween (2)'),
 sub=('الإقلاب والإخفاء الحقيقي', 'Iqlab and ikhfa haqiqi'),
 cards=K1[7]['cards'] + K1[8]['cards'],
 ex=[K1[7]['ex'][0]] + K1[8]['ex'][1:]),
# 7 ---------------------------------------------------------------
dict(icon='🌊', title=('المدود (١): المد الأصلي وما يلحق به', 'Madd (1): Natural Madd and Its Relatives'),
 sub=('الطبيعي، والعوض، والبدل، والصلة الصغرى، والألفات السبع', 'Natural, iwad, badal, minor silah, and the seven alifs'),
 cards=K2[5]['cards'] + K2[6]['cards'] + K2[8]['cards'][:2],
 ex=K2[5]['ex'][:2] + K2[6]['ex'][:1]),
# 8 ---------------------------------------------------------------
dict(icon='📏', title=('المدود (٢): المد الفرعي', 'Madd (2): Secondary Madds'),
 sub=('المتصل، والمنفصل، والصلة الكبرى، والعارض، واللين، واللازم', 'Connected, separated, major silah, arid, leen and lazim'),
 cards=S[4]['cards'] + [
  C('🧮', ('قاعدة أقوى السببين', 'The Stronger Cause'), line=('إذا اجتمع سببان', 'When two causes meet'),
    x=('أسباب المد بالترتيب من الأقوى: **اللازم**، ثم **المتصل**، ثم **العارض للسكون**، ثم **المنفصل**، ثم **البدل**. إذا اجتمع سببان في حرف مد واحد عُمل بالأقوى.\n\nمثال: إذا وقفنا على كلمة فيها مد متصل مثل «السماء»، يجوز ٤ أو ٥ أو ٦ حركات، ولا يجوز القصر.', 'Madd causes from strongest: **lazim**, then **connected**, then **arid**, then **separated**, then **badal**. When two meet on one madd letter, the stronger applies.\n\nExample: stopping on a connected madd like «السماء» allows 4, 5 or 6 counts, never 2.'),
    ex=[E(86, 1, 'والسماء', 'madd_muttasil')]),
 ],
 ex=S[4]['ex']),
# 9 ---------------------------------------------------------------
dict(icon='🚪', title=('الهمزة: همزة القطع وهمزة الوصل', 'Hamzat al-Qat\' and Hamzat al-Wasl'),
 sub=('متى تُنطق الهمزة، وكيف نبدأ بهمزة الوصل', 'When the hamza is said, and how to start with a wasl hamza'),
 cards=[
  C('🚪', ('همزة القطع', 'Hamzat al-Qat\''), line=('تُنطق دائمًا', 'Always pronounced'),
    x=('همزة تثبت في **البدء** وفي **الوصل**، وتُكتب على الألف غالبًا مع رأس عين صغيرة (أ، إ).', 'A hamza pronounced both **when starting** and **when continuing**; usually written with a small hamza sign on the alif (أ، إ).'),
    ex=[E(108, 1, 'اعطيناك')]),
  C('🌉', ('همزة الوصل', 'Hamzat al-Wasl'), line=('تُنطق في البدء وتسقط في الوصل', 'Said when starting, dropped when continuing'),
    x=('همزة زائدة نتوصّل بها إلى النطق بالساكن بعدها. **تُنطق عند البدء** بالكلمة، و**تسقط عند وصلها** بما قبلها. علامتها في المصحف صاد صغيرة فوق الألف (ٱ).', 'An extra hamza that lets us start on a silent letter. It is **said when we start** the word and **dropped when we join** it to the previous word. In the mushaf it is marked with a small saad over the alif (ٱ).')),
  C('🔀', ('حركة همزة الوصل في الأفعال', 'Its Vowel in Verbs'), line=('ننظر إلى الحرف الثالث', 'Look at the third letter'),
    lst=[('**تُضمّ** إذا كان ثالث الفعل **مضمومًا ضمًّا لازمًا**.', '**Damma** if the verb\'s third letter has an **original damma**.'),
         ('**تُكسر** إذا كان ثالثه **مفتوحًا أو مكسورًا**.', '**Kasra** if the third letter has a **fatha or kasra**.')],
    ex=[E(6, 24, 'انظر'), E(96, 1, 'اقرا'), E(1, 6, 'اهدنا')]),
  C('🔤', ('في الأسماء والحروف', 'In Nouns and Particles'), line=('فتح مع «ال»، وكسر في غيرها', 'Fatha with "al", kasra otherwise'),
    lst=[('**تُفتح** في «ال» التعريف.', '**Fatha** in the definite "al".'),
         ('**تُكسر** في الأسماء التي تبدأ بها، مثل: ابن، ابنة، امرؤ، امرأة، اثنان، اثنتان، اسم.', '**Kasra** in the nouns that begin with it, such as ibn, ibnah, imru\', imra\'ah, ithnan, ithnatan, ism.')],
    ex=[E(1, 2, 'الحمد')]),
 ],
 ex=[
  dict(t='mcq', items=[
    dict(q=('نبدأ بكلمة «انظر» بهمزة:', 'We start «انظر» with a hamza with:'), ex=E(6, 24, 'انظر'), o=[('مضمومة', 'Damma'), ('مكسورة', 'Kasra'), ('مفتوحة', 'Fatha')]),
    dict(q=('نبدأ بكلمة «اهدنا» بهمزة:', 'We start «اهدنا» with a hamza with:'), ex=E(1, 6, 'اهدنا'), o=[('مكسورة', 'Kasra'), ('مضمومة', 'Damma'), ('مفتوحة', 'Fatha')]),
    dict(q=('همزة «ال» التعريف عند البدء:', 'The hamza of "al" when starting is:'), o=[('مفتوحة', 'With fatha'), ('مكسورة', 'With kasra'), ('مضمومة', 'With damma')])]),
  dict(t='tf', items=[('همزة الوصل تسقط عند وصل الكلمة بما قبلها.', 'Hamzat al-wasl is dropped when joining to the previous word.', True), ('همزة القطع تسقط في الوصل.', 'Hamzat al-qat\' is dropped when continuing.', False)]),
 ]),
# 10 --------------------------------------------------------------
dict(icon='🚧', title=('التقاء الساكنين', 'Two Silent Letters Meeting'),
 sub=('كيف نتخلّص من التقاء ساكنين', 'How we handle two sukoons in a row'),
 cards=[
  C('🚧', ('ما هو التقاء الساكنين؟', 'What Is It?'), line=('ساكن بعده ساكن', 'A silent letter then another'),
    x=('أن يأتي حرفان ساكنان متتاليان. فإن كانا في **كلمة واحدة** والأول حرف مد، فهو المد اللازم أو العارض. وإن كانا في **كلمتين** تخلّصنا منه بإحدى طريقتين.', 'Two silent letters in a row. In **one word**, with a madd letter first, it is madd lazim or arid. **Across two words**, we resolve it in one of two ways.')),
  C('✂️', ('إذا كان الأول حرف مد', 'If the First Is a Madd Letter'), line=('يُحذف لفظًا', 'It is dropped in speech'),
    x=('يُحذف حرف المد في النطق ويبقى في الكتابة.', 'The madd letter is dropped in pronunciation but stays in writing.'),
    ex=[E(27, 15, 'وقالا الحمد')]),
  C('🔧', ('إذا كان الأول حرفًا صحيحًا', 'If the First Is a Regular Letter'), line=('نحرّكه بالكسر غالبًا', 'Usually given a kasra'),
    x=('نحرّك الساكن الأول بالكسر في الغالب، ومنه **التنوين** إذا جاء بعده ساكن فننطقه **نونًا مكسورة** تسمّى «نون الوصل».', 'We usually give the first silent letter a kasra. This includes **tanween** before a silent letter, said as a **noon with kasra** called "noon al-wasl".'),
    ex=[E(12, 31, 'وقالت اخرج'), E(11, 42, 'نوح ابنه')]),
 ],
 ex=[dict(t='tf', items=[
   ('إذا كان الساكن الأول حرف مد حُذف في النطق.', 'If the first silent letter is a madd letter it is dropped in speech.', True),
   ('التنوين قبل الساكن يُنطق نونًا مكسورة.', 'Tanween before a silent letter is said as a noon with kasra.', True),
   ('نحذف الساكن الثاني دائمًا.', 'We always drop the second silent letter.', False)])]),
# 11 --------------------------------------------------------------
dict(icon='🧲', title=('المتماثلان والمتجانسان والمتقاربان', 'Identical, Related and Close Letters'),
 sub=('متى يُدغم الحرف في الحرف الذي بعده', 'When a letter merges into the next one'),
 cards=[
  C('👯', ('المتماثلان', 'Identical Letters'), line=('اتفقا مخرجًا وصفة', 'Same makhraj, same qualities'),
    x=('حرفان متّحدان في المخرج والصفات (مثل باء وباء). إذا سكن الأول وتحرّك الثاني وجب **الإدغام** (إدغام مثلين صغير).', 'Two letters with the same makhraj and qualities (e.g. baa and baa). If the first is silent and the second voweled, they **must merge**.'),
    ex=[E(2, 60, 'اضرب بعصاك'), E(4, 78, 'يدرككم')]),
  C('🤝', ('المتجانسان', 'Related Letters'), line=('اتفقا مخرجًا واختلفا صفة', 'Same makhraj, different qualities'),
    lst=[('**ت ← د · د ← ت · ت ← ط:** إدغام كامل.', '**t→d, d→t, t→ṭ:** full merging.'), ('**ذ ← ظ · ث ← ذ · ب ← م:** إدغام كامل.', '**dh→ẓ, th→dh, b→m:** full merging.'),
         ('**ط ← ت:** إدغام ناقص تبقى معه صفة الإطباق.', '**ṭ→t:** partial merging; the heaviness of ṭaa remains.')],
    ex=[E(2, 256, 'قد تبين'), E(4, 64, 'اذ ظلموا'), E(11, 42, 'اركب معنا'), E(3, 122, 'همت طايفتان|همت طائفتان'), E(5, 28, 'بسطت')]),
  C('🧲', ('المتقاربان', 'Close Letters'), line=('تقاربا مخرجًا أو صفة', 'Close in makhraj or qualities'),
    lst=[('**ل ← ر:** إدغام، مثل «قل رب».', '**l→r:** merged, as in «قل رب».'), ('**ق ← ك:** في «ألم نخلقكم» إدغام كامل أو ناقص، والكامل أولى.', '**q→k:** in «ألم نخلقكم», full or partial merging (full is preferred).')],
    ex=[E(20, 114, 'وقل رب'), E(77, 20, 'نخلقكم')]),
 ],
 ex=[dict(t='mcq', items=[
   dict(q=('نوع الإدغام في الموضع الملوّن:', 'The type of merging in the coloured part:'), ex=E(2, 60, 'اضرب بعصاك'), o=[('متماثلان', 'Identical'), ('متجانسان', 'Related'), ('متقاربان', 'Close')]),
   dict(q=('نوع الإدغام في الموضع الملوّن:', 'The type of merging in the coloured part:'), ex=E(2, 256, 'قد تبين'), o=[('متجانسان', 'Related'), ('متماثلان', 'Identical'), ('متقاربان', 'Close')]),
   dict(q=('نوع الإدغام في الموضع الملوّن:', 'The type of merging in the coloured part:'), ex=E(20, 114, 'وقل رب'), o=[('متقاربان', 'Close'), ('متماثلان', 'Identical'), ('متجانسان', 'Related')]),
   dict(q=('الإدغام في «بسطت»:', 'The merging in «بسطت» is:'), ex=E(5, 28, 'بسطت'), o=[('ناقص تبقى معه صفة الطاء', 'Partial, keeping ṭaa\'s heaviness'), ('كامل', 'Full'), ('لا إدغام', 'No merging')])])]),
# 12 --------------------------------------------------------------
dict(icon='💥', title=('القلقلة', 'Qalqalah'), sub=K1[10]['sub'], cards=K1[10]['cards'], ex=K1[10]['ex']),
# 13 --------------------------------------------------------------
dict(icon='🌗', title=('اللامات', 'The Laams'), sub=('لام التعريف، ولام الفعل والحرف، ولام لفظ الجلالة', 'The definite laam, laam in verbs and particles, and the laam of "Allah"'),
 cards=S[2]['cards'] + K2[1]['cards'][1:], ex=S[2]['ex'] + K2[1]['ex'][:1]),
# 14 --------------------------------------------------------------
dict(icon='🦓', title=('الراء', 'Raa'), sub=('مواضع التفخيم والترقيق وجواز الوجهين', 'Heavy, light, and both allowed'),
 cards=K2[3]['cards'] + K2[4]['cards'] + [
  C('↔️', ('يجوز فيها الوجهان', 'Both Allowed'), line=('التفخيم أو الترقيق', 'Heavy or light'),
    x=('في كلمات قليلة يجوز التفخيم والترقيق، منها: **«فِرْقٍ»** في الشعراء عند الوصل، و**«مِصْرَ»** و**«القِطْرِ»** عند الوقف، و**«يَسْرِ»** و**«نُذُرِ»** و**«أَسْرِ»** عند الوقف.', 'In a few words both are allowed, such as **firq** in Ash-Shu\'ara (when continuing), and **misr, al-qitr, yasr, nudhur, asr** when stopping.')),
 ],
 ex=K2[4]['ex']),
# 15 --------------------------------------------------------------
dict(icon='⚖️', title=('التفخيم والترقيق ومراتبه', 'Tafkheem, Tarqeeq and Their Degrees'),
 sub=('الحروف المفخّمة والمرقّقة ومراتب التفخيم', 'Heavy and light letters, and degrees of heaviness'),
 cards=S[5]['cards'][:2] + K2[2]['cards'][1:] + [
  C('📶', ('مراتب التفخيم', 'Degrees of Tafkheem'), line=('خمس مراتب', 'Five degrees'),
    lst=[('١. المفتوح وبعده ألف (قال، طال).', '1. With fatha followed by alif.'), ('٢. المفتوح وليس بعده ألف.', '2. With fatha, no alif after.'),
         ('٣. المضموم.', '3. With damma.'), ('٤. الساكن.', '4. Silent.'), ('٥. المكسور (أقلّها تفخيمًا).', '5. With kasra (the least heavy).')],
    ex=[E(2, 33, 'قال', 'tafkheem')]),
 ],
 ex=S[5]['ex'] + K2[0]['ex'][:1]),
# 16 --------------------------------------------------------------
dict(icon='🗺️', title=('مخارج الحروف', 'The Points of Articulation'),
 sub=('خمسة مخارج عامة وسبعة عشر مخرجًا خاصًا', 'Five general areas and seventeen exact points'),
 cards=[
  C('🗺️', ('المخارج العامة', 'The General Areas'), line=('خمسة', 'Five'),
    lst=[('**الجوف:** حروف المد الثلاثة.', '**Al-Jawf (the open mouth space):** the three madd letters.'), ('**الحلق:** ستة أحرف.', '**The throat:** six letters.'),
         ('**اللسان:** ثمانية عشر حرفًا.', '**The tongue:** eighteen letters.'), ('**الشفتان:** أربعة أحرف.', '**The lips:** four letters.'), ('**الخيشوم:** الغنة.', '**The nasal passage:** the ghunnah.')]),
  C('🗣️', ('الحلق', 'The Throat'), line=('أقصاه · وسطه · أدناه', 'Deep · middle · near'),
    lst=[('**أقصى الحلق:** الهمزة والهاء.', '**Deepest throat:** hamza and haa.'), ('**وسط الحلق:** العين والحاء.', '**Mid throat:** ain and haa (ḥ).'), ('**أدنى الحلق:** الغين والخاء.', '**Upper throat:** ghain and khaa.')],
    letters='ء هـ ع ح غ خ'),
  C('👅', ('اللسان', 'The Tongue'), line=('عشرة مخارج', 'Ten points'),
    lst=[('**أقصى اللسان:** القاف (أبعد) ثم الكاف.', '**Back of the tongue:** qaaf (deeper), then kaaf.'),
         ('**وسط اللسان:** الجيم والشين والياء غير المدّية.', '**Middle:** jeem, sheen, and non-madd yaa.'),
         ('**حافة اللسان:** الضاد، ومن أدناها إلى طرفها اللام.', '**Sides:** daad; and from the front sides to the tip, laam.'),
         ('**طرف اللسان:** النون، والراء، ثم «ط د ت»، ثم «ص ز س»، ثم «ظ ذ ث».', '**Tip:** noon, raa, then ṭ d t, then ṣ z s, then ẓ dh th.')],
    letters='ق ك ج ش ي ض ل ن ر ط د ت ص ز س ظ ذ ث'),
  C('💋', ('الشفتان والجوف والخيشوم', 'Lips, Jawf and Nasal Passage'), line=('ف · ب م و · ا و ي', 'f · b m w · madd letters'),
    lst=[('**بطن الشفة السفلى مع أطراف الثنايا العليا:** الفاء.', '**Inner lower lip with the upper front teeth:** faa.'),
         ('**الشفتان معًا:** الباء والميم (بانطباق) والواو غير المدّية (بانفتاح).', '**Both lips:** baa and meem (closed) and non-madd waw (rounded).'),
         ('**الجوف:** الألف والواو والياء المدّيات.', '**Jawf:** the madd alif, waw and yaa.'), ('**الخيشوم:** الغنة.', '**Nasal passage:** the ghunnah.')],
    letters='ف ب م و'),
 ],
 ex=[
  dict(t='letters', p=('لوّن حروف الحلق', 'Colour the throat letters'), all=ALL_LETTERS, ok='ء هـ ع ح غ خ'),
  dict(t='letters', p=('لوّن الحروف التي تخرج من الشفتين', 'Colour the letters from the lips'), all=ALL_LETTERS, ok='ف ب م و'),
  dict(t='mcq', items=[
    dict(q=('مخرج القاف:', 'The makhraj of qaaf:'), o=[('أقصى اللسان', 'Back of the tongue'), ('وسط الحلق', 'Mid throat'), ('الشفتان', 'The lips')]),
    dict(q=('مخرج حروف المد:', 'The makhraj of the madd letters:'), o=[('الجوف', 'Al-Jawf'), ('الخيشوم', 'Nasal passage'), ('طرف اللسان', 'Tongue tip')]),
    dict(q=('العين والحاء تخرجان من:', 'Ain and ḥaa come from:'), o=[('وسط الحلق', 'Mid throat'), ('أقصى الحلق', 'Deepest throat'), ('أدنى الحلق', 'Upper throat')])]),
 ]),
# 17 --------------------------------------------------------------
dict(icon='🧬', title=('صفات الحروف', 'The Qualities of Letters'),
 sub=('صفات لها ضد، وصفات لا ضد لها', 'Paired qualities and single qualities'),
 cards=[
  C('🔊', ('الجهر والهمس', 'Jahr and Hams'), line=('انحباس النفَس أو جريانه', 'Breath held or flowing'),
    x=('**الهمس:** جريان النفَس مع الحرف، وحروفه «فحثّه شخص سكت». **الجهر:** انحباس النفَس، وهو في بقية الحروف.', '**Hams:** breath flows with the letter: «فحثه شخص سكت». **Jahr:** the breath is held — all other letters.'),
    letters='ف ح ث هـ ش خ ص س ك ت'),
  C('🧱', ('الشدة والتوسّط والرخاوة', 'Shiddah, Tawassut, Rakhawah'), line=('انحباس الصوت أو جريانه', 'Sound held, partly held, or flowing'),
    lst=[('**الشدة:** انحباس الصوت، حروفها «أجد قط بكت».', '**Shiddah:** the sound is held: «أجد قط بكت».'), ('**التوسّط:** بين الشدة والرخاوة، حروفه «لن عمر».', '**Tawassut:** in between: «لن عمر».'), ('**الرخاوة:** جريان الصوت، في بقية الحروف.', '**Rakhawah:** the sound flows — the rest.')]),
  C('⬆️', ('الاستعلاء والإطباق', 'Isti\'la and Itbaq'), line=('ارتفاع اللسان وانطباقه', 'The tongue rises, and closes'),
    lst=[('**الاستعلاء:** ارتفاع أقصى اللسان، حروفه «خص ضغط قظ»، وضده **الاستفال**.', '**Isti\'la:** the back of the tongue rises: «خص ضغط قظ». Opposite: **istifal**.'),
         ('**الإطباق:** انطباق اللسان على سقف الحلق، حروفه «ص ض ط ظ»، وضده **الانفتاح**.', '**Itbaq:** the tongue presses up to the palate: ص ض ط ظ. Opposite: **infitah**.'),
         ('**الإذلاق:** خفّة النطق في «فرّ من لُبّ»، وضده **الإصمات**.', '**Idhlaq:** easy, quick letters «فر من لب». Opposite: **ismat**.')]),
  C('✨', ('صفات لا ضد لها', 'Single Qualities'), line=('سبع صفات', 'Seven qualities'),
    lst=[('**الصفير:** ص ز س.', '**Safeer:** ص ز س.'), ('**القلقلة:** قطب جد.', '**Qalqalah:** قطب جد.'), ('**اللين:** الواو والياء الساكنتان بعد فتح.', '**Leen:** silent waw and yaa after fatha.'),
         ('**الانحراف:** اللام والراء.', '**Inhiraf:** laam and raa.'), ('**التكرير:** الراء (نتجنّب المبالغة فيه).', '**Takreer:** raa (we avoid overdoing it).'), ('**التفشي:** الشين.', '**Tafashshi:** sheen.'), ('**الاستطالة:** الضاد.', '**Istitalah:** daad.')]),
 ],
 ex=[
  dict(t='letters', p=('لوّن حروف الشدة «أجد قط بكت»', 'Colour the shiddah letters «أجد قط بكت»'), all=ALL_LETTERS, ok='ء ج د ق ط ب ك ت'),
  dict(t='letters', p=('لوّن حروف الإطباق', 'Colour the itbaq letters'), all=ALL_LETTERS, ok='ص ض ط ظ'),
  S[6]['ex'][1]]),
# 18 --------------------------------------------------------------
dict(icon='⏳', title=('أزمنة الحروف والسكتات', 'Letter Timing and the Pauses (Sakt)'),
 sub=('مقادير الأزمنة، وسكتات حفص الأربع', 'Lengths of time, and Hafs\'s four pauses'),
 cards=[
  C('⏳', ('مقادير الأزمنة', 'Lengths of Time'), line=('بالحركات', 'Measured in counts'),
    lst=[('**الحركة** (فتحة، ضمة، كسرة): زمن واحد.', '**A vowel:** one unit.'), ('**الغنة** في المشدّد والمدغم والمخفى: حركتان.', '**Ghunnah** (doubled, merged, hidden): two counts.'),
         ('**المد الطبيعي وما يلحق به:** حركتان.', '**Natural madd and relatives:** two counts.'), ('**المتصل والمنفصل والصلة الكبرى:** ٤ أو ٥.', '**Connected, separated, major silah:** 4 or 5.'),
         ('**العارض واللين:** ٢ أو ٤ أو ٦.', '**Arid and leen:** 2, 4 or 6.'), ('**اللازم:** ٦ حركات.', '**Lazim:** 6 counts.')]),
  C('⏸️', ('السكت', 'Sakt (Pause)'), line=('وقفة قصيرة بلا نفَس', 'A short stop without breathing'),
    x=('**السكت:** قطع الصوت زمنًا يسيرًا **دون أخذ نفَس**، بنيّة مواصلة القراءة. ولحفص من طريق الشاطبية أربع سكتات واجبة في الوصل:', '**Sakt** is cutting the sound briefly **without taking a breath**, intending to continue. Hafs (Shatibiyyah route) has four required pauses when continuing:'),
    ex=[E(18, 1, 'عوجا'), E(36, 52, 'مرقدنا'), E(75, 27, 'من راق'), E(83, 14, 'بل ران')]),
 ],
 ex=[dict(t='mcq', items=[
   dict(q=('السكت يكون:', 'Sakt is:'), o=[('دون أخذ نفَس', 'Without taking a breath'), ('مع أخذ نفَس', 'With a breath'), ('بإطالة الحرف', 'By stretching the letter')]),
   dict(q=('عدد سكتات حفص من طريق الشاطبية:', 'Number of Hafs\'s pauses (Shatibiyyah):'), o=[('أربع', 'Four'), ('اثنتان', 'Two'), ('ست', 'Six')]),
   dict(q=('زمن المد اللازم:', 'The length of madd lazim:'), o=[('٦ حركات', '6 counts'), ('٢ حركتان', '2 counts'), ('٤ أو ٥', '4 or 5')])])]),
# 19 --------------------------------------------------------------
dict(icon='🛑', title=('الوقف والابتداء', 'Stopping and Starting'),
 sub=('أنواع الوقف وعلاماته في المصحف', 'Types of stops and their marks in the mushaf'),
 cards=[
  C('🛑', ('الوقف والقطع والسكت', 'Waqf, Qat\' and Sakt'), line=('ثلاثة مصطلحات', 'Three terms'),
    lst=[('**الوقف:** قطع الصوت زمنًا **مع أخذ نفَس** بنيّة مواصلة القراءة.', '**Waqf:** stopping the sound **with a breath**, intending to continue.'), ('**القطع:** إنهاء القراءة والانصراف عنها.', '**Qat\':** ending the recitation.'), ('**السكت:** قطع يسير **بلا نفَس**.', '**Sakt:** a short stop **without breath**.')]),
  C('📚', ('أنواع الوقف الاختياري', 'Types of Chosen Stops'), line=('تام · كافٍ · حسن · قبيح', 'Complete · sufficient · good · bad'),
    lst=[('**التام:** على كلام تمّ معناه ولا تعلّق له بما بعده.', '**Complete:** the meaning is finished with no link to what follows.'), ('**الكافي:** تمّ معناه وله تعلّق بما بعده في المعنى فقط.', '**Sufficient:** finished, linked to what follows in meaning only.'),
         ('**الحسن:** تمّ معناه وله تعلّق بما بعده لفظًا ومعنى.', '**Good:** finished, but linked in wording and meaning.'), ('**القبيح:** لا يتمّ به المعنى أو يُفسده، فلا نقف عليه إلا لضرورة ثم نعيد.', '**Bad:** the meaning is incomplete or spoiled; avoid it, and if forced, go back and repeat.')]),
  C('🔖', ('علامات الوقف في المصحف', 'Stop Marks in the Mushaf'), line=('مـ · لا · ج · صلى · قلى · ∴', 'م · لا · ج · صلى · قلى · ∴'),
    lst=[('**مـ:** وقف لازم.', '**م:** required stop.'), ('**لا:** وقف ممنوع.', '**لا:** do not stop.'), ('**ج:** وقف جائز بالتساوي.', '**ج:** stop or continue equally.'),
         ('**صلى:** الوصل أولى.', '**صلى:** continuing is better.'), ('**قلى:** الوقف أولى.', '**قلى:** stopping is better.'), ('**∴ ∴ (التعانق):** نقف على أحد الموضعين لا كليهما.', '**∴ ∴ (embracing):** stop at one of the two places, not both.')]),
  C('▶️', ('الابتداء', 'Starting Again'), line=('نبدأ بكلام مستقل', 'Start with a complete phrase'),
    x=('لا نبدأ إلا بكلام مستقل في المعنى لا يُفسد المعنى ولا يوهم غير المراد. وإذا وقفنا وقفًا قبيحًا لضرورة نعود إلى ما يصحّ الابتداء به.', 'We start only with a phrase whose meaning stands on its own and does not distort the meaning. After a forced bad stop, we go back to a proper starting point.')),
 ],
 ex=[
  dict(t='sort', buckets=[('وقف لازم أو أولى', 'Required or better to stop', '#DC2626'), ('الوصل أولى أو ممنوع الوقف', 'Better or required to continue', '#16A34A')],
    items=[dict(b=0, x=('مـ', 'م')), dict(b=0, x=('قلى', 'قلى')), dict(b=1, x=('صلى', 'صلى')), dict(b=1, x=('لا', 'لا'))]),
  dict(t='mcq', items=[
    dict(q=('الوقف الذي يُؤخذ معه نفَس:', 'The stop taken with a breath:'), o=[('الوقف', 'Waqf'), ('السكت', 'Sakt'), ('لا شيء', 'Neither')]),
    dict(q=('علامة «ج» تعني:', 'The mark «ج» means:'), o=[('الوقف والوصل جائزان بالتساوي', 'Stopping and continuing are equal'), ('الوقف ممنوع', 'Stopping is forbidden'), ('الوقف لازم', 'Stopping is required')])]),
 ]),
]

for _i, _m in {2: ['nasal'], 3: ['lips', 'nasal'], 4: ['aqsa', 'wasat', 'adna'], 5: ['lips', 'nasal'], 6: ['jawf'], 11: ['q', 'tdt', 'lips', 'mid'], 15: 'all', 16: 'all'}.items():
    LESSONS[_i]['mouth'] = _m
