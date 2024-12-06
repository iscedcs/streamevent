import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Biography() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold mb-4">Biography</h3>
      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">
            Elder David Okoobo Ovienria was born on the 6th day of April, 1940 in Eguare Irrua,
            the current Esan Central Local Government Area of Edo State, Nigeria to the family
            of Chief Aarabhor Ovienria and Mrs. Iduaisili Ovienria nee Eigbe.
          </p>
          <p className="mb-4">
            He had his early education at Eguare Primary School, Irrua between 1946 and 1954, and
            Annunciation Catholic College, Irrua between 1954 and 1959.
          </p>
          <Button variant="link" className="p-0">Read more</Button>
        </CardContent>
      </Card>
    </motion.section>
  )
}

