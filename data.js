/* ═══════════════════════════════════════════════════════════
   data.js — Shared Portfolio Data
   Both index.html and admin.html read from this.
   Changes saved to localStorage are read first.
   ══════════════════════════════════════════════════════════ */

const DEFAULT_DATA = {
  name: "Tanim",
  heroLabel: "Materials Science & Engineering",
  typewriterWords: [
    "Materials Engineer",
    "Nanotechnology Researcher",
    "Sustainable Engineering Advocate",
    "Problem Solver",
    "RUET Student"
  ],
  subtitle: "B.Sc. Student at RUET · Passionate about advanced materials, nanotechnology & sustainable engineering",
  cvLink: "#",
  photoURL: "",

  bio: "I am Tanim, a Materials Science and Engineering student at RUET with a deep passion for exploring the intersection of advanced materials, nanotechnology, and sustainable engineering solutions. I thrive at the boundary of science and innovation, driven by curiosity and a commitment to meaningful research.",
  university: "RUET",
  department: "Materials Science & Eng.",
  year: "Undergraduate",

  skills: [
    {
      title: "Materials Science",
      items: ["Crystallography", "Phase Diagrams", "Thermodynamics", "Corrosion Science", "Thin Films", "Composites"]
    },
    {
      title: "Research & Analysis",
      items: ["XRD", "SEM/TEM", "FTIR", "Literature Review", "Data Analysis", "Lab Techniques"]
    },
    {
      title: "Software & Tools",
      items: ["MATLAB", "Origin Pro", "AutoCAD", "Python", "LaTeX", "MS Office"]
    },
    {
      title: "Engineering Skills",
      items: ["Problem Solving", "Technical Writing", "Teamwork", "Project Management", "Critical Thinking"]
    }
  ],

  projects: [
    {
      title: "Corrosion Inhibition Study",
      desc: "Investigation of natural extract-based corrosion inhibitors for mild steel in acidic environments using electrochemical techniques.",
      tags: "Corrosion, Electrochemistry, Materials",
      link: "#"
    },
    {
      title: "Nanocomposite Synthesis",
      desc: "Synthesis and characterization of polymer nanocomposites reinforced with graphene oxide for enhanced mechanical properties.",
      tags: "Nanomaterials, Composites, XRD",
      link: "#"
    },
    {
      title: "Biomaterial Scaffold Design",
      desc: "Design and evaluation of hydroxyapatite-based scaffolds for bone tissue engineering applications.",
      tags: "Biomaterials, Tissue Engineering, SEM",
      link: "#"
    }
  ],

  researchInterests: [
    "Nanomaterials and Nanotechnology",
    "Sustainable and Green Materials",
    "Corrosion Science and Protection",
    "Biomaterials and Tissue Engineering",
    "Energy Storage Materials",
    "Polymer Matrix Composites"
  ],

  publications: [],

  email: "tanim@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  researchgate: "https://researchgate.net/",
  contactMessage: "Have a research idea, collaboration opportunity, or just want to talk materials science? I'd love to hear from you.",

  appearance: {
    accentColor: "#7c3aed",
    fontSize: "17px"
  },

  adminPassword: "tanim2024"
};

function getData() {
  try {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Deep merge to ensure new fields from DEFAULT_DATA are present
      return deepMerge(DEFAULT_DATA, parsed);
    }
  } catch (e) {
    console.warn('Failed to parse saved data, using defaults.');
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData(data) {
  try {
    localStorage.setItem('portfolioData', JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Failed to save data:', e);
    return false;
  }
}

function resetData() {
  localStorage.removeItem('portfolioData');
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function deepMerge(target, source) {
  const result = Object.assign({}, target);
  for (const key of Object.keys(source)) {
    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
