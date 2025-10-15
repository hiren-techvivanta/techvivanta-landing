// import React from 'react'
// import Nav from '../components/Navbar/Nav'
// import Herosection from '../HomeComponents/Herosection'

// export default function Home() {
//   return (
//     <>
//     <Nav/>
//     <Herosection/>
//     </>
//   )
// }
import React from "react";
import Nav from "../components/Navbar/Nav";
import Herosection from "../HomeComponents/Herosection";
import { motion } from "framer-motion";
import { FaRocket, FaMobileAlt, FaPalette, FaHandshake } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <Herosection />

      {/* About Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We are a passionate team of developers and designers crafting
            exceptional digital experiences. From elegant mobile apps to
            high-performance web solutions, we bring creativity and technology
            together to help brands grow in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaRocket className="text-cyan-500 text-4xl mb-4" />,
                title: "Web Development",
                desc: "Robust and responsive web apps with modern frameworks.",
              },
              {
                icon: <FaMobileAlt className="text-indigo-500 text-4xl mb-4" />,
                title: "Mobile Apps",
                desc: "Next-gen Android & iOS apps designed for performance.",
              },
              {
                icon: <FaPalette className="text-pink-500 text-4xl mb-4" />,
                title: "UI/UX Design",
                desc: "Crafting beautiful, user-centered interfaces that inspire.",
              },
              {
                icon: <FaHandshake className="text-emerald-500 text-4xl mb-4" />,
                title: "Brand Strategy",
                desc: "Transforming your ideas into impactful brand stories.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.03 }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-indigo-600 to-blue-700 py-24 text-center text-white">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Let's collaborate and turn your vision into a digital reality.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-white text-cyan-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© {new Date().getFullYear()} Tech Vivanta. All Rights Reserved.</p>
      </footer>
    </>
  );
}
