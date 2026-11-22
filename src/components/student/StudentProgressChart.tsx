import React from 'react';
import { TrendingUp } from 'lucide-react';

interface Props {
  uid: string;
  isAr: boolean;
  lessonsAttended?: number;
  lessonsTotal?: number;
}

// تقدّم الطالب: الحصص المنجزة من الباقة
export const StudentProgressChart: React.FC<Props> = ({ isAr, lessonsAttended, lessonsTotal }) => {
  const tr = (en: string, ar: string) => (isAr ? ar : en);
  const lessonPct = lessonsTotal ? Math.min(100, Math.round(((lessonsAttended || 0) / lessonsTotal) * 100)) : null;
  if (lessonPct === null) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-5">
      <h3 className="font-bold text-[#0B3B2C] flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-[#C9A04F]" />
        {tr('My progress', 'تقدّمي')}
      </h3>

      {/* الحصص المنجزة */}
        <div>
          <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
            <span>{tr('Lessons attended', 'الحصص المنجزة')}</span>
            <span className="text-[#0B3B2C]">{lessonsAttended || 0} / {lessonsTotal}</span>
          </div>
          <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-[#0B3B2C] to-[#1D6B4F]" style={{ width: `${lessonPct}%` }} />
          </div>
        </div>

    </div>
  );
};
