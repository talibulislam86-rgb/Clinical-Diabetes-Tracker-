import React from 'react';
import { SectionHeader } from './ClinicalComponents';
import { EDUCATION_TOPICS } from '../constants';

const ImagePlaceholder: React.FC<{ label: string; minHeight?: string }> = ({ label, minHeight = "160px" }) => (
  <div className={`border-2 border-dashed border-gray-400 bg-gray-50 h-full w-full flex flex-col items-center justify-center rounded-lg`} style={{ minHeight }}>
    <span className="text-4xl opacity-20">🖼️</span>
    <span className="text-[10px] uppercase font-black opacity-30 mt-3 tracking-[0.2em]">{label} DIAGRAM AREA</span>
    <span className="text-[8px] opacity-20 mt-1 uppercase font-bold">[ Full Page Clinical Illustration Space ]</span>
  </div>
);

const getKashmiriEducation = (index: number) => {
  switch(index) {
    case 0: return {
      title: "Diabetic Plate Method",
      subTitle: "Simple Plate Method",
      intro: "Use one normal small plate (about 9 inches) for every main meal.",
      visual: "PLATE MAP: [ ½ plate VEGETABLES ] [ ¼ plate PROTEIN ] [ ¼ plate GRAINS ]",
      points: [
        "Half the plate (50%) – Non-starchy vegetables: Haakh, cabbage, cauliflower, nadru, salad leaves",
        "One quarter (25%) – Protein: Dal (moong, rajma), eggs, dahi, lean meat",
        "One quarter (25%) – Whole grains: Barley roti, multigrain roti, small portion rice"
      ],
      footer: "Tip: Start with vegetables → this helps control sugar rise.",
      imageLabel: "Simple divided plate showing vegetables, protein, grains",
      type: 'rich-text'
    };
    case 1: return {
      title: "Fruit Portion Chart",
      subTitle: "Simple Fruit Rule",
      intro: "Eat 1–2 small servings per day. Serving ≈ 15g carbs.",
      pointsTitle: "Safe Portions",
      points: [
        "1 medium apple",
        "1 small pear",
        "1 small orange",
        "2–3 fresh apricots"
      ],
      subPointsTitle: "Eat Smaller Amounts",
      subPoints: [
        "Banana → half small",
        "Grapes → 8–10 pieces",
        "Mango → small slice"
      ],
      footer: "Tip: Eat fruit with nuts to slow sugar rise.",
      imageLabel: "Icons of apple, pear, orange, apricots with limit circle",
      type: 'rich-text'
    };
    case 2: return {
      title: "Dry Fruit Safe Quantity",
      subTitle: "Simple Dry Fruit Rule",
      intro: "Eat only a small handful each day.",
      pointsTitle: "Safe Daily Amounts",
      points: [
        "Walnuts → 4–6 halves",
        "Almonds → 6–8 pieces",
        "Cashews → 4–6 pieces",
        "Dried apricots → 2–3 pieces"
      ],
      footer: "Tip: Best as snack between meals.",
      imageLabel: "Handful of mixed nuts with “daily limit” circle",
      type: 'rich-text'
    };
    default: return {
      title: EDUCATION_TOPICS[index] || "Educational Topic",
      text: "Daily records are the most effective way to manage health trends.",
      visual: "[ MONITOR -> ACTION -> RECORD ]",
      isEmergency: false,
      type: 'legacy'
    };
  }
};

export const EducationContentPage: React.FC<{ topicIndex: number }> = ({ topicIndex }) => {
  const data = getKashmiriEducation(topicIndex);
  
  return (
    <div className="h-full flex flex-col p-2 text-black">
      <SectionHeader title={`${topicIndex + 1}. ${data.title}`} />
      <div className="flex-grow flex flex-col py-1 overflow-hidden">
        
        {data.type === 'rich-text' ? (
          <div className="h-full flex flex-col space-y-2">
            <h3 className="text-sm font-black uppercase border-b border-black pb-1">{data.subTitle}</h3>
            {data.intro && <p className="text-[11px] font-bold">{data.intro}</p>}
            {data.visual && (
              <div className="bg-black text-white p-2 text-center font-black text-[10px] uppercase">
                {data.visual}
              </div>
            )}
            
            {data.pointsTitle && <p className="text-[10px] font-black underline uppercase mt-2">{data.pointsTitle}</p>}
            <ul className="list-disc ml-6 space-y-1 text-[11px] leading-tight font-medium">
              {data.points?.map((p, i) => <li key={i}>{p}</li>)}
            </ul>

            {data.footer && (
              <div className="bg-gray-100 p-2 border-l-4 border-black text-[10px] font-bold italic mt-2">
                {data.footer}
              </div>
            )}

            <div className="flex-grow pt-2">
              <ImagePlaceholder label={data.imageLabel || "Graphic"} minHeight="120px" />
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col space-y-4">
            <div className="bg-black p-4 border-2 border-black flex items-center justify-center text-center font-bold text-[10px] uppercase text-white leading-tight flex-shrink-0">
              {data.visual}
            </div>
            <div className="text-[11px] leading-relaxed text-justify px-2 mt-2">
              {data.text}
            </div>
          </div>
        )}
      </div>
      <div className="text-[8px] text-right italic font-bold border-t border-black pt-2 uppercase flex-shrink-0">
        Page {topicIndex + 1} of Educational Module
      </div>
    </div>
  );
};