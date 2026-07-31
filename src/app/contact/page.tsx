"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                                Let's Get <span className="text-gradient-purple">Started</span>
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Ready to transform your ideas into reality? We're here to help you every step of the way.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 border border-slate-200">
                                Process
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                                How It Works
                            </h2>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xl mb-6 border-2 border-indigo-100">
                                    01
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">
                                    Tell Us About Your Project
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Share your vision, goals, and requirements with our team.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xl mb-6 border-2 border-indigo-100">
                                    02
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">
                                    Get a Custom Proposal
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Receive a tailored plan with timeline and pricing details.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xl mb-6 border-2 border-indigo-100">
                                    03
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">
                                    Start Building Together
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Collaborate with our experts to bring your project to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Left Column - Contact Info */}
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-4 border border-indigo-100">
                                    Contact Us
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                                    Start Your Project Today
                                </h2>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    Fill out the form or our team will get back to you within 24 hours.
                                    We're excited to learn about your project and discuss how we can help.
                                </p>

                                {/* Contact Details */}
                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-[#111827] mb-1">Email</div>
                                            <a href="mailto:contact@techwrites.com" className="text-gray-500 hover:text-indigo-600 transition-colors">
                                                contact@techwrites.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-[#111827] mb-1">Phone</div>
                                            <a href="tel:+18889213331" className="text-gray-500 hover:text-indigo-600 transition-colors">
                                                +1(888)921 3331
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-[#111827] mb-1">Location</div>
                                            <div className="text-gray-500">
                                                31 Gourdon Ct, Lake St. Louis, MO 63367
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="mt-8 pt-8 border-t border-slate-200">
                                    <div className="font-semibold text-[#111827] mb-4">Services We Offer</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center gap-2">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                            </svg>
                                            Publishing Services
                                        </span>
                                        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center gap-2">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                                <path d="M7 7h10" />
                                                <path d="M7 12h10" />
                                                <path d="M7 17h10" />
                                            </svg>
                                            Software Development
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Form */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Service Interested In */}
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                                        >
                                            <option value="">Select a Service</option>
                                            <option value="publishing">Publishing Services</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="graphic-design">Graphic Design</option>
                                            <option value="marketing">Marketing</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Project Details */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Details
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    {/* Status Messages */}
                                    {status === 'success' && (
                                        <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                                            Message sent successfully! We'll get back to you soon.
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                                            Failed to send message. Please try again.
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1e40af] transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m22 2-7 20-4-9-9-4Z" />
                                            <path d="M22 2 11 13" />
                                        </svg>
                                    </button>

                                    <p className="text-xs text-gray-400 text-center">
                                        By submitting, you agree to our privacy policy and terms of service.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 bg-[#020617]">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e293b] text-blue-400 text-xs font-semibold mb-6 border border-slate-800">
                                Why TechWrites
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Choose Us
                            </h2>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {/* Feature 1 */}
                            <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Proven Expertise</h3>
                                <p className="text-slate-400 text-sm">
                                    Years of experience delivering exceptional results.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Quality First</h3>
                                <p className="text-slate-400 text-sm">
                                    We never compromise on quality or attention to detail.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Results Driven</h3>
                                <p className="text-slate-400 text-sm">
                                    Focused on delivering measurable outcomes.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Dedicated Support</h3>
                                <p className="text-slate-400 text-sm">
                                    Our team is here for you every step of the way.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <a href="/services" className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1e40af] transition-colors">
                                Explore Our Services
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
