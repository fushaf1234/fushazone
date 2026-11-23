import { collection, deleteDoc, doc, getDocs, setDoc, writeBatch } from 'firebase/firestore';
import { db } from './firebase';

/* ------------------------------------------------------------------ */
/*  الباقات والأسعار: تُدار بالكامل من لوحة الإدارة (مجموعة packages)  */
/* ------------------------------------------------------------------ */

export type ProgramId = 'arabic' | 'conversation' | 'quran' | 'kids' | 'single';

export const PROGRAMS: { id: ProgramId; ar: string; en: string }[] = [
  { id: 'arabic', ar: 'اللغة العربية (فُصحى)', en: 'Arabic Language (Fusha)' },
  { id: 'conversation', ar: 'المحادثات التفاعلية لتنمية اللغة', en: 'Interactive Conversation for Language Development' },
  { id: 'quran', ar: 'القرآن الكريم والتجويد', en: 'Quran & Tajweed' },
  { id: 'kids', ar: 'العربية والقرآن للأطفال', en: 'Arabic & Quran for Kids' },
  { id: 'single', ar: 'تقييم المستوى', en: 'Level Assessment' }
];

export interface PricePackage {
  id: string;
  program: ProgramId;
  titleAr: string;
  titleEn: string;
  descAr?: string;
  descEn?: string;
  sessionsPerMonth?: number; // 0 أو فارغ = جلسة منفردة
  minutes?: number;
  individualPrice?: number; // للمتعلم الواحد
  groupPrice?: number; // لكل طالب في المجموعة (شهريًا)
  unit: 'month' | 'session' | 'hour';
  free?: boolean;
  featured?: boolean;
  order: number;
  active: boolean;
  updatedAt?: string;
}

const clean = <T extends object>(obj: T): T => JSON.parse(JSON.stringify(obj));

// الباقات التي اعتمدتها الإدارة (تُضاف بضغطة زر من لوحة الإدارة عندما تكون القائمة فارغة، ثم تُعدَّل من هناك)
export const APPROVED_PACKAGES: Omit<PricePackage, 'updatedAt'>[] = [
  {
    id: 'arabic-flex',
    program: 'arabic',
    titleAr: 'الباقة الشهرية المرنة',
    titleEn: 'Flexible Monthly Package',
    descAr: 'جدول مرن يتناسب مع أوقاتك لضمان الاستمرارية وتطوير المهارات.',
    descEn: 'A flexible schedule that fits your time, for steady progress and stronger skills.',
    sessionsPerMonth: 8,
    minutes: 50,
    individualPrice: 120,
    groupPrice: 80,
    unit: 'month',
    featured: true,
    order: 1,
    active: true
  },
  {
    id: 'conversation-pack',
    program: 'conversation',
    titleAr: 'باقة المحادثة بالعربية الفصحى',
    titleEn: 'Fusha Arabic Conversation Package',
    descAr: 'حصص محادثة بالعربية الفصحى لتطوير الطلاقة الشفهية وكسر حاجز الخوف من التحدث.',
    descEn: 'Conversation lessons in Fusha Arabic to build spoken fluency and break the fear of speaking.',
    sessionsPerMonth: 8,
    minutes: 50,
    individualPrice: 100,
    groupPrice: 70,
    unit: 'month',
    order: 3,
    active: true
  },
  {
    id: 'conversation-single',
    program: 'arabic',
    titleAr: 'جلسة محادثة فصحى منفردة',
    titleEn: 'Single Fusha Conversation Session',
    descAr: 'جلسة محادثة واحدة بالعربية الفصحى، تُحجز وتُدفع منفردة دون اشتراك شهري.',
    descEn: 'One Fusha Arabic conversation session, booked and paid on its own without a monthly subscription.',
    minutes: 60,
    individualPrice: 20,
    unit: 'hour',
    order: 2,
    active: true
  },
  {
    id: 'quran-full',
    program: 'quran',
    titleAr: 'الباقة الشهرية الكاملة',
    titleEn: 'Full Monthly Package',
    descAr: 'دراسة ومتابعة مستمرة لضبط مخارج الحروف وأحكام التجويد وحفظ متقن لكتاب الله الكريم.',
    descEn: 'Steady study and follow-up for correct pronunciation, Tajweed rules and solid memorization of the Holy Quran.',
    sessionsPerMonth: 8,
    minutes: 40,
    individualPrice: 80,
    groupPrice: 50,
    unit: 'month',
    featured: true,
    order: 4,
    active: true
  },
  {
    id: 'single-session',
    program: 'quran',
    titleAr: 'جلسة فردية',
    titleEn: 'Single Session',
    descAr: 'حصة قرآن وتجويد فردية واحدة، تُدفع للحصة دون اشتراك شهري.',
    descEn: 'One private Quran & Tajweed lesson, paid per lesson without a monthly subscription.',
    minutes: 40,
    individualPrice: 15,
    unit: 'session',
    order: 5,
    active: true
  },
  {
    id: 'level-assessment',
    program: 'single',
    titleAr: 'تقييم المستوى',
    titleEn: 'Level Assessment',
    descAr: 'جلسة مجانية لتحديد مستوى الطالب في العربية أو التلاوة قبل التسجيل.',
    descEn: 'A free session to find the student’s level in Arabic or Quran recitation before enrolling.',
    unit: 'session',
    free: true,
    order: 6,
    active: true
  }
];

export const packagesService = {
  async list(): Promise<PricePackage[]> {
    const snap = await getDocs(collection(db, 'packages'));
    return snap.docs
      .map((d) => ({ ...(d.data() as any), id: d.id } as PricePackage))
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  },

  async save(p: PricePackage): Promise<void> {
    await setDoc(doc(db, 'packages', p.id), clean({ ...p, updatedAt: new Date().toISOString() }));
  },

  async remove(id: string): Promise<void> {
    await deleteDoc(doc(db, 'packages', id));
  },

  async addApproved(): Promise<void> {
    const batch = writeBatch(db);
    const now = new Date().toISOString();
    APPROVED_PACKAGES.forEach((p) => batch.set(doc(db, 'packages', p.id), clean({ ...p, updatedAt: now })));
    await batch.commit();
  }
};

export const programName = (id: ProgramId, isAr: boolean) => {
  const p = PROGRAMS.find((x) => x.id === id);
  return p ? (isAr ? p.ar : p.en) : '';
};

// نوع الاشتراك: شهري، أو حصة بحصة
export const billingLabel = (p: PricePackage, isAr: boolean) =>
  p.free ? (isAr ? 'مجانًا' : 'Free') : p.unit === 'month' ? (isAr ? 'اشتراك شهري' : 'Monthly subscription') : isAr ? 'حصة بحصة' : 'Pay per lesson';

export const unitLabel = (u: PricePackage['unit'], isAr: boolean) =>
  u === 'month' ? (isAr ? 'شهريًا' : 'per month') : u === 'hour' ? (isAr ? 'للساعة' : 'per hour') : isAr ? 'للجلسة' : 'per session';
