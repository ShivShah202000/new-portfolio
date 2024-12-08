"use client";

import { ReactNode, useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { cn } from "@/lib/utils";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

interface RainbowAnimatedButtonProps {
  isSubmitted: boolean;
  className?: string;
}

const buttonStyles = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const textContainerStyles = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function RainbowAnimatedButton({ isSubmitted, className }: RainbowAnimatedButtonProps) {
  const baseButtonClass = cn(
    "group relative inline-flex h-14 w-full animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(calc(0.8*1rem))]",
    "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
    "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
    className
  );

  return (
    <motion.button
      className={baseButtonClass}
      {...buttonStyles}
      type={isSubmitted ? "button" : "submit"}
    >
      <div className="relative h-6 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: -40 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="inline-flex items-center">
                <CheckIcon className="mr-2 h-5 w-5" />
                Message Sent
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="initial"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: -40 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="group inline-flex items-center">
                Send Message
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (formRef.current) {
      const templateParams = {
        from_name: formRef.current.user_name.value,
        from_email: formRef.current.user_email.value,
        message: formRef.current.message.value,
        to_name: 'Shiv Shah',
      };

      try {
        await emailjs.send(
          'service_kud25rr',
          'template_8ielezc',
          templateParams,
          '1CYnO1B9bVEJdUyEY'
        );
        setIsSubmitted(true);
        formRef.current.reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-12 px-6 bg-background/80 transition-colors duration-200"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Get in Touch
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-8 rounded-xl shadow-lg"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="user_name" className="block text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="block w-full px-4 py-3 rounded-lg border-2 border-muted 
                         bg-background text-foreground
                         focus:border-primary focus:ring-primary transition-colors
                         placeholder-muted-foreground"
                placeholder="What's your name?"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="block w-full px-4 py-3 rounded-lg border-2 border-muted 
                         bg-background text-foreground
                         focus:border-primary focus:ring-primary transition-colors
                         placeholder-muted-foreground"
                placeholder="What's your email?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                className="block w-full px-4 py-3 rounded-lg border-2 border-muted 
                         bg-background text-foreground
                         focus:border-primary focus:ring-primary transition-colors
                         placeholder-muted-foreground resize-none"
                placeholder="What do you want to say?"
              />
            </div>
            <RainbowAnimatedButton isSubmitted={isSubmitted} />
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}