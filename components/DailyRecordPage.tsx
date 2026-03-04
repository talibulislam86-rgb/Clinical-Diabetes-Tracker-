import React from 'react';
import { DayData } from '../types';

interface DailyRecordProps {
  day1: DayData;
  day2: DayData | null;
}

const DayBlock: React.FC<{ day: DayData }> = ({ day }) => (
  <div className="border-[1.5px] border-black p-2 h-[112mm] flex flex-col mb-1 last:mb-0 text-black bg-white overflow-hidden">
    {/* Header */}
    <div className="flex justify-between items-center border-b border-black pb-1 mb-1.5 text-black">
      <div className="flex flex-col">
        <h3 className="text-lg font-black uppercase leading-tight">{day.dateStr}</h3>
        <span className="text-[9px] font-bold uppercase">{day.dayName}</span>
      </div>
      <div className="text-right">
        <span className="text-[8px] font-bold block uppercase">Mood/Energy:</span>
        <span className="text-[8px] block font-normal">□ Low □ Normal □ Excited</span>
      </div>
    </div>

    {/* Sugar Table */}
    <div className="mb-1.5">
      <table className="w-full text-[9.5px] border-collapse text-black">
        <thead>
          <tr className="bg-white border border-black">
            <th className="border border-black p-1 text-left uppercase">BLOOD GLUCOSE MONITORING (mg/dL)</th>
            <th className="border border-black p-1 text-center uppercase">Reading</th>
            <th className="border border-black p-1 text-center uppercase">Exact Time</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-6">
            <td className="border border-black p-1 font-bold text-[9px]">Fasting (Before Breakfast)</td>
            <td className="border border-black p-1 text-center font-bold">_______</td>
            <td className="border border-black p-1 text-center font-bold">_______</td>
          </tr>
          <tr className="h-6">
            <td className="border border-black p-1 font-bold text-[9px]">After Breakfast</td>
            <td className="border border-black p-1 text-center font-bold">_______</td>
            <td className="border border-black p-1 text-center font-bold">_______</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Insulin Tracking Section */}
    <div className="mb-1.5 text-black">
      <div className="flex justify-between items-center mb-0.5 px-0.5">
        <p className="text-[9.5px] font-black uppercase">INSULIN TRACKING</p>
        <div className="flex gap-3 text-[9px] font-black uppercase">
          <span>Required?</span>
          <span>□ YES</span>
          <span>□ NO</span>
        </div>
      </div>
      <table className="w-full text-[9.5px] border-collapse border border-black text-black">
        <thead>
          <tr className="bg-white">
            <th className="border border-black p-1 text-left uppercase w-[35%]">Injection Time</th>
            <th className="border border-black p-1 text-center uppercase w-[40%]">Units Administered</th>
            <th className="border border-black p-1 text-center uppercase w-[25%]">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-6">
            <td className="border border-black p-1 font-black">________________</td>
            <td className="border border-black p-1 text-center font-black">________ Units</td>
            <td className="border border-black p-1 text-center font-black">□ Taken</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Medication Grid */}
    <div className="mb-1.5 text-black">
      <p className="text-[9.5px] font-bold uppercase mb-0.5">MEDICATION CHECKBOX GRID</p>
      <div className="flex justify-between gap-2">
        <div className="border border-black flex-1 p-1 flex items-center justify-center text-[9px] font-black">
          <span className="mr-1">Morning:</span> □ Taken
        </div>
        <div className="border border-black flex-1 p-1 flex items-center justify-center text-[9px] font-black">
          <span className="mr-1">Afternoon:</span> □ Taken
        </div>
        <div className="border border-black flex-1 p-1 flex items-center justify-center text-[9px] font-black">
          <span className="mr-1">Night:</span> □ Taken
        </div>
      </div>
    </div>

    {/* Vitals and Lifestyle */}
    <div className="grid grid-cols-12 gap-2 mb-1.5 text-black">
      <div className="border border-black col-span-7">
        <p className="text-[10px] font-black uppercase border-b border-black p-1 bg-white">Clinical Vitals</p>
        <table className="w-full text-[10.5px] border-collapse text-black">
          <thead>
            <tr className="bg-white border-b border-black">
              <th className="text-left p-0.5 pl-1 uppercase font-black text-[8.5px]">Vital</th>
              <th className="text-center p-0.5 uppercase font-black text-[8.5px]">Reading</th>
              <th className="text-center p-0.5 uppercase font-black text-[8.5px]">Normal</th>
            </tr>
          </thead>
          <tbody className="leading-tight">
            <tr className="border-b border-black">
              <td className="pl-1 py-1 font-bold">Blood Pressure (BP)</td>
              <td className="text-center font-black tracking-widest text-[11px]">__________</td>
              <td className="text-center text-[8.5px] font-black">90/60-120/80</td>
            </tr>
            <tr className="border-b border-black">
              <td className="pl-1 py-1 font-bold">Heart Rate (HR)</td>
              <td className="text-center font-black tracking-widest text-[11px]">__________</td>
              <td className="text-center text-[8.5px] font-black">60-100 bpm</td>
            </tr>
            <tr className="border-b border-black">
              <td className="pl-1 py-1 font-bold">Resp. Rate (RR)</td>
              <td className="text-center font-black tracking-widest text-[11px]">__________</td>
              <td className="text-center text-[8.5px] font-black">12-18 /min</td>
            </tr>
            <tr className="border-b border-black">
              <td className="pl-1 py-1 font-bold">Temperature (Temp)</td>
              <td className="text-center font-black tracking-widest text-[11px]">__________</td>
              <td className="text-center text-[8.5px] font-black">97-99°F</td>
            </tr>
            <tr>
              <td className="pl-1 py-1 font-bold">Oxygen Sat. (SpO2)</td>
              <td className="text-center font-black tracking-widest text-[11px]">__________</td>
              <td className="text-center text-[8.5px] font-black">95%–100%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border border-black p-1 col-span-5 flex flex-col text-black">
        <p className="text-[10px] font-black uppercase border-b border-black mb-1 bg-white p-0.5">Lifestyle Adequacy</p>
        <div className="flex flex-col text-[11.5px] space-y-2 mt-1 flex-grow font-black">
          <div className="flex justify-between items-center px-1">
            <span>Sleep:</span>
            <span className="tracking-tighter">□ Adq □ Not</span>
          </div>
          <div className="flex justify-between items-center px-1">
            <span>Water:</span>
            <span className="tracking-tighter">□ Adq □ Not</span>
          </div>
          <div className="flex justify-between items-center px-1">
            <span>Meals:</span>
            <span className="tracking-tighter">□ Adq □ Not</span>
          </div>
          <div className="flex justify-between items-center px-1">
            <span>Exercise:</span>
            <span className="tracking-tighter">□ Adq □ Not</span>
          </div>
        </div>
        <div className="mt-auto border-t border-dotted border-black pt-1 text-center">
          <span className="text-[8.5px] uppercase font-black">Adq = Adequate</span>
        </div>
      </div>
    </div>

    {/* Symptoms/Notes */}
    <div className="flex-none h-[10mm] flex flex-col border border-black p-1 text-black bg-white">
      <p className="text-[8px] font-black uppercase border-b border-black mb-0.5">Today's Health Check-In</p>
      <div className="flex-grow pt-0.5">
      </div>
    </div>
  </div>
);

export const DailyRecordPage: React.FC<DailyRecordProps> = ({ day1, day2 }) => {
  return (
    <div className="h-full flex flex-col bg-white">
      <DayBlock day={day1} />
      {day2 && <DayBlock day={day2} />}
    </div>
  );
};