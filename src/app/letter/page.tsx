'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import NoiseBackground from '../../components/NoiseBackground'
import { useState } from 'react';

export default function Letter() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="min-h-screen bg-pink-500 text-white overflow-hidden">
      <NoiseBackground />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex min-h-screen flex-col items-center justify-center md:p-8 p-2"
      >
        <div className="max-w-2xl md:p-8 p-2">
          <h1 className="mb-6 text-center font-bold text-white glam-text-shadow md:text-4xl text-xl">Welcome to the Glam Rock Party!</h1>
          <p className="mb-4 md:text-lg text-base">
            Твоя следующая цель: <b>53.193229, 50.087972</b>.
          </p>
          <Image src="/images/glam-rock-party.jpg" alt="Glam Rock Party" width={600} height={300} className="mb-6 rounded-lg" />
          
          <p className="mb-4 md:text-lg text-base">
            Привет! Ты успешно справился(ась) с первыми трудностями и уже прошел(ла) дальше, что мы ожидали. Уверен, что поиск кода/пароля был не самым простым делом, но это только начало нашего увлекательного пути.
          </p>
          <p className="mb-4 md:text-lg text-base">
            Нам было важно проверить твои намерения, и ты справился(ась) на отлично! 
          </p>
          <Image src="/images/glam-rock-band.jpg" alt="Glam Rock Band" width={600} height={300} className="mb-6 rounded-lg" />
          
          <div className="mb-6">
            <button 
              className="text-lg font-bold text-white"
              onClick={() => setShowImage(!showImage)}
            >
              Чит
            </button>
            {showImage && (
              <Image src="/images/cheat.jpg" alt="Glam Rock Band" width={600} height={300} className="mb-6 rounded-lg" />
            )}
          </div>
          <div className="mt-8 text-center">
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Glam Rock Party!</p>
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Date: December 28, 2024</p>
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Time: 11:00 PM - 3:00 AM</p>
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Venue: Volgacabel</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

