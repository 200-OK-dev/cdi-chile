'use client'

import { motion } from 'framer-motion'
import PieChartDonut from '@/components/PieChartDonut'
import InteractiveBarChart from '@/components/InteractiveBarChart'

export default function Contacto() {
  return (
    <main className="flex flex-col items-center py-16 px-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-6xl"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="max-w-2xl w-full">
        <PieChartDonut />
      </div>
      <div className="max-w-2xl w-full">
        <InteractiveBarChart />
      </div>
    </div>
  </motion.div>
</main>
  );
}
