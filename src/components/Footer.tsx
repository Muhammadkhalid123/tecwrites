
export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-[#111827]">TechWrites</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Bridging the gap between creative publishing and innovative software
                            solutions.
                        </p>
                    </div>

                    {/* Publishing Services */}
                    <div>
                        <h4 className="font-bold text-[#111827] mb-6">Publishing Services</h4>
                        <ul className="flex flex-col gap-4 text-gray-500">
                            <li>
                                <a href="#" className="hover:text-[#1e3a8a] transition-colors">
                                    Book Designing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#1e3a8a] transition-colors">
                                    Book Publishing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#1e3a8a] transition-colors">
                                    E-book Publishing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Software Agency */}
                    <div>
                        <h4 className="font-bold text-[#111827] mb-6">Software Agency</h4>
                        <ul className="flex flex-col gap-4 text-gray-500">
                            <li>
                                <a href="#" className="hover:text-[#1e3a8a] transition-colors">
                                    Graphic Designing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#1e3a8a] transition-colors">
                                    Website Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#1e3a8a] transition-colors">
                                    Marketing Agency
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#1e3a8a] transition-colors">
                                    Custom Software
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="font-bold text-[#111827] mb-6">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-gray-500">
                            <li className="flex items-center gap-3">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#1e3a8a]"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                info@techwrites.com
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#1e3a8a]"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +1(888)921 3331
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#1e3a8a] mt-1 flex-shrink-0"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>173 Dallow Rd, Luton, LU1 1NX, UK</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#1e3a8a] mt-1 flex-shrink-0"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>31 Gourdon Ct, Lake St. Louis, MO 63367</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#1e3a8a] hover:border-[#1e3a8a] transition-all">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#1e3a8a] hover:border-[#1e3a8a] transition-all">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#1e3a8a] hover:border-[#1e3a8a] transition-all">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400">
                        © 2025 TechWrites. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-[#1e3a8a]">
                        <a href="#" className="hover:text-blue-700">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-blue-700">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
