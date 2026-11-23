  /* ============ إضافات صفحات السور ============ */
  .surah-basmala{ font-family: var(--font-ar-display); font-size:24px; color:var(--gold-light); margin-bottom:10px; }
  .ayah-num{ color:var(--gold-light); font-size:0.8em; white-space:nowrap; }
  .surah-status{ color:var(--gold-light); font-size:15px; }
  .surah-status button{ margin-top:10px; }
  .teacher-avatar{ background: linear-gradient(160deg, var(--green-mid), var(--green)); }

  /* ===== ألوان البطاقات ===== */
  .c0{ --c1:#FF8A65; --c2:#E8505B; }  .c1{ --c1:#4FACFE; --c2:#2F6FDB; }
  .c2{ --c1:#B07CFF; --c2:#7C3AED; }  .c3{ --c1:#FFB347; --c2:#E07B00; }
  .c4{ --c1:#34D399; --c2:#047857; }  .c5{ --c1:#F472B6; --c2:#C21F6E; }
  .c6{ --c1:#2DD4BF; --c2:#0F766E; }  .c7{ --c1:#818CF8; --c2:#4338CA; }

  /* ===== أيقونة «لنفهم الآيات» ===== */
  .tile-wrap{ display:flex; justify-content:center; }
  .meaning-tile{
    position:relative; overflow:hidden; cursor:pointer; border:none; font-family:inherit;
    width:100%; max-width:520px; padding:26px 22px; border-radius:var(--radius-lg); color:#fff; text-align:center;
    background: linear-gradient(135deg, #FF8A65 0%, #F472B6 30%, #B07CFF 60%, #4FACFE 100%);
    box-shadow: 0 14px 34px rgba(124,58,237,0.30); transition: transform .25s ease, box-shadow .25s ease;
  }
  .meaning-tile:hover, .meaning-tile:focus-visible{ transform: translateY(-4px) scale(1.01); box-shadow:0 20px 40px rgba(124,58,237,0.38); outline:none; }
  .meaning-tile .t-icon{
    width:86px; height:86px; margin:0 auto 12px; border-radius:26px; display:flex; align-items:center; justify-content:center;
    font-size:44px; background:rgba(255,255,255,0.22); box-shadow: inset 0 0 0 3px rgba(255,255,255,0.45);
    animation: tile-bob 2.6s ease-in-out infinite;
  }
  @keyframes tile-bob{ 0%,100%{ transform:translateY(0) rotate(0); } 50%{ transform:translateY(-6px) rotate(-4deg); } }
  .meaning-tile .t-title{ display:block; font-size:22px; font-weight:bold; }
  .meaning-tile .t-sub{ display:block; font-size:14px; opacity:.95; margin-top:6px; }
  .meaning-tile .t-mini{ display:flex; justify-content:center; gap:6px; margin-top:14px; }
  .meaning-tile .t-mini i{ width:26px; height:34px; border-radius:7px; background:linear-gradient(160deg,var(--c1),var(--c2)); box-shadow:0 3px 8px rgba(0,0,0,.2); border:2px solid rgba(255,255,255,.7); }
  .meaning-tile .t-mini i:nth-child(2){ transform:rotate(-8deg); } .meaning-tile .t-mini i:nth-child(4){ transform:rotate(8deg); }
  .meaning-progress{ text-align:center; margin-top:10px; font-size:14px; color:var(--ink-soft); font-weight:bold; }

  /* ===== نافذة البطاقات ===== */
  .mx-overlay{ position:fixed; inset:0; z-index:80; background:rgba(10,20,30,0.62); backdrop-filter: blur(3px);
    display:flex; align-items:center; justify-content:center; padding:14px; }
  .mx-overlay[hidden]{ display:none; }
  .mx-box{ width:100%; max-width:640px; max-height:96vh; display:flex; flex-direction:column; gap:12px;
    background:var(--cream); border-radius:var(--radius-lg); padding:18px; box-shadow:0 24px 60px rgba(0,0,0,0.35); animation: mx-in .3s ease; }
  @keyframes mx-in{ from{ opacity:0; transform:scale(.94) translateY(10px); } to{ opacity:1; transform:none; } }
  .mx-head{ display:flex; align-items:center; gap:10px; }
  .mx-title{ flex:1; font-weight:bold; color:var(--green-deep); font-size:17px; }
  .mx-stars{ background:var(--gold-glow); color:#8A6410; border-radius:999px; padding:5px 12px; font-weight:bold; font-size:13px; white-space:nowrap; }
  .mx-close{ border:none; background:var(--white); width:38px; height:38px; border-radius:50%; cursor:pointer; font-size:18px; box-shadow:0 3px 10px rgba(0,0,0,.12); }
  .mx-bar{ height:8px; border-radius:99px; background:rgba(0,0,0,0.08); overflow:hidden; }
  .mx-bar span{ display:block; height:100%; width:0; border-radius:99px; background:linear-gradient(90deg,#FF8A65,#F472B6,#B07CFF,#4FACFE); transition: width .35s ease; }
  .mx-stage{ perspective:1400px; height:min(56vh, 440px); touch-action:pan-y; }
  .mx-card{ position:relative; width:100%; height:100%; cursor:pointer; transform-style:preserve-3d; transition: transform .6s cubic-bezier(.4,.2,.2,1); }
  .mx-card.flipped{ transform: rotateY(180deg); }
  .mx-card.enter{ animation: card-enter .35s ease; }
  @keyframes card-enter{ from{ opacity:0; transform: translateX(var(--dx, 30px)) rotate(var(--rot, 2deg)); } to{ opacity:1; transform:none; } }
  .mx-face{ position:absolute; inset:0; backface-visibility:hidden; border-radius:var(--radius-md); padding:22px 20px;
    display:flex; flex-direction:column; overflow-y:auto; box-shadow:0 12px 28px rgba(0,0,0,0.18); }
  .mx-front{ background: linear-gradient(155deg, var(--c1), var(--c2)); color:#fff; align-items:center; justify-content:center; text-align:center; }
  .mx-back{ background:#fff; transform: rotateY(180deg); border:4px solid var(--c1); color:var(--ink); text-align:start; }
  .mx-num{ width:54px; height:54px; border-radius:50%; flex:0 0 auto; display:flex; align-items:center; justify-content:center;
    background:rgba(255,255,255,0.25); box-shadow: inset 0 0 0 3px rgba(255,255,255,0.6); font-weight:bold; font-size:18px; margin-bottom:14px; }
  .mx-ayah{ font-family: var(--font-ar-display); font-size:clamp(20px, 3.6vw, 27px); line-height:2.1; margin:0; text-shadow:0 2px 6px rgba(0,0,0,0.18); }
  .mx-hint{ margin-top:16px; font-size:13px; background:rgba(255,255,255,0.22); padding:6px 14px; border-radius:999px; }
  .mx-back h4{ margin:0 0 8px; color:var(--c2); font-size:17px; display:flex; align-items:center; gap:8px; }
  .mx-back .mx-ayah-small{ font-family: var(--font-ar-display); font-size:17px; color:var(--c2); line-height:1.9; margin:0 0 12px; padding-bottom:10px; border-bottom:2px dashed var(--c1); }
  .mx-meaning{ font-size:16px; line-height:2; margin:0; }
  .mx-kid{ margin-top:14px; background: color-mix(in srgb, var(--c1) 16%, white); border-radius:var(--radius-sm); padding:12px 14px; font-size:15px; line-height:1.8; }
  .mx-kid b{ color:var(--c2); }
  .mx-controls{ display:flex; gap:8px; justify-content:center; flex-wrap:wrap; }
  .mx-btn{ border:none; cursor:pointer; font-family:inherit; font-weight:bold; font-size:14px; padding:11px 16px; border-radius:999px;
    background:var(--white); color:var(--green-deep); box-shadow:0 4px 12px rgba(0,0,0,0.1); transition: transform .15s ease, background .2s ease; }
  .mx-btn:hover{ transform:translateY(-2px); }
  .mx-btn:disabled{ opacity:.4; cursor:default; transform:none; }
  .mx-btn.listen{ background:linear-gradient(160deg,#4FACFE,#2F6FDB); color:#fff; }
  .mx-btn.got{ background:linear-gradient(160deg,#FFD166,#F4A100); color:#5A3B00; }
  .mx-btn.got.done{ background:linear-gradient(160deg,#34D399,#047857); color:#fff; }
  .mx-dots{ display:flex; gap:6px; overflow-x:auto; padding:4px 2px 6px; scrollbar-width:thin; }
  .mx-dot{ flex:0 0 auto; width:32px; height:32px; border-radius:50%; border:2px solid rgba(0,0,0,0.12); background:#fff; cursor:pointer;
    font-size:12px; font-weight:bold; color:var(--ink-soft); font-family:inherit; }
  .mx-dot.cur{ border-color:var(--green-deep); transform:scale(1.12); }
  .mx-dot.got{ background:linear-gradient(160deg,#FFD166,#F4A100); color:#5A3B00; border-color:transparent; }
  .mx-done{ text-align:center; font-weight:bold; color:var(--green); min-height:20px; }

  /* ===== بطاقات «ماذا نتعلم» الملونة ===== */
  .mini-card{ position:relative; cursor:pointer; border:none; background:linear-gradient(170deg, #fff 55%, color-mix(in srgb, var(--c1) 18%, white));
    border-top:6px solid var(--c1); transition: transform .2s ease; }
  .mini-card .icon{ width:54px; height:54px; margin:0 auto 8px; border-radius:16px; display:flex; align-items:center; justify-content:center;
    background:linear-gradient(160deg,var(--c1),var(--c2)); box-shadow:0 6px 14px rgba(0,0,0,0.15); }
  .mini-card:hover{ transform:translateY(-4px) rotate(-1deg); }
  .mini-card.pop{ animation: pop .5s ease; }
  @keyframes pop{ 0%{ transform:scale(1); } 40%{ transform:scale(1.08) rotate(2deg); } 100%{ transform:scale(1); } }
  #orderList li:nth-child(8n+1){ border-inline-start:6px solid #FF8A65; } #orderList li:nth-child(8n+2){ border-inline-start:6px solid #4FACFE; }
  #orderList li:nth-child(8n+3){ border-inline-start:6px solid #B07CFF; } #orderList li:nth-child(8n+4){ border-inline-start:6px solid #FFB347; }
  #orderList li:nth-child(8n+5){ border-inline-start:6px solid #34D399; } #orderList li:nth-child(8n+6){ border-inline-start:6px solid #F472B6; }
  #orderList li:nth-child(8n+7){ border-inline-start:6px solid #2DD4BF; } #orderList li:nth-child(8n+8){ border-inline-start:6px solid #818CF8; }
  #orderList li{ line-height:2; }
  .quiz-option:nth-child(1) .dot{ border-color:#FF8A65; } .quiz-option:nth-child(2) .dot{ border-color:#4FACFE; } .quiz-option:nth-child(3) .dot{ border-color:#B07CFF; }
  .fb-ref{ display:block; font-size:13px; color:var(--ink-soft); font-family: var(--font-ar-body); margin-top:4px; }
  .fb-answer{ text-align:center; margin-top:8px; font-family: var(--font-ar-display); font-size:18px; color:var(--green); min-height:24px; }
  .back-wrap{ text-align:center; margin-top:30px; }
  .back-link{ display:inline-block; background:var(--green-deep); color:var(--gold-light); text-decoration:none; padding:11px 24px; border-radius:999px; font-weight:bold; font-size:14px; box-shadow:var(--shadow); }
  .back-link:hover{ background:var(--green); }

  /* خط القرآن: أثقل وأكبر وأوضح للأطفال */
  :root{ --font-ar-display: "Scheherazade New","Amiri Quran","Amiri","Traditional Arabic", serif; }
  .surah-text, .surah-basmala, .mx-ayah, .mx-ayah-small, .flip-front .ayah-ar, .ayah-inline,
  #orderList li, .fillblank-text, .fillblank-row input, .fb-answer, .hero-titles h1{ font-weight:700; }
  .surah-text{ font-size:clamp(28px, 5vw, 36px) !important; line-height:2.3 !important; }
  .surah-basmala{ font-size:clamp(30px, 5vw, 38px); }
  .mx-ayah{ font-size:clamp(28px, 5.4vw, 38px); line-height:2; }
  .mx-back .mx-ayah-small{ font-size:23px; }
  .ayah-inline{ font-size:1.4em; }
  #orderList li{ font-size:24px !important; line-height:2 !important; }
  .fb-answer{ font-size:24px; }
  .fillblank-text{ font-size:clamp(24px, 4.4vw, 30px); }
  .fillblank-row input{ font-size:22px; }
  .reciter-row{ margin-top:14px; display:flex; gap:8px; align-items:center; justify-content:center; flex-wrap:wrap; color:var(--gold-light); font-weight:bold; font-size:14px; }
  .reciter-row select{ font-family:inherit; font-weight:bold; font-size:14px; padding:8px 14px; border-radius:999px; border:2px solid var(--gold-light); background:var(--cream); color:var(--green-deep); max-width:100%; }
</style>
</head>
<body>

<div class="pattern-strip"></div>
<canvas id="confetti-canvas"></canvas>

<div class="lang-toggle">
  <span class="globe">🌐</span>
  <button id="btnAr" class="active">العربية</button>
  <span style="color:var(--gold-light)">|</span>
  <button id="btnEn">English</button>
</div>

<div class="wrap">

  <!-- ============ الهيدر ============ -->
  <header class="hero">
    <div class="hero-titles">
      <h1><span data-ar-only>سورة __NAME_AR__</span><span data-en-only>Surat __NAME_EN__</span></h1>
      <div class="audience">
        📚 <span data-ar-only>الفئة المستهدفة: <b>Children Level 1</b></span>
        <span data-en-only>Target level: <b>Children Level 1</b></span>
      </div>
    </div>
    <div class="hero-badges">
      <div class="badge-card">📖 <span data-ar-only>بالقرآن نحيا</span><span data-en-only>We live by the Qur'an</span></div>
      <div class="badge-card">🌸 <span data-ar-only>أحب القرآن</span><span data-en-only>I love the Qur'an</span></div>
      <div class="badge-card">⭐ <span data-ar-only>أنا طالب مسلم</span><span data-en-only>I am a Muslim student</span></div>
    </div>
  </header>

  <!-- ============ بطاقة اسم الطالب ============ -->
  <section class="name-card">
    <h2>✍️ <span data-ar-only>حامل القرآن</span><span data-en-only>Bearer of the Qur'an</span></h2>
    <input type="text" id="studentName" placeholder="إسم الطالب..." data-ph-ar="إسم الطالب..." data-ph-en="Student's name...">
    <div class="welcome-msg" id="welcomeMsg"></div>
  </section>

  <!-- ============ قسم المعلمة ============ -->
  <section class="teacher-card">
    <div class="teacher-avatar" aria-hidden="true">
      <svg width="72" height="72" viewBox="0 0 100 100">
        <path d="M50 8 C24 8 14 30 14 46 C14 68 30 92 50 92 C70 92 86 68 86 46 C86 30 76 8 50 8 Z" fill="#EAD9A0"/>
        <circle cx="50" cy="52" r="24" fill="#F3D9B1"/>
        <path d="M26 46 C26 26 74 26 74 46 C74 34 62 26 50 26 C38 26 26 34 26 46 Z" fill="#C9A24B"/>
        <circle cx="41" cy="54" r="3" fill="#3A2A1A"/>
        <circle cx="59" cy="54" r="3" fill="#3A2A1A"/>
        <path d="M42 64 Q50 70 58 64" stroke="#3A2A1A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="teacher-info">
      <h3><span data-ar-only>المعلمة أمل الحسن</span><span data-en-only>Teacher Amal Al-Hassan</span></h3>
      <div class="role"><span data-ar-only>مرجعك الأكيد</span><span data-en-only>Your trusted guide</span></div>
      <div class="teacher-welcome">
        <span data-ar-only>هيا بنا نتعلم سورة __NAME_AR__ معًا 🌸</span>
        <span data-en-only>Let's learn Surat __NAME_EN__ together 🌸</span>
      </div>
    </div>
  </section>

  <!-- ============ بطاقة السورة كاملة ============ -->
  <div class="section-title">📖 <span data-ar-only>سورة __NAME_AR__</span><span data-en-only>Surat __NAME_EN__</span></div>
  <div class="surah-card">
    <h3><span data-ar-only>اقرأ السورة كاملة</span><span data-en-only>Read the Full Surah</span></h3>
    <div class="surah-basmala" id="surahBasmala" lang="ar" dir="rtl"></div>
    <div class="surah-text" id="surahText" lang="ar"></div>
    <div class="surah-translation" id="surahTranslation"></div>
    <button class="listen-btn" id="listenBtn">▶️ <span data-ar-only>استمع للسورة</span><span data-en-only>Listen to the Surah</span></button>
    <div class="listen-toast" id="listenToast"></div>
    <div class="reciter-row">
      <label for="reciterSelect"><span data-ar-only>🎙️ القارئ:</span><span data-en-only>🎙️ Reciter:</span></label>
      <select id="reciterSelect"></select>
    </div>
    <audio id="surahAudio" preload="none"></audio>
  </div>

  <!-- ============ بطاقات شرح السورة (Flip Cards) ============ -->
  <div class="section-title">🌿 <span data-ar-only>لنفهم الآيات</span><span data-en-only>Let's Understand the Verses</span></div>
  <div class="tile-wrap">
    <button class="meaning-tile" id="openMeanings" type="button">
      <span class="t-icon">📖</span>
      <span class="t-title"><span data-ar-only>لنفهم الآيات</span><span data-en-only>Let's Understand the Verses</span></span>
      <span class="t-sub" id="tileSub"></span>
      <span class="t-mini"><i class="c0"></i><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i></span>
    </button>
  </div>
  <div class="meaning-progress" id="meaningProgress"></div>

  <div class="mx-overlay" id="mx" hidden role="dialog" aria-modal="true" aria-labelledby="mxTitle">
    <div class="mx-box">
      <div class="mx-head">
        <div class="mx-title" id="mxTitle"></div>
        <div class="mx-stars" id="mxStars"></div>
        <button class="mx-close" id="mxClose" type="button" aria-label="close">✕</button>
      </div>
      <div class="mx-bar"><span id="mxBar"></span></div>
      <div class="mx-stage" id="mxStage"><div class="mx-card" id="mxCard"></div></div>
      <div class="mx-controls">
        <button class="mx-btn" id="mxPrev" type="button"></button>
        <button class="mx-btn listen" id="mxListen" type="button">🔊 <span data-ar-only>استمع للآية</span><span data-en-only>Listen</span></button>
        <button class="mx-btn got" id="mxGot" type="button"></button>
        <button class="mx-btn" id="mxNext" type="button"></button>
      </div>
      <div class="mx-done" id="mxDone"></div>
      <div class="mx-dots" id="mxDots"></div>
    </div>
  </div>

  <!-- ============ ماذا نتعلم ============ -->
  <div class="section-title">🌸 <span data-ar-only>ماذا نتعلم من سورة __NAME_AR__؟</span><span data-en-only>What Do We Learn from __NAME_EN__?</span></div>
  <div class="mini-grid" id="lessonsGrid"></div>

  <!-- ============ نشاط الترتيب ============ -->
  <div class="section-title">🔀 <span data-ar-only>رتب آيات السورة</span><span data-en-only>Order the Verses</span></div>
  <div class="activity-card">
    <h3><span data-ar-only>اسحب الآيات ورتبها بالترتيب الصحيح</span><span data-en-only>Drag the verses into the correct order</span></h3>
    <p class="activity-sub"><span data-ar-only>اضغط مطولاً واسحب لأعلى أو لأسفل</span><span data-en-only>Press and hold, then drag up or down</span></p>
    <ul id="orderList" dir="rtl" lang="ar"></ul>
    <div class="activity-actions">
      <button class="action-btn" id="checkOrderBtn"><span data-ar-only>تحقق من الترتيب</span><span data-en-only>Check Order</span></button>
      <button class="action-btn secondary" id="shuffleOrderBtn"><span data-ar-only>إعادة الخلط</span><span data-en-only>Shuffle Again</span></button>
    </div>
    <div class="activity-feedback" id="orderFeedback"></div>
  </div>

  <!-- ============ أكمل الآية ============ -->
  <div class="section-title">✏️ <span data-ar-only>أكمل الآية</span><span data-en-only>Complete the Verse</span></div>
  <div class="activity-card">
    <div class="fillblank-text" id="fillblankText"></div>
    <div class="fillblank-row">
      <input type="text" id="fillblankInput" placeholder="..." dir="rtl" lang="ar">
      <button class="action-btn" id="fillblankCheck"><span data-ar-only>تحقق</span><span data-en-only>Check</span></button>
      <button class="action-btn secondary" id="fillblankShow"><span data-ar-only>أظهر الإجابة</span><span data-en-only>Show Answer</span></button>
    </div>
    <div class="fb-answer" id="fbAnswer" lang="ar" dir="rtl"></div>
    <div class="activity-feedback" id="fillblankFeedback"></div>
    <div class="fb-progress" id="fbProgress"></div>
  </div>

  <!-- ============ الاختبار ============ -->
  <div class="section-title">⭐ <span data-ar-only>اختبار سورة __NAME_AR__</span><span data-en-only>__NAME_EN__ Quiz</span></div>
  <div class="quiz-card activity-card">
    <div class="quiz-progress" id="quizProgress"></div>
    <h3 id="quizQuestion"></h3>
    <div class="quiz-options" id="quizOptions"></div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div class="quiz-next" id="quizNextWrap" style="display:none;">
      <button class="action-btn" id="quizNextBtn"><span data-ar-only>السؤال التالي</span><span data-en-only>Next Question</span></button>
    </div>
  </div>

  <!-- ============ النتيجة ============ -->
  <div class="result-card" id="resultCard">
    <h3><span data-ar-only>نتيجتك</span><span data-en-only>Your Result</span></h3>
    <div class="result-stars" id="resultStars"></div>
    <div class="result-score" id="resultScore"></div>
    <div class="result-excellent" id="resultExcellent"></div>
    <div class="finish-wrap">
      <button class="finish-btn" id="claimBadgeBtn">🏅 <span data-ar-only>استلم وسامك</span><span data-en-only>Claim Your Badge</span></button>
    </div>
  </div>

  <!-- ============ الوسام ============ -->
  <div class="badge-reveal" id="badgeReveal">
    <div class="medal">🏅</div>
    <h3><span data-ar-only>حافظ سورة __NAME_AR__</span><span data-en-only>Keeper of Surat __NAME_EN__</span></h3>
    <p><span data-ar-only>بارك الله فيك، استمر في تعلم كتاب الله 🌙</span><span data-en-only>May Allah bless you — keep learning the Book of Allah 🌙</span></p>
  </div>

  <p class="back-wrap"><a class="back-link" href="./"><span data-ar-only>📚 العودة إلى كل الدروس</span><span data-en-only>📚 Back to all lessons</span></a></p>

  <footer>
    <span data-ar-only>صمم بحب لطلاب القرآن الكريم 🌙</span>
    <span data-en-only>Designed with love for students of the Qur'an 🌙</span>
  </footer>
</div>

<script>
(function(){
  "use strict";

  /* ============ بيانات الدرس ============ */
  var D = __DATA__;
  var NAME_AR = "__NAME_AR__", NAME_EN = "__NAME_EN__";

  /* نص القرآن والترجمة يُحمّلان من مصدر موثوق (الرسم العثماني + Sahih International) */
  var API = 'https://api.alquran.cloud/v1/surah/' + D.n + '/editions/quran-uthmani,en.sahih';
  var TAFSIR_API = 'https://api.alquran.cloud/v1/surah/' + D.n + '/ar.muyassar'; // التفسير الميسر
  var ayahs = []; // { ar, en, tafsir, g }

  function isEn(){ return document.body.classList.contains('lang-en'); }
  function toAr(n){ return String(n).replace(/[0-9]/g, function(d){ return "٠١٢٣٤٥٦٧٨٩"[d]; }); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  /* «...» داخل النصوص = اقتباس من آية، يُعرض بالعربية دائمًا */
  function fmt(s){ return s.replace(/«([^»]+)»/g, '<bdi class="ayah-inline" lang="ar" dir="rtl">﴿$1﴾</bdi>'); }
  function normalize(str){
    return String(str)
      .replace(/[ؐ-ًؚ-ٰٟۖ-ۭـ]/g,'') // التشكيل وعلامات الرسم
      .replace(/[اٱإأآى]/g,'')      // الرسم العثماني يكتب الألف بطرق مختلفة، فنتجاهلها في المقارنة
      .replace(/ة/g,'ه').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/ء/g,'')
      .replace(/ي(?=\s|$)/g,'')      // الياء/الألف المقصورة في آخر الكلمة
      .replace(/\s+/g,' ').trim();
  }
  function tokens(t){ return t.split(/\s+/).filter(function(w){ return normalize(w).length > 0; }); }
  function shortText(t, n){
    var w = tokens(t);
    return w.length <= n ? w.join(' ') : w.slice(0, n).join(' ') + ' ...';
  }

  /* ============ عرض السورة كاملة ============ */
  var surahTextEl = document.getElementById('surahText');
  var surahTranslationEl = document.getElementById('surahTranslation');
  var surahBasmalaEl = document.getElementById('surahBasmala');

  function showStatus(loading){
    surahTextEl.innerHTML = loading
      ? '<div class="surah-status"><span data-ar-only>⏳ جارٍ تحميل السورة...</span><span data-en-only>⏳ Loading the surah...</span></div>'
      : '<div class="surah-status"><span data-ar-only>تعذّر تحميل السورة، تأكد من الاتصال بالإنترنت.</span><span data-en-only>Could not load the surah. Please check your internet connection.</span><br>' +
        '<button class="action-btn" id="retryBtn"><span data-ar-only>إعادة المحاولة</span><span data-en-only>Try Again</span></button></div>';
    if(!loading) document.getElementById('retryBtn').addEventListener('click', loadSurah);
  }

  function loadSurah(){
    showStatus(true);
    fetch(API).then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); })
      .then(function(j){
        var arA = j.data[0].ayahs, enA = j.data[1].ayahs;
        ayahs = arA.map(function(a, i){ return { ar: a.text.trim(), en: enA[i].text, tafsir: '', g: a.number }; });
        // البسملة تأتي ملتصقة بالآية الأولى، فنفصلها
        var first = ayahs[0].ar.split(/\s+/);
        var basm = first.slice(0, 4).join(' ');
        if(normalize(basm) === normalize('بسم الله الرحمن الرحيم') && first.length > 4){
          surahBasmalaEl.textContent = basm;
          ayahs[0].ar = first.slice(4).join(' ');
        }
        renderSurah();
        buildMeanings();
        buildOrderList();
        buildFillBlanks();
        fetch(TAFSIR_API).then(function(r){ return r.json(); }).then(function(j){
          j.data.ayahs.forEach(function(a, i){ if(ayahs[i]) ayahs[i].tafsir = a.text; });
          if(!mx.hidden) renderCard(0);
        }).catch(function(){});
      })
      .catch(function(){ showStatus(false); });
  }

  function renderSurah(){
    surahTextEl.innerHTML = ayahs.map(function(a, i){
      return esc(a.ar) + ' <span class="ayah-num">﴿' + toAr(i+1) + '﴾</span>';
    }).join(' ');
    surahTranslationEl.innerHTML = ayahs.map(function(a, i){
      return '<p><b>' + (i+1) + '.</b> ' + esc(a.en) + '</p>';
    }).join('');
  }

  /* زر الاستماع */
  var listenBtn = document.getElementById('listenBtn');
  var listenToast = document.getElementById('listenToast');
  var audioEl = document.getElementById('surahAudio');
  /* ============ القرّاء: السورة كاملة وصوت كل آية، مع رابط احتياطي لكل قارئ ============ */
  function pad3(x){ return ('00' + x).slice(-3); }
  var RECITERS = [
    { id:'minsh-teacher', ar:'المنشاوي – المصحف المعلم', en:'Al-Minshawi – Teaching Mushaf',
      surah:['https://server10.mp3quran.net/minsh/Almusshaf-Al-Mo-lim/', 'https://server10.mp3quran.net/minsh/'],
      ayah:['ea:Minshawy_Teacher_128kbps', 'in:ar.minshawi'] },
    { id:'husr-teacher', ar:'الحصري – المصحف المعلم', en:'Al-Husary – Teaching Mushaf',
      surah:['https://server13.mp3quran.net/husr/Almusshaf-Al-Mo-lim/', 'https://server13.mp3quran.net/husr/'],
      ayah:['ea:Husary_Muallim_128kbps', 'in:ar.husary'] },
    { id:'minsh', ar:'المنشاوي – مرتّل', en:'Al-Minshawi – Murattal',
      surah:['https://server10.mp3quran.net/minsh/'],
      ayah:['ea:Minshawy_Murattal_128kbps', 'in:ar.minshawi'] },
    { id:'husr', ar:'الحصري – مرتّل', en:'Al-Husary – Murattal',
      surah:['https://server13.mp3quran.net/husr/'],
      ayah:['ea:Husary_128kbps', 'in:ar.husary'] },
    { id:'basit', ar:'عبد الباسط عبد الصمد – مرتّل', en:'Abdul Basit Abdus-Samad – Murattal',
      surah:['https://server7.mp3quran.net/basit/'],
      ayah:['ea:Abdul_Basit_Murattal_192kbps', 'in:ar.abdulbasitmurattal'] }
  ];
  var reciterSelect = document.getElementById('reciterSelect');
  var reciterId = 'minsh-teacher';
  try { var saved = localStorage.getItem('fz_reciter'); if(saved) reciterId = saved; } catch(e){}
  function reciter(){ for(var i = 0; i < RECITERS.length; i++){ if(RECITERS[i].id === reciterId) return RECITERS[i]; } return RECITERS[0]; }
  function fillReciters(){
    var en = isEn();
    reciterSelect.innerHTML = RECITERS.map(function(r){
      return '<option value="' + r.id + '"' + (r.id === reciter().id ? ' selected' : '') + '>' + (en ? r.en : r.ar) + '</option>';
    }).join('');
  }
  function surahUrls(){ return reciter().surah.map(function(b){ return b + '__NUM3__.mp3'; }); }
  function ayahUrls(ayahInSurah, globalNum){
    return reciter().ayah.map(function(src){
      if(src.indexOf('ea:') === 0) return 'https://everyayah.com/data/' + src.slice(3) + '/' + pad3(D.n) + pad3(ayahInSurah) + '.mp3';
      return 'https://cdn.islamic.network/quran/audio/128/' + src.slice(3) + '/' + globalNum + '.mp3';
    });
  }
  // يشغّل أول رابط، وإن فشل ينتقل للذي بعده
  function attachFallback(audio, urls, autoplay){
    var i = 0;
    audio.src = urls[0];
    audio.onerror = function(){
      i++;
      if(i < urls.length){ audio.src = urls[i]; if(autoplay()){ var p = audio.play(); if(p && p.catch) p.catch(function(){}); } }
    };
  }
  var surahWanted = false;
  function loadSurahAudio(){ attachFallback(audioEl, surahUrls(), function(){ return surahWanted; }); }
  fillReciters();
  loadSurahAudio();
  reciterSelect.addEventListener('change', function(){
    reciterId = reciterSelect.value;
    try { localStorage.setItem('fz_reciter', reciterId); } catch(e){}
    var wasPlaying = !audioEl.paused;
    audioEl.pause(); surahWanted = false; loadSurahAudio();
    if(wasPlaying){ surahWanted = true; var p = audioEl.play(); if(p && p.catch) p.catch(function(){}); }
  });
  document.getElementById('btnAr') && document.getElementById('btnAr').addEventListener('click', function(){ setTimeout(fillReciters, 0); });
  document.getElementById('btnEn') && document.getElementById('btnEn').addEventListener('click', function(){ setTimeout(fillReciters, 0); });

  listenBtn.addEventListener('click', function(){
    if(!audioEl.paused){ audioEl.pause(); surahWanted = false; return; }
    surahWanted = true;
    var p = audioEl.play();
    if(p && p.catch){
      p.catch(function(){
        listenToast.textContent = isEn() ? '🎧 Could not play the audio right now.' : '🎧 تعذّر تشغيل الصوت الآن.';
        listenToast.classList.add('show');
        setTimeout(function(){ listenToast.classList.remove('show'); }, 2500);
      });
    }
  });

  /* ============ لنفهم الآيات: بطاقة لكل آية داخل نافذة ============ */
  var kidNotes = {}; D.cards.forEach(function(c){ kidNotes[c[0]] = c; });
  var mx = document.getElementById('mx'), mxCard = document.getElementById('mxCard');
  var mxIndex = 0, understood = {}, ayahAudio = null;
  var mxPrev = document.getElementById('mxPrev'), mxNext = document.getElementById('mxNext'), mxGot = document.getElementById('mxGot');
  var mxDots = document.getElementById('mxDots');

  function updateTile(){
    var n = ayahs.length || D.count, got = Object.keys(understood).length;
    document.getElementById('tileSub').innerHTML = '<span data-ar-only>' + toAr(n) + ' بطاقة ملونة · اضغط لتفتح</span><span data-en-only>' + n + ' colorful cards · tap to open</span>';
    document.getElementById('meaningProgress').innerHTML = got
      ? '<span data-ar-only>⭐ فهمتَ ' + toAr(got) + ' من ' + toAr(n) + ' آيات</span><span data-en-only>⭐ You understood ' + got + ' of ' + n + ' verses</span>' : '';
  }
  function buildMeanings(){
    mxDots.innerHTML = '';
    ayahs.forEach(function(a, i){
      var d = document.createElement('button');
      d.type = 'button'; d.className = 'mx-dot'; d.textContent = i + 1;
      d.addEventListener('click', function(){ renderCard(i, i > mxIndex ? 1 : -1); });
      mxDots.appendChild(d);
    });
    updateTile();
  }
  function renderCard(i, dir){
    if(!ayahs.length) return;
    mxIndex = i;
    var a = ayahs[i], k = i + 1, note = kidNotes[k], en = isEn();
    var meaning = en ? esc(a.en) : (a.tafsir ? esc(a.tafsir) : '<span style="color:var(--ink-soft)">⏳ جارٍ تحميل التفسير...</span>');
    mxCard.className = 'mx-card c' + (i % 8);
    mxCard.innerHTML =
      '<div class="mx-face mx-front">' +
        '<div class="mx-num">' + (en ? k : toAr(k)) + '</div>' +
        '<p class="mx-ayah" lang="ar" dir="rtl">' + esc(a.ar) + '</p>' +
        '<div class="mx-hint"><span data-ar-only>✨ اضغط لترى المعنى</span><span data-en-only>✨ Tap to see the meaning</span></div>' +
      '</div>' +
      '<div class="mx-face mx-back">' +
        '<p class="mx-ayah-small" lang="ar" dir="rtl">﴿' + esc(a.ar) + '﴾ <span style="white-space:nowrap">(' + toAr(k) + ')</span></p>' +
        '<h4>💡 <span data-ar-only>المعنى</span><span data-en-only>Meaning</span></h4>' +
        '<p class="mx-meaning">' + meaning + '</p>' +
        (note ? '<div class="mx-kid">🌟 <b>' + fmt(en ? note[2] : note[1]) + '</b><br>' + fmt(en ? note[4] : note[3]) + '</div>' : '') +
        (en ? '' : '<p style="font-size:12px;color:var(--ink-soft);margin:12px 0 0">المصدر: التفسير الميسر</p>') +
      '</div>';
    if(dir){
      mxCard.style.setProperty('--dx', ((document.documentElement.dir === 'rtl' ? -1 : 1) * dir * 40) + 'px');
      mxCard.style.setProperty('--rot', (dir * 3) + 'deg');
      mxCard.classList.add('enter');
    }
    var n = ayahs.length;
    document.getElementById('mxTitle').innerHTML = '<span data-ar-only>الآية ' + toAr(k) + ' من ' + toAr(n) + '</span><span data-en-only>Verse ' + k + ' of ' + n + '</span>';
    document.getElementById('mxBar').style.width = (k / n * 100) + '%';
    var got = Object.keys(understood).length;
    document.getElementById('mxStars').textContent = '⭐ ' + (en ? got + ' / ' + n : toAr(got) + ' / ' + toAr(n));
    mxPrev.disabled = i === 0; mxNext.disabled = i === n - 1;
    var rtl = document.documentElement.dir === 'rtl';
    mxPrev.innerHTML = rtl ? '→ السابق' : '← Previous';
    mxNext.innerHTML = rtl ? 'التالي ←' : 'Next →';
    mxGot.classList.toggle('done', !!understood[k]);
    mxGot.innerHTML = understood[k]
      ? '<span data-ar-only>✅ فهمتُها</span><span data-en-only>✅ Got it</span>'
      : '<span data-ar-only>⭐ فهمتُها</span><span data-en-only>⭐ I understand</span>';
    Array.prototype.forEach.call(mxDots.children, function(d, j){
      d.classList.toggle('cur', j === i); d.classList.toggle('got', !!understood[j+1]);
      d.textContent = en ? (j + 1) : toAr(j + 1);
    });
    var cur = mxDots.children[i]; if(cur && cur.scrollIntoView) cur.scrollIntoView({ block:'nearest', inline:'center' });
  }
  function stopAyahAudio(){ if(ayahAudio){ ayahAudio.pause(); ayahAudio = null; } }
  function go(d){ var j = mxIndex + d; if(j >= 0 && j < ayahs.length){ stopAyahAudio(); renderCard(j, d); } }
  function openMeanings(){
    if(!ayahs.length) return;
    mx.hidden = false; document.body.style.overflow = 'hidden';
    renderCard(mxIndex, 0);
  }
  function closeMeanings(){ mx.hidden = true; document.body.style.overflow = ''; stopAyahAudio(); updateTile(); }

  document.getElementById('openMeanings').addEventListener('click', openMeanings);
  document.getElementById('mxClose').addEventListener('click', closeMeanings);
  mx.addEventListener('click', function(e){ if(e.target === mx) closeMeanings(); });
  mxPrev.addEventListener('click', function(){ go(-1); });
  mxNext.addEventListener('click', function(){ go(1); });
  mxCard.addEventListener('click', function(){ mxCard.classList.remove('enter'); mxCard.classList.toggle('flipped'); });
  mxCard.addEventListener('animationend', function(){ mxCard.classList.remove('enter'); });
  mxGot.addEventListener('click', function(){
    var k = mxIndex + 1;
    if(understood[k]) delete understood[k]; else understood[k] = true;
    var all = Object.keys(understood).length === ayahs.length;
    var doneEl = document.getElementById('mxDone');
    doneEl.textContent = all ? (isEn() ? '🎉 Amazing! You understood every verse!' : '🎉 رائع! فهمتَ كل آيات السورة!') : '';
    if(all){ launchConfetti(); renderCard(mxIndex, 0); }
    else if(understood[k] && mxIndex < ayahs.length - 1){ renderCard(mxIndex, 0); setTimeout(function(){ go(1); }, 450); }
    else renderCard(mxIndex, 0);
  });
  document.getElementById('mxListen').addEventListener('click', function(){
    var a = ayahs[mxIndex]; if(!a) return;
    stopAyahAudio();
    var thisAudio = new Audio();
    ayahAudio = thisAudio;
    attachFallback(thisAudio, ayahUrls(mxIndex + 1, a.g), function(){ return ayahAudio === thisAudio; });
    var p = thisAudio.play(); if(p && p.catch) p.catch(function(){});
  });
  document.addEventListener('keydown', function(e){
    if(mx.hidden) return;
    var rtl = document.documentElement.dir === 'rtl';
    if(e.key === 'Escape') closeMeanings();
    else if(e.key === 'ArrowLeft') go(rtl ? 1 : -1);
    else if(e.key === 'ArrowRight') go(rtl ? -1 : 1);
    else if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); mxCard.classList.toggle('flipped'); }
  });
  /* سحب البطاقة يمينًا ويسارًا */
  var swipeX = null;
  document.getElementById('mxStage').addEventListener('pointerdown', function(e){ swipeX = e.clientX; });
  document.getElementById('mxStage').addEventListener('pointerup', function(e){
    if(swipeX === null) return;
    var dx = e.clientX - swipeX; swipeX = null;
    if(Math.abs(dx) > 60){
      var rtl = document.documentElement.dir === 'rtl';
      go((dx < 0) === rtl ? 1 : -1);
    }
  });

  /* ============ ماذا نتعلم ============ */
  var lessonsGrid = document.getElementById('lessonsGrid');
  D.lessons.forEach(function(l){
    var card = document.createElement('div');
    card.className = 'mini-card c' + ((D.n + lessonsGrid.children.length * 3) % 8);
    card.addEventListener('click', function(){ card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop'); });
    card.innerHTML = '<span class="icon">' + l[0] + '</span><span data-ar-only>' + fmt(l[1]) + '</span><span data-en-only>' + fmt(l[2]) + '</span>';
    lessonsGrid.appendChild(card);
  });

  /* ============ اسم الطالب ============ */
  var nameInput = document.getElementById('studentName');
  var welcomeMsg = document.getElementById('welcomeMsg');
  function renderWelcome(){
    var name = nameInput.value.trim();
    if(!name){ welcomeMsg.classList.remove('show'); welcomeMsg.textContent=''; return; }
    welcomeMsg.textContent = isEn()
      ? ('Welcome, champion ' + name + ' 👋 Ready to learn Surat ' + NAME_EN + '?')
      : ('أهلاً بك يا بطل ' + name + ' 👋 جاهز لتعلم سورة ' + NAME_AR + '؟');
    welcomeMsg.classList.add('show');
  }
  nameInput.addEventListener('input', renderWelcome);

  /* ============ نشاط الترتيب (دائمًا بالعربية) ============ */
  var orderList = document.getElementById('orderList');
  var orderFeedback = document.getElementById('orderFeedback');
  var orderStart = D.order[0] - 1, orderEnd = D.order[1] - 1;
  var orderState = [];

  function buildOrderList(){
    if(!ayahs.length) return;
    orderState = [];
    for(var k = orderStart; k <= orderEnd && k < ayahs.length; k++) orderState.push(k);
    do {
      for(var i=orderState.length-1;i>0;i--){
        var j = Math.floor(Math.random()*(i+1));
        var tmp = orderState[i]; orderState[i]=orderState[j]; orderState[j]=tmp;
      }
    } while(orderState.length > 1 && orderState.every(function(v, p){ return v === orderStart + p; }));
    renderOrderList();
    orderFeedback.textContent = '';
    orderFeedback.className = 'activity-feedback';
  }

  function renderOrderList(){
    if(!ayahs.length) return;
    orderList.innerHTML = '';
    orderState.forEach(function(idx){
      var li = document.createElement('li');
      li.dataset.idx = idx;
      li.innerHTML = '<span class="handle">☰</span><span lang="ar">' + esc(tokens(ayahs[idx].ar).join(' ')) + '</span>';
      orderList.appendChild(li);
    });
  }

  var draggingEl = null;
  orderList.addEventListener('pointerdown', function(e){
    var li = e.target.closest('li');
    if(!li) return;
    draggingEl = li;
    li.classList.add('dragging');
    li.setPointerCapture(e.pointerId);
  });
  orderList.addEventListener('pointermove', function(e){
    if(!draggingEl) return;
    var afterEl = getDragAfterElement(orderList, e.clientY);
    if(afterEl == null){ orderList.appendChild(draggingEl); }
    else { orderList.insertBefore(draggingEl, afterEl); }
  });
  function endDrag(){
    if(draggingEl){
      draggingEl.classList.remove('dragging');
      draggingEl = null;
      orderState = Array.prototype.map.call(orderList.children, function(li){ return parseInt(li.dataset.idx,10); });
    }
  }
  orderList.addEventListener('pointerup', endDrag);
  orderList.addEventListener('pointercancel', endDrag);

  function getDragAfterElement(container, y){
    var items = container.querySelectorAll('li:not(.dragging)');
    var closest = null; var closestOffset = -Infinity;
    Array.prototype.forEach.call(items, function(child){
      var box = child.getBoundingClientRect();
      var offset = y - box.top - box.height/2;
      if(offset < 0 && offset > closestOffset){ closestOffset = offset; closest = child; }
    });
    return closest;
  }

  document.getElementById('checkOrderBtn').addEventListener('click', function(){
    var items = orderList.querySelectorAll('li');
    if(!items.length) return;
    var allCorrect = true;
    Array.prototype.forEach.call(items, function(li, position){
      var idx = parseInt(li.dataset.idx,10);
      if(idx === orderStart + position){
        li.classList.remove('wrong-slot'); li.classList.add('correct-slot');
      } else {
        li.classList.remove('correct-slot'); li.classList.add('wrong-slot');
        allCorrect = false;
      }
    });
    orderFeedback.className = 'activity-feedback ' + (allCorrect ? 'good' : 'bad');
    orderFeedback.textContent = allCorrect
      ? (isEn() ? '🎉 Perfect order!' : '🎉 الترتيب صحيح تمامًا!')
      : (isEn() ? 'Not quite — try rearranging the highlighted verses.' : 'ليس تمامًا، حاول تعديل الآيات المميزة.');
  });
  document.getElementById('shuffleOrderBtn').addEventListener('click', buildOrderList);

  /* ============ أكمل الآية (دائمًا بالعربية: الكلمة الأخيرة من الآية) ============ */
  var fillBlanks = [];
  var fbIndex = 0;
  var fbTextEl = document.getElementById('fillblankText');
  var fbInput = document.getElementById('fillblankInput');
  var fbFeedback = document.getElementById('fillblankFeedback');
  var fbProgress = document.getElementById('fbProgress');
  var fbAnswer = document.getElementById('fbAnswer');

  function buildFillBlanks(){
    fillBlanks = [];
    D.blanks.forEach(function(k){
      var a = ayahs[k-1];
      if(!a) return;
      var w = tokens(a.ar);
      if(w.length < 2) return;
      var answer = w[w.length-1];
      var before = w.slice(0, -1);
      fillBlanks.push({ k:k, text: before.join(' ') + ' ______', answer: answer });
    });
    fbIndex = 0;
    renderFillBlank();
  }

  function renderFillBlank(){
    if(!fillBlanks.length) return;
    var item = fillBlanks[fbIndex];
    fbTextEl.innerHTML = '<span lang="ar" dir="rtl">' + esc(item.text) + '</span>' +
      '<span class="fb-ref"><span data-ar-only>(الآية ' + toAr(item.k) + ')</span><span data-en-only>(Verse ' + item.k + ')</span></span>';
    fbInput.value = '';
    fbAnswer.textContent = '';
    fbFeedback.textContent = '';
    fbFeedback.className = 'activity-feedback';
    fbProgress.textContent = (isEn() ? 'Question ' : 'السؤال ') + (fbIndex+1) + ' / ' + fillBlanks.length;
  }
  function nextBlank(){
    setTimeout(function(){
      fbIndex = (fbIndex + 1) % fillBlanks.length;
      renderFillBlank();
    }, 1400);
  }

  document.getElementById('fillblankCheck').addEventListener('click', function(){
    if(!fillBlanks.length) return;
    var item = fillBlanks[fbIndex];
    var isCorrect = normalize(fbInput.value) !== '' && normalize(fbInput.value) === normalize(item.answer);
    fbFeedback.className = 'activity-feedback ' + (isCorrect ? 'good' : 'bad');
    fbFeedback.textContent = isCorrect
      ? (isEn() ? '✅ Well done!' : '✅ أحسنت!')
      : (isEn() ? '❌ Try again.' : '❌ حاول مرة أخرى.');
    if(isCorrect){ fbAnswer.textContent = item.answer; nextBlank(); }
  });
  fbInput.addEventListener('keydown', function(e){ if(e.key === 'Enter') document.getElementById('fillblankCheck').click(); });
  document.getElementById('fillblankShow').addEventListener('click', function(){
    if(!fillBlanks.length) return;
    fbAnswer.textContent = fillBlanks[fbIndex].answer;
  });

  /* ============ الاختبار ============ */
  function countQuestion(){
    var n = D.count, cands = [n+3, n-2, n+6, n+1, n+2], d = [];
    cands.forEach(function(x){ if(x > 0 && x !== n && d.length < 2 && d.indexOf(x) < 0) d.push(x); });
    var opts = d.map(function(x){ return { ar: toAr(x) + ' آيات', en: x + ' verses', correct:false }; });
    opts.splice(n % 3, 0, { ar: toAr(n) + ' آيات', en: n + ' verses', correct:true });
    return { qAr:'كم عدد آيات سورة ' + NAME_AR + '؟', qEn:'How many verses does Surat ' + NAME_EN + ' have?', options: opts };
  }
  var quizData = [countQuestion()].concat(D.quiz.map(function(q){
    return { qAr:q[0], qEn:q[1], options: q[2].map(function(o, i){ return { ar:o[0], en:o[1], correct: i === q[3] }; }) };
  }));
  var quizIndex = 0;
  var quizScore = 0;
  var quizAnswered = false;

  var quizProgressEl = document.getElementById('quizProgress');
  var quizQuestionEl = document.getElementById('quizQuestion');
  var quizOptionsEl = document.getElementById('quizOptions');
  var quizFeedbackEl = document.getElementById('quizFeedback');
  var quizNextWrap = document.getElementById('quizNextWrap');

  function renderQuiz(){
    var en = isEn();
    quizAnswered = false;
    var q = quizData[quizIndex];
    quizProgressEl.textContent = (en ? 'Question ' : 'السؤال ') + (quizIndex+1) + ' / ' + quizData.length;
    quizQuestionEl.innerHTML = fmt(en ? q.qEn : q.qAr);
    quizOptionsEl.innerHTML = '';
    quizFeedbackEl.textContent = '';
    quizFeedbackEl.className = 'quiz-feedback';
    quizNextWrap.style.display = 'none';

    q.options.forEach(function(opt){
      var div = document.createElement('div');
      div.className = 'quiz-option';
      div.dataset.correct = opt.correct ? 'true' : 'false';
      div.innerHTML = '<span class="dot"></span><span>' + fmt(en ? opt.en : opt.ar) + '</span>';
      div.addEventListener('click', function(){
        if(quizAnswered) return;
        quizAnswered = true;
        var enNow = isEn();
        if(opt.correct){
          div.classList.add('correct');
          quizScore++;
          quizFeedbackEl.className = 'quiz-feedback good';
          quizFeedbackEl.textContent = enNow ? '✅ Well done!' : '✅ أحسنت!';
        } else {
          div.classList.add('wrong');
          quizFeedbackEl.className = 'quiz-feedback bad';
          quizFeedbackEl.textContent = enNow ? '❌ Try again next time.' : '❌ حاول مرة أخرى.';
          Array.prototype.forEach.call(quizOptionsEl.children, function(c){
            if(c.dataset.correct === 'true') c.classList.add('correct');
          });
        }
        if(quizIndex < quizData.length - 1){
          quizNextWrap.style.display = 'block';
        } else {
          setTimeout(showResults, 900);
        }
      });
      quizOptionsEl.appendChild(div);
    });
  }

  document.getElementById('quizNextBtn').addEventListener('click', function(){
    quizIndex++;
    renderQuiz();
  });

  function showResults(){
    var en = isEn();
    var resultCard = document.getElementById('resultCard');
    var percentage = Math.round((quizScore / quizData.length) * 100);
    var starsCount = Math.round((quizScore / quizData.length) * 5);
    document.getElementById('resultStars').textContent = '⭐'.repeat(Math.max(starsCount,1)) + '☆'.repeat(5-Math.max(starsCount,1));
    document.getElementById('resultScore').textContent = en
      ? (quizScore + ' / ' + quizData.length + ' correct — ' + percentage + '%')
      : ('عدد الإجابات الصحيحة: ' + quizScore + ' / ' + quizData.length + ' — النسبة: ' + percentage + '%');
    var excellentEl = document.getElementById('resultExcellent');
    if(percentage >= 80){
      excellentEl.textContent = en ? ('🏆 Excellent! You have mastered the ' + NAME_EN + ' lesson.') : ('🏆 ممتاز! لقد أتقنت درس سورة ' + NAME_AR + '.');
    } else {
      excellentEl.textContent = en ? '🌱 Great effort — keep practicing!' : '🌱 محاولة رائعة، استمر في التدريب!';
    }
    resultCard.classList.add('show');
    resultCard.scrollIntoView({ behavior:'smooth', block:'center' });
  }

  /* ============ استلام الوسام + قصاصات الاحتفال ============ */
  var claimBadgeBtn = document.getElementById('claimBadgeBtn');
  var badgeReveal = document.getElementById('badgeReveal');
  claimBadgeBtn.addEventListener('click', function(){
    badgeReveal.classList.add('show');
    claimBadgeBtn.disabled = true;
    launchConfetti();
    badgeReveal.scrollIntoView({ behavior:'smooth', block:'center' });
  });

  var canvas = document.getElementById('confetti-canvas');
  var ctx = canvas.getContext('2d');
  function resizeCanvas(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  var confettiColors = ['#C9A24B','#1F5C42','#EAD9A0','#FBF7EE','#2F7D57'];
  var particles = [];
  var animId = null;
  function launchConfetti(){
    particles = [];
    for(var i=0;i<150;i++){
      particles.push({
        x: Math.random()*canvas.width, y: -20 - Math.random()*canvas.height*0.3,
        w: 6+Math.random()*6, h: 8+Math.random()*10,
        color: confettiColors[Math.floor(Math.random()*confettiColors.length)],
        speedY: 2+Math.random()*3, speedX: (Math.random()-0.5)*2,
        rot: Math.random()*360, rotSpeed: (Math.random()-0.5)*10
      });
    }
    if(animId) cancelAnimationFrame(animId);
    var start = Date.now();
    function frame(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      var alive = false;
      particles.forEach(function(p){
        p.y += p.speedY; p.x += p.speedX; p.rot += p.rotSpeed;
        if(p.y < canvas.height+20) alive = true;
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
        ctx.fillStyle = p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore();
      });
      if(alive && Date.now()-start < 4500){ animId = requestAnimationFrame(frame); }
      else { ctx.clearRect(0,0,canvas.width,canvas.height); }
    }
    frame();
  }

  /* ============ تبديل اللغة ============ */
  var btnAr = document.getElementById('btnAr');
  var btnEn = document.getElementById('btnEn');
  function setLang(en){
    document.body.classList.toggle('lang-en', en);
    document.documentElement.lang = en ? 'en' : 'ar';
    document.documentElement.dir = en ? 'ltr' : 'rtl';
    btnAr.classList.toggle('active', !en);
    btnEn.classList.toggle('active', en);
    nameInput.placeholder = en ? nameInput.dataset.phEn : nameInput.dataset.phAr;
    renderWelcome();
    updateTile();
    if(!mx.hidden) renderCard(mxIndex, 0);
    renderOrderList();
    renderFillBlank();
    quizScore = 0; quizIndex = 0;
    renderQuiz();
    document.getElementById('resultCard').classList.remove('show');
    badgeReveal.classList.remove('show');
    claimBadgeBtn.disabled = false;
  }
  btnAr.addEventListener('click', function(){ setLang(false); });
  btnEn.addEventListener('click', function(){ setLang(true); });

  renderQuiz();
  updateTile();
  loadSurah();

})();
</script>

</body>
</html>
