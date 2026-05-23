# Footer Card

> A footer card with a cool image & dot pattern background.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Footer Card Example](#footer-card-example)
- [Understanding the component](#understanding-the-component)
- [Credits](#credits)

Example:

```tsx
"use client";

import { ArrowDown, Calendar, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterCard = () => {
  return (
    <section className="relative mt-24 overflow-hidden rounded-3xl footer-shadow">
      <div className="absolute inset-0">
          <Image
            src="https://pub-4de8a3d0fa684a02ba7a6c19c653485c.r2.dev/OIHZCKGdnHNaGppookHuHF0eKA4.avif"
          alt="clouds background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />
        <div className="absolute inset-0 footer-dot-overlay" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[480px] items-center justify-center px-6">
        <div className="text-center max-w-3xl mx-auto pt-20">
          <h2 className="text-white text-2xl font-light tracking-tight leading-tight">
            Have a project idea in mind? Let’s
            <br className="hidden sm:block" />
            chat about how we can bring it to life!
          </h2>
          <div className="mt-8">
            [Book a short call](https://cal.com/sarthakkapila/lets-talk)
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 py-6 text-white/80 text-sm">
        <a href="#top" className="inline-flex items-center gap-2 hover:text-white transition-colors">
          <span className="inline-block rotate-180"><ArrowDown size={20}/></span>
          Back to top
        </a>
        <div className="flex items-center gap-4">
            <a href="https://github.com/weknowyourgame" className="footer-icon" aria-label="GitHub">
            <span><Github size={18}/></span>
          </a>
          <a href="https://x.com/0xsarthakk" className="footer-icon" aria-label="X">
            <span><Twitter size={18}/></span>
          </a>
          <a href="https://linkedin.com/in/sarthakkapila" className="footer-icon" aria-label="LinkedIn">
            <span><Linkedin size={18}/></span>
          </a>
          <a href="https://cal.com/sarthakkapila/lets-talk" className="footer-icon" aria-label="Cal">
            <span><Calendar size={18}/></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCard;
```

## Installation

{/* Coming soon */}

## Usage

### Footer Card Example

```tsx
import FooterCard from "@/components/footer-card";

export default function Example() {
  return (
    <FooterCard/>
  )
}
```

## Understanding the component

The footer card is a component that displays a footer with a cool image & dot pattern background.

## Credits

By Sarthak Kapila.

---

*This documentation is also available in [interactive format](https://uwuui.com/docs/components/components/card/footer-card).*