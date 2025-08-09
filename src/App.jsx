import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, Github, Linkedin, Code2, Briefcase, FolderGit2, Rocket, ExternalLink } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold tracking-tight mb-8"
    >
      {Icon && <Icon className="size-6" aria-hidden />}
      <span>{title}</span>
    </motion.h2>
    <div>{children}</div>
  </section>
)

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm md:text-base text-zinc-300 hover:text-white transition-colors">{children}</a>
)

export default function App() {
  const [year] = useState(new Date().getFullYear())

  const skills = [
    'Windows 10/11','macOS','Microsoft 365','SharePoint','OneDrive','Teams','Active Directory','Azure AD','Intune','Jamf Pro','ServiceNow','Freshservice','Remote Support (RDP/AnyDesk/TeamViewer)','Networking (IP/DNS/DHCP/VPN)','Cisco Meraki','Sophos','PDQ Deploy','ITIL'
  ]

  const experience = [
    { role: 'IT Technical Support Technician', company: 'New Collaborative Learning Trust (NCLT)', dates: 'Oct 2023 – Present', bullets: [
      '1st/2nd line support for Windows & macOS across multiple sites.',
      'Device management with Intune & Jamf Pro; Azure AD/AD administration.',
      'Ticketing via ServiceNow/Freshservice; infrastructure maintenance.'
    ]},
    { role: 'IT Technical Support Specialist', company: 'Vopium (Remote, Copenhagen)', dates: 'Feb 2021 – Oct 2023', bullets: [
      'Supported Windows 10/11 & iOS; met SLAs with excellent CSAT.',
      'Microsoft Azure admin tasks; cross‑team collaboration.'
    ]},
  ]

  const projects = [
    { name: 'Personal Portfolio / CV Site', desc: 'This site. Dark, monospaced aesthetic inspired by ethanlipnik.com.', link: '#', repo: '#', stack: ['React','Tailwind','Framer Motion'] }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-700 selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm tracking-widest uppercase text-zinc-300 hover:text-white">Soban Ahmed</a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="secondary">
              <a href="/Soban_Ahmed_CV.pdf" download>
                <Download className="mr-2 size-4" /> Download CV
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <p className="font-mono text-xs text-zinc-400">IT Technician · Bradford, UK</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Technical Support Specialist focused on clear, calm problem‑solving</h1>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                I’m Soban — an experienced IT professional with a knack for troubleshooting, endpoint management (Intune/Jamf), and friendly, plain‑English support. I help teams stay productive by keeping devices and services humming.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="#contact"><Rocket className="mr-2 size-4" /> Hire me</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#experience"><Briefcase className="mr-2 size-4" /> Experience</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-zinc-400">
                <a href="https://github.com/your-username" className="hover:text-white inline-flex items-center gap-2" aria-label="GitHub">
                  <Github className="size-5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/your-username" className="hover:text-white inline-flex items-center gap-2" aria-label="LinkedIn">
                  <Linkedin className="size-5" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-5">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3"><Mail className="size-4 text-zinc-400" /><a className="hover:underline" href="mailto:sobanahmed@hotmail.co.uk">sobanahmed@hotmail.co.uk</a></li>
                    <li className="flex items-center gap-3"><Phone className="size-4 text-zinc-400" /><a className="hover:underline" href="tel:+447761327150">+44 7761 327150</a></li>
                    <li className="flex items-center gap-3"><MapPin className="size-4 text-zinc-400" /><span>Bradford, West Yorkshire</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <Section id="about" title="About Me" icon={Code2}>
          <div className="prose prose-invert max-w-none text-zinc-300">
            <p>Experienced IT technician skilled in technical support, endpoint management, and customer service. Comfortable across Windows, macOS, Microsoft 365, and core networking. I break down complex issues into clear next steps so non‑technical users feel confident and supported.</p>
          </div>
        </Section>

        <Section id="skills" title="Skills / Tech Stack" icon={FolderGit2}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((s) => (
              <motion.div key={s} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25 }} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-200">{s}</motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{job.role} · <span className="text-zinc-300">{job.company}</span></h3>
                  <span className="text-sm text-zinc-400">{job.dates}</span>
                </div>
                <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-300">
                  {job.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" icon={FolderGit2}>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-zinc-300">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
                    {p.stack.map((t) => <span key={t} className="rounded-full border border-zinc-800 px-2 py-1">{t}</span>)}
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    {p.link !== '#' && <a className="inline-flex items-center gap-2 hover:underline" href={p.link} target="_blank" rel="noreferrer"><ExternalLink className="size-4" /> Live</a>}
                    {p.repo !== '#' && <a className="inline-flex items-center gap-2 hover:underline" href={p.repo} target="_blank" rel="noreferrer"><Github className="size-4" /> Source</a>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" icon={Mail}>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold">Let’s work together</h3>
                  <p className="mt-2 text-zinc-300">Based in Bradford. Open to roles across Yorkshire and remote.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="mailto:sobanahmed@hotmail.co.uk?subject=Opportunity%20for%20IT%20Technician"><Mail className="mr-2 size-4" /> Email me</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:+447761327150"><Phone className="mr-2 size-4" /> Call</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>

      <footer className="mt-20 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-400 flex flex-wrap items-center justify-between gap-3">
          <p>© {year} Soban Ahmed. All rights reserved.</p>
          <p className="font-mono">Built with React · Tailwind · Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}
