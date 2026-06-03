// 시작: src/App.jsx 전체 교체
import React, { useState, useMemo, useEffect } from 'react';
import { manualData } from './data/manualData';

function App() {
  // 보안 핀 번호 설정 (원하는 4자리 숫자로 변경)
  const CORRECT_PIN = '1014';
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // PIN 번호 제출 핸들러
  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinInput === CORRECT_PIN) {
      setIsAuthorized(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput('');
    }
  };

  // 검색어 필터링 로직
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return manualData;
    
    const lowerQuery = searchQuery.toLowerCase();
    return manualData.map(phase => {
      const filteredSections = phase.sections.filter(
        sec => 
          sec.sectionTitle.toLowerCase().includes(lowerQuery) || 
          sec.content.toLowerCase().includes(lowerQuery)
      );
      return { ...phase, sections: filteredSections };
    }).filter(phase => phase.sections.length > 0);
  }, [searchQuery]);
  const currentPhase = useMemo(() => {
    if (!activeSection) return null;
    return manualData.find(phase =>
      phase.sections.some(sec => sec.sectionId === activeSection.sectionId)
    );
  }, [activeSection]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  // 붙여넣을 코드 처음
  // [추가된 로직] 어떤 경로로든 섹션(activeSection)이 바뀔 때마다 본문 스크롤 컨테이너(main)를 최상단으로 리셋
  useEffect(() => {
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }, [activeSection]);

  // [수정된 로직] 해시(#) 링크 클릭 시 해당 섹션으로 화면을 전환한 뒤 최상단 스크롤 안전하게 처리
  useEffect(() => {
    const handleHashClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault(); // 주소창 URL 변경 방지
      const id = href.substring(1);
      
      let targetSection = null;
      for (const phase of manualData) {
        const sec = phase.sections.find(s => s.sectionId === id);
        if (sec) {
          targetSection = sec;
          break;
        }
      }

      if (targetSection) {
        setActiveSection(targetSection); // 해당 섹션으로 화면 전환
        
        // 화면이 바뀌고 새로운 데이터가 렌더링된 후 확실하게 main 스크롤을 맨 위로 고정
        setTimeout(() => {
          const mainContainer = document.querySelector('main');
          if (mainContainer) {
            mainContainer.scrollTop = 0;
          }
        }, 50);
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);
// 붙여넣을 코드 끝

  // 인증되지 않은 경우 잠금 화면 렌더링
  if (!isAuthorized) {
    return (
      <div className="flex h-screen w-full bg-stone-950 items-center justify-center font-sans selection:bg-stone-700">
        <div className="w-full max-w-sm px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black tracking-tighter text-white mb-2">STRETTO</h1>
            <p className="text-[10px] text-stone-500 font-bold tracking-[0.2em]">MASTER MANUAL</p>
          </div>
          <form onSubmit={handlePinSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                maxLength={4}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                placeholder="PIN 4자리 입력"
                className={`w-full bg-stone-900 border text-center text-2xl tracking-[0.5em] text-white px-4 py-4 rounded focus:outline-none transition-colors ${
                  pinError ? 'border-red-500 focus:border-red-500' : 'border-stone-800 focus:border-stone-600'
                }`}
              />
              {pinError && <p className="text-red-500 text-xs text-center mt-3 font-medium">비밀번호가 일치하지 않습니다.</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-stone-100 text-stone-900 font-bold text-sm py-4 rounded hover:bg-white transition-colors tracking-widest"
            >
              ACCESS
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 인증 성공 시 메인 매뉴얼 렌더링
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-stone-50 text-stone-900 font-sans overflow-hidden selection:bg-stone-200">
      
      <header className="md:hidden flex items-center justify-between bg-stone-950 p-5 shrink-0 z-40 sticky top-0 shadow-md">
        <div>
          <h1 className="text-xl font-black tracking-tighter text-white cursor-pointer" onClick={() => {setActiveSection(null); setIsMobileMenuOpen(false);}}>STRETTO</h1>
          <p className="text-[8px] text-stone-500 font-bold tracking-widest mt-1">MASTER MANUAL</p>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-stone-300 p-2 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 w-80 bg-stone-950 border-r border-stone-800 flex flex-col h-full shrink-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 md:p-10 border-b border-stone-800">
          <div className="cursor-pointer group hidden md:block" onClick={() => handleSectionClick(null)}>
            <h1 className="text-3xl font-black tracking-tighter text-white group-hover:text-stone-300 transition-colors">STRETTO</h1>
            <h2 className="text-xs font-bold tracking-[0.25em] text-stone-500 mt-2">COFFEE FACTORY</h2>
            <div className="w-6 h-[2px] bg-stone-700 mt-8 mb-4"></div>
            <p className="text-[10px] text-stone-500 font-light tracking-widest uppercase">Master Manual</p>
          </div>
          
          <div className="mt-2 md:mt-8 relative">
            <input 
              type="text" 
              placeholder="매뉴얼 검색..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 text-stone-300 text-sm px-4 py-3 rounded focus:outline-none focus:border-stone-600 transition-colors placeholder:text-stone-700"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600 hover:text-stone-400"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {filteredData.length === 0 ? (
            <p className="text-stone-600 text-sm text-center mt-10">검색 결과가 없습니다.</p>
          ) : (
            filteredData.map((phase) => (
              <div key={phase.phaseId} className="space-y-4">
                <h3 className="text-[10px] font-bold text-stone-600 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">
                  {phase.phaseTitle}
                </h3>
                <ul className="space-y-3">
                  {phase.sections.map((section) => (
                    <li key={section.sectionId}>
                      <button
                        onClick={() => handleSectionClick(section)}
                        className={`w-full text-left flex flex-col gap-1 transition-all duration-200 ${
                          activeSection?.sectionId === section.sectionId
                            ? 'text-white'
                            : 'text-stone-500 hover:text-stone-300'
                        }`}
                      >
                        <span className="text-[9px] tracking-widest font-mono opacity-70">SEC {section.sectionId}</span>
                        <span className="text-sm font-medium leading-snug break-keep">{section.sectionTitle.replace(`${section.sectionId} `, '')}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto bg-stone-50 relative w-full">
        {!activeSection ? (
          <div className="min-h-full flex flex-col px-6 py-12 md:px-16 md:py-24 max-w-6xl mx-auto">
            <div className="mb-16 md:mb-24">
              <span className="text-stone-400 font-medium tracking-[0.2em] text-[10px] md:text-xs mb-4 md:mb-6 block">B2B PARTNERSHIP MANUAL</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 md:mb-8 text-stone-900 leading-[1.2] md:leading-[1.1]">
                카페 창업<br/>마스터 매뉴얼
              </h2>
              <div className="w-8 md:w-12 h-[2px] bg-stone-900 mb-6 md:mb-8"></div>
              <p className="text-base md:text-xl text-stone-600 font-light max-w-2xl leading-relaxed break-keep">
                STRETTO COFFEE FACTORY의 축적된 데이터와 노하우를 바탕으로 설계된 창업 솔루션
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-x-16 md:gap-y-16 border-t border-stone-200 pt-12 md:pt-16">
              {manualData.map((phase) => (
                <div key={phase.phaseId} className="group cursor-pointer" onClick={() => handleSectionClick(phase.sections[0])}>
                  <div className="flex items-baseline gap-3 md:gap-4 mb-4 md:mb-5">
                    <span className="text-stone-300 font-black text-3xl md:text-4xl">
                    {String(phase.phaseId).padStart(2, '0')}
                  </span>
                    <h4 className="text-lg md:text-xl font-bold text-stone-900 tracking-tight break-keep">{phase.phaseTitle.replace(`${phase.phaseId} `, '')}</h4>
                  </div>
                  <div className="pl-10 md:pl-14 space-y-2 md:space-y-3 border-l border-stone-200 ml-3 md:ml-4 py-1 md:py-2">
                    {phase.sections.map((section) => (
                      <p key={section.sectionId} className="text-xs md:text-sm text-stone-500 group-hover:text-stone-900 transition-colors break-keep">
                        {section.sectionTitle.replace(`${section.sectionId} `, '')}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="min-h-full flex flex-col max-w-4xl mx-auto px-6 py-10 md:px-12 md:py-24">
            <button onClick={() => setActiveSection(null)} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 hover:text-stone-900 uppercase mb-12 md:mb-20 transition-colors self-start flex items-center gap-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              INDEX RETURN
            </button>

            {/* 상단 고정식 가로 스크롤 서브 내비게이션 바 */}
            {currentPhase && (
              <div className="sticky top-0 bg-stone-50/80 backdrop-blur-md z-20 border-b border-stone-200 -mx-6 px-6 md:-mx-12 md:px-12 py-4 mb-10 overflow-x-auto flex gap-6 shrink-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {currentPhase.sections.map((sec) => (
                  <button
                    key={sec.sectionId}
                    onClick={() => setActiveSection(sec)}
                    className={`whitespace-nowrap text-xs font-bold tracking-tight pb-2 border-b-2 transition-all shrink-0 ${
                      activeSection.sectionId === sec.sectionId
                        ? 'text-stone-900 border-stone-900'
                        : 'text-stone-400 border-transparent hover:text-stone-600'
                    }`}
                  >
                    {sec.sectionTitle.replace(`${sec.sectionId} `, '')}
                  </button>
                ))}
              </div>
            )}

            <article>
              <header className="mb-10 md:mb-16">
                <span className="text-stone-500 font-mono text-xs md:text-sm tracking-widest block mb-3 md:mb-4">SECTION {activeSection.sectionId}</span>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight text-stone-900 leading-snug md:leading-tight break-keep">
                  {activeSection.sectionTitle.replace(`${activeSection.sectionId} `, '')}
                </h2>
              </header>
              <div className="w-full h-[1px] bg-stone-300 mb-10 md:mb-16"></div>
              <div className="md:p-4">
                <div 
                  className="font-light text-stone-800 tracking-wide text-base md:text-lg break-keep [&_img]:max-w-full [&_img]:h-auto"
                  dangerouslySetInnerHTML={{ __html: activeSection.content }} 
                />
              </div>
            </article>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
// 끝: src/App.jsx