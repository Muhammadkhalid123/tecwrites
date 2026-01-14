import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Metadata } from "next";
import coverMock2 from "./cover-mock2.png";
import coverMock3 from "./cover-mock3.png";
import coverMock4 from "./cover-mock4.png";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Portfolio",
    description: "View our recent work in publishing and software development. See how we've helped authors and businesses achieve their goals.",
};

export default function Portfolio() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                                Our <span className="text-gradient-purple">Portfolio</span>
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Explore our work across publishing and software development.
                                <br className="hidden md:block" />
                                Every project tells a story of creativity and excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Published Works Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-4 border border-indigo-100">
                                Publishing Division
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                                Published Works
                            </h2>
                        </div>

                        {/* Works Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: The DP Kids -> God's Word */}
                            <a href="https://thedpkids.com/" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow duration-300">
                                <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center p-4">
                                    <Image
                                        src={coverMock2}
                                        alt="God's Word Book Cover"
                                        className="h-full w-auto object-contain shadow-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Non-Fiction</div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">God's Word</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        A powerful spiritual guide exploring the depths of faith and understanding.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Spiritual", "Design", "Publishing"].map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>

                            {/* Card 2: Noel LaChance -> The Art of Pizza */}
                            <a href="https://noellachance.com/" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow duration-300">
                                <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center p-4">
                                    <Image
                                        src={coverMock3}
                                        alt="The Art of Pizza Book Cover"
                                        className="h-full w-auto object-contain shadow-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Cookbook</div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">The Art of Pizza</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        50 great recipes for crafting the perfect pizza right in your own kitchen.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Cooking", "Photography", "Layout"].map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>

                            {/* Card 3: Nina Strong -> A Dragon's Hide */}
                            <a href="https://ninastrongbooks.com/" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow duration-300">
                                <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center p-4">
                                    <Image
                                        src={coverMock4}
                                        alt="A Dragon's Hide Book Cover"
                                        className="h-full w-auto object-contain shadow-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Fantasy Fiction</div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">A Dragon's Hide</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        An epic fantasy adventure taking readers through mystical realms and danger.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Fantasy", "Illustration", "Series"].map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
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

                {/* Digital Projects Section */}
                <section className="py-24 bg-[#f8fafc]">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="mb-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-4 border border-indigo-100">
                                Software Division
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                                Digital Projects
                            </h2>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: The DP Kids */}
                            <a href="https://thedpkids.com/" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-slate-100 bg-white hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-64 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                                    <img
                                        src="https://thedpkids.com/wp-content/uploads/2025/06/image-14.webp"
                                        alt="The DP Kids Website"
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="bg-white px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-sm">Visit Website</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Book Series</div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">The DP Kids</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        A book series focused on teaching children about kindness, inclusion, and love.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Children's Books", "Education", "Inclusion"].map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>

                            {/* Card 2: Noel LaChance */}
                            <a href="https://noellachance.com/" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-slate-100 bg-white hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-64 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                                    <img
                                        src="https://noellachance.com/wp-content/uploads/2025/08/Book-Mockup-1.webp"
                                        alt="Noel LaChance Website"
                                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="bg-white px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-sm">Visit Website</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Author Platform</div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">Noel LaChance</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        Come To The Quiet. A platform dedicated to connecting readers with inspirational books.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Inspirational", "Self-Growth", "Books"].map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>

                            {/* Card 3: Nina Strong */}
                            <a href="https://ninastrongbooks.com/" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-slate-100 bg-white hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-64 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                                    <img
                                        src="https://ninastrongbooks.com/wp-content/uploads/2025/08/Group-1000009164.png"
                                        alt="Nina Strong Books Website"
                                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="bg-white px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-sm">Visit Website</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-2">Astrology Guide</div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">Cultured Urban Astrology</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        A personal roadmap to understanding yourself and others through the stars.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Astrology", "Relationships", "Guide"].map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
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

                {/* Testimonials Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 border border-slate-200">
                                Testimonials
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                                What Our Clients <span className="text-[#3b82f6]">Say</span>
                            </h2>
                            <p className="text-gray-500">
                                Don't just take our word for it. Here's what our satisfied clients have to say about working with TechWrites.
                            </p>
                        </div>

                        {/* Testimonials Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
                                <div className="absolute top-8 right-8 text-indigo-100">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#111827]">Sarah Johnson</h4>
                                        <div className="text-sm text-gray-500">Author</div>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mb-4 gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    "TechWrites transformed my manuscript into a beautifully designed book. Their attention to detail approach exceeded my expectations."
                                </p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
                                <div className="absolute top-8 right-8 text-indigo-100">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#111827]">Michael Chen</h4>
                                        <div className="text-sm text-gray-500">Startup Founder</div>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mb-4 gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    "The website they built for our startup was exactly what we needed. Clean, modern, and highly functional. Our conversion rates increased by 40%."
                                </p>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
                                <div className="absolute top-8 right-8 text-indigo-100">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Roberts" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#111827]">Emily Roberts</h4>
                                        <div className="text-sm text-gray-500">Publisher</div>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mb-4 gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    "Working with TechWrites on our e-book publishing project was seamless. They delivered on time and the quality was outstanding."
                                </p>
                            </div>

                            {/* Testimonial 4 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow">
                                <div className="absolute top-8 right-8 text-indigo-100">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="David Park" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#111827]">David Park</h4>
                                        <div className="text-sm text-gray-500">Marketing Director</div>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mb-4 gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    "Their graphic design team created stunning visuals for our brand campaign. The results spoke for themselves - engagement went through the roof!"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-[#111827] mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                            Let's create something amazing together.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#" className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1e40af] transition-colors">
                                Get Started
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </a>
                            <a href="/services" className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Explore Services
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
