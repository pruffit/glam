'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { EdgesGeometry, LineBasicMaterial, LineSegments } from 'three'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [loading, setLoading] = useState(true)
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      onDone()
    }, 5000)

    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(200, 200)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(1, 4)
    const edges = new EdgesGeometry(geometry)
    const material = new LineBasicMaterial({ color: 0xffffff })
    const sphere = new LineSegments(edges, material)

    scene.add(sphere)

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(10, 10, 10)
    scene.add(light)

    camera.position.z = 1.7

    const animate = () => {
      requestAnimationFrame(animate)
      sphere.rotation.x += 0.02
      sphere.rotation.y += 0.02
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      clearTimeout(timer)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{ pointerEvents: loading ? 'auto' : 'none' }}
    >
      <div className="bg-black flex items-center space-x-4 z-50 md:flex-row flex-col">
        <div ref={mountRef} className="w-50 h-50"></div>
        <div className="w-px md:h-24 h-12 bg-white md:opacity-50 opacity-0"></div>
        <div className="flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white md:text-2xl text-lg font-bold mb-2"
          >
            ЗАГРУЗКА
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white md:text-sm text-xs mb-1"
          >
            SKURATOV COFFEE ROASTERS
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-white md:text-sm text-xs"
          >
            ЗИМА 2024-2025
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}