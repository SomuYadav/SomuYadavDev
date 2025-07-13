import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  subtitle: string
  imageSrc: string
  iconSrc: string
  description: string
  role: string[]
  technologies: string[]
  appStoreLink: string
  imageRight?: boolean
}

export function ProjectCard({
  title,
  subtitle,
  imageSrc,
  iconSrc,
  description,
  role,
  technologies,
  appStoreLink,
  imageRight = false,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-6xl mx-auto my-8 shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <div className={`flex flex-col md:flex-row items-center gap-8 ${imageRight ? "md:flex-row-reverse" : ""}`}>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={`${title} App Screenshot`}
              width={400}
              height={600}
              className="rounded-lg object-contain shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image
                src={iconSrc || "/placeholder.svg"}
                alt={`${title} App Icon`}
                width={64}
                height={64}
                className="rounded-xl mr-4"
              />
              <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            {role.length > 0 && (
              <>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">My Role:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                  {role.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Technologies:</h4>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              {technologies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Link href={appStoreLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                View on App Store
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
