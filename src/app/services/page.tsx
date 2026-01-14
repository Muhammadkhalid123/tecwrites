import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our comprehensive publishing and software services, including book design, ghostwriting, web development, and digital marketing.",
};

export default function Services() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                                Our <span className="text-gradient-purple">Services</span>
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Comprehensive publishing and software solutions tailored to transform your ideas into reality.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Publishing Division Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-4 border border-indigo-100">
                                    Publishing Division
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                                    Publishing Services
                                </h2>
                            </div>
                            <a href="https://www.kandledirectpublishing.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                                Visit Kandle Direct Publishing
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" x2="21" y1="14" y2="3" />
                                </svg>
                            </a>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: Book Designing */}
                            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">Book Designing</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Professional book cover design and interior layout that captivates readers and stands out on shelves.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Custom cover design",
                                        "Interior layout",
                                        "Print-ready files",
                                        "Multiple formats"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card 2: Editing & Proofreading */}
                            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                        <path d="M2 2l7.586 7.586" />
                                        <circle cx="11" cy="11" r="2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">Editing & Proofreading</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Professional editing services to polish your manuscript and ensure error-free content.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Developmental editing",
                                        "Copy editing",
                                        "Proofreading",
                                        "Fact checking"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card 3: Ghostwriting */}
                            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                        <path d="M12 11h.01" />
                                        <path d="M8 11h.01" />
                                        <path d="M16 11h.01" />
                                        <path d="M12 15h.01" />
                                        <path d="M8 15h.01" />
                                        <path d="M16 15h.01" />
                                        <path d="M12 7h.01" />
                                        <path d="M8 7h.01" />
                                        <path d="M16 7h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">Ghostwriting</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Expert ghostwriters to bring your ideas to life while maintaining your unique voice.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Fiction writing",
                                        "Non-fiction",
                                        "Memoirs",
                                        "Business books"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Navigation Arrows (Visual only as per request) */}
                        <div className="flex justify-center gap-3 mt-12">
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

                {/* Software Agency Section */}
                <section className="py-24 bg-[#f8fafc]">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-4 border border-indigo-100">
                                    Software Division
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                                    Software Agency
                                </h2>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: Graphic Designing */}
                            <div className="bg-white rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                        <path d="M2 12h20" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">Graphic Designing</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Creative visual solutions that communicate your brand message effectively across all mediums.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Brand identity",
                                        "Marketing materials",
                                        "Social media",
                                        "UI/UX design"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card 2: Website Development */}
                            <div className="bg-white rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" x2="22" y1="12" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">Website Development</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Custom websites and web applications built with modern technologies for optimal performance.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Responsive design",
                                        "E-commerce",
                                        "CMS integration",
                                        "SEO optimization"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card 3: Marketing Agency */}
                            <div className="bg-white rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m12 14 4-4" />
                                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] mb-3">Marketing Agency</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Strategic digital marketing campaigns that drive growth and connect you with your target audience.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Social media",
                                        "Content strategy",
                                        "PPC campaigns",
                                        "Analytics"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center gap-3 mt-12">
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

                {/* Why Choose Us Section */}
                <section className="py-24 bg-[#020617]">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e293b] text-blue-400 text-xs font-semibold mb-6 border border-slate-800">
                                Why TechWrites
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Choose Us
                            </h2>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Feature 1 */}
                            <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">Proven Expertise</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Years of experience delivering exceptional results across publishing and software industries.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">Quality First</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We never compromise on quality, ensuring every project meets the highest standards.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 3v18h18" />
                                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">Results Driven</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Our strategies are designed to deliver measurable outcomes and real business growth.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 text-center hover:bg-[#1e293b] transition-colors duration-300">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">Dedicated Support</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Personalized attention and responsive communication throughout your project journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-[#111827] mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and find the perfect solution for your needs.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="/contact" className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1e40af] transition-colors">
                                Get Started
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </a>
                            <a href="/" className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Back to Home
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
