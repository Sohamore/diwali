"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="mb-6 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Invitation
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
              Diwali Celebration 2025
            </h1>
            <p className="text-lg text-muted-foreground">Experience the magic of our Diwali meetup</p>
          </div>

          {/* Video container */}
          <div className="bg-card/95 backdrop-blur border border-primary/20 rounded-lg overflow-hidden shadow-2xl">
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveGram.App_AQPWN11UiNiGoK13BlFyGo7b0G4oG5LUeci-xth6gBM2ywNaH2YdQ4f0PeSzn2SuvIlUrV9afYk52hJUvqBoblXLpcKDRk_cW57MeRU-LHCZSIc8geHBIbsXHOLitp0FZsKHxb.mp4"
                controls
                autoPlay
                className="w-full h-full"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Info section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">🎉 Event Highlights</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>✨ Stunning Diwali decorations</li>
                <li>🎆 Spectacular fireworks</li>
                <li>🍛 Authentic Indian cuisine</li>
                <li>🎵 Live music & performances</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">📍 Event Details</h3>
              <p className="text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Date:</span> October 20th, 2025
              </p>
              <p className="text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Time:</span> 7:00 PM - 10:00 PM
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> Near Capital Mall
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <span className="text-xl mr-2">🪔</span>
                Back to Invitation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
