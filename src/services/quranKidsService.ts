import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './firebase';

// مقدار تمارين كل سورة في دروس القرآن للأطفال (تقرؤه الصفحات الثابتة في public/quran-kids)
// الوثيقة: quranKids/s{رقم السورة} = { from, to }
export interface SurahRange {
  from: number;
  to: number;
}

const COL = 'quranKids';

export const quranKidsService = {
  async listRanges(): Promise<Record<number, SurahRange>> {
    const snap = await getDocs(collection(db, COL));
    const out: Record<number, SurahRange> = {};
    snap.forEach((d) => {
      const n = Number(d.id.replace(/^s/, ''));
      const data = d.data() as Partial<SurahRange>;
      if (n && typeof data.from === 'number' && typeof data.to === 'number') out[n] = { from: data.from, to: data.to };
    });
    return out;
  },
  async setRange(surah: number, from: number, to: number) {
    await setDoc(doc(db, COL, `s${surah}`), { from, to, surah, updatedAt: serverTimestamp() });
  },
  async clearRange(surah: number) {
    await deleteDoc(doc(db, COL, `s${surah}`));
  }
};

// رابط خاص لطالب: سورة ومقدار آيات واسم اختياري
export const quranKidsLink = (surah: number, from: number, to: number, name?: string) => {
  const base = typeof window !== 'undefined' ? window.location.origin : 'https://fushazone.com';
  const params = new URLSearchParams({ from: String(from), to: String(to) });
  if (name && name.trim()) params.set('name', name.trim());
  return `${base}/quran-kids/surah-${String(surah).padStart(3, '0')}.html?${params.toString()}`;
};
