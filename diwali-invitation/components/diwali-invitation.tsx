"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

export function DiwaliInvitation() {
  const [isRsvped, setIsRsvped] = useState(false)
  const [firecrackers, setFirecrackers] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showFullPage, setShowFullPage] = useState(false)

  const triggerFirecrackers = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Create multiple firecracker particles
    const newFirecrackers = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
    }))

    setFirecrackers((prev) => [...prev, ...newFirecrackers])

    // Remove firecracker elements after animation
    setTimeout(() => {
      setFirecrackers((prev) => prev.slice(newFirecrackers.length))
    }, 800)
  }

  if (!showFullPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 flex items-center justify-center overflow-hidden">
        {/* Firecracker particles */}
        {firecrackers.map((cracker) => {
          const angle = Math.random() * Math.PI * 2
          const distance = 100 + Math.random() * 100
          const tx = Math.cos(angle) * distance
          const ty = Math.sin(angle) * distance
          const colors = ["bg-red-500", "bg-yellow-400", "bg-orange-500", "bg-green-500", "bg-blue-500"]
          const randomColor = colors[Math.floor(Math.random() * colors.length)]

          return (
            <div
              key={cracker.id}
              className={`firecracker w-2 h-2 rounded-full ${randomColor}`}
              style={
                {
                  left: `${cracker.x}px`,
                  top: `${cracker.y}px`,
                  "--tx": `${tx}px`,
                  "--ty": `${ty}px`,
                } as React.CSSProperties
              }
            />
          )
        })}

        <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4">
          {/* Top Flower Garland */}
          <div className="absolute top-8 left-0 right-0 text-center">
            <div className="text-5xl tracking-widest opacity-90 animate-pulse">🌸 🌺 🌼 🌻 🌸 🌺 🌼 🌻 🌸</div>
          </div>

          {/* Left side diyas */}
          <div className="absolute left-4 md:left-12 top-1/3 space-y-8">
            <div className="text-6xl animate-bounce" style={{ animationDelay: "0s" }}>
              🪔
            </div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: "0.3s" }}>
              ✨
            </div>
            <div className="text-6xl animate-bounce" style={{ animationDelay: "0.6s" }}>
              🪔
            </div>
          </div>

          {/* Right side diyas */}
          <div className="absolute right-4 md:right-12 top-1/3 space-y-8">
            <div className="text-6xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              🪔
            </div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: "0.5s" }}>
              ✨
            </div>
            <div className="text-6xl animate-bounce" style={{ animationDelay: "0.8s" }}>
              🪔
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 drop-shadow-lg text-balance">Homies</h1>
              <h2 className="text-5xl md:text-7xl font-bold text-orange-300 drop-shadow-lg">Presents</h2>
              <h3 className="text-6xl md:text-8xl font-bold text-red-300 drop-shadow-lg text-balance">
                Diwali Celebration
              </h3>
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-1 w-16 bg-yellow-300 rounded-full" />
              <div className="text-4xl">🪔</div>
              <div className="h-1 w-16 bg-yellow-300 rounded-full" />
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-yellow-100 font-semibold drop-shadow-lg">
              A Night of Lights, Laughter & Togetherness
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-amber-900 font-bold text-xl px-12 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-transform"
                onClick={(e) => {
                  triggerFirecrackers(e)
                  setTimeout(() => setShowFullPage(true), 600)
                }}
              >
                <span className="text-3xl mr-3">🪔</span>
                Enter the Celebration
              </Button>
            </div>
          </div>

          {/* Bottom Flower Garland */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className="text-5xl tracking-widest opacity-90 animate-pulse">🌻 🌼 🌺 🌸 🌻 🌼 🌺 🌸 🌻</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Firecracker particles */}
      {firecrackers.map((cracker) => {
        const angle = Math.random() * Math.PI * 2
        const distance = 100 + Math.random() * 100
        const tx = Math.cos(angle) * distance
        const ty = Math.sin(angle) * distance
        const colors = ["bg-red-500", "bg-yellow-400", "bg-orange-500", "bg-green-500", "bg-blue-500"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        return (
          <div
            key={cracker.id}
            className={`firecracker w-2 h-2 rounded-full ${randomColor}`}
            style={
              {
                left: `${cracker.x}px`,
                top: `${cracker.y}px`,
                "--tx": `${tx}px`,
                "--ty": `${ty}px`,
              } as React.CSSProperties
            }
          />
        )
      })}

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Top Flower Garland */}
          <div className="text-center mb-6">
            <div className="text-4xl tracking-widest opacity-80">🌸 🌺 🌼 🌻 🌸 🌺 🌼 🌻 🌸</div>
          </div>

          {/* Decorative Diyas */}
          <div className="flex justify-around items-center mb-8 px-4">
            <div className="text-5xl animate-bounce" style={{ animationDelay: "0s" }}>
              🪔
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              ✨
            </div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: "0.4s" }}>
              🪔
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              ✨
            </div>
            <div className="text-5xl animate-bounce" style={{ animationDelay: "0s" }}>
              🪔
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 text-balance">Homies Diwali Celebration</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Header section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="text-7xl mb-2 animate-pulse">🪔</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              You're Invited to Our
              <span className="block text-primary mt-2">Diwali Celebration</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance">
              Join us for an evening of lights, laughter, and togetherness as we celebrate the Festival of Lights
            </p>
          </div>

          {/* Bottom Flower Garland before card */}
          <div className="text-center mb-8">
            <div className="text-4xl tracking-widest opacity-80">🌻 🌼 🌺 🌸 🌻 🌼 🌺 🌸 🌻</div>
          </div>

          {/* Main invitation card */}
          <Card className="bg-card/95 backdrop-blur border-primary/20 shadow-2xl mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12">
              <div className="text-center text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Diwali Meetup 2025</h2>
                <p className="text-lg opacity-90">A Night of Celebration & Community</p>
              </div>
            </div>

            {/* Details section */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Date and Time */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Date & Time</h3>
                  <p className="text-muted-foreground">Monday, October 20th, 2025</p>
                  <p className="text-muted-foreground">7:00 PM - 10:00 PM</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Near Capital Mall</p>
                  <p className="text-muted-foreground">Venue details to be shared with confirmed guests</p>
                </div>
              </div>

              {/* Attendees */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">What to Expect</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>✨ Traditional Diwali decorations & lights</li>
                    <li>🍛 Delicious Indian cuisine & sweets</li>
                    <li>🎵 Music, dancing & cultural performances</li>
                    <li>🎆 Fireworks display at sunset</li>
                  </ul>
                </div>
              </div>

              {/* Dress code */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Dress Code:</span> Traditional Indian attire
                  encouraged (saree, kurta, lehenga, etc.) or festive formal wear
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center space-y-8">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Celebrate Diwali 2025?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
                Diwali is the Festival of Lights, symbolizing the victory of light over darkness and good over evil. In
                2025, let's come together to celebrate our shared values, strengthen our bonds, and create unforgettable
                memories with our community. It's a time for joy, gratitude, and togetherness!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-foreground font-semibold">Click below to see what awaits you!</p>
              <Link href="/video">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6"
                  onClick={triggerFirecrackers}
                >
                  <span className="text-2xl mr-3">🪔</span>
                  Celebrate with Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-lg font-semibold text-primary mb-2">Shubhchintak..</p>
            <p className="text-2xl font-bold text-foreground">Apla SOHAM</p>
            <p className="text-sm text-muted-foreground mt-4">🪔✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}
