import { ChevronDown, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="relative">
        {/* Hero background image */}
        <div 
          className="relative h-[699px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://api.builder.io/api/v1/image/assets/TEMP/c9cff0d775057676465b750070f64daf01615d6c?width=2880)`
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          
          {/* Navigation */}
          <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 lg:px-[189px] pt-6">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/8d2f8c109be081342057899cba56d101a3d7fb0c?width=316"
                alt="Agilitas Logo"
                className="h-[52px] w-[158px]"
              />
              <div className="w-1.5 h-1.5 bg-ag-lemon-green rounded-full ml-2" />
            </div>

            {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-ag-light font-space text-xl">
            <a href="#" className="hover:text-white transition-colors">About us</a>
            <div className="flex items-center space-x-1">
              <a href="#" className="font-bold hover:text-white transition-colors">What we do</a>
              <ChevronDown className="w-3 h-3" />
              <div className="w-[30px] h-1 bg-ag-lemon-green transform skew-x-12" />
            </div>
            <a href="#" className="hover:text-white transition-colors">Inside Agilitas</a>
            <a href="#" className="hover:text-white transition-colors">Join the team</a>
            <a href="#" className="hover:text-white transition-colors">Media</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-ag-light p-2">
            <div className="w-6 h-0.5 bg-ag-light mb-1"></div>
            <div className="w-6 h-0.5 bg-ag-light mb-1"></div>
            <div className="w-6 h-0.5 bg-ag-light"></div>
          </button>
          </nav>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Shadow overlay for text */}
            <div className="relative z-10 px-4 sm:px-8 lg:px-[382px] pb-[60px] sm:pb-[120px]">
              <h1 className="text-ag-light font-space text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight sm:leading-[70px] text-center sm:text-right tracking-[-0.64px] drop-shadow-lg">
                A Whole Lotto Joy
              </h1>
            </div>
            
            {/* Decorative shapes */}
            <div className="absolute bottom-0 left-0 right-0 hidden sm:block">
              {/* Dark teal shape */}
              <div
                className="absolute bottom-0 left-[20%] right-[12%] h-[120px] sm:h-[190px] bg-ag-dark-teal"
                style={{
                  clipPath: 'polygon(8.8% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              />
              {/* Blue shape */}
              <div
                className="absolute bottom-0 right-0 w-[120px] sm:w-[169px] h-[120px] sm:h-[190px] bg-ag-bright-blue"
                style={{
                  clipPath: 'polygon(76.5% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              />
            </div>
          </div>

          {/* Pink decorative line */}
          <svg
            className="absolute right-4 sm:right-[128px] top-[400px] sm:top-[791px] w-[80px] sm:w-[129px] h-[300px] sm:h-[492px] hidden md:block"
            viewBox="0 0 129 492"
            fill="none"
          >
            <path d="M128 1L1 114.367V316.094V492" stroke="#FF004F" strokeWidth="2"/>
          </svg>
        </div>

        {/* Subtitle section */}
        <div className="relative bg-gradient-to-r from-ag-dark-teal to-ag-bright-blue">
          <div className="container mx-auto px-4 sm:px-8 py-8 lg:py-12">
            <p className="text-ag-light font-space text-xl sm:text-2xl lg:text-[28px] leading-8 sm:leading-9 text-center max-w-[853px] mx-auto">
              Lotto is stepping into its new era with Agilitas as its compass. A journey that is familiar, reborn with a new purpose.
            </p>
          </div>
        </div>
      </header>

      {/* Tradition in Transition Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-space text-4xl lg:text-[36px] font-semibold leading-[44px] tracking-[-0.09px] text-black mb-4">
            Tradition in Transition
          </h2>
          <p className="font-ibm text-lg text-black max-w-[332px] mx-auto">
            Reimagining a legacy fit to move with you
          </p>
        </div>
      </section>

      {/* Three Columns Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1217px] mx-auto">
            {/* Left Image */}
            <div className="relative h-[400px] sm:h-[453px] rounded-lg overflow-hidden group">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/45e45ee1f3822e0f1cc2a822331e3be0b8ad37aa?width=846"
                alt="Sport athlete"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
                <h3 className="font-space text-xl sm:text-2xl lg:text-[28px] font-bold leading-8 sm:leading-9 text-white mb-2 drop-shadow-lg">
                  Sport & Swagger
                </h3>
                <p className="font-ibm text-base sm:text-lg text-white drop-shadow-lg">Function first, fashion-always.</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative h-[400px] sm:h-[453px] rounded-lg overflow-hidden group md:col-span-2 lg:col-span-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c328e747986a4a02d2301076346bcdba7b8f2e21?width=862"
                alt="Culture in motion"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
                <h3 className="font-space text-xl sm:text-2xl lg:text-[28px] font-bold leading-8 sm:leading-9 text-white mb-2 drop-shadow-lg">
                  Culture in Motion
                </h3>
                <p className="font-ibm text-base sm:text-lg text-white max-w-[292px] drop-shadow-lg">
                  Rewriting culture through rhythm, rebellion and raw expression.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] sm:h-[453px] rounded-lg overflow-hidden group md:col-span-2 lg:col-span-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fcb8c6e6cfef44d80378eb78739130b99a4a4cdc?width=864"
                alt="Live in motion"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
                <h3 className="font-space text-xl sm:text-2xl lg:text-[28px] font-bold leading-8 sm:leading-9 text-white mb-2 drop-shadow-lg">
                  Live in Motion
                </h3>
                <p className="font-ibm text-base sm:text-lg text-white max-w-[264px] drop-shadow-lg">
                  Made to move in all the ways that feel like you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agilitas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Text */}
            <div className="bg-ag-dark text-ag-light p-8 lg:p-20 min-h-[552px] flex items-center">
              <div>
                <p className="font-space text-3xl lg:text-[36px] font-semibold leading-[44px] tracking-[-0.09px]">
                  Agilitas is turning up the volume on Lotto's presence and creating momentum across markets. In India, it's not just part of the conversation—it's writing the whole playbook.
                </p>
              </div>
            </div>

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-4 h-[552px]">
              <div className="grid grid-rows-2 gap-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e98a29168d82803962df3fbb9191e4c8179a3f46?width=742"
                  alt="Product shot 1"
                  className="w-full h-full object-cover rounded"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1bb4f0cdeb88645e82d0b205a8558b900341a58a?width=1204"
                  alt="Product shot 2"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d4990cb0227b593a99ba4a243e851cdfd22ea036?width=1046"
                  alt="Product shot 3"
                  className="w-full h-full object-cover rounded"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/25bba6c08847bddd2a10a1828a1051c58f9c2224?width=750"
                  alt="Product shot 4"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blue decorative line */}
        <svg 
          className="absolute left-10 mt-16 w-[106px] h-[421px]"
          viewBox="0 0 106 421" 
          fill="none"
        >
          <path d="M1 1L105 140.513V420.487" stroke="#1D1BFB" strokeWidth="2"/>
        </svg>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-space text-4xl lg:text-[36px] font-semibold leading-[44px] tracking-[-0.09px] text-black text-center mb-12">
            Coming Soon
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1273px] mx-auto">
            {/* Run Club Meetup */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/edab1ada03056855d3a19b31cc10858856ae3bdf?width=1050"
                alt="Run Club Meetup"
                className="w-full h-[342px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
                <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-9 text-ag-light mb-2">
                  Run Club Meetup<br />Jun 25, 10 am
                </h3>
                <p className="font-ibm text-base text-ag-light">
                  Join local runners for a 5K, gear trials, and post-run smoothies.
                </p>
              </div>
            </div>

            {/* Custom Kicks Day */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/0b45a122228d1dc18a80277009fff8cf7f00f0ee?width=1026"
                alt="Custom Kicks Day"
                className="w-full h-[342px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
                <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-9 text-ag-light mb-2">
                  Custom Kicks Day<br />Jun 26, 6 PM
                </h3>
                <p className="font-ibm text-base text-ag-light">
                  Design your pair. Add your name. Walk out with a one-of-one.
                </p>
              </div>
            </div>

            {/* Football Weekend */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2e80d2d46be1527cfa1e0b9e87b9da0481a84209?width=1044"
                alt="Football Weekend"
                className="w-full h-[342px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
                <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-9 text-ag-light mb-2">
                  Football Weekend<br />Jun 28-29, 11 am
                </h3>
                <p className="font-ibm text-base text-ag-light">
                  Join us for skill challenges, mini matches, & the launch of our latest turf-ready kicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="font-space text-4xl lg:text-[36px] font-semibold leading-[44px] tracking-[-0.09px] text-black mb-4">
            Join the movement
          </h2>
          <p className="font-ibm text-lg text-black">
            The next era is in motion - are you in?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1274px] mx-auto px-4">
          {/* Discover Where You Fit In */}
          <div className="relative rounded-lg overflow-hidden h-[368px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6881eaa8762a9d8272a2fae84e10c0604be8e6d2?width=1256"
              alt="Discover where you fit in"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm px-8 py-4 rounded">
                <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-9 text-white underline">
                  DISCOVER WHERE YOU FIT IN
                </h3>
              </div>
            </div>
          </div>

          {/* Vibe with Creators */}
          <div className="relative rounded-lg overflow-hidden h-[368px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7bbe65601a68232330f5289de77d16f35ad462e8?width=1322"
              alt="Vibe with creators who get it"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm px-8 py-4 rounded">
                <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-9 text-white underline">
                  VIBE WITH CREATORS WHO GET IT
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Lotto Section */}
      <section className="bg-ag-dark-teal py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-space text-4xl lg:text-[36px] font-semibold leading-[44px] tracking-[-0.09px] text-ag-bright-pink mb-4">
            Explore Lotto
          </h2>
          <a 
            href="https://www.lottosport.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-space text-2xl lg:text-[28px] font-medium text-ag-light underline hover:text-white transition-colors"
          >
            www.lottosport.in
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ag-dark text-ag-light">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-8">
                <div className="w-4 h-4 bg-ag-lemon-green rounded-full mr-3" />
                <div className="w-4 h-4 bg-ag-bright-blue rounded-full mr-3" />
                <div className="w-4 h-4 bg-ag-bright-pink rounded-full mr-3" />
                <div className="w-4 h-4 bg-orange-500 rounded-full" />
              </div>
              <div className="w-[163px] h-[44px] bg-gray-600 mb-8" />
              <p className="font-ibm text-xl leading-8 mb-8">
                Comprehensively building the entire value chain from manufacturing to retail
              </p>
              
              <div className="mb-6">
                <h4 className="font-ibm text-xl text-white mb-4">Follow us</h4>
                <div className="flex space-x-6">
                  <Linkedin className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                  <Instagram className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                  <Youtube className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-1">
              <div className="space-y-4 font-ibm text-xl leading-8">
                <a href="#" className="block hover:text-white transition-colors">About Us</a>
                <a href="#" className="block hover:text-white transition-colors">What we do</a>
                <a href="#" className="block hover:text-white transition-colors">Inside Agilitas</a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-4 font-ibm leading-7">
                <a href="#" className="block text-xl hover:text-white transition-colors">Join the Team</a>
                <a href="#" className="block text-xl hover:text-white transition-colors">Media</a>
                <div className="text-lg">
                  <span className="text-xl">Blogs </span>
                  <span className="text-lg">(Coming Soon)</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="font-space text-xl font-medium text-white mb-6">
                Stay in the Loop. Move with Us.
              </h4>
              
              <div className="mb-6">
                <h5 className="font-ibm text-base font-bold text-white">Email</h5>
                <a href="mailto:info@agilitas.in" className="font-ibm text-base underline hover:text-white transition-colors">
                  info@agilitas.in
                </a>
              </div>

              <div>
                <h5 className="font-ibm text-base font-bold text-white mb-2">Corporate address</h5>
                <address className="font-ibm text-base not-italic leading-6">
                  Roshini Tech Hub,<br />
                  PFS Club House,<br />
                  Marathahalli Main Rd,<br />
                  Lakshminarayana Pura,<br />
                  EPIP Zone, Chinnapanna Halli,<br />
                  Bengaluru, Karnataka 560037<br /><br />
                  🧭 <a href="#" className="underline hover:text-white transition-colors">Get directions</a>
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-white py-6">
          <div className="container mx-auto px-4">
            <p className="font-ibm text-xl text-black">
              © 2025 Agilitas All rights reserved. 
              <a href="#" className="underline hover:text-gray-600 transition-colors ml-1">Terms of Use</a>
              <span className="mx-2">|</span>
              <a href="#" className="underline hover:text-gray-600 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
