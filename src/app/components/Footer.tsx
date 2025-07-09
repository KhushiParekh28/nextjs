export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-10">
      {/* Top bar */}
      <div className="bg-gray-800 text-white px-6 py-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <p className="mb-2 font-medium">📧 Get special discount on your inbox</p>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-1 border-b bg-transparent outline-none text-white placeholder-gray-300"
            />
            <button className="border border-white px-4 py-1 hover:bg-white hover:text-black transition">
              SEND
            </button>
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">📱 EXPERIENCE THE NYKAA MOBILE APP</p>
          <div className="flex justify-center md:justify-start gap-2">
            <img
              src="/google-play.png"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="/app-store.png"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        <div>
          <p className="mb-1 font-medium">📞 FOR ANY HELP, YOU MAY CALL US AT</p>
          <p className="text-lg font-semibold">1800-267-4444</p>
          <p className="text-sm mt-1">(Mon–Sat, 8AM to 10PM & Sun, 10AM to 7PM)</p>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="bg-gray-400 px-6 py-10 grid md:grid-cols-5 gap-6">
        <div>
          <h3 className="text-white font-bold mb-3 text-xl">NYKAA</h3>
          <ul className="space-y-1">
            <li>Who are we?</li>
            <li>Careers</li>
            <li>Authenticity</li>
            <li>Press</li>
            <li>Testimonials</li>
            <li>Nykaa CSR</li>
            <li>Sustainability</li>
            <li>Responsible Disclosure</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Help</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Store Locator</li>
            <li>Cancellation & Return</li>
            <li>Shipping & Delivery</li>
            <li>Sell on Nykaa</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Inspire Me</h4>
          <ul className="space-y-1">
            <li>Beauty Book</li>
            <li>Games Board</li>
            <li>Buying Guides</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li>Offer Zone</li>
            <li>New Launches</li>
            <li>Nykaa Man</li>
            <li>Nykaa Fashion</li>
            <li>Nykaa Pro</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Top Categories</h4>
          <ul className="space-y-1">
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Bath & Body</li>
            <li>Appliances</li>
            <li>Mom and Baby</li>
            <li>Health & Wellness</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
