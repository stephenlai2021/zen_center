import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Navigation,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import ZenAssistant from "./components/ZenAssistant";

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 relative selection:bg-zen-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-zen-800 flex items-center justify-center text-white font-serif font-bold">
                普
              </div>
              <span className="text-xl font-serif font-bold text-gray-800 tracking-wide">
                普覺精舍
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="cursor-pointer text-gray-600 hover:text-zen-800 font-medium transition"
              >
                首頁
              </button>
              <button
                onClick={() => scrollToSection("main-class")}
                className="cursor-pointer text-gray-600 hover:text-zen-800 font-medium transition"
              >
                禪修班
              </button>
              <button
                onClick={() => scrollToSection("other-classes")}
                className="cursor-pointer text-gray-600 hover:text-zen-800 font-medium transition"
              >
                其他課程
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="cursor-pointer text-gray-600 hover:text-zen-800 font-medium transition"
              >
                交通資訊
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="cursor-pointer block w-full text-left px-3 py-2 text-gray-600 hover:bg-zen-50 rounded-md"
              >
                首頁
              </button>
              <button
                onClick={() => scrollToSection("main-class")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-zen-50 rounded-md"
              >
                禪修班
              </button>
              <button
                onClick={() => scrollToSection("other-classes")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-zen-50 rounded-md"
              >
                其他課程
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-zen-50 rounded-md"
              >
                交通資訊
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-b from-zen-50 via-white to-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-zen-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-block mb-6 relative">
            <h1 className="text-[120px] md:text-[180px] leading-none font-serif font-bold text-zen-800 opacity-90 select-none">
              禪
            </h1>
            <div className="absolute -bottom-20 left-0 right-0 text-center">
              <span className="text-xl md:text-3xl font-serif text-gray-700 tracking-[0.5em] md:tracking-[0.8em] whitespace-nowrap ml-2">
                安定己心
              </span>
              <br className="md:hidden" />
              <span className="text-xl md:text-3xl font-serif text-gray-700 tracking-[0.5em] md:tracking-[0.8em] whitespace-nowrap ml-2 mt-2 md:mt-0 md:ml-8">
                覺悟己心
              </span>
            </div>
          </div>

          {/* <div className="mt-30 md:mt-12 space-y-6"> */}
          <div className="mt-20 space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-bold tracking-wide shadow-sm mb-4">
              <span className="text-lg">學費全免</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wider">
              禪修班招生中
            </h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mt-8 text-lg text-gray-600">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
                <Calendar className="text-zen-600 w-5 h-5" />
                <span>2025.12.16 (週二) 開課</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollToSection("location")}
                className="bg-zen-800 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-zen-900 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                立即報名 <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Class Info */}
      <section id="main-class" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-gray-200 flex-1"></div>
            <h3 className="text-2xl font-bold text-zen-800 flex items-center gap-2">
              <span className="w-2 h-8 bg-zen-600 rounded-full block"></span>
              開課訊息
            </h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Time Card */}
            <div className="bg-zen-50 p-8 rounded-2xl border border-zen-100 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Clock className="w-6 h-6 text-zen-800" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    上課時間
                  </h4>
                  <p className="text-gray-500 text-sm">每週二</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-medium text-gray-600">日間班</span>
                  <span className="text-xl font-bold text-zen-800">
                    09:30 ~ 11:30
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="font-medium text-gray-600">夜間班</span>
                  <span className="text-xl font-bold text-zen-800">
                    19:30 ~ 21:30
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Instructor Card */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" /> 課程內容
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    禪修靜坐指導 (安定身心)
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    20堂主題講座 (覺悟人生)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
                <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <User className="w-5 h-5 text-zen-600" /> 授課法師
                </h4>
                <div className="pl-7">
                  <p className="text-2xl font-serif font-bold text-gray-900 mb-1">
                    上見下桅 法師
                  </p>
                  <p className="text-sm text-gray-500">
                    清華大學材料科學工程博士
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Classes */}
      <section id="other-classes" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            其它禪修班
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group border-t-4 border-green-500">
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition">
                菩提長青班
              </h4>
              <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-4">
                70歲以上
              </span>
              <div className="space-y-2 text-gray-600 text-sm">
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> 12.22 (週一) 開課
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 09:30 ~ 11:30
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group border-t-4 border-blue-500">
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                菩提青少年班
              </h4>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mb-4">
                13-18歲
              </span>
              <div className="space-y-2 text-gray-600 text-sm">
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> 12.20 (週六) 開課
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 14:00 ~ 16:00
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group border-t-4 border-orange-500">
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition">
                菩提親子班
              </h4>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded mb-4">
                4-12歲
              </span>
              <div className="space-y-2 text-gray-600 text-sm">
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> 12.20 (週六) 開課
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 09:30 ~ 11:30
                </p>
              </div>
            </div>

            {/* Card 4 - Full width on mobile, spans 3 on large if wanted, but lets keep grid simple */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group border-t-4 border-pink-500 md:col-span-3 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition">
                    歐式花藝班
                  </h4>
                  <span className="inline-block bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded">
                    持續開課中
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  歡迎洽詢精舍了解詳情
                </p>
              </div>
              <button className="mt-4 md:mt-0 text-pink-600 font-medium hover:text-pink-700 flex items-center gap-1">
                了解更多 <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Footer */}
      <section id="location" className="bg-zen-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">
              中台禪寺南港分院 · 普覺精舍
            </h2>
            <p className="text-zen-200">安定身心的都市淨土</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-zen-300 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">地址</p>
                  <p className="text-gray-200 leading-relaxed">
                    台北市南港區南港路三段270號3樓
                    <br />
                    <span className="text-sm text-gray-400">
                      (南港成美橋旁)
                    </span>
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=台北市南港區南港路三段270號"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-sm text-zen-300 hover:text-white underline decoration-dotted underline-offset-4"
                  >
                    開啟 Google 地圖
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-zen-300 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">聯絡電話</p>
                  <a
                    href="tel:02-2785-1243"
                    className="text-2xl font-mono tracking-wider hover:text-zen-300 transition"
                  >
                    02-2785-1243
                  </a>
                  <p className="text-sm text-gray-400 mt-2">
                    歡迎來電預約禪修體驗
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder / Info Graphic Representation */}
          <div className="bg-white text-gray-800 p-6 rounded-xl text-left text-sm md:text-base">
            <div className="flex items-center gap-2 mb-4 font-bold text-zen-800 border-b pb-2">
              <Navigation className="w-5 h-5" /> 交通指引
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <span className="block font-bold mb-1">捷運松山站</span>
                <span className="text-gray-500">步行或是轉乘公車</span>
              </div>
              <div>
                <span className="block font-bold mb-1">台鐵松山站</span>
                <span className="text-gray-500">東出口方向</span>
              </div>
              <div>
                <span className="block font-bold mb-1">八德路四段</span>
                <span className="text-gray-500">鄰近路口</span>
              </div>
              <div>
                <span className="block font-bold mb-1">市民大道七段</span>
                <span className="text-gray-500">鄰近路口</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-gray-400 text-sm">
            <p>線上報名請掃描 QR Code 或致電洽詢</p>
            <div className="flex justify-center gap-4 mt-4">
              <div className="w-24 h-24 bg-white p-1 rounded-lg">
                <img
                  src="https://picsum.photos/100/100?random=1"
                  alt="QR Code 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 bg-white p-1 rounded-lg">
                <img
                  src="https://picsum.photos/100/100?random=2"
                  alt="QR Code 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Assistant */}
      <ZenAssistant />
    </div>
  );
};

export default App;
