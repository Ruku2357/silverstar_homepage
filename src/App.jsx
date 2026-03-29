import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  LineChart, 
  Code2, 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  History, 
  ArrowRight, 
  Award, 
  Plus, 
  HelpCircle, 
  Cpu, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Printer, 
  Zap, 
  Target, 
  Briefcase, 
  Globe, 
  Lock, 
  Download, 
  Construction, 
  Search 
} from 'lucide-react';

const App = () => {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ブラウザのタブ情報とタイトルを強制的に上書き
  useEffect(() => {
    document.title = "Silver Star 株式会社 | Intelligence & Assets";
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [page]);

  // faviconをダウンロードするための関数
  const handleDownloadFavicon = () => {
    const svgData = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2L19.8 12.2L30 16L19.8 19.8L16 30L12.2 19.8L2 16L12.2 12.2L16 2Z" fill="url(#silver_grad)" /><path d="M16 5L18.5 13.5L27 16L18.5 18.5L16 27L13.5 18.5L5 16L13.5 13.5L16 5Z" fill="white" fill-opacity="0.4" /><defs><linearGradient id="silver_grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#F8FAFC"/><stop offset="0.5" stop-color="#94A3B8"/><stop offset="1" stop-color="#475569"/></linearGradient></defs></svg>`;
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'favicon.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const companyData = {
    name: "Silver Star 株式会社",
    nameEn: "Silver Star Co., Ltd.",
    address: "〒273-0012 千葉県船橋市浜町二丁目3番37-610号",
    tel: "03-5860-4105",
    fax: "03-5860-4127",
    email: "info@silverstar.info",
    established: "平成22年12月9日",
    capital: "200万円",
    ceo: "川口 真史",
    number: "0104-01-091298",
    purposes: [
      "不動産の売買、賃貸、開発、仲介及び管理業",
      "各種投資事業",
      "システムの企画、開発、運用、保守、販売",
      "各種アプリケーションソフトの企画、開発、制作",
      "建築・土木工事の施工・請負",
      "太陽光発電などの再生可能エネルギーの発生装置の販売及び設置並びにコンサルティング",
      "イベントの企画・制作・運営",
      "広告代理店業",
      "人材派遣事業",
      "前各号に付帯する一切の業務"
    ]
  };

  const Navigation = () => (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || page !== 'home' ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-left">
        <div className="flex items-center cursor-pointer group" onClick={() => setPage('home')}>
          <div className="w-14 h-14 mr-5 relative flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain filter contrast-125 drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-400 rounded-xl shadow-inner text-left"></div>
          </div>
          <div className="flex flex-col border-l-2 border-slate-200 pl-5 text-left">
            <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none mb-1 uppercase italic">SILVER STAR</span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-blue-600 uppercase leading-none opacity-80">Intelligence & Assets</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
          {['Real Estate', 'Finance', 'System', 'Company'].map((item) => {
            const id = item.toLowerCase().replace(' ', '');
            return (
              <button key={id} onClick={() => setPage(id)} className={`hover:text-blue-600 transition-colors relative group ${page === id ? 'text-blue-600' : ''}`}>
                {item}
                <span className={`absolute -bottom-1 left-0 h-[2.5px] bg-blue-600 transition-all duration-300 ${page === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            );
          })}
          <button onClick={() => setPage('contact')} className="ml-6 px-7 py-3 bg-slate-900 text-white rounded-full text-[9px] hover:bg-blue-600 transition-all shadow-xl active:scale-95">
            Inquiry
          </button>
        </div>

        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-8 bg-white overflow-hidden text-left">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none text-left"></div>
      
      <div className="relative z-10 max-w-7xl w-full pt-40 pb-20 text-left">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 mb-14 shadow-sm text-left">
            <Award size={14} className="text-blue-600" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">Real Estate & Trading Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-light text-slate-900 leading-[0.95] tracking-tighter mb-16 text-left">
            価値の再定義を、<br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-600 text-[1.1em]">確かな論理と共に。</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 w-full items-end text-left">
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed border-l-4 border-blue-600/30 pl-10 font-medium text-left">
              Silver Star株式会社は、不動産・金融・ITを高度に融合。<br />
              実体ある開発実績と最先端のトレードシステム。10年を超える歴史が、<br />
              ビジネスの「信頼の担保」となります。
            </p>
            <div className="flex flex-wrap gap-5 md:justify-end text-left">
              <button onClick={() => setPage('realestate')} className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 group flex items-center gap-4 text-left">
                Real Estate Track Record <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const RealEstatePage = () => (
    <div className="pt-48 pb-32 px-8 max-w-6xl mx-auto text-left">
      <div className="flex items-center gap-4 mb-12 text-left">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm text-left">
          <Building2 size={36} />
        </div>
        <h2 className="text-[11px] font-bold text-blue-600 tracking-[0.5em] uppercase text-left">Real Estate Strategy</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-24 items-start mb-40 text-left">
        <div className="text-left">
          <h3 className="text-5xl md:text-7xl font-bold text-slate-900 mb-12 tracking-tighter leading-tight text-left">次なる価値を、<br />確かな土地に。</h3>
          <p className="text-2xl text-slate-600 leading-relaxed mb-10 font-semibold text-left">
            Silver Starは、現在進行形で自社マンション開発を推進する「アクティブな投資主体」です。
          </p>
          <div className="space-y-6 mb-12 text-left">
            <div className="p-8 bg-blue-600 text-white rounded-[2.5rem] shadow-xl text-left">
              <div className="flex items-center gap-4 mb-4 text-left">
                <Construction size={32} />
                <h4 className="text-2xl font-black italic text-left">Now Developing</h4>
              </div>
              <p className="text-lg leading-relaxed opacity-90 font-medium text-left">
                現在、2棟のマンション竣工実績を礎に、さらなる規模拡大へ。<br />
                <span className="text-3xl font-black mt-2 block text-left">次なる2〜3棟の建設へ向け、<br />最適な土地を募集しています。</span>
              </p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm text-left">
              <div className="flex items-center gap-4 mb-4 text-blue-600 text-left">
                <Search size={28} />
                <h4 className="text-xl font-bold text-slate-900 text-left">調査対象エリア</h4>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium text-left">
                公開されている物件情報はもとより、市場に出回る前の「未公開物件」を最優先に対象としています。確かな論理に基づき、土地の本質的なポテンシャルを見極めます。
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 text-left">
          <div className="p-14 bg-slate-900 text-white rounded-[4.5rem] shadow-2xl relative overflow-hidden group text-left">
            <div className="relative z-10 text-left">
              <Target size={56} className="text-blue-400 mb-12 group-hover:scale-110 transition-transform duration-700 text-left" />
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-4 text-left">Buying Criteria</span>
              <h4 className="text-4xl font-bold mb-8 tracking-tight leading-tight italic text-left">3億円〜6億円規模の<br />土地・収益物件</h4>
              <p className="text-slate-400 leading-relaxed text-lg font-medium text-left">
                マンション開発を目的とした、実需に基づいた用地取得を行っています。仲介業者様からの情報をダイレクトに受け、迅速な回答を約束します。
              </p>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] -translate-y-20 translate-x-20 text-left"></div>
          </div>
          
          <div className="p-14 bg-white border border-slate-200 rounded-[4.5rem] shadow-xl text-left">
            <MapPin size={56} className="text-blue-600 mb-12 text-left" />
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-slate-400 block mb-4 text-left">Focus Area</span>
            <h4 className="text-5xl font-bold mb-10 tracking-tight text-slate-900 uppercase italic text-left">最重点：城東4区</h4>
            <p className="text-slate-500 leading-relaxed mb-10 text-lg font-medium text-left">
              江東区・墨田区・台東区・江戸川区。既に実績を持つこのエリアに加え、23区全域・浦和・蘇我周辺の情報を広く募っています。
            </p>
            <div className="flex flex-wrap gap-4 text-left">
              {['江東区', '墨田区', '台東区', '江戸川区', '錦糸町', '上野'].map(tag => (
                <span key={tag} className="px-6 py-2 bg-slate-100 text-[12px] font-black text-slate-800 rounded-full border border-slate-200 shadow-sm text-left">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-24 bg-slate-950 text-white rounded-[6rem] relative overflow-hidden text-center shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent)] text-center"></div>
        <Briefcase className="mx-auto mb-14 text-blue-500" size={80} />
        <h3 className="text-6xl font-black mb-12 tracking-tighter leading-tight text-center">仲介業者様からの情報を<br />お待ちしております</h3>
        <p className="text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-20 font-light italic text-center">
          Silver Starは、明確な検討基準に基づき、スピード感を持って情報を精査します。<br />
          長期的なパートナーとして、共に価値を創造できる業者様との連携を歓迎いたします。
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
          <button onClick={() => setPage('contact')} className="px-16 py-8 bg-white text-slate-950 rounded-[2.5rem] font-black text-2xl hover:bg-blue-600 hover:text-white transition-all duration-700 flex items-center gap-6 shadow-3xl active:scale-95 text-center">
            案件のご相談・土地情報はこちら <ArrowRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );

  const FinancePage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto text-left">
      <div className="flex items-center gap-4 mb-8 text-left">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-left">
          <LineChart size={28} />
        </div>
        <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase text-left">Trading Solutions</h2>
      </div>
      <h3 className="text-5xl font-bold text-slate-900 mb-16 tracking-tighter text-left">投資支援システム</h3>
      
      <div className="grid md:grid-cols-2 gap-20 items-start mb-24 text-left">
        <div className="text-left">
          <p className="text-xl text-slate-600 leading-relaxed mb-10 italic font-medium text-left">
            マーケットの「構造」を読み解き、<br />
            すべての投資家にプロレベルの論理的優位性を。
          </p>
          <div className="space-y-6 text-left">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm text-left">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base text-left">
                <CheckCircle2 className="text-blue-600" size={20} /> 個人投資家向け提供
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed font-semibold text-left">
                かつて機関投資家レベルで求められた高度な解析アルゴリズムを、一般の投資家様が日常のトレードで活用できるシステムとして提供しています。
              </p>
            </div>
            <p className="text-base text-slate-500 leading-relaxed pl-6 border-l-4 border-blue-600/30 font-semibold text-left">
              「感情」を排し「データ」を信じる。不確実なマーケットにおいて、論理的な裏付けを持つことは最大の防御であり武器となります。
            </p>
          </div>
        </div>
        
        <div className="bg-slate-950 p-14 rounded-[4rem] text-white shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl text-left"></div>
          <h4 className="font-bold mb-12 flex items-center gap-4 text-blue-400 text-2xl tracking-tighter text-left"><HelpCircle size={32} /> システム導入に関するFAQ</h4>
          <div className="space-y-12 text-left">
            {[
              { q: "どのような投資スタイルに適していますか？", a: "主に短期〜中期のデータスイングトレードに強みを持ちます。市場の構造的な歪みを検知するアルゴリズムを搭載しています。" },
              { q: "導入後のサポート体制は？", a: "設定マニュアルの完備、およびオンラインでのテクニカルサポートを提供しております。システムが常に最新のマーケット環境に最適化されるよう、継続的なアップデートを行っています。" },
              { q: "体験版や試用期間はありますか？", a: "現在、Sky Systemの体験版・試用期間は設けておりません。詳細な仕様やデモについては個別にお問い合わせください。" }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-10 last:border-0 text-left">
                <p className="font-bold text-white mb-4 leading-relaxed text-lg flex items-start text-left">
                  <span className="text-blue-500 mr-4">Q.</span> {faq.q}
                </p>
                <p className="text-slate-400 leading-relaxed text-base pl-10 font-medium text-left">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SystemPage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto text-left">
      <div className="flex items-center gap-4 mb-8 text-left">
        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white text-left">
          <Code2 size={28} />
        </div>
        <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase text-left">Sky System</h2>
      </div>
      <h3 className="text-5xl font-bold text-slate-900 mb-16 tracking-tighter text-left">プロダクト開発</h3>
      
      <div className="grid md:grid-cols-12 gap-10 mb-24 text-left">
        <div className="md:col-span-8 bg-white border border-slate-100 rounded-[4rem] p-16 relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all text-left">
          <div className="relative z-10 text-left">
            <h4 className="text-4xl font-black mb-8 text-slate-900 tracking-tight text-left">Sky System (Trade Core)</h4>
            <p className="text-slate-500 text-2xl leading-relaxed mb-12 font-semibold text-left">
              高度な数学的アルゴリズムを、全ての投資家のデスクトップへ。
              一から構築された独自のコアエンジンが、圧倒的な解析速度と精度を実現します。
            </p>
            <div className="flex flex-wrap gap-4 text-left">
              {["Math Engine", "Python Core", "Retail Trading", "High Speed"].map(tag => (
                <span key={tag} className="px-6 py-2 bg-slate-50 text-slate-600 rounded-full text-[11px] font-black border border-slate-200 uppercase tracking-widest text-left">{tag}</span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-600/5 -skew-x-12 translate-y-12 translate-x-12 text-left"></div>
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-10 text-left">
          <div className="flex-1 bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-between shadow-xl text-left">
            <h5 className="font-bold text-blue-400 text-sm mb-8 uppercase tracking-widest leading-relaxed text-left">System Architecture</h5>
            <p className="text-sm text-slate-400 leading-relaxed font-bold text-left">複雑な情報を論理的に整理。投資判断の「質」を劇的に向上させます。</p>
          </div>
          <div className="flex-1 bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-200 flex flex-col justify-between text-left">
            <h5 className="font-bold text-sm mb-8 uppercase tracking-widest leading-relaxed text-left">Usability Design</h5>
            <p className="text-sm text-blue-100 leading-relaxed font-bold text-left">プロ向けの機能を直感的に。あらゆるデバイスで最高のUXを提供します。</p>
          </div>
        </div>
      </div>
    </div>
  );

  const CompanyPage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto text-left">
      <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase mb-8 text-left">Corporate Identity</h2>
      <h3 className="text-6xl font-black text-slate-900 mb-20 tracking-tighter text-left">会社情報</h3>
      
      <div className="grid md:grid-cols-1 gap-2 mb-40 text-left">
        {[
          { label: "商号", value: companyData.name },
          { label: "法人番号", value: companyData.number },
          { label: "代表者", value: companyData.ceo },
          { label: "本店所在地", value: companyData.address },
          { label: "資本金", value: companyData.capital },
          { label: "設立年月日", value: companyData.established }
        ].map((row, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center py-10 border-b border-slate-100 text-left">
            <span className="md:w-1/3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 md:mb-0 text-left">{row.label}</span>
            <span className="md:w-2/3 text-3xl font-black text-slate-900 tracking-tight text-left">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start text-left">
        <div className="p-16 bg-slate-950 text-white rounded-[4rem] shadow-2xl text-left">
           <h4 className="text-3xl font-black mb-14 flex items-center gap-6 text-white text-left">
             <Building2 className="text-blue-500" size={40} /> 事業目的
           </h4>
           <div className="space-y-6 text-left">
             {companyData.purposes.map((p, i) => (
               <div key={i} className="flex items-start gap-6 border-b border-white/5 pb-6 last:border-0 text-left">
                 <span className="text-[12px] font-black text-blue-500 mt-1 font-mono opacity-60 text-left">{(i + 1).toString().padStart(2, '0')}</span>
                 <p className="text-[14px] text-slate-300 leading-relaxed font-black tracking-tight text-left">{p}</p>
               </div>
             ))}
           </div>
        </div>

        <div className="p-16 bg-white rounded-[4rem] border border-slate-100 shadow-2xl text-left">
           <h4 className="text-3xl font-black mb-14 flex items-center gap-6 text-slate-900 text-left">
             <History className="text-blue-600" size={40} /> 沿革
           </h4>
           <div className="space-y-20 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 text-left">
              {[
                { date: "平成22年12月", event: "Silver Star 株式会社 設立 (港区麻布)" },
                { date: "令和5年1月", event: "経営体制の刷新" },
                { date: "令和5年4月", event: "本店移転 (千葉県船橋市)、自社マンション開発・金融システムの拡充" }
              ].map((h, i) => (
                <div key={i} className="relative pl-20 text-left">
                  <div className="absolute left-0 top-1.5 w-10 h-10 bg-white border-4 border-blue-600 rounded-full shadow-2xl z-10 text-left"></div>
                  <span className="text-xs font-black text-blue-600 mb-4 block uppercase tracking-[0.4em] text-left">{h.date}</span>
                  <p className="text-2xl text-slate-900 font-black tracking-tighter leading-snug text-left">{h.event}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(page) {
      case 'home': return <Hero />;
      case 'realestate': return <RealEstatePage />;
      case 'company': return <CompanyPage />;
      case 'system': return <SystemPage />;
      case 'finance': return <FinancePage />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden text-left">
      <Navigation />
      <main className="transition-opacity duration-500 text-left">
        {renderPage()}
        {page === 'home' && (
          <section className="py-40 px-8 bg-white max-w-7xl mx-auto text-left">
            <div className="grid md:grid-cols-3 gap-12 text-left">
              {[
                { id: 'realestate', icon: Building2, title: '不動産事業', desc: '2棟の竣工実績。次なる2〜3棟へ向けた用地取得と開発。' },
                { id: 'finance', icon: LineChart, title: '金融システム販売', desc: 'すべての投資家にプロレベルの解析を。Sky Systemの提供。' },
                { id: 'system', icon: Code2, title: 'システム開発', desc: '数学的アルゴリズムを実装した、高精度なトレード基盤の自社開発。' }
              ].map((s) => (
                <div key={s.id} onClick={() => setPage(s.id)} className="group p-14 bg-slate-50 rounded-[4rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl text-left">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mb-12 shadow-md group-hover:scale-110 transition-transform duration-700 text-left">
                    <s.icon size={40} className="text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight italic text-left">{s.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-12 font-black text-left">{s.desc}</p>
                  <div className="flex items-center gap-3 text-blue-600 text-[12px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all text-left">
                    Explore Domain <ChevronRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-32 px-8 mt-40 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 text-left">
          <div className="col-span-2 text-left">
            <div className="flex items-center gap-6 mb-10 text-left">
              <div className="w-14 h-14 relative flex items-center justify-center text-left">
                <img src="/logo.png" alt="Silver Star" className="w-full h-full object-contain" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic text-left">SILVER STAR<span className="text-blue-600">.</span></span>
            </div>
            <p className="text-[12px] text-slate-400 leading-relaxed font-bold uppercase tracking-[0.4em] mb-12 text-left">
              © {new Date().getFullYear()} Silver Star Co., Ltd. <br />
              Registration No: {companyData.number}
            </p>
            <button 
              onClick={handleDownloadFavicon}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95 text-left"
            >
              <Download size={16} /> Download favicon.svg
            </button>
          </div>
          <div className="text-left">
            <h4 className="text-slate-900 font-bold mb-10 text-[12px] uppercase tracking-widest leading-relaxed text-left">Navigation</h4>
            <ul className="space-y-6 text-base text-slate-500 font-black text-left">
              <li className="hover:text-blue-600 cursor-pointer text-left" onClick={() => setPage('realestate')}>Real Estate Strategy</li>
              <li className="hover:text-blue-600 cursor-pointer text-left" onClick={() => setPage('finance')}>Trading Solutions</li>
              <li className="hover:text-blue-600 cursor-pointer text-left" onClick={() => setPage('company')}>Corporate Identity</li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-slate-900 font-bold mb-10 text-[12px] uppercase tracking-widest leading-relaxed text-left">Base Location</h4>
            <p className="text-base text-slate-500 leading-relaxed font-black mb-8 tracking-tight text-left">
              {companyData.address}
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-left">
              <Phone size={20} />
              <span className="text-sm font-black text-left">{companyData.tel}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;