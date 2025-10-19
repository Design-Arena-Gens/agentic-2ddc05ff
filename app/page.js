export default function Home() {
  return (
    <div style={styles.container}>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>TOSS Consultancy</div>
          <ul style={styles.navList}>
            <li><a href="#home" style={styles.navLink}>Home</a></li>
            <li><a href="#services" style={styles.navLink}>Services</a></li>
            <li><a href="#about" style={styles.navLink}>About</a></li>
            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>TOSS Consultancy Services</h1>
          <p style={styles.heroSubtitle}>Empowering Your Business with Expert Solutions</p>
          <a href="#contact" style={styles.ctaButton}>Get Started</a>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>💼</div>
              <h3 style={styles.serviceTitle}>Business Strategy</h3>
              <p style={styles.serviceDescription}>
                Strategic planning and business development to help your organization reach its goals
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>📊</div>
              <h3 style={styles.serviceTitle}>Data Analytics</h3>
              <p style={styles.serviceDescription}>
                Transform your data into actionable insights with our advanced analytics solutions
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🚀</div>
              <h3 style={styles.serviceTitle}>Digital Transformation</h3>
              <p style={styles.serviceDescription}>
                Modernize your operations and embrace digital technologies for competitive advantage
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>👥</div>
              <h3 style={styles.serviceTitle}>Process Optimization</h3>
              <p style={styles.serviceDescription}>
                Streamline workflows and improve operational efficiency across your organization
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🎯</div>
              <h3 style={styles.serviceTitle}>Change Management</h3>
              <p style={styles.serviceDescription}>
                Guide your team through organizational transitions with proven methodologies
              </p>
            </div>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>💡</div>
              <h3 style={styles.serviceTitle}>Innovation Consulting</h3>
              <p style={styles.serviceDescription}>
                Foster innovation and develop cutting-edge solutions for your business challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={styles.sectionAlt}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>About TOSS Consultancy</h2>
          <div style={styles.aboutContent}>
            <p style={styles.aboutText}>
              TOSS Consultancy Services is a leading consulting firm dedicated to helping businesses
              achieve excellence through strategic guidance and innovative solutions. With years of
              experience across multiple industries, we bring deep expertise and a proven track record
              of success.
            </p>
            <p style={styles.aboutText}>
              Our team of experienced consultants works closely with clients to understand their unique
              challenges and develop tailored solutions that drive measurable results. We pride ourselves
              on our collaborative approach and commitment to delivering exceptional value.
            </p>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>500+</div>
                <div style={styles.statLabel}>Projects Completed</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>200+</div>
                <div style={styles.statLabel}>Happy Clients</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>15+</div>
                <div style={styles.statLabel}>Years Experience</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Expert Consultants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.contactContent}>
            <div style={styles.contactInfo}>
              <h3 style={styles.contactInfoTitle}>Contact Information</h3>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <span>info@tossconsultancy.com</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <span>123 Business Avenue, Suite 100</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>🕐</span>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <form style={styles.contactForm}>
              <input type="text" placeholder="Your Name" style={styles.input} />
              <input type="email" placeholder="Your Email" style={styles.input} />
              <input type="text" placeholder="Subject" style={styles.input} />
              <textarea placeholder="Your Message" style={styles.textarea} rows="5"></textarea>
              <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>&copy; 2025 TOSS Consultancy Services. All rights reserved.</p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>LinkedIn</a>
            <a href="#" style={styles.socialLink}>Twitter</a>
            <a href="#" style={styles.socialLink}>Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '1rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#00d4ff',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontSize: '1rem',
  },
  hero: {
    backgroundColor: '#16213e',
    color: 'white',
    padding: '150px 2rem 100px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#ddd',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#00d4ff',
    color: '#1a1a2e',
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.4)',
  },
  section: {
    padding: '80px 2rem',
    backgroundColor: '#f8f9fa',
  },
  sectionAlt: {
    padding: '80px 2rem',
    backgroundColor: 'white',
  },
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1a1a2e',
    fontWeight: 'bold',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'center',
  },
  serviceIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#1a1a2e',
  },
  serviceDescription: {
    color: '#666',
    lineHeight: '1.8',
  },
  aboutContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  aboutText: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1.5rem',
    lineHeight: '1.8',
    textAlign: 'center',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  statCard: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00d4ff',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#666',
  },
  contactContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  contactInfo: {
    padding: '2rem',
  },
  contactInfoTitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#1a1a2e',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    fontSize: '1.1rem',
    color: '#555',
  },
  contactIcon: {
    fontSize: '1.5rem',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  textarea: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#00d4ff',
    color: '#1a1a2e',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  footer: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialLink: {
    color: '#00d4ff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
}
