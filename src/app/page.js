"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./components/Navbar";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaDocker,
  FaAws,
  FaShoppingCart
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiArduino,
  SiEspressif,
  SiNextdotjs,
  SiMongodb
} from "react-icons/si";
export default function Home() {
  return (
    <>
      <Head>
        <title>UmarDevWorks - Full-Stack Developer & IoT Engineer</title>
        <meta
          name="description"
          content="Full-stack developer and IoT engineer specializing in web applications, electronics, and STEM education."
        />
        {/* ... other meta tags ... */}
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-inter text-gray-100">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
        >
          {/* Background elements remain the same */}
          <div className="relative z-10 max-w-4xl backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-gray-800/50 shadow-xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Hi, I&apos;m Umar
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mt-6 mb-8 text-gray-300">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "IoT Developer",
                  "UI/UX Designer"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                cursorColor="#93c5fd"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              Bridging software and hardware to build innovative tech solutions.
            </p>
            {/* CTA buttons remain the same */}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-400 font-medium tracking-widest">
                SKILLS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Technical Toolkit
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "HTML/CSS",
                  icon: (
                    <>
                      <FaHtml5 className="text-orange-500" />
                      <FaCss3Alt className="text-blue-500" />
                    </>
                  )
                },
                {
                  name: "JavaScript",
                  icon: <FaJs className="text-yellow-400" />
                },
                {
                  name: "React.js",
                  icon: <FaReact className="text-cyan-400" />
                },
                {
                  name: "Next.js",
                  icon: <SiNextdotjs className="text-white" />
                },
                {
                  name: "Node.js",
                  icon: <FaNodeJs className="text-green-500" />
                },
                {
                  name: "Python",
                  icon: <FaPython className="text-yellow-300" />
                },
                {
                  name: "Tailwind CSS",
                  icon: <SiTailwindcss className="text-teal-400" />
                },
                {
                  name: "Supabase",
                  icon: <SiSupabase className="text-green-400" />
                },
                {
                  name: "MongoDB",
                  icon: <SiMongodb className="text-blue-500" />
                },
                {
                  name: "Docker",
                  icon: <FaDocker className="text-blue-300" />
                },
                {
                  name: "Arduino",
                  icon: <SiArduino className="text-blue-400" />
                },
                {
                  name: "ESP32/8266",
                  icon: <SiEspressif className="text-red-500" />
                },
                {
                  name: "AWS EC2",
                  icon: <FaAws className="text-orange-300" />
                },
                { name: "Git", icon: <FaGit className="text-red-500" /> }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 hover:bg-gray-700/70 p-4 rounded-lg border border-gray-700/50 transition-all duration-300 flex flex-col items-center"
                >
                  <span className="text-2xl mb-2">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Updated with your content */}
        <section
          id="projects"
          className="py-20 bg-gray-900/60 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-400 font-medium tracking-widest">
                PROJECTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Featured Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* MakerBox Project */}
              <div className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative h-64 bg-black">
                  <Image
                    src="/makerbox.webp"
                    alt="MakerBox.pk"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    MakerBox.pk
                  </h3>
                  <span className="text-blue-400 text-sm">
                    Founder & Full-Stack Developer | 2023-Present
                  </span>
                  <p className="text-gray-300 mt-3">
                    STEM e-commerce platform website designed in WordPress later
                    migrated to Next.js, improving performance. Also designed
                    electronics kits and managed full operations.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Next.js
                    </span>

                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>

              {/* Discord Bot Project */}
              <div className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative h-64 bg-black">
                  <Image
                    src="/botdash.png"
                    alt="Discord Bot"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    DevWorksBot
                  </h3>
                  <span className="text-blue-400 text-sm">
                    Discord Bot Dashboard | 2023
                  </span>
                  <p className="text-gray-300 mt-3">
                    Developed a customizable dashboard for managing bot data and
                    other functionalities.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Express.js
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      SocketIO
                    </span>
                  </div>
                </div>
              </div>

              {/* IoT Projects */}
              <div className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative h-64 bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  >
                    <source src="/output.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    IoT Projects
                  </h3>
                  <span className="text-blue-400 text-sm">
                    Hardware Engineer | 2022-Present
                  </span>
                  <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-1">
                    <li>Wi-Fi Smart Clock with ESP8266</li>
                    <li>4WD Bluetooth Car with ESP32</li>
                    <li>Arduino Game Controller</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Arduino
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      ESP32/8266
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      C++
                    </span>
                  </div>
                </div>
              </div>

              {/* WhoKnowsMe Project */}
              <div className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative h-64 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      WhoKnowsMe
                    </h3>
                    <p className="text-gray-300">Friends quiz platform</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-blue-400 text-sm">
                    Full-Stack Project | 2023
                  </span>
                  <p className="text-gray-300 mt-3">
                    Interactive quiz platform built with Next.js, Tailwind CSS,
                    and Supabase. Features quiz creation and score leaderboards.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Supabase
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>

              {/* ML Project */}
              <div className="bg-black hover:bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative h-64 flex items-center justify-center">
                  <Image
                    src="/predictor.png"
                    alt="Salary Predictor"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity "
                  />
                </div>

                <div className="p-6">
                  <span className="text-blue-400 text-sm">
                    AI/ML Project | 2025
                  </span>
                  <p className="text-gray-300 mt-3">
                    Built a linear regression model from scratch using only
                    Python to predict salaries based on years of experience.
                    Calculated slope and intercept manually using the Least
                    Squares Method. Visualized data and predictions to
                    understand model behavior.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Jupyter Notebook
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                      MatPlotLib
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section
          id="experience"
          className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900/50 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-400 font-medium tracking-widest">
                BACKGROUND
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Experience & Education
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-white">
                      MakerBox.pk
                    </h4>
                    <p className="text-blue-400 text-sm">
                      Founder & Developer | 2024 - Present
                    </p>
                    <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
                      <li>Built STEM e-commerce platform</li>
                      <li>
                        Designed electronics kits and handled full-stack
                        development
                      </li>
                      <li>Managed product design, sourcing, and marketing</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-xl font-semibold text-white">
                      Freelance Projects
                    </h4>
                    <p className="text-blue-400 text-sm">
                      Fullstack Developer | 2024-Present
                    </p>
                    <ul className="text-gray-300 mt-3 list-disc pl-5 space-y-2">
                      <li>
                        Built and deployed custom web apps for clients using
                        React, Next.js, MongoDb and Tailwind CSS
                      </li>

                      <li>
                        Delivered solutions with responsive UI/UX and REST API
                        backends, hosted on AWS EC2
                      </li>
                      <li>
                        Managed version control, CI/CD, and deployments with Git
                        and Docker
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-white mt-8 mb-6 border-b border-gray-700 pb-2">
                  Certifications
                </h3>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white">
                    freeCodeCamp
                  </h4>
                  <p className="text-blue-400 text-sm">Responsive Web Design</p>
                  <a
                    href="https://www.freecodecamp.org/certification/UmarDevWorks/responsive-web-design"
                    className="text-cyan-400 hover:underline mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-800/50"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-16">
              <span className="text-blue-400 font-medium tracking-widest">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Let's Build Something Amazing
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                I'm currently open to new opportunities and collaborations.
                Whether you have a project in mind or just want to connect, feel
                free to reach out!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.38-.56-2-1.74-2s-1.76.62-1.76 2v5.5h-3v-10h3v1.32c.42-.62 1.35-1.32 2.74-1.32 2.01 0 3.26 1.19 3.26 3.74v6.26z" />
                </svg>
              </a>

              <a
                href="https://github.com/UmarDevWorks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-700 hover:border-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.396 7.862 10.918.575.106.785-.25.785-.555 0-.274-.01-1.001-.016-1.963-3.198.695-3.875-1.542-3.875-1.542-.523-1.327-1.278-1.68-1.278-1.68-1.045-.715.08-.701.08-.701 1.156.081 1.765 1.188 1.765 1.188 1.028 1.763 2.694 1.253 3.35.958.104-.744.402-1.253.731-1.541-2.553-.291-5.236-1.276-5.236-5.678 0-1.254.45-2.278 1.188-3.079-.119-.291-.516-1.464.112-3.05 0 0 .972-.312 3.183 1.176A11.07 11.07 0 0112 6.844c.984.004 1.977.133 2.902.391 2.21-1.488 3.18-1.176 3.18-1.176.63 1.586.233 2.759.114 3.05.741.801 1.187 1.825 1.187 3.079 0 4.412-2.688 5.383-5.252 5.669.414.356.78 1.056.78 2.133 0 1.54-.015 2.78-.015 3.159 0 .308.207.666.79.552C20.713 21.39 24 17.083 24 12c0-6.352-5.148-11.5-12-11.5z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
