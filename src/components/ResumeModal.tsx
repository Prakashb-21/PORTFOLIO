import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `Prakash B
+91 8754027721 | bprakash2117@gmail.com | linkedin.com/in/prakash-b-015744322 | github.com/Prakashb-21
Tansi Nagar, Velachery, Chennai – 600042

Professional Summary:
Motivated and detail-oriented BCA graduate with a strong foundation in software development, web technologies, database management, and programming concepts. Hands-on experience developing responsive web applications using HTML, CSS, JavaScript, Python, React, and SQL. Strong problem-solving and analytical skills with practical exposure to application development, debugging, and database-driven solutions. Looking for an entry-level Software Developer or Web Developer role where I can apply my technical skills, contribute to real-world projects, and continue growing as a software professional.

Education:
- Sun Arts and Science College (2021–2026)
  Bachelor of Computer Applications (BCA) | CGPA: 7.0/10
- VDS Jain Higher Secondary School (2021)
  Higher Secondary Certificate (HSC) | Score: 76%
- VDS Jain Higher Secondary School (2019)
  Secondary School Leaving Certificate (SSLC) | Score: 65%

Internship:
Mervanix Private Limited (October 2025–Dec 2025)
Website Development Intern
• Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript, with a focus on clean structure and maintainable code.
• Reactive layouts implemented to ensure consistent user experiences across desktop, tablet, and mobile devices.
• Assisted in developing and improving web interface components based on project requirements and design specifications.
• Enhanced website usability by refining page layouts, navigation, and interactive interface elements.
• Participated in debugging and testing activities to identify and resolve front-end issues and improve overall website quality.
• Collaborated with team members in a structured development environment and gained practical exposure to professional web development workflows.

Projects:
1. Digital Marketing Campaign Management System (JavaScript, MySQL, HTML, CSS, Bootstrap)
• Developed a web-based application for managing digital marketing campaigns and lead information through a centralized platform.
• Designed a responsive dashboard to organize campaign data, monitor leads, and provide a structured view of marketing activities.
• Implemented administrator authentication and session-based access control to restrict application features to authorized users.
• Created user-friendly interfaces for managing campaign information and tracking marketing activities efficiently.
• Integrated MySQL for structured storage and retrieval of application and campaign-related data.

2. Task Tracker Application (Python, React, SQL, REST APIs)
• Developed a task management application that enables users to create, organize, update, and track tasks efficiently.
• Built a responsive front end using React with a focus on simple navigation and an intuitive user experience.
• Implemented RESTful API functionality to support communication between the application interface and backend services.
• Used SQL-based persistent storage to maintain task records and application data.
• Added task status tracking to help users monitor progress and manage daily workflows effectively.

Technical Skills:
• Programming Languages: Python, JavaScript, SQL
• Web Technologies: HTML5, CSS3, Bootstrap, React
• Database: MySQL, SQL
• APIs and Development: REST APIs, Web Application Development
• Tools and Practices: Git, Debugging, Code Review, Responsive Web Design
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prakash_B_Python_Developer_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top Control Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-sky-400 border border-blue-500/30">
              ATS-Optimized Resume View
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline-block">
              Prakash B • Python Developer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-1.5 shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
              title="Download text format"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Paper Sheet */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-900 text-slate-100 font-sans print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto bg-slate-950 p-6 sm:p-10 rounded-xl border border-slate-800 print:border-none print:bg-white print:p-0 print:text-black space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-2 border-b border-slate-800 pb-5 print:border-black">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 font-mono print:text-gray-800">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-sky-400 print:hidden" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-sky-400 print:hidden" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-sky-300 transition-colors"
                >
                  <FaLinkedin className="w-3 h-3 text-sky-400 print:hidden" />
                  linkedin.com/in/prakash-b-015744322
                </a>
                <span>•</span>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-sky-300 transition-colors"
                >
                  <FaGithub className="w-3 h-3 text-sky-400 print:hidden" />
                  github.com/Prakashb-21
                </a>
              </div>

              <div className="text-xs text-slate-400 font-mono print:text-gray-600 flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-rose-400 print:hidden" />
                {PERSONAL_INFO.location}
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 print:text-black print:border-black font-mono">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
                Motivated and detail-oriented BCA graduate with a strong foundation in software development, web technologies, database management, and programming concepts. Hands-on experience developing responsive web applications using HTML, CSS, JavaScript, Python, React, and SQL. Strong problem-solving and analytical skills with practical exposure to application development, debugging, and database-driven solutions. Looking for an entry-level Software Developer or Web Developer role where I can apply my technical skills, contribute to real-world projects, and continue growing as a software professional.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 print:text-black print:border-black font-mono">
                Education
              </h2>
              
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <strong className="text-white print:text-black font-semibold">Sun Arts and Science College</strong>
                    <div className="text-slate-300 print:text-gray-800">Bachelor of Computer Applications (BCA)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-slate-400 print:text-gray-700">2021–2026</span>
                    <div className="font-mono font-bold text-emerald-400 print:text-black">CGPA: 7.0/10</div>
                  </div>
                </div>

                <div className="flex justify-between items-start pt-1">
                  <div>
                    <strong className="text-white print:text-black font-semibold">VDS Jain Higher Secondary School</strong>
                    <div className="text-slate-300 print:text-gray-800">Higher Secondary Certificate (HSC)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-slate-400 print:text-gray-700">2021</span>
                    <div className="font-mono font-bold text-sky-400 print:text-black">Score: 76%</div>
                  </div>
                </div>

                <div className="flex justify-between items-start pt-1">
                  <div>
                    <strong className="text-white print:text-black font-semibold">VDS Jain Higher Secondary School</strong>
                    <div className="text-slate-300 print:text-gray-800">Secondary School Leaving Certificate (SSLC)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-slate-400 print:text-gray-700">2019</span>
                    <div className="font-mono font-bold text-sky-400 print:text-black">Score: 65%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 print:text-black print:border-black font-mono">
                Internship Experience
              </h2>
              
              <div className="space-y-1.5">
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <strong className="text-white print:text-black font-semibold">Mervanix Private Limited</strong>
                    <div className="text-slate-300 print:text-gray-800 italic">Website Development Intern</div>
                  </div>
                  <div className="font-mono text-xs text-slate-400 print:text-gray-700">
                    October 2025 – Dec 2025
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-black leading-relaxed pl-1">
                  <li>Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript, with a focus on clean structure and maintainable code.</li>
                  <li>Reactive layouts implemented to ensure consistent user experiences across desktop, tablet, and mobile devices.</li>
                  <li>Assisted in developing and improving web interface components based on project requirements and design specifications.</li>
                  <li>Enhanced website usability by refining page layouts, navigation, and interactive interface elements.</li>
                  <li>Participated in debugging and testing activities to identify and resolve front-end issues and improve overall website quality.</li>
                  <li>Collaborated with team members in a structured development environment and gained practical exposure to professional web development workflows.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 print:text-black print:border-black font-mono">
                Projects
              </h2>

              {/* Project 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <strong className="text-white print:text-black font-bold">
                    Digital Marketing Campaign Management System
                  </strong>
                  <span className="font-mono text-[11px] text-sky-400 print:text-gray-700">
                    JavaScript, MySQL, HTML, CSS, Bootstrap
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-black leading-relaxed pl-1">
                  <li>Developed a web-based application for managing digital marketing campaigns and lead information through a centralized platform.</li>
                  <li>Designed a responsive dashboard to organize campaign data, monitor leads, and provide a structured view of marketing activities.</li>
                  <li>Implemented administrator authentication and session-based access control to restrict application features to authorized users.</li>
                  <li>Created user-friendly interfaces for managing campaign information and tracking marketing activities efficiently.</li>
                  <li>Integrated MySQL for structured storage and retrieval of application and campaign-related data.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <strong className="text-white print:text-black font-bold">
                    Task Tracker Application
                  </strong>
                  <span className="font-mono text-[11px] text-sky-400 print:text-gray-700">
                    Python, React, SQL, REST APIs
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-black leading-relaxed pl-1">
                  <li>Developed a task management application that enables users to create, organize, update, and track tasks efficiently.</li>
                  <li>Built a responsive front end using React with a focus on simple navigation and an intuitive user experience.</li>
                  <li>Implemented RESTful API functionality to support communication between the application interface and backend services.</li>
                  <li>Used SQL-based persistent storage to maintain task records and application data.</li>
                  <li>Added task status tracking to help users monitor progress and manage daily workflows effectively.</li>
                </ul>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 print:text-black print:border-black font-mono">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-slate-300 print:text-black font-mono">
                <div><strong>Programming Languages:</strong> Python, JavaScript, SQL</div>
                <div><strong>Web Technologies:</strong> HTML5, CSS3, Bootstrap, React</div>
                <div><strong>Database:</strong> MySQL, SQL</div>
                <div><strong>APIs & Development:</strong> REST APIs, Web Application Development</div>
                <div><strong>Tools and Practices:</strong> Git, Debugging, Code Review, Responsive Web Design</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
