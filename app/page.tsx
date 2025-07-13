import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Smartphone,
  Database,
  Settings,
  BookOpen,
  MessageSquare,
  Twitter,
  Download,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const skills = {
    languages: ["Swift", "Objective-C", "Java", "C++", "Python"],
    frameworks: [
      "UIKit",
      "SwiftUI",
      "Combine",
      "Core Data",
      "CallKit",
      "RxSwift",
      "ARKit",
      "WidgetKit",
      "VoIP",
      "MetalKit",
    ],
    architectures: ["MVVM", "VIPER", "MVC", "MVP", "MVVM-Coordinator"],
    tools: ["Git", "CircleCI", "Jenkins", "Bitbucket", "Firebase", "Tuist", "Splunk", "Xcode Instruments"],
    apis: ["GraphQL", "REST", "Bluetooth (BLE)", "APNS", "FCM"],
    testing: ["XCTest", "XCUITest", "A/B Testing", "Snapshot Testing"],
  }

  const experience = [
    {
      title: "Senior Software Engineer - iOS",
      company: "Walmart",
      location: "Bangalore",
      period: "JAN 2022 - Present",
      logo: "/placeholder.svg?height=40&width=40",
      achievements: [
        "Developed centralised Analytics Manager and modularised it via Swift Package Manager",
        "Built key Walmart e-commerce modules like Cart, Returns, and Plus using SwiftUI and Observable",
        "Achieved 93% unit test coverage, leading to 70% reduction in regression issues",
        "Reduced app crash rate from 6% to 0.5% with custom crash tracking mechanisms",
        "Improved network performance by 25% with Apollo-based GraphQL architecture",
      ],
    },
    {
      title: "Senior Software Engineer - iOS",
      company: "Nykaa",
      location: "Gurgaon",
      period: "OCT 2021 - JAN 2022",
      logo: "/placeholder.svg?height=40&width=40",
      achievements: [
        "Developed Product Detail Page Module using MVVM & SPM, cutting UI load time by 35%",
        "Built automated CI/CD pipelines with Jenkins, decreasing release cycle by 50%",
        "Developed 'Try It On' feature using AVFoundation & ML Kit, increasing user engagement",
        "Designed Composable Layouts for adaptive UI across multiple apps",
      ],
    },
    {
      title: "Product Engineer (iOS)",
      company: "Digivalet",
      location: "Indore",
      period: "SEPT 2020 - AUG 2021",
      logo: "/placeholder.svg?height=40&width=40",
      achievements: [
        "Built Digivalet app from scratch and modernised CasaDigi with enhanced UX",
        "Migrated 100% of legacy apps from Objective-C to Swift",
        "Delivered WatchOS and WidgetKit features for smart home automation",
        "Created MetalKit-based UI animations for luxury hotel app experiences",
      ],
    },
  ]

  const projects = [
    {
      title: "Walmart Shopping App",
      description:
        "E-commerce mobile application serving millions of users with advanced cart management, returns processing, and Walmart Plus integration.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["SwiftUI", "GraphQL", "Combine", "Core Data"],
      highlights: ["93% test coverage", "0.5% crash rate", "25% performance improvement"],
      type: "E-commerce",
      appStoreLink: "https://apps.apple.com/us/app/walmart-shopping-grocery/id338137227",
      githubLink: null, // Private repository
      liveDemo: "https://www.walmart.com/",
      stats: { users: "50M+", rating: "4.5", downloads: "100M+" },
    },
    {
      title: "Nykaa Beauty & Fashion",
      description:
        "Multi-brand beauty and fashion platform with AR try-on features and unified product detail pages across different verticals.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["UIKit", "MVVM", "AVFoundation", "ML Kit"],
      highlights: ["35% faster UI load", "50% faster releases", "Cross-platform compatibility"],
      type: "Beauty & Fashion",
      appStoreLink: "https://apps.apple.com/in/app/nykaa-beauty-shopping-app/id1042709191",
      githubLink: null, // Private repository
      liveDemo: "https://www.nykaa.com/",
      stats: { users: "10M+", rating: "4.3", downloads: "50M+" },
    },
    {
      title: "Digivalet Smart Home",
      description:
        "Luxury hotel automation system with WatchOS companion app and widget support for seamless guest experience.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Swift", "WatchOS", "WidgetKit", "MetalKit"],
      highlights: ["Built from scratch", "100% Swift migration", "Luxury UX focus"],
      type: "IoT & Automation",
      appStoreLink: null,
      githubLink: null, // Private repository
      liveDemo: "https://digivalet.com/",
      stats: { users: "500K+", rating: "4.7", downloads: "1M+" },
    },
    {
      title: "Hi-Cabs Ride Sharing",
      description:
        "Ride-sharing application with real-time tracking, CoreML integration, and chat features serving 1M+ users.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Swift", "CoreML", "Core Location", "Speech Recognition"],
      highlights: ["1M+ users", "Real-time tracking", "AI-powered features"],
      type: "Transportation",
      appStoreLink: null,
      githubLink: null, // Private repository
      liveDemo: null,
      stats: { users: "1M+", rating: "4.2", downloads: "5M+" },
    },
    {
      title: "SKActivityIndicatorView",
      description:
        "Open-source Swift library providing customizable activity indicators for iOS applications with multiple animation styles.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Swift", "UIKit", "Core Animation"],
      highlights: ["Open Source", "Multiple animations", "Easy integration"],
      type: "Open Source Library",
      appStoreLink: null,
      githubLink: "https://github.com/SomuYadav/SKActivityIndicatorView",
      liveDemo: null,
      stats: { stars: "150+", forks: "25+", downloads: "10K+" },
    },
    {
      title: "AppAuthWrapper",
      description:
        "Swift wrapper library for OAuth authentication flows, simplifying integration with various authentication providers.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Swift", "OAuth", "Keychain", "URLSession"],
      highlights: ["OAuth integration", "Secure storage", "Multiple providers"],
      type: "Open Source Library",
      appStoreLink: null,
      githubLink: "https://github.com/SomuYadav/AppAuthWrapper",
      liveDemo: null,
      stats: { stars: "75+", forks: "15+", downloads: "5K+" },
    },
  ]

  const blogPosts = [
    {
      title: "Advanced SwiftUI Animations and Transitions",
      excerpt: "Deep dive into creating smooth, performant animations in SwiftUI applications...",
      readTime: "8 min read",
      date: "Dec 2023",
      link: "https://somuyadav.medium.com/advanced-swiftui-animations",
    },
    {
      title: "Building Scalable iOS Architecture with MVVM-Coordinator",
      excerpt: "Learn how to implement a robust architecture pattern for large-scale iOS applications...",
      readTime: "12 min read",
      date: "Nov 2023",
      link: "https://somuyadav.medium.com/mvvm-coordinator-pattern",
    },
    {
      title: "Combine Framework: Reactive Programming in iOS",
      excerpt: "Master reactive programming concepts and implement them effectively in your iOS apps...",
      readTime: "10 min read",
      date: "Oct 2023",
      link: "https://somuyadav.medium.com/combine-reactive-programming",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SY</span>
              </div>
              <span className="font-bold">Somu Yadav</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#blog" className="transition-colors hover:text-foreground/80">
                Blog
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Somu Yadav</h1>
              <p className="text-xl text-muted-foreground md:text-2xl">Senior Software Engineer - iOS</p>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Result-driven iOS engineer with 7+ years of experience in architecting, building, and maintaining
                scalable mobile applications across iOS, iPadOS, tvOS, and watchOS platforms.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/SomuYadav" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/somuyadav" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/somuyadav" target="_blank">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://somuyadav.medium.com" target="_blank">
                  <BookOpen className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Somu Yadav - iOS Developer"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12 border-y bg-muted/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">7+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50M+</div>
            <div className="text-sm text-muted-foreground">Users Reached</div>
          </div>
          <div>
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm text-muted-foreground">Apps Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold">93%</div>
            <div className="text-sm text-muted-foreground">Test Coverage</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Passionate about creating exceptional mobile experiences with a focus on performance, accessibility, and
              user experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">Employee of the Year 2019 & 2020</Badge>
                  <p className="text-sm text-muted-foreground">
                    Recognized at Digivalet and Dexbytes for delivering high-impact features
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">Featured Speaker</Badge>
                  <p className="text-sm text-muted-foreground">
                    Indore Swift Meetup 2020 - Compositional Layout & Combine
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">Open Source Contributor</Badge>
                  <p className="text-sm text-muted-foreground">SKActivityIndicatorView, AppAuthWrapper libraries</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">Technical Writer</Badge>
                  <p className="text-sm text-muted-foreground">
                    Published articles on Swift, Combine, SwiftUI, and mobile architecture
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Impact & Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">7+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">50M+</div>
                    <div className="text-sm text-muted-foreground">Users Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{"<0.5%"}</div>
                    <div className="text-sm text-muted-foreground">Crash Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">93%</div>
                    <div className="text-sm text-muted-foreground">Test Coverage</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Proven expertise in E-commerce, Fintech, Healthcare, and Real Estate domains. Recognized mentor with
                  experience guiding junior engineers and facilitating code reviews.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-24 bg-muted/50">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              A journey through leading technology companies, building scalable mobile solutions.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={job.logo || "/placeholder.svg"}
                        alt={`${job.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <span className="font-semibold">{job.company}</span>
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                      <Calendar className="h-3 w-3" />
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive expertise across the iOS development ecosystem and modern software engineering practices.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Architectures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.architectures.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Tools & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  APIs & Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.apis.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Testing & QA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.testing.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-muted/50">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Showcasing impactful mobile applications and open-source contributions that serve millions of users.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {project.type}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div>
                        <div className="font-semibold">{project.stats.users}</div>
                        <div className="text-muted-foreground">Users</div>
                      </div>
                      <div>
                        <div className="font-semibold flex items-center justify-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {project.stats.rating}
                        </div>
                        <div className="text-muted-foreground">Rating</div>
                      </div>
                      <div>
                        <div className="font-semibold">{project.stats.downloads}</div>
                        <div className="text-muted-foreground">Downloads</div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    {project.appStoreLink && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.appStoreLink} target="_blank">
                          <Smartphone className="mr-1 h-3 w-3" />
                          App Store
                        </Link>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubLink} target="_blank">
                          <Github className="mr-1 h-3 w-3" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.liveDemo} target="_blank">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="container py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Blog Posts</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Sharing insights and knowledge about iOS development, Swift, and mobile architecture.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                    <span>•</span>
                    {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={post.link} target="_blank">
                      Read More
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="https://somuyadav.medium.com" target="_blank">
                <BookOpen className="mr-2 h-4 w-4" />
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 bg-muted/50">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {
                "Let's discuss your next iOS project or collaboration opportunity. I'm always open to interesting conversations."
              }
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <Link href="mailto:somendra.sy@gmail.com" className="text-sm text-muted-foreground hover:underline">
                      somendra.sy@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <Link href="tel:+916265834002" className="text-sm text-muted-foreground hover:underline">
                      +91 6265834002
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-3">Connect with me</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://github.com/SomuYadav" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://linkedin.com/in/somuyadav" target="_blank">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://twitter.com/somuyadav" target="_blank">
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://somuyadav.medium.com" target="_blank">
                        <BookOpen className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>{"I'll get back to you as soon as possible"}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" action="mailto:somendra.sy@gmail.com" method="post" encType="text/plain">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Project collaboration" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">SY</span>
              </div>
              <span className="font-semibold">Somu Yadav</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Somu Yadav. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/SomuYadav"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/somuyadav"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/somuyadav"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://somuyadav.medium.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <BookOpen className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:somendra.sy@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
