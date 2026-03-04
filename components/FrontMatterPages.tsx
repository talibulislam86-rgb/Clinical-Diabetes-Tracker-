import React from 'react';
import { SectionHeader, InfoRow, RuledArea, CheckBoxRow } from './ClinicalComponents';
import { YEAR } from '../constants';

export const CoverPage: React.FC = () => (
  <div className="h-full flex flex-col justify-between items-center text-center py-10 border-[10px] border-black m-[-2mm] bg-white">
    <div className="space-y-4">
      <div className="h-8"></div>
      <h1 className="text-3xl font-black uppercase tracking-tighter leading-tight text-black">
        DAILY HEALTH &<br />DIABETES TRACKER
      </h1>
      <div className="w-32 h-2 bg-black mx-auto"></div>
      <p className="text-xl font-black italic text-black">{YEAR} CLINICAL EDITION</p>
      <p className="text-[10px] font-black uppercase tracking-widest mt-2 text-black">Daily Monitoring • Health Tips • Blood Sugar Tracking</p>
    </div>
    
    <div className="flex-grow flex items-center justify-center py-4">
      <img 
        src="https://t3.ftcdn.net/jpg/03/24/58/44/360_F_324584485_qtdluDzmBNkJvmntEPlNeG1htwPktgCa.jpg" 
        alt="Medical Icon" 
        className="w-[70%] grayscale contrast-125 mix-blend-multiply"
      />
    </div>

    <div className="w-full max-w-sm text-left px-12 mb-24">
      <div className="border-b-2 border-black w-full h-12"></div>
    </div>

    <div className="w-full text-black">
      <div className="px-8 mb-6">
        <p className="text-[8px] leading-tight font-black uppercase text-center border-t border-black pt-4">
          © {YEAR} Talib Sagar. All rights reserved. No part of this publication may be reproduced for commercial sale without written permission. Clinics and hospitals are permitted bulk internal reproduction for patient care only.
        </p>
      </div>
      <div className="text-[10px] uppercase font-black text-center px-4 leading-relaxed bg-black text-white w-full py-2">
        Standard Medical Compliance Tool
      </div>
    </div>
  </div>
);

export const DedicationPage: React.FC = () => (
  <div className="h-full flex flex-col justify-center items-center text-center px-12 py-20 space-y-12 bg-white text-black">
    <div className="space-y-4">
      <h3 className="text-xs font-black tracking-[0.4em] uppercase">Dedication</h3>
      <div className="w-16 h-[1.5px] bg-black mx-auto"></div>
    </div>
    
    <div className="space-y-10 max-w-sm">
      <p className="text-2xl font-serif italic font-black leading-relaxed">
        "An effort to track my father's diabetes, health, and well-being."
      </p>
      <div className="space-y-3">
        <p className="text-sm font-black uppercase tracking-[0.2em]">— A Journey Toward Wellness —</p>
        <p className="text-[10px] uppercase font-black tracking-widest">By Talib Sagar</p>
      </div>
    </div>
  </div>
);

export const PatientIDPage: React.FC = () => (
  <div className="space-y-6 h-full flex flex-col text-black bg-white">
    <SectionHeader title="Patient Identification" />
    <div className="space-y-2">
      <InfoRow label="Full Name" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7">
          <InfoRow label="Date of Birth" />
        </div>
        <div className="col-span-5">
          <InfoRow label="Blood Group" />
        </div>
      </div>
      <InfoRow label="Home Address" />
    </div>
    <div className="h-4"></div>
    <SectionHeader title="Clinical Profile" />
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-8">
        <InfoRow label="Year of Diagnosis" />
        <InfoRow label="Type of Diabetes" />
      </div>
      <div className="pt-4">
        <h4 className="text-[12pt] font-black uppercase underline tracking-tight mb-2">
          Clinical History & Previous Remarks:
        </h4>
        <div className="border-2 border-black p-1">
          <RuledArea lines={8} />
        </div>
      </div>
    </div>
    <div className="mt-auto pt-6 border-t border-dotted border-black">
      <p className="text-[9pt] font-black text-center italic">
        Note to Patient: Keep this record book updated for every clinical visit.
      </p>
    </div>
  </div>
);

export const EmergencyContactsPage: React.FC = () => (
  <div className="space-y-4 text-black bg-white">
    <SectionHeader title="Medical Contacts" />
    <div className="border-2 border-black p-3 space-y-2">
      <p className="font-black text-xs uppercase underline mb-2">Primary Physician (Main Contact)</p>
      <InfoRow label="Doctor Name" />
      <div className="grid grid-cols-2 gap-4">
        <InfoRow label="Clinic/Hospital" />
        <InfoRow label="Phone Number" />
      </div>
      <InfoRow label="Consultation Timing" />
    </div>
    <div className="border-2 border-black p-3 space-y-2 mt-4">
      <p className="font-black text-xs uppercase underline mb-2">Secondary / Consulting Physician</p>
      <InfoRow label="Doctor Name" />
      <div className="grid grid-cols-2 gap-4">
        <InfoRow label="Specialty" />
        <InfoRow label="Phone Number" />
      </div>
      <InfoRow label="Consultation Timing" />
    </div>
    <div className="border-2 border-black p-3 space-y-2 mt-4">
      <p className="font-black text-xs uppercase underline mb-2">Family / Emergency Contacts</p>
      <div className="grid grid-cols-2 gap-x-6">
        <InfoRow label="Contact 1" />
        <InfoRow label="Phone" />
        <InfoRow label="Contact 2" />
        <InfoRow label="Phone" />
        <InfoRow label="Contact 3" />
        <InfoRow label="Phone" />
        <InfoRow label="Contact 4" />
        <InfoRow label="Phone" />
      </div>
    </div>
  </div>
);

export const HowToUsePage: React.FC = () => (
  <div className="space-y-4 text-xs text-black bg-white">
    <SectionHeader title="System Instructions" />
    <div className="space-y-2 text-[11pt] text-justify leading-relaxed font-black mb-2">
      <p>1. Daily Recording: Fill the sugar levels, medication, and mood every single day. Do not skip entries.</p>
      <p>2. Consistency: Test at the same time relative to your meals (e.g., exactly at the same time post-meal).</p>
      <p>3. Review Weekly: Check summaries every Sunday. Track trends and use averages to discuss adjustments with your doctor.</p>
    </div>
    <div className="border-2 border-black p-4 mt-2">
      <p className="font-black text-sm uppercase mb-3 underline">Quick Start Checklist</p>
      <div className="grid grid-cols-1 gap-y-0.5">
        <CheckBoxRow label="Fill Patient ID & Emergency Info" />
        <CheckBoxRow label="Carry a fast sugar source (For Low Sugar)" />
        <CheckBoxRow label="Stay hydrated & keep water handy (For High Sugar)" />
        <CheckBoxRow label="Check feet daily for cuts or redness" />
        <CheckBoxRow label="Set Alarms for Testing" />
        <CheckBoxRow label="Update this record book immediately after tests" />
        <CheckBoxRow label="Check expiry dates of medicines monthly" />
        <CheckBoxRow label="Confirm your next appointment date" />
        <CheckBoxRow label="Explain High & Low Sugar signs to family members" />
        <CheckBoxRow label="Maintain a 15-day backup of all essential meds" />
        <CheckBoxRow label="Keep a secondary set of glucometer batteries" />
        <CheckBoxRow label="Wash hands thoroughly before every glucose test" />
        <CheckBoxRow label="Keep a list of current medications in your wallet" />
        <CheckBoxRow label="Schedule eye and dental exams every 6 months" />
      </div>
    </div>
  </div>
);

export const UnderstandingDiabetesPage: React.FC = () => (
  <div className="h-full flex flex-col p-4 space-y-3 text-black bg-white">
    <SectionHeader title="Blood Sugar Management Guide" />
    
    {/* 1. Visual Flow Chart */}
    <div className="border-2 border-black p-3 bg-gray-50 flex flex-col items-center flex-shrink-0">
      <h3 className="font-black text-xs uppercase mb-2 underline tracking-widest">The Sugar Cycle Flow</h3>
      <div className="flex flex-col items-center w-full space-y-1">
        <div className="border-2 border-black px-4 py-1 text-[9pt] w-48 text-center bg-white shadow-sm font-black">EAT FOOD / MEAL</div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black px-4 py-1 text-[9pt] w-48 text-center bg-white shadow-sm font-black">SUGAR ENTERS BLOOD</div>
        <div className="text-xl leading-none">↓</div>
        <div className="flex w-full items-start justify-between relative px-2">
           <div className="absolute top-0 left-[25%] right-[25%] h-[2px] bg-black"></div>
           <div className="flex flex-col items-center w-[48%]">
             <div className="h-3 w-[2px] bg-black"></div>
             <span className="text-[8pt] uppercase mb-1 font-black tracking-tighter">Healthy Body</span>
             <div className="border-2 border-black px-2 py-2 text-[8pt] text-center bg-green-50 w-full min-h-[40px] flex items-center justify-center font-bold uppercase leading-tight">Insulin opens the cell doors</div>
             <div className="text-lg leading-none">↓</div>
             <div className="border-2 border-black px-2 py-2 text-[8pt] text-center bg-green-200 uppercase font-black w-full">SUGAR LOWERS (ENERGY)</div>
           </div>
           <div className="flex flex-col items-center w-[48%]">
             <div className="h-3 w-[2px] bg-black"></div>
             <span className="text-[8pt] uppercase mb-1 font-black tracking-tighter">Diabetic Body</span>
             <div className="border-2 border-black px-2 py-2 text-[8pt] text-center bg-red-50 w-full min-h-[40px] flex items-center justify-center leading-tight font-bold uppercase">Insulin key is lost or jammed</div>
             <div className="text-lg leading-none">↓</div>
             <div className="border-2 border-black px-2 py-2 text-[8pt] text-center bg-red-200 uppercase font-black w-full">SUGAR STAYS HIGH (HARM)</div>
           </div>
        </div>
      </div>
    </div>

    {/* 2. Signs of Unbalanced Sugar - EXPANDED */}
    <div className="border-4 border-black p-3 flex-grow flex flex-col">
      <h3 className="font-black text-sm uppercase mb-3 text-center border-b-4 border-black pb-1 tracking-tighter">Signs of Unbalanced Sugar</h3>
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {/* Hypo Section */}
        <div className="flex flex-col space-y-2 border-r-2 border-black pr-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-red-700 font-black text-[11pt] uppercase leading-none">HYPOGLYCEMIA</h4>
            <span className="text-[8.5pt] font-black tracking-tighter">(LOW)</span>
          </div>
          <p className="text-[9pt] font-black border-b border-black pb-1 leading-none italic">{'Blood Sugar < 70 mg/dL'}</p>
          <ul className="text-[10pt] font-black space-y-1.5 mt-2">
            <li className="leading-tight flex items-start">• Shaking / Trembling</li>
            <li className="leading-tight flex items-start">• Sweating / Chills</li>
            <li className="leading-tight flex items-start">• Dizziness / Fast Pulse</li>
            <li className="leading-tight flex items-start">• Hunger / Confusion</li>
            <li className="leading-tight flex items-start">• Irritability / Nausea</li>
            <li className="leading-tight flex items-start">• Weakness / Fatigue</li>
          </ul>
          <div className="mt-auto bg-red-50 p-2 border-2 border-red-600 text-[9pt] font-black leading-tight italic">
            <strong>ACTION:</strong> Eat 15g fast sugar (3 tsp sugar/juice). Recheck in 15 mins.
          </div>
        </div>
        
        {/* Hyper Section */}
        <div className="flex flex-col space-y-2 pl-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-blue-700 font-black text-[11pt] uppercase leading-none">HYPERGLYCEMIA</h4>
            <span className="text-[8.5pt] font-black tracking-tighter">(HIGH)</span>
          </div>
          <p className="text-[9pt] font-black border-b border-black pb-1 leading-none italic">{'Blood Sugar > 180 mg/dL'}</p>
          <ul className="text-[10pt] font-black space-y-1.5 mt-2">
            <li className="leading-tight flex items-start">• Frequent Urination</li>
            <li className="leading-tight flex items-start">• Intense Thirst</li>
            <li className="leading-tight flex items-start">• Blurred Vision</li>
            <li className="leading-tight flex items-start">• Fatigue / Headache</li>
            <li className="leading-tight flex items-start">• Fruity Breath Smell</li>
            <li className="leading-tight flex items-start">• Dry or Itchy Skin</li>
          </ul>
          <div className="mt-auto bg-blue-50 p-2 border-2 border-blue-600 text-[9pt] font-black leading-tight italic">
            <strong>ACTION:</strong> Drink water. Take meds. Consult doctor if persistent.
          </div>
        </div>
      </div>
      <div className="mt-4 border-t-2 border-dotted border-black pt-2">
        <p className="text-[8.5pt] font-black uppercase text-center italic tracking-tight">
          Warning: If symptoms persist or worsen, seek immediate medical attention.
        </p>
      </div>
    </div>

    {/* 3. Key Management Areas */}
    <div className="border-2 border-black p-3 bg-white flex-shrink-0">
      <p className="text-[10pt] font-black uppercase mb-3 border-b-2 border-black w-full text-center pb-1">Key Pillars of Management</p>
      <div className="grid grid-cols-3 gap-3 w-full text-center">
        <div className="border-2 border-black p-2 text-[8.5pt] font-black flex items-center justify-center h-12 uppercase leading-tight bg-gray-50">DIET<br/>CONTROL</div>
        <div className="border-2 border-black p-2 text-[8.5pt] font-black flex items-center justify-center h-12 uppercase leading-tight bg-gray-50">PHYSICAL<br/>EXERCISE</div>
        <div className="border-2 border-black p-2 text-[8.5pt] font-black flex items-center justify-center h-12 uppercase leading-tight bg-gray-50">PRESCRIBED<br/>MEDICATION</div>
      </div>
    </div>
  </div>
);

export const FlowchartsPage: React.FC = () => (
  <div className="h-full flex flex-col space-y-4 text-black bg-white">
    <SectionHeader title="Action Flowcharts" />
    
    {/* LOW SUGAR FLOW */}
    <div className="border-2 border-black p-3 flex-grow flex flex-col bg-gray-50">
      <h3 className="font-black text-sm uppercase mb-2 text-center bg-red-100 py-1 border border-black">LOW SUGAR (HYPO) STEPS</h3>
      <div className="flex flex-col items-center space-y-1 text-[10pt] font-black text-center flex-grow justify-center">
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">Feel shaky / sweaty / hungry → <span className="underline">Check sugar</span></div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">{'Sugar < 70 mg/dL?'} → <span className="text-red-600">YES</span> → Eat 15g fast sugar</div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">Wait 15 minutes → <span className="underline">Recheck sugar</span></div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">Still low? → Repeat fast sugar → Eat snack</div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black p-2 w-full bg-green-100 shadow-sm leading-tight font-black uppercase">Normal? → Tell family / Rest / Monitor</div>
      </div>
    </div>

    {/* HIGH SUGAR FLOW */}
    <div className="border-2 border-black p-3 flex-grow flex flex-col bg-gray-50">
      <h3 className="font-black text-sm uppercase mb-2 text-center bg-blue-100 py-1 border border-black">HIGH SUGAR (HYPER) STEPS</h3>
      <div className="flex flex-col items-center space-y-1 text-[10pt] font-black text-center flex-grow justify-center">
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">Feel thirsty / tired → <span className="underline">Check sugar</span></div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">{'Sugar > 180–250 mg/dL?'} → <span className="text-red-600">YES</span> → Drink water + walk</div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">Recheck after 1–2 hours</div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-2 border-black p-2 w-full bg-white shadow-sm leading-tight">Still high + feeling worse? → <span className="underline font-black">Call doctor quickly</span></div>
        <div className="text-xl leading-none">↓</div>
        <div className="border-4 border-red-600 p-2 w-full bg-white shadow-md leading-tight text-red-700 uppercase font-black">Very high ({'>'}300) + vomiting? → <span className="underline">HOSPITAL URGENTLY</span></div>
      </div>
    </div>
  </div>
);

export const GlucometerGuidePage: React.FC = () => (
  <div className="h-full flex flex-col space-y-2 text-black bg-white">
    <SectionHeader title="Glucometer Usage Guide" />
    
    <div className="p-4 border-2 border-black bg-gray-50 rounded-sm shadow-sm">
      <p className="text-[11pt] font-black leading-relaxed italic text-justify">
        Using a glucometer is a straightforward process once you have your supplies ready. Here is a clear, step-wise guide to help you get an accurate reading every time.
      </p>
    </div>

    {/* INSTRUCTIONAL IMAGE */}
    <div className="flex-grow flex items-center justify-center py-2">
      <div className="border-4 border-black p-1 bg-white shadow-sm w-full h-[125mm]">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D22AQEcHw3HcJ-T1Q/feedshare-shrink_800/B4DZgGq2NaGQAg-/0/1752458553654?e=1772668800&v=beta&t=9gm0hFw7ZXfy137Bqw6fpjXG-CiauJ1nuGKNR3-P21I" 
          alt="Glucometer Step-by-Step Clinical Guide" 
          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>

    <div className="border-4 border-black p-3 bg-gray-50 flex-shrink-0">
      <p className="uppercase font-black text-[10px] mb-1 tracking-tighter">Clinical Maintenance Note:</p>
      <p className="text-[9.5pt] font-bold italic leading-tight">Always verify the expiration date on your test strip container. Never use expired or damaged strips as they yield clinically inaccurate readings.</p>
    </div>
  </div>
);

export const FootCarePage: React.FC = () => (
  <div className="h-full flex flex-col space-y-2 text-black bg-white">
    <SectionHeader title="Foot Care Basics" />
    
    {/* Why care section */}
    <div className="border-2 border-black p-3 bg-gray-50">
      <h3 className="text-[10pt] font-black uppercase mb-1 underline">Why feet need special care</h3>
      <p className="text-[9.5pt] font-bold leading-tight">
        High blood sugar hurts nerves and blood vessels. Small cuts can become serious infections. Daily care prevents major problems.
      </p>
    </div>

    {/* Everyday Steps */}
    <div className="border-2 border-black p-3 flex-none">
      <h3 className="text-[10pt] font-black uppercase mb-2 border-b border-black pb-1">Everyday Foot Care Steps (5 Mins Daily)</h3>
      <ul className="text-[9.5pt] font-bold space-y-1.5 list-none">
        <li><span className="font-black">1. Check your feet:</span> Look at top, sides, soles, heels, and between toes. Look for: Cuts, blisters, red spots, swelling, dry skin, or bad smell.</li>
        <li><span className="font-black">2. Wash daily:</span> Use lukewarm water (test with elbow). Dry completely—especially between toes.</li>
        <li><span className="font-black">3. Keep skin soft:</span> Moisturize top and bottom, but <span className="underline uppercase font-black">never between toes</span>.</li>
        <li><span className="font-black">4. Always wear footwear:</span> Never walk barefoot—even indoors. Wear soft, well-fitting slippers.</li>
        <li><span className="font-black">5. Cut nails right:</span> Cut straight across; smooth edges with a file.</li>
        <li><span className="font-black">6. Check shoes:</span> Feel inside for stones or rough spots before wearing.</li>
      </ul>
    </div>

    {/* Kashmir & Emergency Grid */}
    <div className="grid grid-cols-2 gap-3 flex-none">
      <div className="border-2 border-black p-2 bg-blue-50">
        <h3 className="text-[9pt] font-black uppercase mb-1 border-b border-black">Kashmir Winters</h3>
        <ul className="text-[8.5pt] font-black space-y-0.5">
          <li>• Thick cotton socks only.</li>
          <li>• <span className="underline">NO direct heat/kangri</span>.</li>
          <li>• Daily moisture application.</li>
        </ul>
      </div>
      <div className="border-2 border-red-600 p-2 bg-red-50">
        <h3 className="text-[9pt] font-black uppercase mb-1 border-b border-red-600 text-red-700">Emergency: See Doctor if...</h3>
        <ul className="text-[8.5pt] font-black space-y-0.5 text-red-700">
          <li>• Wound not healing.</li>
          <li>• Pus or black skin visible.</li>
          <li>• Fever accompanied by injury.</li>
        </ul>
      </div>
    </div>

    {/* Manual Foot Health Area - Updated with Checklist */}
    <div className="border-2 border-black p-2 flex-grow flex flex-col">
      <h3 className="text-[10pt] font-black uppercase mb-2">Manual Foot Health & Observations:</h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[9pt] font-bold">
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Cuts / Scrapes</div>
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Blisters</div>
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Red Spots</div>
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Swelling</div>
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Dry / Cracked</div>
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Numbness</div>
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Pus / Drainage</div>
        <div className="flex items-center"><span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Cold / Hot spots</div>
        <div className="col-span-2 flex items-center pt-2 mt-1 border-t border-dotted border-black">
          <span className="w-4 h-4 border-2 border-black mr-2 flex-shrink-0"></span> Other Observations:
          <div className="flex-grow border-b border-black ml-2 mb-1 h-4"></div>
        </div>
      </div>
    </div>
  </div>
);

export const DietDisciplinePage: React.FC = () => (
  <div className="h-full flex flex-col space-y-4 text-black bg-white">
    <SectionHeader title="Dietary Discipline & Meal Planning" />
    
    <div className="grid grid-cols-12 gap-4 flex-none">
      <div className="col-span-5 border-2 border-black p-2 bg-gray-50 flex flex-col items-center">
        <h3 className="font-black text-[9pt] uppercase text-center mb-2 underline">The Plate Rule</h3>
        <div className="flex justify-center items-center h-28 border-2 border-black rounded-full relative overflow-hidden w-28 mx-auto">
          <div className="absolute top-0 left-0 w-full h-1/2 border-b border-black bg-green-50 flex items-center justify-center font-black text-[7pt]">50% VEGGIES</div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-black bg-yellow-50 flex items-center justify-center font-black text-center text-[6pt]">25%<br/>PROTEIN</div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-50 flex items-center justify-center font-black text-center text-[6pt]">25%<br/>GRAINS</div>
        </div>
        <p className="text-[7.5pt] font-black text-center mt-2 leading-tight uppercase">Use 9-inch plate for consistency</p>
      </div>

      <div className="col-span-7 border-2 border-black p-2 space-y-1 text-[9.5pt]">
        <h3 className="font-black uppercase border-b border-black pb-0.5 mb-1">Dietary Instructions</h3>
        <ul className="space-y-1 font-bold">
          <li className="flex items-start"><span className="mr-1">•</span> <span className="font-black uppercase">50% Veggies:</span> Haakh, cabbage, nadru, cauliflower.</li>
          <li className="flex items-start"><span className="mr-1">•</span> <span className="font-black uppercase">25% Protein:</span> Dal, moong, rajma, eggs, lean meat.</li>
          <li className="flex items-start"><span className="mr-1">•</span> <span className="font-black uppercase">25% Grains:</span> Barley/Multigrain roti, small portion rice.</li>
          <li className="flex items-start border-t-2 border-black pt-1 mt-1"><span className="mr-1">•</span> Eat small meals every 3-4 hours.</li>
          <li className="flex items-start"><span className="mr-1">•</span> Avoid soda, white sugar, and high-fat snacks.</li>
          <li className="flex items-start"><span className="mr-1">•</span> Drink at least 8 glasses of water daily.</li>
        </ul>
      </div>
    </div>

    {/* Manual Meal Entry Area */}
    <div className="border-2 border-black p-3 flex-grow flex flex-col">
      <h3 className="text-[11pt] font-black uppercase mb-2 border-b-2 border-black">Custom Meal Plans & Precautionary Details:</h3>
      <p className="text-[9pt] font-bold italic mb-3">Add any new meal plans prescribed by your doctor or specific dietary precautions here.</p>
      
      <div className="flex-grow">
        {/* Full box filled with solid black ruled lines as requested */}
        <RuledArea lines={12} />
      </div>
    </div>

    <div className="bg-gray-50 border-2 border-black p-2 text-center flex-shrink-0">
      <p className="text-[10pt] font-black uppercase tracking-tighter italic leading-tight">
        "Dietary consistency is the most powerful tool in stabilizing glucose levels."
      </p>
    </div>
  </div>
);

export const ExerciseComprehensivePage: React.FC = () => (
  <div className="h-full flex flex-col space-y-2 text-black bg-white">
    <SectionHeader title="Exercise & Wellness" />
    
    {/* Why Movement Matters */}
    <div className="border-2 border-black p-2 bg-gray-50">
      <h3 className="text-[10pt] font-black uppercase mb-1 underline">Why Movement Matters</h3>
      <p className="text-[9.2pt] font-bold leading-tight">
        Lower sugar for hours after finishing • Protect your heart (especially after 40's) • Keep energy steady • Reduce stress & improve sleep.
      </p>
    </div>

    {/* The Weekly Goal & Safety Checklist */}
    <div className="grid grid-cols-2 gap-3">
      <div className="border-2 border-black p-2 flex flex-col items-center justify-center bg-white">
        <h3 className="text-[9pt] font-black uppercase mb-1 border-b border-black w-full text-center">The Weekly Goal</h3>
        <p className="text-2xl font-black leading-none">150</p>
        <p className="text-[10px] font-black uppercase tracking-widest">MINS</p>
      </div>
      <div className="border-2 border-black p-2 bg-white">
        <h3 className="text-[9pt] font-black uppercase mb-1 border-b border-black">Safety First Checklist</h3>
        <ul className="text-[8pt] font-bold space-y-0.5">
          <li className="flex items-center"><span className="w-3 h-3 border border-black mr-2 flex-shrink-0"></span> Doctor's Approval</li>
          <li className="flex items-center"><span className="w-3 h-3 border border-black mr-2 flex-shrink-0"></span> Check Sugar Before/After</li>
          <li className="flex items-center"><span className="w-3 h-3 border border-black mr-2 flex-shrink-0"></span> Carry Fast-Sugar Source</li>
          <li className="flex items-center"><span className="w-3 h-3 border border-black mr-2 flex-shrink-0"></span> Supportive Footwear</li>
        </ul>
      </div>
    </div>

    {/* Warning Box */}
    <div className="border-4 border-red-600 bg-red-50 p-1.5 text-center">
      <p className="text-[9.5pt] font-black text-red-700 uppercase leading-none">
        STOP IF: Chest discomfort or dizziness occurs.
      </p>
    </div>

    {/* Movement Types Box - Integrated with manual space */}
    <div className="border-2 border-black p-3 flex-grow overflow-hidden flex flex-col">
      <h3 className="text-[10.5pt] font-black uppercase mb-2 border-b-2 border-black">3 Types of Movement (Mix Daily)</h3>
      <div className="space-y-3 flex-none mb-4">
        <div>
          <p className="text-[9.5pt] font-black uppercase underline leading-tight">1. Daily Walk</p>
          <p className="text-[9pt] font-bold leading-tight">
            <span className="font-black italic">Brisk Walking:</span> 20–30m, 5 days/wk. A short walk after dinner is <span className="underline uppercase">very important</span>.
          </p>
        </div>
        <div>
          <p className="text-[9.5pt] font-black uppercase underline leading-tight">2. Strength</p>
          <p className="text-[9pt] font-bold leading-tight">
            Chair squats, wall push-ups. 2-3 days/wk. <span className="font-black">Builds muscle.</span>
          </p>
        </div>
        <div>
          <p className="text-[9.5pt] font-black uppercase underline leading-tight">3. Balance</p>
          <p className="text-[9pt] font-bold leading-tight">
            Yoga, stretching. Do daily. <span className="font-black">Prevents falls.</span>
          </p>
        </div>
      </div>
      
      {/* Manual Entry Section within the same box */}
      <div className="border-t-2 border-black pt-2 flex-grow">
        <h4 className="text-[9.5pt] font-black uppercase mb-1 underline">Other Particular Exercises & Prevention:</h4>
        <div className="flex-grow">
          <RuledArea lines={6} />
        </div>
      </div>
    </div>

    {/* Quick Tips for Professionals */}
    <div className="border-2 border-black p-2 bg-gray-50 flex-shrink-0">
      <h3 className="text-[8.5pt] font-black uppercase mb-1 border-b border-black">Quick Tips for Professionals</h3>
      <div className="grid grid-cols-2 gap-4 text-[8.5pt] font-bold">
        <p className="flex items-center">• Walk during phone calls</p>
        <p className="flex items-center">• Stretch during meeting breaks</p>
      </div>
    </div>
  </div>
);

export const ConclusionPage: React.FC = () => (
  <div className="h-full flex flex-col justify-between items-center text-center py-12 px-10 bg-white text-black border-4 border-double border-black m-[-1mm]">
    <div className="flex-grow flex flex-col justify-center items-center space-y-10 w-full">
      <div className="space-y-6 max-w-md">
        <p className="text-3xl font-serif italic font-black leading-tight text-black">
          "He who has health has hope; and he who has hope, has everything"
        </p>
        <div className="w-32 h-[1.5px] bg-black mx-auto"></div>
        <p className="text-sm font-black uppercase tracking-widest text-black">— Arabian Proverb —</p>
      </div>

      <div className="w-full max-w-sm border-4 border-black p-2 shadow-sm bg-gray-50">
        <img 
          src="https://www.niddk.nih.gov/media-assets/18199/N01593-H_thumbnail.jpg" 
          alt="Healthy Living Guide" 
          className="w-full h-auto grayscale mix-blend-multiply contrast-125"
        />
      </div>

      <div className="max-w-md">
        <p className="text-lg font-black leading-snug uppercase tracking-tight">
          Well done! Your commitment to tracking your health throughout this journey is truly commendable and a powerful victory for your long-term wellness.
        </p>
      </div>
    </div>
    
    <div className="w-full pt-8 border-t-2 border-dotted border-black">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
        A Path Towards Continuous Wellness
      </p>
    </div>
  </div>
);
