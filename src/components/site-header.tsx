"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10242d]/95 text-white backdrop-blur-xl">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="#home"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a06f]"
          aria-label="DS Associate home"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex size-10 items-center justify-center rounded-lg border border-[#d17b3f]/60 text-sm font-bold tracking-tight text-[#e3a06f]">DS</span>
          <span className="leading-tight">
            <span className="block text-[13px] font-semibold tracking-[0.16em]">DS ASSOCIATE</span>
            <span className="mt-1 block text-[9px] tracking-[0.2em] text-white/55">INDUSTRIAL • TECHNO-LEGAL</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a06f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden xl:block">
          <Button size="sm" className="gap-2">
            Discuss your project <ArrowUpRight className="size-4" />
          </Button>
        </a>

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white xl:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/10 bg-[#10242d] px-5 py-5 xl:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a06f]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-3" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Discuss your project <ArrowUpRight className="size-4" /></Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
