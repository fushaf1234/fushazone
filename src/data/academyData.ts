import {
  CEFRLevel,
  CEFRLevelInfo,
  StagePricing,
  LevelGroupPricing,
  ProgramCategory,
  CurriculumStage,
  PlacementQuestion,
  BlogPost,
  FAQItem,
  SocialLinks
} from '../types';

// روابط التواصل الافتراضية؛ الإدارة تعدّلها من لوحة الإدارة (الإعدادات)
export const OFFICIAL_CONTACTS: SocialLinks = {
  whatsapp: '',
  email: 'fushazone@gmail.com',
  youtube: '',
  instagram: '',
  discord: '',
  facebook: '',
  telegram: ''
};

// لا يوجد اختبار خارجي: تقييم المستوى جلسة مجانية مع المعلم
export const EF_SET_PLACEMENT_TEST_URL = '';

/* ------------------------------ المستويات والمسارات ------------------------------ */
// ثلاثة مستويات للغة العربية، وثلاثة مسارات للقرآن الكريم
export const CEFR_LEVELS_INFO: CEFRLevelInfo[] = [
  {
    code: 'beginner',
    program: 'arabic',
    nameEn: 'Beginner',
    nameAr: 'مبتدئ',
    descriptionEn: 'From the letters to your first sentences: reading and writing the Arabic letters, correct pronunciation, everyday words, and simple conversations.',
    descriptionAr: 'من الحروف إلى أولى الجمل: قراءة الحروف العربية وكتابتها، والنطق الصحيح، والمفردات اليومية، والمحادثات البسيطة.',
    targetAudienceEn: 'Complete beginners, or learners who want to rebuild their basics properly.',
    targetAudienceAr: 'المبتدئون تمامًا، أو من يريد إعادة تأسيس الأساسيات بشكل صحيح.',
    stages: []
  },
  {
    code: 'intermediate',
    program: 'arabic',
    nameEn: 'Intermediate',
    nameAr: 'متوسط',
    descriptionEn: 'Speak about yourself and your daily life with confidence, read short texts, and use the main grammar rules naturally.',
    descriptionAr: 'التحدث عن نفسك وحياتك اليومية بثقة، وقراءة نصوص قصيرة، واستعمال القواعد الأساسية بشكل طبيعي.',
    targetAudienceEn: 'Learners who can read Arabic and know basic words, and now want to speak more fluently.',
    targetAudienceAr: 'من يقرأ العربية ويعرف المفردات الأساسية، ويريد الآن التحدث بطلاقة أكبر.',
    stages: []
  },
  {
    code: 'advanced',
    program: 'arabic',
    nameEn: 'Advanced',
    nameAr: 'متقدم',
    descriptionEn: 'Fluent expression in Fusha: discussions, longer texts, writing, and a deeper understanding of grammar and style.',
    descriptionAr: 'تعبير بطلاقة بالفصحى: النقاشات، والنصوص الأطول، والكتابة، وفهم أعمق للنحو والأسلوب.',
    targetAudienceEn: 'Learners who speak Arabic and want accuracy, richer vocabulary and confident Fusha.',
    targetAudienceAr: 'من يتحدث العربية ويريد الدقة، ومفردات أغنى، وفصحى واثقة.',
    stages: []
  },
  {
    code: 'noorani',
    program: 'quran',
    nameEn: 'Noorani Qaida',
    nameAr: 'القاعدة النورانية',
    descriptionEn: 'The foundation for reading the Quran: letters, their correct pronunciation (makharij), vowels and joining letters, step by step.',
    descriptionAr: 'الأساس لقراءة القرآن: الحروف ومخارجها الصحيحة، والحركات، ووصل الحروف، خطوة بخطوة.',
    targetAudienceEn: 'Beginners who cannot yet read the Quran, adults and kids.',
    targetAudienceAr: 'المبتدئون الذين لا يقرؤون القرآن بعد، كبارًا وأطفالًا.',
    stages: []
  },
  {
    code: 'tajweed',
    program: 'quran',
    nameEn: 'Recitation & Tajweed',
    nameAr: 'التلاوة والتجويد',
    descriptionEn: 'Correct recitation of the Holy Quran with the rules of Tajweed, with continuous correction of pronunciation.',
    descriptionAr: 'تلاوة صحيحة للقرآن الكريم بأحكام التجويد، مع تصحيح مستمر لمخارج الحروف.',
    targetAudienceEn: 'Learners who can read the Quran and want to recite it correctly.',
    targetAudienceAr: 'من يقرأ القرآن ويريد تلاوته تلاوة صحيحة.',
    stages: []
  },
  {
    code: 'hifz',
    program: 'quran',
    nameEn: 'Memorization & Review',
    nameAr: 'الحفظ والمراجعة',
    descriptionEn: 'A steady routine of memorization and review with a plan that suits your pace.',
    descriptionAr: 'روتين ثابت للحفظ والمراجعة بخطة متوازنة وواقعية تناسب وتيرتك.',
    targetAudienceEn: 'Learners who recite well and want to memorize the Holy Quran.',
    targetAudienceAr: 'من يتلو جيدًا ويريد حفظ القرآن الكريم.',
    stages: []
  }
];

export const levelInfo = (code: string | undefined) => CEFR_LEVELS_INFO.find((l) => l.code === code);

// اسم المستوى للعرض، مثل: «العربية – مبتدئ» أو «القرآن – التلاوة والتجويد»
export const levelLabel = (code: string | undefined, isAr: boolean, withProgram = true): string => {
  const l = levelInfo(code);
  if (!l) return code || '';
  const name = isAr ? l.nameAr : l.nameEn;
  if (!withProgram) return name;
  const prog = l.program === 'arabic' ? (isAr ? 'العربية' : 'Arabic') : isAr ? 'القرآن' : 'Quran';
  return `${prog} – ${name}`;
};

export const LEVEL_CODES: CEFRLevel[] = CEFR_LEVELS_INFO.map((l) => l.code);

/* ------------------------------ الأسعار ------------------------------ */
// الأسعار تُدار من «الباقات والأسعار» في لوحة الإدارة (مجموعة packages)
export const LEVEL_GROUP_PRICING: LevelGroupPricing[] = [];
export const STAGE_PRICING_TABLE: StagePricing[] = [];

/* ------------------------------ البرامج ------------------------------ */
export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    id: 'arabic-language',
    titleEn: 'Arabic Language (Fusha): From Letters to Fluency',
    titleAr: 'اللغة العربية (فُصحى): من الحروف إلى الطلاقة',
    shortDescEn: 'A complete Arabic program for non-Arabic speakers in three levels (Beginner, Intermediate, Advanced), balancing grammar, phonetics, reading and writing with real conversation.',
    shortDescAr: 'برنامج متكامل للعربية لغير الناطقين بها في ثلاثة مستويات (مبتدئ ومتوسط ومتقدم)، يوازن بين القواعد والصوتيات والقراءة والكتابة والمحادثة الحقيقية.',
    fullDescEn: 'At Fusha Zone we believe that learning a language is a key to its culture. This program balances academic rigor (grammar, syntax and phonetics) with the ability to communicate instantly and confidently, with professional native Arabic-speaking teachers.',
    fullDescAr: 'في Fusha Zone نؤمن أن تعلم اللغة مفتاح للثقافة. لذلك يوازن هذا البرنامج بذكاء بين الرصانة الأكاديمية، من قواعد ونحو وصوتيات، وبين القدرة على التواصل الفوري والواثق، مع معلمين محترفين متحدثين أصليين باللغة العربية.',
    objectivesEn: [
      'Academic authenticity: grammar, syntax and phonetics that give you a clear, strong foundation',
      'Conversational fluency: practical speaking from the very beginning',
      'Precise correction of letter pronunciation, as native speakers say them',
      'A clear curriculum balancing reading, writing, grammar and communication'
    ],
    objectivesAr: [
      'أصالة أكاديمية: قواعد ونحو وصوتيات تمنحك أساسا واضحا وقويا',
      'طلاقة حوارية: ممارسة عملية تساعدك على التحدث بثقة من البداية',
      'تصحيح صوتي دقيق لمخارج الحروف كما ينطقها أهل اللغة',
      'منهج واضح يوازن بين القراءة والكتابة والقواعد والتواصل'
    ],
    suitableForEn: 'Non-Arabic speakers of all levels, for study, work, culture or the Quran.',
    suitableForAr: 'الناطقون بغير العربية من كل المستويات، للدراسة أو العمل أو الثقافة أو القرآن.',
    formatEn: 'Individual or group • 50 minutes per lesson',
    formatAr: 'فردي أو مجموعات • 50 دقيقة للحصة',
    durationEn: 'Three levels: Beginner, Intermediate, Advanced',
    durationAr: 'ثلاثة مستويات: مبتدئ ومتوسط ومتقدم',
    iconName: 'BookOpen',
    badgeEn: 'Most Popular',
    badgeAr: 'الأكثر طلبًا'
  },
  {
    id: 'interactive-conversation',
    titleEn: 'Interactive Conversation',
    titleAr: 'المحادثات التفاعلية',
    shortDescEn: 'Lessons dedicated to conversation and spoken fluency, to break the fear of speaking Arabic.',
    shortDescAr: 'حصص مخصصة للمحادثة والطلاقة الشفهية لكسر حاجز الخوف من التحدث بالعربية.',
    fullDescEn: 'Every lesson brings you closer to the language you actually want to use. Real conversations about daily life and culture, with your teacher correcting your pronunciation and expressions as you speak.',
    fullDescAr: 'كل حصة تقربك من اللغة التي تريد استخدامها فعلا. محادثات حقيقية عن الحياة اليومية والثقافة، مع تصحيح المعلم لنطقك وتعبيرك أثناء الحديث.',
    objectivesEn: [
      'Speak Arabic with confidence in everyday situations',
      'Grow your active vocabulary and natural expressions',
      'Improve pronunciation and listening',
      'Break the fear of speaking'
    ],
    objectivesAr: [
      'التحدث بالعربية بثقة في مواقف الحياة اليومية',
      'توسيع المفردات والتعابير الطبيعية',
      'تحسين النطق والاستماع',
      'كسر حاجز الخوف من التحدث'
    ],
    suitableForEn: 'Learners who understand some Arabic and want to speak more.',
    suitableForAr: 'من يفهم شيئًا من العربية ويريد أن يتحدث أكثر.',
    formatEn: 'Individual or group • 50 minutes per lesson',
    formatAr: 'فردي أو مجموعات • 50 دقيقة للحصة',
    durationEn: 'Monthly package or single sessions',
    durationAr: 'باقة شهرية أو جلسات منفردة',
    iconName: 'MessageCircle'
  },
  {
    id: 'quran-tajweed',
    titleEn: 'The Holy Quran & Tajweed',
    titleAr: 'القرآن الكريم والتجويد',
    shortDescEn: 'Three tracks: Noorani Qaida, Recitation & Tajweed, and Memorization & Review, with continuous correction of pronunciation.',
    shortDescAr: 'ثلاثة مسارات: القاعدة النورانية، والتلاوة والتجويد، والحفظ والمراجعة، مع تصحيح مستمر لمخارج الحروف.',
    fullDescEn: 'Steady study and follow-up for correct pronunciation of the letters, the rules of Tajweed, and solid memorization of the Book of Allah, with a plan that starts from your current level.',
    fullDescAr: 'دراسة ومتابعة مستمرة لضبط مخارج الحروف وأحكام التجويد وحفظ متقن لكتاب الله الكريم، بخطة تبدأ من مستواك الحالي.',
    objectivesEn: [
      'Read the Quran correctly with the Noorani Qaida',
      'Recite with the rules of Tajweed',
      'Build a steady routine of memorization and review',
      'Continuous correction of pronunciation (makharij)'
    ],
    objectivesAr: [
      'قراءة القرآن قراءة صحيحة بالقاعدة النورانية',
      'التلاوة بأحكام التجويد',
      'بناء روتين ثابت للحفظ والمراجعة',
      'تصحيح مستمر لمخارج الحروف'
    ],
    suitableForEn: 'Adults and kids, from complete beginners to memorization.',
    suitableForAr: 'الكبار والأطفال، من البداية تمامًا حتى الحفظ.',
    formatEn: 'Individual or group • 40 minutes per lesson',
    formatAr: 'فردي أو مجموعات • 40 دقيقة للحصة',
    durationEn: 'Three tracks: Noorani, Tajweed, Memorization',
    durationAr: 'ثلاثة مسارات: النورانية والتجويد والحفظ',
    iconName: 'BookOpenCheck',
    notOxford: true
  },
  {
    id: 'kids-arabic-quran',
    titleEn: 'Arabic & Quran for Kids',
    titleAr: 'العربية والقرآن للأطفال',
    shortDescEn: 'Fun, engaging Arabic and Quran lessons for children, with stars, rewards and patient teachers.',
    shortDescAr: 'حصص ممتعة ومحفزة في العربية والقرآن للأطفال، مع النجوم والمكافآت ومعلمين صبورين.',
    fullDescEn: 'Lessons designed for children: letters, reading, simple conversation and the Noorani Qaida, with stars and rewards that keep them motivated.',
    fullDescAr: 'حصص مصممة للأطفال: الحروف والقراءة والمحادثة البسيطة والقاعدة النورانية، مع النجوم والمكافآت التي تبقيهم متحمسين.',
    objectivesEn: [
      'Learn the Arabic letters and read with correct pronunciation',
      'Start reading the Quran with the Noorani Qaida',
      'Simple everyday Arabic words and conversation',
      'Earn stars and rewards for every step'
    ],
    objectivesAr: [
      'تعلّم الحروف العربية والقراءة بنطق صحيح',
      'البدء بقراءة القرآن بالقاعدة النورانية',
      'كلمات ومحادثات عربية يومية بسيطة',
      'كسب النجوم والمكافآت مع كل خطوة'
    ],
    suitableForEn: 'Children.',
    suitableForAr: 'الأطفال.',
    formatEn: 'Individual or group',
    formatAr: 'فردي أو مجموعات',
    durationEn: 'Monthly package',
    durationAr: 'باقة شهرية',
    iconName: 'Sparkles',
    badgeEn: 'For Kids',
    badgeAr: 'للأطفال'
  }
];

// لا يوجد منهج تفصيلي ثابت في الكود
export const CURRICULUM_PREVIEW: CurriculumStage[] = [];

// لا يوجد اختبار إلكتروني: التقييم جلسة مجانية مع المعلم
export const PLACEMENT_TEST_QUESTIONS: PlacementQuestion[] = [];

// المقالات تُكتب من لوحة الإدارة
export const BLOG_POSTS: BlogPost[] = [];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    questionEn: 'Are the lessons live or recorded?',
    questionAr: 'هل الحصص مباشرة أم مسجلة؟',
    answerEn: 'All lessons are live online lessons with professional native Arabic-speaking teachers. You speak, interact and get your pronunciation corrected right away.',
    answerAr: 'كل الحصص مباشرة عبر الإنترنت مع معلمين محترفين متحدثين أصليين باللغة العربية، تتحدث فيها وتتفاعل ويُصحَّح نطقك مباشرة.'
  },
  {
    id: 'faq-2',
    category: 'format',
    questionEn: 'How long is a lesson? Individual or group?',
    questionAr: 'كم مدة الحصة؟ وهل هي فردية أم جماعية؟',
    answerEn: 'Arabic and conversation lessons are 50 minutes, and Quran lessons are 40 minutes. You can study individually or in a small group.',
    answerAr: 'حصص العربية والمحادثة 50 دقيقة، وحصص القرآن 40 دقيقة. يمكنك الدراسة بشكل فردي أو في مجموعة صغيرة.'
  },
  {
    id: 'faq-3',
    category: 'programs',
    questionEn: 'What are the levels and tracks?',
    questionAr: 'ما المستويات والمسارات؟',
    answerEn: 'Arabic has three levels: Beginner, Intermediate and Advanced. The Holy Quran has three tracks: Noorani Qaida, Recitation & Tajweed, and Memorization & Review.',
    answerAr: 'للعربية ثلاثة مستويات: مبتدئ ومتوسط ومتقدم. وللقرآن الكريم ثلاثة مسارات: القاعدة النورانية، والتلاوة والتجويد، والحفظ والمراجعة.'
  },
  {
    id: 'faq-4',
    category: 'pricing',
    questionEn: 'How do I pay?',
    questionAr: 'كيف أدفع الرسوم؟',
    answerEn: 'Packages are paid month by month, with no long-term commitment. You can see all packages on the Packages page after signing up for free.',
    answerAr: 'تُدفع الباقات شهرًا بشهر بلا التزام طويل. {تجد|تجدين} كل الباقات في صفحة الأسعار بعد التسجيل المجاني.'
  },
  {
    id: 'faq-5',
    category: 'tests',
    questionEn: 'How do I know my level?',
    questionAr: 'كيف أعرف مستواي؟',
    answerEn: 'Book a free level assessment session. A teacher will find your level in Arabic or Quran recitation and suggest the right plan.',
    answerAr: '{احجز|احجزي} جلسة تقييم مستوى مجانية، ويحدد المعلم مستواك في العربية أو التلاوة ويقترح الخطة المناسبة.'
  },
  {
    id: 'faq-6',
    category: 'general',
    questionEn: 'Do you teach children?',
    questionAr: 'هل تدرّسون الأطفال؟',
    answerEn: 'Yes. We have Arabic and Quran lessons designed for children, with stars and rewards to keep them motivated.',
    answerAr: 'نعم، لدينا حصص عربية وقرآن مصممة للأطفال، مع النجوم والمكافآت لتحفيزهم.'
  },
  {
    id: 'faq-7',
    category: 'general',
    questionEn: 'Do students receive certificates?',
    questionAr: 'هل يحصل الطلاب على شهادة؟',
    answerEn: 'Yes. Students receive a Fusha Zone certificate when they complete an Arabic level or a Quran track. Each certificate has a serial number that can be verified on our platform.',
    answerAr: 'نعم، يحصل الطالب على شهادة من Fusha Zone عند إتمام مستوى في العربية أو مسار في القرآن، ولكل شهادة رقم يمكن التحقق منه عبر منصتنا.'
  }
];

// الآراء تُضاف من لوحة الإدارة فقط
export const TESTIMONIALS_LIST: any[] = [];
