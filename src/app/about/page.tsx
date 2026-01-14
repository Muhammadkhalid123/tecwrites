import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about TecWrites, our mission, vision, and the expert team behind our publishing and software solutions.",
};

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                                About <span className="text-gradient-purple">TechWrites</span>
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                We're a passionate team bridging the gap between publishing excellence and cutting-edge software solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-6">
                                    Our Story
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">
                                    From Passion to Purpose
                                </h2>
                                <div className="space-y-6 text-gray-500 leading-relaxed">
                                    <p>
                                        TechWrites was born from a simple observation: authors and businesses often
                                        struggle to find quality services that understand both the creative and
                                        technical aspects of their projects.
                                    </p>
                                    <p>
                                        Founded in 2019, we set out to create a one-stop solution that combines
                                        professional publishing services with modern software development
                                        expertise.
                                    </p>
                                    <p>
                                        Today, we're proud to have helped hundreds of authors publish their dreams
                                        and dozens of businesses establish their digital presence. Our dual expertise
                                        allows us to offer unique, integrated solutions that others simply can't match.
                                    </p>
                                </div>
                            </div>

                            {/* Right Stats Grid */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Stat 1 */}
                                <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div className="text-3xl font-bold text-[#111827] mb-1">50+</div>
                                    <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
                                </div>

                                {/* Stat 2 */}
                                <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="8" r="7" />
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                        </svg>
                                    </div>
                                    <div className="text-3xl font-bold text-[#111827] mb-1">500+</div>
                                    <div className="text-sm text-gray-500 font-medium">Projects Completed</div>
                                </div>

                                {/* Stat 3 */}
                                <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className="text-3xl font-bold text-[#111827] mb-1">5+</div>
                                    <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                                </div>

                                {/* Stat 4 */}
                                <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" x2="22" y1="12" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </div>
                                    <div className="text-3xl font-bold text-[#111827] mb-1">20+</div>
                                    <div className="text-sm text-gray-500 font-medium">Countries Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Foundation Section */}
                <section className="py-24 bg-[#020617]">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e293b] text-blue-400 text-xs font-semibold mb-6 border border-slate-800">
                                What Drives Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Our Foundation
                            </h2>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Mission Card */}
                            <div className="bg-[#0f172a] p-10 rounded-2xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    To empower creators and businesses with world-class publishing and software solutions that bring their visions to life.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div className="bg-[#0f172a] p-10 rounded-2xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    To be the leading one-stop destination for comprehensive digital solutions spanning publishing and technology.
                                </p>
                            </div>

                            {/* Values Card */}
                            <div className="bg-[#0f172a] p-10 rounded-2xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Values</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Quality, innovation, integrity, and client satisfaction drive everything we do at TechWrites.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-6 border border-slate-200">
                                The Team
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                                Meet Our Experts
                            </h2>
                        </div>

                        {/* Team Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Member 1: John Smith */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-[#1e3a8a] mb-6">
                                    JS
                                </div>
                                <h3 className="text-lg font-bold text-[#111827] mb-1">John Smith</h3>
                                <div className="text-sm font-semibold text-[#1e3a8a] mb-3">Founder & CEO</div>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    Visionary leader with 10+ years in publishing and tech.
                                </p>
                            </div>

                            {/* Member 2: Sarah Johnson */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-[#1e3a8a] mb-6">
                                    SJ
                                </div>
                                <h3 className="text-lg font-bold text-[#111827] mb-1">Sarah Johnson</h3>
                                <div className="text-sm font-semibold text-[#1e3a8a] mb-3">Creative Director</div>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    Award-winning designer specializing in book covers and branding.
                                </p>
                            </div>

                            {/* Member 3: Michael Chen */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-[#1e3a8a] mb-6">
                                    MC
                                </div>
                                <h3 className="text-lg font-bold text-[#111827] mb-1">Michael Chen</h3>
                                <div className="text-sm font-semibold text-[#1e3a8a] mb-3">Tech Lead</div>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    Full-stack developer passionate about building scalable solutions.
                                </p>
                            </div>

                            {/* Member 4: Emily Davis */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-[#1e3a8a] mb-6">
                                    ED
                                </div>
                                <h3 className="text-lg font-bold text-[#111827] mb-1">Emily Davis</h3>
                                <div className="text-sm font-semibold text-[#1e3a8a] mb-3">Marketing Head</div>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    Digital marketing expert driving growth strategies.
                                </p>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center gap-3 mt-16">
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5" />
                                    <path d="M12 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-[#111827] mb-4">
                            Ready to Work With Us?
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                            Let's collaborate and bring your project to life.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1e40af] transition-colors">
                                Get Started
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </a>
                            <a href="/portfolio" className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                View Our Work
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
