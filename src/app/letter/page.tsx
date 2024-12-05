'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import NoiseBackground from '../../components/NoiseBackground'

export default function Letter() {
  return (
    <div className="min-h-screen bg-pink-500 text-white overflow-hidden">
      <NoiseBackground />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex min-h-screen flex-col items-center justify-center p-8"
      >
        <div className="max-w-2xl p-8">
          <h1 className="mb-6 text-center text-4xl font-bold text-white glam-text-shadow">Welcome to the Glam Rock Party!</h1>
          <Image src="/images/glam-rock-party.jpg" alt="Glam Rock Party" width={600} height={300} className="mb-6 rounded-lg" />
          <p className="mb-4 text-lg">
            Get ready to rock the night away at our exclusive Glam Rock corporate event! Unleash your inner rock star and join us for an
            unforgettable evening of music, glitter, and glamour.
          </p>
          <p className="mb-4 text-lg">
            Dress to impress in your most outrageous and fabulous Glam Rock attire. Think big hair, bold makeup, leather, studs, and all things
            sparkly. It&apos;s time to channel your favorite rock icons and show off your unique style!
          </p>
          <Image src="/images/glam-rock-band.jpg" alt="Glam Rock Band" width={600} height={300} className="mb-6 rounded-lg" />
          <p className="text-lg">
            Get ready to dance the night away to the greatest Glam Rock hits of all time. Our live band will be performing all your favorite
            classics, so prepare to sing your heart out and rock until dawn!
          </p>
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-pink-500 glam-text-shadow">Date: July 15, 2023</p>
            <p className="text-2xl font-bold text-pink-500 glam-text-shadow">Time: 8:00 PM - 2:00 AM</p>
            <p className="text-2xl font-bold text-pink-500 glam-text-shadow">Venue: The Glitter Palace</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

