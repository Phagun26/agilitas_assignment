import { Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white max-w-[375px] mx-auto">
      {/* Mobile Navigation Header */}
      <header className="relative">
        {/* Glass Navigation Card */}
        <div className="absolute top-0 left-0 right-0 z-20 px-4 pt-3">
          <div className="bg-black/95 backdrop-blur-[20px] rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2de3cc93a61846de3e675e46476379dfc80d299d?width=232"
                  alt="Agilitas Logo"
                  className="h-[38px] w-[116px]"
                />
                <div className="w-1 h-1 bg-ag-lemon-green rounded-full ml-2" />
              </div>

              {/* Mobile Menu Lines */}
              <div className="space-y-1">
                <div className="w-7 h-0.5 bg-ag-light"></div>
                <div className="w-6 h-0.5 bg-ag-light"></div>
                <div className="w-7 h-0.5 bg-ag-light"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-[336px] overflow-hidden">
          {/* Background Images */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/eaa28ef28a33ea8eb16e9f60c6f2047f2225cd15?width=808"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ea73ac6042407479c86f499dcf131a3cd26ed62c?width=1384"
            alt="Secondary hero image"
            className="absolute top-12 -left-20 w-[692px] h-[289px] object-cover"
          />

          {/* Shadow overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute left-4 right-4 bottom-16 h-[115px] bg-ag-dark/20 backdrop-blur-[40px] rounded-lg" />

          {/* Hero Title */}
          <div className="absolute left-5 right-5 bottom-20 z-10">
            <h1 className="text-ag-light font-space text-[32px] font-bold leading-[42px] text-right">
              A Whole
              <br />
              Lotto Joy
            </h1>
          </div>

          {/* Decorative Shapes */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Dark Teal Shape */}
            <svg
              className="absolute bottom-0 left-4 w-[358px] h-[162px]"
              viewBox="0 0 358 162"
              fill="none"
            >
              <path
                d="M82.4832 0H358V162H0L82.4832 0Z"
                fill="var(--ag-dark-teal)"
              />
            </svg>

            {/* Blue Shape */}
            <svg
              className="absolute bottom-0 right-0 w-[48px] h-[192px]"
              viewBox="0 0 48 192"
              fill="none"
            >
              <path d="M56 0L121 41V192H0L56 0Z" fill="var(--ag-bright-blue)" />
            </svg>
          </div>

          {/* Pink Decorative Line */}
          <svg
            className="absolute right-10 top-[421px] w-[39px] h-[245px] z-10"
            viewBox="0 0 39 245"
            fill="none"
          >
            <path d="M39 1L1 68.1376V245" stroke="#FF004F" strokeWidth="1" />
          </svg>
        </div>

        {/* Subtitle Section */}
        <div className="relative bg-gradient-to-r from-ag-dark-teal to-ag-bright-blue px-6 py-6">
          <p className="text-ag-light font-space text-base leading-6 text-center max-w-[246px] mx-auto">
            Lotto is stepping into its new era with Agilitas as its compass. A
            journey that is familiar, reborn with a new purpose.
          </p>
        </div>
      </header>

      {/* Our Vision Section */}
      <section className="py-12">
        <div className="px-4 text-center">
          <h2 className="font-space text-[28px] font-semibold leading-9 text-black mb-4">
            Our vision for Lotto
          </h2>
          <p className="font-ibm text-base leading-6 text-black max-w-[266px] mx-auto">
            Reignite a legacy brand with new energy, rooted in:
          </p>
        </div>
      </section>

      {/* Sport & Swagger Section */}
      <section className="px-4 mb-16">
        <div className="relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/40a416f1d6749f56d932d9d3444b151ee479651e?width=706"
            alt="Sport athlete"
            className="w-full h-[378px] object-cover rounded-lg"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
            <h3 className="font-space text-2xl font-bold leading-8 text-white mb-2 drop-shadow-lg">
              Sport & Swagger
            </h3>
            <p className="font-ibm text-base text-white drop-shadow-lg max-w-[264px]">
              Function first, fashion-always.
            </p>
          </div>
        </div>
      </section>

      {/* Culture in Motion Section */}
      <section className="px-4 mb-16">
        <div className="relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/26c995820288c6cf6e0a71620107f21e8f94b35d?width=716"
            alt="Culture in motion"
            className="w-full h-[376px] object-cover rounded-lg"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
            <h3 className="font-space text-2xl font-bold leading-8 text-white mb-2 drop-shadow-lg">
              Culture in Motion
            </h3>
            <p className="font-ibm text-base text-white drop-shadow-lg max-w-[264px]">
              Rewriting culture through rhythm, rebellion and raw expression.
            </p>
          </div>
        </div>
      </section>

      {/* Live in Motion Section */}
      <section className="px-4 mb-16">
        <div className="relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/72fe3b5a0ef90620b375aa496b529b68d3dc2152?width=723"
            alt="Live in motion"
            className="w-full h-[379px] object-cover rounded-lg"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
            <h3 className="font-space text-2xl font-bold leading-8 text-white mb-2 drop-shadow-lg">
              Live in Motion
            </h3>
            <p className="font-ibm text-base text-white drop-shadow-lg max-w-[264px]">
              Made to move in all the ways that feel like you.
            </p>
          </div>
        </div>
      </section>

      {/* Agilitas Quote Section */}
      <section className="bg-ag-dark py-16 px-4">
        <p className="font-space text-2xl font-medium leading-8 text-ag-light text-center max-w-[339px] mx-auto">
          Agilitas is turning up the volume on Lotto's presence and creating
          momentum across markets. In India, it's not just part of the
          conversation—it's writing the whole playbook.
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-0">
        <div className="grid grid-cols-2 gap-0">
          {/* Top Left */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/880104d83deec2044e1e95e0c99fa74f0c0afaae?width=290"
            alt="Product 1"
            className="w-full h-[208px] object-cover"
          />
          {/* Top Right */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1649da629d0c2273b0d22ba9ac4c552843372927?width=644"
            alt="Product 2"
            className="w-full h-[208px] object-cover"
          />
          {/* Bottom Left (spans 2 cols but positioned) */}
          <div className="col-span-2 relative -ml-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0dcfa37f6603bcf7ed8892da400ff1d88f4f4f45?width=907"
              alt="Product 3"
              className="w-[453px] h-[208px] object-cover ml-11"
            />
          </div>
          {/* Bottom Right */}
          <div className="absolute right-0 mt-[208px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e0f27e53a4b29cd0dc05673d110f9e31d3aa8e87?width=408"
              alt="Product 4"
              className="w-[246px] h-[208px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <h2 className="font-space text-[28px] font-semibold leading-9 text-black text-center mb-12">
          Coming Soon
        </h2>

        <div className="space-y-8">
          {/* Run Club Meetup */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a7e5e8dacbb85b2c426cbfe3fe3944b4f18892a8?width=789"
              alt="Run Club Meetup"
              className="w-full h-[257px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
              <h3 className="font-space text-2xl font-medium leading-8 text-ag-light mb-2">
                Run Club Meetup
                <br />
                Jun 25, 10 am
              </h3>
              <p className="font-ibm text-sm leading-5 text-ag-light max-w-[243px]">
                Join local runners for a 5K, gear trials, and post-run
                smoothies.
              </p>
            </div>
          </div>

          {/* Custom Kicks Day */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fcc5563c66f512ed4de2d45ba70d22c75196fc7a?width=771"
              alt="Custom Kicks Day"
              className="w-full h-[257px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
              <h3 className="font-space text-2xl font-medium leading-8 text-ag-light mb-2">
                Custom Kicks Day
                <br />
                Jun 26, 6 PM
              </h3>
              <p className="font-ibm text-sm leading-5 text-ag-light max-w-[317px]">
                Design your pair. Add your name. Walk out with a one-of-one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="font-space text-[28px] font-semibold leading-9 text-black mb-4">
            Join the movement
          </h2>
          <p className="font-ibm text-lg leading-7 text-black max-w-[341px] mx-auto">
            The next era is in motion - are you in?
          </p>
        </div>

        <div className="space-y-8">
          {/* Discover Where You Fit In */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e310c6196f5bea4bf37ef7f3743c1df525cfe4b1?width=686"
              alt="Discover where you fit in"
              className="w-full h-[216px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded">
                <h3 className="font-space text-2xl font-medium leading-8 text-white underline text-center max-w-[201px]">
                  DISCOVER WHERE YOU FIT IN
                </h3>
              </div>
            </div>
          </div>

          {/* Vibe with Creators */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c62fd6b3c040be7cd9ca02ca1dd19e39e8021b9b?width=686"
              alt="Vibe with creators who get it"
              className="w-full h-[216px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded">
                <h3 className="font-space text-2xl font-medium leading-8 text-white underline text-center max-w-[245px]">
                  VIBE WITH CREATORS WHO GET IT
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Lotto Section */}
      <section className="bg-ag-dark-teal py-16 mx-4 rounded-lg mb-16">
        <div className="px-4 text-center">
          <h2 className="font-space text-[28px] font-semibold leading-9 text-ag-bright-pink mb-4">
            Explore Lotto
          </h2>
          <a
            href="https://www.lottosport.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-space text-2xl font-medium text-ag-light underline hover:text-white transition-colors"
          >
            www.lottosport.in
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Mobile Footer */}
      <footer className="bg-ag-dark text-ag-light">
        <div className="px-4 py-12">
          {/* Logo and Branding */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 bg-ag-lemon-green rounded-full mr-2" />
              <div className="w-2 h-2 bg-ag-bright-blue rounded-full mr-2" />
              <div className="w-2 h-2 bg-ag-bright-pink rounded-full mr-2" />
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
            </div>
            <div className="w-[112px] h-[30px] bg-gray-600 rounded mb-6" />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-4 font-ibm text-lg leading-7">
              <a href="#" className="block hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                What we do
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Inside Agilitas
              </a>
            </div>

            <div className="space-y-4 font-ibm leading-6">
              <a
                href="#"
                className="block text-lg hover:text-white transition-colors"
              >
                Join the Team
              </a>
              <a
                href="#"
                className="block text-lg hover:text-white transition-colors"
              >
                Media
              </a>
              <div className="text-base">
                <span className="text-lg">Blogs </span>
                <span className="text-base">(Coming Soon)</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h4 className="font-space text-lg font-medium text-white mb-6">
              Stay in the Loop. Move with Us.
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="font-ibm text-sm font-bold text-white mb-1">
                  Email
                </h5>
                <a
                  href="mailto:info@agilitas.in"
                  className="font-ibm text-sm underline hover:text-white transition-colors"
                >
                  info@agilitas.in
                </a>
              </div>

              <div>
                <h5 className="font-ibm text-sm font-bold text-white mb-2">
                  Corporate address
                </h5>
                <address className="font-ibm text-sm not-italic leading-5">
                  Roshini Tech Hub,
                  <br />
                  PFS Club House,
                  <br />
                  Marathahalli Main Rd,
                  <br />
                  Lakshminarayana Pura,
                  <br />
                  EPIP Zone,
                  <br />
                  Chinnapanna Halli,
                  <br />
                  Bengaluru, Karnataka 560037
                  <br />
                  <br />
                  🧭{" "}
                  <a
                    href="#"
                    className="underline hover:text-white transition-colors"
                  >
                    Get directions
                  </a>
                </address>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="font-ibm text-lg leading-7 mb-8">
            Comprehensively building the entire value chain from manufacturing
            to retail
          </p>

          {/* Social Links */}
          <div className="mb-8">
            <h4 className="font-ibm text-sm text-white mb-4">Follow us</h4>
            <div className="flex space-x-6">
              <Linkedin className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
              <Youtube className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-white py-6">
          <div className="px-4">
            <p className="font-ibm text-lg text-black leading-7">
              © 2025 Agilitas All rights reserved.
              <br />
              <a
                href="#"
                className="underline hover:text-gray-600 transition-colors"
              >
                Terms of Use
              </a>
              <span className="mx-2">|</span>
              <a
                href="#"
                className="underline hover:text-gray-600 transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
