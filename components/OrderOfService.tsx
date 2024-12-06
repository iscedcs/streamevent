import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function OrderOfService() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold mb-4">Order of Service</h3>
      <Card>
        <CardContent className="pt-6">
          <ol className="list-decimal list-inside space-y-2">
            <li>Words of Welcome-Invocation</li>
            <li>Hymn Of Assurance-"There's a Land That is Fairer Than Day" (Hymn 515)</li>
            <li>Bible Reading-1 Thessalonians 4: 13-18: Osahon Darius Odabi</li>
            <li>Hymn Of Affirmation-"When We All Get to Heaven" (Hymn 514)</li>
            <li>Biography: Dickson Odabi</li>
            <li>Eulogy: Ebehi Odabi</li>
            <li>Words of Tributes and Testimony-(Family Members/Friends)</li>
            <li>Hymn of Providence-"Abide with Me" (Hymn 63)</li>
            <li>Words of Exhortation-Dr. Kayode Ajimatanranje Sr. (Pastor)</li>
            <li>Hymn of Comfort-"It Is Well with My Soul" (Hymn 410)</li>
            <li>Special Prayer for the Family</li>
            <li>Vote of Thanks: Dr. Wilson Ovienria</li>
            <li>Prayer/Benediction</li>
          </ol>
        </CardContent>
      </Card>
    </motion.section>
  )
}

