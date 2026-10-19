"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
  // Honeypot field for spam prevention
  company_website_url_hp: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  enquiryType?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    enquiryType: "partnership",
    message: "",
    company_website_url_hp: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.enquiryType) {
      errs.enquiryType = "Please select an enquiry category.";
    }

    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message must be at least 15 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check: if filled, quietly reject bot
    if (formData.company_website_url_hp) {
      console.warn("Spam detected via honeypot field.");
      setIsSuccess(true);
      return;
    }

    // 2. Validate client-side inputs
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Connect this stubbed submit handler to a secure server action or API route
    // e.g., await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-card p-8 bg-mint border border-teal/30 space-y-4 animate-fadeIn"
      >
        <div className="flex items-center gap-3 text-teal">
          <CheckCircle2 className="w-6 h-6" />
          <h2 className="text-xl font-bold text-navy">
            Message Sent Successfully
          </h2>
        </div>
        <p className="text-sm text-ink leading-relaxed">
          Thank you for reaching out to Unhackable Humans. Our team will review your enquiry and get back to you shortly.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                email: "",
                enquiryType: "partnership",
                message: "",
                company_website_url_hp: "",
              });
            }}
            className="text-xs font-semibold text-teal hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field (hidden from sighted users and CSS-hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_url_hp">Leave this field blank</label>
        <input
          type="text"
          id="company_website_url_hp"
          name="company_website_url_hp"
          value={formData.company_website_url_hp}
          onChange={(e) =>
            setFormData({ ...formData, company_website_url_hp: e.target.value })
          }
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
        >
          Full Name <span className="text-teal">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-ink bg-white transition-all ${
            errors.name
              ? "border-red-500 focus:border-red-500"
              : "border-mint-border focus:border-teal"
          }`}
          placeholder="e.g. Maya Sharma"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
        >
          Email Address <span className="text-teal">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-ink bg-white transition-all ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-mint-border focus:border-teal"
          }`}
          placeholder="e.g. maya@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.email}
          </p>
        )}
      </div>

      {/* Enquiry Type Selector */}
      <div>
        <label
          htmlFor="enquiryType"
          className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
        >
          Enquiry Type
        </label>
        <select
          id="enquiryType"
          value={formData.enquiryType}
          onChange={(e) =>
            setFormData({ ...formData, enquiryType: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-mint-border bg-white text-sm text-ink focus:border-teal transition-all"
        >
          <option value="partnership">Institutional &amp; Academic Partnership</option>
          <option value="workshop">Community / Campus Workshop Request</option>
          <option value="investigation">Scam Intelligence &amp; Case Lead</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-navy mb-2"
        >
          Message <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-ink bg-white transition-all ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-mint-border focus:border-teal"
          }`}
          placeholder="Please describe your initiative, enquiry, or collaboration..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-teal text-white font-semibold text-sm hover:bg-teal-deep transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:translate-y-0 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? "Sending Enquiry..." : "Send Message"}</span>
      </button>
    </form>
  );
}
