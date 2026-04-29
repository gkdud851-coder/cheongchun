/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MapPin, Clock, Heart, Users, Activity, ChevronRight, Menu, X, Sparkles, Smile, Flower2 } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "대표인사말", href: "#greeting" },
    { name: "청춘이야기", href: "#story" },
    { name: "프로그램", href: "#services" },
    { name: "하루일과", href: "#routine" },
    { name: "자주묻는질문", href: "#faq" },
    { name: "오시는길", href: "#location" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4 text-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif text-lg border border-brand-accent">
            청
          </div>
          <span className={`text-lg font-bold font-serif whitespace-nowrap ${isScrolled ? "text-brand-primary" : "text-white"}`}>
            여수 청춘드림
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:010-6424-7160" 
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all ${isScrolled ? "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white" : "border-white text-white hover:bg-white hover:text-brand-primary"}`}
          >
            <Phone size={14} />
            010-6424-7160
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? "text-gray-700" : "text-white"} /> : <Menu className={isScrolled ? "text-gray-700" : "text-white"} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden overflow-hidden border-t border-gray-100"
        >
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-800 py-3 border-b border-gray-50 flex justify-between items-center"
              >
                {link.name}
                <ChevronRight size={16} className="text-gray-300" />
              </a>
            ))}
            <a 
              href="tel:010-6424-7160" 
              className="flex items-center justify-center gap-2 bg-brand-primary text-white py-4 rounded-xl mt-2 font-bold shadow-lg"
            >
              <Phone size={18} />
              상담 전화 바로걸기
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 text-[0]">
        <img 
          src="/벚꽃사진.jpg" 
          alt="벚꽃놀이 하는 어르신들" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-brand-accent uppercase tracking-[0.3em] text-xs font-bold mb-6 block bg-black/20 backdrop-blur-sm inline-block px-4 py-1 rounded-full">
            여수 주간보호센터
          </span>
          <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-snug">
            어르신의 제2의 청춘을 <br />
            <span className="text-brand-accent italic font-normal">선물해 드립니다</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide">
            가족의 마음으로, 내 부모님을 모시는 정성 그대로
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:010-6424-7160" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl border border-brand-accent/20">
              <Phone size={18} fill="currentColor" />
              010-6424-7160
            </a>
            <a href="#greeting" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-brand-primary transition-all">
              대표 인삿말
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    {subtitle && <span className={`${light ? "text-brand-accent" : "text-brand-primary"} font-bold text-xs uppercase tracking-[0.2em] mb-3 block`}>{subtitle}</span>}
    <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${light ? "text-white" : "text-gray-900"}`}>{children}</h2>
    <div className={`w-12 h-0.5 ${light ? "bg-brand-accent" : "bg-brand-primary"} mx-auto rounded-full mt-4`} />
  </div>
);

const RepresentativeGreeting = () => {
  return (
    <section id="greeting" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-brand-secondary text-[0]">
              <img 
                src="/대표님 사진.jpg" 
                alt="김희영 대표님" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-accent rounded-full -z-0 opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary rounded-full -z-0 opacity-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-brand-secondary text-brand-primary text-sm rounded-full font-bold mb-4">
              WELCOME MESSAGE
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 leading-snug">
              안녕하세요, <br className="md:hidden" />
              청춘드림 <span className="text-brand-primary">김희영 대표</span>입니다.
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg font-light">
              <p>
                안녕하세요. 어르신들께 제2의 청춘을 선물해드리고 싶은 <strong>여수 청춘드림 김희영 대표</strong>입니다.
              </p>
              <p>
                저희 청춘드림의 존재 이유는 어르신의 낮 시간을 안전하게 돌봐드리고 케어해드리며, 하루를 알차게 보내실 수 있도록 돕는 것입니다. 
              </p>
              <p>
                결국 어르신과 함께함으로 가족분들께도 보탬이 되고 도움이 되기를 바라는 진심 어린 마음으로 시작했습니다.
              </p>
              <p className="pt-4 font-serif text-2xl text-brand-primary">
                "가장 아름다운 지금, 진심을 다하겠습니다."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-brand-secondary relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading subtitle="HEARTFELT STORY">가족의 마음을 끌어안다</SectionHeading>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-brand-accent/30 relative"
        >
          <Flower2 className="absolute top-8 right-8 text-brand-accent opacity-20" size={60} />
          
          <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed space-y-8">
            <p className="text-xl md:text-2xl text-center font-serif text-gray-900 mb-12 italic border-b border-brand-accent pb-8">
              "우리 엄마도 꽃 좋아하시는데..."
            </p>
            
            <p>
              어느 날 상담 오신 한 보호자분의 이야기입니다. 퇴근길 흐드러지게 핀 벚꽃을 보며 봄이 온 걸 아셨다던 그분은, 손잡고 걷는 노모와 딸의 모습을 보며 하염없이 눈물을 흘리셨다고 합니다. 
            </p>
            
            <p className="font-medium text-gray-900 text-lg">
              "나의 바쁜 일상 때문에, 부모님과 함께 지내면서도 정작 함께하는 게 아닐지도 모른다는 죄송함..."
            </p>
            
            <div className="p-6 bg-brand-secondary/50 rounded-2xl border-l-4 border-brand-primary">
              <p className="m-0 italic">
                먹고 살려면 일해야 하고, 아이들도 돌봐야 하는 그 바쁜 일상 속에 놓인 가족보호자분의 마음은 누가 안아줄 수 있을까요?
              </p>
            </div>

            <p>
              여수 청춘드림을 찾아오신 발걸음조차 정말 잘하신 거예요. 우리는 가족분들의 자리를 온전히 채울 수는 없지만, <strong>나의 아버지, 나의 어머니를 모신다는 마음</strong>으로 가장 아름다운 지금을 소중히 대우해드리고 있습니다.
            </p>
          </div>
          
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border-4 border-white text-[0]">
            <img src="/벚꽃사진1.jpg" alt="벚꽃놀이 사진" className="w-full h-80 object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: any;
  title: string;
  desc: string;
  img: string | string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, desc, img }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
  >
    <div className="h-48 overflow-hidden text-[0]">
      {Array.isArray(img) ? (
        <div className="grid grid-cols-2 h-full gap-px">
          {img.map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              alt={`${title} ${idx + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          ))}
        </div>
      ) : (
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      )}
    </div>
    <div className="p-8 flex-grow">
      <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center mb-6 text-brand-primary font-bold shadow-inner">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "사이좋은 친구들",
      desc: "또래 어르신들과 마음을 나누며 정답게 어울리는 청춘드림의 일상이자 소중한 추억입니다.",
      img: "/사이좋은 친구들.jpg",
      icon: Users
    },
    {
      title: "정성스런 생신잔치",
      desc: "어르신의 소중한 날, 온 센터 어르신들과 직원들이 함께 축하하며 특별한 추억을 만듭니다.",
      img: "/생신잔치사진.jpg",
      icon: Sparkles
    },
    {
      title: "재활 및 물리치료",
      desc: "건강한 신체를 위한 맞춤형 재활 운동과 물리치료 서비스를 통해 생활의 활력을 드립니다.",
      img: ["/물리치료사진.jpg", "/물리치료.jpg"],
      icon: Activity
    },
    {
       title: "프리미엄 슬링 운동",
       desc: "전문 슬링 장비를 이용한 근력 강화 및 체형 교정 프로그램으로 신체 기능을 회복합니다.",
       img: "/슬링사진.jpg",
       icon: Activity
    },
    {
      title: "이미용 서비스",
      desc: "어르신들의 깔끔하고 단정한 용모 유지를 위해 주기적으로 이미용 상담 및 서비스를 제공합니다.",
      img: "/이미용사진.jpg",
      icon: Smile
    },
    {
      title: "따뜻한 초청공연",
      desc: "어르신들의 흥을 돋우고 즐거움을 선사하는 다채로운 외부 공연 프로그램을 진행합니다.",
      img: "/안아드리는사진.jpg",
      icon: Sparkles
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading subtitle="PROGRAMS">청춘드림의 하루</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard 
              key={i} 
              title={s.title} 
              desc={s.desc} 
              img={s.img} 
              icon={s.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const DailyRoutine = () => {
  const routines = [
    { time: "08:30 - 09:30", activity: "안심 등원 및 건강체크", desc: "차량으로 어르신을 모셔온 후 혈압, 체온 등 건강 상태를 꼼꼼히 확인합니다.", icon: <MapPin size={18} /> },
    { time: "09:30 - 10:30", activity: "오전 간식 및 실버 체조", desc: "영양가 있는 간식을 드신 후, 활기찬 노래와 함께 가벼운 운동으로 몸을 풉니다.", icon: <Activity size={18} /> },
    { time: "10:30 - 12:00", activity: "인지/신체 프로그램", desc: "치매 예방을 위한 미술, 음악 프로그램 및 근력 강화를 위한 재활 운동을 진행합니다.", icon: <Heart size={18} /> },
    { time: "12:00 - 13:30", activity: "맛있는 점심 식사 및 휴식", desc: "영양 식단으로 즐거운 식사 후, 편안한 휴식 시간을 가집니다.", icon: <Smile size={18} /> },
    { time: "13:30 - 16:00", activity: "오후 전문 프로그램 및 간식", desc: "매일 다른 전문 강사 초빙 활동(공연, 웃음 치료 등)과 함께 맛있는 오후 간식을 드십니다.", icon: <Sparkles size={18} /> },
    { time: "16:00 - 18:00", activity: "저녁 및 안심 하원", desc: "균형 잡힌 저녁 식사 후 하루 일과를 정리하고, 댁까지 안전하게 모셔다 드립니다.", icon: <Users size={18} /> },
  ];

  return (
    <section id="routine" className="py-24 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading subtitle="DAILY ROUTINE">청춘드림의 하루 일과</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routines.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-2xl flex items-center gap-6 shadow-sm border border-brand-accent/20"
            >
              <div className="text-brand-primary font-bold text-sm whitespace-nowrap w-24">
                {item.time}
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-brand-primary shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{item.activity}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "누가 이용할 수 있나요?", a: "65세 이상 어르신 또는 만 65세 미만 노인성 질환(치매, 뇌졸중 등)을 앓고 계시며 장기요양등급(1~5등급, 인지지원등급)을 받으신 어르신이면 누구나 가능합니다." },
    { q: "이용 요금은 어떻게 되나요?", a: "장기요양등급이 있으시면 국가에서 이용료의 85%~100%를 지원해 드립니다. 본인 부담금에 대한 상세 내용은 상담을 통해 친절히 안내 드립니다." },
    { q: "차량 운행을 하나요?", a: "네, 여수 전 지역 안심 셔틀 차량을 운행하고 있습니다. 댁 앞까지 안전하게 모시러 가고 모셔다 드립니다." },
    { q: "등급이 없는데 신청부터 도와주시나요?", a: "물론입니다. 보호자님께서 어렵게 느끼시는 등급 신청 절차부터 서류 준비까지 모든 과정을 무료로 대행 및 상세히 상담해 드리고 있습니다." },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading subtitle="FAQ">자주 묻는 질문</SectionHeading>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i}
              className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-brand-secondary/30 group-open:bg-brand-primary group-open:text-white transition-colors">
                <span className="font-bold">Q. {faq.q}</span>
                <ChevronRight className="transition-transform group-open:rotate-90" size={18} />
              </summary>
              <div className="p-6 text-gray-600 bg-white leading-relaxed text-sm">
                A. {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvitationBanner = () => {
  return (
    <section className="py-20 bg-brand-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border-4 border-brand-accent relative z-10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-8 py-2 rounded-full font-bold text-sm">
            한 번 들러보세요
          </div>
          <h2 className="text-2xl md:text-5xl font-serif text-gray-900 mb-8 leading-snug">
            "꼭 등록하지 않으셔도 괜찮습니다. <br className="hidden md:block" />
             <span className="text-brand-primary">차 한 잔 하러 언제든 편하게</span> <br className="hidden md:block" />
             상담하고 견학하고 가세요."
          </h2>
          <p className="text-gray-500 text-lg mb-12 font-light">
            어르신이 지내실 환경을 직접 눈으로 확인하시는 것이 가장 확실하니까요. <br className="hidden md:block" />
            저희 김희영 대표와 직원들이 정성껏 안내해 드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:010-6424-7160" className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3">
              <Phone size={24} />
              상담 예약하기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="h-[500px] bg-white/10 rounded-[2.5rem] overflow-hidden relative border border-white/20 shadow-2xl"
          >
             <div className="absolute inset-0 bg-gray-200/5 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mb-6 shadow-lg">
                   <MapPin size={40} className="text-brand-primary" />
                </div>
                <h3 className="text-3xl font-serif mb-4">여수 청춘드림 찾아오시는 길</h3>
                <p className="text-brand-accent/80 text-lg mb-8 max-w-sm">여수, 어르신들의 꿈이 자라나는 이곳</p>
                
                <div className="bg-white/20 p-6 rounded-2xl border border-white/30 text-sm max-w-xs">
                   <p className="mb-2 font-bold">전남 여수시 좌수영로 395 3층</p>
                   <p className="font-light opacity-80 italic">"여수 주간보호센터 추천!"</p>
                </div>
             </div>
          </motion.div>

          <div>
            <SectionHeading subtitle="VISIT US" light>상담 및 방문 안내</SectionHeading>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30 backdrop-blur-md">
                  <MapPin className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-brand-accent">센터 위치</h4>
                  <p className="text-lg font-light text-white/90">전남 여수시 좌수영로 395 3층</p>
                  <p className="text-sm opacity-60 mt-1">여수 청춘드림 주간보호센터</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30 backdrop-blur-md">
                  <Phone className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-brand-accent">전화 문의</h4>
                  <p className="text-lg font-bold text-white tracking-widest">010-6424-7160</p>
                  <p className="text-sm opacity-70 mt-1">김희영 대표 직통 상담</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30 backdrop-blur-md">
                  <Clock className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-brand-accent">운영 안내</h4>
                  <p className="text-lg font-light text-white/90">낮 시간 어르신 돌봄</p>
                  <p className="text-sm opacity-60 mt-1">상담은 24시간 언제든 환영합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-serif text-lg">청</div>
             <span className="text-2xl font-bold font-serif text-brand-primary tracking-tight">여수 청춘드림 주간보호센터</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
            <a href="#greeting" className="hover:text-brand-primary transition-colors">대표인사말</a>
            <a href="#story" className="hover:text-brand-primary transition-colors">시설이야기</a>
            <a href="#services" className="hover:text-brand-primary transition-colors">프로그램</a>
            <a href="#location" className="hover:text-brand-primary transition-colors">오시는길</a>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 text-sm text-gray-400 font-light text-center md:text-left">
             <p>상호: 여수 청춘드림 주간보호센터 | 대표: 김희영</p>
             <p>주소: 전남 여수시 좌수영로 395 3층</p>
             <p>상담문의: 010-6424-7160</p>
             <p className="text-xs pt-4">&copy; 2026 여수 청춘드림. 어르신들의 제2의 청춘을 응원합니다.</p>
          </div>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <Heart size={18} fill="currentColor" />
             </div>
             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <Users size={18} fill="currentColor" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-brand-secondary min-h-screen selection:bg-brand-accent selection:text-brand-primary pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <RepresentativeGreeting />
      <StorySection />
      <Services />
      <DailyRoutine />
      <FAQ />
      <InvitationBanner />
      <Location />
      <Footer />
      
      {/* Mobile Floating Buttons */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 w-full p-4 z-[100] md:hidden bg-white/80 backdrop-blur-md border-t border-gray-100 flex gap-3"
      >
        <a 
          href="https://map.naver.com/p/entry/place/1523147059" 
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-white text-brand-primary py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 font-bold text-base border border-brand-primary"
        >
          <MapPin size={20} />
          네이버 지도
        </a>
        <a 
          href="tel:010-6424-7160" 
          className="flex-[1.5] bg-brand-primary text-white py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 font-bold text-base"
        >
          <Phone size={20} fill="currentColor" />
          상담 전화 연결
        </a>
      </motion.div>

      {/* PC Floating Button */}
      <motion.a
        href="tel:010-6424-7160"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 w-20 h-20 bg-brand-primary text-white rounded-full shadow-2xl hidden md:flex items-center justify-center z-[100] border-4 border-white group"
      >
        <Phone size={32} fill="currentColor" />
        <span className="absolute -top-12 right-0 bg-white text-brand-primary text-xs px-3 py-1 rounded-full shadow-md font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          상담 010-6424-7160
        </span>
      </motion.a>
    </div>
  );
}
