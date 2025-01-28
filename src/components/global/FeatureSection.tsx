"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { MessageCircle, Shield, Zap, Video, Users, Lock, Smartphone, Headphones } from "lucide-react"

export function ChatFeaturesSectionDemo() {
  const features = [
    {
      title: "Real-time Messaging",
      description: "Instant message delivery for seamless conversations.",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      title: "End-to-End Encryption",
      description: "Your conversations are secure and private at all times.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Lightning Fast",
      description: "Optimized for speed, ensuring smooth chat experiences.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Video Calls",
      description: "High-quality video calls with screen sharing capabilities.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Group Chats",
      description: "Create and manage group conversations effortlessly.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Data Privacy",
      description: "Your data is yours. We never sell or share your information.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Cross-Platform",
      description: "Available on web, iOS, and Android for chatting anywhere.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description: "Our team is always here to help you with any issues.",
      icon: <Headphones className="w-6 h-6" />,
    },
  ]

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Why Choose Our Chat Platform?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="mb-4 text-blue-500 dark:text-blue-400">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  )
}

export default ChatFeaturesSectionDemo

