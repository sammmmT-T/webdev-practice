"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const icons = [
  { id: 1, name: "Cat", src: "/assets/cat.jpg", path: "/cat" },
  { id: 2, name: "Capybara", src: "/assets/capybara.jpg", path: "/capybara" },
  { id: 3, name: "Dog", src: "/assets/dog.jpeg", path: "/dog" },
  { id: 4, name: "Penguin", src: "/assets/penguin.jpeg", path: "/penguin" },
];

export default function LandingPage() {
  const router = useRouter(); // Next.js router

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8"
      >
        Select Your Profile
      </motion.h1>

      {/* Grid Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-8"
      >
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => router.push(icon.path)}
          >
            {/* Icon Image */}
            <div className="w-32 h-32 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 overflow-hidden relative">
              <Image
                src={icon.src}
                alt={icon.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Profile Name */}
            <p className="mt-4 text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
              {icon.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
