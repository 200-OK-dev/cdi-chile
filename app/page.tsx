"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { FeatureCard } from "@/components/feature-card"
import { StatsSection } from "@/components/stats-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CommunitySection } from "@/components/community-section"
import clsx from 'clsx';
import { motion } from "framer-motion"
import Image from "next/image"


const vanGoghButtonClass = clsx(
  'px-6', 'py-3', 'text-lg', 'font-bold', 'text-yellow-100',
  'bg-gradient-to-br', 'from-yellow-600', 'via-blue-500', 'to-green-500',
  'border-4', 'border-blue-900', 'rounded-2xl', 'shadow-lg',
  'hover:shadow-2xl', 'hover:scale-105', 'transform', 'transition',
  'duration-300', 'ease-in-out', 'hover:bg-yellow-500'
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b">
  {/* Imagen de fondo */}
  <div className="absolute inset-0 z-0 w-full h-full flex justify-center">
    
  </div>
  
  <div className="container px-4 md:px-6 relative z-10">
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[600px]"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Core building blocks
          <br />
          for your design system
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          An open-source UI component library for building high-quality, accessible design systems and web apps.
        </p>
        <Button variant="outline">Button</Button>
        
      </motion.div>
    </div>
  </div>
</section>

      {/* Component Showcase */}
      {/* Showcase Section Refactor */}
      {(() => {
        const showcaseCards = [
          {
            title: "Dialog",
            bg: "bg-amber-500 dark:bg-amber-500/50",
            content: (
              <div className="h-24 flex items-center justify-center border rounded-md">
                <span className="text-sm">Click to open</span>
              </div>
            ),
            description: "A modal dialog that interrupts the user with important content."
          },
          {
            title: "Navigation Menu",
            bg: "bg-purple-500 dark:bg-purple-500/50",
            content: (
              <div className="h-24 flex flex-col items-start justify-center gap-2">
                <div className="flex gap-2 text-sm">
                  <span className="font-medium">Overview</span>
                  <span>Features</span>
                  <span>About</span>
                </div>
              </div>
            ),
            description: "A collection of links for navigating websites."
          },
          {
            title: "Popover",
            bg: "bg-green-500 dark:bg-blue-500/50",
            content: (
              <div className="h-24 flex items-center justify-center">
                <div className="border rounded-md p-2 text-sm">
                  <div className="font-medium">Account</div>
                  <div className="text-xs text-muted-foreground">Manage your account</div>
                </div>
              </div>
            ),
            description: "Displays rich content in a portal, triggered by a button."
          },
          {
            title: "Slider",
            bg: "bg-cyan-500 dark:bg-cyan-500/50",
            content: (
              <div className="h-24 flex items-center justify-center">
                <div className="w-full px-4">
                  <div className="h-2 bg-muted rounded-full relative">
                    <div
                      className="absolute h-4 w-4 bg-primary rounded-full top-1/2 -translate-y-1/2"
                      style={{ left: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ),
            description: "Allows users to make selections from a range of values."
          },
          // Puedes agregar más cards aquí si lo deseas
        ];
        const firstRow = showcaseCards.slice(0, 4);
        const secondRow = showcaseCards.slice(0, 4).reverse(); // Ahora la segunda fila está invertida
        return (
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Beautifully crafted components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {firstRow.map((card, idx) => (
                  <Card key={idx} className={`p-6 ${card.bg} border-0`}>
                    <h3 className="font-semibold mb-4">{card.title}</h3>
                    <div className="bg-background rounded-md p-4 shadow-sm">{card.content}</div>
                    <p className="text-xs mt-4 text-muted-foreground">{card.description}</p>
                  </Card>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {secondRow.map((card, idx) => (
                  <Card key={idx} className={`p-6 ${card.bg} border-0`}>
                    <h3 className="font-semibold mb-4">{card.title}</h3>
                    <div className="bg-background rounded-md p-4 shadow-sm">{card.content}</div>
                    <p className="text-xs mt-4 text-muted-foreground">{card.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })()}


      


      {/* Companies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Our partners</h2>
            <h3 className="text-3xl font-bold mb-6">World-class teams use Radix Primitives to power their products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
              {/* Company logos would go here */}
              <div className="h-8 bg-muted/50 rounded"></div>
              <div className="h-8 bg-muted/50 rounded"></div>
              <div className="h-8 bg-muted/50 rounded"></div>
              <div className="h-8 bg-muted/50 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Radix Primitives?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Fully managed focus"
              description="Focus is fully managed using React's focus management primitives. We handle all the complex cases."
            />
            <FeatureCard
              title="Keyboard navigation"
              description="Supports keyboard navigation and adheres to the WAI-ARIA design pattern."
            />
            <FeatureCard
              title="Accessible foundations"
              description="All components follow WAI-ARIA guidelines and implement correct ARIA attributes."
            />
            <FeatureCard
              title="Control alignment and collision"
              description="Control the alignment of content relative to the trigger and handle collision with the viewport edges."
            />
            <FeatureCard
              title="Uncontrolled by default"
              description="Manages its own state by default but can be controlled when needed."
            />
            <FeatureCard
              title="Unstyled and customizable"
              description="Unstyled by default, giving you complete control over styling."
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Developer experience first</h2>
            <h3 className="text-3xl font-bold mb-8">Develop with an open, thoughtful API</h3>

            <Tabs defaultValue="install" className="mt-8">
              <TabsList className="mb-4">
                <TabsTrigger value="install">Installation</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="styling">Styling</TabsTrigger>
              </TabsList>
              <TabsContent value="install">
                <CodeBlock
                  code={`npm install @radix-ui/react-dialog
# or
yarn add @radix-ui/react-dialog`}
                  language="bash"
                />
              </TabsContent>
              <TabsContent value="usage">
                <CodeBlock
                  code={`import * as Dialog from '@radix-ui/react-dialog';

export default () => (
  <Dialog.Root>
    <Dialog.Trigger>Open</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);`}
                  language="jsx"
                />
              </TabsContent>
              <TabsContent value="styling">
                <CodeBlock
                  code={`/* styles.css */
.dialog-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
}

.dialog-content {
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}
                  language="css"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CommunitySection />
      
    </div>
  )
}
