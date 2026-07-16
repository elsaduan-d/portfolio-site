const projects = [
  {
    title: "Teacher Reflection Lab",
    meta: "AI Product Designer · MIT EdTech Studio · Feb 2026 - May 2026",
    category: "product",
    badge: "Featured",
    description:
      "An AI-supported reflection platform for novice teachers, built around Big Five-based teaching personality assessment, classroom scenarios, reflective feedback, and professional growth tracking.",
    highlights: [
      "Defined product logic for intake, scenario response, reflection, and progress tracking.",
      "Explored how LLM support can deepen teacher reflection without replacing teacher judgment.",
      "Extended the concept through pitch, design report, and pilot-planning artifacts."
    ],
    tags: ["AI reflection", "teacher learning", "product logic", "pilot design"],
    links: [
      { label: "Pitch Deck", href: "./assets/docs/teacher-reflection-lab-pitch-deck.pdf" },
      { label: "Design Report 2.0", href: "./assets/docs/teacher-reflection-lab-2-design-report.pdf" },
      { label: "Group Report", href: "./assets/docs/teacher-reflection-lab-group-design-report.pdf" },
      { label: "Pilot Charter", href: "./assets/docs/teacher-reflection-lab-pilot-charter.docx" },
      { label: "Idea Pitch 3.0", href: "./assets/docs/teacher-reflection-lab-3-idea-pitch.pdf" }
    ]
  },
  {
    title: "Word Cross: Wordy",
    meta: "Vibe-Coded Learning Game Designer · Harvard Transforming Education Through Emerging Technologies · Mar 2026 - Apr 2026",
    category: "game",
    badge: "Interactive",
    description:
      "A crossword-style English learning game designed for multimodal vocabulary practice through audio, translation, images, clue interpretation, and repeated low-stakes recall.",
    highlights: [
      "Designed interactions for recall, clue interpretation, and multimodal practice.",
      "Framed the experience around repetition without high-pressure assessment.",
      "Archived in the Transforming Education project deck."
    ],
    tags: ["learning game", "multimodal", "vocabulary", "interaction design"],
    links: [{ label: "Project Deck", href: "./assets/docs/transform-education-projects-deck.pptx" }]
  },
  {
    title: "Table Craft",
    meta: "Designer · Harvard Vibe Coding · Oct 2025 - Nov 2025",
    category: "product",
    badge: "LLM Tool",
    description:
      "An LLM-supported data visualization tool that recognizes data categories and converts datasets into user-facing visuals such as bar charts, pie charts, and skills charts.",
    highlights: [
      "Mapped natural-language prompts to visualization choices.",
      "Iterated on prompting strategies to improve reliability of chart generation.",
      "Focused on making raw datasets easier for users to interpret quickly."
    ],
    tags: ["LLM APIs", "data viz", "prompt design", "frontend concept"],
    links: [{ label: "Vibe Coding Deck", href: "./assets/docs/vibe-coding-projects-deck.pptx" }]
  },
  {
    title: "EdTech Analyzer",
    meta: "Designer · Harvard Vibe Coding · Nov 2025 - Dec 2025",
    category: "product",
    badge: "Decision Support",
    description:
      "A decision-support website that helps users evaluate education-technology tools through structured reports and interactive criteria for more evidence-based adoption decisions.",
    highlights: [
      "Turned evaluation criteria into a more approachable website experience.",
      "Used interactive structure to guide users through tool analysis instead of static comparison.",
      "Documented alongside other Vibe Coding projects in the course deck."
    ],
    tags: ["edtech", "evaluation", "web product", "decision support"],
    links: [{ label: "Vibe Coding Deck", href: "./assets/docs/vibe-coding-projects-deck.pptx" }]
  },
  {
    title: "Redesigning How People Learn for Parents",
    meta: "Learning Designer · Harvard Teaching and Learning Lab Practicum · Sep 2025 - Dec 2025",
    category: "product",
    badge: "Learning Design",
    description:
      "A redesign project for parent learners that translated needs analysis, backwards design, and ADDIE-informed thinking into more accessible online learning experiences.",
    highlights: [
      "Developed parent personas and learner journeys.",
      "Translated stakeholder feedback into audience-specific online activities.",
      "Applied learning-design frameworks to a real user audience instead of a generic course format."
    ],
    tags: ["personas", "learner journeys", "ADDIE", "backwards design"],
    links: []
  },
  {
    title: "Algorithm-based Tutoring: Gauth and Doubao-Aixue",
    meta: "Comparative AI Product Researcher and Analyst · MIT Learning, Media, and Technology · Sep 2025 - Dec 2025",
    category: "research",
    badge: "Comparative Analysis",
    description:
      "A comparative product analysis of Gauth and Doubao-Aixue across U.S. and Chinese education markets, focusing on how policy, positioning, expectations, and market context shape product design.",
    highlights: [
      "Compared AI tutoring products across two market contexts.",
      "Connected policy environment and user expectations to design differences.",
      "Used product analysis to explain why seemingly similar AI tutors diverge in strategy."
    ],
    tags: ["AI tutoring", "market analysis", "China / U.S.", "product research"],
    links: [{ label: "Final Paper", href: "./assets/docs/algorithm-based-tutoring-gauth-doubao-aixue.pdf" }]
  },
  {
    title: "Khanmigo Writing Coach",
    meta: "AI Product Researcher and Analyst · MIT Learning, Media, and Technology · Sep 2025 - Dec 2025",
    category: "research",
    badge: "AI Learning Analysis",
    description:
      "An analysis of Khanmigo Writing Coach through instructionist and constructionist lenses, examining scaffolding, feedback, learner agency, and opportunities for a more community-driven redesign.",
    highlights: [
      "Analyzed the product through cognitive load and constructionist frameworks.",
      "Explored how feedback structures shape learner agency and writing identity.",
      "Proposed a redesign that supports projects, peers, passion, and play."
    ],
    tags: ["Khanmigo", "writing AI", "learning theory", "analysis"],
    links: [{ label: "Analysis Doc", href: "./assets/docs/khanmigo-writing-coach-analysis.docx" }]
  },
  {
    title: "Recommendation Memo: Applying AI Coding Tools in Game Design",
    meta: "AI Product Researcher and Analyst · MIT Learning, Media, and Technology · Sep 2025 - Dec 2025",
    category: "research",
    badge: "Recommendation Memo",
    description:
      "A recommendation memo evaluating the educational value, implementation risks, and adoption conditions of AI coding tools in project-based game design learning.",
    highlights: [
      "Assessed benefits and risks of AI coding tools in creative learning settings.",
      "Focused on implementation conditions rather than tool hype alone.",
      "Situated adoption decisions in classroom realities and project-based learning goals."
    ],
    tags: ["AI coding", "game design", "implementation risk", "memo"],
    links: [{ label: "Memo PDF", href: "./assets/docs/ai-coding-tools-in-game-design.pdf" }]
  },
  {
    title: "Content Analysis of Video Programming",
    meta: "Media Researcher · Harvard Growing Up in a Media World · Sep 2025 - Dec 2025",
    category: "research",
    badge: "Media Study",
    description:
      "A content analysis project examining media messages, representation patterns, and children's media environments across commercial, public broadcasting, and online programming.",
    highlights: [
      "Tracked representation patterns across age and gender categories.",
      "Turned coded observations into comparative media findings.",
      "Worked with structured analysis rather than impressionistic commentary."
    ],
    tags: ["content analysis", "media research", "representation", "children's media"],
    links: [{ label: "Content Analysis Doc", href: "./assets/docs/content-analysis-of-video-programming.docx" }]
  },
  {
    title: "Between Us",
    meta: "Game Designer · Harvard Designing for Learning by Creating · Sep 2025 - Dec 2025",
    category: "game",
    badge: "Prototype",
    description:
      "An interactive game prototype designed to help players build closer interpersonal connections through guided questioning, turn-taking, and shared reflection.",
    highlights: [
      "Designed a two-stage flow from system prompts to player-authored prompts.",
      "Balanced participation, intimacy, and emotional safety in the interaction design.",
      "Captured in a screen recording archived from the course project folder."
    ],
    tags: ["social game", "reflection", "question design", "prototype"],
    links: [{ label: "Screen Recording", href: "./assets/media/between-us-screen-recording.mp4" }]
  },
  {
    title: "Guess the Library",
    meta: "AR Experience Designer · Harvard Transforming Education Through Emerging Technologies · Mar 2026 - Apr 2026",
    category: "game",
    badge: "AR Experience",
    description:
      "An AR experience concept for exploring Harvard libraries through visual clues, place-based discovery, and a more playful orientation to campus resources.",
    highlights: [
      "Used location-based discovery and clues as the core interaction loop.",
      "Reframed library exploration as a playful, exploratory experience.",
      "Archived in the Transforming Education project deck."
    ],
    tags: ["AR", "location-based", "campus exploration", "experience design"],
    links: [{ label: "Project Deck", href: "./assets/docs/transform-education-projects-deck.pptx" }]
  },
  {
    title: "Ninja: Retribution",
    meta: "Game Designer · UW-Madison Game Design · Oct 2024 - Dec 2024",
    category: "game",
    badge: "2D Production",
    description:
      "A 2D game project where I designed 24+ assets and tilemaps, coordinated asset sharing through Discord and GitHub, and supported integration in Godot.",
    highlights: [
      "Created production-ready 2D assets and tilemaps.",
      "Worked in a collaborative pipeline using Discord and GitHub.",
      "Balanced asset consistency with practical engine integration."
    ],
    tags: ["Godot", "2D assets", "tilemaps", "team production"],
    links: []
  }
];

const projectGrid = document.querySelector("#project-grid");
const template = document.querySelector("#project-card-template");
const filterButtons = document.querySelectorAll(".filter-button");

function renderProjects(activeFilter = "all") {
  projectGrid.innerHTML = "";

  projects
    .filter((project) => activeFilter === "all" || project.category === activeFilter)
    .forEach((project, index) => {
      const fragment = template.content.cloneNode(true);
      const card = fragment.querySelector(".project-card");

      fragment.querySelector(".project-meta").textContent = project.meta;
      fragment.querySelector(".project-title").textContent = project.title;
      fragment.querySelector(".project-badge").textContent = project.badge;
      fragment.querySelector(".project-description").textContent = project.description;

      const highlightsList = fragment.querySelector(".project-highlights");
      project.highlights.forEach((highlight) => {
        const item = document.createElement("li");
        item.textContent = highlight;
        highlightsList.appendChild(item);
      });

      const tagWrap = fragment.querySelector(".project-tags");
      project.tags.forEach((tag) => {
        const chip = document.createElement("span");
        chip.className = "tag";
        chip.textContent = tag;
        tagWrap.appendChild(chip);
      });

      const linksWrap = fragment.querySelector(".project-links");
      if (project.links.length === 0) {
        const note = document.createElement("span");
        note.className = "tag";
        note.textContent = "Artifact not yet linked";
        linksWrap.appendChild(note);
      } else {
        project.links.forEach((link) => {
          const anchor = document.createElement("a");
          anchor.className = "project-link";
          anchor.href = link.href;
          anchor.textContent = link.label;
          anchor.target = "_blank";
          anchor.rel = "noreferrer";
          linksWrap.appendChild(anchor);
        });
      }

      card.style.animationDelay = `${index * 45}ms`;
      projectGrid.appendChild(fragment);
    });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((other) => other.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
