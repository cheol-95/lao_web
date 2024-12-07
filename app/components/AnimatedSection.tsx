'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft: boolean;
}

export default function AnimatedSection({ title, description, imageSrc, imageAlt, imageOnLeft }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const contentClass = `space-y-4 ${
    isVisible ? 'animate-fade-in-up' : 'opacity-0'
  }`

  const imageClass = `w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden ${
    isVisible ? 'animate-fade-in-side' : 'opacity-0'
  }`

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row gap-8 items-center">
      <div className={`${imageClass} md:w-1/2 ${imageOnLeft ? 'md:order-first' : 'md:order-last'}`}>
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className={`${contentClass} md:w-1/2 text-center md:text-left`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  )
}
