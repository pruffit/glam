'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import NoiseBackground from '../../components/NoiseBackground'

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
          <h1 className="mb-6 text-center font-bold text-white glam-text-shadow md:text-4xl text-xl">TNX!</h1>
          <p className="mb-4 md:text-lg text-base">
					Мы просто в восторге от того, как ты справился со всеми заданиями и дошёл до конца — это было не просто, но ты сделал это! Огромное тебе спасибо, что включился в эту авантюру.
          </p>
					<Image src="/images/thanks.gif" alt="Glam Rock Party" width={600} height={300} className="mb-6 rounded-lg" />
          <p className="mb-4 md:text-lg text-base">
					У меня для тебя классные новости — официальное приглашение уже у тебя на руках, и ты становишься нашим особым гостем на корпоративе! Это значит, что нас ждёт куча веселых сюрпризов и новогоднего настроения, а главное — у тебя будет немного больше всего, чем у остальных! Только не забудь взять этот пригласительный с собой.
          </p>
          <div className="mt-8 text-center">
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Glam Rock Party!</p>
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Date: December 28, 2024</p>
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Time: 11:00 PM - 3:00 AM</p>
            <p className="md:text-2xl text-lg font-bold text-white glam-text-shadow">Venue: Volgacabel</p>
						<div className="md:mt-10 mt-4">
							<button 
								className="md:text-2xl text-lg font-bold text-black glam-text-shadow font-mono"
								onClick={() => setShowImage(!showImage)}
							>
								TITLES
							</button>
							{showImage && (
								<ul className="flex flex-col items-center justify-center md:p-8 p-4 font-mono">
									<h3 className='text-xl font-bold'>CREATED BY:</h3>
									<li className='md:text-3xl p-2 text-xl'>Maria <div className='text-black inline font-semibold'>Nikolaeva</div>
									</li>
									<li className='md:text-3xl p-2 text-xl'>Vladislav <div className='text-black inline font-semibold'>Vodichka</div></li>
									<li className='md:text-3xl p-2 text-xl'>Anjela <div className='text-black inline font-semibold'>Sitnova</div></li>
									<li className='md:text-3xl p-2 text-xl'>Daria <div className='text-black inline font-semibold'>Ustimenko</div></li>
									<li className='md:text-3xl p-2 text-xl'>Alina <div className='text-black inline font-semibold'>Kashkina</div></li>
									<li className='md:text-3xl p-2 text-xl'>Akim <div className='text-black inline font-semibold'>Nedoknev</div></li>
									<li className='md:text-3xl p-2 text-xl'>Elena <div className='text-black inline font-semibold'>Andreychenko</div></li>
									<li className='md:text-3xl p-2 text-xl'>Nikolay <div className='text-black inline font-semibold'>fizz dream</div></li>
									<li className='md:text-3xl p-2 text-xl'>Danil <div className='text-black inline font-semibold'>Kotlaev</div></li>
									<div className='text-black md:text-2xl text-base p-4 font-bold'>Maybe we&apos;ll come back again.</div>
								</ul>
							)}
						</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

