import React from 'react';

export const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-xl font-black border-b-4 border-black pb-1 mb-2 uppercase tracking-tighter text-black">{title}</h2>
);

export const InfoRow: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-end mb-6 h-10 w-full text-black">
    <span className="font-bold text-[12pt] whitespace-nowrap mr-3 leading-none">{label}:</span>
    <div className="border-b-2 border-black flex-grow mb-1 h-6 text-[11pt]"></div>
  </div>
);

export const CheckBoxRow: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center mb-4 text-black">
    <div className="w-7 h-7 border-2 border-black mr-3 flex-shrink-0 bg-white"></div>
    <span className="text-[12pt] font-black leading-tight">{label}</span>
  </div>
);

export const RuledArea: React.FC<{ lines: number }> = ({ lines }) => (
  <div className="w-full text-black">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="border-b-2 border-black h-11 flex items-end px-2">
      </div>
    ))}
  </div>
);