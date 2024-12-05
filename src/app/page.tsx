'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import NoiseBackground from '../components/NoiseBackground'
import Preloader from '../components/Preloader'


export default function Home() {
  const [password, setPassword] = useState(['', '', '', ''])
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [preloaderDone, setPreloaderDone] = useState(false)
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)]
  const router = useRouter()

  

  const handleChange = (index: number, value: string) => {
    const newPassword = [...password]
    newPassword[index] = value.toUpperCase()
    setPassword(newPassword)

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus()
    }

    if (index === 3 && value) {
      checkPassword(newPassword)
    }
  }

  const checkPassword = (pass: string[]) => {
    const isCorrect = pass.join('') === 'GLAM'
    setIsValid(isCorrect)

    if (isCorrect) {
      setTimeout(() => {
        router.push('/letter')
      }, 1500)
    } else {
      setTimeout(() => {
        setPassword(['', '', '', ''])
        setIsValid(null)
        inputRefs[0].current?.focus()
      }, 1000)
    }
  }

  useEffect(() => {
    inputRefs[0].current?.focus()
  }, [])

  return (
    <div className="min-h-screen bg-pink-500 text-white overflow-hidden">
      <Preloader onDone={() => setPreloaderDone(true)} />
      <NoiseBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: preloaderDone ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex min-h-screen flex-col items-center justify-center"
      >
        <h1 className="mb-8 text-4xl font-bold text-white glam-text-shadow">ВВЕДИТЕ КОД</h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {password.map((char, index) => (
              <motion.input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={char}
                onChange={(e) => handleChange(index, e.target.value)}
                className={`h-16 w-16 rounded-md border-2 ${
                  isValid === null ? 'border-white' : isValid ? 'border-green-500' : 'border-red-500'
                } bg-transparent text-center text-3xl text-white outline-none glam-text-shadow`}
                whileFocus={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                disabled={isValid !== null}
              />
            ))}
          </div>
          <AnimatePresence>
            {isValid !== null && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`text-xl bg-white rounded-lg p-5 font-bold ${isValid ? 'text-green-500' : 'text-red-500'} glam-text-shadow`}
              >
                {isValid ? 'Доступ разрешен! Переход...' : 'Не верный код. Попробуйте еще раз.'}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}