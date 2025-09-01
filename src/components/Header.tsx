/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <header className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-3 md:py-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
          alt="Supreme Group Logo"
          className="h-8 sm:h-10 w-auto object-contain transition-transform hover:scale-105"
        />
      </div>
    </header>
  );
}
