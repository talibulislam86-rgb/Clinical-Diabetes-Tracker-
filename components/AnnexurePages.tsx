import React from 'react';
import { SectionHeader, RuledArea } from './ClinicalComponents';
import { ANNEXURE_TOPICS } from '../constants';

export const AnnexurePage: React.FC<{ topicIndex: number }> = ({ topicIndex }) => {
  const topic = ANNEXURE_TOPICS[topicIndex];
  const isLog = topic.includes('Log') || topic.includes('Note') || topic.includes('Record');

  return (
    <div className="h-full flex flex-col text-black bg-white overflow-hidden font-black">
      <SectionHeader title={topic} />
      
      {isLog ? (
        <div className="flex-grow flex flex-col">
          <div className="border-[2px] border-black flex-grow flex flex-col overflow-hidden">
            <table className="w-full border-collapse text-black">
              <thead>
                <tr className="border-b-[2px] border-black bg-gray-50">
                  <th className="w-[18%] border-r-[2px] border-black p-3 uppercase text-[10px] font-black text-center">Date</th>
                  <th className="w-[64%] border-r-[2px] border-black p-3 uppercase text-[10px] font-black text-left">Description / Clinical Detail</th>
                  <th className="w-[18%] p-3 uppercase text-[10px] font-black text-center">Sig.</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 11 }).map((_, i) => (
                  <tr key={i} className="h-[14.5mm] border-b border-black">
                    <td className="border-r-[2px] border-black"></td>
                    <td className="border-r-[2px] border-black"></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex-grow border-t-0 flex items-center justify-center">
              <span className="text-[7px] font-black text-black uppercase tracking-[0.3em]">
                End of Clinical Entry Page
              </span>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-end border-t-2 border-black pt-1">
            <p className="text-[7px] font-black uppercase tracking-widest">
              Standard Clinical Log • IP Talib Sagar
            </p>
            <p className="text-[8px] font-black uppercase">
              ANNEXURE {topicIndex + 1}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col">
          <div className="flex-grow border-[2px] border-black p-6 bg-white flex flex-col">
            <p className="text-[12pt] font-black uppercase mb-6 border-b-[2px] border-black pb-2 w-full text-center tracking-tighter">
              Annual Summary & Final Physician Remarks
            </p>
            <div className="flex-grow">
              <RuledArea lines={14} />
            </div>
            <div className="mt-8 pt-8 flex justify-around">
              <div className="text-center w-48">
                <div className="border-b-2 border-black h-8 mb-1"></div>
                <p className="text-[8px] font-black uppercase">Patient Signature</p>
              </div>
              <div className="text-center w-48">
                <div className="border-b-2 border-black h-8 mb-1"></div>
                <p className="text-[8px] font-black uppercase">Doctor / Hospital Stamp</p>
              </div>
            </div>
          </div>
          <div className="h-[10mm]"></div>
        </div>
      )}
    </div>
  );
};