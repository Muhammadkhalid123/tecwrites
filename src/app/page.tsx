import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-20 text-center animate-fade-up">
          <div className="container mx-auto flex flex-col items-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-600 mb-8 hover:bg-gray-50 transition-colors cursor-default">
              <span className="text-[#6366f1]">✨</span>
              Publishing & Software Solutions
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-[4rem] font-bold text-[#111827] leading-[1.1] tracking-tight mb-8">
              Transform Ideas <br />
              <span className="text-gradient-purple">Into Reality</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              From publishing your next bestseller to building cutting-edge
              software, TechWrites delivers comprehensive digital solutions
              that elevate your vision.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a href="/services" className="btn btn-primary">
                Explore Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              <a href="/portfolio" className="btn btn-outline bg-white">View Our Work</a>
            </div>
          </div>
        </section>

        {/* Stats Section with Divider */}
        <section className="container mx-auto pb-24">
          <div className="border-t border-gray-100 pt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl font-bold text-[#111827]">500+</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl font-bold text-[#111827]">200+</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Books Published</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl font-bold text-[#111827]">50+</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Active Clients</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl font-bold text-[#111827]">5+</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Publishing Services Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[#1e3a8a] text-sm font-semibold mb-6">
                Publishing Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                Bring Your Words <span className="text-gradient-purple">to Life</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Comprehensive publishing solutions for authors, educators, and businesses
                ready to share their stories with the world.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#6366f1]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Book Designing</h3>
                <p className="text-gray-500 leading-relaxed">
                  Professional book cover design and interior layout that captivates readers and stands out on shelves.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#6366f1]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <line x1="12" x2="12.01" y1="18" y2="18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Book Formatting</h3>
                <p className="text-gray-500 leading-relaxed">
                  Transform your manuscript into a professionally formatted ebook that meets industry standards across all devices.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#6366f1]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Ghost Writing</h3>
                <p className="text-gray-500 leading-relaxed">
                  Let our experienced writers bring your ideas to life with professional ghostwriting services.
                </p>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="text-center">
              <a href="https://www.kandledirectpublishing.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold bg-white border border-[#e5e7eb] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Visit Kandle Direct Publishing
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Software Agency Section */}
        <section className="py-24 bg-[#020617] text-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e293b] text-blue-400 text-sm font-semibold mb-6 border border-slate-800">
                Software Agency
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Digital Solutions That Scale
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                From concept to deployment, we build powerful digital products that
                transform businesses and delight users.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Item 1 */}
              <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl hover:bg-[#1e293b] transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Graphic Designing</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Stunning visual designs for branding, marketing materials, and digital assets that make lasting impressions.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl hover:bg-[#1e293b] transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Website Development</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Custom web solutions from responsive websites to complex web applications built with modern technologies.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl hover:bg-[#1e293b] transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Marketing Agency</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Strategic digital marketing campaigns that drive engagement, conversions, and measurable business growth.
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl hover:bg-[#1e293b] transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Custom Software</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Tailored software solutions designed to streamline your operations and solve unique business challenges.
                </p>
              </div>

              {/* Item 5 */}
              <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl hover:bg-[#1e293b] transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.74 3.32a1 1 0 0 1 .5.86v6.63a1 1 0 0 1-.5.86l-5.74 3.32a1 1 0 0 1-1 0l-5.74-3.32a1 1 0 0 1-.5-.86V6.87a1 1 0 0 1 .5-.86l5.74-3.32a1 1 0 0 1 1 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">UI/UX Design</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  User-centered design that creates intuitive, engaging experiences across all digital touchpoints.
                </p>
              </div>

              {/* Item 6 */}
              <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-2xl hover:bg-[#1e293b] transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Digital Transformation</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Modernize your business with cutting-edge technology solutions and digital strategy consulting.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <a href="/services" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/25">
                Explore All Services
              </a>
            </div>

          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

              {/* Left Content */}
              <div className="flex-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[#1e3a8a] text-sm font-semibold mb-6">
                  Our Process
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8">
                  From Concept <br />
                  <span className="text-[#1e3a8a]">to Creation</span>
                </h2>
                <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                  Whether you're publishing your first book or launching a digital product,
                  our streamlined process ensures your vision comes to life exactly as you imagined.
                </p>

                {/* Steps Grid */}
                <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8 mb-12">
                  {/* Step 1 */}
                  <div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-2">01</div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">Discovery</h3>
                    <p className="text-gray-500 text-sm">Understanding your vision and setting clear goals.</p>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-2">02</div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">Strategy</h3>
                    <p className="text-gray-500 text-sm">Planning the roadmap and defining success metrics.</p>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-2">03</div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">Creation</h3>
                    <p className="text-gray-500 text-sm">Building with precision and obsessive attention to detail.</p>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-2">04</div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">Launch</h3>
                    <p className="text-gray-500 text-sm">Delivering excellence and ensuring a smooth deployment.</p>
                  </div>
                </div>

                <a href="/contact" className="btn btn-primary">
                  Start Your Project
                </a>
              </div>

              {/* Right Image */}
              <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px]">
                <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                  alt="TecWrites creative team brainstorming software and publishing solutions"
                  className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-[#1e3a8a] text-sm font-semibold mb-6">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                What Our Clients <span className="text-[#2563eb]">Say</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our satisfied clients have to say about working with TechWrites.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="absolute top-8 right-8 text-slate-100">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.0548 14.8893 14.1911 16.4423 12.8159C17.9953 11.4407 20.1017 10.6681 22.2983 10.6681V8.66812C20.6552 8.66812 19.0436 9.07923 17.5855 9.87063C16.1274 10.662 14.8601 11.8133 13.8803 13.2366L13.1166 14.3468L12.3529 13.2366C11.3731 11.8133 10.1058 10.662 8.64766 9.87063C7.18953 9.07923 5.57796 8.66812 3.93489 8.66812V10.6681C6.13148 10.6681 8.23785 11.4407 9.79087 12.8159C11.3439 14.1911 12.2162 16.0548 12.2162 18V21H2.21619V12C2.21619 11.4696 2.4269 10.9609 2.80197 10.5858C3.17705 10.2107 3.68575 10 4.21619 10H8.38133C8.91176 10 9.42047 10.2107 9.79554 10.5858C10.1706 10.9609 10.3813 11.4696 10.3813 12V21H14.017ZM22.2983 21V12C22.2983 11.4696 22.509 10.9609 22.8841 10.5858C23.2592 10.2107 23.7679 10 24.2983 10H28.4635C28.9939 10 29.5026 10.2107 29.8777 10.5858C30.2528 10.9609 30.4635 11.4696 30.4635 12V21H22.2983Z" fillOpacity="0.5" />
                    <path d="M11.192 15.757c0-2.07-1.68-3.75-3.75-3.75s-3.75 1.68-3.75 3.75 1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75zM22.192 15.757c0-2.07-1.68-3.75-3.75-3.75s-3.75 1.68-3.75 3.75 1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75z" />
                  </svg>
                  <span className="text-6xl font-serif leading-none opacity-20">❝</span>
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Sarah Johnson" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xl font-bold text-[#111827]">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  TechWrites transformed my manuscript into a beautifully designed book.
                  Their attention to detail approach exceeded my expectations.
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="absolute top-8 right-8 text-slate-100">
                  <span className="text-6xl font-serif leading-none opacity-20">❝</span>
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Michael Chen" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xl font-bold text-[#111827]">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Startup Founder</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  The website they built for our startup was exactly what we needed. Clean, modern,
                  and highly functional. Our conversion rates increased by 40%.
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="absolute top-8 right-8 text-slate-100">
                  <span className="text-6xl font-serif leading-none opacity-20">❝</span>
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop" alt="Emily Roberts" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xl font-bold text-[#111827]">Emily Roberts</h4>
                    <p className="text-sm text-gray-500">Publisher</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  Working with TechWrites on our e-book publishing project was seamless.
                  They delivered on time and the quality was outstanding.
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="absolute top-8 right-8 text-slate-100">
                  <span className="text-6xl font-serif leading-none opacity-20">❝</span>
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="David Park" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xl font-bold text-[#111827]">David Park</h4>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  Their graphic design team created stunning visuals for our brand campaign.
                  The results spoke for themselves - engagement went through the roof!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[#1e3a8a] text-sm font-semibold mb-6">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                Our Recent <span className="text-[#1e3a8a]">Work</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Take a look at some of our recent projects that showcase our expertise across publishing and software services.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
              {/* Item 1 */}
              <div className="group rounded-3xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
                    alt="Brand identity and logo design project by TecWrites"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Item 2 */}
              <div className="group rounded-3xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                    alt="Custom web application development project showcase"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Item 3 */}
              <div className="group rounded-3xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop"
                    alt="Professional book cover design and publishing project"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Item 4 */}
              <div className="group rounded-3xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1000&auto=format&fit=crop"
                    alt="Digital marketing and strategic growth campaign"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Item 5 */}
              <div className="group rounded-3xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
                    alt="Scalable enterprise technology solution developed by TecWrites"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Item 6 */}
              <div className="group rounded-3xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop"
                    alt="Modern UI/UX product design for digital platforms"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="text-center">
              <a href="/portfolio" className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#172554] transition-colors shadow-lg shadow-blue-900/20">
                View All Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </div>
  );
}
