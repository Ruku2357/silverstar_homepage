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
  ZapOff
} from 'lucide-react';

const App = () => {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ブラウザのタブ情報を更新
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

  const companyData = {
    name: "Silver Star 株式会社",
    nameEn: "Silver Star Co., Ltd.",
    headOffice: "〒273-0012 千葉県船橋市浜町二丁目3番37-610号",
    tokyoOffice: "〒106-0042 東京都港区麻布狸穴町60-1",
    tel: "03-5860-4105",
    fax: "03-5860-4127",
    email: "info@silverstar.info",
    established: "平成22年12月9日",
    capital: "200万円",
    ceo: "川口 真史",
    number: "0104-01-091298",
    purposes: [
      "各種投資事業",
      "適格機関投資家等特例業務",
      "不動産の売買、賃貸、開発、仲介及び管理業",
      "建築・土木工事の施工・請負",
      "太陽光発電などの再生可能エネルギーの発生装置の販売及び設置並びにコンサルティング",
      "生命保険の募集に関する業務及び損害保険代理業",
      "イベントの企画・制作・運営",
      "広告代理店業",
      "人材派遣事業",
      "エステサロンの経営",
      "レーシングチームの管理・運営",
      "前各号に付帯する一切の業務"
    ]
  };

  const Navigation = () => (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || page !== 'home' ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => setPage('home')}>
          <div className="w-6 h-6 mr-3 relative flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain filter contrast-125 group-hover:scale-110 transition-transform"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden w-5 h-5 bg-blue-600 rounded-sm"></div>
          </div>
          <div className="flex flex-col border-l border-slate-200 pl-3">
            <span className="text-base font-bold tracking-tighter text-slate-900 leading-none mb-1 uppercase">SILVER STAR</span>
            <span className="text-[7px] font-bold tracking-[0.3em] text-blue-600 uppercase leading-none opacity-80">Intelligence & Assets</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
          {['Real Estate', 'Finance', 'System', 'Company'].map((item) => {
            const id = item.toLowerCase().replace(' ', '');
            return (
              <button key={id} onClick={() => setPage(id)} className={`hover:text-blue-600 transition-colors relative group ${page === id ? 'text-blue-600' : ''}`}>
                {item}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-blue-600 transition-all duration-300 ${page === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            );
          })}
          <button onClick={() => setPage('contact')} className="px-5 py-2 bg-slate-900 text-white rounded-full text-[9px] hover:bg-blue-600 transition-all shadow-lg active:scale-95">
            Inquiry
          </button>
        </div>

        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-8 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl w-full pt-40 pb-20">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-10 shadow-sm">
            <Award size={12} className="text-blue-600" />
            <span className="text-[9px] font-bold tracking-[0.3em] text-slate-500 uppercase">Strategic Asset Management</span>
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-light text-slate-900 leading-[1.05] tracking-tighter mb-12">
            価値の再定義を、<br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-600">確かな論理と共に。</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 w-full items-end">
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed border-l-2 border-blue-600/20 pl-8">
              Silver Star株式会社は、不動産・金融・ITを高度に融合。<br />
              未公開情報の集約力と、10年を超える歴史が、<br />
              ビジネスの「信頼の担保」となります。
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <button onClick={() => setPage('realestate')} className="px-9 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-slate-200 group">
                Case & Strategy <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const RealEstatePage = () => (
    <div className="pt-48 pb-32 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
          <Building2 size={28} />
        </div>
        <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase">Real Estate Strategy</h2>
      </div>
      
      {/* メインコンセプト：未公開物件へのアプローチ */}
      <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
        <div>
          <h3 className="text-5xl font-bold text-slate-900 mb-10 tracking-tighter">土地情報の集約と<br />バリューアップ</h3>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            私たちは単なる投資家ではなく、戦略的に「土地を探し、その価値を最大化する」プロフェッショナルな実務集団です。
            独自のネットワークを駆使し、市場に出回る前の「未公開物件」に対して迅速かつ論理的にアプローチします。
          </p>
          <div className="grid grid-cols-1 gap-4 mb-10">
            {[
              { icon: Lock, label: "守秘義務の徹底", text: "未公開情報の取り扱いには細心の注意を払い、関係者の信頼を第一に考えます" },
              { icon: Zap, label: "即断即決の決済力", text: "明確な投資基準により、無駄な検討時間を排除し最速の回答を約束します" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <item.icon className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <Target size={40} className="text-blue-500 mb-8" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Buying Criteria</span>
              <h4 className="text-3xl font-bold mt-4 mb-6 tracking-tight">3億円〜6億円規模の<br />土地・収益物件</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                ボリュームゾーンを明確に設定することで、仲介業者様が迷うことなく情報を持ち込める環境を整えています。年間5〜15棟の回転を目指すアグレッシブな取得体制を維持しています。
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
          </div>
          
          <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-sm">
            <MapPin size={40} className="text-blue-600 mb-8" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Focus Area</span>
            <h4 className="text-3xl font-bold mt-4 mb-6 tracking-tight text-slate-900">最重点：城東4区</h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              江東区・墨田区・台東区・江戸川区。情報の流動性が高く、我々の知見が最も発揮されるこのエリアにリソースを集中させています。
            </p>
            <div className="flex flex-wrap gap-2">
              {['錦糸町', '上野', '入谷', '亀戸'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-slate-100 text-[10px] font-bold text-slate-600 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* エリア戦略のWhy */}
      <div className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <Globe size={24} className="text-blue-600" /> 戦略的ネットワークの構築
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              私たちは「このエリアならシルバースター」という専門性を確立することを目指しています。ターゲットを絞ることで、地元の業者様との密な連携が可能になり、結果として希少な未公開情報が集まる構造を構築しています。
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] block mb-2">Extended Coverage</span>
            <p className="text-lg font-bold text-slate-800">23区全域・浦和〜蘇我</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {['江東区', '墨田区', '台東区', '江戸川区'].map(ward => (
            <div key={ward} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl text-center group hover:bg-blue-600 transition-all cursor-default">
              <p className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors">{ward}</p>
              <p className="text-[10px] text-slate-400 mt-2 uppercase font-bold group-hover:text-blue-100">Top Priority</p>
            </div>
          ))}
        </div>
      </div>

      {/* 仲介業者・オーナー様へ */}
      <div className="p-16 bg-slate-950 text-white rounded-[4rem] relative overflow-hidden text-center shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent)]"></div>
        <Briefcase className="mx-auto mb-10 text-blue-500" size={56} />
        <h3 className="text-4xl font-bold mb-8 tracking-tighter">案件情報の持ち込みを<br />歓迎いたします</h3>
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          未公開物件の紹介において最も重要な「スピード」と「信頼」を、私たちは組織として担保します。
          明確な検討基準に基づき、最速24時間以内の初期回答を目指しています。
          業者様にとって「手離れが良く、確実に利益が出るパートナー」であることをお約束します。
        </p>
        <div className="flex flex-col sm:row items-center justify-center gap-6">
          <button onClick={() => setPage('contact')} className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl">
            案件のご相談はこちら <ArrowRight size={20} />
          </button>
          <p className="text-xs text-slate-500 font-medium">※守秘義務を遵守し、情報を大切に扱います</p>
        </div>
      </div>
    </div>
  );

  const FinancePage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
          <LineChart size={28} />
        </div>
        <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase">Sky Capital</h2>
      </div>
      <h3 className="text-5xl font-bold text-slate-900 mb-16 tracking-tighter">金融・投資事業</h3>
      
      <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
        <div>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 italic">
            適格機関投資家等特例業務を通じた、プロフェッショナル向けの資産運用ソリューション。
          </p>
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="text-blue-600" size={18} /> 管轄財務局
              </h4>
              <p className="text-sm text-slate-500">関東財務局 (金融庁登録業者リスト準拠)</p>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed pl-4 border-l-2 border-slate-200">
              私たちは、不確実なマーケットにおいて「論理的な優位性」を追求します。
              高度な数学モデルとデータ解析に基づき、リスクを構造的に管理。
            </p>
          </div>
        </div>
        
        <div className="bg-slate-950 p-12 rounded-[3rem] text-white shadow-2xl">
          <h4 className="font-bold mb-8 flex items-center gap-2 text-blue-400"><HelpCircle size={18} /> Q&A</h4>
          <div className="space-y-8 text-sm">
            {[
              { q: "どのような資産を対象としていますか？", a: "主に国内有価証券、及び不動産市場を対象とした構造的なポートフォリオ構築を支援します。独自の解析アルゴリズムを用いた市場分析が強みです。" },
              { q: "体験版や試用期間はありますか？", a: "現在、Sky Systemの体験版・試用期間は設けておりません。詳細な仕様については個別にお問い合わせください。" },
              { q: "導入後のサポート体制は？", a: "設定マニュアルの完備、および専門スタッフによるテクニカルサポートを提供しております。" }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <p className="font-bold text-white mb-2 leading-relaxed">Q. {faq.q}</p>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SystemPage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
          <Code2 size={28} />
        </div>
        <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase">Sky System</h2>
      </div>
      <h3 className="text-5xl font-bold text-slate-900 mb-16 tracking-tighter">プロダクト開発</h3>
      
      <div className="grid md:grid-cols-12 gap-10 mb-24">
        <div className="md:col-span-8 bg-white border border-slate-100 rounded-[3rem] p-16 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all">
          <div className="relative z-10">
            <h4 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Sky System (トレードソフト)</h4>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              世界トップレベルの開発経験を持つエンジニア陣により、スクラッチから構築された次世代トレードシステム。
              数学的アルゴリズムを、実際のマーケットへ高精度に実装します。
            </p>
            <div className="flex flex-wrap gap-3">
              {["Scratch Dev", "Mathematical Logic", "Python", "High Usability"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-[9px] font-bold border border-slate-200 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-10">
          <div className="flex-1 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
            <h5 className="font-bold text-blue-400 text-sm mb-4">革新的技術</h5>
            <p className="text-xs text-slate-400 leading-relaxed">既存の枠組みに囚われない、独自のコアエンジンによる高速レスポンスを実現。</p>
          </div>
          <div className="flex-1 bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-lg shadow-blue-100 flex flex-col justify-between">
            <h5 className="font-bold text-sm mb-4">ユーザビリティ</h5>
            <p className="text-xs text-blue-100 leading-relaxed">複雑なデータ構造を直感的なインターフェースへと昇華。意思決定を加速させます。</p>
          </div>
        </div>
      </div>
    </div>
  );

  const CompanyPage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto">
      <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase mb-8">Corporate Profile</h2>
      <h3 className="text-5xl font-bold text-slate-900 mb-20 tracking-tighter">会社情報</h3>
      
      <div className="grid md:grid-cols-1 gap-2 mb-32">
        {[
          { label: "商号", value: companyData.name },
          { label: "法人番号", value: companyData.number },
          { label: "代表者", value: companyData.ceo },
          { label: "所在地", value: companyData.tokyoOffice },
          { label: "千葉本店所在地", value: companyData.headOffice },
          { label: "資本金", value: companyData.capital },
          { label: "設立年月日", value: companyData.established }
        ].map((row, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center py-8 border-b border-slate-100">
            <span className="md:w-1/3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:mb-0">{row.label}</span>
            <span className="md:w-2/3 text-lg font-bold text-slate-800 tracking-tight">{row.value}</span>
          </div>
        ))}
        <div className="flex flex-col md:flex-row md:items-center py-6 border-b border-slate-100">
          <span className="md:w-1/3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-0">連絡先</span>
          <div className="md:w-2/3 flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><Phone size={14} className="text-blue-600" /> {companyData.tel}</div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><Mail size={14} className="text-blue-600" /> {companyData.email}</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="p-12 bg-slate-950 text-white rounded-[3rem] shadow-2xl">
           <h4 className="text-2xl font-bold mb-10 flex items-center gap-4 text-white">
             <Building2 className="text-blue-500" /> 事業目的
           </h4>
           <div className="space-y-4">
             {companyData.purposes.map((p, i) => (
               <div key={i} className="flex items-start gap-4">
                 <span className="text-[10px] font-bold text-blue-500 mt-1 font-mono opacity-60">{(i + 1).toString().padStart(2, '0')}</span>
                 <p className="text-[12px] text-slate-300 leading-relaxed">{p}</p>
               </div>
             ))}
           </div>
        </div>

        <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
           <h4 className="text-2xl font-bold mb-10 flex items-center gap-4 text-slate-900">
             <History className="text-blue-600" /> 沿革
           </h4>
           <div className="space-y-12 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
              {[
                { date: "平成22年12月", event: "Silver Star 株式会社 設立 (港区麻布)" },
                { date: "令和5年1月", event: "経営体制の刷新" },
                { date: "令和5年4月", event: "本店移転 (千葉県船橋市)、不動産事業・Sky Capitalの拡充" }
              ].map((h, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-sm"></div>
                  <span className="text-[10px] font-bold text-blue-600 mb-2 block">{h.date}</span>
                  <p className="text-base text-slate-700 font-bold">{h.event}</p>
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
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navigation />
      <main className="transition-opacity duration-500">
        {renderPage()}
        {page === 'home' && (
          <section className="py-32 px-8 bg-white max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { id: 'realestate', icon: Building2, title: '不動産事業', desc: '城東4区を重点とした用地開発。実需に基づいた地域価値の創出。' },
                { id: 'finance', icon: LineChart, title: '金融事業', desc: 'Sky Capitalによる適格機関投資家向け資産運用スキーム。' },
                { id: 'system', icon: Code2, title: 'システム開発', desc: 'Sky System: 極限の数学モデルを実装したトレード基盤。' }
              ].map((s) => (
                <div key={s.id} onClick={() => setPage(s.id)} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all cursor-pointer shadow-sm">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <s.icon size={28} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-8">{s.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                    Detail <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-24 px-8 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left">
          <div className="col-span-2">
            <span className="text-xl font-bold text-slate-900 tracking-tighter mb-6 block uppercase">SILVER STAR<span className="text-blue-600">.</span></span>
            <p className="text-[10px] text-slate-400 leading-relaxed font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Silver Star Co., Ltd. <br />
              Registration No: {companyData.number}
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-[10px] uppercase tracking-widest">Site Map</h4>
            <ul className="space-y-4 text-[13px] text-slate-500 font-medium">
              <li className="hover:text-blue-600 cursor-pointer" onClick={() => setPage('realestate')}>Real Estate</li>
              <li className="hover:text-blue-600 cursor-pointer" onClick={() => setPage('finance')}>Sky Capital</li>
              <li className="hover:text-blue-600 cursor-pointer" onClick={() => setPage('company')}>Company</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-[10px] uppercase tracking-widest">Head Office</h4>
            <p className="text-[13px] text-slate-500 leading-relaxed tracking-tight">
              {companyData.headOffice}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;