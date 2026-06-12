import Link from 'next/link';
import { ArrowRight, Phone, Star, MapPin, Clock, Home } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Warm residential colors */}
      <section className="relative bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800 text-white min-h-[80vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 rounded-full p-6 shadow-lg animate-pulse">
                <Home className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">PENNER CONSTRUCTION</h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Custom New Home Builder in Carthage & East Texas
            </p>
            <p className="text-lg text-amber-200 mb-10">
              25+ years building quality homes with brick, stone, and open concept designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                View Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:9035550123"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-amber-900 transition shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Free Consultation
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-amber-100">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Serving Panola County & Beyond
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                By Appointment Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Props */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-bold text-lg">25+ Years Experience</p>
              <p className="text-sm">Owner Travis Penner</p>
            </div>
            <div>
              <p className="font-bold text-lg">Builder + Realtor</p>
              <p className="text-sm">We help you sell & build</p>
            </div>
            <div>
              <p className="font-bold text-lg">Quality Finishes</p>
              <p className="text-sm">Brick, Stone & Concrete Floors</p>
            </div>
            <div>
              <p className="font-bold text-lg">Open Concept</p>
              <p className="text-sm">Modern floor plans</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Build Your Dream Home With Confidence</h2>
            <p className="text-xl text-slate-600">From foundation to finish—we&apos;re with you every step</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New Custom Homes */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Custom New Construction</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ One-of-a-kind dream homes</li>
                <li>✓ Full design collaboration</li>
                <li>✓ Foundation to finishing touches</li>
                <li>✓ Your vision, our expertise</li>
                <li>✓ No cookie-cutter here</li>
                <li>✓ Quality craftsmanship guaranteed</li>
              </ul>
            </div>

            {/* Spec Homes */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔑</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Speculative Homes</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Pre-built inventory homes</li>
                <li>✓ Move-in ready options</li>
                <li>✓ Faster closing timeline</li>
                <li>✓ Competitive pricing</li>
                <li>✓ Walk through before you commit</li>
                <li>✓ Limited customization available</li>
              </ul>
            </div>

            {/* Premium Finishes */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-500">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Premium Exterior & Interior</h3>
              <p className="text-slate-600 mb-4">What makes Penner homes stand out:</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>✓ Brick & stone exterior facades</li>
                <li>✓ Stained polished concrete floors</li>
                <li>✓ Open concept living spaces</li>
                <li>✓ Cedar accent features</li>
                <li>✓ Modern finishes throughout</li>
                <li>✓ Professional grade materials</li>
              </ul>
            </div>
            
            {/* Real Estate Integration */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🤝</span>
                <h3 className="text-2xl font-bold text-slate-900">Unique Advantage: We&apos;re Builders AND Realtors</h3>
              </div>
              <p className="text-slate-600 mb-4 text-lg">
                Owner Travis Penner holds both construction expertise <strong>and</strong> a Texas real estate license. This means we can help you sell your current home while building your new one—seamless coordination that saves you money and eliminates stress.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-bold text-blue-800">Sell Your Old Home</p>
                  <p className="text-sm text-blue-600">Listed by our team</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-bold text-blue-800">Build Your New Home</p>
                  <p className="text-sm text-blue-600">Constructed by us</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-bold text-blue-800">Seamless Transition</p>
                  <p className="text-sm text-blue-600">No gap or overlap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Travis Penner</h2>
              <p className="text-lg text-slate-600 mb-6">
                With over 25 years in construction and 6 years as a licensed realtor, Travis brings a unique dual-expertise to homeowners in Panola County. He understands what goes into building a quality home—and what it takes to market and sell it.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                His mission: to serve you, save you money, and build your dream home without cutting corners. From small细节 like stained concrete floors to big-picture project management, Travis oversees everything personally.
              </p>
              <p className="text-lg text-slate-600 mb-8 italic">
                &quot;We are here to serve you, save you money, and build your dream home!&quot;
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Home className="w-6 h-6 text-amber-500 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Quality Over Quantity</strong> — Every home gets attention and care</span>
                </li>
                <li className="flex items-start">
                  <Home className="w-6 h-6 text-amber-500 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Great Management Plans</strong> — Stay on budget and schedule</span>
                </li>
                <li className="flex items-start">
                  <Home className="w-6 h-6 text-amber-500 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Community Trusted</strong> — 252+ Facebook followers, local reputation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-80 rounded-xl flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-5xl mb-2">👷‍♂️🏡</p>
                <p className="text-slate-800 font-semibold text-xl">Travis Penner</p>
                <p className="text-slate-600 mt-2">25+ Years Building Excellence</p>
                <p className="text-amber-700 font-medium mt-4">Builder • Realtor • Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Build With Penner Construction?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Save Money</h3>
              <p className="text-slate-600">
                Competitive pricing, efficient project management, and our builder-realtor combo helps you maximize value at every stage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Workmanship</h3>
              <p className="text-slate-600">
                25+ years of hands-on experience means we spot problems before they happen. Brick, stone, polished floors—we know how to do it right.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Planning</h3>
              <p className="text-slate-600">
                Great management plans keep projects on track. You&apos;ll always know where things stand, what&apos;s next, and when to expect completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Building Trust, One Home at a Time</h2>
            <p className="text-xl text-slate-600">Our Facebook community says it best</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Travis did an amazing job on our new home! The quality is incredible and the process was smooth.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Recent Client</p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Love the open concept design and those polished concrete floors! Best decision we made.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Happy Homeowner</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;He helped us sell our old house and built our dream home. One call handled everything.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Dual Service Client</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-xl mb-8">Let&apos;s discuss your vision and how we can make it a reality</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white text-lg font-semibold rounded-lg hover:bg-amber-600 transition shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="tel:9035550123"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-amber-900 transition shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule Consultation
            </a>
          </div>
          <p className="mt-8 text-amber-200">Serving Carthage, Panola County & East Texas</p>
        </div>
      </section>
    </div>
  );
}
