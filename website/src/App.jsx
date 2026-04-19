import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Moon, Hammer, DraftingCompass, Building, 
  MapPin, Phone, Mail, ArrowRight, Camera, 
  Share2, MessageSquare, CheckCircle, Ruler, Paintbrush
} from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const galleryImages = [
    "image_p1_0.jpeg", "image_p2_0.jpeg", "image_p3_0.jpeg", "image_p4_0.jpeg", "image_p5_0.jpeg",
    "image_p7_0.jpeg", "image_p12_0.jpeg", "image_p12_1.jpeg", "image_p12_2.jpeg", "image_p12_3.jpeg",
    "image_p13_0.jpeg", "image_p13_1.jpeg", "image_p13_2.jpeg", "image_p13_3.png",
    "image_p14_0.jpeg", "image_p14_1.jpeg", "image_p14_2.jpeg", "image_p14_3.jpeg",
    "image_p15_0.jpeg", "image_p15_1.png", "image_p16_0.jpeg", "image_p16_1.jpeg",
    "image_p17_0.jpeg", "image_p17_1.jpeg", "image_p17_2.jpeg", "image_p17_3.jpeg",
    "image_p18_0.png", "image_p18_1.png", "image_p18_2.jpeg", "image_p18_3.jpeg",
    "image_p19_0.png", "image_p19_2.jpeg", "image_p19_3.jpeg",
    "image_p20_0.jpeg", "image_p20_1.jpeg", "image_p20_2.jpeg", "image_p20_3.png",
    "image_p21_0.jpeg", "image_p21_1.jpeg", "image_p21_2.jpeg", "image_p21_3.jpeg",
    "image_p22_0.jpeg", "image_p22_1.jpeg", "image_p23_0.jpeg", "image_p23_1.jpeg",
    "image_p24_1.jpeg", "image_p24_2.jpeg"
  ].map(img => `/projects/gallery/${img}`);

  const heroImages = galleryImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Seven Seas Muscat',
        text: 'Seven Seas for Development and Investment - Construction, Fit-out, and Landscaping solutions in Oman.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="glass" style={{
        position: 'fixed', width: '100%', zIndex: 1000, 
        height: 'var(--nav-height)',
        padding: '0 5%', display: 'flex', 
        justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div className="logo" style={{ height: 'calc(var(--nav-height) - 40px)', display: 'flex', alignItems: 'center' }}>
          <img 
            src={isDark ? "/logo-white.png" : "/logo-colored.png"} 
            alt="Seven Seas Logo" 
            style={{ height: '100%', transition: '0.3s', objectFit: 'contain' }} 
          />
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            <li><a href="#hero" className="hover-underline">Home</a></li>
            <li><a href="#services" className="hover-underline">Services</a></li>
            <li><a href="#portfolio" className="hover-underline">Portfolio</a></li>
            <li><a href="#about" className="hover-underline">About</a></li>
            <li><a href="#contact" className="hover-underline">Contact</a></li>
          </ul>
          <button onClick={toggleTheme} className="btn" style={{ background: 'transparent', padding: '8px' }}>
            {isDark ? <Sun size={24} color="#7CDDED" /> : <Moon size={24} color="#0C4964" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" style={{
        height: '100vh', display: 'flex', alignItems: 'center', 
        position: 'relative', overflow: 'hidden', padding: '0 5%'
      }}>
        {/* Carousel Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `url("${heroImages[heroImageIndex]}")`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              zIndex: -1
            }}
          />
        </AnimatePresence>
        
        {/* Modern Overlay Gradient */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: isDark 
            ? 'linear-gradient(to right, #05070a 30%, transparent 100%)' 
            : 'linear-gradient(to right, #ffffff 30%, transparent 100%)',
          zIndex: -1
        }} />

        <div className="grid-2" style={{ width: '100%', zIndex: 1, gap: '60px' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h4 style={{ 
              color: 'var(--accent-color)', textTransform: 'uppercase', 
              letterSpacing: '4px', marginBottom: '1.5rem', fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              Seven Seas for Development and Investment
            </h4>
            <h1 style={{ 
              textShadow: isDark ? '0 4px 10px rgba(0,0,0,0.5)' : 'none'
            }}>
              Engineering, <br/>
              <span className="text-gradient">Construction Solutions</span>
            </h1>
            <p style={{ 
              marginBottom: '3rem', maxWidth: '550px',
              opacity: 0.8
            }}>
              Defining the future of construction in Oman through sustainable 
              engineering and precision fit-out solutions.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem' }}>
              <motion.a 
                href="#services" 
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
                style={{ padding: '18px 40px', fontSize: '1.1rem' }}
              >
                Our Expertise <ArrowRight size={22} />
              </motion.a>
              <motion.a 
                href="#portfolio" 
                whileHover={{ 
                  scale: 1.05, 
                  background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0, 0, 0, 0.05)' 
                }}
                style={{ 
                  border: `2px solid ${isDark ? 'var(--cyan-color)' : 'var(--primary-color)'}`, 
                  padding: '18px 40px', fontSize: '1.1rem',
                  color: isDark ? '#ffffff' : 'var(--primary-color)'
                }}
                className="btn"
              >
                Project Showcase
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div className="hero-card" style={{
              padding: '30px', background: 'rgba(255,255,255,0.05)',
              borderRadius: '30px', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
            }}>
              <img 
                src={isDark ? "/logo-white.png" : "/logo-colored.png"} 
                alt="Seven Seas Highlight" 
                style={{ width: '100%', maxWidth: '400px', filter: isDark ? 'drop-shadow(0 0 20px rgba(124, 221, 237, 0.3))' : 'none' }} 
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 60px)' }}>
          <h2>Core Solutions</h2>
          <p>Comprehensive range of services designed to bring visions to life with precision.</p>
        </div>
        <div className="grid-3">
          {[
            { icon: <Building size={40} />, title: "Construction", desc: "High-quality residential, commercial, and governmental projects with durability and innovation." },
            { icon: <DraftingCompass size={40} />, title: "Fit-Out Solutions", desc: "Transforming interior spaces into functional and aesthetic environments tailored to unique needs." },
            { icon: <Paintbrush size={40} />, title: "Landscaping", desc: "Creating inspiring and sustainable landscapes that enhance the beauty of outdoor spaces." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="card-hover grid-card"
              {...fadeInUp}
              style={{
                padding: 'clamp(20px, 4vw, 40px)', background: 'var(--card-bg)', 
                borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', gap: '15px'
              }}
            >
              <div style={{ color: 'var(--secondary-color)' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fit-out & Construction Highlight */}
      <section style={{ background: 'var(--primary-color)', color: 'white' }}>
        <div className="grid-2">
          <motion.div {...fadeInUp}>
            <h2 style={{ color: 'var(--cyan-color)' }}>
              Specialized Fit-out & <br/>Structural Works
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>
              We take pride in our meticulous approach to interior finishing and structural integrity. 
              Our fit-out services encompass everything from MEP to aesthetic detailing.
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {[
                "MEP Installations", "AC Ducting Works", "Gypsum Partitions", 
                "Ceiling Systems", "Carpeting & Flooring", "Glass Installations",
                "Wood Decoration", "Civil Works"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={20} color="#7CDDED" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            {...fadeInUp} 
            style={{ 
              borderRadius: '24px', overflow: 'hidden', 
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              position: 'relative', height: '400px'
            }}
          >
            <img 
              src="/projects/project4.jpg" 
              alt="Site Work" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" style={{ paddingBottom: showAllProjects ? '100px' : '60px' }}>
        <div style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', 
          marginBottom: '60px', padding: '0 5%' 
        }}>
          <div style={{ textAlign: 'left' }}>
            <h2>Our Projects</h2>
            <p>Real-world execution showcasing our commitment to quality and excellence.</p>
          </div>
          {!showAllProjects && (
            <button 
              onClick={() => {
                setShowAllProjects(true);
                setTimeout(() => {
                  window.scrollTo({ top: document.getElementById('full-gallery').offsetTop - 100, behavior: 'smooth' });
                }, 100);
              }}
              style={{ 
                background: 'transparent', border: 'none', color: 'var(--accent-color)', 
                fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}
              className="hover-underline"
            >
              More <ArrowRight size={20} />
            </button>
          )}
        </div>

        {/* Featured Projects */}
        <div className="portfolio-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px', padding: '0 5%'
        }}>
          <div 
            style={{ minHeight: '300px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }} 
            className="card-hover"
            onClick={() => setSelectedImage("/projects/gallery/image_p2_0.jpeg")}
          >
            <img src="/projects/gallery/image_p2_0.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Villa" />
          </div>
          <div 
            style={{ minHeight: '300px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }} 
            className="card-hover"
            onClick={() => setSelectedImage("/projects/gallery/image_p3_0.jpeg")}
          >
            <img src="/projects/gallery/image_p3_0.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Retail" />
          </div>
          <div 
            style={{ minHeight: '300px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', gridColumn: 'span 1' }} 
            className="card-hover"
            onClick={() => setSelectedImage("/projects/gallery/image_p1_0.jpeg")}
          >
            <img src="/projects/gallery/image_p1_0.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Main Project" />
          </div>
        </div>

        {/* Expanded Gallery */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div 
              id="full-gallery"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ padding: '0 5%', overflow: 'hidden' }}
            >
              <div className="grid-3" style={{ gap: '20px', marginTop: '20px' }}>
                {galleryImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    style={{ 
                      height: '250px', borderRadius: '12px', overflow: 'hidden', 
                      cursor: 'pointer', border: '1px solid rgba(0,0,0,0.1)' 
                    }}
                    className="card-hover"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Project ${idx}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* About Section */}
      <section id="about" className="grid-2">
        <motion.div {...fadeInUp}>
          <img 
            src="/projects/project2.jpg" 
            alt="About Us" 
            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </motion.div>
        <motion.div {...fadeInUp}>
          <h2 style={{ marginBottom: '20px' }}>Our Mission & Vision</h2>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', color: 'var(--secondary-color)' }}>
              <CheckCircle size={18} /> MISSION
            </h3>
            <p>"To provide exceptional construction, fit-out, and landscaping solutions by combining expertise, innovation, and attention to detail."</p>
          </div>
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', color: 'var(--secondary-color)' }}>
              <CheckCircle size={18} /> VISION
            </h3>
            <p>"To be a trusted leader in the industry, delivering sustainable solutions that shape exceptional spaces and enrich lives."</p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <footer id="contact" style={{ background: 'var(--card-bg)', padding: '80px 5% 40px' }}>
        <div className="grid-3" style={{ marginBottom: '60px' }}>
          <div>
            <img src={isDark ? "/logo-white.png" : "/logo-colored.png"} alt="Logo" style={{ width: '100%', maxWidth: '250px', marginBottom: '30px', objectFit: 'contain' }} />
            <p>For Construction Solutions. Together, in step with the vision of our charismatic leaders.</p>
          </div>
          <div>
            <h3 style={{ marginBottom: '20px' }}>Connect</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={18} /> +968-71519695</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={18} /> Info@sevenseasmuscat.com</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={18} /> Muscat, Sultanate of Oman</li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '20px' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                onClick={handleShare} 
                className="btn" 
                title="Share Website"
                style={{ padding: '10px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%', cursor: 'pointer' }}
              >
                <Share2 size={20}/>
              </button>
              <a 
                href="https://api.whatsapp.com/send?phone=96871519695&text=Hello%20Seven%20Seas,%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn" 
                title="WhatsApp Inquiry"
                style={{ padding: '10px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%' }}
              >
                <MessageSquare size={20}/>
              </a>
              <a 
                href="mailto:Info@sevenseasmuscat.com?subject=Business Inquiry - Seven Seas&body=Hello,\n\nI am interested in your construction and fit-out services. Please provide more information." 
                className="btn" 
                title="Send Email"
                style={{ padding: '10px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%' }}
              >
                <Mail size={20}/>
              </a>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.1)', opacity: 0.6 }}>
          <p>© 2024 Seven Seas for Development and Investment LLC. All Rights Reserved.</p>
        </div>
      </footer>
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center',
              backdropFilter: 'blur(15px)', background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                position: 'relative', maxWidth: '90%', maxHeight: '90%',
                padding: '15px', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 50px 100px rgba(0,0,0,0.3)',
                display: 'flex', flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute', top: -10, right: -10, 
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'var(--accent-color)', color: 'white',
                  border: 'none', cursor: 'pointer', zIndex: 10,
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged Project" 
                style={{ 
                  maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain',
                  borderRadius: '16px'
                }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
