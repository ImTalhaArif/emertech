export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">
              EP
            </span>
            <span className="text-lg font-semibold tracking-tight">EmerTech Partners</span>
          </div>
          <p className="max-w-sm text-sm text-gray-600">
            Where strong foundations meet real AI results.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-700">
            Contact
          </h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Australia • Serving ambitious SMEs</li>
            <li>
              <a href="#contact" className="underline hover:no-underline">
                Get in touch
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-700">
            Quick Links
          </h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#expertise" className="hover:underline">Expertise</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#values" className="hover:underline">Values</a></li>
            <li><a href="#discover" className="hover:underline">2-Week Discover</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-gray-500 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} EmerTech Partners. All rights reserved.</p>
          <p>Built on strong foundations — Microsoft 365, Azure, AI platform governance, and more.</p>
        </div>
      </div>
    </footer>
  );
}
