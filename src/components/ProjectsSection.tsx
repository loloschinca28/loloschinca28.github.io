import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";


export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 md:mt-10">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left ">
             Proyectos
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
               <CardContent className="flex-grow flex flex-col items-center text-center space-y-2">
  <img
    src={project.image}
    alt={project.title}
    className="rounded-xl mb-4 shadow-md w-full max-w-sm transition-transform duration-300 hover:scale-105"
  />

  {project.description.map((line, idx) => (
    <p key={idx} className="text-sm text-muted-foreground">
      {line}
    </p>
  ))}
</CardContent>
                <CardFooter className="flex justify-center items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
  <motion.a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Visitar 🔗
  </motion.a>
</CardFooter>

              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
