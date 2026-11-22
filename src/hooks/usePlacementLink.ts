import { useAuth } from '../context/AuthContext';

// تقييم المستوى جلسة مجانية مع المعلم: الزائر ← التسجيل المجاني، والعضو ← طلب التسجيل (مع خيار «أحتاج تقييمًا»)
export const usePlacementLink = (): { href: string; target?: string; rel?: string; loggedIn: boolean; label: (isAr: boolean) => string } => {
  const { isAuthenticated } = useAuth();
  return {
    href: isAuthenticated ? '#/register' : '#/join-us',
    loggedIn: isAuthenticated,
    label: (isAr: boolean) => (isAr ? '{احجز|احجزي} جلسة تقييم مجانية' : 'Book a free level assessment')
  };
};
