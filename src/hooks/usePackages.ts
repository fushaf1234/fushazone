import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { packagesService, PricePackage } from '../services/packagesService';

let cached: Promise<PricePackage[]> | null = null;

const load = (): Promise<PricePackage[]> => {
  if (!cached) {
    cached = packagesService
      .list()
      .then((all) => all.filter((p) => p.active))
      .catch((err) => {
        console.error('Error reading packages:', err);
        cached = null;
        return [];
      });
  }
  return cached;
};

// بعد تعديل الباقات من لوحة الإدارة
export const resetPackagesCache = () => {
  cached = null;
};

// الباقات متاحة لكل زوار الموقع (المعلمون فقط لا يرونها في لوحتهم)
export const usePackages = (): { packages: PricePackage[]; loading: boolean; locked: boolean } => {
  const { isAuthenticated, isTeacher, isAdmin, isSuperAdmin, isLoading } = useAuth();
  const canSee = !isAuthenticated || !isTeacher || isAdmin || isSuperAdmin;
  const [packages, setPackages] = useState<PricePackage[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let alive = true;
    if (isLoading) return;
    if (!canSee) {
      cached = null;
      setPackages([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    load().then((p) => {
      if (alive) {
        setPackages(p);
        setLoading(false);
      }
    });
    return () => {
      alive = false;
    };
  }, [canSee, isLoading]);
  return { packages, loading: loading || isLoading, locked: !isLoading && !canSee };
};
