"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Send, Heart, ChevronUp, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => {
  const controls = useAnimation()
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => controls.start({ y: -5 })}
      onHoverEnd={() => controls.start({ y: 0 })}
      className="bg-white dark:bg-gray-800 p-2 rounded-full cursor-pointer shadow-lg group relative"
    >
      <Icon className="w-5 h-5 text-blue-500 dark:text-blue-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-[-1]"
        animate={controls}
      />
    </motion.div>
  )
}

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-4"
  >
    <h3 className="text-xl font-semibold mb-4 relative inline-block">
      {title}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
    </h3>
    {children}
  </motion.div>
)

const FloatingShape = () => {
  const randomRotation = Math.random() * 360
  const randomDuration = Math.random() * 20 + 10
  return (
    <motion.div
      className="absolute bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full"
      style={{
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, Math.random() * 100 - 50],
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.1, 1],
        rotate: [0, randomRotation],
      }}
      transition={{
        duration: randomDuration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export function FancyFooter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const controls = useAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    await controls.start({ scale: [1, 1.2, 1], transition: { duration: 0.3 } })
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <FloatingShape key={i} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FooterSection title="PingMe">
            <motion.p
              className="text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Connect, chat, and collaborate with PingMe - your all-in-one communication platform.
            </motion.p>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              {["Home", "Features", "Pricing", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ x: 5, color: "#93C5FD" }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Stay Updated">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-none placeholder-blue-200 text-white"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button type="submit" size="icon" variant="secondary">
                    <Send className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-2 text-sm text-blue-200"
                  >
                    <motion.div animate={controls}>
                      <Mail className="w-4 h-4" />
                    </motion.div>
                    <span>Thank you for subscribing!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FooterSection>
        </div>

        <motion.div
          className="mt-10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <SocialIcon key={index} Icon={Icon} />
            ))}
          </div>
          <motion.p
            className="text-sm text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            © 2023 PingMe. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="inline-block"
            >
              <Heart className="w-4 h-4 inline-block text-red-400" />
            </motion.span>{" "}
            by our team.
          </motion.p>
        </motion.div>
      </div>

      {/* Fancy wave effect */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 0L48 8.875C96 17.75 192 35.5 288 48.875C384 62.25 480 71.25 576 66.5C672 62.25 768 44.5 864 35.5C960 26.5 1056 26.5 1152 31C1248 35.5 1344 44.5 1392 48.875L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
          fill="url(#gradient)"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 p-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default FancyFooter

