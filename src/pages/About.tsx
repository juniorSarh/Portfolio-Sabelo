// Updated About.tsx with professional layout
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../module.css/About.module.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Briefcase, GraduationCap, Award, Code, ChevronRight } from 'lucide-react';

export default function About() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState('summary');

  // Set document title
  useEffect(() => {
    document.title = 'About Me | Sabelo Gumede - Full Stack Developer';
  }, []);

  const experience = [
    {
      role: "Full Stack Developer Trainee",
      company: "mLab (CodeTribe)",
      period: "2025 - Present",
      responsibilities: [
        "Developing responsive web applications using React, TypeScript, and Node.js in an agile environment",
        "Implementing RESTful APIs and integrating with various third-party services and databases",
        "Collaborating with cross-functional teams to design and deploy scalable cloud-based solutions",
        "Writing clean, maintainable code with comprehensive unit and integration tests",
        "Participating in code reviews and contributing to architectural decisions"
      ]
    },
    {
      role: "Internet of Things (IoT) Facilitator",
      company: "mLab",
      period: "2024 - 2025",
      responsibilities: [
        "Designed and delivered hands-on IoT workshops using Arduino and Raspberry Pi platforms",
        "Mentored students in developing IoT prototypes and proof-of-concept projects",
        "Created technical documentation and learning materials for IoT curriculum",
        "Assisted in setting up and maintaining IoT lab equipment and development environments",
        "Provided technical guidance on sensor integration and data visualization"
      ]
    },
    {
      role: "Information Technology Support Technician",
      company: "Innobiz DUT Centre for Entrepreneurship & Innovation",
      period: "2022 - 2024",
      responsibilities: [
        "Provided Tier 1 and 2 technical support for 100+ users across multiple locations",
        "Managed Microsoft 365 environment including user accounts, licenses, and security policies",
        "Automated routine IT tasks using PowerShell, reducing resolution time by 40%",
        "Documented IT processes and created knowledge base articles for common issues",
        "Assisted in network administration and infrastructure maintenance"
      ]
    }
    // Add more experiences as needed
  ];

  const education = [
    {
      degree: "Advance Diploma in Information and Communications Technology",
      institution: "Durban University of Technology",
      year: "2020 - 2021"
    },
    {
      degree: "Diploma in Information and Communications Technology",
      institution: "Durban University of Technology",
      year: "2017 - 2019"
    }
  ];

  const certifications = [
    "Cisco – Introduction to IoT",
    "JavaScript Algorithms and Data Structures",
    "Web Responsive Design",
    "Database Design"
  ];

  const skills = {
    languages: ["JavaScript/TypeScript", "Python", "C#", "SQL"],
    frontend: ["React", "HTML5", "CSS", "Responsive Design"],
    backend: ["Node.js", "Express", "RESTful APIs"],
    tools: ["Git", "GitHub", "VS Code", "npm"],
    cloud: ["Azure Fundamentals", "Netlify", "Vercel", "Render"]
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sabelo Gumede</h1>
          <p className={styles.heroSubtitle}>Full Stack Developer & Cloud Enthusiast</p>
        </div>
      </div>

      <main className={styles.mainContainer}>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'summary' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('summary')}
          >
            <Code size={18} className={styles.tabIcon} />
            <span>Professional Summary</span>
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'experience' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} className={styles.tabIcon} />
            <span>Experience</span>
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'skills' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <Code size={18} className={styles.tabIcon} />
            <span>Technical Skills</span>
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'education' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} className={styles.tabIcon} />
            <span>Education</span>
          </button>
        </div>

        <div className={styles.contentArea}>
          {activeTab === 'summary' && (
            <section className={styles.section} data-reveal>
              <h2 className={styles.sectionTitle}>Professional Summary</h2>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h3>2025 - Present</h3>
                    <p>Full Stack Developer Trainee</p>
                    <p>Building modern web applications using React, TypeScript, and Node.js. Specializing in creating responsive UIs and scalable backend services while following best practices in software development.</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h3>2024 - 2025</h3>
                    <p>IoT Facilitator</p>
                    <p>Mentored aspiring technologists in IoT development, helping them bring their ideas to life through hands-on workshops and project-based learning using Arduino and Raspberry Pi platforms.</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h3>2022 - 2024</h3>
                    <p>IT Support Technician</p>
                    <p>Provided comprehensive technical support while developing automation scripts to improve IT operations, gaining valuable experience in enterprise environments and user support.</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <h3>2020 - 2021</h3>
                    <p>Advanced Diploma in ICT</p>
                    <p>Deepened knowledge in software development, data structures, and distributed systems, while working on real-world projects.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'experience' && (
            <section className={styles.section} data-reveal>
              <h2 className={styles.sectionTitle}>Professional Experience</h2>
              {experience.map((exp, index) => (
                <div key={index} className={styles.experienceCard}>
                  <h3 className={styles.jobTitle}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.period}>{exp.period}</p>
                  <ul className={styles.responsibilities}>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className={styles.responsibilityItem}>
                        <ChevronRight size={16} className={styles.bulletIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {activeTab === 'skills' && (
            <section className={styles.section} data-reveal>
              <h2 className={styles.sectionTitle}>Technical Skills</h2>
              <div className={styles.skillsGrid}>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className={styles.skillCategory}>
                    <h3 className={styles.skillCategoryTitle}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className={styles.skillItems}>
                      {items.map((skill, i) => (
                        <span key={i} className={styles.skillItem}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'education' && (
            <section className={styles.section} data-reveal>
              <h2 className={styles.sectionTitle}>Education & Certifications</h2>
              
              <div className={styles.educationSection}>
                <h3 className={styles.subsectionTitle}>
                  <GraduationCap size={20} className={styles.sectionIcon} />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className={styles.educationCard}>
                    <h4>{edu.degree}</h4>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.period}>{edu.year}</p>
                  </div>
                ))}
              </div>

              <div className={styles.certificationsSection}>
                <h3 className={styles.subsectionTitle}>
                  <Award size={20} className={styles.sectionIcon} />
                  Certifications
                </h3>
                <ul className={styles.certificationsList}>
                  {certifications.map((cert, index) => (
                    <li key={index} className={styles.certificationItem}>
                      <ChevronRight size={16} className={styles.bulletIcon} />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}