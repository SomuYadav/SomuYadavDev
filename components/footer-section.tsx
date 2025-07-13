import Image from "next/image"
import Link from "next/link"
import { socialLinks } from "@/data/social-links"

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              {/* Placeholder for a profile image or logo */}
              <Image
                src="/css/img/profile.png"
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <Image
                    src={link.icon || "/placeholder.svg"}
                    alt={link.name}
                    width={32}
                    height={32}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              {
                "To utilize my abilities and talent to work in a challenging environment that would facilitate continuous learning and exposure to ideas that achieve personal, professional and organizational growth."
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
