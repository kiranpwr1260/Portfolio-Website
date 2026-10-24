"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const serviceOptions = [
  "Techno-legal & land",
  "Infrastructure & approvals",
  "Industrial support",
  "Industrial real estate",
  "IIA / ILP / PSI",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const subject = `Project enquiry from ${String(values.get("name"))}`;
    const body = [
      `Name: ${values.get("name")}`,
      `Company: ${values.get("company") || "Not provided"}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone") || "Not provided"}`,
      `Service: ${values.get("service") || "Not specified"}`,
      `Project location: ${values.get("location") || "Not provided"}`,
      "",
      `Message:\n${values.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email application should open with the enquiry prepared. Please review and send it there; this website does not submit or store your details.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-[0_24px_80px_rgba(9,26,34,0.16)] sm:p-8">
      <div className="mb-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#bd6b36]">Start a conversation</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#172e38]">Tell us about your project</h3>
        <p className="mt-2 text-sm leading-6 text-[#68767a]">Share a few details and we’ll help identify a useful next step.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-xs font-semibold text-[#35474c]">
          Your name <span aria-hidden="true" className="text-[#bd6b36]">*</span>
          <Input name="name" autoComplete="name" placeholder="Full name" required />
        </label>
        <label className="space-y-2 text-xs font-semibold text-[#35474c]">
          Company
          <Input name="company" autoComplete="organization" placeholder="Company name" />
        </label>
        <label className="space-y-2 text-xs font-semibold text-[#35474c]">
          Work email <span aria-hidden="true" className="text-[#bd6b36]">*</span>
          <Input name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
        </label>
        <label className="space-y-2 text-xs font-semibold text-[#35474c]">
          Phone
          <Input name="phone" type="tel" autoComplete="tel" placeholder="+91" />
        </label>
        <label className="space-y-2 text-xs font-semibold text-[#35474c]">
          Service of interest
          <select
            name="service"
            defaultValue=""
            className="flex h-12 w-full rounded-xl border border-[#dfddd8] bg-white px-4 text-sm text-[#172e38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17b3f]"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => <option key={service}>{service}</option>)}
          </select>
        </label>
        <label className="space-y-2 text-xs font-semibold text-[#35474c]">
          Project location
          <Input name="location" placeholder="City / industrial area" />
        </label>
        <label className="space-y-2 text-xs font-semibold text-[#35474c] sm:col-span-2">
          How can we help? <span aria-hidden="true" className="text-[#bd6b36]">*</span>
          <Textarea name="message" placeholder="Briefly describe your requirement..." required minLength={10} />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-[#68767a]">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 size-4 shrink-0 accent-[#bd6b36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17b3f]"
        />
        <span>I agree that DS Associate may use these details to respond to my enquiry. My information will be placed in an email draft only; it is not submitted to or stored by this website.</span>
      </label>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Prepare enquiry <ArrowUpRight className="size-4" />
      </Button>

      {status && (
        <p role="status" aria-live="polite" className="mt-4 flex gap-2 rounded-xl bg-[#edf5ef] p-3 text-xs leading-5 text-[#365b45]">
          <Check className="mt-0.5 size-4 shrink-0" /> {status}
        </p>
      )}
      <p className="mt-4 flex items-center gap-2 text-xs text-[#7d8889]">
        <Mail className="size-3.5" /> Uses your email application; no backend configured.
      </p>
    </form>
  );
}
