import React from 'react';
import { SectionHeader, InfoRow, RuledArea } from './ClinicalComponents';

export const WeeklyReviewPage: React.FC<{ weekNum: number }> = ({ weekNum }) => (
  <div className="space-y-4 h-full flex flex-col text-black bg-white">
    <SectionHeader title={`WEEK ${weekNum} SUMMARY REVIEW`} />
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2 border-black p-3 space-y-3">
        <p className="text-sm font-black underline uppercase">Metrics Summary</p>
        <InfoRow label="Avg Fasting" />
        <InfoRow label="Highest Reading" />
        <InfoRow label="Lowest Reading" />
        <InfoRow label="Hypo Count" />
        <InfoRow label="Weight (kg)" />
        <InfoRow label="BP Trend" />
      </div>
      <div className="border-2 border-black p-3 space-y-3">
        <p className="text-sm font-black underline uppercase">Compliance Scores (1-5)</p>
        <InfoRow label="Diet Score" />
        <InfoRow label="Exercise Score" />
        <InfoRow label="Medicine Score" />
        <div className="h-8"></div>
        <p className="text-xs italic font-black">Rate your self-discipline for the week. 1 is poor, 5 is perfect.</p>
      </div>
    </div>
    
    <div className="flex-grow">
      <p className="text-sm font-black uppercase mb-1">Weekly Reflection Lines:</p>
      <RuledArea lines={6} />
    </div>
    
    <div className="bg-white border-2 border-black p-3">
      <p className="text-sm font-black uppercase mb-1 underline">Questions for Doctor:</p>
      <RuledArea lines={4} />
    </div>
  </div>
);

export const MonthlyReviewPage: React.FC<{ month: string }> = ({ month }) => (
  <div className="space-y-6 h-full flex flex-col text-black bg-white">
    <SectionHeader title={`${month.toUpperCase()} CLINICAL AUDIT`} />
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="border-2 border-black p-3">
          <p className="text-xs font-black underline mb-3 uppercase">MONTHLY CLINICAL TESTS</p>
          <InfoRow label="HbA1c Value" />
          <InfoRow label="Lipid (Cholesterol)" />
          <InfoRow label="Kidney (Urea/Cr)" />
          <InfoRow label="Avg BP This Month" />
          <InfoRow label="Weight Change (+/-)" />
        </div>
        <div className="border-2 border-black p-3">
          <p className="text-xs font-black underline mb-3 uppercase">MONTHLY CHECKS</p>
          <div className="flex justify-between text-[10px] mb-2 font-black"><span>Foot Sensitivity:</span> <span>□ Normal □ Low</span></div>
          <div className="flex justify-between text-[10px] font-black"><span>Eye Checkup:</span> <span>□ Done □ Pending</span></div>
        </div>
      </div>
      <div className="space-y-4 flex flex-col h-full">
        <p className="text-sm font-black uppercase">MEDICINE CHANGES THIS MONTH:</p>
        <div className="border-2 border-black flex-grow p-2">
          <RuledArea lines={12} />
        </div>
        <div className="mt-4 pt-4 border-t-2 border-black text-center">
          <div className="h-10 border-b border-black w-40 mx-auto mb-1"></div>
          <p className="text-[9px] font-black uppercase">Doctor Signature & Stamp</p>
        </div>
      </div>
    </div>
  </div>
);