import React from "react";
import { Leaf, ChefHat, Timer, Utensils } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Chickpeas, herbs, and produce sourced daily — nothing sits in the fridge overnight.",
  },
  {
    icon: ChefHat,
    title: "Master Chefs",
    description:
      "Recipes passed down since 2001, prepared by hands trained in the original kitchen.",
  },
  {
    icon: Timer,
    title: "Fast Service",
    description:
      "From order to plate in minutes, without cutting a single corner on flavor.",
  },
  {
    icon: Utensils,
    title: "Authentic Taste",
    description:
      "Traditional Levantine technique, no shortcuts, no imitation — the real thing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#1E1B16] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-['Work_Sans',sans-serif] text-xs font-semibold uppercase tracking-[0.25em] text-[#D79A2C]">
            Why Sheikh
          </span>
          <h2 className="mt-4 font-['Fraunces',serif] text-4xl font-semibold text-[#FBF4E4] sm:text-5xl">
            What keeps our tables full
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-[#FBF4E4]/10 bg-[#FBF4E4]/[0.03] p-7 transition-colors hover:border-[#D79A2C]/40 hover:bg-[#FBF4E4]/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D79A2C]/15 text-[#D79A2C] transition-colors group-hover:bg-[#D79A2C] group-hover:text-[#1E1B16]">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-['Fraunces',serif] text-xl font-semibold text-[#FBF4E4]">
                  {feature.title}
                </h3>
                <p className="mt-2 font-['Work_Sans',sans-serif] text-sm leading-relaxed text-[#FBF4E4]/60">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
