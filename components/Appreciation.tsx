import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Appreciation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Appreciation</h3>
      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">
            On behalf of the family and house of Elder David Okoobo Ovienria
            J.P. resident both home and abroad, I wish to express our profound
            gratitude first to the almighty God for giving us the fortitude to
            bear the passing on of our patriarch and for bringing us this far.
            Truly, his grace has been more than sufficient for us.
          </p>
          <p className="mb-4">
            Our appreciation also goes to our Pastor and daddy in the lord, Dr.
            Kayode Ajimatanranje and the entire congregation of Victory
            Christian Fellowship here in Oakland. Your prayers, gifts, calls and
            words of encouragement have been of immense strength in our days of
            grief. How difficult our mourning would have been without you can
            only be imagined.
          </p>
          <p className="mb-4">
            Our special gratitude goes to friends and family members both within
            and outside Oakland, within and outside the United States, and back
            home in Nigeria, some of whom have travelled several miles to be
            here to honour us and our departed daddy. Words are not enough to
            thank you.
          </p>
          <p className="text-right mt-4">
            <strong>DR. WILSON ABHULUIME OVIENRIA</strong>
            <br />
            For and on behalf of the family
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
}
