/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Download, 
  MapPin, 
  Heart, 
  Target, 
  Zap, 
  Eye, 
  MessageSquare, 
  Smile,
  BookOpen,
  Coffee,
  Compass,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent">
      <div className="text-ink font-serif font-bold text-xl leading-tight">
        The Overwhelmed<br />Explorer
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-ink/80">
        <a href="#avatar" className="hover:text-terracotta transition-colors">Avatar</a>
        <a href="#values" className="hover:text-terracotta transition-colors">Values</a>
        <a href="#insights" className="hover:text-terracotta transition-colors">Insights</a>
      </div>
      <button className="bg-terracotta text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-terracotta/90 transition-all shadow-lg">
        Download PDF <Download size={16} />
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop')`,
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-paper z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl text-white mb-6 leading-tight">
          The Overwhelmed <br />
          <span className="italic">Explorer</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light mb-12 tracking-wide">
          A Problem Aware Customer Avatar for Travel Itinerary Solutions
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Meet Jessica Miller: A successful professional caught between ambition and the yearning for meaningful travel experiences.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <button className="bg-terracotta text-white px-10 py-4 rounded-lg text-lg font-medium flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
            Explore the Avatar <ChevronDown size={20} />
          </button>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const ProfileSection = () => {
  return (
    <section id="avatar" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
            alt="Jessica Miller" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-xl max-w-xs hidden md:block">
          <p className="italic text-ink/70 text-lg leading-relaxed">
            "I'm so tired of feeling like I'm failing at planning our vacations. There has to be a better way."
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Who is Jessica?</h2>
        <div className="space-y-6 text-lg text-ink/80 leading-relaxed">
          <p>
            Jessica Miller is a 38-year-old Senior Marketing Manager at a mid-sized tech company. 
            With an MBA and a household income of $150,000, she represents the upper-middle class professional 
            who has achieved career success but struggles to balance ambition with personal fulfillment.
          </p>
          <p>
            Married with an 8-year-old child, Jessica is acutely aware of a critical problem: she cannot 
            effectively plan meaningful travel experiences for her family. The overwhelm of information, 
            the time constraints, and the fear of making wrong choices paralyze her planning efforts.
          </p>
        </div>
        
        <div className="mt-12 p-8 bg-terracotta/5 border-l-4 border-terracotta rounded-r-xl">
          <h3 className="text-2xl font-bold mb-4 text-ink">Stage of Awareness: Problem Aware</h3>
          <p className="text-lg text-ink/70">
            Jessica recognizes that her current approach to travel planning is stressful, time-consuming, 
            and yields unsatisfying results. She feels the pain acutely.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const DemographicsGrid = () => {
  const stats = [
    { label: "Name", value: "Jessica 'Jess' Miller" },
    { label: "Age", value: "38 years old" },
    { label: "Gender", value: "Female" },
    { label: "Job", value: "Senior Marketing Manager" },
    { label: "Income", value: "$150,000/year" },
    { label: "Status", value: "Married, 1 Child (8)" },
    { label: "Education", value: "MBA" },
    { label: "Location", value: "Major Metropolitan Area" },
  ];

  return (
    <section className="py-24 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-serif mb-4">A → Who Are They</h2>
          <div className="h-1 w-24 bg-terracotta" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-paper/20 pb-4"
            >
              <p className="text-terracotta text-sm uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-xl font-medium">{stat.value}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="sub-title text-paper/60">Lifestyle Context</h3>
            <p className="text-xl leading-relaxed text-paper/80">
              Jessica lives in a major metropolitan area with her husband Mark, a software engineer. 
              As a modern, dual-income family, they have the financial means to invest in travel 
              experiences but struggle with the time and mental energy required to plan them properly.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-8 border border-paper/20 rounded-2xl text-center max-w-sm">
              <p className="text-paper/60 italic">
                "Success comes at a cost: limited bandwidth for personal planning and a growing sense of guilt about not creating meaningful family memories."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InterestsSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="section-title">B → What They Do & Like</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-terracotta" /> Top Brands
          </h3>
          <ul className="space-y-4">
            <li className="list-item-bullet"><div className="bullet-dot" /> <strong>Everlane</strong> — Minimalist, transparent, ethical</li>
            <li className="list-item-bullet"><div className="bullet-dot" /> <strong>Lululemon</strong> — Quality activewear for wellness</li>
            <li className="list-item-bullet"><div className="bullet-dot" /> <strong>Madewell</strong> — Stylish, durable essentials</li>
          </ul>
        </div>
        
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Heart className="text-terracotta" /> Hobbies
          </h3>
          <ul className="space-y-4">
            <li className="list-item-bullet"><div className="bullet-dot" /> <strong>Yoga</strong> — De-stress and maintain wellness</li>
            <li className="list-item-bullet"><div className="bullet-dot" /> <strong>Trying new restaurants</strong> — Exploring cultures locally</li>
          </ul>
        </div>
        
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-terracotta" /> Favorite Media
          </h3>
          <div className="space-y-4 text-sm text-ink/70">
            <p><strong>Movies:</strong> The Grand Budapest Hotel, Lost in Translation, Into the Wild, Amélie</p>
            <p><strong>Books:</strong> Where the Crawdads Sing, Educated, The Alchemist, Daring Greatly</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 glass-card p-12 rounded-2xl">
        <h3 className="text-2xl font-bold mb-8">Trusted Digital Spaces</h3>
        <p className="text-lg text-ink/80 leading-relaxed mb-8">
          Jessica spends her time on platforms that offer inspiration, information, and community: 
          The New York Times for current events, Condé Nast Traveler for travel inspiration, 
          Pinterest for visual discovery, Allrecipes for practical solutions, and LinkedIn for professional growth.
        </p>
        <div className="flex flex-wrap gap-4">
          {['@doyoutravel', '@thebucketlistfamily', '@chrisburkard'].map(handle => (
            <span key={handle} className="px-4 py-2 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium">
              {handle}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    { title: "Authenticity", desc: "She craves genuine experiences and dislikes anything that feels artificial or mass-produced." },
    { title: "Growth", desc: "Committed to personal and professional development, always seeking new challenges." },
    { title: "Connection", desc: "Values deep, meaningful relationships with family and close friends above all else." },
    { title: "Efficiency", desc: "Always looking for ways to optimize time and be more productive in all areas of life." },
    { title: "Beauty", desc: "Strong appreciation for aesthetics, whether in design, nature, or art." },
  ];

  return (
    <section id="values" className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="section-title">C → Why Are They</h2>
          <p className="text-xl text-ink/60 italic">Core Personality Traits & Five Major Values</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-ink/5 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta mb-6">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif italic text-terracotta">Major Life Victories</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1 h-full bg-terracotta shrink-0" />
                <div>
                  <p className="font-bold">Completing her MBA while working full-time</p>
                  <p className="text-ink/60">A testament to her determination and work ethic.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1 h-full bg-terracotta shrink-0" />
                <div>
                  <p className="font-bold">Leading a major product launch</p>
                  <p className="text-ink/60">Successfully managed a large team through a high-stakes project.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-serif italic text-ink/40">Notable Failures</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1 h-full bg-ink/20 shrink-0" />
                <div>
                  <p className="font-bold">A "disastrous" family vacation</p>
                  <p className="text-ink/60">An all-inclusive resort felt impersonal and uninspired, wasting precious time and money.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1 h-full bg-ink/20 shrink-0" />
                <div>
                  <p className="font-bold">Missing her child's school play</p>
                  <p className="text-ink/60">A last-minute work emergency triggered guilt and prompted a re-evaluation of priorities.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5 pointer-events-none">
        <Compass size={600} />
      </div>
    </section>
  );
};

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="section-title">D → Smart Market Questions</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 border-2 border-terracotta/20 rounded-3xl hover:border-terracotta transition-colors">
          <h3 className="text-2xl font-bold mb-6 text-terracotta">What keeps them awake at night?</h3>
          <p className="text-lg text-ink/80 leading-relaxed">
            The feeling that time is slipping by too quickly. Jessica worries that she's not being present 
            enough for her family and that they are not creating the kind of meaningful memories she had always envisioned.
          </p>
        </div>
        
        <div className="p-10 border-2 border-terracotta/20 rounded-3xl hover:border-terracotta transition-colors">
          <h3 className="text-2xl font-bold mb-6 text-terracotta">What are they secretly afraid of?</h3>
          <p className="text-lg text-ink/80 leading-relaxed">
            Regret. She is terrified of looking back on her life and realizing that she played it too safe, 
            that she didn't take enough risks or have enough adventures.
          </p>
        </div>
        
        <div className="p-10 border-2 border-terracotta/20 rounded-3xl hover:border-terracotta transition-colors">
          <h3 className="text-2xl font-bold mb-6 text-terracotta">What are they angry about?</h3>
          <p className="text-lg text-ink/80 leading-relaxed">
            She is angry at the "hustle culture" that glorifies being busy as a status symbol. 
            She is frustrated with herself for getting caught up in it and for letting it dictate how she spends her time.
          </p>
        </div>
        
        <div className="p-10 border-2 border-terracotta/20 rounded-3xl hover:border-terracotta transition-colors">
          <h3 className="text-2xl font-bold mb-6 text-terracotta">Biggest Secret Desire</h3>
          <p className="text-lg text-ink/80 leading-relaxed italic">
            "To take a year-long sabbatical and travel the world with her family."
          </p>
        </div>
      </div>
    </section>
  );
};

const EmpathyMap = () => {
  const quadrants = [
    { title: "Seeing", icon: <Eye />, content: "Instagram feeds full of perfect-looking family vacations. Travel shows on Netflix. An ever-growing list of bookmarked travel articles and blog posts. Her child's school calendar with its limited vacation windows." },
    { title: "Thinking", icon: <Coffee />, content: "\"There has to be a better way to do this.\" \"I'm so tired of feeling like I'm failing at planning our vacations.\" \"I wish someone could just tell me where to go and what to do.\"" },
    { title: "Hearing", icon: <MessageSquare />, content: "Friends and colleagues talking about their amazing, unique travel experiences. Her husband asking, \"Have you figured out where we're going for our next trip yet?\" The constant buzz of notifications." },
    { title: "Feeling", icon: <Smile />, content: "Overwhelmed, anxious, guilty, and inspired all at the same time. A sense of wanderlust mixed with a feeling of being trapped by her responsibilities." },
  ];

  return (
    <section className="py-24 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif mb-16 text-center">H → Empathy Map</h2>
        
        <div className="grid md:grid-cols-2 gap-px bg-paper/10 border border-paper/10 rounded-3xl overflow-hidden">
          {quadrants.map((q, i) => (
            <div key={i} className="p-12 bg-ink">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-terracotta">{q.icon}</div>
                <h3 className="text-2xl font-bold uppercase tracking-widest">{q.title}</h3>
              </div>
              <p className="text-lg text-paper/70 leading-relaxed">{q.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-paper border-t border-ink/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-8">Understanding Jessica is Key</h2>
        <p className="text-xl text-ink/70 leading-relaxed mb-12">
          By understanding the "Overwhelmed Explorer," you can craft messaging, products, and services 
          that speak directly to her pain points, values, and desires. She is ready for a solution—she just needs to know it exists.
        </p>
        <div className="p-8 bg-ink text-paper rounded-2xl inline-block">
          <p className="text-sm uppercase tracking-widest mb-2 opacity-60">Based on</p>
          <p className="text-xl font-serif">Eugene Schwartz's Stages of Market Awareness Framework</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProfileSection />
      <DemographicsGrid />
      <InterestsSection />
      <ValuesSection />
      <InsightsSection />
      <EmpathyMap />
      <Footer />
    </div>
  );
}
