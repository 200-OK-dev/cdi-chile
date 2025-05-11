"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function CommunitySection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Join our fast-growing community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with thousands of developers building with Radix UI. Share ideas, get help, and contribute to the
            community.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link href="#" className="block">
              <Card icon="Twitter" title="Twitter" description="Follow us for news and updates" />
            </Link>
            <Link href="#" className="block">
              <Card icon="Discord" title="Discord" description="Join our community chat" />
            </Link>
            <Link href="#" className="block">
              <Card icon="GitHub" title="GitHub" description="Contribute to the project" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Card({ icon, title, description }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-lg bg-background border shadow-sm"
    >
      <div className="mb-3 text-primary">{icon}</div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  )
}
