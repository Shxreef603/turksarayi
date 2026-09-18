"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const MENU_DATA = [
  {
    category: "Turk Sarayi Special",
    items: [
      { name: "Adana Kebab [Mutton]", price: "₹450" },
      { name: "Adana Kebab [Chicken]", price: "₹400", bestseller: true },
      { name: "Arabian White [Chicken]", price: "₹400" },
      { name: "Turkish Wings [Kanat]", price: "₹380" },
      { name: "Shish Taouk", price: "₹350" },
      { name: "Beyti Kebab [Mutton]", price: "₹350" },
      { name: "Beyti Kebab [Chicken]", price: "₹250" },
      { name: "Falafel [6 Pcs]", price: "₹180" },
      { name: "French Fries", price: "₹100" },
      { name: "Hummus", price: "₹200" },
      { name: "Grill Sammak [Fish]", price: "₹300" },
    ],
  },
  {
    category: "Mandi",
    items: [
      { name: "Grill Chicken Mandi", price: "₹450" },
      { name: "Chicken Juicy Mandi", price: "₹450" },
      { name: "Chicken Fry Mandi", price: "₹420" },
      { name: "Fish Mandi", price: "₹400" },
      { name: "One Person Mandi", price: "₹300", bestseller: true },
    ],
  },
  {
    category: "Lebanese Grill",
    items: [
      { name: "Chicken Platter", price: "₹799" },
      { name: "Lebanese Grilled Chicken", price: "₹250" },
    ],
  },
  {
    category: "Wraps",
    items: [
      { name: "Adana Chicken Wrap", price: "₹219", bestseller: true },
      { name: "Shish Taouk Wrap", price: "₹219", bestseller: true },
      { name: "Adana Mutton Wrap", price: "₹250" },
      { name: "Arabian Wrap", price: "₹130" },
      { name: "Falafel Wrap", price: "₹120" },
    ],
  },
  {
    category: "Manakeesh",
    items: [
      { name: "Chicken Cheeze Pied", price: "₹250" },
      { name: "Lahmacun", price: "₹200" },
      { name: "Cheeze Pied", price: "₹180" },
    ],
  },
  {
    category: "Mandi Combo",
    items: [
      { name: "Grill Mandi Combo (2 Persons)", price: "₹499" },
      { name: "Lebanese Grill Chicken Combo", price: "₹399" },
    ],
  },
  {
    category: "Breads",
    items: [
      { name: "Lavash Bread", price: "₹25" },
      { name: "Rumali Roti", price: "₹20" },
    ],
  },
  {
    category: "Kunafa",
    items: [
      { name: "Nutella Cheese Kunafa", price: "₹375" },
      { name: "Cheese Kunafa", price: "₹375" },
      { name: "Cream Cheese Kunafa", price: "₹313" },
      { name: "Nutella Kunafa", price: "₹313" },
      { name: "Cream Kunafa", price: "₹250", bestseller: true },
    ],
  },
  {
    category: "Chocolate Kunafa",
    items: [
      { name: "Triple Chocolate Kunafa", price: "₹338" },
      { name: "White Chocolate Kunafa", price: "₹313" },
      { name: "Milk Chocolate Kunafa", price: "₹313" },
      { name: "Dark Chocolate Kunafa", price: "₹313" },
    ],
  },
  {
    category: "Special Kunafa",
    items: [
      { name: "Strawberry Kunafa", price: "₹732" },
      { name: "Cashew Kunafa", price: "₹375" },
      { name: "Pista Kunafa", price: "₹375" },
      { name: "Dry Fruit Kunafa", price: "₹375" },
      { name: "Blueberry Kunafa", price: "₹375" },
      { name: "Lotus Biscoff Kunafa", price: "₹375" },
    ],
  },
  {
    category: "Umm Ali",
    items: [
      { name: "Umm Ali With Nutella", price: "₹391" },
      { name: "Umm Ali With Lotus", price: "₹275" },
      { name: "Umm Ali With Nuts", price: "₹250" },
      { name: "Umm Ali With Ice Cream", price: "₹250" },
      { name: "Umm Ali Regular", price: "₹188" },
    ],
  },
  {
    category: "Cheese Cakes",
    items: [
      { name: "San Sebastian Cheese Cake With Lotus Biscoff", price: "₹313" },
      { name: "San Sebastian Cheese Cake With Nutella", price: "₹275" },
      { name: "San Sebastian Cheese Cake With White Chocolate", price: "₹275" },
      { name: "San Sebastian Cheese Cake", price: "₹225" },
    ],
  },
  {
    category: "Koshari",
    items: [
      { name: "Nutella Lotus Pista Koshari", price: "₹313" },
      { name: "Pista Koshari", price: "₹313" },
      { name: "Lotus Biscoff Koshari", price: "₹275" },
      { name: "Nutella Koshari", price: "₹250" },
      { name: "Triple Chocolate Koshari", price: "₹250" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Saudi Champagne", price: "₹80" },
      { name: "Ardeb Juice", price: "₹40" },
      { name: "Water", price: "₹15" },
    ],
  },
  {
    category: "Extras",
    items: [
      { name: "Extra Lotus Biscoff", price: "₹60" },
      { name: "Extra Pista", price: "₹60" },
      { name: "Extra Nuts", price: "₹50" },
      { name: "Extra Nutella", price: "₹50" },
      { name: "Extra Chocolate", price: "₹50" },
      { name: "Extra Syrup", price: "₹20" },
    ],
  },
];

const GALLERY_IMAGES = [
  {
    url: "/gallery1.png",
    title: "Palace Signature",
    tag: "Authentic"
  },
  {
    url: "/gallery2.png",
    title: "Chef's Special",
    tag: "Handcrafted"
  },
  {
    url: "/gallery3.png",
    title: "Turkish Kabsa",
    tag: "Traditional"
  },
  {
    url: "/gallery4.png",
    title: "Sizzling Grill",
    tag: "Live"
  },
  {
    url: "/gallery5.jpeg",
    title: "Ambience",
    tag: "Modern"
  },
  {
    url: "/gallery8.png",
    title: "Gourmet Platter",
    tag: "Exquisite"
  },
  {
    url: "/gallery9.png",
    title: "Shawarma Platter",
    tag: "Authentic"
  },
  {
    url: "/gallery3.png",
    title: "Traditional Mandi",
    tag: "Signature"
  },
  {
    url: "/gallery6.png",
    title: "Turkish Kunafa",
    tag: "Indulgent"
  },
  {
    url: "/gallery7.png",
    title: "Palace Ambience",
    tag: "Modern"
  }
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].category);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOrderDropdown, setShowOrderDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer1 = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 1500);

    const timer2 = setTimeout(() => {
      setShowLoader(false);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        });
      },
      { threshold: 0.2 }
    );

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (formRef.current) {
      formRef.current.reset();
    }
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Loading Screen */}
      {showLoader && (
        <div className={`fixed inset-0 z-[9999] bg-surface flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 animate-[pulse_2s_ease-in-out_infinite]">
            <Image
              src="/logo.png"
              alt="Turk Sarayi Loading"
              fill
              sizes="(max-width: 640px) 128px, 192px"
              className="object-contain drop-shadow-[0_0_25px_rgba(201,168,76,0.4)]"
              priority
            />
          </div>
          <div className="mt-8 w-32 sm:w-48 h-1.5 bg-secondary/20 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-secondary shadow-[0_0_15px_rgba(201,168,76,0.8)] w-full origin-left" style={{ animation: 'loadBar 1.5s ease-in-out forwards' }}></div>
            <style>{`
              @keyframes loadBar {
                0% { transform: scaleX(0); }
                100% { transform: scaleX(1); }
              }
            `}</style>
          </div>
        </div>
      )}

      {/* TopNavBar */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isLoading ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled || isMenuOpen
            ? "bg-surface/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-gradient-to-b from-surface/95 via-surface/60 to-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-16 py-3 md:py-4 max-w-7xl mx-auto">
          <a href="#hero" className="flex items-center">
            <div className="relative h-10 w-28 sm:h-12 sm:w-36 md:h-14 md:w-44">
              <Image
                alt="Turk Sarayi Logo"
                className="object-contain drop-shadow-md"
                src="/logo.png"
                fill
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                priority
              />
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-on-surface hover:text-secondary transition-colors duration-300 text-xs uppercase tracking-widest font-semibold"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setShowOrderDropdown(!showOrderDropdown)}
                className="bg-secondary text-surface text-xs px-5 py-2.5 rounded-sm hover:bg-secondary/90 transition-all duration-300 active:scale-95 font-bold uppercase tracking-widest shadow-lg flex items-center gap-2"
              >
                Order Online
                <span className={`material-symbols-outlined text-base transition-transform duration-300 ${showOrderDropdown ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              {showOrderDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-surface-container border border-secondary/20 rounded-xl shadow-2xl overflow-hidden z-[110]">
                  <a
                    href="https://www.zomato.com/hyderabad/turk-sarayi-tolichowki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/10 text-on-surface transition-colors border-b border-secondary/10 group/item"
                  >
                    <Image src="https://www.zomato.com/favicon.ico" width={20} height={20} className="rounded-sm group-hover:scale-110 transition-transform" alt="Zomato" />
                    <span className="text-sm font-semibold">Zomato</span>
                  </a>
                  <a
                    href="https://www.swiggy.com/city/hyderabad/turk-sarayi-tolichowki-rest934983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/10 text-on-surface transition-colors group/item"
                  >
                    <Image src="https://media-assets.swiggy.com/portal/m/logo_192x192.png" width={20} height={20} className="rounded-sm group-hover:scale-110 transition-transform" alt="Swiggy" />
                    <span className="text-sm font-semibold">Swiggy</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-secondary p-2 transition-transform duration-300 active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`absolute top-full left-0 w-full bg-surface-container/98 backdrop-blur-xl border-b border-secondary/20 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[85vh] py-6 shadow-2xl opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          {/* Use block layout, NOT flex-col items-center — that collapses text to min-width */}
          <div className="flex flex-col gap-1 px-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="w-full block text-on-surface hover:text-secondary text-sm uppercase tracking-widest font-semibold transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="w-full flex flex-col gap-3 border-t border-secondary/10 pt-4 mt-3">
              <span className="text-secondary font-bold text-center text-xs uppercase tracking-widest">Order Online Via</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.zomato.com/hyderabad/turk-sarayi-tolichowki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E23744] text-white py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-all text-xs"
                >
                  <Image src="https://www.zomato.com/favicon.ico" width={16} height={16} className="rounded-sm" alt="Zomato" />
                  Zomato
                </a>
                <a
                  href="https://www.swiggy.com/city/hyderabad/turk-sarayi-tolichowki-rest934983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FC8019] text-white py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-all text-xs"
                >
                  <Image src="https://media-assets.swiggy.com/portal/m/logo_192x192.png" width={16} height={16} className="rounded-sm" alt="Swiggy" />
                  Swiggy
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* ── Hero ── */}
        <section
          id="hero"
          className="relative min-h-screen md:min-h-[870px] flex items-center justify-center bg-surface-container-lowest overflow-hidden scroll-mt-0"
        >
          {/* Background video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60"
              suppressHydrationWarning
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/20 to-surface/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/30 to-transparent pointer-events-none" />
          </div>

          {/* Hero content — single container controls all padding */}
          <div className="relative z-10 w-full pt-24 pb-16 px-5 sm:px-8 md:px-16">
            <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] uppercase tracking-widest font-semibold">
                <span>Authentic Turkish Palace</span>
              </div>
              <h1 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface drop-shadow-2xl">
                Welcome to Turk Sarayi —{" "}
                <br className="hidden sm:inline" />
                <span className="text-secondary">The Turkish Palace of Hyderabad.</span>
              </h1>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Authentic Turkish Grills, Mandi &amp; Desserts · Tolichowki, Hyderabad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-secondary text-surface text-sm font-bold px-10 py-4 rounded-sm tracking-widest hover:brightness-110 transition-all shadow-lg uppercase"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-secondary text-secondary text-sm font-semibold px-10 py-4 rounded-sm tracking-widest hover:bg-secondary/10 transition-colors uppercase"
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          className="py-16 sm:py-20 md:py-24 scroll-mt-[72px]"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text side */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">Our Heritage</span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
                  A Majestic Modernity Experience
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mt-1">
                  Bringing the ancestral flavors of Istanbul to the heart of Tolichowki. Turk Sarayi is not just a meal; it&apos;s a journey through the rich culinary heritage of the Ottoman Empire, presented in a sleek, digitally native environment. Our deep, atmospheric lounge creates a sense of intimacy, where every bite of our live grills tells a story of tradition.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "restaurant_menu", label: "Authentic Recipes" },
                  { icon: "local_fire_department", label: "Live Grills" },
                  { icon: "schedule", label: "Open Till 1 AM" },
                  { icon: "delivery_dining", label: "Dine-In & Delivery" },
                ].map((feat) => (
                  <div key={feat.icon} className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-container/50 border border-secondary/10">
                    <span
                      className="material-symbols-outlined text-secondary text-xl shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {feat.icon}
                    </span>
                    <span className="text-xs sm:text-sm text-on-surface font-semibold leading-tight">{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="relative h-60 sm:h-80 md:h-[480px] rounded-2xl overflow-hidden border border-secondary/20 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
              <div className="absolute inset-0 turkish-pattern opacity-20 z-10 pointer-events-none" />
              <Image
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="Turk Sarayi Restaurant Ambience"
                src="/restaurant.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section
          id="gallery"
          className="py-16 sm:py-20 md:py-24 bg-surface-container-lowest overflow-hidden scroll-mt-[72px]"
        >
          <div className="max-w-7xl mx-auto mb-10 md:mb-14 px-4 sm:px-6 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 uppercase tracking-widest">
              A Visual Feast
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-on-surface-variant">
              Step inside the majestic world of Turk Sarayi. From our open-fire grills to our luxury lounge.
            </p>
          </div>

          <div className="relative w-full">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-8 sm:w-16 md:w-32 bg-gradient-to-r from-surface-container-lowest to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-8 sm:w-16 md:w-32 bg-gradient-to-l from-surface-container-lowest to-transparent" />

            <Marquee className="[--gap:1rem] sm:[--gap:1.5rem] md:[--gap:2rem]" pauseOnHover repeat={3}>
              {GALLERY_IMAGES.map((img, i) => (
                <div
                  className="group relative flex w-56 sm:w-72 md:w-80 shrink-0 flex-col overflow-hidden rounded-2xl border border-secondary/10 bg-surface shadow-lg transition-all duration-500 hover:border-secondary/40"
                  key={i}
                >
                  <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                    <Image
                      alt={img.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      fill
                      sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                      src={img.url}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 w-full p-4 sm:p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="bg-secondary/20 text-secondary text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-secondary/30 backdrop-blur-sm">
                        {img.tag}
                      </span>
                      <h3 className="mt-2 font-serif text-white text-lg uppercase tracking-wider">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Pattern Divider */}
        <div className="w-full h-3 turkish-pattern border-y border-secondary/10" />

        {/* ── Menu ── */}
        <section
          id="menu"
          className="py-16 sm:py-20 md:py-24 bg-surface-container-lowest scroll-mt-[72px]"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 uppercase tracking-widest">
                Our Palace Menu
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto">
                Explore our curated selection of authentic Turkish delicacies, from sizzling grills to indulgent desserts.
              </p>
            </div>

            {/* Category tabs — scrollable */}
            <div className="flex overflow-x-auto pb-3 gap-1 sm:gap-2 no-scrollbar scroll-smooth mb-8 border-b border-secondary/10">
              {MENU_DATA.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`whitespace-nowrap px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 border-b-2 shrink-0 ${
                    activeCategory === cat.category
                      ? "border-secondary text-secondary font-bold"
                      : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Menu items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {MENU_DATA.find((c) => c.category === activeCategory)?.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-4 sm:p-5 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="text-sm sm:text-base text-on-surface group-hover:text-secondary transition-colors font-semibold leading-snug">
                        {item.name}
                      </h3>
                      {item.bestseller && (
                        <span className="bg-secondary/10 text-secondary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-secondary/20 w-fit">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <span className="text-sm sm:text-base text-secondary font-bold whitespace-nowrap shrink-0">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          className="py-16 sm:py-20 md:py-24 bg-surface scroll-mt-[72px]"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              {/* Info column */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest">Get In Touch</span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-secondary uppercase tracking-tight leading-tight">
                    Contact Us
                  </h2>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mt-1">
                    Have a question or want to host a private royal feast? Send us a message and our team will get back to you.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-surface">
                      <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <span className="text-secondary font-bold uppercase text-[10px] tracking-widest mb-0.5">Visit Us</span>
                      <span className="text-on-surface text-sm sm:text-base leading-snug">Beside Oasis School, IAS Colony, Tolichowki, Hyderabad.</span>
                    </div>
                  </div>
                  {/* Phone */}
                  <a href="tel:+917780227803" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-surface">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary font-bold uppercase text-[10px] tracking-widest mb-0.5">Call Us</span>
                      <span className="text-on-surface text-sm sm:text-base group-hover:text-secondary transition-colors">+91 77802 27803</span>
                    </div>
                  </a>
                  {/* Email */}
                  <a href="mailto:contact@turksarayi.com" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-surface">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary font-bold uppercase text-[10px] tracking-widest mb-0.5">Email Us</span>
                      <span className="text-on-surface text-sm sm:text-base group-hover:text-secondary transition-colors">contact@turksarayi.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="bg-surface-container rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border border-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 turkish-pattern opacity-5 -mr-10 -mt-10 pointer-events-none" />
                <form ref={formRef} onSubmit={handleContactSubmit} className="flex flex-col gap-4 sm:gap-5 relative z-10">
                  {formSubmitted && (
                    <div className="bg-secondary/10 border border-secondary/40 text-secondary p-3 sm:p-4 rounded-xl text-center font-bold text-xs sm:text-sm">
                      Thank you! Your message has been received. Our team will contact you shortly.
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-secondary font-bold uppercase tracking-widest ml-1 text-xs">Full Name</label>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Enter your name"
                      className="bg-surface border border-secondary/20 rounded-xl px-4 py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-secondary transition-all placeholder:text-on-surface-variant/40"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-secondary font-bold uppercase tracking-widest ml-1 text-xs">Email Address</label>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-surface border border-secondary/20 rounded-xl px-4 py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-secondary transition-all placeholder:text-on-surface-variant/40"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-secondary font-bold uppercase tracking-widest ml-1 text-xs">Your Message</label>
                    <textarea
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      className="bg-surface border border-secondary/20 rounded-xl px-4 py-3 text-sm sm:text-base text-on-surface focus:outline-none focus:border-secondary transition-all placeholder:text-on-surface-variant/40 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary text-surface font-bold py-3.5 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all mt-1 shadow-xl active:scale-[0.98] text-xs sm:text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer id="footer" className="bg-surface-container-lowest border-t border-secondary/10 w-full pt-14 sm:pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 gap-8 mb-10 sm:mb-14 sm:grid-cols-3">
            {/* Brand column — text-center on mobile, text-left on sm+ */}
            <div className="text-center sm:text-left">
              <span className="font-serif text-xl font-bold text-secondary uppercase tracking-widest block mb-3">Turk Sarayi</span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                Bringing the ancestral flavors of Istanbul to the heart of Tolichowki. A majestic journey through rich culinary heritage.
              </p>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <a
                  href="https://www.instagram.com/turk_sarayi_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-secondary/10 text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559089940444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-secondary/10 text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
                </a>
              </div>
            </div>

            {/* Contact column */}
            <div className="text-center sm:text-left">
              <span className="font-serif text-base font-bold text-secondary uppercase tracking-widest block mb-3">Quick Contact</span>
              <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-on-surface-variant">
                <p>Beside Oasis School, IAS Colony, Tolichowki, Hyderabad.</p>
                <a href="tel:+917780227803" className="hover:text-secondary transition-colors">+91 77802 27803</a>
                <p>12:00 PM - 1:00 AM (Daily)</p>
              </div>
            </div>

            {/* Navigation column */}
            <div className="text-center sm:text-right">
              <span className="font-serif text-base font-bold text-secondary uppercase tracking-widest block mb-3">Navigation</span>
              <div className="flex flex-wrap justify-center sm:justify-end gap-x-5 gap-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    className="text-xs text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-secondary/10 pt-6 text-center">
            <span className="text-xs text-on-surface-variant opacity-70">
              © {new Date().getFullYear()} Turk Sarayi. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917780227803?text=Hey!%20i%20want%20to%20book%20an%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-[101] bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] active:scale-95 transition-all duration-300 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </>
  );
}
