"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-[#050505]">
      {/* Cursor Glow */}
<div
  className="pointer-events-none fixed inset-0 z-0"
  id="cursor-glow"
/>
      {/* Background Glow */}
<div className="pointer-events-none absolute inset-0 z-0">
  
  <div className="absolute top-[-100px] left-1/2 w-[700px] h-[700px] bg-teal-500/20 blur-[150px] rounded-full -translate-x-1/2"></div>

  <div className="absolute bottom-[-100px] right-1/3 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full"></div>

  <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

</div>
      

      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-4 bg-black/40 backdrop-blur-md z-50 border-b border-gray-800">
        <h1 className="font-bold text-teal-400">PK</h1>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
          <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
          <a href="#education" className="hover:text-teal-400 transition">Education</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </div>
        
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">

        <p className="text-gray-400">Hello, I'm</p>

        <h1 className="text-6xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Priyanka Kadam
        </h1>

        <TypeAnimation
          sequence={["Data Analyst", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl text-gray-300 mb-6"
        />

        <p className="max-w-xl text-gray-400 mb-6">
          Transforming data into actionable insights using Python, SQL, and Power BI.
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="bg-teal-400 text-black px-6 py-2 rounded hover:scale-105 transition">
            Get in Touch
          </a>
          <a href="#projects" className="border border-gray-600 px-6 py-2 rounded hover:scale-105 transition hover:border-teal-400">
            View Projects
          </a>
        </div>

        {/* Arrow */}
        
        <div className="absolute bottom-10 animate-bounce text-gray-400">
          <a href="#about">
            <span className="text-3xl">↓</span>
          </a>
        </div>

      </section>

      {/* About */}
<motion.section
  id="about"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="py-20 px-6"
>
  {/* 🔥 2 column layout */}
  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-bold text-teal-400">
        About Me
      </h2>
        
      <p className="text-gray-400 leading-relaxed mb-8">
        Data Analyst passionate about transforming raw data into meaningful insights. 
        Strong foundation in data cleaning, exploratory data analysis (EDA), and visualization. 
        Experienced in working with real-world datasets to identify trends, patterns, and business opportunities.
      </p>
    </div>
    

    {/* RIGHT SIDE */}
      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition">
          <h3>Data Analysis</h3>
          <p className="text-gray-400 text-sm">EDA, insights</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition">
          <h3>Visualization</h3>
          <p className="text-gray-400 text-sm">Charts, dashboards</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition">
          <h3>Tools</h3>
          <p className="text-gray-400 text-sm">Python, SQL, Power BI</p>
        </div>

      
    </div>

  </div>
</motion.section>
      {/* Skills */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Card */}
          {[
            {
              title: "Programming",
              skills: ["Python", "SQL", "MySQL"],
            },
            {
              title: "Data Analysis",
              skills: ["EDA", "Data Cleaning", "Visualization"],
            },
            {
              title: "Libraries",
              skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
            },
            {
              title: "Tools",
              skills: ["Jupyter","Power BI", "Excel", "Tableau", "VS Code"],
            },
            {
              title: "Database",
              skills: ["MySQL"],
            },
            {
              title: "Other",
              skills: [ "Insights", "Problem Solving"],
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 hover:shadow-[0_0_20px_#14b8a6] transition"
            >
              <h3 className="font-semibold mb-4 text-teal-300">{card.title}</h3>

              <div className="flex flex-wrap gap-2 text-sm">
                {card.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}


        </div>
      </motion.section>
            {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-10 text-teal-400">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Employee Attrition Analysis",
              desc: "Analyzed employee data to identify attrition factors like salary, department & experience.",
              tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
            },
            {
              title: "Railway Ticket Booking System",
              desc: "Designed relational DB system for managing bookings, users & payments.",
              tech: ["MySQL", "SQL"],
            },
            {
              title: "Bank Customer Churn Analysis",
              desc: "Built Power BI dashboard to analyze churn & improve retention strategies.",
              tech: ["Power BI", "DAX", "Power Query"],
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 hover:shadow-[0_0_25px_#14b8a6] transition text-left"
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 text-sm">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-400">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left text-teal-300">
              Education
            </h3>

            <div className="space-y-6 border-l border-gray-700 pl-6">
              <div className="relative">
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-teal-400 rounded-full"></div>

                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition">
                  <h4 className="text-lg font-semibold">BSc IT</h4>
                  <p className="text-gray-400">Karmveer Bhaurao Patil College</p>
                  <p className="text-gray-500 text-sm">2022 – 2025</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-teal-400 rounded-full"></div>

                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 transition">
                  <h4 className="text-lg font-semibold">HSC</h4>
                  <p className="text-gray-400">Karmveer Bhaurao Patil College</p>
                  <p className="text-gray-500 text-sm">2020 – 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left text-teal-300">
              Certifications
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: "Data Analytics",
                  org: "Quastech Institute, Vashi",
                  year: "2025 – 2026",
                },
              ].map((cert, i) => (
                <div
                  key={i}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-400 hover:shadow-[0_0_20px_#14b8a6] transition"
                >
                  <h4 className="text-lg font-semibold text-teal-300">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400">{cert.org}</p>
                  <p className="text-gray-500 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-teal-400">
          Contact
        </h2>

        <div className="flex flex-col items-center gap-4 text-gray-300">

          <p className="flex items-center gap-2 hover:text-teal-400 transition">
            <FaEnvelope /> priyankakadam2314@gmail.com
          </p>

          <a
            href="https://github.com/priyankakadam2314-png"
            target="_blank"
            className="flex gap-2 hover:text-teal-400 transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/priyanka-kadam-271505340"
            target="_blank"
            className="flex gap-2 hover:text-teal-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="mt-4 bg-teal-400 text-black px-6 py-2 rounded hover:scale-105 transition"
          >
            Download Resume
          </a>

          <footer className="text-gray-500 py-6 text-sm mt-6">
            © 2026 Priyanka Kadam. All rights reserved.
          </footer>
        </div>
      </motion.section>

    </main>
  );
}