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
  Download
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
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || page !== 'home' ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => setPage('home')}>
          {/* ブランドアイコン：サイズを拡大 (w-14 h-14) */}
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
            {/* フォールバック用アイコン */}
            <div className="hidden w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-400 rounded-xl shadow-inner"></div>
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
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl w-full pt-40 pb-20">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 mb-14 shadow-sm">
            <Award size={14} className="text-blue-600" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">Strategic Asset Management</span>
          </div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-light text-slate-900 leading-[0.95] tracking-tighter mb-16">
            価値の再定義を、<br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-600 text-[1.1em]">確かな論理と共に。</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 w-full items-end">
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed border-l-4 border-blue-600/30 pl-10 font-medium">
              Silver Star株式会社は、不動産・金融・ITを高度に融合。<br />
              未公開情報の集約力と、10年を超える歴史が、<br />
              ビジネスの「信頼の担保」となります。
            </p>
            <div className="flex flex-wrap gap-5 md:justify-end">
              <button onClick={() => setPage('realestate')} className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 group flex items-center gap-4">
                Discover Strategy <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const RealEstatePage = () => (
    <div className="pt-48 pb-32 px-8 max-w-6xl mx-auto text-left">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
          <Building2 size={36} />
        </div>
        <h2 className="text-[11px] font-bold text-blue-600 tracking-[0.5em] uppercase">Real Estate Strategy</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
        <div>
          <h3 className="text-5xl md:text-7xl font-bold text-slate-900 mb-12 tracking-tighter leading-tight">土地情報の集約と<br />バリューアップ</h3>
          <p className="text-2xl text-slate-600 leading-relaxed mb-10 font-semibold">
            私たちは単なる投資家ではありません。戦略的に「土地を探し、その価値を最大化する」プロフェッショナルな実務集団です。
          </p>
          <p className="text-lg text-slate-500 leading-relaxed mb-12">
            独自のネットワークを駆使し、市場に出回る前の「未公開物件」に対して迅速かつ論理的にアプローチ。守秘義務を徹底し、関係者の信頼を第一に情報を流動化させます。
          </p>
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Lock, label: "守秘義務の徹底", text: "未公開情報の取り扱いには細心の注意を払い、関係者の信頼を第一に考えます" },
              { icon: Zap, label: "即断即決の決済力", text: "明確な投資基準により、無駄な検討時間を排除し最速の回答を約束します" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-left">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{item.label}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <div className="p-14 bg-slate-900 text-white rounded-[4.5rem] shadow-2xl relative overflow-hidden group text-left">
            <div className="relative z-10">
              <Target size={56} className="text-blue-400 mb-12 group-hover:scale-110 transition-transform duration-700" />
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-4">Buying Criteria</span>
              <h4 className="text-4xl font-bold mb-10 tracking-tight leading-tight">3億円〜6億円規模の<br />土地・収益物件</h4>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">
                ボリュームゾーンを明確に設定することで、仲介業者様が迷うことなく情報を持ち込める環境を整えています。年間5〜15棟の取得を目指すアグレッシブな取得体制を維持しています。
              </p>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] -translate-y-20 translate-x-20"></div>
          </div>
          
          <div className="p-14 bg-white border border-slate-200 rounded-[4.5rem] shadow-xl text-left">
            <MapPin size={56} className="text-blue-600 mb-12" />
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-slate-400 block mb-4">Focus Area</span>
            <h4 className="text-5xl font-bold mb-10 tracking-tight text-slate-900 uppercase italic text-left">最重点：城東4区</h4>
            <p className="text-slate-500 leading-relaxed mb-10 text-lg font-medium">
              江東区・墨田区・台東区・江戸川区。情報の流動性が高く、我々の構造的分析が最も威力を発揮するこのエリアに経営資源を集中投下しています。
            </p>
            <div className="flex flex-wrap gap-4">
              {['錦糸町', '上野', '入谷', '亀戸', '浅草'].map(tag => (
                <span key={tag} className="px-6 py-2 bg-slate-100 text-[12px] font-black text-slate-800 rounded-full border border-slate-200 shadow-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <h4 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight flex items-center gap-4">
              <Globe size={32} className="text-blue-600" /> 戦略的ネットワークの構築
            </h4>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              「このエリアの未公開情報なら、まずはシルバースターへ」という認知を地元の業者様から勝ち取ることを目指しています。ターゲットの絞り込みは、紹介者への誠実な回答を可能にし、希少情報を集約する強力なエンジンとなります。
            </p>
          </div>
          <div className="text-right p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] block mb-2">Extended Coverage</span>
            <p className="text-2xl font-black text-slate-900 tracking-tight">23区全域・浦和〜蘇我</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {['江東区', '墨田区', '台東区', '江戸川区'].map(ward => (
            <div key={ward} className="p-12 bg-white border border-slate-100 rounded-[3rem] text-center group hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <p className="text-2xl font-black text-slate-900 group-hover:text-white transition-colors tracking-tighter mb-2 italic">{ward}</p>
              <div className="h-1.5 w-12 bg-blue-600 mx-auto group-hover:w-24 transition-all"></div>
              <p className="text-[11px] text-slate-400 mt-5 uppercase font-black group-hover:text-blue-400">Top Priority</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-24 bg-slate-950 text-white rounded-[6rem] relative overflow-hidden text-center shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent)]"></div>
        <Briefcase className="mx-auto mb-14 text-blue-500" size={80} />
        <h3 className="text-6xl font-black mb-12 tracking-tighter leading-tight">案件情報の持ち込みを<br />強力にサポートします</h3>
        <p className="text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-20 font-light italic">
          未公開物件の紹介における「守秘」と「スピード」を、私たちは組織として担保します。
          明確な基準により即答。業者様にとって、最も手離れが良く、確実に利益を生むパートナーであり続けます。
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
          <button onClick={() => setPage('contact')} className="px-16 py-8 bg-white text-slate-950 rounded-[2.5rem] font-black text-2xl hover:bg-blue-600 hover:text-white transition-all duration-700 flex items-center gap-6 shadow-3xl active:scale-95">
            案件のご相談はこちら <ArrowRight size={36} />
          </button>
          <div className="flex items-center gap-4 text-slate-500 border-l border-slate-800 pl-12 h-16">
            <Lock size={28} />
            <span className="text-sm font-black tracking-[0.5em] uppercase">NDA Protocol Secured</span>
          </div>
        </div>
      </div>
    </div>
  );

  const FinancePage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto text-left">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
          <LineChart size={28} />
        </div>
        <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase">Sky Capital</h2>
      </div>
      <h3 className="text-5xl font-bold text-slate-900 mb-16 tracking-tighter">金融・投資事業</h3>
      
      <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
        <div>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 italic font-medium">
            適格機関投資家等特例業務を通じた、プロフェッショナル向けの資産運用ソリューション。
          </p>
          <div className="space-y-6">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
                <ShieldCheck className="text-blue-600" size={20} /> 管轄財務局
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed font-semibold">関東財務局 (金融庁登録業者リスト準拠)。厳しい内部統制とコンプライアンスを維持しています。</p>
            </div>
            <p className="text-base text-slate-500 leading-relaxed pl-6 border-l-4 border-blue-600/30 font-semibold">
              私たちは、不確実なマーケットにおいて「論理的な優位性」を追求します。
              高度な数学モデルとデータ解析に基づき、リスクを構造的に管理。
            </p>
          </div>
        </div>
        
        <div className="bg-slate-950 p-14 rounded-[4rem] text-white shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          <h4 className="font-bold mb-12 flex items-center gap-4 text-blue-400 text-2xl tracking-tighter"><HelpCircle size={32} /> Q&A</h4>
          <div className="space-y-12">
            {[
              { q: "どのような資産を対象としていますか？", a: "主に国内有価証券、及び不動産市場を対象とした構造的なポートフォリオ構築を支援します。独自の解析アルゴリズムを用いた市場分析が強みです。" },
              { q: "体験版や試用期間はありますか？", a: "現在、Sky Systemの体験版・試用期間は設けておりません。詳細な仕様については個別にお問い合わせください。" },
              { q: "導入後のサポート体制は？", a: "設定マニュアルの完備、および専門スタッフによるテクニカルサポートを提供しております。" }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-10 last:border-0">
                <p className="font-bold text-white mb-4 leading-relaxed text-lg flex items-start">
                  <span className="text-blue-500 mr-4">Q.</span> {faq.q}
                </p>
                <p className="text-slate-400 leading-relaxed text-base pl-10 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SystemPage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto text-left">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
          <Code2 size={28} />
        </div>
        <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase">Sky System</h2>
      </div>
      <h3 className="text-5xl font-bold text-slate-900 mb-16 tracking-tighter text-left">プロダクト開発</h3>
      
      <div className="grid md:grid-cols-12 gap-10 mb-24">
        <div className="md:col-span-8 bg-white border border-slate-100 rounded-[4rem] p-16 relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all">
          <div className="relative z-10">
            <h4 className="text-4xl font-black mb-8 text-slate-900 tracking-tight">Sky System</h4>
            <p className="text-slate-500 text-2xl leading-relaxed mb-12 font-semibold">
              世界トップレベルの開発経験を持つエンジニア陣により、スクラッチから構築された次世代トレードシステム。
              数学的アルゴリズムを、実際のマーケットへ高精度に実装します。
            </p>
            <div className="flex flex-wrap gap-4">
              {["Scratch Dev", "Mathematical Logic", "Python", "High Usability"].map(tag => (
                <span key={tag} className="px-6 py-2 bg-slate-50 text-slate-600 rounded-full text-[11px] font-black border border-slate-200 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-600/5 -skew-x-12 translate-y-12 translate-x-12"></div>
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-10">
          <div className="flex-1 bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-between shadow-xl">
            <h5 className="font-bold text-blue-400 text-sm mb-8 uppercase tracking-widest leading-relaxed">Innovative Tech Architecture</h5>
            <p className="text-sm text-slate-400 leading-relaxed font-bold">既存の枠組みに囚われない、独自のコアエンジンによる高速レスポンスを実現。</p>
          </div>
          <div className="flex-1 bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-200 flex flex-col justify-between">
            <h5 className="font-bold text-sm mb-8 uppercase tracking-widest leading-relaxed">Precision Usability</h5>
            <p className="text-sm text-blue-100 leading-relaxed font-bold">複雑なデータ構造を直感的なインターフェースへと昇華。意思決定を加速させます。</p>
          </div>
        </div>
      </div>
    </div>
  );

  const CompanyPage = () => (
    <div className="pt-48 pb-32 px-8 max-w-5xl mx-auto text-left">
      <h2 className="text-[10px] font-bold text-blue-600 tracking-[0.5em] uppercase mb-8">Corporate Identity</h2>
      <h3 className="text-6xl font-black text-slate-900 mb-20 tracking-tighter text-left">会社情報</h3>
      
      <div className="grid md:grid-cols-1 gap-2 mb-40 text-left">
        {[
          { label: "商号", value: companyData.name },
          { label: "法人番号", value: companyData.number },
          { label: "代表者", value: companyData.ceo },
          { label: "所在地", value: companyData.tokyoOffice },
          { label: "千葉本店所在地", value: companyData.headOffice },
          { label: "資本金", value: companyData.capital },
          { label: "設立年月日", value: companyData.established }
        ].map((row, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center py-10 border-b border-slate-100">
            <span className="md:w-1/3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 md:mb-0">{row.label}</span>
            <span className="md:w-2/3 text-3xl font-black text-slate-900 tracking-tight">{row.value}</span>
          </div>
        ))}
        <div className="flex flex-col md:flex-row md:items-center py-12 border-b border-slate-100">
          <span className="md:w-1/3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8 md:mb-0">連絡先</span>
          <div className="md:w-2/3 flex flex-wrap gap-16">
            <div className="flex items-center gap-4 text-xl font-black text-slate-800"><Phone size={24} className="text-blue-600" /> {companyData.tel}</div>
            <div className="flex items-center gap-4 text-xl font-black text-slate-800"><Mail size={24} className="text-blue-600" /> {companyData.email}</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start text-left">
        <div className="p-16 bg-slate-950 text-white rounded-[4rem] shadow-2xl">
           <h4 className="text-3xl font-black mb-14 flex items-center gap-6 text-white">
             <Building2 className="text-blue-500" size={40} /> 事業目的
           </h4>
           <div className="space-y-6">
             {companyData.purposes.map((p, i) => (
               <div key={i} className="flex items-start gap-6 border-b border-white/5 pb-6 last:border-0">
                 <span className="text-[12px] font-black text-blue-500 mt-1 font-mono opacity-60">{(i + 1).toString().padStart(2, '0')}</span>
                 <p className="text-[14px] text-slate-300 leading-relaxed font-black tracking-tight">{p}</p>
               </div>
             ))}
           </div>
        </div>

        <div className="p-16 bg-white rounded-[4rem] border border-slate-100 shadow-2xl">
           <h4 className="text-3xl font-black mb-14 flex items-center gap-6 text-slate-900">
             <History className="text-blue-600" size={40} /> 沿革
           </h4>
           <div className="space-y-20 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
              {[
                { date: "平成22年12月", event: "Silver Star 株式会社 設立 (港区麻布)" },
                { date: "令和5年1月", event: "経営体制の刷新" },
                { date: "令和5年4月", event: "本店移転 (千葉県船橋市)、不動産事業・Sky Capitalの拡充" }
              ].map((h, i) => (
                <div key={i} className="relative pl-20 text-left">
                  <div className="absolute left-0 top-1.5 w-10 h-10 bg-white border-4 border-blue-600 rounded-full shadow-2xl z-10"></div>
                  <span className="text-xs font-black text-blue-600 mb-4 block uppercase tracking-[0.4em]">{h.date}</span>
                  <p className="text-2xl text-slate-900 font-black tracking-tighter leading-snug">{h.event}</p>
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
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navigation />
      <main className="transition-opacity duration-500">
        {renderPage()}
        {page === 'home' && (
          <section className="py-40 px-8 bg-white max-w-7xl mx-auto text-left">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { id: 'realestate', icon: Building2, title: '不動産事業', desc: '城東4区を重点とした用地開発。実需に基づいた地域価値の創出。' },
                { id: 'finance', icon: LineChart, title: '金融事業', desc: 'Sky Capitalによる適格機関投資家向け資産運用スキーム。' },
                { id: 'system', icon: Code2, title: 'システム開発', desc: 'Sky System: 極限の数学モデルを実装したトレード基盤。' }
              ].map((s) => (
                <div key={s.id} onClick={() => setPage(s.id)} className="group p-14 bg-slate-50 rounded-[4rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl text-left">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mb-12 shadow-md group-hover:scale-110 transition-transform duration-700">
                    <s.icon size={40} className="text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-12 font-black">{s.desc}</p>
                  <div className="flex items-center gap-3 text-blue-600 text-[12px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all">
                    Discover Strategy <ChevronRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-32 px-8 mt-40 text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 text-left">
          <div className="col-span-2">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-14 h-14 relative flex items-center justify-center">
                <img src="/logo.png" alt="Silver Star" className="w-full h-full object-contain" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">SILVER STAR<span className="text-blue-600">.</span></span>
            </div>
            <p className="text-[12px] text-slate-400 leading-relaxed font-bold uppercase tracking-[0.4em] mb-12">
              © {new Date().getFullYear()} Silver Star Co., Ltd. <br />
              Registration No: {companyData.number}
            </p>
            {/* faviconダウンロードボタンを追加 */}
            <button 
              onClick={handleDownloadFavicon}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <Download size={16} /> Download favicon.svg
            </button>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-10 text-[12px] uppercase tracking-widest leading-relaxed">Global Navigation</h4>
            <ul className="space-y-6 text-base text-slate-500 font-black">
              <li className="hover:text-blue-600 cursor-pointer" onClick={() => setPage('realestate')}>Real Estate Strategy</li>
              <li className="hover:text-blue-600 cursor-pointer" onClick={() => setPage('finance')}>Sky Capital</li>
              <li className="hover:text-blue-600 cursor-pointer" onClick={() => setPage('company')}>Corporate Identity</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-10 text-[12px] uppercase tracking-widest leading-relaxed">Central Base</h4>
            <p className="text-base text-slate-500 leading-relaxed font-black mb-8 tracking-tight">
              {companyData.headOffice}
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <Phone size={20} />
              <span className="text-sm font-black">{companyData.tel}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;