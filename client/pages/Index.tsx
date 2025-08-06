import {
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleOnHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  whileTap: { scale: 0.95 }
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header - Responsive */}
      <header className="relative">
        {/* Mobile Navigation Card */}
        <motion.div 
          className="absolute top-0 left-0 right-0 z-20 px-4 pt-3 lg:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black/95 backdrop-blur-[20px] rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2de3cc93a61846de3e675e46476379dfc80d299d?width=232"
                  alt="Agilitas Logo"
                  className="h-[38px] w-[116px]"
                />
                <motion.div 
                  className="w-1 h-1 bg-ag-lemon-green rounded-full ml-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.div 
                className="space-y-1 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="w-7 h-0.5 bg-ag-light"
                  whileHover={{ scaleX: 1.2 }}
                />
                <motion.div 
                  className="w-6 h-0.5 bg-ag-light"
                  whileHover={{ scaleX: 1.2 }}
                />
                <motion.div 
                  className="w-7 h-0.5 bg-ag-light"
                  whileHover={{ scaleX: 1.2 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation - Glassmorphic Bar */}
        <motion.nav
          className="hidden lg:block absolute top-0 left-0 right-0 z-20 px-8 xl:px-[189px] pt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-black/40 backdrop-blur-[35px] rounded-lg border border-white/10 px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8d2f8c109be081342057899cba56d101a3d7fb0c?width=316"
                  alt="Agilitas Logo"
                  className="h-[52px] w-[158px]"
                />
                <motion.div
                  className="w-1.5 h-1.5 bg-ag-lemon-green rounded-full ml-2"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                className="flex items-center space-x-8 text-ag-light font-space text-xl"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  About us
                </motion.a>
                <motion.div
                  className="flex items-center space-x-1"
                  variants={fadeInUp}
                >
                  <motion.a
                    href="#"
                    className="font-bold hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    What we do
                  </motion.a>
                  <ChevronDown className="w-3 h-3" />
                  <motion.div
                    className="w-[30px] h-1 bg-ag-lemon-green transform skew-x-12"
                    whileHover={{ scaleX: 1.2 }}
                  />
                </motion.div>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  Inside Agilitas
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  Join the team
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  Media
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section - Responsive */}
        <div className="relative h-[336px] lg:h-[699px] overflow-hidden">
          {/* Background Images */}
          <motion.img
            src="https://api.builder.io/api/v1/image/assets/TEMP/eaa28ef28a33ea8eb16e9f60c6f2047f2225cd15?width=808"
            alt="Hero background mobile"
            className="absolute inset-0 w-full h-full object-cover scale-105 lg:hidden"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c9cff0d775057676465b750070f64daf01615d6c?width=2880"
            alt="Hero background desktop"
            className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ea73ac6042407479c86f499dcf131a3cd26ed62c?width=1384"
            alt="Secondary hero image"
            className="absolute top-12 -left-20 w-[692px] h-[289px] object-cover lg:hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: -80, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Shadow overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          <motion.div 
            className="absolute left-4 right-4 bottom-16 h-[115px] bg-ag-dark/20 backdrop-blur-[40px] rounded-lg lg:hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Hero Title */}
          <motion.div 
            className="absolute left-5 right-5 bottom-20 z-10 lg:bottom-[120px] lg:left-[382px] lg:right-[80px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1 
              className="text-ag-light font-space text-[32px] lg:text-[64px] font-bold leading-[42px] lg:leading-[70px] text-right drop-shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              A Whole
              <br />
              Lotto Joy
            </motion.h1>
          </motion.div>

          {/* Decorative Shapes */}
          <div className="absolute bottom-0 left-0 right-0">
            <motion.svg
              className="absolute bottom-0 left-4 w-[358px] h-[162px] lg:left-[303px] lg:w-[1137px] lg:h-[190px]"
              viewBox="0 0 358 162"
              fill="none"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <path
                d="M82.4832 0H358V162H0L82.4832 0Z"
                fill="hsl(var(--ag-dark-teal))"
              />
            </motion.svg>

            <motion.svg
              className="absolute bottom-0 right-0 w-[48px] h-[192px] lg:w-[169px] lg:h-[190px]"
              viewBox="0 0 48 192"
              fill="none"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <path d="M56 0L121 41V192H0L56 0Z" fill="hsl(var(--ag-bright-blue))" />
            </motion.svg>
          </div>

          {/* Pink Decorative Line */}
          <motion.svg
            className="absolute right-10 top-[421px] w-[39px] h-[245px] z-10 lg:right-[128px] lg:top-[791px] lg:w-[129px] lg:h-[492px]"
            viewBox="0 0 39 245"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          >
            <motion.path 
              d="M39 1L1 68.1376V245" 
              stroke="#FF004F" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
          </motion.svg>
        </div>

        {/* Subtitle Section */}
        <motion.div 
          className="relative bg-gradient-to-r from-ag-dark-teal to-ag-bright-blue px-6 py-6 lg:px-8 lg:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p 
            className="text-ag-light font-space text-base lg:text-[28px] leading-6 lg:leading-9 text-center max-w-[246px] lg:max-w-[853px] mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Lotto is stepping into its new era with Agilitas as its compass. A
            journey that is familiar, reborn with a new purpose.
          </motion.p>
        </motion.div>
      </header>

      {/* Our Vision Section */}
      <motion.section 
        className="py-12 lg:py-24"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="px-4 lg:container lg:mx-auto text-center">
          <motion.h2 
            className="font-space text-[28px] lg:text-[36px] font-semibold leading-9 lg:leading-[44px] text-black mb-4"
            variants={fadeInUp}
          >
            Our vision for Lotto
          </motion.h2>
          <motion.p 
            className="font-ibm text-base lg:text-lg leading-6 lg:leading-7 text-black max-w-[266px] lg:max-w-[332px] mx-auto"
            variants={fadeInUp}
          >
            Reignite a legacy brand with new energy, rooted in:
          </motion.p>
        </div>
      </motion.section>

      {/* Three Pillars - Responsive Layout */}
      <motion.section 
        className="px-4 lg:px-8 mb-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="lg:container lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-[1217px] mx-auto">
            {/* Sport & Swagger */}
            <motion.div 
              className="relative group"
              variants={fadeInLeft}
              {...scaleOnHover}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/40a416f1d6749f56d932d9d3444b151ee479651e?width=706"
                  alt="Sport athlete"
                  className="w-full h-[378px] lg:h-[453px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div 
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-space text-2xl lg:text-[28px] font-bold leading-8 lg:leading-9 text-white mb-2 drop-shadow-lg">
                    Sport & Swagger
                  </h3>
                  <p className="font-ibm text-base lg:text-lg text-white drop-shadow-lg max-w-[264px]">
                    Function first, fashion-always.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Culture in Motion */}
            <motion.div 
              className="relative group"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/26c995820288c6cf6e0a71620107f21e8f94b35d?width=716"
                  alt="Culture in motion"
                  className="w-full h-[378px] lg:h-[453px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div 
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-space text-2xl lg:text-[28px] font-bold leading-8 lg:leading-9 text-white mb-2 drop-shadow-lg">
                    Culture in Motion
                  </h3>
                  <p className="font-ibm text-base lg:text-lg text-white drop-shadow-lg max-w-[264px]">
                    Rewriting culture through rhythm, rebellion and raw
                    expression.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Live in Motion */}
            <motion.div 
              className="relative group"
              variants={fadeInRight}
              {...scaleOnHover}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/72fe3b5a0ef90620b375aa496b529b68d3dc2152?width=723"
                  alt="Live in motion"
                  className="w-full h-[378px] lg:h-[453px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div 
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="font-space text-2xl lg:text-[28px] font-bold leading-8 lg:leading-9 text-white mb-2 drop-shadow-lg">
                    Live in Motion
                  </h3>
                  <p className="font-ibm text-base lg:text-lg text-white drop-shadow-lg max-w-[264px]">
                    Made to move in all the ways that feel like you.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Agilitas Quote Section */}
      <motion.section 
        className="bg-ag-dark py-16 lg:py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div 
              className="flex items-center justify-center lg:justify-start"
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="font-space text-2xl lg:text-[36px] font-medium leading-8 lg:leading-[44px] text-ag-light text-center lg:text-left max-w-[339px] lg:max-w-[485px]">
                Agilitas is turning up the volume on Lotto's presence and
                creating momentum across markets. In India, it's not just part
                of the conversation—it's writing the whole playbook.
              </p>
            </motion.div>

            {/* Product Images Grid - Desktop */}
            <motion.div 
              className="hidden lg:grid grid-cols-2 gap-4 h-[552px]"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid grid-rows-2 gap-4">
                <motion.img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e98a29168d82803962df3fbb9191e4c8179a3f46?width=742"
                  alt="Product 1"
                  className="w-full h-full object-cover rounded"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1bb4f0cdeb88645e82d0b205a8558b900341a58a?width=1204"
                  alt="Product 2"
                  className="w-full h-full object-cover rounded"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <motion.img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d4990cb0227b593a99ba4a243e851cdfd22ea036?width=1046"
                  alt="Product 3"
                  className="w-full h-full object-cover rounded"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/25bba6c08847bddd2a10a1828a1051c58f9c2224?width=750"
                  alt="Product 4"
                  className="w-full h-full object-cover rounded"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blue decorative line */}
        <motion.svg
          className="absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 w-[80px] sm:w-[106px] h-[300px] sm:h-[421px] hidden lg:block"
          viewBox="0 0 106 421"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <motion.path 
            d="M1 1L105 140.513V420.487" 
            stroke="#1D1BFB" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.svg>
      </motion.section>

      {/* Mobile Product Grid */}
      <motion.section 
        className="px-0 lg:hidden"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 gap-0">
          <motion.img
            src="https://api.builder.io/api/v1/image/assets/TEMP/880104d83deec2044e1e95e0c99fa74f0c0afaae?width=290"
            alt="Product 1"
            className="w-full h-[208px] object-cover"
            variants={fadeInLeft}
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1649da629d0c2273b0d22ba9ac4c552843372927?width=644"
            alt="Product 2"
            className="w-full h-[208px] object-cover"
            variants={fadeInRight}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div 
            className="col-span-2 relative -ml-4"
            variants={fadeInUp}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0dcfa37f6603bcf7ed8892da400ff1d88f4f4f45?width=907"
              alt="Product 3"
              className="w-[453px] h-[208px] object-cover ml-11"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Coming Soon Section */}
      <motion.section 
        className="py-16 px-4 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="font-space text-[28px] lg:text-[36px] font-semibold leading-9 lg:leading-[44px] text-black text-center mb-12"
          variants={fadeInUp}
        >
          Coming Soon
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1273px] mx-auto">
          {/* Run Club Meetup */}
          <motion.div 
            className="relative rounded-lg overflow-hidden group"
            variants={fadeInLeft}
            {...scaleOnHover}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a7e5e8dacbb85b2c426cbfe3fe3944b4f18892a8?width=789"
              alt="Run Club Meetup"
              className="w-full h-[257px] lg:h-[342px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
              <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-8 lg:leading-9 text-ag-light mb-2">
                Run Club Meetup
                <br />
                Jun 25, 10 am
              </h3>
              <p className="font-ibm text-sm lg:text-base leading-5 lg:leading-6 text-ag-light max-w-[243px]">
                Join local runners for a 5K, gear trials, and post-run
                smoothies.
              </p>
            </div>
          </motion.div>

          {/* Custom Kicks Day */}
          <motion.div 
            className="relative rounded-lg overflow-hidden group"
            variants={fadeInUp}
            {...scaleOnHover}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fcc5563c66f512ed4de2d45ba70d22c75196fc7a?width=771"
              alt="Custom Kicks Day"
              className="w-full h-[257px] lg:h-[342px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
              <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-8 lg:leading-9 text-ag-light mb-2">
                Custom Kicks Day
                <br />
                Jun 26, 6 PM
              </h3>
              <p className="font-ibm text-sm lg:text-base leading-5 lg:leading-6 text-ag-light max-w-[317px]">
                Design your pair. Add your name. Walk out with a one-of-one.
              </p>
            </div>
          </motion.div>

          {/* Football Weekend - Desktop Only */}
          <motion.div 
            className="relative rounded-lg overflow-hidden group hidden lg:block"
            variants={fadeInRight}
            {...scaleOnHover}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2e80d2d46be1527cfa1e0b9e87b9da0481a84209?width=1044"
              alt="Football Weekend"
              className="w-full h-[342px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6">
              <h3 className="font-space text-[28px] font-medium leading-9 text-ag-light mb-2">
                Football Weekend
                <br />
                Jun 28-29, 11 am
              </h3>
              <p className="font-ibm text-base leading-6 text-ag-light">
                Join us for skill challenges, mini matches, & the launch of our
                latest turf-ready kicks.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Join the Movement Section */}
      <motion.section 
        className="py-16 px-4 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="font-space text-[28px] lg:text-[36px] font-semibold leading-9 lg:leading-[44px] text-black mb-4"
            variants={fadeInUp}
          >
            Join the movement
          </motion.h2>
          <motion.p 
            className="font-ibm text-lg leading-7 text-black max-w-[341px] mx-auto"
            variants={fadeInUp}
          >
            The next era is in motion - are you in?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1274px] mx-auto">
          {/* Discover Where You Fit In */}
          <motion.div 
            className="relative rounded-lg overflow-hidden group"
            variants={fadeInLeft}
            {...scaleOnHover}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e310c6196f5bea4bf37ef7f3743c1df525cfe4b1?width=686"
              alt="Discover where you fit in"
              className="w-full h-[216px] lg:h-[368px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded"
                whileHover={{ scale: 1.05, bg: "rgba(0,0,0,0.7)" }}
              >
                <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-8 lg:leading-9 text-white underline text-center max-w-[201px] lg:max-w-[368px]">
                  DISCOVER WHERE YOU FIT IN
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Vibe with Creators */}
          <motion.div 
            className="relative rounded-lg overflow-hidden group"
            variants={fadeInRight}
            {...scaleOnHover}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c62fd6b3c040be7cd9ca02ca1dd19e39e8021b9b?width=686"
              alt="Vibe with creators who get it"
              className="w-full h-[216px] lg:h-[368px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded"
                whileHover={{ scale: 1.05, bg: "rgba(0,0,0,0.7)" }}
              >
                <h3 className="font-space text-2xl lg:text-[28px] font-medium leading-8 lg:leading-9 text-white underline text-center max-w-[245px] lg:max-w-[433px]">
                  VIBE WITH CREATORS WHO GET IT
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Explore Lotto Section */}
      <motion.section 
        className="bg-ag-dark-teal py-16 mx-4 lg:mx-0 rounded-lg lg:rounded-none mb-16 lg:mb-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-4 text-center">
          <motion.h2 
            className="font-space text-[28px] lg:text-[36px] font-semibold leading-9 lg:leading-[44px] text-ag-bright-pink mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Explore Lotto
          </motion.h2>
          <motion.a
            href="https://www.lottosport.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-space text-2xl lg:text-[28px] font-medium text-ag-light underline hover:text-white transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            www.lottosport.in
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.div>
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-ag-dark text-ag-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-4 lg:px-8 py-12 lg:py-16">
          <motion.div 
            className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Logo and Description */}
            <motion.div 
              className="sm:col-span-2 lg:col-span-1"
              variants={fadeInUp}
            >
              <motion.div 
                className="flex items-center mb-6 lg:mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-2 h-2 lg:w-4 lg:h-4 bg-ag-lemon-green rounded-full mr-2 lg:mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 lg:w-4 lg:h-4 bg-ag-bright-blue rounded-full mr-2 lg:mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="w-2 h-2 lg:w-4 lg:h-4 bg-ag-bright-pink rounded-full mr-2 lg:mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div 
                  className="w-2 h-2 lg:w-4 lg:h-4 bg-orange-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>
              <div className="w-[112px] lg:w-[163px] h-[30px] lg:h-[44px] bg-gray-600 rounded mb-6 lg:mb-8" />
              <p className="font-ibm text-lg lg:text-xl leading-7 lg:leading-8 mb-6 lg:mb-8">
                Comprehensively building the entire value chain from manufacturing
                to retail
              </p>

              <div className="mb-6">
                <h4 className="font-ibm text-sm lg:text-xl text-white mb-4">
                  Follow us
                </h4>
                <div className="flex space-x-4 lg:space-x-6">
                  <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                    <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 hover:text-white transition-colors cursor-pointer" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                    <Instagram className="w-5 h-5 lg:w-6 lg:h-6 hover:text-white transition-colors cursor-pointer" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                    <Youtube className="w-5 h-5 lg:w-6 lg:h-6 hover:text-white transition-colors cursor-pointer" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Links Column 1 */}
            <motion.div variants={fadeInUp}>
              <div className="space-y-3 lg:space-y-4 font-ibm text-lg lg:text-xl leading-7 lg:leading-8">
                <motion.a 
                  href="#" 
                  className="block hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  What we do
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Inside Agilitas
                </motion.a>
              </div>
            </motion.div>

            {/* Links Column 2 */}
            <motion.div variants={fadeInUp}>
              <div className="space-y-3 lg:space-y-4 font-ibm leading-6 lg:leading-7">
                <motion.a 
                  href="#" 
                  className="block text-lg lg:text-xl hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Join the Team
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-lg lg:text-xl hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Media
                </motion.a>
                <div className="text-base lg:text-lg">
                  <span className="text-lg lg:text-xl">Blogs </span>
                  <span className="text-base lg:text-lg">(Coming Soon)</span>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div 
              className="sm:col-span-2 lg:col-span-1"
              variants={fadeInUp}
            >
              <h4 className="font-space text-lg lg:text-xl font-medium text-white mb-4 lg:mb-6">
                Stay in the Loop. Move with Us.
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-4">
                <div>
                  <h5 className="font-ibm text-sm lg:text-base font-bold text-white mb-1">
                    Email
                  </h5>
                  <motion.a
                    href="mailto:info@agilitas.in"
                    className="font-ibm text-sm lg:text-base underline hover:text-white transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    info@agilitas.in
                  </motion.a>
                </div>

                <div>
                  <h5 className="font-ibm text-sm lg:text-base font-bold text-white mb-2">
                    Corporate address
                  </h5>
                  <address className="font-ibm text-sm lg:text-base not-italic leading-5 lg:leading-6">
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
                    <motion.a
                      href="#"
                      className="underline hover:text-white transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      Get directions
                    </motion.a>
                  </address>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="bg-white py-4 lg:py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 lg:px-8 container mx-auto">
            <p className="font-ibm text-lg lg:text-xl text-black leading-7 text-center lg:text-left">
              © 2025 Agilitas All rights reserved.
              <br className="lg:hidden" />
              <motion.a
                href="#"
                className="underline hover:text-gray-600 transition-colors ml-1"
                whileHover={{ y: -1 }}
              >
                Terms of Use
              </motion.a>
              <span className="mx-2">|</span>
              <motion.a
                href="#"
                className="underline hover:text-gray-600 transition-colors"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
            </p>
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
}
