import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Heart,
  Music,
  Utensils,
  Sparkles,
  Users,
  Calendar,
  Clock,
  ChevronDown,
} from "lucide-react";

const App = () => {
  // --- Section Backgrounds based on Photos ---
  const sectionStyles = {
    hero: "min-h-screen relative overflow-hidden flex items-center justify-center py-6 md:py-10 bg-gradient-to-b from-[#b3e5fc] to-[#f8f9fa]",
    events: "bg-[#fdfcf0] relative py-8 md:py-16",
    invitation:
      "bg-[#fff9e6] relative py-8 md:py-16 px-4 flex items-center justify-center",
    elders: "bg-[#fff5f8] relative py-8 md:py-16 px-4",
    poems: "bg-[#f0f9ff] relative py-8 md:py-16 px-4",
  };

  return (
    <div className="text-[#3c0000] selection:bg-yellow-200 antialiased overflow-x-hidden">
      {/* --- ADVANCED RICH TYPOGRAPHY & STYLES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Kumar+One&family=Baloo+Bhai+2:wght@400;500;600;700;800&family=Rasa:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Farsan&display=swap');
        
        :root {
          --royal: 'Cinzel Decorative', serif;
          --guj-heading: 'Kumar One', cursive;
          --guj-body: 'Rasa', serif;
          --guj-modern: 'Baloo Bhai 2', sans-serif;
          --guj-artistic: 'Farsan', cursive;
          --gold: #C5A021;
          --deep-maroon: #5D0000;
        }

        /* Font Utility Classes */
        .font-royal { font-family: var(--royal); }
        .font-heading { font-family: var(--guj-heading); }
        .font-body { font-family: var(--guj-body); }
        .font-modern { font-family: var(--guj-modern); }
        .font-artistic { font-family: var(--guj-artistic); }

        .gold-gradient-text {
          background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gold-border {
          border: 2px solid;
          border-image: linear-gradient(to right, #bf953f, #fcf6ba, #aa771c) 1;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .rich-shadow {
          filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
        }

        /* Fixed line-height for Gujarati matras to prevent cutting */
        h1, h2 {
          line-height: 1.3 !important;
          padding-top: 5px;
          padding-bottom: 5px;
        }

        .guj-spacing {
          line-height: 1.5;
          letter-spacing: 0.01em;
        }

        /* Ensure Ganesha text isn't cut */
        .ganesha-text {
            line-height: 1.3;
            padding: 5px 0;
        }
      `}</style>

      {/* --- PHOTO 1: HERO SECTION (SHUBH VIVAH) --- */}
      <section className={sectionStyles.hero}>
        <div className="absolute top-0 w-full flex justify-center space-x-1 z-20">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-5 md:w-8 h-8 md:h-12 bg-red-800 rounded-b-full border-b-2 md:border-b-4 border-yellow-500 shadow-md transform -translate-y-2"></div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl w-full">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-4 md:mb-10">
            <img
              src="assets/ganesha.png"
              className="w-16 md:w-24 h-50 md:h-24 mx-auto filter drop-shadow-2xl"
              alt="Ganesh"
            />
            <p className="ganesha-text text-2xl md:text-4xl font-artistic font-black tracking-[0.1em] md:mt-6 gold-gradient-text">
              ॥ શ્રી ગણેશાય નમ: ॥
            </p>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-8xl font-heading text-red-900 rich-shadow mt-2 md:mt-8 overflow-visible leading-tight">
            શુભવિવાહ
          </motion.h1>

          <p className="max-w-2xl mx-auto font-body font-bold text-lg md:text-2xl mb-6 md:mb-10 text-gray-700 mt-4 md:mt-8 border-b-2 border-yellow-500/30 pb-2 md:pb-4 inline-block guj-spacing italic px-2">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
            <br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8 px-2 md:px-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 md:p-8 rounded-[25px] md:rounded-[40px] border-2 border-yellow-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-12 md:w-20 h-12 md:h-20 bg-yellow-500/10 rounded-br-full"></div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-green-900 mb-1 md:mb-2 guj-spacing">
                ચિ. શિવાંગી
              </h2>
              <p className="font-modern font-bold uppercase text-[8px] md:text-xs tracking-widest text-gray-400 mb-1 md:mb-3">
                Daughter of Nita & Ashokbhai
              </p>
              <div className="flex justify-center py-1 md:py-2">
                <Heart className="text-red-600 fill-red-600 w-6 md:w-10 h-6 md:h-10 animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-green-900 guj-spacing">
                ચિ. હિતેન
              </h2>
              <p className="text-red-700 font-modern font-black tracking-[0.1em] text-sm md:text-lg mt-2 md:mt-4 uppercase">
                FRI, 01-05-2026
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 md:p-8 rounded-[25px] md:rounded-[40px] border-2 border-yellow-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 md:w-20 h-12 md:h-20 bg-yellow-500/10 rounded-bl-full"></div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-green-900 mb-1 md:mb-2 guj-spacing">
                ચિ. નિખિલ
              </h2>
              <p className="font-modern font-bold uppercase text-[8px] md:text-xs tracking-widest text-gray-400 mb-1 md:mb-3">
                Son of Nita & Ashokbhai
              </p>
              <div className="flex justify-center py-1 md:py-2">
                <Heart className="text-red-600 fill-red-600 w-6 md:w-10 h-6 md:h-10 animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-green-900 guj-spacing">
                ચિ. મનાલી
              </h2>
              <p className="text-red-700 font-modern font-black tracking-[0.1em] text-sm md:text-lg mt-2 md:mt-4 uppercase">
                SUN, 03-05-2026
              </p>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 md:mt-12">
            <ChevronDown className="mx-auto text-yellow-600 w-6 md:w-10 h-6 md:h-10" />
          </motion.div>
        </div>
      </section>

      {/* --- PHOTO 3: MANGAL PARINAY --- */}
      <section className={sectionStyles.invitation}>
        <div className="max-w-4xl w-full">
          <div className="bg-white p-0.5 rounded-[30px] md:rounded-[50px] shadow-2xl gold-border">
            <div className="bg-[#fffdf8] p-4 md:p-12 rounded-[28px] md:rounded-[45px] border border-yellow-200 relative">
              <Sparkles className="absolute top-2 md:top-8 left-2 md:left-8 text-yellow-500 w-4 md:w-6 h-4 md:h-6 opacity-40" />
              <Sparkles className="absolute bottom-2 md:bottom-8 right-2 md:right-8 text-yellow-500 w-4 md:w-6 h-4 md:h-6 opacity-40" />

              <h2 className="text-3xl md:text-6xl font-heading font-black text-red-900 text-center mb-6 md:mb-12 gold-gradient-text">
                મંગલ પરિણય
              </h2>

              <div className="space-y-4 md:space-y-8 text-base md:text-xl leading-relaxed text-center font-body text-gray-800 guj-spacing">
                <p className="px-1 md:px-6 text-lg md:text-2xl font-body">
                  સહર્ષ ખુશાલી સાથે જણાવવાનું કે અમારા કુળદેવી <br />
                  <span className="text-red-700 font-extrabold text-2xl md:text-5xl inline-block my-1 md:my-4 font-modern">
                    શ્રી ખોડિયાર માતાજી
                  </span>
                  <br />
                  ની અસીમ કૃપાથી ગામ પાંચિયાવદર નિવાસી
                </p>

                <div className="py-4 md:py-10 bg-gradient-to-r from-red-50 via-white to-red-50 rounded-[20px] md:rounded-[35px] shadow-inner border border-red-100">
                  <p className="text-lg md:text-3xl font-extrabold text-red-950 px-2 md:px-4 font-modern guj-spacing">
                    અ. સૌ. નિતાબેન તથા શ્રી અશોકભાઈ વલ્લભભાઈ તળાવીયા
                  </p>
                  <p className="text-[10px] md:text-base font-modern uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-500 mt-1 md:mt-2">
                    Invites you to the grand wedding ceremony
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-yellow-500/20 rounded-[20px] md:rounded-[35px] overflow-hidden mt-6 md:mt-12 shadow-lg">
                  <div className="p-4 md:p-8 border-b md:border-b-0 md:border-r border-yellow-500/20 hover:bg-yellow-50/30 transition-colors">
                    <h3 className="text-xl md:text-3xl font-extrabold text-red-900 mb-1 md:mb-2 font-modern guj-spacing">
                      ચિ. શિવાંગી & હિતેન
                    </h3>
                    <p className="text-xs md:text-sm font-body italic text-gray-600 mb-2 md:mb-4 leading-snug">
                      શિવરાજગઢ નિવાસી અ. સૌ. વૈશાલીબેન તથા વિઠ્ત્તલભાઈ કાનજીભાઈ
                      વોરા ના સુપુત્ર
                    </p>
                    <div className="h-0.5 md:h-1 w-12 md:w-16 bg-red-800 mx-auto mb-2 md:mb-4 rounded-full opacity-30"></div>
                    <p className="font-modern font-black text-red-700 text-base md:text-2xl tracking-widest uppercase">
                      ૦૧-૦૫-૨૦૨૬ • FRIDAY
                    </p>
                  </div>
                  <div className="p-4 md:p-8 hover:bg-yellow-50/30 transition-colors">
                    <h3 className="text-xl md:text-3xl font-extrabold text-red-900 mb-1 md:mb-2 font-modern guj-spacing">
                      ચિ. નિખિલ & મનાલી
                    </h3>
                    <p className="text-xs md:text-sm font-body italic text-gray-600 mb-2 md:mb-4 leading-snug">
                      કેશવાળા નિવાસી અ. સૌ. નયનાબેન તથા બીપીનભાઈ ધીરુભાઈ
                      વાડોદરિયા ની સુપુત્રી
                    </p>
                    <div className="h-0.5 md:h-1 w-12 md:w-16 bg-red-800 mx-auto mb-2 md:mb-4 rounded-full opacity-30"></div>
                    <p className="font-modern font-black text-red-700 text-base md:text-2xl tracking-widest uppercase">
                      ૦૩-૦૫-૨૦૨૬ • SUNDAY
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-16 text-center bg-red-950 text-white p-6 md:p-12 rounded-[25px] md:rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent"></div>
                <h3 className="text-2xl md:text-4xl font-royal font-black text-yellow-500 mb-2 md:mb-6 tracking-[0.2em]">
                  !! લગ્ન સ્થળ !!
                </h3>
                <p className="text-lg md:text-2xl font-modern font-bold mb-1 guj-spacing">
                  શ્રી અશોકભાઈ વલ્લભભાઈ તળાવીયા
                </p>
                <p className="text-yellow-400 font-heading font-black text-xl md:text-3xl mb-3 md:mb-4 tracking-wide guj-spacing">
                  રાધેશ્યામ પટેલ વાડી - ગોંડલ
                </p>
                <p className="text-xs md:text-lg opacity-60 font-modern font-light">
                  કોલેજ ચોક, યોગીનગર, ગોંડલ. જી. રાજકોટ
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=Radheshyam+Patel+Wadi+Gondal",
                      "_blank",
                    )
                  }
                  className="mt-6 md:mt-8 bg-yellow-600 text-red-950 px-6 md:px-12 py-2 md:py-4 rounded-full font-modern font-black shadow-2xl transition-all flex items-center gap-2 md:gap-3 mx-auto uppercase tracking-widest border border-yellow-400 text-[10px] md:text-sm">
                  <MapPin size={16} /> View On Maps
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHOTO 2: SUVARNA AVASARO --- */}
      <section className={sectionStyles.events}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <p className="font-royal text-yellow-600 font-bold tracking-[0.2em] md:tracking-[0.4em] mb-1 md:mb-2 uppercase text-[10px] md:text-sm">
              The Events
            </p>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-red-900 rich-shadow">
              સુવર્ણ અવસરો
            </h2>
            <div className="w-32 md:w-64 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent mx-auto mt-1 md:mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: "ગીત ગુંજન",
                date: "૩૦-૦૪-૨૦૨૬",
                day: "ગુરુવાર",
                time: "સાંજે ૭:૦૦",
                loc: "અમારા નિવાસ સ્થાને",
              },
              {
                title: "મંડપ મુહુર્ત",
                date: "૦૧-૦૫-૨૦૨૬",
                day: "શુક્રવાર",
                time: "સવારે ૭:૦૦",
                loc: "રાધેશ્યામ વાડી (શિવાંગી)",
              },
              {
                title: "જાન આગમન",
                date: "૦૧-૦૫-૨૦૨૬",
                day: "શુક્રવાર",
                time: "સાંજે ૫:૦૦",
                loc: "રાધેશ્યામ વાડી ગોંડલ",
              },
              {
                title: "હસ્ત મેળાપ",
                date: "૦૧-૦૫-૨૦૨૬",
                day: "શુક્રવાર",
                time: "સાંજે ૭:૦૦",
                loc: "રાધેશ્યામ વાડી ગોંડલ",
              },
              {
                title: "ભોજન સમારંભ",
                date: "૦૧-૦૫-૨૦૨૬",
                day: "શુક્રવાર",
                time: "સાંજે ૭:૦૦",
                loc: "રાધેશ્યામ વાડી ગોંડલ",
              },
              {
                title: "રાસની રમઝટ",
                date: "૦૨-૦૫-૨૦૨૬",
                day: "શનિવાર",
                time: "સાંજે ૯:૦૦",
                loc: "ખોડિયાર મંદિર પાંચિયાવદર",
              },
              {
                title: "મંડપ મુહુર્ત",
                date: "૦૨-૦૫-૨૦2૬",
                day: "શનિવાર",
                time: "બપોરે ૩:૦૦",
                loc: "અમારા નિવાસ સ્થાને (નિખિલ)",
              },
              {
                title: "જાન પ્રસ્થાન",
                date: "૦૩-૦૫-૨૦૨૬",
                day: "રવિવાર",
                time: "બપોરે ૩:૩૦",
                loc: "પટેલ સમાજ કેશવાળા",
              },
              {
                title: "હસ્ત મેળાપ",
                date: "૦૩-૦૫-૨૦૨૬",
                day: "રવિવાર",
                time: "સાંજે ૭:૩૦",
                loc: "પટેલ સમાજ કેશવાળા",
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative bg-white p-5 md:p-8 shadow-xl rounded-[25px] md:rounded-[40px] border-t-4 md:border-t-6 border-red-900 hover:-translate-y-1 transition-all">
                <div className="bg-yellow-500 text-white p-2 rounded-lg md:rounded-xl w-fit mb-3 md:mb-4 shadow-lg">
                  <Calendar size={18} />
                </div>
                <h3 className="text-xl md:text-3xl font-modern font-extrabold text-red-900 mb-1 md:mb-3 border-b border-gray-100 pb-1 md:pb-3 guj-spacing italic">
                  ॥ {event.title} ॥
                </h3>
                <p className="text-sm md:text-lg font-modern font-bold text-gray-500">
                  {event.date} • {event.day}
                </p>
                <p className="text-xl md:text-3xl font-heading font-black text-red-600">
                  {event.time} કલાકે
                </p>
                <p className="text-[10px] md:text-xs font-body italic text-gray-400 mt-2 md:mt-4 font-bold guj-spacing">
                  Location: {event.loc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHOTO 4: ELDERS --- */}
      <section className={sectionStyles.elders}>
        <div className="max-w-5xl mx-auto bg-white p-4 md:p-16 rounded-[30px] md:rounded-[80px] border-[8px] md:border-[16px] border-pink-50 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-pink-100 rounded-br-full opacity-30 blur-2xl"></div>

          <h2 className="text-2xl md:text-5xl font-heading text-pink-700 mb-6 md:mb-16 rich-shadow tracking-wider uppercase">
            !! વહાલ વરસાવતા વડીલો !!
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 md:gap-x-12 gap-y-2 md:gap-y-6 text-xs md:text-2xl font-modern font-semibold leading-relaxed guj-spacing px-1">
            {[
              "સ્વ. વલ્લભભાઈ તળાવીયા",
              "શ્રી રળીયાતબેન તળાવીયા",
              "શ્રી વિરજીભાઈ તળાવીયા",
              "શ્રી કાંતાબેન તળાવીયા",
              "શ્રી ધીરુભાઈ તળાવીયા",
              "શ્રી દુર્ગાબેન તળાવીયા",
              "શ્રી અશોકભાઈ તળાવીયા",
              "શ્રી નિતાબેન તળાવીયા",
              "શ્રી અનિલભાઈ તળાવીયા",
              "શ્રી દક્ષાબેન અનિલભાઈ તળાવીયા",
              "શ્રી નિતિનભાઈ તળાવીયા",
              "શ્રી શિલ્પાબેન નિતિનભાઈ તળાવીયા",
              "શ્રી ધર્મેશભાઈ તળાવીયા",
              "શ્રી કિરણબેન ધર્મેશભાઈ તળાવીયા",
              "શ્રી કમલેશભાઈ તળાવીયા",
              "શ્રી રિંકલબેન કમલેશભાઈ તળાવીયા",
            ].map((name, i) => (
              <p
                key={i}
                className={`${i % 2 === 0 ? "text-pink-950 font-black" : "text-pink-800"} py-1 border-b border-pink-50`}>
                {name}
              </p>
            ))}
            <div className="col-span-2 mt-4 md:mt-10 py-3 md:py-8 bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-[15px] md:rounded-[35px] font-black text-sm md:text-3xl text-pink-900 shadow-lg border-x-2 md:border-x-4 border-pink-700">
              શ્રી પ્રકાશભાઈ ધીરુભાઈ તળાવીયા
            </div>
          </div>

          <div className="mt-8 md:mt-16 pt-6 md:pt-12 border-t-2 border-pink-100">
            <h3 className="text-xl md:text-5xl font-modern text-pink-700 pt-5 mb-4 md:mb-12 italic gold-gradient-text">
              !! દર્શનાભિલાષી !!
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 font-modern font-black text-xs md:text-3xl text-pink-950 guj-spacing px-2">
              <p>શ્રી ક્રિશ તળાવીયા</p>
              <p>શ્રી મોહિત તળાવીયા</p>
              <p>શ્રી ધ્રુવ તળાવીયા</p>
              <p>શ્રી શ્યામ તળાવીયા</p>
              <p>શ્રી જિયાન તળાવીયા</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHOTO 5: MOSAL & POEMS --- */}
      <section className={sectionStyles.poems}>
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <motion.div className="bg-white p-6 md:p-10 rounded-[25px] md:rounded-[50px] border-b-8 md:border-b-[12px] border-blue-600 shadow-xl relative">
              <div className="bg-blue-600 text-white p-2 md:p-3 rounded-xl md:rounded-2xl absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2">
                <Users size={20} />
              </div>
              <h2 className="text-xl md:text-3xl font-heading font-black text-blue-900 text-center mb-4 md:mb-8 mt-2 md:mt-4 tracking-widest uppercase underline decoration-blue-100">
                !! મોસાળ પક્ષ !!
              </h2>
              <div className="space-y-1 md:space-y-3 text-center text-base md:text-2xl font-modern font-bold text-gray-700 guj-spacing">
                <p>શ્રી ભરતભાઈ વઘાસીયા (સુલતાનપુર)</p>
                <p>શ્રી ધર્મેશભાઈ વઘાસીયા (સુલતાનપુર)</p>
                <div className="pt-2 md:pt-6 text-blue-600 font-modern font-black text-sm md:text-xl tracking-widest opacity-40 italic">
                  લક્ષિત, ઋત્વિક, જશ
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-white p-6 md:p-10 rounded-[25px] md:rounded-[50px] border-b-8 md:border-b-[12px] border-blue-600 shadow-xl flex flex-col justify-center text-center">
              <h2 className="text-xl md:text-3xl font-heading font-black text-blue-900 mb-2 md:mb-6 uppercase tracking-widest">
                !! ભાણેજ પક્ષ !!
              </h2>
              <p className="text-lg md:text-3xl font-black text-blue-950 py-3 md:py-6 bg-blue-50 rounded-[15px] md:rounded-[25px] border border-blue-100 shadow-inner font-modern">
                શ્રી વિરાજ દિનેશભાઈ ગજેરા
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-6 md:p-16 rounded-[35px] md:rounded-[100px] border-[8px] md:border-[18px] border-blue-50 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl md:text-6xl font-heading text-blue-950 mb-4 md:mb-12 italic gold-gradient-text uppercase">
              !! કલરવ !!
            </h2>
            <p className="text-base md:text-3xl italic leading-relaxed text-blue-900 font-body px-2 md:px-10 font-bold opacity-80 guj-spacing">
              "કૃષ્ણા વિના વૃંદાવન સૂનું, ખળખળતા નીર વગર નદી સૂની, કોયલના ટહુકાર
              વગર વનરાઈ સૂની, મોરના ટહુકાર વગર મેઘગર્જના સૂની, આપના આગમન વગર
              અમારો અવસર સૂનો,"
            </p>
            <div className="mt-6 md:mt-12 p-4 md:p-8 bg-blue-950 text-yellow-500 rounded-full inline-block px-6 md:px-16 shadow-2xl">
              <p className="font-modern font-black text-[10px] md:text-2xl tracking-widest uppercase">
                દ્રષ્ટિ • નિયતિ • રૂતાંશી • વિહા • મીરાલી • કાવ્યા • જીયા •
                ધ્યાની • ગ્રીવા
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#4a0000] to-[#2c0000] p-6 md:p-16 rounded-[30px] md:rounded-[80px] text-center shadow-2xl border-x-4 md:border-x-[12px] border-yellow-600">
            <h2 className="text-2xl md:text-6xl font-heading text-yellow-500 mb-4 md:mb-10 tracking-widest uppercase">
              !! વહાલી પુત્રવધુ !!
            </h2>
            <p className="text-base md:text-3xl italic leading-relaxed text-yellow-50 font-body mb-6 md:12 font-medium px-2 guj-spacing">
              "બાબુલના ઘરથી વિદાય લઈ સાસરીયુ શોભાવવા આવજે.. માતા પિતાના સંસ્કાર
              લઈ સૌને રીઝવવા આવજે.... વહુ તો સહુ બને પણ તું અમારી દીકરી બનીને
              આવજે... હૈયું ભરાશે તારું પણ ગૌરવ અમારું વધી જશે.."
            </p>
            <div className="pt-4 md:pt-10 border-t border-white/10 text-yellow-400 font-modern text-lg md:text-3xl space-y-2 md:4 guj-spacing">
              <p className="font-black tracking-widest text-xl md:text-4xl underline decoration-yellow-600 underline-offset-4">
                અ. સૌ. નિતાબેન અશોકભાઈ તળાવીયા.
              </p>
              <p className="font-black text-sm md:text-2xl opacity-60">
                શ્રી અશોકભાઈ વલ્લભભાઈ તળાવીયા.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:16 pb-12 md:pb-24 px-1">
            <div className="bg-white p-6 md:p-10 rounded-[25px] md:rounded-[50px] shadow-xl border border-yellow-500/10 text-center hover:bg-red-50/10 transition-all">
              <p className="font-black text-xl md:text-3xl text-red-950 mb-3 md:mb-6 tracking-widest uppercase border-b-2 border-red-100 pb-2 font-modern">
                !! મહેકતું આંગણું !!
              </p>
              <p className="text-base md:text-2xl font-black mb-1 font-modern">
                શ્રી અશોકભાઈ તળાવીયા
              </p>
              <p className="text-xs md:text-xl text-gray-500 italic font-body">
                મુ. પાંચિયાવદર તા. ગોંડલ જી. રાજકોટ
              </p>
              <p className="font-modern font-black text-xl md:text-3xl text-red-700 mt-4 md:6">
                ૯૯૭૮૨ ૯૦૪૭૧
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Panchiyavadar+Gondal",
                    "_blank",
                  )
                }
                className="mt-4 md:mt-8 bg-red-950 text-yellow-500 px-6 md:px-10 py-2 md:py-4 rounded-full font-modern font-black text-[10px] md:text-sm uppercase tracking-widest flex items-center gap-2 md:gap-3 mx-auto shadow-lg">
                <MapPin size={14} md:size={20} /> GPS Route
              </button>
            </div>
            <div className="bg-white p-6 md:p-10 rounded-[25px] md:rounded-[50px] shadow-xl border border-yellow-500/10 text-center hover:bg-red-50/10 transition-all">
              <p className="font-black text-xl md:text-3xl text-red-950 mb-3 md:mb-6 tracking-widest uppercase border-b-2 border-red-100 pb-2 font-modern">
                !! શુભ લગ્ન સ્થળ !!
              </p>
              <p className="text-base md:text-2xl font-black mb-1 font-modern">
                શ્રી બીપીનભાઈ વાડોદરિયા
              </p>
              <p className="text-xs md:text-xl text-gray-500 italic font-body">
                મુ. કેશવાળા તા. ગોંડલ જી. રાજકોટ
              </p>
              <p className="font-modern font-black text-xl md:text-3xl text-red-700 mt-4 md:6">
                ૬૩૫૨૪ ૨૧૩૭૬
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Keshvala+Gondal",
                    "_blank",
                  )
                }
                className="mt-4 md:mt-8 bg-red-950 text-yellow-500 px-6 md:px-10 py-2 md:py-4 rounded-full font-modern font-black text-[10px] md:text-sm uppercase tracking-widest flex items-center gap-2 md:gap-3 mx-auto shadow-lg">
                <MapPin size={14} md:size={20} /> GPS Route
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a0000] text-white py-12 md:py-24 text-center relative overflow-hidden px-4">
        <div className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>
        <Heart className="mx-auto text-yellow-500 fill-yellow-500 mb-6 md:mb-10 animate-bounce w-10 md:w-20 h-10 md:h-20 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]" />
        <h3 className="text-3xl sm:text-6xl md:text-7xl font-heading font-black pt-4 mb-4 md:mb-6 gold-gradient-text">
          તળાવીયા પરિવાર
        </h3>
        <p className="text-base md:text-3xl font-modern font-medium italic text-yellow-200 opacity-60 mb-8 md:12 tracking-wide">
          Awaiting your presence.
        </p>

        <div className="mt-4 md:10 flex justify-center">
          <a
            href="tel:+919978290471"
            className="bg-yellow-600 p-4 md:p-8 rounded-full hover:rotate-[360deg] transition-all duration-1000 shadow-2xl border-2 md:border-4 border-yellow-200">
            <Phone size={24} md:size={48} className="text-red-950" />
          </a>
        </div>
        <div className="mt-12 md:20 text-[8px] md:text-sm font-modern opacity-20 uppercase font-bold">
          Made with ❤️ by Dezin Valley
        </div>
      </footer>
    </div>
  );
};

export default App;
