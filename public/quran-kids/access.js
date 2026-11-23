/* صلاحيات الدروس التفاعلية (Fusha Zone)
   free: متاح للجميع · member: يحتاج تسجيل حساب مجاني · sub: يحتاج اشتراكًا فعّالًا
   تُقرأ حالة الدخول من حساب الطالب في نفس الموقع (Firebase Auth). */
(function(){
  "use strict";
  var FREE = ['index', 'surah-110', 'surah-111', 'surah-112', 'surah-113', 'surah-114',
              'tajweed-k1-01', 'tajweed-k1-02', 'tajweed-k1-03', 'tajweed-s-01', 'tajweed-s-02', 'tajweed-s-03'];
  function pageId(p){ return String(p || '').split('/').pop().replace(/\.html.*$/, '') || 'index'; }
  function levelOf(p){
    var id = pageId(p);
    if(FREE.indexOf(id) >= 0) return 'free';
    var m = id.match(/^surah-(\d{3})$/);
    if(m){ var n = +m[1]; return (n >= 78 && n <= 114) ? 'member' : 'sub'; }   // جزء عمّ للأعضاء، وغيره بالاشتراك
    if(/^tajweed-(k1|s)-\d+$/.test(id)) return 'member';                      // تجويد الأطفال ١ والمختصر للأعضاء
    return 'sub';                                                              // كل ما عدا ذلك بالاشتراك
  }
  var RANK = { guest: 0, member: 1, sub: 2 };
  var NEED = { free: 0, member: 1, sub: 2 };

  var CFG = { apiKey: 'AIzaSyB76rAsSoGs4oIacskBjanetWi98rAK_08', authDomain: 'fusha-zone.firebaseapp.com', projectId: 'fusha-zone',
              storageBucket: 'fusha-zone.firebasestorage.app', messagingSenderId: '443942740832', appId: '1:443942740832:web:865e6101403e605d0c3405' };
  var V = '10.14.1';
  function load(src){ return new Promise(function(ok, no){ var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }); }

  var tierPromise = null;
  function tier(){
    if(tierPromise) return tierPromise;
    if(location.protocol === 'file:' && window.__FZ_TEST_TIER) return (tierPromise = Promise.resolve(window.__FZ_TEST_TIER));
    tierPromise = new Promise(function(resolve){
      var done = false; function fin(t){ if(!done){ done = true; resolve(t); } }
      setTimeout(function(){ fin('guest'); }, 9000);
      var base = 'https://www.gstatic.com/firebasejs/' + V + '/';
      load(base + 'firebase-app-compat.js').then(function(){ return Promise.all([load(base + 'firebase-auth-compat.js'), load(base + 'firebase-firestore-compat.js')]); })
        .then(function(){
          var app = firebase.apps.length ? firebase.app() : firebase.initializeApp(CFG);
          var auth = app.auth(), db = app.firestore();
          auth.onAuthStateChanged(function(u){
            if(!u){ fin('guest'); return; }
            var get = function(path){ return db.doc(path).get().then(function(s){ return s; }, function(){ return null; }); };
            Promise.all([get('admins/' + u.uid), get('teachers/' + u.uid), get('users/' + u.uid)]).then(function(r){
              var staff = (r[0] && r[0].exists) || (r[1] && r[1].exists);
              var d = r[2] && r[2].exists ? r[2].data() : {};
              fin(staff || String(d.subscriptionStatus || '') === 'active' ? 'sub' : 'member');
            });
          });
        })
        .catch(function(){ fin('guest'); });
    });
    return tierPromise;
  }

  /* ---------- الشكل ---------- */
  var css = '' +
    '.fz-badge{display:inline-flex;align-items:center;gap:4px;font-weight:800;font-size:12px;padding:4px 10px;border-radius:999px;white-space:nowrap;font-family:inherit}' +
    '.fz-badge.member{background:linear-gradient(135deg,#F3D98B,#C9A24B);color:#3B2A05;border:1px solid #A8832E}' +
    '.fz-badge.sub{background:linear-gradient(135deg,#EF4444,#B91C1C);color:#fff;border:1px solid #991B1B}' +
    '.fz-mosaic{position:relative;overflow:hidden}' +
    '.fz-mosaic > *:not(.fz-badge){filter:blur(1.2px);opacity:.7}' +
    '.fz-mosaic:after{content:"";position:absolute;inset:0;pointer-events:none;border-radius:inherit;' +
      'background-image:linear-gradient(45deg,rgba(255,255,255,.35) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.35) 75%),linear-gradient(45deg,rgba(255,255,255,.35) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.35) 75%);' +
      'background-size:14px 14px;background-position:0 0,7px 7px}' +
    '.fz-mosaic > .fz-badge{position:absolute;top:8px;inset-inline-end:12px;z-index:3;box-shadow:0 4px 12px rgba(0,0,0,.18)}' +
    'body.fz-locked > *:not(#fzLock):not(#fzBack):not(script){filter:blur(7px);pointer-events:none;user-select:none}' +
    'body.fz-checking > *:not(#fzBack):not(script){filter:blur(7px)}' +
    '#fzLock{position:fixed;inset:0;z-index:80;display:flex;align-items:center;justify-content:center;padding:18px;' +
      'background-image:linear-gradient(45deg,rgba(11,59,44,.10) 25%,transparent 25%,transparent 75%,rgba(11,59,44,.10) 75%),linear-gradient(45deg,rgba(11,59,44,.10) 25%,transparent 25%,transparent 75%,rgba(11,59,44,.10) 75%);background-size:22px 22px;background-position:0 0,11px 11px}' +
    '#fzLock .box{max-width:420px;width:100%;background:#fff;border-radius:26px;padding:26px 22px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.3);border-top:8px solid var(--fzc)}' +
    '#fzLock .ico{font-size:54px}#fzLock h2{margin:8px 0;color:#0B3B2C;font-size:24px}#fzLock p{color:#555;line-height:1.8;margin:0 0 16px}' +
    '#fzLock a.btn{display:block;text-decoration:none;font-weight:800;padding:13px 16px;border-radius:999px;margin:8px 0}' +
    '#fzLock a.gold{background:linear-gradient(135deg,#F3D98B,#C9A24B);color:#3B2A05}#fzLock a.red{background:linear-gradient(135deg,#EF4444,#B91C1C);color:#fff}' +
    '#fzLock a.ghost{color:#0B3B2C;background:#F3F4F6}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function en(){ return document.body.classList.contains('lang-en'); }
  function badgeHtml(level){
    return level === 'member'
      ? '<span class="fz-badge member">🔒 <span data-ar-only>سجّل مجانًا</span><span data-en-only>Free sign-up</span></span>'
      : '<span class="fz-badge sub">💎 <span data-ar-only>بالاشتراك</span><span data-en-only>Subscribers</span></span>';
  }

  // صفحة الدروس: علامة وفسيفساء على الدروس المقفلة
  function markLinks(root){
    tier().then(function(t){
      (root || document).querySelectorAll('a[href$=".html"]').forEach(function(a){
        var lv = levelOf(a.getAttribute('href'));
        a.classList.remove('fz-mosaic'); var old = a.querySelector('.fz-badge'); if(old) old.remove();
        if(RANK[t] >= NEED[lv]) return;
        a.classList.add('fz-mosaic');
        a.insertAdjacentHTML('beforeend', badgeHtml(lv));
      });
    });
  }

  // صفحة الدرس: تُقفل إن لم يكن للزائر صلاحية
  function guard(){
    var lv = levelOf(location.pathname);
    if(lv === 'free') return;
    document.body.classList.add('fz-checking');
    tier().then(function(t){
      document.body.classList.remove('fz-checking');
      if(RANK[t] >= NEED[lv]) return;
      var member = lv === 'member';
      var box = document.createElement('div'); box.id = 'fzLock';
      var next = encodeURIComponent(location.pathname);
      box.innerHTML = '<div class="box" style="--fzc:' + (member ? '#C9A24B' : '#B91C1C') + '">' +
        '<div class="ico">' + (member ? '🔒' : '💎') + '</div>' +
        '<h2><span data-ar-only>' + (member ? 'سجّل في الموقع لتكمل' : 'هذا الدرس للمشتركين') + '</span><span data-en-only>' + (member ? 'Sign up to continue' : 'This lesson is for subscribers') + '</span></h2>' +
        '<p><span data-ar-only>' + (member ? 'باقي الدروس متاحة مجانًا بعد إنشاء حساب في Fusha Zone.' : 'اشترك في إحدى باقات Fusha Zone لتفتح كل الدروس التفاعلية.') + '</span>' +
           '<span data-en-only>' + (member ? 'The rest of the lessons are free once you create a Fusha Zone account.' : 'Subscribe to a Fusha Zone package to unlock every interactive lesson.') + '</span></p>' +
        (member ? '<a class="btn gold" href="/#/join-us"><span data-ar-only>✨ سجّل مجانًا</span><span data-en-only>✨ Sign up free</span></a>'
                : '<a class="btn red" href="/#/pricing"><span data-ar-only>💎 اشترك الآن</span><span data-en-only>💎 Subscribe now</span></a>') +
        '<a class="btn ghost" href="/#/login"><span data-ar-only>لديّ حساب: تسجيل الدخول</span><span data-en-only>I have an account: log in</span></a>' +
        '<a class="btn ghost" href="./"><span data-ar-only>الدروس المتاحة</span><span data-en-only>Available lessons</span></a>' +
        '</div>';
      document.body.appendChild(box);
      document.body.classList.add('fz-locked');
      try { sessionStorage.setItem('fz_after_login', next); } catch(e){}
    });
  }

  window.FZAccess = { levelOf: levelOf, tier: tier, markLinks: markLinks, guard: guard, badgeHtml: badgeHtml };
})();
