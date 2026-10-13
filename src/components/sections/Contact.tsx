import React from 'react';
import { contactData, contactMeta } from '@/data';
import { FadeIn, Magnet } from '@/components/motion';
import { Mail, MessageSquare, Linkedin, Github, Download, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative z-10 w-full py-28 sm:py-36 px-6 max-w-7xl mx-auto bg-[#0C0C0C] overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-white/10 via-zinc-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <FadeIn direction="down" delay={0.05}>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-zinc-400 mb-4 block font-kanit">
            {contactMeta.eyebrow}
          </span>
        </FadeIn>

        {/* Big Signature Heading: "Let's talk" */}
        <FadeIn direction="up" delay={0.1}>
          <h2 className="hero-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6">
            {contactMeta.title}
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <p className="max-w-xl text-zinc-300 font-kanit text-base sm:text-lg mb-14 leading-relaxed font-light">
            {contactMeta.subtitle}
          </p>
        </FadeIn>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-12">
          {/* Email */}
          <FadeIn direction="up" delay={0.2}>
            <Magnet strength={0.2} className="h-full">
              <a
                href={`mailto:${contactData.email}`}
                className="group p-6 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-zinc-900/80 flex flex-col items-start text-left justify-between h-full gap-6 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-xs font-kanit uppercase tracking-wider text-zinc-400 block mb-1">
                    {contactMeta.emailLabel}
                  </span>
                  <span className="text-sm sm:text-base font-kanit font-bold text-white break-all group-hover:text-zinc-200 transition-colors">
                    {contactData.email}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-kanit group-hover:text-white transition-colors">
                  <span>Send direct email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </Magnet>
          </FadeIn>

          {/* WhatsApp */}
          <FadeIn direction="up" delay={0.25}>
            <Magnet strength={0.2} className="h-full">
              <a
                href={contactData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-950/20 flex flex-col items-start text-left justify-between h-full gap-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-kanit uppercase tracking-wider text-zinc-400 block mb-1">
                    {contactMeta.whatsappLabel}
                  </span>
                  <span className="text-sm sm:text-base font-kanit font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 9441572613
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-kanit group-hover:text-emerald-300 transition-colors">
                  <span>Start WhatsApp chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </Magnet>
          </FadeIn>

          {/* LinkedIn */}
          <FadeIn direction="up" delay={0.3}>
            <Magnet strength={0.2} className="h-full">
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-950/20 flex flex-col items-start text-left justify-between h-full gap-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-kanit uppercase tracking-wider text-zinc-400 block mb-1">
                    {contactMeta.linkedinLabel}
                  </span>
                  <span className="text-sm sm:text-base font-kanit font-bold text-white group-hover:text-blue-300 transition-colors">
                    Bheemanapalli Hrushikesh
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-kanit group-hover:text-blue-300 transition-colors">
                  <span>View professional network</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </Magnet>
          </FadeIn>

          {/* GitHub */}
          <FadeIn direction="up" delay={0.35}>
            <Magnet strength={0.2} className="h-full">
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-zinc-900/80 flex flex-col items-start text-left justify-between h-full gap-6 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <span className="text-xs font-kanit uppercase tracking-wider text-zinc-400 block mb-1">
                    {contactMeta.githubLabel}
                  </span>
                  <span className="text-sm sm:text-base font-kanit font-bold text-white group-hover:text-zinc-200 transition-colors">
                    @bhrushikesh08
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-kanit group-hover:text-white transition-colors">
                  <span>Explore open repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </Magnet>
          </FadeIn>

          {/* Resume Download */}
          <FadeIn direction="up" delay={0.4}>
            <Magnet strength={0.2} className="h-full">
              <a
                href={contactData.resumeUrl}
                download="Hrushikesh_Resume.pdf"
                className="group p-6 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-950/20 flex flex-col items-start text-left justify-between h-full gap-6 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-kanit uppercase tracking-wider text-zinc-400 block mb-1">
                    {contactMeta.resumeLabel}
                  </span>
                  <span className="text-sm sm:text-base font-kanit font-bold text-white group-hover:text-amber-300 transition-colors">
                    Curriculum Vitae (PDF)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-kanit group-hover:text-amber-300 transition-colors">
                  <span>Download file directly</span>
                  <Download className="w-3.5 h-3.5" />
                </div>
              </a>
            </Magnet>
          </FadeIn>

          {/* Direct Call & Location */}
          <FadeIn direction="up" delay={0.45}>
            <Magnet strength={0.2} className="h-full">
              <div className="p-6 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl flex flex-col items-start text-left justify-between h-full gap-6">
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${contactData.phone}`}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    aria-label="Direct Phone Call"
                  >
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </a>
                  <a
                    href={contactData.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    aria-label="View Location Map"
                  >
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </a>
                </div>

                <div>
                  <span className="text-xs font-kanit uppercase tracking-wider text-zinc-400 block mb-1">
                    {contactMeta.locationLabel}
                  </span>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-sm sm:text-base font-kanit font-bold text-white hover:underline block"
                  >
                    {contactData.phone}
                  </a>
                </div>

                <a
                  href={contactData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 font-kanit hover:text-white transition-colors"
                >
                  <span>View Rayadurg on Map</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Magnet>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
