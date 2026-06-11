export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}}
      <header className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Penner Construction</h1>
        <p className="text-2xl mb-4">General Contracting & Home Building</p>
        <p className="text-xl mb-8">Serving Carthage, TX and Panola County</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-amber-700 px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition">Get Free Quote</button>
          <a href="tel:9032416482" className="border-2 border-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white/10 transition">Call (903) 241-6482</a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-lg opacity-90">
          <span>* Licensed & Insured</span>
          <span>* Quality Workmanship</span>
          <span>* Free Estimates</span>
        </div>
      </header>

      {/* About Section */}}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Penner Construction</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Penner Construction is your trusted general contractor serving the Carthage area. 
            We pride ourselves on quality workmanship, fair pricing, and excellent customer service. 
            Whether you need a new home built, a renovation project, or repair work, we're here to help 
            with professionalism and integrity you can count on.
          </p>
        </div>
      </section>

      {/* Services Section */}}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Professional construction solutions for all your needs</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-center">Home Building</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-center">Renovations</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-center">Additions</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-center">Repairs</h3>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">Need something specific? We handle custom projects too.</p>
            <a href="#contact" className="text-amber-700 font-bold text-lg hover:underline">Get a free estimate →</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Penner Construction?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every job backed by our satisfaction guarantee</p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Response</h3>
              <p className="text-gray-600">Same-day estimates when you need it</p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Local Experts</h3>
              <p className="text-gray-600">Proudly serving Carthage and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}}
      <section id="contact" className="py-16 px-4 bg-amber-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-12 opacity-90">Contact us today for a free estimate</p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-left space-y-6">
              <div>
                <p className="text-sm opacity-75 mb-1 uppercase tracking-wide">Address</p>
                <p className="text-xl">124 W Sabine St, Carthage, TX 75633</p>
              </div>
              <div>
                <p className="text-sm opacity-75 mb-1 uppercase tracking-wide">Phone</p>
                <p className="text-2xl font-bold"><a href="tel:9032416482" className="underline">(903) 241-6482</a></p>
              </div>
              <div>
                <p className="text-sm opacity-75 mb-1 uppercase tracking-wide">Service Area</p>
                <p className="text-lg">Carthage and Panola County, TX</p>
              </div>
            </div>
            
            <form className="space-y-4 bg-white p-8 rounded-lg text-gray-900">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <select className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="">Service Needed</option>
                <option value="home-building">Home Building</option>
                <option value="renovations">Renovations</option>
                <option value="additions">Additions</option>
                <option value="repairs">Repairs</option>
              </select>
              <textarea placeholder="Tell us about your project" rows={3} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
              <button type="submit" className="w-full bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition">Request Free Quote</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Penner Construction</h3>
          <p className="opacity-75 mb-2">124 W Sabine St, Carthage, TX 75633</p>
          <p className="opacity-75 mb-4">Call: (903) 241-6482</p>
          <p className="opacity-50 text-sm">© {new Date().getFullYear()} Penner Construction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
