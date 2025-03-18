"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function HoverEffectProjects() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 flex items-center justify-center py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects & Skills</span>
        </h2>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

const HoverEffect = ({
  items,
}: {
  items: { title: string; description: string; link: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-2 rounded-2xl"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white/70 dark:bg-slate-800/80 rounded-2xl shadow-lg backdrop-blur-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.15 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="relative z-10 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 transition-all duration-300">
    {children}
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{children}</h4>
);

const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{children}</p>
);

const projects = [
  {
    title: "Machine Learning",
    description: "Developing intelligent systems with algorithms like regression, classification, and neural networks for predictive analytics.",
    link: "https://www.ibm.com/topics/machine-learning",
  },
  {
    title: "NumPy",
    description: "A powerful numerical computing library in Python used for matrix operations, data preprocessing, and mathematical functions.",
    link: "https://numpy.org/",
  },
  {
    title: "Pandas",
    description: "A high-performance data manipulation library for processing structured data, essential for data science & ML tasks.",
    link: "https://pandas.pydata.org/",
  },
  {
    title: "Next.js",
    description: "A React framework enabling server-side rendering, static site generation, and API development for SEO and performance.",
    link: "https://nextjs.org/",
  },
  {
    title: "Context API",
    description: "A built-in React feature for managing global state efficiently, eliminating the need for prop drilling in component trees.",
    link: "https://react.dev/reference/react/useContext",
  },
  {
    title: "Node.js",
    description: "A runtime environment that allows running JavaScript on the server side, enabling fast, scalable backend development.",
    link: "https://nodejs.org/",
  },
  {
    title: "HTML & CSS",
    description: "The foundation of web development, defining structure & styling using modern techniques like Flexbox & Grid.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  },
  {
    title: "Express.js",
    description: "A minimalist and fast web framework for Node.js, simplifying backend development with routing, middleware, and APIs.",
    link: "https://expressjs.com/",
  },
  {
    title: "JavaScript",
    description: "A versatile scripting language for dynamic web apps, enabling interactivity, event handling, and async operations.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "SQL (Advanced)",
    description: "Expertise in database design, query optimization, indexing, and stored procedures for efficient data management.",
    link: "https://www.w3schools.com/sql/",
  },
];
