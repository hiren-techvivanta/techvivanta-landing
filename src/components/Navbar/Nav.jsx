// import React, { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { FaRocket, FaComments, FaUserTie, FaHandshake } from "react-icons/fa";
// import { gsap } from "gsap";
// import Greenlogo from "../../assets/Images/Logo/main_logo.png";
// import Whitelogo from "../../assets/Images/Logo/white_logo.png";

// export default function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [buttonContent, setButtonContent] = useState(0);
//   const [activeHover, setActiveHover] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const navRef = useRef(null);
//   const logoRef = useRef(null);
//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);
//   const buttonTextRef = useRef(null);
//   const { scrollY } = useScroll();

//   const buttonContents = [
//     { text: "Free Consultation", icon: <FaComments className="text-xl" /> },
//     { text: "Build With Experts", icon: <FaUserTie className="text-xl" /> },
//     { text: "Hire Developers", icon: <FaUserTie className="text-xl" /> },
//     { text: "Let's Collaborate", icon: <FaHandshake className="text-xl" /> },
//   ];

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 50) {
//       setHasScrolled(true);
//     } else {
//       setHasScrolled(false);
//     }

//     if (latest > lastScrollY && latest > 100) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
//     setLastScrollY(latest);
//   });

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.fromTo(
//       navRef.current,
//       { y: -100, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     )
//       .fromTo(
//         logoRef.current,
//         { x: -50, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
//         "-=0.5"
//       )
//       .fromTo(
//         menuRef.current?.children,
//         { y: -20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
//         "-=0.3"
//       )
//       .fromTo(
//         buttonRef.current,
//         { x: 50, opacity: 0, scale: 0.8 },
//         {
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           ease: "elastic.out(1, 0.5)",
//         },
//         "-=0.4"
//       );

//     const buttonInterval = setInterval(() => {
//       setButtonContent((prev) => (prev + 1) % buttonContents.length);
//     }, 3000);

//     return () => clearInterval(buttonInterval);
//   }, []);
//   const handleButtonHover = () => {
//     gsap.to(buttonRef.current, {
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleButtonLeave = () => {
//     gsap.to(buttonRef.current, {
//       scale: 1,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const navItems = [
//     { path: "/", name: "Home" },
//     { path: "/technologies", name: "Technologies" },
//     { path: "/services", name: "Services" },
//     { path: "/portfolio", name: "Portfolio" },
//     { path: "/hiredev", name: "Hire Developers" },
//     { path: "/blog", name: "Blog" },
//     { path: "/contact", name: "Contact" },
//   ];

//   const getTextColor = (isHovered = false) => {
//     if (!hasScrolled) {
//       return isHovered ? "text-white" : "text-white/90 hover:text-white";
//     }
//     return isHovered
//       ? "text-emerald-600"
//       : "text-gray-700 hover:text-emerald-600";
//   };

//   // Mobile menu text color
//   const getMobileTextColor = () => {
//     if (!hasScrolled) {
//       return "text-white hover:text-white";
//     }
//     return "text-gray-700 hover:text-emerald-600";
//   };

//   return (
//     <motion.nav
//       ref={navRef}
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         hasScrolled
//           ? "bg-white shadow-2xl shadow-gray-200/50 py-3"
//           : "bg-transparent py-5"
//       } ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
//       style={{
//         backdropFilter: hasScrolled ? "none" : "blur(10px)",
//         backgroundColor: hasScrolled ? "white" : "rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo - Left - Fixed Width */}
//           <motion.div
//             ref={logoRef}
//             className="flex-shrink-0 w-32 md:w-40 lg:w-44"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <a href="/">
//               <motion.img
//                 src={hasScrolled ? Greenlogo : Whitelogo}
//                 alt="Tech Vivanta Logo"
//                 className="w-full object-contain transition-all duration-500"
//                 style={{
//                   filter: hasScrolled ? "none" : "brightness(100%)",
//                   transition: "all 0.4s ease-in-out",
//                 }}
//               />
//             </a>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex flex-1 justify-center min-w-0">
//             <motion.div
//               ref={menuRef}
//               className="flex items-center space-x-1 relative rounded-2xl px-2 py-1 min-w-0 flex-shrink"
//               style={{ flexBasis: "500px" }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.path}
//                   href={item.path}
//                   className={`relative px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex-shrink-0 ${getTextColor(
//                     activeHover === index
//                   )} group`}
//                   onMouseEnter={() => setActiveHover(index)}
//                   onMouseLeave={() => setActiveHover(null)}
//                 >
//                   {item.name}

//                   {/* Enhanced underline animation */}
//                   <div className="absolute bottom-2 left-0 right-0 h-0.5 overflow-hidden">
//                     <motion.div
//                       className={`h-full rounded-full ${
//                         hasScrolled
//                           ? "bg-gradient-to-r from-emerald-400 to-teal-500"
//                           : "bg-white"
//                       }`}
//                       initial={{ scaleX: 0, opacity: 0 }}
//                       animate={{
//                         scaleX: activeHover === index ? 1 : 0,
//                         opacity: activeHover === index ? 1 : 0,
//                       }}
//                       transition={{
//                         duration: 0.3,
//                         ease: "easeOut",
//                         scaleX: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
//                       }}
//                       style={{
//                         transformOrigin: "left center",
//                       }}
//                     />
//                   </div>

//                   {/* Background highlight effect - only show when scrolled */}
//                   {hasScrolled && (
//                     <motion.div
//                       className="absolute inset-0 bg-emerald-50 rounded-xl -z-10"
//                       initial={{ scale: 0.8, opacity: 0 }}
//                       animate={{
//                         scale: activeHover === index ? 1 : 0.8,
//                         opacity: activeHover === index ? 1 : 0,
//                       }}
//                       transition={{ duration: 0.3, ease: "easeOut" }}
//                     />
//                   )}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </div>

//           {/* CTA Button - Right - Fixed Width */}
//           <motion.div
//             ref={buttonRef}
//             className="hidden md:block flex-shrink-0"
//             style={{ width: "190px" }}
//             onMouseEnter={handleButtonHover}
//             onMouseLeave={handleButtonLeave}
//           >
//             <motion.button
//               className={`group relative overflow-hidden font-semibold py-3 rounded-md transition-all duration-500 w-full min-w-[200px] shadow-lg cursor-pointer ${
//                 hasScrolled
//                   ? "text-white bg-gradient-to-r from-emerald-500 to-teal-500"
//                   : "text-gray-900 bg-white/90 backdrop-blur-sm hover:bg-white"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => console.log("CTA button clicked")}
//             >
//               {/* Animated gradient shine - only for scrolled state */}
//               {hasScrolled && (
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%]"
//                   initial={false}
//                   animate={{ x: ["-100%", "100%"] }}
//                   transition={{
//                     duration: 1.2,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                 />
//               )}

//               {/* Glow background - only for scrolled state */}
//               {hasScrolled && (
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 opacity-0 group-hover:opacity-100 blur-lg"
//                   transition={{ duration: 0.4 }}
//                 />
//               )}

//               {/* Button content */}
//               <div
//                 ref={buttonTextRef}
//                 className="relative z-10 flex items-center justify-center gap-2 w-full"
//               >
//                 <motion.span
//                   key={buttonContent}
//                   className="flex items-center gap-2 justify-center w-full"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                 >
//                   <span className="text-lg flex-shrink-0">
//                     {buttonContents[buttonContent].icon}
//                   </span>
//                   <span className="text-nowrap text-base flex-shrink-0">
//                     {buttonContents[buttonContent].text}
//                   </span>
//                 </motion.span>
//               </div>
//             </motion.button>
//           </motion.div>

//           {/* Mobile menu button - Fixed Size */}
//           <div className="lg:hidden flex-shrink-0 w-12">
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsOpen(!isOpen)}
//               className={`inline-flex items-center justify-center p-3 rounded-2xl transition-all duration-300 w-12 h-12 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
//                 hasScrolled
//                   ? "text-gray-700 hover:bg-emerald-50 border border-gray-200"
//                   : "text-white hover:bg-white/20 border border-white/20"
//               }`}
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <motion.div
//           className="lg:hidden"
//           initial={false}
//           animate={isOpen ? "open" : "closed"}
//         >
//           {isOpen && (
//             <motion.div
//               className="px-4 pt-4 pb-6 space-y-3 rounded-3xl mt-4 border backdrop-blur-xl border-gray-200 shadow-2xl"
//               style={{
//                 backgroundColor: hasScrolled
//                   ? "rgba(255, 255, 255, 0.95)"
//                   : "rgba(0, 0, 0, 0.8)",
//                 backdropFilter: "blur(20px)",
//               }}
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.path}
//                   href={item.path}
//                   className={`block px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-300 border border-transparent hover:border-emerald-200 relative overflow-hidden ${
//                     hasScrolled
//                       ? "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
//                       : "text-white hover:bg-white/10"
//                   }`}
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.1, duration: 0.4 }}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}

//                   {/* Mobile underline effect */}
//                   <motion.div
//                     className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
//                       hasScrolled ? "bg-emerald-500" : "bg-white"
//                     }`}
//                     initial={{ scaleX: 0 }}
//                     whileHover={{ scaleX: 1 }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                   />
//                 </motion.a>
//               ))}

//               {/* Mobile CTA Button */}
//               <motion.button
//                 className={`w-full mt-4 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
//                   hasScrolled
//                     ? "text-white bg-gradient-to-r from-emerald-500 to-teal-500"
//                     : "text-gray-900 bg-white hover:bg-white/90"
//                 }`}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.4 }}
//                 onClick={() => {
//                   setIsOpen(false);
//                   console.log("Mobile CTA button clicked");
//                 }}
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <span>{buttonContents[buttonContent].icon}</span>
//                   <span>{buttonContents[buttonContent].text}</span>
//                 </div>
//               </motion.button>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { FaComments, FaUserTie, FaHandshake } from "react-icons/fa";
import { gsap } from "gsap";
import Greenlogo from "../../assets/Images/Logo/main_logo.png";
import Whitelogo from "../../assets/Images/Logo/white_logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [buttonContent, setButtonContent] = useState(0);
  const [activeHover, setActiveHover] = useState(null);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null);
  const [mobileSubmenuIndex, setMobileSubmenuIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const hoverTimer = useRef(null);

  const { scrollY } = useScroll();

  const buttonContents = [
    { text: "Free Consultation", icon: <FaComments className="text-xl" /> },
    { text: "Build With Experts", icon: <FaUserTie className="text-xl" /> },
    { text: "Hire Developers", icon: <FaUserTie className="text-xl" /> },
    { text: "Let's Collaborate", icon: <FaHandshake className="text-xl" /> },
  ];

  // Sample nav items with submenus (adjust to match your real routes & submenu data)
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/aircraft",
      name: "Aircraft",
      submenu: [
        {
          title: "Specifications",
          items: [
            { name: "Overview", href: "/aircraft/specs/overview" },
            { name: "Performance", href: "/aircraft/specs/performance" },
            { name: "Weights & Balance", href: "/aircraft/specs/weights" },
          ],
        },
        {
          title: "Images",
          items: [
            { name: "Exterior", href: "/aircraft/images/exterior" },
            { name: "Interior", href: "/aircraft/images/interior" },
            { name: "Gallery", href: "/aircraft/images/gallery" },
          ],
        },
        {
          title: "Documents",
          items: [
            { name: "Certificates", href: "/aircraft/docs/certs" },
            { name: "Maintenance", href: "/aircraft/docs/maintenance" },
          ],
        },
      ],
    },
    {
      path: "/services",
      name: "Services",
      submenu: [
        {
          title: "Charter",
          items: [
            { name: "Request Quote", href: "/services/charter/quote" },
            { name: "Availability", href: "/services/charter/availability" },
          ],
        },
        {
          title: "Management",
          items: [
            {
              name: "Maintenance Management",
              href: "/services/management/maintenance",
            },
            { name: "Crew Management", href: "/services/management/crew" },
          ],
        },
      ],
    },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  // Scroll behaviour
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) setHasScrolled(true);
    else setHasScrolled(false);

    // hide-on-scroll-down
    if (latest > lastScrollY && latest > 100) setIsVisible(false);
    else setIsVisible(true);

    setLastScrollY(latest);
  });

  // GSAP intro + rotating CTA text
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        logoRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      )
      .fromTo(
        menuRef.current?.children,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "elastic.out(1,0.6)" },
        "-=0.4"
      );

    const buttonInterval = setInterval(() => {
      setButtonContent((prev) => (prev + 1) % buttonContents.length);
    }, 3000);

    return () => {
      clearInterval(buttonInterval);
    };
  }, []); // run once

  // helper for colors
  const getTextColor = (isHovered = false) => {
    if (!hasScrolled)
      return isHovered ? "text-white" : "text-white/90 hover:text-white";
    return isHovered
      ? "text-emerald-600"
      : "text-gray-700 hover:text-emerald-600";
  };

  // Desktop hover handlers for submenu with small delay to avoid flicker
  const handleMouseEnterItem = (index, hasSubmenu) => {
    setActiveHover(index);
    if (hasSubmenu) {
      // small delay before opening submenu (gives a smoother feel)
      clearTimeout(hoverTimer.current);
      hoverTimer.current = setTimeout(() => {
        setSubmenuOpenIndex(index);
      }, 120);
    } else {
      setSubmenuOpenIndex(null);
    }
  };

  const handleMouseLeaveItem = () => {
    setActiveHover(null);
    // close submenu with a slight delay
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setSubmenuOpenIndex(null), 120);
  };

  // Mobile: toggle submenu by index
  const toggleMobileSubmenu = (index) => {
    setMobileSubmenuIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        hasScrolled ? "bg-white  py-3" : "bg-transparent py-5"
      } ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
      style={{
        backdropFilter: hasScrolled ? "none" : "blur(10px)",
        backgroundColor: hasScrolled ? "white" : "rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            ref={logoRef}
            className="flex-shrink-0 w-32 md:w-40 lg:w-44"
            whileHover={{ scale: 1.02 }}
          >
            <a href="/">
              <img
                src={hasScrolled ? Greenlogo : Whitelogo}
                alt="Logo"
                className="w-full object-contain transition-all duration-500"
                style={{ filter: hasScrolled ? "none" : "brightness(100%)" }}
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center min-w-0">
            <div
              ref={menuRef}
              className="flex items-center space-x-1 relative rounded-2xl px-2 py-1 min-w-0 flex-shrink"
              style={{ flexBasis: "720px" }}
            >
              {navItems.map((item, index) => {
                const hasSub = !!item.submenu;
                return (
                  <div
                    key={item.path + index}
                    className="relative"
                    onMouseEnter={() => handleMouseEnterItem(index, hasSub)}
                    onMouseLeave={handleMouseLeaveItem}
                  >
                    <a
                      href={item.path}
                      className={`relative px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex-shrink-0 ${getTextColor(
                        activeHover === index
                      )} group`}
                    >
                      {item.name}
                      <div className="absolute bottom-2 left-0 right-0 h-0.5 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            hasScrolled
                              ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                              : "bg-white"
                          }`}
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{
                            scaleX: activeHover === index ? 1 : 0,
                            opacity: activeHover === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          style={{ transformOrigin: "left center" }}
                        />
                      </div>
                    </a>

                    {/* <AnimatePresence>
                      {submenuOpenIndex === index && item.submenu && (
                        <motion.div
                          key={`submenu-${index}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-10  left-0  mt-2 w-screen z-50"
                        >
                          <div className="bg-white border border-gray-100 p-6 max-w-7xl mx-auto">
                            <div className="grid grid-cols-3 gap-6">
                              {item.submenu.map((col, cidx) => (
                                <div key={cidx}>
                                  <div className="text-sm font-bold mb-3 text-gray-800">
                                    {col.title}
                                  </div>
                                  <ul className="space-y-2">
                                    {col.items.map((it, i) => (
                                      <li key={i}>
                                        <a
                                          href={it.href}
                                          className="text-sm text-gray-600 hover:text-emerald-600 block rounded-md px-2 py-1 transition-colors duration-150"
                                        >
                                          {it.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence> */}
                    <AnimatePresence>
                      {submenuOpenIndex === index && item.submenu && (
                        <motion.div
                          key={`submenu-${index}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen z-50"
                        >
                          <div className="bg-white border border-gray-100 p-6 max-w-7xl mx-auto">
                            <div className="grid grid-cols-3 gap-6">
                              {item.submenu.map((col, cidx) => (
                                <div key={cidx}>
                                  <div className="text-sm font-bold mb-3 text-gray-800">
                                    {col.title}
                                  </div>
                                  <ul className="space-y-2">
                                    {col.items.map((it, i) => (
                                      <li key={i}>
                                        <a
                                          href={it.href}
                                          className="text-sm text-gray-600 hover:text-emerald-600 block rounded-md px-2 py-1 transition-colors duration-150"
                                        >
                                          {it.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            ref={buttonRef}
            className="hidden md:block flex-shrink-0"
            style={{ width: "190px" }}
          >
            <motion.button
              className={`group relative overflow-hidden font-semibold py-3 rounded-md transition-all duration-500 w-full min-w-[200px] shadow-lg cursor-pointer ${
                hasScrolled
                  ? "text-white bg-gradient-to-r from-emerald-500 to-teal-500"
                  : "text-gray-900 bg-white/90 backdrop-blur-sm hover:bg-white"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => console.log("CTA clicked")}
            >
              {hasScrolled && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              )}

              <div className="relative z-10 flex items-center justify-center gap-2 w-full">
                <span className="text-lg flex-shrink-0">
                  {buttonContents[buttonContent].icon}
                </span>
                <span className="text-nowrap text-base flex-shrink-0">
                  {buttonContents[buttonContent].text}
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0 w-12">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen((p) => !p)}
              className={`inline-flex items-center justify-center p-3 rounded-2xl transition-all duration-300 w-12 h-12 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                hasScrolled
                  ? "text-gray-700 hover:bg-emerald-50 border border-gray-200"
                  : "text-white hover:bg-white/20 border border-white/20"
              }`}
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
            >
              <div
                className="px-4 pt-4 pb-6 mt-4 rounded-3xl border border-gray-200 shadow-2xl"
                style={{
                  backgroundColor: hasScrolled
                    ? "rgba(255,255,255,0.98)"
                    : "rgba(0,0,0,0.8)",
                  backdropFilter: "blur(18px)",
                }}
              >
                {navItems.map((item, idx) => {
                  const hasSub = !!item.submenu;
                  return (
                    <div key={item.path + idx} className="mb-2">
                      <button
                        onClick={() => {
                          if (hasSub) {
                            toggleMobileSubmenu(idx);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-left ${
                          hasScrolled
                            ? "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        <span>{item.name}</span>
                        {hasSub && (
                          <span
                            className={`transform transition-transform ${
                              mobileSubmenuIndex === idx
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          >
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707A1 1 0 014.293 8.293l5-5A1 1 0 0110 3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </button>

                      {/* mobile submenu */}
                      <AnimatePresence>
                        {hasSub && mobileSubmenuIndex === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18 }}
                            className="mt-2"
                          >
                            <div
                              className={`bg-white rounded-2xl p-4 ${
                                hasScrolled ? "" : "bg-white/95"
                              }`}
                            >
                              <div className="grid grid-cols-1 gap-3">
                                {item.submenu.map((col, cidx) => (
                                  <div key={cidx}>
                                    <div className="text-sm font-bold text-gray-800 mb-2">
                                      {col.title}
                                    </div>
                                    <ul className="space-y-1">
                                      {col.items.map((it, i) => (
                                        <li key={i}>
                                          <a
                                            href={it.href}
                                            className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-emerald-600"
                                          >
                                            {it.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Mobile CTA */}
                <motion.button
                  className={`w-full mt-4 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
                    hasScrolled
                      ? "text-white bg-gradient-to-r from-emerald-500 to-teal-500"
                      : "text-gray-900 bg-white hover:bg-white/90"
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                  onClick={() => {
                    setIsOpen(false);
                    console.log("mobile CTA");
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{buttonContents[buttonContent].icon}</span>
                    <span>{buttonContents[buttonContent].text}</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
