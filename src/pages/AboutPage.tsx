import { BadgeCheck, Heart, Rocket, Wrench } from "lucide-react"

const techStack = [
  "React (with functional components and hooks)",
  "React Router v7 - for client-side routing",
  "TanStack Query (React Query) - for efficient API data fetching and caching",
  "Tailwind CSS - for utility-first styling",
  "Hero UI - for accessible and prebuilt UI components",
  "Vite - for fast development and build",
  "TheMealDB API - public meal and recipe database",
  "GitHub Pages + Actions - for CI/CD and static site deployment"
]

const features = [
  "View meals by category",
  "Search meals by name, ingredient, area (cuisine), or category",
  "View detailed recipe info with ingredients and instructions",
  "Mobile-friendly responsive layout",
  "Optimized API loading with caching and loading states",
  "Fallback 404 Not Found page for unmatched routes",
  "Fully working GitHub Pages deployment with support for client-side routing"
]

const AboutPage = () => {
  return (
    <>
      <title>About</title>
      <meta name="description" content="This is a About page" />

      <div className="py-4 md:py-6 md:text-lg">
        <section className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl mb-5 md:mb-6 font-semibold text-primary">About</h2>
          <p>This is a responsive and performant single-page application built with React that allows users to browse, search, and filter meals using the <a href="https://www.themealdb.com" target="_blank" className="underline text-secondary">TheMealDB API.</a> The app is deployed using GitHub Pages with automated CI/CD via GitHub Actions.</p>
        </section>
        <section className="mb-10 md:mb-12">
          <h3 className="text-xl md:text-2xl mb-4 font-semibold flex gap-2 items-center text-primary"><Wrench className="text-secondary" /> Tech Stack</h3>
          <ul className="flex flex-col gap-2">
            {techStack.map((tech) => (
              <li className="gap-2 flex"><BadgeCheck className="min-w-[24px] min-h-[24px]" />{tech}</li>
            ))}
          </ul>
        </section>
        <section className="mb-10 md:mb-12">
          <h3 className="text-xl md:text-2xl mb-4 font-semibold flex gap-2 items-center text-primary"><Rocket className="text-secondary" /> Features</h3>
          <ul className="flex flex-col gap-2">
            {features.map((feature) => (
              <li className="gap-2 flex"><BadgeCheck className="min-w-[24px] min-h-[24px]" />{feature}</li>
            ))}
          </ul>
        </section>
        <h3 className="text-xl md:text-2xl mb-4 font-semibold flex gap-2 text-primary text-center"><Heart className="text-danger mt-1" /> Thanks for your attention! <Heart className="text-danger mt-1" /></h3>
      </div>
    </>
  )
}

export default AboutPage