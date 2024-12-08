"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Gallery from "@/components/Gallery";
import Biography from "@/components/Biography";
import OrderOfService from "@/components/OrderOfService";
import Appreciation from "@/components/Appreciation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageSections() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: "biography", title: "Biography", component: Biography },
    { id: "order", title: "Order of Service", component: OrderOfService },
    { id: "gallery", title: "Photo Gallery", component: Gallery },
    { id: "appreciation", title: "Appreciation", component: Appreciation },
  ];

  return (
    <>
      <section>
        <h3 className="text-2xl font-semibold mb-4">Sections</h3>
        <div className="grid grid-cols-2 gap-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="outline"
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </Button>
          ))}
        </div>
      </section>
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.section
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections.find((s) => s.id === activeSection)?.component()}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
