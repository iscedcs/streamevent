import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Gallery() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold mb-4">Photo Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="aspect-square relative"
          >
            <Image
              src={`/placeholder.svg?height=300&width=300&text=Photo ${i}`}
              alt={`Memory ${i}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

