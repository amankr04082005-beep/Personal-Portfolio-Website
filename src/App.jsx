import { useEffect, useMemo, useState } from "react";
import ProjectSection from "./Components/ProjectSection";
import ProjectDetailPage from "./Components/ProjectDetailPage";
import CommandPalette from "./Components/CommandPalette";
import ContactModal from "./Components/ContactModal";
import ResumeModal from "./Components/ResumeModal";
import CredentialModal from "./Components/CredentialModal";
import ProjectShareModal from "./Components/ProjectShareModal";
import Toast from "./Components/Toast";
import CursorGlow from "./Components/CursorGlow";
import CursorCat from "./Components/CursorCat";
import { playSound } from "./utils/soundEffects";
import { projects } from "./data/projectsData";
import { Command, FileText, Send, ShieldCheck, Volume2, VolumeX } from "lucide-react";

const skillsGroups = [
  {
    title: "Languages",
    items: [
      { name: "Python", iconSrc: "https://cdn.simpleicons.org/python" },
      { name: "JavaScript", iconSrc: "https://cdn.simpleicons.org/javascript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", iconSrc: "https://cdn.simpleicons.org/react" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", iconSrc: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", iconSrc: "https://cdn.simpleicons.org/express" },
      { name: "Flask" },
      { name: "FastAPI", iconSrc: "https://cdn.simpleicons.org/fastapi" },
      { name: "SQLAlchemy" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", iconSrc: "https://cdn.simpleicons.org/mongodb" },
      { name: "MySQL", iconSrc: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      { name: "Docker", iconSrc: "https://cdn.simpleicons.org/docker" },
      { name: "Render" },
      { name: "Vercel" },
      { name: "MongoDB Atlas" },
      { name: "Neon" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git", iconSrc: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", iconSrc: "https://cdn.simpleicons.org/github" },
      { name: "REST API Development" },
      { name: "JWT" },
      { name: "pytest" },
      { name: "Unit Testing" },
    ],
  },
  {
    title: "Core CS",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "DBMS" },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Team Collaboration" },
      { name: "Communication" },
    ],
  },
];

const achievementsData = [
  {
    title: "3rd Rank in Coding & Debugging Competition",
    issuer: "IT Fest 2024, Acharya Institute of Graduate Studies",
    date: "2024",
    icon: "🏆",
    description: "Secured 3rd rank as part of a 3-member team at the coding and debugging competition.",
    skills: ["Coding", "Debugging", "Team Collaboration"],
  },
  {
    title: "Volunteer, IT Quiz",
    issuer: "Acharya Institute of Graduate Studies",
    date: "2024",
    icon: "🤝",
    description: "Supported event coordination for the 2024 IT Quiz.",
    skills: ["Volunteering", "Event Coordination"],
  },
  {
    title: "NSS Walk to EmpowHER",
    issuer: "Acharya Institute of Graduate Studies",
    date: "2024",
    icon: "🌱",
    description: "Participated in the NSS women empowerment initiative.",
    skills: ["NSS", "Community Participation"],
  },
];

const certificatesData = [
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
    icon: "🎓",
    description: "Problem Solving (Intermediate) certification.",
    skills: ["Problem Solving", "Algorithms", "Coding"],
  },
  {
    title: "Python with DSA",
    issuer: "Unstop",
    date: "2026",
    icon: "📜",
    description: "Python with DSA certification.",
    skills: ["Python", "DSA", "Programming"],
  },
  {
    title: "GitHub Workflow Mastery",
    issuer: "GitHub",
    date: "2026",
    icon: "🤖",
    description: "GitHub Workflow Mastery certification.",
    skills: ["GitHub", "Version Control", "Collaboration"],
  },
];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/amankr04082005-beep" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aman-kumar-3a5376291/" },
  { label: "Email", href: "mailto:amankumar04082005@gmail.com" },
  { label: "Phone", href: "tel:+916200428363" },
];

function App() {
  const [time, setTime] = useState("");
  const [route, setRoute] = useState(getRouteFromHash);

  // Modals & Popups State
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedCredential, setSelectedCredential] = useState(null);
  const [selectedShareProject, setSelectedShareProject] = useState(null);
  const [toast, setToast] = useState(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const tick = () => setTime(`${formatter.format(new Date())} (Asia/Kolkata)`);
    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  // Global Click Sound Effect Listener
  useEffect(() => {
    const handleGlobalClick = () => {
      if (soundEnabled) {
        playSound("click", true);
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [soundEnabled]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Dedicated Route Sync Listener
  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    syncRoute();
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  // Command Palette Shortcut Listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectedProject = useMemo(() => {
    if (route.type !== "project") return null;
    return projects.find((project) => project.slug === route.projectSlug) || null;
  }, [route]);

  useEffect(() => {
    if (route.type === "about") {
      document.title = "About Aman Kumar | Portfolio";
      return;
    }
    document.title = selectedProject
      ? `${selectedProject.title} | Aman Kumar`
      : "Aman Kumar | Portfolio";
  }, [route.type, selectedProject]);

  const toggleTheme = () => setTheme((curr) => (curr === "dark" ? "light" : "dark"));

  const showToastNotification = (data) => {
    setToast(data);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <>
      <CursorGlow theme={theme} />
      <CursorCat />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onToggleTheme={toggleTheme}
        theme={theme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onShowToast={showToastNotification}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToastNotification}
      />

      <CredentialModal
        credential={selectedCredential}
        onClose={() => setSelectedCredential(null)}
      />

      <ProjectShareModal
        project={selectedShareProject}
        onClose={() => setSelectedShareProject(null)}
        onShowToast={showToastNotification}
      />

      <Toast toast={toast} onClose={() => setToast(null)} />

      {route.type === "project" && selectedProject ? (
        <ProjectDetailPage
          project={selectedProject}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenShare={(proj) => setSelectedShareProject(proj)}
          onBack={() => {
            window.location.hash = "";
          }}
        />
      ) : route.type === "about" ? (
        <AboutPage
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onBack={() => {
            window.location.hash = "";
          }}
        />
      ) : (
        <PortfolioHome
          time={time}
          theme={theme}
          onToggleTheme={() => {
            playSound("pop", soundEnabled);
            toggleTheme();
          }}
          soundEnabled={soundEnabled}
          onToggleSound={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            if (next) playSound("success", true);
          }}
          heroRole="Software Engineer"
          onOpenCommand={() => {
            playSound("click", soundEnabled);
            setIsCommandOpen(true);
          }}
          onOpenContact={() => {
            playSound("click", soundEnabled);
            setIsContactOpen(true);
          }}
          onOpenResume={() => {
            playSound("click", soundEnabled);
            setIsResumeOpen(true);
          }}
          onOpenCredential={(cred) => {
            playSound("click", soundEnabled);
            setSelectedCredential(cred);
          }}
          onOpenShare={(proj) => {
            playSound("click", soundEnabled);
            setSelectedShareProject(proj);
          }}
        />
      )}
    </>
  );
}

function PortfolioHome({
  time,
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  heroRole,
  onOpenCommand,
  onOpenContact,
  onOpenResume,
  onOpenCredential,
  onOpenShare,
}) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 border-t-[10px] border-[var(--color-topbar)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-[32vw] bg-[radial-gradient(circle_at_top,var(--color-right-glow),transparent_60%)]" />

      <main className="mx-auto w-[min(1320px,calc(100%-32px))] pb-16 pt-12 sm:pt-16">
        {/* Navigation Top Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-extrabold text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Seeking an Entry-Level Software Engineer Role</span>
          </div>

          {/* Header Action Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommand}
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-xs font-bold text-[var(--color-text)] shadow-md transition hover:-translate-y-0.5 hover:border-emerald-500/40"
            >
              <Command className="h-4 w-4 text-emerald-400" />
              <span>Search</span>
              <kbd className="rounded-md bg-[var(--color-card-soft-strong)] px-1.5 py-0.5 text-[10px] font-mono">
                ⌘K
              </kbd>
            </button>

            {/* In-Browser Resume Modal Trigger */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-xs font-bold text-[var(--color-text)] shadow-md transition hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4 text-amber-400" />
              <span>Resume</span>
            </button>

            {/* Sound Effects Toggle Button */}
            <button
              type="button"
              onClick={onToggleSound}
              className={`grid h-10 w-10 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] transition hover:-translate-y-0.5 ${
                soundEnabled ? "text-emerald-400 border-emerald-500/30" : "text-[var(--color-section-muted)]"
              }`}
              title={soundEnabled ? "Mute Developer Sound Effects" : "Enable Developer Sound Effects"}
            >
              {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition hover:-translate-y-0.5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        {/* Headline Header */}
        <header className="mb-12">
          <h1 className="text-[2.35rem] leading-[1.05] font-extrabold tracking-[-0.06em] sm:text-[3.9rem] xl:text-[4.5rem]">
            <span>Hi, I&apos;m Aman — </span>
            <span
              key={heroRole}
              className="role-swap bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 font-extrabold drop-shadow-sm inline-block"
            >
              {heroRole}
            </span>
          </h1>
        </header>

        {/* Hero Section */}
        <section className="grid gap-5 xl:grid-cols-[1.95fr_0.88fr]">
          <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-8 shadow-[var(--shadow-card)] transition-colors duration-300 relative overflow-hidden">
            {/* Background Glow Overlay */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="mb-8 flex items-start justify-between">
              {/* Profile placeholder without personal photo */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-75 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
                <div className="relative grid h-44 w-44 place-items-center rounded-[26px] border-2 border-white/20 bg-slate-900 text-4xl font-black text-emerald-300 shadow-2xl transition duration-300 group-hover:scale-[1.02]">
                  AK
                </div>
              </div>

              <div className="mt-3 text-emerald-400 animate-pulse">
                <SparkIcon />
              </div>
            </div>

            <h2 className="mb-3 text-[3.2rem] leading-none font-extrabold tracking-[-0.05em] text-[var(--color-text)]">
              About me.
            </h2>

            <p className="max-w-[760px] text-[1.08rem] leading-[2.15rem] text-[var(--color-body)] transition-colors duration-300">
              BCA graduate (CGPA 8.4) with hands-on experience building and deploying full-stack applications using React, Node.js, Express, MongoDB, Python, and Flask, along with REST APIs and JWT authentication. Strong foundation in DSA, OOP, and DBMS; seeking an entry-level Software Engineer role.
            </p>

            {/* Quick Hero Key Stats Bar */}
            <div className="my-7 grid grid-cols-3 gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-3.5 text-center">
              <div>
                <p className="text-2xl font-black text-emerald-400">9</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-section-muted)] mt-0.5">REST APIs</p>
              </div>
              <div className="border-x border-[var(--color-border)]">
                <p className="text-2xl font-black text-amber-400">3rd</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-section-muted)] mt-0.5">Competition</p>
              </div>
              <div>
                <p className="text-2xl font-black text-sky-400">8.4</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-section-muted)] mt-0.5">CGPA</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 rounded-[18px] bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 px-8 py-4 text-[1.1rem] font-extrabold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] hover:scale-105"
              >
                <SendIcon />
                <span>Let&apos;s Connect</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center rounded-[18px] border border-emerald-500/30 bg-[var(--color-card-soft)] px-7 py-4 text-[1.05rem] font-bold text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/10"
              >
                View Projects →
              </a>
            </div>
          </article>

          {/* Technical Skills Sidebar */}
          <aside className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] transition-colors duration-300 sm:p-7 lg:row-span-2">
            <div className="mb-6 flex items-center gap-3 text-[var(--color-section-muted)] transition-colors duration-300">
              <ArrowBracketIcon />
              <p className="text-[0.95rem] font-bold tracking-[0.22em] uppercase">
                Technical Skills
              </p>
            </div>
            <div className="space-y-7">
              {skillsGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-[0.72rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-soft)] transition-colors duration-300">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <SkillChip key={item.name} name={item.name} iconSrc={item.iconSrc} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <AboutCard time={time} />

          <article className="grid gap-4 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)] transition-colors duration-300 sm:grid-cols-2">
            {profileLinks.map((link) => (
              <SocialCard key={link.label} href={link.href} label={link.label} />
            ))}
          </article>
        </section>

        {/* Filterable Projects Section */}
        <ProjectSection onOpenShare={onOpenShare} />

        <section className="mt-24 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[var(--color-section-muted)]">
            Education
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            Bachelor of Computer Applications (BCA)
          </h2>
          <p className="mt-1 text-sm font-semibold text-emerald-400">
            Acharya Institute of Graduate Studies, Bengaluru · 2023–2026
          </p>
          <p className="mt-2 text-sm text-[var(--color-body)]">
            CGPA: 8.4 / 10
          </p>
        </section>

        {/* Achievements & Certifications Modals Grid */}
        <section className="mt-24 grid gap-6 md:grid-cols-2">
          <InteractivePanel
            title="Achievements & Extracurriculars"
            items={achievementsData}
            onOpenCredential={onOpenCredential}
          />
          <InteractivePanel
            title="Certifications & Credentials"
            items={certificatesData}
            onOpenCredential={onOpenCredential}
          />
        </section>

        <Footer
          onOpenResume={onOpenResume}
          onOpenContact={onOpenContact}
        />
      </main>
    </div>
  );
}

function AboutPage({ theme, onToggleTheme, onOpenContact, onOpenResume, onBack }) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 border-t-[10px] border-[var(--color-topbar)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-[32vw] bg-[radial-gradient(circle_at_top,var(--color-right-glow),transparent_60%)]" />

      <main className="mx-auto w-[min(1320px,calc(100%-32px))] pb-16 pt-14 sm:pt-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5"
          >
            <ArrowLeftIcon />
            Back to home
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-[0.95rem] font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4 text-amber-400" />
              View Resume
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] transition hover:-translate-y-0.5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)] sm:p-9">
            <div className="mb-6 overflow-hidden rounded-[24px] bg-[var(--color-card-soft-2)] p-2 shadow-xl border border-[var(--color-border)]">
              <div className="grid min-h-[280px] w-full place-items-center rounded-[20px] border border-[var(--color-border)] bg-slate-900 text-7xl font-black text-emerald-300">
                AK
              </div>
            </div>
            <h1 className="text-[2.8rem] leading-[0.95] font-extrabold tracking-[-0.06em] sm:text-[3.8rem]">
              About me.
            </h1>
            <p className="mt-4 text-[1.08rem] leading-[2.1rem] text-[var(--color-body)]">
              I am a BCA graduate from Acharya Institute of Graduate Studies, Bengaluru (CGPA: 8.4/10), with hands-on experience building and deploying full-stack applications using React, Node.js, Express, MongoDB, Python/Flask, REST APIs, and JWT authentication. I am seeking an entry-level Software Engineer role.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 rounded-[18px] bg-gradient-to-r from-emerald-400 to-teal-500 px-7 py-3.5 text-[1rem] font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                <SendIcon />
                Contact me
              </button>
              <a
                href="https://github.com/amankr04082005-beep"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-[18px] border border-[var(--color-border)] bg-[var(--color-card-soft)] px-6 py-3.5 text-[0.98rem] font-bold text-[var(--color-text)] transition hover:-translate-y-0.5"
              >
                GitHub Profile
              </a>
            </div>
          </article>

          <article className="space-y-6">
            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                Academic Background
              </p>
              <h3 className="text-xl font-bold text-[var(--color-text)]">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sm font-semibold text-emerald-400 mt-1">Acharya Institute of Graduate Studies, Bengaluru (2023 – 2026)</p>
              <p className="mt-2 text-sm text-[var(--color-body)] leading-relaxed">
                CGPA: <strong className="text-[var(--color-text)]">8.4 / 10</strong>. Core subjects: Data Structures and Algorithms, Object-Oriented Programming, and DBMS.
              </p>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                What I do & Focus Areas
              </p>
              <p className="text-[1.02rem] leading-8 text-[var(--color-body)]">
                I build full-stack web applications and REST APIs using React, Node.js, Express, Python, Flask, FastAPI, and SQL/NoSQL databases. My project experience includes JWT authentication, automated tests, Docker, and deployment on Render and Vercel.
              </p>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-4 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                Core Strengths & Tech Stack
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "React, Node.js & Express.js",
                  "Python, Flask & FastAPI",
                  "REST APIs & JWT",
                  "MongoDB, MySQL, PostgreSQL & SQLite",
                  "Docker, Render & Vercel",
                  "DSA, OOP & DBMS",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-card)]">
              <p className="mb-3 text-[0.8rem] font-bold tracking-[0.28em] uppercase text-[var(--color-section-muted)]">
                Quick links
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {profileLinks.map((link) => (
                  <SocialCard key={link.label} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

function AboutCard() {
  return (
    <a
      href="#about"
      className="group block overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-[var(--color-card-soft)]"
    >
      <div className="flex items-center gap-5 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card-soft)] p-5">
      <div className="relative shrink-0">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-slate-900 text-lg font-black text-emerald-300 ring-2 ring-[var(--color-border)] transition duration-300 group-hover:scale-105">
          AK
        </div>
        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-[var(--color-card)]" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] uppercase tracking-[0.35em] font-semibold text-[var(--color-section-muted)]">
          ABOUT ME
        </p>

        <h2 className="mt-1 text-2xl font-bold text-[var(--color-text)]">
          Hi, I&apos;m Aman Kumar 👋
        </h2>

        <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">
          BCA graduate focused on full-stack applications, REST APIs, and backend development.
        </p>

          <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
                Full-Stack
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
                REST APIs
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
                JWT
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
                DSA
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center rounded-full bg-[var(--color-button)] px-5 py-3 text-sm font-bold text-[var(--color-button-text)] transition-all duration-300 group-hover:scale-105">
          View →
        </div>
      </div>
    </a>
  );
}

function SkillChip({ name, iconSrc }) {
  const [imgError, setImgError] = useState(false);

  return (
    <span className="inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-3 py-2 text-[0.9rem] font-semibold text-[var(--color-text)]">
      {iconSrc && !imgError ? (
        <img
          className="h-5 w-5 shrink-0"
          src={iconSrc}
          alt=""
          aria-hidden="true"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-[rgba(255,255,255,0.06)] text-[0.68rem] font-black">
          {techBadgeFor(name)}
        </span>
      )}
      <span>{name}</span>
    </span>
  );
}

function InlineBadge({ children, tone = "neutral" }) {
  const tones = {
    neutral: "border-white/10 bg-white/[0.04] text-zinc-100",
    emerald: "border-emerald-400/20 bg-emerald-500/8 text-emerald-200",
    sky: "border-sky-400/20 bg-sky-500/8 text-sky-200",
    green: "border-emerald-400/20 bg-emerald-500/8 text-emerald-200",
    teal: "border-teal-400/20 bg-teal-500/8 text-teal-200",
    orange: "border-orange-400/20 bg-orange-500/8 text-orange-200",
    blue: "border-blue-400/20 bg-blue-500/8 text-blue-200",
    indigo: "border-indigo-400/20 bg-indigo-500/8 text-indigo-200",
  };

  return (
    <span className={`mx-1 inline-flex items-center rounded-[12px] border px-3 py-1.5 text-[0.98rem] font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}

function SocialCard({ href, label }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex min-h-[124px] flex-col items-center justify-center rounded-[18px] border border-[var(--color-border)] bg-[var(--color-card-soft-2)] text-[var(--color-section-muted)] transition duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-[var(--color-card-soft-strong)] hover:text-[var(--color-text)]"
    >
      <span className="text-[0.95rem] font-semibold">{label}</span>
      <span className="mt-2 text-[0.82rem]">Open</span>
    </a>
  );
}

function techBadgeFor(name) {
  const badges = {
    Python: "Py",
    JavaScript: "JS",
    React: "R",
    "Node.js": "N",
    "Express.js": "Ex",
    FastAPI: "FA",
    Docker: "D",
    Git: "G",
    GitHub: "GH",
    MySQL: "My",
    MongoDB: "MDB",
    PostgreSQL: "Pg",
    SQLite: "Sq",
    SQLAlchemy: "SA",
    "REST API Development": "API",
    "Data Structures & Algorithms": "DSA",
    "Object-Oriented Programming": "OOP",
    "Team Collaboration": "TC",
  };
  return badges[name] || name.slice(0, 2).toUpperCase();
}

function InteractivePanel({ title, items, onOpenCredential }) {
  return (
    <article className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 transition-colors duration-300">
      <p className="mb-4 text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[var(--color-section-muted)] transition-colors duration-300 flex items-center justify-between">
        <span>{title}</span>
        <span className="text-[10px] text-emerald-400 font-mono">Click to inspect</span>
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <button
            key={item.title}
            onClick={() => onOpenCredential(item)}
            className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-4 text-left transition hover:scale-[1.01] hover:bg-[var(--color-card-soft-strong)] hover:border-emerald-500/30"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-[var(--color-text)]">{item.title}</h4>
                <p className="text-xs text-[var(--color-section-muted)] mt-0.5">{item.issuer}</p>
              </div>
            </div>
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 opacity-70" />
          </button>
        ))}
      </div>
    </article>
  );
}

function Footer({ onOpenResume, onOpenContact }) {
  return (
    <footer className="mt-28 border-t border-[var(--color-border)] pt-12 pb-8 font-sans">
      {/* Top CTA Banner */}
      <div className="relative overflow-hidden rounded-[32px] border border-emerald-500/30 bg-[var(--color-card)] p-8 sm:p-10 shadow-2xl backdrop-blur-xl mb-16">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Hire</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)] tracking-tight">
              Let&apos;s build something extraordinary together 🚀
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[var(--color-body)] leading-relaxed">
              Seeking an entry-level Software Engineer role.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 px-6 py-3 text-xs font-extrabold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <SendIcon />
              <span>Let&apos;s Connect</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] px-5 py-3 text-xs font-bold text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)] hover:scale-105"
            >
              <FileText className="h-4 w-4 text-amber-400" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Multi-Column Grid */}
      <div className="grid gap-10 md:grid-cols-12 lg:gap-12">
        {/* Column 1: Brand & Profile Info (5 cols) */}
        <div className="md:col-span-6 lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Aman Kumar
            </h3>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-400">
              Software Engineer
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-body)] leading-relaxed max-w-md">
            BCA graduate (CGPA 8.4) with hands-on experience building and deploying full-stack applications, REST APIs, and Python services.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-bold text-[var(--color-text)]">
              💻 Full-Stack Projects
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-bold text-[var(--color-text)]">
              🏆 3rd in Coding Competition
            </span>
            <span className="rounded-full bg-[var(--color-card-soft-strong)] border border-[var(--color-border)] px-3 py-1 text-[11px] font-bold text-[var(--color-text)]">
              📜 Problem Solving Skills
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links (3 cols) */}
        <div className="md:col-span-3 lg:col-span-3 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-section-muted)]">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs font-semibold text-[var(--color-body)]">
            <li>
              <a href="#projects" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span>🚀</span> <span>Featured Projects</span>
              </a>
            </li>
            <li>
              <button onClick={onOpenResume} className="transition hover:text-emerald-400 flex items-center gap-2 text-left">
                <span>📄</span> <span>View Resume (PDF)</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect & Social Channels (4 cols) */}
        <div className="md:col-span-3 lg:col-span-4 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-section-muted)]">
            Connect & Socials
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-[var(--color-body)]">
            <li>
              <a href="mailto:amankumar04082005@gmail.com" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">📧</span>
                <span>amankumar04082005@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+916200428363" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">📞</span>
                <span>+91 6200428363</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/amankr04082005-beep" target="_blank" rel="noreferrer" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">💻</span>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aman-kumar-3a5376291/" target="_blank" rel="noreferrer" className="transition hover:text-emerald-400 flex items-center gap-2">
                <span className="text-emerald-400">🔗</span>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Credit Bar */}
      <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-section-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aman Kumar. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-medium">
          <span>Engineered with React</span> • <span>Tailwind CSS</span> • <span>Vite</span> • <span className="text-emerald-400 font-bold">Sub-100ms Speed ⚡</span>
        </p>
      </div>
    </footer>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <path d="M14 6 8 12l6 6" />
      <path d="M8 12h12" />
    </svg>
  );
}

function ArrowBracketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <path d="M9 6 3 12l6 6" />
      <path d="M15 6h6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3c0 .28 0 .57.02.85A7 7 0 0 0 20.15 12c.28 0 .57 0 .85-.02Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M12 2.5 14.2 9l6.3 1.2-5 4.4 1 6.4L12 17.7 7.5 21l1-6.4-5-4.4L9.8 9 12 2.5Z" />
    </svg>
  );
}

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash.startsWith("project/")) return { type: "project", projectSlug: hash.replace("project/", "") };
  if (hash === "about") return { type: "about" };
  return { type: "home" };
}

export default App;
