"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>UmarDevWorks - Web Developer </title>
        <meta
          name="description"
          content="Explore Umar Dev Works' portfolio showcasing web development and design projects, including HTML, CSS, JavaScript, and more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Umar Dev Works" />
        <meta
          name="keywords"
          content="Umar Dev Works, web development, design, HTML, CSS, JavaScript, portfolio"
        />
        <link rel="canonical" href="https://umardevworks.com" />

        <meta
          property="og:title"
          content="Umar Dev Works - Web Development & Design Portfolio"
        />
        <meta
          property="og:description"
          content="Showcasing web development and design projects by Umar Dev Works."
        />
        <meta property="og:url" content="https://umardevworks.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar></Navbar>

      <div className="bg-white font-inter">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-white min-h-screen flex flex-col justify-center items-center text-center px-4"
        >
          <h1 className="text-black font-bold text-7xl md:text-8xl leading-tight">
            Hi, I&apos;m Umar
          </h1>
          <h2 className="text-blue-700 font-bold text-4xl md:text-5xl mt-6">
            <Typewriter
              words={["Building Modern, High-Quality Websites"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-black font-thin mt-6 text-xl md:text-2xl max-w-2xl">
            I specialize in building modern, responsive websites and developing
            innovative tech ideas to bring visions to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="#projects">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition duration-300 text-lg">
                View Portfolio
              </button>
            </Link>
            <Link href="#contact">
              <button className="hover:bg-blue-700 hover:text-white text-blue-600 border-blue-600 border-2 py-3 px-8 rounded-lg transition duration-300 text-lg">
                Contact Me
              </button>
            </Link>
          </div>
        </section>
        <section
          id="experience"
          className="bg-white py-16 px-4 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center">
              Experience
            </h2>

            <div className="space-y-8">
              {/* Experience*/}
              <div className="border-l-4 border-blue-600 pl-6 relative group">
                <div className="absolute left-[-11px] top-2 w-5 h-5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-black">
                  Founder & Developer - MakerBox.pk
                </h3>
                <span className="text-gray-500 text-sm">2023 - Present</span>
                <p className="text-gray-700 mt-2">
                  Built and launched a STEM-focused business, designing
                  educational kits, ecommerce platforms, and marketing
                  strategies independently.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 relative group">
                <div className="absolute left-[-11px] top-2 w-5 h-5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-black">
                  Home Automation - ESP Microcontrollers
                </h3>
                <span className="text-gray-500 text-sm">2022 - Present</span>
                <p className="text-gray-700 mt-2">
                  Home Automation: Developed with multiple Arduino &
                  ESP32/ESP8266 based sensors for home automation,including
                  temperature, humidity, and motion sensors
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 relative group">
                <div className="absolute left-[-11px] top-2 w-5 h-5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-black">
                  Discord Bot & Dashboard
                </h3>
                <span className="text-gray-500 text-sm">2023</span>
                <p className="text-gray-700 mt-2">
                  Implemented API integrations to display system stats and
                  feedback data, including a patch notes feedback feature for a
                  Discord bot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-100">
          <h1 className="text-black font-bold text-5xl text-center mb-12">
            Projects
          </h1>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <Image
                src="/makerbox.webp"
                alt="MakerBox Project"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="mt-6 text-black text-xl font-semibold text-center">
                MakerBox.pk - STEM Kits
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Founded MakerBox.pk, providing educational kits for hands-on
                STEM learning, including project development and e-commerce
                website setup.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <Image
                src="/website.png"
                alt="Portfolio website"
                width={800}
                height={800}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-black mt-6 text-xl font-semibold text-center">
                Portfolio Website
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Developed a modern portfolio website using Next.js and
                TailwindCSS to showcase personal and client projects.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <Image
                src="/botdash.png"
                alt="Discord Bot"
                width={800}
                height={800}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-black mt-6 text-xl font-semibold text-center">
                Discord Bot Dashboard
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Developed a customizable dashboard for managing bot data and
                other functionalities.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <video
                width={800}
                height={800}
                className="w-full h-64 object-cover rounded-md"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/output.mp4" type="video/mp4" />
                <Image
                  src="/Time.jpg"
                  alt="H&T CLOCK"
                  width={800}
                  height={800}
                  className="w-full h-64 object-cover rounded-md"
                />
              </video>

              <h3 className="text-black mt-6 text-xl font-semibold text-center">
                H&T Clock
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                A humidity and temperature display with NTP time and date.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-blue-500">
              Get In Touch
            </h2>
            <p className="text-gray-400 mb-8">
              Im currently open to new opportunities and collaborations. Lets
              connect!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
            2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
            19h-3v-10h3v10zm-1.5-11.28c-.97 
            0-1.75-.78-1.75-1.75s.78-1.75 
            1.75-1.75 1.75.78 1.75 1.75-.78 
            1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.38-.56-2-1.74-2s-1.76.62-1.76 
            2v5.5h-3v-10h3v1.32c.42-.62 1.35-1.32 
            2.74-1.32 2.01 0 3.26 1.19 3.26 3.74v6.26z"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/UmarDevWorks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 .5C5.648.5.5 5.648.5 
            12c0 5.084 3.292 9.396 7.862 
            10.918.575.106.785-.25.785-.555 
            0-.274-.01-1.001-.016-1.963-3.198.695-3.875-1.542-3.875-1.542-.523-1.327-1.278-1.68-1.278-1.68-1.045-.715.08-.701.08-.701 
            1.156.081 1.765 1.188 1.765 
            1.188 1.028 1.763 2.694 1.253 
            3.35.958.104-.744.402-1.253.731-1.541-2.553-.291-5.236-1.276-5.236-5.678 
            0-1.254.45-2.278 1.188-3.079-.119-.291-.516-1.464.112-3.05 
            0 0 .972-.312 3.183 1.176A11.07 
            11.07 0 0112 6.844c.984.004 1.977.133 
            2.902.391 2.21-1.488 3.18-1.176 
            3.18-1.176.63 1.586.233 2.759.114 
            3.05.741.801 1.187 1.825 
            1.187 3.079 0 4.412-2.688 
            5.383-5.252 5.669.414.356.78 1.056.78 
            2.133 0 1.54-.015 2.78-.015 
            3.159 0 .308.207.666.79.552C20.713 
            21.39 24 17.083 24 12c0-6.352-5.148-11.5-12-11.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
