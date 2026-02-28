"use client";
import Image from "next/image";

const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

import { useState, useEffect, useRef } from "react";


const data = {
  name: "Prof. Akintola Shehu Latunji",
  title: "Professor of Fisheries",
  institution: "Lagos State University (LASU), Nigeria",
  email: "shehu.akintola@lasu.edu.ng",
  bio: `Prof. Akintola Shehu Latunji is a Professor of Fisheries at Lagos State University and the Dean of the Faculty of Science. A former Head of the Fisheries Department, he serves as Coordinator of the Science Programme and Chairman of the Nomadic Education Research Group. He is a recipient of the Australia Award and a consultant to international bodies including the Food and Agriculture Organisation (FAO), WorldFish, and the Fisheries Committee for West Central Gulf of Guinea (FCWC). His research spans fisheries sustainability, aquaculture, food security, and climate-smart fish preservation.`,
  stats: [
  { label: "Publications", value: "76+" },
  { label: "Citations", value: "1,062+" },
  { label: "Research Grants", value: "20+" },
  { label: "Years Active", value: "25+" },
],
  publications: [
  {
    year: 2022,
    title: "Postharvest Practices in Small-Scale Fisheries",
    authors: "Akintola S.L., Fakoya K.A., et al.",
    journal: "In: Postharvest Technology of Perishable Foods. ScienceDirect.",
    tags: ["Post-Harvest", "Small-Scale Fisheries"],
    link: "https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780128242964000086"
  },
  {
    year: 2022,
    title: "Are Consumers Willing to Pay for Aquaculture Food Safety Certification?",
    authors: "Shikuku K.M., Akintola S.L., Fakoya K.A., et al.",
    journal: "Aquaculture, Vol. 550.",
    tags: ["Aquaculture", "Food Safety"],
    link: "https://doi.org/10.1016/j.dib.2020.105540"
  },
  {
    year: 2021,
    title: "Women in Fisheries and Aquaculture in Nigeria",
    authors: "Akintola S.L., Fakoya K.A.",
    journal: "International Journal of Food Science & Agriculture.",
    tags: ["Small-Scale Fisheries", "Food Safety"],
    link: "https://scholar.google.com/citations?user=QTck3jMAAAAJ"
  },
  {
    year: 2020,
    title: "The Potential of Fish in Nigeria",
    authors: "Bradley B., Akintola S.L., Fakoya K.A., et al.",
    journal: "WorldFish Report, Pp. 1–52.",
    tags: ["Food Safety", "Aquaculture"],
    link: "https://digitalarchive.worldfishcenter.org/handle/20.500.12348/4383"
  },
  {
    year: 2018,
    title: "Inter-Sectorality in the Governance of Inland Fisheries",
    authors: "Song A., Bower S., Akintola S.L., et al.",
    journal: "Ecology and Society, Vol. 23(2), Pp. 1–16.",
    tags: ["Governance", "Small-Scale Fisheries"],
    link: "https://www.ecologyandsociety.org/vol23/iss2/art17/"
  },
  {
    year: 2017,
    title: "Small-Scale Fisheries in the Context of Traditional Post-Harvest Practice and the Quest for Food and Nutritional Security in Nigeria",
    authors: "Akintola S.L. and Fakoya K.A.",
    journal: "Agriculture and Food Security, Vol. 6, Pp. 1–17.",
    tags: ["Post-Harvest", "Food Safety", "Small-Scale Fisheries"],
    link: "https://doi.org/10.1186/s40066-017-0110-z"
  },
  {
    year: 2017,
    title: "Applying the Small-Scale Fisheries Guidelines in Nigeria: Status and Strategies for Badagry Coastal and Creek Fisheries",
    authors: "Akintola S.L., Fakoya K.A., Joseph O.O.",
    journal: "In: The Small-Scale Fisheries Guidelines Global Implementation. MARE Publication.",
    tags: ["Governance", "Small-Scale Fisheries"],
    link: "https://link.springer.com/chapter/10.1007/978-3-319-55074-9_30"
  },
  {
    year: 2015,
    title: "Effects of Smoking and Sun-Drying on Southern Pink Shrimp (Penaeus notialis)",
    authors: "Akintola S.L.",
    journal: "Journal of Food Science and Technology, Vol. 52(5), Pp. 2646–2656.",
    tags: ["Shrimp", "Post-Harvest", "Food Safety"],
    link: "https://doi.org/10.1007/s13197-014-1320-2"
  },
  {
    year: 2013,
    title: "Effects of Hot Smoking and Sun Drying on Giant Tiger Shrimp (Penaeus monodon)",
    authors: "Akintola S.L., Brown A., Bakare A., et al.",
    journal: "Polish Journal of Food and Nutrition Sciences, Vol. 63(4), Pp. 227–237.",
    tags: ["Shrimp", "Post-Harvest"],
    link: "https://doi.org/10.2478/pjfns-2013-0002"
  },
  {
    year: 2013,
    title: "Effects of Ice Storage on Macrobrachium vollenhovenii",
    authors: "Akintola S.L. and Bakare S.",
    journal: "Journal of Fisheries and Aquatic Science, Vol. 8(1), Pp. 213–217.",
    tags: ["Shrimp", "Post-Harvest"],
    link: "https://doi.org/10.3923/jfas.2013.213.217"
  },
  {
    year: 2011,
    title: "An Exposition on Potential Seaweed Resources in West Africa: A Case Study of Nigeria",
    authors: "Fakoya K.A., Akintola S.L., et al.",
    journal: "Journal of Fisheries and Aquatic Science, Vol. 6.",
    tags: ["Aquaculture"],
    link: "https://doi.org/10.3923/jfas.2011.37.47"
  },
  {
    year: 2010,
    title: "Seasonal Distribution and Biology of Genus Macrobrachium from Badagry Creek",
    authors: "Akintola S.L., Anetekhai A.M., Fakoya K.A., Adewolu A.M.",
    journal: "Nigerian Journal of Fisheries, Vol. 7(12), Pp. 16–24.",
    tags: ["Ecology"],
    link: "https://scholar.google.com/citations?user=QTck3jMAAAAJ"
  },
  {
    year: 2009,
    title: "Catch Composition and Seasonal Distribution of Genera Penaeus and Macrobrachium in Badagry Creek",
    authors: "Akintola S.L., Olusoji-Bello O.A., et al.",
    journal: "African Journal of Ecology, Vol. 48(3), Pp. 828–830.",
    tags: ["Ecology", "Shrimp"],
    link: "https://doi.org/10.1111/j.1365-2028.2009.01158.x"
  },
],
  awards: [
    { year: 2022, title: "Project Co-Applicant — Solving FCB (SSHRC, $2.5M)", body: "University of British Columbia, Canada & Lagos State University" },
    { year: 2020, title: "LASRIC Grant Award — Integrated Aquaculture & Decision Support System (₦3M)", body: "Lagos State Science Research & Innovation Council" },
    { year: 2020, title: "LASRIC Grant Award — Mass Production of Improved Broodstock (₦3M)", body: "Lagos State Science Research & Innovation Council" },
    { year: 2020, title: "Project Co-Applicant — Vulnerability to Viability V2V (SSHRC, $2.5M)", body: "University of Waterloo, Canada & Lagos State University" },
    { year: 2016, title: "Australia Awards Short Course — Ocean Governance & Sustainable Fisheries", body: "Rhodes University, South Africa & Australian National University" },
    { year: 2016, title: "Basque Centre for Climate Change Fellowship", body: "International Spring University on Ecosystem Modelling, Bilbao, Spain" },
    { year: 2013, title: "Fisheries Society of the British Isles (FSBI) Grant", body: "6th World Fisheries Congress, Scotland, UK" },
  ],
  courses: [
    { code: "FIS 301", title: "Fisheries Management & Policy", level: "Undergraduate", semester: "Fall", desc: "Principles of sustainable fisheries management, regulatory frameworks, and policy instruments for coastal and inland fisheries." },
    { code: "FIS 402", title: "Aquaculture Systems & Technology", level: "Undergraduate", semester: "Spring", desc: "Design and management of aquaculture systems, species selection, water quality, and production economics." },
    { code: "FIS 501", title: "Fisheries Economics & Value Chain Analysis", level: "Graduate", semester: "Fall", desc: "Economic analysis of fisheries, value chain frameworks, market certification, and sustainability standards in Sub-Saharan Africa." },
    { code: "FIS 601", title: "Climate-Smart Fish Preservation", level: "Graduate", semester: "Spring", desc: "Advanced study of energy-efficient fish preservation technologies, biomass-solar hybrid systems, and climate adaptation strategies." },
  ],
  grants: [
    { title: "Solving the Sustainability Challenges at the Food-Climate-Biodiversity Nexus", agency: "SSHRC", amount: "$2.5M", duration: "2022–Present", type: "Co-Applicant" },
    { title: "Vulnerability to Viability (V2V): Building Strong Small-Scale Fisheries Communities", agency: "SSHRC", amount: "$2.5M", duration: "2020–Present", type: "Co-Applicant" },
    { title: "Support for Farmed Catfish Value Chain Analysis and Action Plan in Nigeria", agency: "EU / FAO", amount: "$95,000", duration: "2020", type: "Project Leader" },
    { title: "Adoption of Hybrid Solar-Biomass Fish Dryer for Sustainable Livelihoods", agency: "Gendered Design STEAM", amount: "CAN$35,000", duration: "2020", type: "Co-Leader" },
    { title: "Demand for Seafood Safety & Sustainable Certification (Phase 2)", agency: "ICLARM", amount: "$26,700", duration: "2020", type: "Project Leader" },
    { title: "Illuminating Hidden Harvests: Small-Scale Fisheries in Nigeria", agency: "FAO", amount: "$19,976", duration: "2019", type: "Project Leader" },
    { title: "Demand for Food Safety & Sustainable Certification (Phase 1)", agency: "ICLARM", amount: "$26,120", duration: "2019", type: "Project Leader" },
    { title: "Wood-fuel Energy in Fish Preservation: Nexus Approach", agency: "TETFUND", amount: "₦1,989,000", duration: "2016", type: "Project Leader" },
  ],
  conferences: [
  { year: 2019, title: "Transdisciplinarity in Fisheries and Ocean Sustainability", event: "Trainers Training Workshop, Cape Town, South Africa", role: "Trainer" },
  { year: 2019, title: "ACE I and ACE Impact Steering Committee Meeting", event: "15th ACE Meeting, Dakar, Senegal", role: "Participant" },
  { year: 2018, title: "Small-Scale Fisheries Guidelines Implementation in Nigeria: Challenges and Prospects", event: "3rd World Small-Scale Fisheries Congress, Chiang Mai, Thailand", role: "Paper Presenter & Session Chair" },
  { year: 2018, title: "Sustainable Small-Scale Fisheries in Nigeria — Adopting Open Transdisciplinarity Paradigm for Transformation", event: "3rd World Small-Scale Fisheries Congress, Chiang Mai, Thailand", role: "Paper Presenter" },
  { year: 2018, title: "Stakeholder Engagement Workshop on National Fisheries and Aquaculture Policies", event: "Federal Department of Fisheries, Lagos", role: "Rapporteur" },
  { year: 2018, title: "West and Central Africa Regional Consultation on SSF Action Plan", event: "FAO Regional Workshop, Dakar, Senegal", role: "Participant" },
  { year: 2015, title: "Traditional Fish Processing and Nutritional Security: An Agendum for National Development", event: "National Summit Colloquium, Olusegun Obasanjo Presidential Library, Abeokuta", role: "Paper Presenter" },
  { year: 2014, title: "Artisanal Fisheries in the Nexus: Traditional Fish Processing and Sustainable Development", event: "Water, Food, Climate and Energy Nexus Conference, University of North Carolina, USA", role: "Paper Presenter" },
  { year: 2013, title: "International Spring University on Ecosystem Modelling", event: "Basque Centre for Climate Change, Bilbao, Spain", role: "Participant" },
  { year: 2012, title: "Evaluation of Chemical and Nutrient Qualities of Smoked African River Prawn", event: "International Conference on Food Safety, Quality and Nutrition, Manchester Metropolitan University, UK", role: "Paper Presenter" },
  { year: 2012, title: "Valuation of Fish Catches Among Waterside Communities Around Badagry Creek Lagos", event: "6th World Fisheries Congress, Scotland, UK", role: "Paper Presenter" },
  { year: 2012, title: "10th International Seafood Summit, Hong Kong", event: "Seafood Summit, Hong Kong", role: "Participant" },
  { year: 2010, title: "Microbiological Changes in Freshwater Prawn (Macrobrachium vollenhovenii) Stored in Ice", event: "Fisheries Society of Nigeria Conference", role: "Paper Presenter" },
  { year: 2008, title: "Three Morphotypes of Macrobrachium macrobrachion: Preliminary Results of Morphological Characters", event: "Pan Africa Fish and Fisheries Association, Ethiopia", role: "Paper Presenter" },
],
positions: {
  academic: [
    { period: "2022–Present",      title: "Dean, Faculty of Science",                         org: "Lagos State University, Ojo" },
    { period: "Aug 2018–Aug 2021", title: "Head of Department, Fisheries",                    org: "Lagos State University, Ojo" },
    { period: "2009–Present",      title: "Professor of Fisheries",                           org: "Department of Fisheries, Lagos State University" },
    { period: "2005–2010",         title: "Senior Lecturer",                                  org: "Department of Fisheries, Lagos State University" },
    { period: "2006–2008",         title: "Lecturer I",                                       org: "Department of Fisheries, Lagos State University" },
    { period: "2002–2004",         title: "Assistant Lecturer",                               org: "Department of Fisheries, Lagos State University" },
  ],
  nonAcademic: [
    { period: "Mar 2020–Present",  title: "Chairman, Local Organising Committee, Faculty of Science International Conference", org: "Lagos State University" },
    { period: "May 2020–Present",  title: "Chairman, Sub-Committee TEAM A, Committee on Sustainability", org: "Lagos State University" },
    { period: "Mar 2019–Present",  title: "Chairman, Faculty of Science Research Committee",  org: "Lagos State University" },
    { period: "Jan 2019–Present",  title: "Chairman, Faculty of Science Newsletter",          org: "Lagos State University" },
    { period: "Mar 2019–Present",  title: "Deputy Director (Science), ACE-ITSE",             org: "Africa Centre of Excellence for Innovative & Transformative STEM Education, LASU" },
    { period: "May 2018–Present",  title: "Chairman, Student Disciplinary and Exam Misconduct Committee", org: "Faculty of Science, Lagos State University" },
    { period: "Feb 2018–Present",  title: "Member, Investigative Panel on Plagiarism Cases", org: "Lagos State University, Ojo" },
    { period: "Oct 2017–Present",  title: "Chairman, Fish Farm Management Committee",        org: "Lagos State University, Ojo" },
    { period: "Nov 2017–Present",  title: "Member, LASU Publishing Committee",               org: "Lagos State University" },
    { period: "Feb 2016–Present",  title: "Member, Quality Assurance Implementation Committee", org: "Lagos State University, Ojo" },
    { period: "Jan 2016–Present",  title: "Member, TETFUND Advisory Committee",             org: "Lagos State University, Ojo" },
    { period: "Mar 2011–May 2015", title: "Coordinator, Post Graduate Programme",            org: "Fisheries Department, Lagos State University, Ojo" },
    { period: "2015–2018",         title: "President, LASU Academic Staff Cooperative and Multipurpose Society", org: "Lagos State University" },
    { period: "2006–2016",         title: "Assistant General Secretary, LASU Muslim Community", org: "Lagos State University" },
    { period: "2020–Present",      title: "National Coordinator",                            org: "Vulnerability to Viability (V2V) Global Partnership" },
    { period: "2015–Present",      title: "National Coordinator",                            org: "Too Big To Ignore (TBTI) — Global SSF Research Network" },
    { period: "Present",           title: "Consultant",                                      org: "Food and Agriculture Organisation (FAO)" },
    { period: "Present",           title: "Regional Consultant",                             org: "Fisheries Committee for West Central Gulf of Guinea (FCWC)" },
  ],
},
  team: [
    { name: "Fisheries Department", role: "Faculty", area: "Aquaculture, fisheries management, marine biology", initials: "FD" },
    { name: "Nomadic Education Research Group", role: "Research Group", area: "Chairman: Prof. Akintola Shehu Latunji", initials: "NE" },
    { name: "Science Programme Centre", role: "Coordinator", area: "Interdisciplinary science research coordination", initials: "SP" },
    { name: "FAO Consultancy", role: "International Consultant", area: "Fisheries policy and value chain analysis", initials: "FA" },
    { name: "WorldFish / ICLARM", role: "Research Partner", area: "Seafood safety and certification standards", initials: "WF" },
    { name: "FCWC Partnership", role: "Regional Consultant", area: "Fisheries Committee for West Central Gulf of Guinea", initials: "FC" },
  ],
};

const allTags = [...new Set(data.publications.flatMap(p => p.tags))];

export default function ProfessorPortfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedTag, setSelectedTag] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const sectionRefs = useRef({});

  useScrollReveal();

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const registerRef = id => el => { sectionRefs.current[id] = el; };

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const filteredPubs = selectedTag === "All"
    ? data.publications
    : data.publications.filter(p => p.tags.includes(selectedTag));

  const navItems = ["about", "publications", "awards", "positions", "teaching", "grants", "conferences", "supervision", "news", "team", "contact"];

  const handleSubmit = async () => {
  if (!formData.name || !formData.email || !formData.message) return;
  setFormStatus("sending");
  try {
    await import("@emailjs/browser").then(({ default: emailjs }) => {
      return emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "YOUR_PUBLIC_KEY"
      );
    });
    setFormStatus("success");
    setFormData({ name: "", email: "", message: "" });
  } catch {
    setFormStatus("error");
  }
};
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        /* POSITIONS */
.positions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
.positions-group-title {
  font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 1.5rem; padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--gold);
}
.position-item {
  display: grid; grid-template-columns: 110px 1fr;
  gap: 1.25rem; padding: 1.25rem 0;
  border-bottom: 1px solid var(--cream-dark);
}
.position-period {
  font-size: 0.75rem; color: var(--gold);
  font-weight: 500; line-height: 1.4;
  padding-top: 0.1rem;
}
.position-title {
  font-size: 0.9rem; font-weight: 500;
  color: var(--navy); line-height: 1.4; margin-bottom: 0.2rem;
}
.position-org {
  font-size: 0.78rem; color: var(--muted);
  font-style: italic; line-height: 1.4;
}
@media (max-width: 900px) {
  .positions-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .position-item { grid-template-columns: 90px 1fr; }
}

        /* CONTACT FORM */
.contact-form { display: flex; flex-direction: column; gap: 1rem; }
.form-input {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(201,168,76,0.2);
  padding: 0.85rem 1rem;
  color: var(--cream);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}
.form-input:focus { border-color: var(--gold); }
.form-input::placeholder { color: rgba(245,240,232,0.3); }
textarea.form-input { resize: vertical; min-height: 120px; }
.form-submit {
  background: var(--gold); color: var(--navy);
  border: none; cursor: pointer;
  padding: 0.85rem 2rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500; font-size: 0.8rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  transition: background 0.2s, transform 0.2s;
  align-self: flex-start;
}
.form-submit:hover { background: var(--gold-light); transform: translateY(-2px); }
.form-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
.form-success { color: #68d391; font-size: 0.85rem; margin-top: 0.5rem; }
.form-error { color: #fc8181; font-size: 0.85rem; margin-top: 0.5rem; }

        /* SCROLL REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: none;
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
.reveal-delay-5 { transition-delay: 0.5s; }

/* CARD HOVER POLISH */
.pub-item {
  transition: background 0.25s, padding-left 0.25s;
}
.pub-item:hover {
  background: rgba(201,168,76,0.04);
  padding-left: 0.75rem;
}

/* FILTER ANIMATION */
.pub-list {
  transition: opacity 0.2s;
}

/* GOLD UNDERLINE NAV ANIMATION */
.nav-links button {
  position: relative;
}
.nav-links button::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--gold);
  transition: width 0.3s ease;
}
.nav-links button:hover::after,
.nav-links button.active::after {
  width: 100%;
}

        :root {
          --navy: #0d1b2a;
          --navy-mid: #162032;
          --navy-light: #1e2f42;
          --gold: #c9a84c;
          --gold-light: #e8c97a;
          --cream: #f5f0e8;
          --cream-dark: #e8e0d0;
          --text: #1a1a2e;
          --muted: #6b7280;
          --border: rgba(201,168,76,0.2);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--text);
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(13,27,42,0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2.5rem;
          height: 64px;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          color: var(--gold);
          font-size: 1.1rem;
          letter-spacing: 0.02em;
          cursor: pointer;
        }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          color: rgba(245,240,232,0.6);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
          padding: 0.25rem 0;
          border-bottom: 1px solid transparent;
          transition: all 0.2s;
        }
        .nav-links button:hover, .nav-links button.active {
          color: var(--gold);
          border-bottom-color: var(--gold);
        }
        .hamburger {
          display: none;
          background: none; border: none; cursor: pointer;
          color: var(--cream); font-size: 1.4rem;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: var(--navy);
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -20%; right: -10%;
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-text {
          display: flex; flex-direction: column; justify-content: center;
          padding: 8rem 4rem 5rem 5rem;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .hero-text.visible { opacity: 1; transform: none; }
        .hero-eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .hero-eyebrow::before {
          content: '';
          display: block; width: 2rem; height: 1px; background: var(--gold);
        }
        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 700;
          color: var(--cream);
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .hero-title {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(245,240,232,0.65);
          margin-bottom: 0.4rem;
          line-height: 1.5;
        }
        .hero-inst {
          font-size: 0.85rem;
          color: var(--gold);
          margin-bottom: 2.5rem;
          font-style: italic;
          font-family: 'Playfair Display', serif;
        }
        .hero-cta {
          display: flex; gap: 1rem; flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--gold);
          color: var(--navy);
          border: none; cursor: pointer;
          padding: 0.75rem 1.8rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
        .btn-ghost {
          background: transparent;
          color: var(--cream);
          border: 1px solid rgba(245,240,232,0.3); cursor: pointer;
          padding: 0.75rem 1.8rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

        .hero-visual {
          display: flex; align-items: flex-end; justify-content: center;
          padding-bottom: 0;
          position: relative;
          opacity: 0; transform: translateX(30px);
          transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
        }
          .hero-photo-wrap {
  width: 220px;
  height: 280px;
  margin-top: 0;
  align-self: center;
}
        .hero-visual.visible { opacity: 1; transform: none; }
        .hero-photo-wrap {
          width: 340px; height: 420px;
          background: var(--navy-light);
          border-top: 3px solid var(--gold);
          position: relative;
          overflow: hidden;
          margin-top: 80px;
          align-self: center;
        }
        .hero-photo-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 0.75rem;
          color: rgba(201,168,76,0.4);
        }
        .hero-photo-placeholder svg { width: 80px; height: 80px; opacity: 0.3; }
        .hero-photo-placeholder span { font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; }

        /* STATS BAR */
        .stats-bar {
          background: var(--navy-mid);
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: center;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 900px; width: 100%;
        }
        .stat-item {
          padding: 2rem 2.5rem;
          text-align: center;
          border-right: 1px solid var(--border);
        }
        .stat-item:last-child { border-right: none; }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--gold);
          display: block;
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .stat-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.5);
        }

        /* SECTIONS */
        section {
          padding: 7rem 5vw;
          max-width: 1200px; margin: 0 auto;
        }
        .section-label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.75rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .section-label::before {
          content: ''; display: block; width: 1.5rem; height: 1px; background: var(--gold);
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: var(--navy);
          line-height: 1.2;
          margin-bottom: 3.5rem;
        }
        .section-divider {
          width: 100%; height: 1px;
          background: linear-gradient(to right, var(--gold), transparent);
          margin-bottom: 3.5rem;
        }

        /* ABOUT */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
          align-items: start;
        }
        .about-bio {
          font-size: 1.05rem; line-height: 1.85;
          color: #2d3748; font-weight: 300;
        }
        .about-bio em {
          font-style: italic; color: var(--navy);
          font-family: 'Playfair Display', serif; font-weight: 400;
        }
        .about-highlights { display: flex; flex-direction: column; gap: 1.5rem; }
        .highlight-item {
          padding: 1.25rem 1.5rem;
          border-left: 2px solid var(--gold);
          background: var(--cream-dark);
        }
        .highlight-item strong {
          display: block; font-weight: 500; color: var(--navy);
          font-size: 0.85rem; letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .highlight-item span { font-size: 0.85rem; color: var(--muted); }

        /* PUBLICATIONS */
        .pub-filters {
          display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2.5rem;
        }
        .filter-btn {
          padding: 0.35rem 1rem;
          border: 1px solid var(--cream-dark);
          background: transparent; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem; letter-spacing: 0.08em;
          color: var(--muted);
          transition: all 0.2s;
        }
        .filter-btn.active, .filter-btn:hover {
          border-color: var(--gold); color: var(--gold);
          background: rgba(201,168,76,0.05);
        }
        .pub-list { display: flex; flex-direction: column; gap: 0; }
        .pub-item {
          display: grid; grid-template-columns: 80px 1fr;
          gap: 2rem; padding: 1.75rem 0;
          border-bottom: 1px solid var(--cream-dark);
          transition: background 0.2s;
          cursor: default;
        }
        .pub-item:hover { background: rgba(201,168,76,0.03); }
        .pub-year {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem; font-weight: 600;
          color: var(--cream-dark); padding-top: 0.2rem;
          line-height: 1;
        }
        .pub-content {}
        .pub-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem; font-weight: 600;
          color: var(--navy); margin-bottom: 0.3rem; line-height: 1.4;
        }
        .pub-journal {
          font-size: 0.8rem; color: var(--muted);
          font-style: italic; margin-bottom: 0.6rem;
        }
        .pub-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .pub-tag {
          font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border: 1px solid var(--border);
          color: var(--gold);
          background: rgba(201,168,76,0.05);
        }

        /* AWARDS */
        .awards-timeline { display: flex; flex-direction: column; gap: 0; }
        .award-item {
          display: grid; grid-template-columns: 90px 1fr;
          gap: 2rem; padding: 2rem 0;
          border-bottom: 1px solid var(--cream-dark);
          position: relative;
        }
        .award-year {
          font-size: 0.8rem; font-weight: 500;
          color: var(--gold); letter-spacing: 0.1em;
          padding-top: 0.2rem;
        }
        .award-dot {
          position: absolute; left: 90px; top: 50%;
          width: 8px; height: 8px;
          background: var(--gold);
          transform: translate(-50%, -50%);
        }
        .award-line {
          position: absolute; left: 90px; top: 0; bottom: 0;
          width: 1px; background: var(--border);
        }
        .award-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem; font-weight: 600;
          color: var(--navy); margin-bottom: 0.3rem;
        }
        .award-body {
          font-size: 0.8rem; color: var(--muted); font-style: italic;
        }

        /* COURSES */
        .courses-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .course-card {
          border: 1px solid var(--cream-dark);
          padding: 2rem; background: white;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .course-card:hover {
          border-color: var(--gold);
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(13,27,42,0.08);
        }
        .course-meta { display: flex; gap: 0.75rem; margin-bottom: 1rem; }
        .badge {
          font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.2rem 0.6rem;
        }
        .badge-grad { background: rgba(201,168,76,0.1); color: var(--gold); }
        .badge-undergrad { background: rgba(13,27,42,0.07); color: var(--navy); }
        .badge-sem { background: transparent; border: 1px solid var(--cream-dark); color: var(--muted); }
        .course-code {
          font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 0.5rem;
        }
        .course-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem; font-weight: 600; color: var(--navy);
          margin-bottom: 0.75rem; line-height: 1.3;
        }
        .course-desc { font-size: 0.85rem; line-height: 1.7; color: #4a5568; font-weight: 300; }

        /* TEAM */
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .team-card {
          padding: 2rem 1.75rem;
          background: white;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .team-card:hover {
          border-bottom-color: var(--gold);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(13,27,42,0.07);
        }
        .team-avatar {
          width: 52px; height: 52px;
          background: var(--navy);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem; color: var(--gold);
          margin-bottom: 1.25rem;
          font-style: italic;
        }
        .team-name {
          font-weight: 500; font-size: 0.95rem;
          color: var(--navy); margin-bottom: 0.2rem;
        }
        .team-role {
          font-size: 0.75rem; color: var(--gold);
          letter-spacing: 0.06em; margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .team-area { font-size: 0.8rem; color: var(--muted); font-style: italic; line-height: 1.5; }

        /* CONTACT */
        .contact-wrap {
          background: var(--navy);
          margin: 0 -5vw; padding: 7rem 5vw;
        }
        .contact-inner { max-width: 1200px; margin: 0 auto; }
        .contact-inner .section-title { color: var(--cream); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
        .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-row {
          display: flex; align-items: flex-start; gap: 1rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .contact-row-icon {
          width: 36px; height: 36px;
          background: rgba(201,168,76,0.1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: var(--gold); font-size: 1rem;
        }
        .contact-row-label {
          font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(245,240,232,0.4); margin-bottom: 0.25rem;
        }
        .contact-row-value {
          font-size: 0.9rem; color: var(--cream);
        }
        .contact-note {
          font-size: 0.9rem; line-height: 1.8; color: rgba(245,240,232,0.6);
          font-weight: 300;
        }

        /* FOOTER */
        footer {
          background: #070e17;
          text-align: center;
          padding: 2rem;
          font-size: 0.75rem;
          color: rgba(245,240,232,0.25);
          letter-spacing: 0.08em;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .mobile-menu {
            position: fixed; top: 64px; left: 0; right: 0; z-index: 99;
            background: var(--navy); border-bottom: 1px solid var(--border);
            display: flex; flex-direction: column; gap: 0;
          }
          .mobile-menu button {
            background: none; border: none; border-bottom: 1px solid var(--border);
            padding: 1rem 2rem; text-align: left; cursor: pointer;
            color: var(--cream); font-family: 'DM Sans', sans-serif;
            font-size: 0.9rem;
          }
          .hero { grid-template-columns: 1fr; }
          .hero-visual { 
  display: flex;
  justify-content: center;
  padding: 0 2rem 3rem;
}
          .hero-text { padding: 7rem 2rem 2rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .about-grid, .contact-grid, .courses-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          section { padding: 4rem 1.5rem; }
        }

        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
        }
    /* GRANTS */
  .grants-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .grant-card {
  background: white;
  padding: 2rem 1.75rem;
  border-top: 3px solid transparent;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  cursor: default;
  }
  .grant-card:hover {
  border-top-color: var(--gold);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(13,27,42,0.07);
  }
.grant-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
.grant-agency {
  font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  background: var(--navy); color: var(--gold);
  font-weight: 500;
}
.grant-type {
  font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--muted); padding-top: 0.25rem;
}
.grant-title {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem; font-weight: 600;
  color: var(--navy); line-height: 1.4; margin-bottom: 1.25rem;
}
.grant-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--cream-dark); }
.grant-amount {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem; font-weight: 700; color: var(--gold);
}
.grant-duration { font-size: 0.78rem; color: var(--muted); }

@media (max-width: 900px) { .grants-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .grants-grid { grid-template-columns: 1fr; } }
/* CONFERENCES */
.conf-list { display: flex; flex-direction: column; }
.conf-item {
  display: grid; grid-template-columns: 80px 1fr auto;
  gap: 1.5rem; padding: 1.5rem 0;
  border-bottom: 1px solid var(--cream-dark);
  align-items: start;
}
.conf-item:hover { background: rgba(201,168,76,0.03); }
.conf-role {
  font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0.2rem 0.6rem; background: rgba(201,168,76,0.1);
  color: var(--gold); white-space: nowrap; height: fit-content;
}
.conf-title { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 600; color: var(--navy); margin-bottom: 0.3rem; line-height: 1.4; }
.conf-event { font-size: 0.8rem; color: var(--muted); font-style: italic; }

/* SUPERVISION */
.supervision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.supervision-group {}
.supervision-group-title {
  font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 1rem; padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}
.supervision-item {
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--cream-dark);
}
.supervision-topic { font-size: 0.88rem; color: var(--navy); font-weight: 500; line-height: 1.4; margin-bottom: 0.2rem; }
.supervision-meta { font-size: 0.78rem; color: var(--muted); font-style: italic; }

/* NEWS */
.news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.news-card {
  background: white; padding: 1.75rem;
  border-top: 3px solid transparent;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.news-card:hover { border-top-color: var(--gold); transform: translateY(-3px); box-shadow: 0 10px 30px rgba(13,27,42,0.07); }
.news-date { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.75rem; }
.news-title { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 600; color: var(--navy); line-height: 1.4; margin-bottom: 0.5rem; }
.news-body { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

@media (max-width: 900px) {
  .conf-item { grid-template-columns: 60px 1fr; }
  .conf-role { display: none; }
  .supervision-grid { grid-template-columns: 1fr; }
  .news-grid { grid-template-columns: 1fr; }
}
      `}</style>

      {/* NAV */}
      <nav>
        <span className="nav-logo" onClick={() => scrollTo("about")}>S.L Akintola</span>
        <div className="nav-links">
          {navItems.map(id => (
            <button key={id} className={activeSection === id ? "active" : ""} onClick={() => scrollTo(id)}>
              {id}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)}>☰</button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(id => (
            <button key={id} onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <div className="hero">
        <div className={`hero-text ${visible ? "visible" : ""}`}>
          <span className="hero-eyebrow">Academic Portfolio</span>
          <h1 className="hero-name">{data.name}</h1>
          <p className="hero-title">{data.title}</p>
          <p className="hero-inst">{data.institution}</p>
          <div className="hero-cta">
  <button className="btn-primary" onClick={() => scrollTo("publications")}>View Research</button>
  <button className="btn-ghost" onClick={() => scrollTo("contact")}>Get in Touch</button>
  <a href="/prof-sheu-cv.pdf" download style={{ textDecoration: "none" }}>
    <button className="btn-ghost">Download CV</button>
  </a>
</div>
        </div>
  <div className={`hero-visual ${visible ? "visible" : ""}`}>
    <div className="hero-photo-wrap">
      <Image
  src="/prof-sheu.jpg"
  alt="Prof. Akintola Shehu Latunji"
  fill
  style={{ objectFit: "cover", objectPosition: "center top" }}
  priority
/>
    </div>
  </div>
</div>

{/* STATS */}
      <div className="stats-bar">
        <div className="stats-grid">
          {data.stats.map((s, i) => (
  <div key={s.label} className={`stat-item reveal reveal-delay-${i + 1}`}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" ref={registerRef("about")}>
        <div className="section-label">About</div>
        <h2 className="section-title">Advancing Fisheries<br /><em>for a Sustainable Future</em></h2>
        <div className="section-divider" />
        <div className="about-grid">
  <p className="about-bio reveal">{data.bio}</p>
  <div className="about-highlights reveal reveal-delay-2">
  <div className="highlight-item">
    <strong>Research Focus</strong>
    <span>Fisheries ecology & governance, aquaculture, food security, climate-smart fish preservation, and small-scale fisheries sustainability</span>
  </div>
  <div className="highlight-item">
    <strong>Current Appointment</strong>
    <span>Professor of Fisheries & Dean, Faculty of Science, Lagos State University</span>
  </div>
  <div className="highlight-item">
    <strong>Education</strong>
    <span>Ph.D. Fisheries, LASU · MBA Marketing, LAUTECH · B. Agric Tech, FUT Akure</span>
  </div>
  <div className="highlight-item">
    <strong>Affiliations</strong>
    <span>FAO Consultant · WorldFish Partner · FCWC Consultant · Too Big To Ignore Member</span>
  </div>
</div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" ref={registerRef("publications")} style={{ background: "white", maxWidth: "100%", padding: "7rem 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-label">Scholarship</div>
          <h2 className="section-title">Selected<br /><em>Publications</em></h2>
          <div className="section-divider" />
          <div className="pub-filters">
            {["All", ...allTags].map(tag => (
              <button key={tag} className={`filter-btn ${selectedTag === tag ? "active" : ""}`} onClick={() => setSelectedTag(tag)}>
                {tag}
              </button>
            ))}
          </div>
          <div className="pub-list">
            {filteredPubs.map((p, i) => (
              <div key={i} className="pub-item reveal">
                <div className="pub-year">{p.year}</div>
                <div className="pub-content">
                  {p.link ? (
  <a href={p.link} target="_blank" rel="noreferrer" className="pub-title-link">
    <div className="pub-title">{p.title}</div>
  </a>
) : (
  <div className="pub-title">{p.title}</div>
)}
                  <div className="pub-journal">{p.journal}</div>
                  <div className="pub-tags">
                    {p.tags.map(t => <span key={t} className="pub-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" ref={registerRef("awards")}>
        <div className="section-label">Recognition</div>
        <h2 className="section-title">Honors &<br /><em>Awards</em></h2>
        <div className="section-divider" />
        <div className="awards-timeline">
          {data.awards.map((a, i) => (
            <div key={i} className="award-item reveal">
              <div className="award-line" />
              <div className="award-dot" />
              <div className="award-year">{a.year}</div>
              <div>
                <div className="award-title">{a.title}</div>
                <div className="award-body">{a.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHING */}
      <section id="teaching" ref={registerRef("teaching")} style={{ background: "white", maxWidth: "100%", padding: "7rem 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-label">Education</div>
          <h2 className="section-title">Teaching &<br /><em>Courses</em></h2>
          <div className="section-divider" />
          <div className="courses-grid">
            {data.courses.map((c, i) => (
              <div key={i} className="course-card reveal">
                <div className="course-meta">
                  <span className={`badge ${c.level === "Graduate" ? "badge-grad" : "badge-undergrad"}`}>{c.level}</span>
                  <span className="badge badge-sem">{c.semester}</span>
                </div>
                <div className="course-code">{c.code}</div>
                <div className="course-title">{c.title}</div>
                <div className="course-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* POSITIONS */}
<section id="positions" ref={registerRef("positions")} style={{ background: "white", maxWidth: "100%", padding: "7rem 5vw" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <div className="section-label">Career</div>
    <h2 className="section-title">Positions<br /><em>Held</em></h2>
    <div className="section-divider" />
    <div className="positions-grid">
      <div className="reveal">
        <div className="positions-group-title">Academic Positions</div>
        {data.positions.academic.map((p, i) => (
          <div key={i} className="position-item">
            <div className="position-period">{p.period}</div>
            <div>
              <div className="position-title">{p.title}</div>
              <div className="position-org">{p.org}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="reveal reveal-delay-2">
        <div className="positions-group-title">Administrative & Non-Academic</div>
        {data.positions.nonAcademic.map((p, i) => (
          <div key={i} className="position-item">
            <div className="position-period">{p.period}</div>
            <div>
              <div className="position-title">{p.title}</div>
              <div className="position-org">{p.org}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CONFERENCES */}
<section id="conferences" ref={registerRef("conferences")} style={{ background: "white", maxWidth: "100%", padding: "7rem 5vw" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <div className="section-label">Presentations</div>
    <h2 className="section-title">Conference<br /><em>Presentations</em></h2>
    <div className="section-divider" />
    <div className="conf-list">
      {data.conferences.map((c, i) => (
        <div key={i} className="conf-item reveal">
          <div className="pub-year">{c.year}</div>
          <div>
            <div className="conf-title">{c.title}</div>
            <div className="conf-event">{c.event}</div>
          </div>
          <span className="conf-role">{c.role}</span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SUPERVISION */}
<section id="supervision" ref={registerRef("supervision")}>
  <div className="section-label">Mentorship</div>
  <h2 className="section-title">Student<br /><em>Supervision</em></h2>
  <div className="section-divider" />
  <div className="supervision-grid">
    <div className="supervision-group reveal">
      <div className="supervision-group-title">PhD Theses</div>
      {[
        { topic: "Assessment of Value Chain of the Small-Scale Fisheries in Lagos State, Nigeria", meta: "Lagos State University" },
        { topic: "Mapping and Distribution of Fuelwood Types and Evaluation of PAH in Smoked Fish in Nigeria", meta: "Lagos State University" },
        { topic: "Risk Assessments and Control in Smoked Fish Products by Small/Medium Enterprise for Domestic and Export Markets", meta: "Lagos State University" },
      ].map((s, i) => (
        <div key={i} className="supervision-item">
          <div className="supervision-topic">{s.topic}</div>
          <div className="supervision-meta">{s.meta}</div>
        </div>
      ))}
    </div>
    <div className="supervision-group reveal reveal-delay-2">
      <div className="supervision-group-title">MSc Dissertations</div>
      {[
        { topic: "Effects of Hot Smoking and Sun Drying on Nutritional Composition of Giant Tiger Shrimp (Penaeus monodon)", meta: "LASU · 2013" },
        { topic: "Effects of Smoking and Sun-Drying on Proximate, Fatty and Amino Acids of Southern Pink Shrimp (Penaeus notialis)", meta: "LASU · 2012" },
        { topic: "Effects of Ice Storage on the Biochemical Composition of Macrobrachium vollenhovenii", meta: "LASU · 2010" },
        { topic: "Relative Abundance and Distribution of Bacteria in the Gut of Macrobrachium vollenhovenii", meta: "LASU · 2009" },
        { topic: "Physico-Chemical and Metal Concentration of Tidal System (Odo-Igbala), Ojo Jetty, Lagos", meta: "LASU · 2012" },
        { topic: "Physico-Chemical and Metal Concentration of Ojo Lagoon, Lagos", meta: "LASU · 2011" },
      ].map((s, i) => (
        <div key={i} className="supervision-item">
          <div className="supervision-topic">{s.topic}</div>
          <div className="supervision-meta">{s.meta}</div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* NEWS */}
<section id="news" ref={registerRef("news")} style={{ background: "white", maxWidth: "100%", padding: "7rem 5vw" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <div className="section-label">Latest</div>
    <h2 className="section-title">News &<br /><em>Updates</em></h2>
    <div className="section-divider" />
    <div className="news-grid">
      {[
  { date: "2022", title: "Solving FCB Project Launched", body: "Prof. Akintola joins the Solving Food-Climate-Biodiversity Nexus project funded by SSHRC ($2.5M), a collaboration with the University of British Columbia, Canada.", link: "https://www.youtube.com/watch?v=pJU8JUkX7EU", linkLabel: "Watch Video" },
  { date: "2022", title: "Dean, Faculty of Science", body: "Prof. Akintola Shehu Latunji is appointed Dean of the Faculty of Science, Lagos State University, adding to his distinguished administrative record.", link: null },
  { date: "2022", title: "Postharvest Practices Chapter Published", body: "New book chapter on Postharvest Practices in Small-Scale Fisheries published as part of a major FAO/WorldFish global fisheries report.", link: null },
  { date: "2021", title: "Women in Fisheries Paper Published", body: "New publication on Women in Fisheries and Aquaculture in Nigeria in the International Journal of Food Science and Agriculture.", link: null },
  { date: "2020", title: "Multiple LASRIC Grants Awarded", body: "Prof. Akintola secures two LASRIC grants (₦3M each) for aquaculture and broodstock research, strengthening fisheries research capacity at LASU.", link: null },
  { date: "2019", title: "FAO Illuminating Hidden Harvests", body: "Appointed lead consultant for the FAO Illuminating Hidden Harvests Nigeria Case Study, contributing to a global report spanning 50+ countries.", link: "https://worldfishcenter.org/blog/illuminating-hidden-harvests-country-case-study-author-shehu-latunji-akintola", linkLabel: "Read More" },
].map((n, i) => (
  <div key={i} className="news-card reveal">
    <div className="news-date">{n.date}</div>
    <div className="news-title">{n.title}</div>
    <div className="news-body">{n.body}</div>
    {n.link && (
      <a href={n.link} target="_blank" rel="noreferrer" style={{
        display: "inline-block",
        marginTop: "1rem",
        fontSize: "0.75rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--gold)",
        textDecoration: "none",
        borderBottom: "1px solid var(--gold)",
        paddingBottom: "2px",
      }}>
        {n.linkLabel} →
      </a>
    )}
  </div>
))}
    </div>
  </div>
</section>      

      {/* TEAM */}
      <section id="team" ref={registerRef("team")}>
        <div className="section-label">Laboratory</div>
        <h2 className="section-title">Research<br /><em>Team</em></h2>
        <div className="section-divider" />
        <div className="team-grid">
          {data.team.map((m, i) => (
            <div key={i} className="team-card reveal">
              <div className="team-avatar">{m.initials}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-area">{m.area}</div>
            </div>
          ))}
        </div>
      </section>
    
    {/* GRANTS */}
<section id="grants" ref={registerRef("grants")} style={{ background: "white", maxWidth: "100%", padding: "7rem 5vw" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <div className="section-label">Funding</div>
    <h2 className="section-title">Research<br /><em>Grants</em></h2>
    <div className="section-divider" />
    <div className="grants-grid">
      {data.grants.map((g, i) => (
        <div key={i} className="grant-card reveal">
          <div className="grant-header">
            <span className="grant-agency">{g.agency}</span>
            <span className="grant-type">{g.type}</span>
          </div>
          <div className="grant-title">{g.title}</div>
          <div className="grant-footer">
            <span className="grant-amount">{g.amount}</span>
            <span className="grant-duration">{g.duration}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <div id="contact" ref={registerRef("contact")}>
        <div className="contact-wrap">
          <div className="contact-inner">
            <div className="section-label" style={{ color: "rgba(201,168,76,0.7)" }}>Connect</div>
            <h2 className="section-title">Get in<br /><em style={{ color: "var(--gold)" }}>Touch</em></h2>
            <div className="section-divider" />
            <div className="contact-grid">
              <div className="contact-info">
                {[
  { icon: "✉", label: "Email", value: "shehu.akintola@lasu.edu.ng", href: "mailto:shehu.akintola@lasu.edu.ng" },
  { icon: "🏛", label: "Office", value: "Dean's Office, Faculty of Science, Lagos State University", href: null },
  { icon: "🕐", label: "Visiting Hours", value: "Mon 12–2pm · Wed 12–2pm · Fri 2–4pm", href: null },
  { icon: "🎓", label: "Google Scholar", value: "scholar.google.com/citations?user=QTck3jMAAAAJ", href: "https://scholar.google.com/citations?user=QTck3jMAAAAJ&hl=en" },
  { icon: "🔬", label: "ORCID", value: "orcid.org/0000-0002-7941-5609", href: "https://orcid.org/0000-0002-7941-5609" },
].map(r => (
  <div key={r.label} className="contact-row">
    <div className="contact-row-icon">{r.icon}</div>
    <div>
      <div className="contact-row-label">{r.label}</div>
      {r.href
        ? <a href={r.href} target="_blank" rel="noreferrer" style={{ color: "var(--gold)", fontSize: "0.9rem", wordBreak: "break-all" }}>{r.value}</a>
        : <div className="contact-row-value">{r.value}</div>
      }
    </div>
  </div>
))}
              </div>
              <div>
  <p className="contact-note" style={{ marginBottom: "1.5rem" }}>
    Prof. Akintola welcomes inquiries from prospective graduate students, researchers, and international collaborators working in fisheries, aquaculture, food security, and climate-smart fisheries management.
  </p>
  <div className="contact-form">
    <input
      className="form-input"
      placeholder="Your Name"
      value={formData.name}
      onChange={e => setFormData({...formData, name: e.target.value})}
    />
    <input
      className="form-input"
      placeholder="Your Email"
      type="email"
      value={formData.email}
      onChange={e => setFormData({...formData, email: e.target.value})}
    />
    <textarea
      className="form-input"
      placeholder="Your Message"
      value={formData.message}
      onChange={e => setFormData({...formData, message: e.target.value})}
    />
    <button
      className="form-submit"
      onClick={handleSubmit}
      disabled={formStatus === "sending"}
    >
      {formStatus === "sending" ? "Sending..." : "Send Message"}
    </button>
    {formStatus === "success" && <p className="form-success">✓ Message sent successfully!</p>}
    {formStatus === "error" && <p className="form-error">✗ Something went wrong. Please try again.</p>}
  </div>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
  <div>© {new Date().getFullYear()} Prof. Akintola Shehu Latunji · Lagos State University · All rights reserved</div>
  <div>Built by <a href="https://akeenalee.com" target="_blank" rel="noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>©akeenalee</a></div>
    </footer>
    </>
  );
}
