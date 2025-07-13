"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  ChevronDown,
  Smartphone,
  Code2,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      name: "Walmart",
      description: "E-commerce platform serving 50M+ users with advanced cart management and Walmart Plus integration",
      image: "/img/index/walmartApp.png",
      logo: "/img/index/WalmartAppIcon.png",
      tech: ["SwiftUI", "GraphQL", "Combine"],
      metrics: ["50M+ Users", "0.5% Crash Rate", "93% Test Coverage"],
      link: "https://apps.apple.com/us/app/walmart-shopping-grocery/id338137227",
    },
    {
      name: "Nykaa",
      description: "Beauty and fashion platform with AR try-on features and unified product experiences",
      image: "/img/index/NykaaBackground.png",
      logo: "/img/index/NykaaApp.png",
      tech: ["UIKit", "MVVM", "ML Kit"],
      metrics: ["10M+ Users", "35% Faster UI", "50% Faster Releases"],
      link: "https://apps.apple.com/in/app/nykaa-beauty-shopping-app/id1042709191",
    },
    {
      name: "Digivalet",
      description: "Luxury hotel automation with WatchOS companion and smart home integration",
      image: "/img/index/flexiasiamock.png",
      logo: "/img/index/AppICon.png",
      tech: ["Swift", "WatchOS", "WidgetKit"],
      metrics: ["500K+ Users", "100% Swift", "Luxury UX"],
      link: "#",
    },
    {
      name: "Kashish",
      description: "Entertainment platform with streaming capabilities and social features",
      image: "/img/index/KashishGlossy.png",
      logo: "/img/index/KashishIcon.png",
      tech: ["UIKit", "AVKit", "Core Animation"],
      metrics: ["200K+ Users", "Streaming", "Social Features"],
      link: "#",
    },
  ]

  const skills = {
    "Programming Languages": ["Swift", "Objective-C", "Java", "Ruby", "Python"],
    Frameworks: [
      "UIKit",
      "SwiftUI",
      "Observation",
      "Combine",
      "CoreAnimation",
      "StoreKit",
      "CoreLocation",
      "AVFoundation",
      "UserNotifications",
      "XCTest",
      "XCUITest",
      "CallKit",
      "ARKit",
      "MetalKit",
      "VoIP",
      "WidgetKit",
    ],
    Architecture: ["MVVM-C", "MVVM", "MVP", "VIPER", "MVC"],
    Storage: ["MySQL", "SQLite", "Core Data", "Swidata", "Keychain", "iCloud", "AWS"],
    "Design Patterns": ["Coordinator", "Builder", "Factory", "Facade", "Adapter", "Singleton", "Reactive", "State"],
    "Tools & Analytics": ["Git", "Firebase", "JIRA", "Splunk", "OpenObserve"],
    APIs: ["GraphQL", "REST", "APNS", "FCM"],
    Testing: ["XCUITest", "XCTest", "A/B Testing (App Store, Firebase & Revenuecat)"],
    UI: ["Adaptive Layout", "Compositional Layout", "Split View"],
    "CI/CD": ["CircleCI", "Jenkins", "Github Actions", "Looper"],
    Additional: ["Accessibility", "Core Graphics", "Shell Script", "Tuist", "Swift Script", "Core Animation"],
  }

  const experiences = [
    {
      company: "Walmart (Fintech & Ecomm)",
      role: "Senior Software Engineer - iOS",
      period: "JAN 2022 - Present",
      location: "Bangalore",
      achievements: [
        "Implemented MVVM-Coordinator pattern, ensuring scalability and efficiency.",
        "Integrated GraphQL for optimized backend data fetching, used Ruby and Python for script.",
        "Achieved 93% code coverage through rigorous testing and flexible UI mock creation.",
        "Enhanced accessibility standards, improving inclusive user experiences.",
        "Resolved critical NSDiffableDataSource bugs and enhanced data handling.",
        "Developed app launch and crash tracking, reducing crash rates from 6% to 0.5%.",
        "Adopted SwiftUI to create dynamic and responsive user interfaces.",
        "Designed and developed a Cart module and deep link tester app for automation.",
        "Applied design patterns (Builder, Facade, MVC, Singleton, Adapter) for maintainability.",
        "Integrated Accessibility, XCUITest, and XCUnit Test frameworks for quality assurance.",
        "Led fintech security enhancements with robust encryption for sensitive data.",
        "Mentored junior developers and collaborated with cross-functional teams.",
      ],
      logo: "/img/index/WalmartAppIcon.png",
    },
    {
      company: "Nykaa",
      role: "Senior Software Engineer - iOS",
      period: "OCT 2021 - JAN 2022",
      location: "Gurgaon",
      achievements: [
        "Built and maintained core features for Nykaa Beauty and Fashion apps.",
        "Developed the Tabbed Widget Section for the PDP Module using MVVM.",
        "Established CI/CD pipelines with Jenkins, reducing release times.",
        "Created a Swift Package Manager for Theme UI for modular development.",
        "Designed and optimized Order Details Page and 'Try It Out' Mirror Feature.",
        "Utilized advanced Collection View Layouts with Compositional Layout.",
      ],
      logo: "/img/index/NykaaApp.png",
    },
    {
      company: "Digivalet",
      role: "Product Engineer (iOS)",
      period: "SEPT 2020 - AUG 2021",
      location: "Indore",
      achievements: [
        "Developed and maintained iOS apps (BrandedResidence, ButlerStation, PalaceApp) with SwiftUI, Combine, and UIKit.",
        "Migrated legacy apps from Objective-C to Swift, enhancing maintainability.",
        "Created WatchOS app and implemented MetalKit and WidgetKit for advanced UI features.",
        "Improved networking in the DVUtility Swift package and optimized URLCache.",
        "Documented workflows and conducted rigorous testing for reliability.",
      ],
      logo: "/img/index/AppICon.png", // Assuming a generic app icon if specific not provided
    },
    {
      company: "Consagous Technologies",
      role: "iOS Developer",
      period: "AUG 2019 - APRIL 2020",
      location: "Indore",
      achievements: [
        "Designed and developed POSITOOT and Hi-Cabs apps, scaling Hi-Cabs to 1M+ users.",
        "Implemented real-time chat, CoreML, Speech Recognition, and Core Bluetooth.",
        "Built a custom Swift package for API handling with enum-based state management.",
      ],
      logo: "/img/index/AppICon.png", // Assuming a generic app icon if specific not provided
    },
    {
      company: "Dexbytes Infotech",
      role: "iOS Developer",
      period: "OCT 2018 - AUG 2019",
      location: "Indore",
      achievements: [
        "Developed Aircon and Flexiasia apps with advanced VOIP features, also build few api in python.",
        "Integrated Sinch Library, Stripe payments, and CallKit for enhanced functionality.",
        "Built a custom Network Manager for API handling with scalable MVC with Delegate patterns.",
      ],
      logo: "/img/index/AppIConFlexiasia.jpg", // Using Flexiasia icon
    },
    {
      company: "Natraj Infotech",
      role: "iOS Internship",
      period: "MARCH 2017 - JULY 2018",
      location: "Indore",
      achievements: ["Developed (iPad, iPhone App) and deployed Kashish shopping experience app from scratch."],
      logo: "/img/index/KashishIcon.png", // Using Kashish icon
    },
  ]

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Employee of the Year",
      description: "Digivalet (2019) & Dexbytes (2020)",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Featured Speaker",
      description: "Indore Swift Meetup 2020 on Compositional Layout & Combine",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Open Source Contributor",
      description: "SKActivityIndicatorView & AppAuthWrapper",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Medium Author",
      description: "Published technical articles related to iOS development",
    },
  ]

  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "Rajiv Gandhi Technical University, Indore",
      period: "JUL 2014 - JUNE 2018",
      grade: "7.2 CGPA",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Govt. Higher Sec. School, Hoshangabad",
      period: "JUL 2012 - JUL 2014",
      grade: "83%",
    },
    {
      degree: "Certifications",
      institution: "WWDC (2017-2018) & IIT Madras 2017 AI and DSA Certification Program",
      period: "",
      grade: "",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Somu Yadav
            </motion.button>

            <div className="hidden md:flex space-x-8">
              {["Work", "About", "Skills", "Education", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.a
              href="/resume/SOMU YADAV-RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 rounded-full"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image src="/css/img/profile.jpg" alt="Somu Yadav" fill className="rounded-full object-cover" priority />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gray-200"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
          >
            iOS Engineer
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.25, 0, 1] }}
          >
            Building exceptional mobile experiences with <span className="text-gray-900 font-medium">7+ years</span> of
            expertise in Swift, SwiftUI, and scalable iOS architecture.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.25, 0, 1] }}
          >
            <Button
              onClick={() => scrollToSection("work")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
              size="lg"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
              size="lg"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com/SomuYadav" },
              { icon: Linkedin, href: "https://linkedin.com/in/somendrayadav/", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/Somendra_Dev" },
              { icon: Mail, href: "mailto:somendra.sy@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-gray-700" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "7+", label: "Years Experience", icon: Code2 },
              { value: "50M+", label: "Users Reached", icon: Users },
              { value: "15+", label: "Apps Delivered", icon: Smartphone },
              { value: "93%", label: "Test Coverage", icon: Award },
            ].map((stat, index) => (
              <FadeInWhenVisible key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Featured Work</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Crafting mobile experiences that serve millions of users worldwide
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <FadeInWhenVisible key={project.name} delay={index * 0.2}>
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.name} logo`}
                        width={48}
                        height={48}
                        className="rounded-xl mr-4"
                      />
                      <h3 className="text-3xl font-light">{project.name}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.description}</p>

                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Impact</h4>
                      <div className="space-y-2">
                        {project.metrics.map((metric) => (
                          <div key={metric} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3" />
                            <span className="text-gray-600">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        View on App Store
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.a>
                    )}
                  </div>

                  <motion.div
                    className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2rem] p-8 overflow-hidden shadow-xl">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        width={400}
                        height={600}
                        className="mx-auto max-w-full h-auto rounded-xl"
                      />
                    </div>
                  </motion.div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8">About Me</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Passionate about Apple’s ecosystem with 7 years of experience building apps for iOS, iPadOS, tvOS,
                    and watchOS. Skilled in diverse domains like E-commerce, Healthcare, and Real Estate, delivering
                    impactful results.
                  </p>
                  <p>
                    Active in the iOS community, contributing to open source and sharing insights through talks. I
                    believe in writing code that not only works but is maintainable, testable, and delightful to use.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-2">
                        {achievement.icon}
                        <div className="text-2xl font-light ml-2">{achievement.title}</div>
                      </div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="relative">
                <Card className="p-8 bg-white border-0 shadow-xl rounded-[2rem] hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-light mb-8">Professional Summary</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Current Role</span>
                      <span className="text-sm text-gray-500">Senior iOS Engineer at Walmart</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Location</span>
                      <span className="text-sm text-gray-500">Bangalore, India</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Open Source</span>
                      <span className="text-sm text-gray-500">Active Contributor</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Technical Writing</span>
                      <span className="text-sm text-gray-500">Medium Publications</span>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Professional Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                A journey through leading technology companies, building scalable mobile solutions.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="space-y-16">
            {experiences.map((job, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <Card className="p-8 bg-white border-0 shadow-xl rounded-[2rem] hover:shadow-2xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <Image
                        src={job.logo || "/placeholder.svg"}
                        alt={`${job.company} logo`}
                        width={56}
                        height={56}
                        className="rounded-xl mr-4 object-contain"
                      />
                      <div>
                        <h3 className="text-2xl font-light">{job.role}</h3>
                        <p className="text-lg text-gray-600">
                          {job.company} <span className="text-sm text-gray-500">({job.location})</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{job.period}</span>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Technical Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Comprehensive skills across the iOS development ecosystem and modern software engineering practices.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <FadeInWhenVisible key={category} delay={index * 0.1}>
                <Card className="p-8 bg-white border-0 shadow-xl rounded-[2rem] hover:shadow-2xl transition-shadow h-full">
                  <h3 className="text-2xl font-light mb-6">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Education & Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Foundational knowledge and continuous learning in computer science and mobile development.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <Card className="p-8 bg-white border-0 shadow-xl rounded-[2rem] hover:shadow-2xl transition-shadow h-full">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 text-gray-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-light">{edu.degree}</h3>
                      <p className="text-lg text-gray-600">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{edu.period}</div>
                  {edu.grade && <div className="text-sm text-gray-500">Grade: {edu.grade}</div>}
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Ready to discuss your next iOS project or explore collaboration opportunities?
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <FadeInWhenVisible delay={0.2}>
                <Card className="p-8 bg-white border-0 shadow-xl rounded-[2rem] hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-light mb-8">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <a
                          href="mailto:somendra.sy@gmail.com"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          somendra.sy@gmail.com
                        </a>
                        <br />
                        <a
                          href="mailto:somendra007.sy@gmail.com"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          somendra007.sy@gmail.com
                        </a>
                        <br />
                        <a
                          href="mailto:somendra.sy@icloud.com"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          somendra.sy@icloud.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+916265834002" className="text-gray-600 hover:text-gray-900 transition-colors">
                          +91 6265834002
                        </a>
                        <br />
                        <a href="tel:+918962864002" className="text-gray-600 hover:text-gray-900 transition-colors">
                          +91 8962864002
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-gray-600">Bangalore, India</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <Card className="p-8 bg-white border-0 shadow-xl rounded-[2rem] hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-light mb-8">Quick Links</h3>
                  <div className="space-y-4">
                    {[
                      { label: "GitHub", href: "https://github.com/SomuYadav", icon: Github },
                      { label: "LinkedIn", href: "https://linkedin.com/in/somendrayadav/", icon: Linkedin },
                      { label: "Twitter", href: "https://twitter.com/Somendra_Dev", icon: Twitter },
                      { label: "Medium Blog", href: "https://medium.com/@somuyadav", icon: BookOpen },
                      { label: "Resume", href: "/resume/SOMU YADAV-RESUME.pdf", icon: Download },
                    ].map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center space-x-3">
                          <link.icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">{link.label}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </Card>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 mb-4 md:mb-0">© 2024 Somu Yadav. Crafted with precision and care.</div>
            <div className="flex items-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/SomuYadav" },
                { icon: Linkedin, href: "https://linkedin.com/in/somendrayadav/" },
                { icon: Twitter, href: "https://twitter.com/Somendra_Dev" },
                { icon: Mail, href: "mailto:somendra.sy@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
