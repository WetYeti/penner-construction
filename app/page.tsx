export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      <header className="bg-amber-700 text-white py-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">Penner-Const & Catfish</h1>
        <p className="text-2xl mb-4">Authentic Texas BBQ & Fresh Catfish</p>
        <p className="text-xl mb-8">Serving Carthage, TX</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold">View Menu</button>
          <a href="tel:9036937400" className="border-2 border-white px-8 py-3 rounded-lg font-bold">Call (903) 241-6482</a>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <span>* Family Owned</span>
          <span>* Award-Winning</span>
          <span>* Locally Sourced</span>
        </div>
      </header>
      
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">Welcome to Penner-Const & Catfish, where authentic Texas BBQ meets fresh, locally-sourced catfish. We take pride in serving our community with traditional recipes and quality ingredients.</p>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What We Serve</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['BBQ Brisket', 'Fried Catfish', 'Ribs & Sausages', 'Catering'].map(item => (
              <div key={item} className="bg-orange-50 p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-amber-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Visit Us Today</h2>
        <div className="space-y-4 text-lg">
          <p><strong>Address:</strong> 124 W Sabine St, Carthage, TX 75633</p>
          <p><strong>Phone:</strong> <a href="tel:9036937400" className="underline">(903) 241-6482</a></p>
          <p><strong>Hours:</strong> Lunch Tue-Sat 11AM-3PM | Dinner Thu-Sat 5PM-9PM</p>
        </div>
        <form className="max-w-md mx-auto mt-12 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded" />
          <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded" />
          <textarea placeholder="Order or questions?" rows={3} className="w-full px-4 py-3 rounded"></textarea>
          <button type="submit" className="w-full bg-white text-amber-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">Place Order</button>
        </form>
      </section>
      
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Penner-Const & Catfish. All rights reserved.</p>
      </footer>
    </div>
  );
}