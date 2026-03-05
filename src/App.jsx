import React, { useState } from 'react';
import {
  BookOpen,
  ShieldCheck,
  Box,
  Maximize,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Info,
  Layers,
  Zap,
  Award,
  Lock,
  Menu,
  X,
  Printer,
  FileText,
  Home,
  Settings,
  HelpCircle,
  Clock,
  ExternalLink,
  ArrowRight,
  BarChart3,
  Play
} from 'lucide-react';

const COURSES = [
  {
    id: 'intro',
    title: 'Lab Safety & A1 Mini Overview',
    short: 'Safety',
    duration: '15 min',
    description: 'Essential safety protocols and introduction to the Bambu Lab A1 Mini printer.',
    icon: <ShieldCheck className="w-6 h-6" />,
    modules: [
      {
        title: 'Safety Fundamentals',
        content: `Before using the Bambu Lab A1 Mini, understand these safety essentials.
        - Hot Surfaces: The nozzle reaches 300°C and the bed reaches 80°C. Never touch during or immediately after printing.
        - Moving Parts: Keep hands, hair, and loose clothing away from the moving print head and bed.
        - Ventilation: Print PLA in well-ventilated areas. For PETG or TPU, ensure proper airflow.
        - Power Safety: Always use the included power adapter. Never unplug during a print.`
      },
      {
        title: 'A1 Mini Overview',
        content: `The Bambu Lab A1 Mini is a compact, high-speed FDM printer perfect for beginners and pros.
        - Build Volume: 180 x 180 x 180 mm — ideal for small to medium prints.
        - Print Speed: Up to 500mm/s with 20,000 mm/s² acceleration.
        - Auto Bed Leveling: Built-in Lidar and force sensor for perfect first layers every time.
        - Connectivity: WiFi-enabled with Bambu Studio and Bambu Handy app support.`
      }
    ],
    quiz: {
      question: "What is the maximum nozzle temperature of the Bambu Lab A1 Mini?",
      options: [
        "200°C",
        "250°C",
        "300°C",
        "350°C"
      ],
      correct: 2
    }
  },
  {
    id: 'fdm',
    title: 'Operating the A1 Mini',
    short: 'A1 Mini',
    duration: '25 min',
    description: 'Learn to set up, load filament, and start your first print on the Bambu A1 Mini.',
    icon: <Box className="w-6 h-6" />,
    modules: [
      {
        title: 'Machine Components',
        content: `Understanding your A1 Mini's key components.
        - Hotend: All-metal design supporting temps up to 300°C for PLA, PETG, TPU, and PLA-CF.
        - Textured PEI Build Plate: Flexible magnetic plate with excellent adhesion. No glue needed for PLA!
        - Filament Spool Holder: Rear-mounted holder. Ensure filament feeds smoothly without tangles.
        - Control Screen: Touchscreen for manual controls, calibration, and print monitoring.`
      },
      {
        title: 'Loading Filament',
        content: `Follow these steps to load filament correctly.
        - Step 1: Place your filament spool on the holder with the filament unwinding from the bottom.
        - Step 2: Cut the filament tip at a 45° angle for smooth feeding.
        - Step 3: On the touchscreen, go to Settings > Filament > Load and follow the prompts.
        - Step 4: Wait for filament to extrude from the nozzle, confirming successful loading.`
      },
      {
        title: 'Starting Your First Print',
        content: `Ready to print? Here's the workflow.
        - Send from Bambu Studio: Slice your model and click "Print" to send wirelessly to the A1 Mini.
        - Auto-Calibration: The printer runs vibration compensation and bed leveling automatically.
        - First Layer Check: Watch the first layer. It should be smooth and well-adhered to the bed.
        - Monitor Progress: Use the touchscreen or Bambu Handy app to track print progress.`
      }
    ],
    quiz: {
      question: "What angle should you cut the filament tip before loading?",
      options: ["90° (flat)", "45° angle", "No cutting needed", "Round the tip"],
      correct: 1
    }
  },
  {
    id: 'slicer',
    title: 'Bambu Studio Slicer',
    short: 'Slicer',
    duration: '20 min',
    description: 'Master Bambu Studio to prepare and optimize your 3D models for printing.',
    icon: <Layers className="w-6 h-6" />,
    modules: [
      {
        title: 'Bambu Studio Basics',
        content: `Bambu Studio is the official slicer for Bambu Lab printers.
        - Download: Get it free from bambulab.com. Available for Windows, macOS, and Linux.
        - Import Models: Drag and drop STL, OBJ, STEP, or 3MF files onto the build plate.
        - Printer Selection: Select "Bambu Lab A1 Mini 0.4mm nozzle" from the printer dropdown.
        - Filament Profile: Choose your filament type (PLA, PETG, etc.) for optimal settings.`
      },
      {
        title: 'Key Print Settings',
        content: `Understanding the most important slicer settings.
        - Layer Height: 0.2mm (standard) or 0.12mm (high detail). Affects print time and quality.
        - Infill: 15% for decorative, 30% for functional, 50%+ for strong parts.
        - Supports: Enable for overhangs over 45°. Use "tree supports" for easier removal.
        - Brim/Raft: Add a brim for better bed adhesion on small or tall prints.`
      },
      {
        title: 'Sending to Printer',
        content: `Multiple ways to start your print.
        - WiFi Direct: Click "Print" in Bambu Studio to send directly to your networked A1 Mini.
        - SD Card: Export the .3mf file to a microSD card and insert into the printer.
        - Bambu Handy: Send prints and monitor remotely from your smartphone.
        - Print Preview: Always review the sliced preview to check for issues before printing.`
      }
    ],
    quiz: {
      question: "What infill percentage is recommended for functional parts that need strength?",
      options: ["5%", "15%", "30% or higher", "100%"],
      correct: 2
    }
  },
  {
    id: 'troubleshoot',
    title: 'Troubleshooting & Tips',
    short: 'Tips',
    duration: '15 min',
    description: 'Common issues, solutions, and pro tips for successful A1 Mini printing.',
    icon: <Maximize className="w-6 h-6" />,
    modules: [
      {
        title: 'Common Print Issues',
        content: `How to identify and fix typical printing problems.
        - First Layer Not Sticking: Clean the PEI plate with IPA. Ensure proper Z-offset calibration.
        - Stringing: Increase retraction or lower print temperature by 5-10°C.
        - Layer Shifting: Check belt tension and ensure the printer is on a stable surface.
        - Under-Extrusion: Check for clogs, ensure correct filament diameter in slicer (1.75mm).`
      },
      {
        title: 'Maintenance Best Practices',
        content: `Keep your A1 Mini running smoothly.
        - Clean the Bed: Wipe with IPA before each print. Deep clean with dish soap weekly.
        - Check the Nozzle: Inspect for wear every 500 print hours. Replace if needed.
        - Lubricate Rails: Apply light machine oil to linear rails every few months.
        - Firmware Updates: Keep firmware updated via Bambu Studio for best performance.`
      }
    ],
    quiz: {
      question: "What should you use to clean the PEI build plate for better adhesion?",
      options: [
        "Water only",
        "Isopropyl Alcohol (IPA)",
        "Acetone",
        "No cleaning needed"
      ],
      correct: 1
    }
  }
];

export default function App() {
  const [view, setView] = useState('home'); // 'home' or 'course'
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [userProgress, setUserProgress] = useState({
    intro: false,
    fdm: false,
    slicer: false,
    troubleshoot: false
  });
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState("");
  const [isCertified, setIsCertified] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeCourse = COURSES[activeCourseIndex];
  const activeModule = activeCourse?.modules[activeModuleIndex];

  const handleNext = () => {
    if (activeModuleIndex < activeCourse.modules.length - 1) {
      setActiveModuleIndex(activeModuleIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuizSubmit = (optionIndex) => {
    setQuizAnswer(optionIndex);
    if (optionIndex === activeCourse.quiz.correct) {
      setQuizFeedback("Correct! You've mastered this block.");
      const newProgress = { ...userProgress, [activeCourse.id]: true };
      setUserProgress(newProgress);

      if (Object.values(newProgress).every(v => v === true)) {
        setIsCertified(true);
      }
    } else {
      setQuizFeedback("Incorrect. Please review the module material.");
    }
  };

  const handleCourseSelect = (index) => {
    setActiveCourseIndex(index);
    setActiveModuleIndex(0);
    setQuizAnswer(null);
    setQuizFeedback("");
    setView('course');
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    setView('home');
    setSidebarOpen(false);
  };

  const totalProgress = (Object.values(userProgress).filter(Boolean).length / COURSES.length) * 100;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-blue-100 flex flex-col lg:flex-row">

      {/* Mobile Top Bar */}
      <header className="lg:hidden bg-white border-b border-slate-200 p-4 sticky top-0 z-50 flex justify-between items-center shadow-sm w-full">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="SparkLab" className="w-12 h-12" />
          <div>
            <h1 className="font-bold text-lg text-[#1E293B] leading-tight">SparkLab</h1>
            <p className="text-[9px] text-blue-500 font-bold uppercase tracking-[0.2em]">Tech Academy</p>
          </div>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-slate-600">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 lg:relative lg:block
        w-[280px] bg-[#0F172A] text-white shadow-2xl transition-transform duration-300 ease-in-out shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-10 px-2 pt-2">
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="SparkLab" className="w-12 h-12" />
              <div>
                <h1 className="text-base font-bold leading-tight tracking-tight">SparkLab</h1>
                <p className="text-[9px] text-blue-400 font-bold uppercase tracking-[0.25em] opacity-80">Tech Academy</p>
              </div>
            </div>

            <div className="space-y-1 mb-10">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-3">Menu</p>
              <button
                onClick={goToHome}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all ${
                  view === 'home' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <Home size={16} strokeWidth={2.5} />
                <span className="font-semibold">Dashboard</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/40 rounded-lg transition-all">
                <BarChart3 size={16} strokeWidth={2.5} />
                <span className="font-semibold">My Badges</span>
              </button>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-3">Modules</p>
              {COURSES.map((course, idx) => (
                <button
                  key={course.id}
                  onClick={() => handleCourseSelect(idx)}
                  className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 mb-1 ${
                    view === 'course' && activeCourseIndex === idx
                      ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/10'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={(view === 'course' && activeCourseIndex === idx) ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'}>
                      {course.icon}
                    </span>
                    <span className="text-[13px] font-bold">{course.short}</span>
                  </div>
                  {userProgress[course.id] ? (
                    <CheckCircle2 size={14} className="text-emerald-400 fill-emerald-400/10" />
                  ) : (
                    (view === 'home' || activeCourseIndex !== idx) && <Lock size={12} className="opacity-10 group-hover:opacity-30" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto p-5 bg-[#0B1222] border-t border-slate-800/40">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Course Mastery</span>
              <span className="text-[10px] font-black text-[#2563EB]">{Math.round(totalProgress)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mb-5">
              <div
                className="bg-[#2563EB] h-full rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${totalProgress}%` }}
              ></div>
            </div>
            <div className="flex items-center gap-3 px-1">
              <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-[10px] font-bold text-slate-300 shadow-sm">
                SL
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold truncate">Lab Student</p>
                <p className="text-[9px] text-slate-500 truncate">active_session</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Workspace Content */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        <div className="max-w-[1100px] mx-auto p-6 md:p-12 lg:p-16">

          {isCertified ? (
            <div className="animate-in fade-in zoom-in-95 duration-700">
              <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="w-20 h-20 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Award className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-black text-[#0F172A] tracking-tighter mb-4">You're Authorized!</h2>
                <p className="text-[#64748B] max-w-md mx-auto text-lg font-medium leading-relaxed mb-10">
                  Certification verified. Your lab profile has been updated with full 3D fabrication privileges.
                </p>
                <div className="max-w-md mx-auto p-8 bg-[#F8FAFC] rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1.5">Authorization ID</p>
                    <p className="text-2xl font-mono font-black text-[#1E293B]">SPARK-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => window.print()} className="p-3.5 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
                      <Printer size={20} className="text-slate-600" />
                    </button>
                    <button className="px-7 py-3.5 bg-[#0F172A] text-white rounded-2xl font-bold hover:bg-[#1E293B] transition-all shadow-xl shadow-slate-900/10">
                      Download Card
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-bold flex items-center justify-center gap-2 uppercase tracking-wide">
                  <Info size={14} className="text-blue-500" />
                  Valid at all global SparkLab nodes
                </p>
              </div>
            </div>
          ) : view === 'home' ? (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#2563EB] font-black text-[10px] uppercase tracking-[0.25em]">
                  <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" className="w-4 h-4" />
                  <span>Welcome to the Academy</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter leading-tight max-w-2xl">
                  Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">3D Fabrication</span>.
                </h1>
                <p className="text-[#64748B] text-lg font-medium leading-relaxed max-w-xl">
                  Complete the following modules to earn your SparkLab authorization badge. You must pass all safety and technical exams.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Time Required', val: '75 min', icon: <Clock className="text-blue-500" /> },
                  { label: 'Modules', val: '4/4', icon: <Layers className="text-indigo-500" /> },
                  { label: 'Difficulty', val: 'Intermediate', icon: <Award className="text-emerald-500" /> }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-lg font-black text-slate-800">{stat.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {COURSES.map((course, idx) => (
                  <button
                    key={course.id}
                    onClick={() => handleCourseSelect(idx)}
                    className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] text-left transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl ${userProgress[course.id] ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                        {course.icon}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-full">
                        <Clock size={12} />
                        {course.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2">{course.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {userProgress[course.id] ? (
                          <span className="text-emerald-600 text-xs font-black flex items-center gap-1.5 uppercase tracking-widest">
                            <CheckCircle2 size={14} />
                            Completed
                          </span>
                        ) : (
                          <span className="text-blue-600 text-xs font-black flex items-center gap-1.5 uppercase tracking-widest">
                            <Play size={14} className="fill-blue-600" />
                            Start Learning
                          </span>
                        )}
                      </div>
                      <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-12 animate-in slide-in-from-bottom-8 duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#2563EB] font-black text-[10px] uppercase tracking-[0.25em]">
                    <button onClick={goToHome} className="hover:underline transition-all">Academy</button>
                    <span className="text-slate-300 opacity-50">/</span>
                    <span>{activeCourse.title}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter leading-[1.1]">
                    {activeModule.title}
                  </h2>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-xs font-bold text-slate-500 shrink-0">
                  <span className="text-[#2563EB] font-black">Part {activeModuleIndex + 1}</span>
                  <span className="opacity-30">/</span>
                  <span className="text-slate-400">{activeCourse.modules.length}</span>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                  {activeCourse.icon}
                </div>
                <div className="prose prose-slate max-w-none">
                  {activeModule.content.split('\n').map((line, i) => {
                    const text = line.trim();
                    if (text.startsWith('-')) {
                      return (
                        <li key={i} className="text-[#475569] text-lg mb-4 list-none flex items-start gap-4 font-medium">
                          <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2.5 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                          <span>{text.substring(1).trim()}</span>
                        </li>
                      );
                    }
                    return (
                      <p key={i} className="text-[#334155] text-lg md:text-xl leading-relaxed mb-8 font-medium opacity-90">
                        {text}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-16 flex justify-between items-center pt-10 border-t border-slate-50">
                  <div className="flex gap-2.5">
                    {activeCourse.modules.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-700 ${
                          i === activeModuleIndex ? 'w-12 bg-[#2563EB]' : 'w-2 bg-slate-100'
                        }`}
                      />
                    ))}
                  </div>
                  {activeModuleIndex < activeCourse.modules.length - 1 ? (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-3 bg-[#0F172A] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#1E293B] transition-all hover:translate-x-1 shadow-2xl shadow-slate-900/10 active:scale-95"
                    >
                      Next Lesson
                      <ChevronRight size={20} strokeWidth={3} />
                    </button>
                  ) : (
                    <div className="flex items-center gap-2.5 text-[#2563EB] font-black text-xs uppercase tracking-[0.2em]">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                      <span>Take Assessment Below</span>
                    </div>
                  )}
                </div>
              </div>

              {activeModuleIndex === activeCourse.modules.length - 1 && (
                <div className="bg-[#0F172A] rounded-[2.5rem] p-8 md:p-14 shadow-[0_30px_60px_rgba(15,23,42,0.25)] text-white transition-all overflow-hidden relative">
                  <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight">Certification Check</h3>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-100 mb-10 leading-snug font-bold">
                      {activeCourse.quiz.question}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      {activeCourse.quiz.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuizSubmit(idx)}
                          disabled={userProgress[activeCourse.id]}
                          className={`group p-6 rounded-2xl text-left border-2 transition-all duration-300 relative ${
                            quizAnswer === idx
                              ? (idx === activeCourse.quiz.correct ? 'border-emerald-500 bg-emerald-500/10' : 'border-red-500 bg-red-500/10')
                              : 'border-slate-800 hover:border-slate-500 hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold pr-10 text-slate-200 group-hover:text-white transition-colors">{option}</span>
                            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all shadow-lg ${
                              quizAnswer === idx
                                ? (idx === activeCourse.quiz.correct ? 'bg-emerald-50 border-emerald-500' : 'bg-red-500 border-red-500')
                                : 'border-slate-700 bg-slate-900 group-hover:border-slate-500'
                            }`}>
                              {quizAnswer === idx && (idx === activeCourse.quiz.correct ? <CheckCircle2 size={16} /> : <X size={16} />)}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {quizFeedback && (
                      <div className={`mt-10 p-6 rounded-3xl flex items-start gap-4 animate-in slide-in-from-top-6 duration-500 ${
                        quizAnswer === activeCourse.quiz.correct ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]'
                      }`}>
                        <div className="mt-1 shrink-0">
                          {quizAnswer === activeCourse.quiz.correct ? <ShieldCheck size={24} /> : <AlertCircle size={24} />}
                        </div>
                        <div>
                          <p className="font-black mb-1 text-xs uppercase tracking-widest">{quizAnswer === activeCourse.quiz.correct ? 'Status: Approved' : 'Status: Rejected'}</p>
                          <p className="text-sm font-semibold opacity-90 leading-relaxed">{quizFeedback}</p>
                        </div>
                      </div>
                    )}
                    {userProgress[activeCourse.id] && (
                      <div className="mt-12 flex justify-end">
                        <button
                          onClick={() => handleCourseSelect((activeCourseIndex + 1) % COURSES.length)}
                          className="bg-[#2563EB] text-white px-12 py-5 rounded-2xl font-black text-base hover:bg-[#1D4ED8] transition-all flex items-center gap-3 shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95"
                        >
                          Proceed to Next Course
                          <ChevronRight size={20} strokeWidth={3} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
