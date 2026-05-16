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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
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

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface/90 backdrop-blur-md fixed top-0 w-full z-[100] border-b border-secondary/20 shadow-lg">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-md max-w-7xl mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-secondary tracking-widest">
            <img
              alt="Turk Sarayi Logo"
              className="h-12 md:h-16 w-auto object-contain drop-shadow-md"
              src="/logo.png"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                className="text-on-surface hover:text-secondary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest" 
                href={link.href}
              >
                {link.name}
              </a>
            ))}
            <div className="relative">
              <button 
                onClick={() => setShowOrderDropdown(!showOrderDropdown)}
                className="bg-secondary text-surface font-label-md text-label-md px-md py-sm rounded-DEFAULT hover:bg-secondary/90 transition-all duration-300 active:scale-95 ease-in-out font-bold uppercase tracking-widest shadow-lg flex items-center gap-2"
              >
                Order Online
                <span className={`material-symbols-outlined transition-transform duration-300 ${showOrderDropdown ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              
              {showOrderDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-surface-container border border-secondary/20 rounded-xl shadow-2xl overflow-hidden z-[110] animate-in fade-in slide-in-from-top-2">
                  <a 
                    href="https://www.zomato.com/hyderabad/turk-sarayi-tolichowki" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/10 text-on-surface transition-colors border-b border-secondary/10 group/item"
                  >
                    <img src="https://www.zomato.com/favicon.ico" className="w-5 h-5 rounded-sm group-hover:scale-110 transition-transform" alt="Zomato" />
                    <span className="font-label-md">Zomato</span>
                  </a>
                  <a 
                    href="https://www.swiggy.com/city/hyderabad/turk-sarayi-tolichowki-rest934983" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/10 text-on-surface transition-colors group/item"
                  >
                    <img src="https://media-assets.swiggy.com/portal/m/logo_192x192.png" className="w-5 h-5 rounded-sm group-hover:scale-110 transition-transform" alt="Swiggy" />
                    <span className="font-label-md">Swiggy</span>
                  </a>
                </div>
              )}
            </div>
          </div>

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

        <div className={`absolute top-full left-0 w-full bg-surface-container border-b border-secondary/20 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[600px] py-lg shadow-2xl' : 'max-h-0 py-0'}`}>
          <div className="flex flex-col items-center gap-lg px-margin-mobile">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-on-surface hover:text-secondary font-label-md text-label-md uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-full flex flex-col gap-sm border-t border-secondary/10 pt-md">
              <span className="text-secondary font-bold text-center text-xs uppercase tracking-widest mb-2">Order Online Via</span>
              <a 
                href="https://www.zomato.com/hyderabad/turk-sarayi-tolichowki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#E23744] text-white py-3 rounded-xl flex items-center justify-center gap-3 font-bold shadow-lg active:scale-95 transition-all"
              >
                <img src="https://www.zomato.com/favicon.ico" className="w-6 h-6 rounded-sm" alt="Zomato" />
                Zomato
              </a>
              <a 
                href="https://www.swiggy.com/city/hyderabad/turk-sarayi-tolichowki-rest934983" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#FC8019] text-white py-3 rounded-xl flex items-center justify-center gap-3 font-bold shadow-lg active:scale-95 transition-all"
              >
                <img src="https://media-assets.swiggy.com/portal/m/logo_192x192.png" className="w-6 h-6 rounded-sm" alt="Swiggy" />
                Swiggy
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-[80px] md:pt-[100px]">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[870px] flex items-center justify-center px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden scroll-mt-[120px]">
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-md">
            <h1 className="font-display-lg text-display-lg text-on-surface drop-shadow-2xl">
              Welcome to Turk Sarayi — <br/><span className="text-secondary">The Turkish Palace of Hyderabad.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-sm">
              Authentic Turkish Grills, Mandi &amp; Desserts · Tolichowki, Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm mt-lg">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-secondary text-surface font-label-md text-label-md px-xl py-sm rounded-DEFAULT tracking-widest hover:brightness-110 transition-all shadow-lg font-bold"
              >
                Contact Us
              </button>
              <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="border border-secondary text-secondary font-label-md text-label-md px-xl py-sm rounded-DEFAULT tracking-widest hover:bg-secondary/10 transition-colors">
                View Menu
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto scroll-mt-[120px]" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="flex flex-col gap-lg">
              <div className="flex flex-col gap-sm">
                <h2 className="font-headline-lg text-headline-lg text-secondary">A Majestic Modernity Experience</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Bringing the ancestral flavors of Istanbul to the heart of Tolichowki. Turk Sarayi is not just a meal; it's a journey through the rich culinary heritage of the Ottoman Empire, presented in a sleek, digitally native environment. Our deep, atmospheric lounge creates a sense of intimacy, where every bite of our live grills tells a story of tradition.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-md mt-4">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
                  <span className="font-label-md text-label-md text-on-surface">Authentic Recipes</span>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                  <span className="font-label-md text-label-md text-on-surface">Live Grills</span>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <span className="font-label-md text-label-md text-on-surface">Open Till 1 AM</span>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>delivery_dining</span>
                  <span className="font-label-md text-label-md text-on-surface">Dine-In &amp; Delivery</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-secondary/20 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
              <div className="absolute inset-0 turkish-pattern opacity-20 z-10 pointer-events-none"></div>
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                alt="About Us"
                src="/restaurant.png"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-surface-container-lowest overflow-hidden scroll-mt-[120px]">
          <div className="max-w-7xl mx-auto mb-16 px-6 text-center">
             <h2 className="font-display-lg text-display-lg text-secondary mb-sm uppercase tracking-widest">A Visual Feast</h2>
             <p className="max-w-2xl mx-auto text-on-surface-variant font-body-lg">
               Step inside the majestic world of Turk Sarayi. From our open-fire grills to our luxury lounge.
             </p>
          </div>

          <div className="relative w-full">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-surface-container-lowest to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-surface-container-lowest to-transparent" />

            <Marquee className="[--gap:2rem]" pauseOnHover>
              {GALLERY_IMAGES.map((img, i) => (
                <div
                  className="group relative flex w-80 shrink-0 flex-col overflow-hidden rounded-3xl border border-secondary/10 bg-surface shadow-lg transition-all duration-500 hover:border-secondary/40"
                  key={i}
                >
                  <div className="relative h-96 w-full overflow-hidden">
                    <Image
                      alt={img.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      fill
                      src={img.url}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 w-full p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="bg-secondary/20 text-secondary text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-secondary/30 backdrop-blur-sm">
                        {img.tag}
                      </span>
                      <h3 className="mt-2 font-display-sm text-white text-xl uppercase tracking-wider">
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
        <div className="w-full h-sm turkish-pattern border-y border-secondary/10"></div>

        {/* Menu Section */}
        <section className="py-24 bg-surface-container-lowest scroll-mt-[120px]" id="menu">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-xl">
              <h2 className="font-display-lg text-display-lg text-secondary mb-sm uppercase tracking-widest">Our Palace Menu</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Explore our curated selection of authentic Turkish delicacies, from sizzling grills to indulgent desserts.
              </p>
            </div>

            <div className="flex overflow-x-auto pb-md gap-md no-scrollbar scroll-smooth mb-xl border-b border-secondary/10">
              {MENU_DATA.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`whitespace-nowrap px-md py-sm font-label-md text-label-md transition-all duration-300 border-b-2 ${
                    activeCategory === cat.category
                      ? "border-secondary text-secondary"
                      : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {MENU_DATA.find((c) => c.category === activeCategory)?.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-lg rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-sm">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-secondary transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        {item.bestseller && (
                          <span className="bg-secondary/10 text-secondary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-secondary/20">
                            Bestseller
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="font-title-md text-title-md text-secondary font-bold whitespace-nowrap ml-2">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-24 bg-surface scroll-mt-[120px]">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="font-display-lg text-display-lg text-secondary uppercase tracking-tighter leading-tight">Contact Us</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Have a question or want to host a private royal feast? Send us a message and our team will get back to you.
                  </p>
                </div>
                
                <div className="flex flex-col gap-6 mt-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-surface">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary font-bold uppercase text-xs tracking-widest">Visit Us</span>
                      <span className="text-on-surface font-body-md">IAS Colony, Tolichowki, Hyderabad.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-surface">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary font-bold uppercase text-xs tracking-widest">Call Us</span>
                      <span className="text-on-surface font-body-md">+91 77802 27803</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-surface">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-secondary font-bold uppercase text-xs tracking-widest">Email Us</span>
                      <span className="text-on-surface font-body-md">contact@turksarayi.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container rounded-[2rem] p-8 md:p-12 shadow-2xl border border-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 turkish-pattern opacity-5 -mr-16 -mt-16"></div>
                <form ref={formRef} className="flex flex-col gap-6 relative z-10">
                  <div className="flex flex-col gap-2">
                    <label className="text-secondary font-label-md uppercase tracking-widest ml-1 text-xs font-bold">Full Name</label>
                    <input 
                      name="user_name"
                      type="text" 
                      placeholder="Enter your name"
                      className="bg-surface border border-secondary/20 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:border-secondary transition-all placeholder:text-on-surface-variant/40 shadow-inner"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-secondary font-label-md uppercase tracking-widest ml-1 text-xs font-bold">Email Address</label>
                    <input 
                      name="user_email"
                      type="email" 
                      placeholder="Enter your email"
                      className="bg-surface border border-secondary/20 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:border-secondary transition-all placeholder:text-on-surface-variant/40 shadow-inner"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-secondary font-label-md uppercase tracking-widest ml-1 text-xs font-bold">Your Message</label>
                    <textarea 
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      className="bg-surface border border-secondary/20 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:border-secondary transition-all placeholder:text-on-surface-variant/40 shadow-inner resize-none"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-secondary text-surface font-bold py-4 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all mt-4 shadow-xl active:scale-[0.98] text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-surface-container-lowest border-t border-secondary/10 w-full pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl mb-16">
            {/* About Column */}
            <div className="flex flex-col gap-md text-center md:text-left">
              <span className="font-headline-md text-headline-md text-secondary uppercase tracking-widest">Turk Sarayi</span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Bringing the ancestral flavors of Istanbul to the heart of Tolichowki. A majestic journey through rich culinary heritage.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-md mt-sm">
                <a 
                  href="https://www.instagram.com/turk_sarayi_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61559089940444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-md text-center md:text-left">
              <span className="font-title-lg text-title-lg text-secondary uppercase tracking-widest">Quick Contact</span>
              <div className="flex flex-col gap-sm">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Beside Oasis School, IAS Colony, Tolichowki, Hyderabad.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">+91 77802 27803</p>
                <p className="font-body-md text-body-md text-on-surface-variant">12:00 PM - 1:00 AM (Daily)</p>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-md text-center md:text-right">
              <span className="font-title-lg text-title-lg text-secondary uppercase tracking-widest">Navigation</span>
              <div className="flex flex-col gap-sm">
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest" href="#hero">Home</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest" href="#about">About</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest" href="#gallery">Gallery</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest" href="#menu">Menu</a>
                <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest" href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary/10 pt-8 text-center">
            <span className="font-body-sm text-body-sm text-on-surface-variant opacity-70">
              © 2024 Turk Sarayi. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917780227803?text=Hey!%20i%20want%20to%20book%20an%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[101] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center w-16 h-16"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </>
  );
}
