import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  Code2,
  History,
  LineChart,
  MapPin,
  Menu,
  ShieldCheck,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

// ロゴ画像のURL（添付の画像をpublic/logo.pngとして保存することを想定）
const LOGO_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="; // ダミーURL、実際は画像を配置

const App = () => {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ページ移動時にトップへスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const companyInfo = {
    name: "Silver Star 株式会社",
    nameEn: "Silver Star Co., Ltd.",
    number: "0104-01-091298",
    established: "平成22年12月9日",
    capital: "2,000,000円",
    ceo: "川口 真史",
    address: "千葉県船橋市浜町二丁目3番37-610号",
    history: [
      { date: "2010.12", event: "Silver Star 株式会社 設立（東京都港区）" },
      { date: "2023.01", event: "役員体制の更新及び経営基盤の再構築" },
      { date: "2023.04", event: "千葉県船橋市へ本店を移転。不動産・開発事業の強化" },
      { date: "2024.01", event: "次世代システム開発部門の本格始動" }
    ]
  };

  // 共通ナビゲーション
  const Navigation = () => (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || page !== 'home' ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setPage('home')}>
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden border border-slate-700">
            {/* ここに添付のロゴを表示 */}
            <span className="text-white font-bold italic text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-tighter ${scrolled || page !== 'home' ? 'text-slate-900' : 'text-white'}`}>SILVER STAR</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">Trust & Assets</span>
          </div>
        </div>
        
        <div className={`hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase ${scrolled || page !== 'home' ? 'text-slate-600' : 'text-slate-300'}`}>
          {[
            { id: 'realestate', label: 'Real Estate' },
            { id: 'finance', label: 'Finance' },
            { id: 'system', label: 'System' },
            { id: 'company', label: 'Company' },
          ].map((item) => (
            <button key={item.id} onClick={() => setPage(item.id)} className="hover:text-blue-600 transition-colors relative group">
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${page === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button onClick={() => setPage('contact')} className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all">
            Contact
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={scrolled || page !== 'home' ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled || page !== 'home' ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>
    </nav>
  );

  // ヒーローセクション
  const Hero = () => (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden bg-slate-950">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1e40af 0%, transparent 50%)',
      }}></div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
          <ShieldCheck size={16} className="text-blue-500" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">Since 2010 | Registered Entity</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12">
          PIONEERING<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">NEW ASSETS.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
          Silver Star株式会社は、10年以上にわたる金融・IT・不動産の専門性を統合し、
          「実体のある事業」を通じて次世代の資産価値を創造します。
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button onClick={() => setPage('realestate')} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-700 transition-all group">
            事業実態を確認する <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button onClick={() => setPage('company')} className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
            会社概要
          </button>
        </div>
      </div>
    </section>
  );

  // 各ページコンポーネント
  const HomePage = () => (
    <>
      <Hero />
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Bento Cell 1: Real Estate */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 p-12 flex flex-col justify-between cursor-pointer" onClick={() => setPage('realestate')}>
            <div>
              <Building2 className="text-blue-600 mb-8" size={48} />
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter">Real Estate<br />Development</h3>
              <p className="text-slate-500 max-w-md text-lg">
                千葉県船橋市を拠点とした用地取得と開発。行政との連携を通じ、遊休地の再定義と地域価値の向上を実現します。
              </p>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mt-8">
              Explore Projects <ChevronRight size={14} />
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-12"></div>
          </div>

          {/* Bento Cell 2: Finance */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-10 flex flex-col justify-between cursor-pointer" onClick={() => setPage('finance')}>
            <LineChart className="text-blue-400 mb-6" size={32} />
            <div>
              <h3 className="text-2xl font-black mb-4">Finance &<br />Asset Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed">過去のライセンス保有実績に基づく、コンプライアンスを重視した資産形成スキーム。</p>
            </div>
          </div>

          {/* Bento Cell 3: System */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 p-10 flex flex-col justify-between cursor-pointer hover:border-blue-500/50 transition-all" onClick={() => setPage('system')}>
            <Code2 className="text-slate-400 group-hover:text-blue-600 transition-colors" size={32} />
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">System Design</h3>
              <p className="text-slate-500 text-sm leading-relaxed">金融・不動産のフローを最適化する独自システムの開発。論理と実装の融合。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <History className="mx-auto text-blue-600 mb-8" size={40} />
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
            「実体のある事業」を、<br />
            10年続く企業の責任として。
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg">
            平成22年の設立以来、私たちは常に変化する市場と向き合ってきました。
            現在の注力領域である千葉県での不動産事業は、地域社会との信頼関係こそが最大の資産であると考えています。
          </p>
        </div>
      </section>
    </>
  );

  const ServiceDetail = ({ title, icon: Icon, desc, points, bgClass }) => (
    <div className={`pt-40 pb-32 px-6 ${bgClass}`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-200 text-white">
            <Icon size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">{title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">{desc}</p>
          <div className="space-y-6">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <ChevronRight size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{p.label}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
             {/* ここにAI生成した画像を配置 */}
             <div className="absolute inset-0 flex items-center justify-center p-12">
               <Icon size={120} className="text-slate-300 opacity-50" />
             </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hidden md:block">
            <h5 className="font-black text-xs text-blue-600 uppercase tracking-widest mb-4">Strategic Focus</h5>
            <p className="text-xs text-slate-500 leading-relaxed">
              私たちは単なる仲介ではなく、自社でリスクを取り、価値を創造する開発パートナーとして実体のある貢献を追求します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const CompanyPage = () => (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[11px] font-bold text-blue-600 tracking-[0.6em] uppercase mb-6">Corporate Profile</h2>
        <h3 className="text-5xl font-black text-slate-900 mb-16 tracking-tighter">実体証明</h3>
        
        <div className="space-y-4 mb-20">
          {[
            { label: "商号", value: companyInfo.name, sub: companyInfo.nameEn },
            { label: "法人番号", value: companyInfo.number },
            { label: "本店所在地", value: companyInfo.address, icon: <MapPin size={16} /> },
            { label: "設立年月日", value: companyInfo.established },
            { label: "資本金の額", value: companyInfo.capital },
            { label: "代表取締役", value: companyInfo.ceo },
            { label: "公告をする方法", value: "官報に掲載する方法により行う" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center py-6 border-b border-slate-100">
              <span className="md:w-1/3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-0">{item.label}</span>
              <div className="md:w-2/3">
                <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  {item.icon && <span className="text-blue-600">{item.icon}</span>}
                  {item.value}
                </p>
                {item.sub && <p className="text-xs text-slate-500 mt-1">{item.sub}</p>}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter">沿革</h3>
        <div className="space-y-10 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
          {companyInfo.history.map((h, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-1 w-6 h-6 bg-white border-4 border-blue-600 rounded-full"></div>
              <span className="text-sm font-black text-blue-600 mb-2 block">{h.date}</span>
              <p className="text-slate-900 font-bold">{h.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      <Navigation />
      
      <main>
        {page === 'home' && <HomePage />}
        {page === 'realestate' && (
          <ServiceDetail 
            title="不動産事業" 
            icon={Building2}
            bgClass="bg-slate-50"
            desc="千葉県内の遊休地や再開発が必要な土地を中心に、用地取得から企画・開発までを一貫して行います。"
            points={[
              { label: "地域密着の用地取得", text: "船橋市を拠点としたネットワークにより、未公開物件を含む良質な情報を収集。" },
              { label: "行政連携の適正開発", text: "法令を遵守し、行政との協議を重ねることで実態のある開発計画を遂行します。" },
              { label: "仲介業者様との信頼", text: "迅速な意思決定と確実な決済により、プロの仲介業者様からの信頼を構築。" }
            ]}
          />
        )}
        {page === 'finance' && (
          <ServiceDetail 
            title="金融・資産運用" 
            icon={LineChart}
            bgClass="bg-white"
            desc="金融ライセンス保有実績に基づいた、高度なマーケット分析と長期的な資産形成スキームの構築。"
            points={[
              { label: "プロフェッショナルな知見", text: "過去の金融免許運用実績が裏付ける、クリーンで論理的な分析能力。" },
              { subtitle: "リスク管理の徹底", text: "資産を「構造」として捉え、ダウンサイドリスクを最小化する設計を提供。" }
            ]}
          />
        )}
        {page === 'system' && (
          <ServiceDetail 
            title="システム開発" 
            icon={Code2}
            bgClass="bg-slate-900"
            desc="金融アルゴリズムと不動産管理を融合。業務実態に基づいた「本当に動く」システムの実装。"
            points={[
              { label: "金融×ITの融合", text: "Pythonを用いた高度な解析から、使い勝手の良いUIまでを統合。" },
              { label: "業務自動化の実装", text: "社内プロセスの自動化により、少人数でも大規模案件を回せる構造を構築。" }
            ]}
          />
        )}
        {page === 'company' && <CompanyPage />}
        {page === 'contact' && (
          <div className="pt-40 pb-32 px-6 max-w-2xl mx-auto text-center">
             <h2 className="text-5xl font-black mb-12">CONTACT</h2>
             <p className="text-slate-500 mb-12 leading-relaxed">
               事業に関するご相談、土地売却の情報、または採用に関するお問い合わせは<br />
               以下のボタンよりメールにてご連絡ください。
             </p>
             <a href="mailto:contact@silverstar.co.jp" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all">
               メールを送る <ArrowUpRight size={20} />
             </a>
          </div>
        )}
      </main>

      <footer className="bg-slate-950 text-slate-400 py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-2xl font-black tracking-tighter text-white mb-6 block">SILVER STAR<span className="text-blue-600">.</span></span>
            <p className="text-sm leading-relaxed max-w-sm">
              設立2010年。金融・IT・不動産の融合により、確かな実態を持った価値を提供し続ける専門家集団です。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('realestate')}>Real Estate</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('finance')}>Finance</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('system')}>System</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Office</h4>
            <p className="text-sm leading-relaxed">
              〒273-0012<br />
              千葉県船橋市浜町二丁目3番37-610号
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Silver Star Co., Ltd.</span>
          <div className="flex gap-10 mt-6 md:mt-0">
            <span>Privacy Policy</span>
            <span>Compliance</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;