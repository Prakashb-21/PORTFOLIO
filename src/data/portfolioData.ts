export interface Project {
  id: string;
  title: string;
  category: 'Python & Backend' | 'Full Stack' | 'Web Development';
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    icon: string;
    tags: string[];
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  score: string;
  scoreType: string;
  highlights: string[];
  location: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type: string;
  location: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: "Prakash B",
  role: "Python Developer & Software Engineer",
  tagline: "Building reliable backend services, database-driven systems, and responsive web applications.",
  email: "bprakash2117@gmail.com",
  phone: "+91 8754027721",
  location: "Tansi Nagar, Velachery, Chennai – 600042, India",
  linkedin: "https://www.linkedin.com/in/prakash-b-015744322/",
  github: "https://github.com/Prakashb-21",
  status: "Open to Work • Immediate Joining",
  summary: "Motivated and detail-oriented BCA graduate with a strong foundation in software development, web technologies, database management, and programming concepts. Hands-on experience developing responsive web applications using HTML, CSS, JavaScript, Python, React, and SQL. Strong problem-solving and analytical skills with practical exposure to application development, debugging, and database-driven solutions. Seeking an entry-level Software Developer, Python Developer, or Backend Developer role where I can apply my skills and contribute to real-world engineering teams."
};

export const CODE_PROFILE_PYTHON = `class PythonDeveloper:
    def __init__(self):
        self.name = "Prakash B"
        self.education = "Bachelor of Computer Applications (BCA)"
        self.location = "Chennai, India"
        self.status = "Open to Immediate Opportunities"
        self.core_stack = ["Python", "React", "SQL / MySQL", "REST APIs", "JavaScript"]
        self.mindset = "Clean code, robust problem-solving & continuous learning"

    def get_career_objective(self):
        return (
            "To contribute to high-impact software engineering projects, "
            "develop scalable backend APIs, and design database-driven solutions "
            "while growing alongside visionary engineering teams."
        )

    def is_ready_to_hire(self):
        return True  # 100% committed & passionate`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages for building algorithmic logic, backend logic, and scripts",
    skills: [
      {
        name: "Python",
        level: 88,
        experience: "Primary Language",
        icon: "python",
        tags: ["OOP", "Data Structures", "Scripting", "REST APIs", "Automation"]
      },
      {
        name: "JavaScript (ES6+)",
        level: 82,
        experience: "Hands-on",
        icon: "javascript",
        tags: ["Async/Await", "DOM", "Event Loop", "Fetch API", "React"]
      },
      {
        name: "SQL",
        level: 85,
        experience: "Core Skill",
        icon: "database",
        tags: ["Queries", "Joins", "Aggregation", "Schema Design", "CRUD"]
      },
      {
        name: "C & Java Fundamentals",
        level: 70,
        experience: "Academic Foundation",
        icon: "code",
        tags: ["Pointers", "Memory Concepts", "Class Hierarchies", "Algorithms"]
      }
    ]
  },
  {
    category: "Backend & Database",
    description: "Architecting persistent storage, API integration, and data modeling",
    skills: [
      {
        name: "RESTful APIs",
        level: 84,
        experience: "Practical Experience",
        icon: "api",
        tags: ["HTTP Methods", "JSON Serialization", "Endpoints", "Status Codes"]
      },
      {
        name: "MySQL & Relational DBs",
        level: 82,
        experience: "Project Tested",
        icon: "mysql",
        tags: ["Table Normalization", "Foreign Keys", "Transactions", "Indexes"]
      },
      {
        name: "Database-Driven Solutions",
        level: 80,
        experience: "Practical Experience",
        icon: "server",
        tags: ["Persistent Storage", "Data Validation", "Query Optimization"]
      },
      {
        name: "Authentication & Sessions",
        level: 75,
        experience: "Hands-on",
        icon: "shield",
        tags: ["Session Control", "Access Management", "Role-based Security"]
      }
    ]
  },
  {
    category: "Web & Frontend",
    description: "Creating responsive, user-friendly, and accessible client interfaces",
    skills: [
      {
        name: "React",
        level: 80,
        experience: "Hands-on",
        icon: "react",
        tags: ["Hooks", "Component Lifecycle", "State Management", "Props"]
      },
      {
        name: "HTML5 & CSS3",
        level: 90,
        experience: "Strong Foundation",
        icon: "html",
        tags: ["Semantic HTML", "Flexbox", "Grid", "CSS Animations", "Media Queries"]
      },
      {
        name: "Responsive Web Design",
        level: 90,
        experience: "Internship Tested",
        icon: "layout",
        tags: ["Mobile-First", "Cross-Browser", "Adaptive Layouts"]
      },
      {
        name: "Bootstrap & Modern CSS",
        level: 85,
        experience: "Practical Experience",
        icon: "palette",
        tags: ["Utility Classes", "Glassmorphism", "Dark Themes"]
      }
    ]
  },
  {
    category: "Tools & Methodologies",
    description: "Industry standard workflows, version control, and development practices",
    skills: [
      {
        name: "Git & GitHub",
        level: 82,
        experience: "Daily Workflow",
        icon: "git",
        tags: ["Commit Hygiene", "Branching", "Pull Requests", "Version Tracking"]
      },
      {
        name: "Debugging & DevTools",
        level: 85,
        experience: "Hands-on",
        icon: "bug",
        tags: ["Console Inspection", "Network Tab", "Breakpoints", "Error Handling"]
      },
      {
        name: "Code Review & Quality",
        level: 78,
        experience: "Internship Tested",
        icon: "check-circle",
        tags: ["Readable Code", "Refactoring", "Clean Architecture", "Documentation"]
      },
      {
        name: "Agile Development Basics",
        level: 76,
        experience: "Team Workflow",
        icon: "users",
        tags: ["Sprint Delivery", "Requirements Gathering", "Scrum Coordination"]
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "task-tracker",
    title: "Task Tracker Application",
    category: "Python & Backend",
    tagline: "Full-stack task management application with React front-end, RESTful API endpoints, and SQL persistence.",
    description: "Designed and engineered an end-to-end task tracking application that empowers users to seamlessly create, organize, prioritize, and monitor daily tasks. Built using Python and React with RESTful API communication and persistent relational database storage.",
    technologies: ["Python", "React", "SQL / SQLite", "REST APIs", "JavaScript", "CSS3"],
    highlights: [
      "Engineered full CRUD (Create, Read, Update, Delete) capability allowing dynamic task creation and real-time state synchronization.",
      "Built a modern, responsive React interface focused on intuitive workflows, quick status toggling, and clean navigation.",
      "Designed RESTful API endpoints handling JSON payloads, error status codes, and input validation.",
      "Implemented SQL-based persistent storage preserving user task history, priority tags, and completion timestamps.",
      "Added multi-status tracking (Pending, In-Progress, Completed) with visual filters to maximize personal productivity."
    ],
    architecture: "Client (React + State) ⇄ RESTful JSON API ⇄ Python Backend Controller ⇄ SQL Database (Persistent Storage)",
    codeSnippet: {
      filename: "task_controller.py",
      language: "python",
      code: `@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({"error": "Task title is required"}), 400
        
    task_id = db.execute(
        "INSERT INTO tasks (title, description, priority, status) VALUES (?, ?, ?, ?)",
        (data['title'], data.get('description', ''), data.get('priority', 'Medium'), 'Pending')
    )
    return jsonify({"message": "Task created successfully", "task_id": task_id}), 201`
    },
    metrics: [
      { label: "Core Tech", value: "Python + React" },
      { label: "Database", value: "SQL Relational" },
      { label: "API Type", value: "RESTful JSON" },
      { label: "CRUD Operations", value: "100% Tested" }
    ],
    featured: true
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Campaign Management System",
    category: "Full Stack",
    tagline: "Centralized marketing analytics & campaign management platform with role-based session authentication and MySQL backend.",
    description: "Developed a comprehensive web-based management system to orchestrate digital marketing campaigns, capture inbound customer leads, and provide actionable analytics through an interactive dashboard. Features administrator session authentication and structured MySQL relational tables.",
    technologies: ["JavaScript", "MySQL", "HTML5", "CSS3", "Bootstrap", "Session Auth"],
    highlights: [
      "Architected a centralized dashboard to track multi-channel marketing campaigns and incoming lead pipelines.",
      "Implemented secure administrator authentication with session-based access control to protect sensitive campaign analytics.",
      "Engineered structured MySQL database schema with foreign keys connecting campaigns, lead sources, and conversion logs.",
      "Designed responsive data tables, modal forms for campaign creation, and interactive filter controls.",
      "Improved operational efficiency by replacing fragmented spreadsheets with an automated web platform."
    ],
    architecture: "Admin UI (Bootstrap + JS) ⇄ Auth & Session Middleware ⇄ Campaign Service Layer ⇄ MySQL Relational Database",
    codeSnippet: {
      filename: "campaign_queries.sql",
      language: "sql",
      code: `-- Retrieve aggregated campaign metrics and lead conversion rates
SELECT 
    c.campaign_id,
    c.campaign_name,
    c.budget,
    COUNT(l.lead_id) AS total_leads,
    SUM(CASE WHEN l.status = 'Converted' THEN 1 ELSE 0 END) AS conversions
FROM campaigns c
LEFT JOIN leads l ON c.campaign_id = l.campaign_id
GROUP BY c.campaign_id, c.campaign_name, c.budget;`
    },
    metrics: [
      { label: "Lead Tracking", value: "Centralized" },
      { label: "Access Control", value: "Admin Session" },
      { label: "Storage", value: "MySQL Relational" },
      { label: "UI Framework", value: "Bootstrap & JS" }
    ],
    featured: true
  },
  {
    id: "python-automation-scraper",
    title: "Python Data Extraction & Automation Pipeline",
    category: "Python & Backend",
    tagline: "Modular Python automation tool for structured web scraping, data transformation, and automated reporting.",
    description: "Engineered a reliable Python utility script showcasing clean object-oriented architecture, custom HTTP request handling, data parsing, and persistent storage. Built to demonstrate Python core strengths, exception handling, and automation capabilities.",
    technologies: ["Python 3", "Requests", "Data Parsing", "SQLite", "Automation", "JSON"],
    highlights: [
      "Built resilient web scrapers with custom user-agents, timeout handling, and rate-limiting safeguards.",
      "Parsed structured and unstructured web data using regex and DOM navigation into clean normalized JSON records.",
      "Automated batch insertion into SQLite database with parameterized queries avoiding SQL injection.",
      "Implemented comprehensive logging and error-recovery handlers for robust headless execution.",
      "Generated automated data summaries with key statistical metrics."
    ],
    architecture: "HTTP Client (Requests) ⇄ Parser Engine ⇄ Schema Normalizer ⇄ SQLite Database",
    codeSnippet: {
      filename: "scraper_service.py",
      language: "python",
      code: `import requests
from typing import List, Dict

class DataPipeline:
    def __init__(self, endpoint: str):
        self.endpoint = endpoint
        self.session = requests.Session()

    def fetch_records(self) -> List[Dict]:
        try:
            response = self.session.get(self.endpoint, timeout=10)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as err:
            print(f"[ERROR] Failed to fetch data: {err}")
            return []`
    },
    metrics: [
      { label: "Execution", value: "Automated" },
      { label: "Error Handling", value: "Robust" },
      { label: "Output Format", value: "JSON & SQL" },
      { label: "Code Style", value: "PEP 8 Clean" }
    ],
    featured: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Mervanix Private Limited",
    role: "Website Development Intern",
    duration: "October 2025 – December 2025",
    type: "Internship",
    location: "Chennai, India",
    summary: "Worked as a front-end and web development intern contributing to responsive client web pages, UI components, code maintenance, and cross-device testing.",
    contributions: [
      "Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript, prioritizing clean semantic structure and maintainable code.",
      "Implemented reactive layouts to guarantee consistent and visually engaging user experiences across desktop, tablet, and mobile screens.",
      "Assisted senior engineers in developing and refining reusable web interface components based on project requirements and UI specifications.",
      "Enhanced website usability and navigation flow by refining page layouts, typography hierarchy, and interactive interface elements.",
      "Actively participated in debugging and testing sessions to identify, document, and resolve front-end issues, boosting overall website quality.",
      "Collaborated closely with cross-functional team members in a structured professional environment, gaining direct exposure to industry development workflows."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-Browser Testing", "Debugging", "Git"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Sun Arts and Science College",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2021 – 2026",
    score: "7.0 / 10",
    scoreType: "CGPA",
    location: "Tamil Nadu, India",
    highlights: [
      "Rigorous academic curriculum covering Python, Java, Data Structures, Relational Database Management Systems (RDBMS), and Web Technologies.",
      "Built practical laboratory applications demonstrating algorithmic problem-solving and database integration.",
      "Completed hands-on software development coursework and academic project presentations with distinction."
    ]
  },
  {
    institution: "VDS Jain Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "Graduated 2021",
    score: "76%",
    scoreType: "Percentage",
    location: "Tamil Nadu, India",
    highlights: [
      "Focused on Mathematics, Computer Science, and Science fundamentals.",
      "Developed strong analytical problem-solving foundations and algorithmic thinking."
    ]
  },
  {
    institution: "VDS Jain Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "Graduated 2019",
    score: "65%",
    scoreType: "Percentage",
    location: "Tamil Nadu, India",
    highlights: [
      "Secondary school education with high emphasis on Mathematics and Science."
    ]
  }
];

export const CAREER_OBJECTIVE = {
  headline: "Aspiring Python & Software Developer Ready for Immediate Impact",
  paragraphs: [
    "I am an ambitious, detail-oriented BCA graduate equipped with practical hands-on experience developing database-driven web applications and backend solutions. My core technical passion lies in Python, RESTful API architecture, SQL databases, and responsive modern user interfaces.",
    "During my internship at Mervanix Private Limited, I sharpened my front-end engineering skills, debugging agility, and collaboration in structured engineering workflows. Combined with my full-stack projects like the Task Tracker Application and Digital Marketing Campaign Management System, I bridge the gap between backend data persistence and responsive user interfaces.",
    "I am actively seeking an entry-level role as a Python Developer, Software Engineer, Backend Developer, or Full Stack Fresher where I can write clean, maintainable code, learn continuously from experienced mentors, and deliver measurable business value."
  ],
  strengths: [
    { title: "Fast-Paced Learning", desc: "Proven ability to rapidly pick up new frameworks, libraries, and design patterns." },
    { title: "Problem-Solving Mindset", desc: "Analytical thinker with practical exposure to debugging and query optimization." },
    { title: "Clean Code & Standards", desc: "Commitment to structured code, documentation, and version control best practices." },
    { title: "Collaborative Spirit", desc: "Experienced in teamwork, constructive code reviews, and positive communication." }
  ]
};
