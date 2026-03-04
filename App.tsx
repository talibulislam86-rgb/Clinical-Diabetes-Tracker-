import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MONTHS, ANNEXURE_TOPICS, YEAR } from './constants';
import { DayData } from './types';
import * as Front from './components/FrontMatterPages';
import { DailyRecordPage } from './components/DailyRecordPage';
import { WeeklyReviewPage, MonthlyReviewPage } from './components/ReviewPages';
import { AnnexurePage } from './components/AnnexurePages';

const BlankPage: React.FC<{ label?: string }> = ({ label = "This page is intentionally left blank for notes" }) => (
  <div className="h-full flex flex-col items-center justify-center border-2 border-black bg-white">
    <p className="text-[10px] text-black uppercase font-black tracking-widest text-center px-10">{label}</p>
  </div>
);

const App: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `Clinical_Diabetes_Diary_${YEAR}`;
  }, []);

  const bookPages = useMemo(() => {
    const pages: React.ReactNode[] = [];

    // 1. FRONT MATTER (11 Pages)
    pages.push(<Front.CoverPage />);                  // P1
    pages.push(<Front.DedicationPage />);             // P2
    pages.push(<Front.PatientIDPage />);              // P3
    pages.push(<Front.EmergencyContactsPage />);      // P4
    pages.push(<Front.HowToUsePage />);               // P5
    pages.push(<Front.UnderstandingDiabetesPage />);  // P6
    pages.push(<Front.FlowchartsPage />);             // P7
    pages.push(<Front.GlucometerGuidePage />);        // P8
    pages.push(<Front.FootCarePage />);               // P9
    pages.push(<Front.DietDisciplinePage />);         // P10
    pages.push(<Front.ExerciseComprehensivePage />);  // P11

    // 2. DAILY TRACKER
    let weekCount = 1;
    MONTHS.forEach((month, monthIdx) => {
      const monthDays: DayData[] = [];
      for (let d = 1; d <= month.days; d++) {
        const date = new Date(YEAR, monthIdx, d);
        monthDays.push({ 
          month: month.name, 
          day: d, 
          dateStr: `${month.name} ${d}, ${YEAR}`,
          dayName: date.toLocaleDateString('en-US', { weekday: 'long' })
        });
      }

      let daysInWeekTracker = 0;
      for (let i = 0; i < monthDays.length; i += 2) {
        const d1 = monthDays[i];
        const d2 = monthDays[i + 1] || null;
        pages.push(<DailyRecordPage day1={d1} day2={d2} />);
        
        daysInWeekTracker += (d2 ? 2 : 1);
        if (daysInWeekTracker >= 7 || (i + 2 >= monthDays.length)) {
          pages.push(<WeeklyReviewPage weekNum={weekCount++} />);
          daysInWeekTracker = 0;
        }
      }
      pages.push(<MonthlyReviewPage month={month.name} />);
    });

    // 3. ANNEXURES
    ANNEXURE_TOPICS.forEach((_, idx) => {
      pages.push(<AnnexurePage topicIndex={idx} />);
    });

    // 4. CONCLUSION
    pages.push(<Front.ConclusionPage />);

    return pages;
  }, []);

  const handleManualPrint = () => {
    window.print();
  };

  const downloadStandaloneHTML = () => {
    if (!bookRef.current) return;
    setIsExporting(true);

    setTimeout(() => {
      const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
        .map(el => el.outerHTML)
        .join('\n');

      const content = bookRef.current?.innerHTML || '';

      const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clinical Diabetes Diary ${YEAR}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  ${styles}
  <style>
    body { background: #f0f2f5 !important; margin: 0; padding: 0; font-family: sans-serif; }
    .no-print { display: block; }
    @media print {
      @page { size: 176mm 250mm; margin: 0; }
      body { background: white !important; }
      .no-print { display: none !important; }
      .b5-page { margin: 0 !important; box-shadow: none !important; border: none !important; }
    }
    .b5-page { margin: 20px auto; box-shadow: 0 0 20px rgba(0,0,0,0.2); position: relative; width: 176mm; height: 250mm; }
  </style>
</head>
<body>
  <div class="no-print">
    <div style="background: white; padding: 20px; text-align: center; border-bottom: 2px solid black;">
      <h1 style="font-size: 20px; font-weight: 900;">Clinical Diabetes Diary: Print-Ready File</h1>
      <button onclick="window.print()" style="background: black; color: white; padding: 10px 20px; border: none; cursor: pointer; font-weight: 900; margin-top: 10px;">PRINT AS PDF</button>
    </div>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center;">
    ${content}
  </div>
</body>
</html>`;

      const blob = new Blob([htmlTemplate], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Diabetes_Diary_${YEAR}_Full_Book.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setIsExporting(false);
    }, 100);
  };

  const PageContainer: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
    const isOdd = (index + 1) % 2 !== 0; 
    return (
      <div className={`b5-page page-break ${isOdd ? 'b5-page-odd' : 'b5-page-even'} bg-white relative w-[176mm] h-[250mm] p-[10mm] shadow-lg mb-8 overflow-hidden`}>
        {children}
        <div className="absolute bottom-6 left-0 right-0 text-center text-[11px] text-black font-black uppercase tracking-[0.1em]">
          IP Talib Sagar • {YEAR} Clinical Diabetes Diary • Page {index + 1}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="no-print sticky top-0 bg-white border-b-4 border-black z-50 p-4 shadow-xl flex flex-col sm:flex-row justify-between items-center text-black gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-black uppercase tracking-tighter leading-tight">{YEAR} Clinical Diabetes Diary</h1>
          <p className="text-[10px] font-bold uppercase bg-black text-white px-2 py-0.5 inline-block mt-1">
            B5 PRESS-READY EDITION • {bookPages.length} PAGES
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={handleManualPrint}
            className="px-6 py-2 bg-blue-700 text-white text-xs font-black rounded shadow-lg transition uppercase tracking-tighter border-2 border-blue-900 hover:bg-blue-800"
          >
            PRINT TO PDF
          </button>
          <button 
            onClick={downloadStandaloneHTML} 
            disabled={isExporting}
            className={`px-6 py-2 bg-black text-white text-xs font-black rounded shadow-lg transition uppercase tracking-tighter flex items-center gap-2 border-2 border-black ${isExporting ? 'opacity-50 cursor-wait' : 'hover:bg-gray-900'}`}
          >
            <span>{isExporting ? '⏳' : '📥'}</span> 
            {isExporting ? '...' : 'DOWNLOAD HTML'}
          </button>
        </div>
      </div>

      <div className="py-10">
        <div ref={bookRef} className="flex flex-col items-center">
          {bookPages.map((content, idx) => (
            <PageContainer key={idx} index={idx}>
              {content}
            </PageContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;