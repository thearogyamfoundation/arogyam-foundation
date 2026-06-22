import { Link } from 'react-router-dom';
import { ArrowRight, Brain, MessageCircle, Bell, Heart, CheckCircle } from 'lucide-react';

function Home() {
  const projects = [
    { image: '/images/project1.jpg', title: 'Old Age Home', location: 'Amphalla' },
    { image: '/images/project2.jpg', title: 'Flood Relief Drive Day-1', location: 'Near KC Sports Club' },
    { image: '/images/project3.jpg', title: 'Flood Relief Drive Day-2', location: 'Rajinder Nagar' },
    { image: '/images/project4.jpg', title: 'Menstrual Hygiene Drive', location: 'Upcoming...' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo animate-fade-in-up">
            <img src="/Aro.png" alt="Arogyam Foundation Logo" />
          </div>
          <h1 className="hero-title animate-fade-in-up delay-1">Arogyam Foundation</h1>
          <p className="hero-subtitle animate-fade-in-up delay-2">"Sukham Sampadam" — Wellness is Wealth</p>
          <p className="hero-description animate-fade-in-up delay-3">
            Empowering underserved communities through holistic mental and physical wellness programs that create lasting change.
          </p>
          <div className="hero-buttons animate-fade-in-up delay-4">
            <Link to="/initiatives" className="btn btn-primary">
              Explore Initiatives
              <ArrowRight size={18} />
            </Link>
            <Link to="/get-involved" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="mb-md">Healing Communities,<br />Building Futures</h2>
              <p className="mb-md">
                Arogyam Foundation is a non-profit organization dedicated to improving the health and well-being of marginalized communities through innovative, technology-driven solutions.
              </p>
              <p className="mb-md">
                Founded on the principle that <strong>"Sukham Sampadam"</strong> (Wellness is Wealth), we believe that access to quality healthcare and mental wellness should be a fundamental right for all.
              </p>
              <p>
                Through partnerships with local organizations, healthcare professionals, and volunteers, we create sustainable impact that empowers individuals to take control of their health and well-being.
              </p>
              <p style={{ color: 'var(--primary)', fontWeight: 600, marginTop: 'var(--space-md)' }}>
                Since our inception, we have reached over <strong>1,450+ beneficiaries</strong> across rural and urban communities.
              </p>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: 'var(--primary)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Brain size={24} color="white" />
                </div>
                <h3 style={{ margin: 0 }}>MindMantra</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                Your anonymous AI companion for emotional support and wellness guidance. Available 24/7 to listen and support you.
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                  Anonymous, judgment-free support
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                  Multiple regional languages
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                  Instant NLP responses
                </li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => {
                const event = new CustomEvent('openChatbot');
                window.dispatchEvent(event);
              }}>
                <MessageCircle size={18} />
                Try MindMantra Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Past Projects</h2>
            <p>From wellness camps to mental health awareness, we've been actively promoting health and happiness.</p>
          </div>

          <div className="carousel">
            <div className="carousel-track" id="carousel">
              {projects.map((project, index) => (
                <div key={index} className="carousel-item">
                  <div className="card">
                    <img src={project.image} alt={project.title} className="card-image" />
                    <div className="card-body">
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-text">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicates for infinite scroll */}
              {projects.map((project, index) => (
                <div key={`dup-${index}`} className="carousel-item">
                  <div className="card">
                    <img src={project.image} alt={project.title} className="card-image" />
                    <div className="card-body">
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-text">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Virtual Initiatives</h2>
            <p>Technology-powered solutions for community wellness.</p>
          </div>

          <div className="grid-3">
            <div className="card" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{
                width: 64,
                height: 64,
                background: 'rgba(13,148,136,0.1)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-md)'
              }}>
                <MessageCircle size={32} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>MindMitra</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Anonymous multilingual AI chatbot providing emotional support and mental health guidance.</p>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{
                width: 64,
                height: 64,
                background: 'rgba(244,63,94,0.1)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-md)'
              }}>
                <Bell size={32} style={{ color: '#f43f5e' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>RedAlert</h3>
              <p style={{ color: 'var(--text-secondary)' }}>SMS-based period tracker and hygiene education program for women.</p>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{
                width: 64,
                height: 64,
                background: 'rgba(59,130,246,0.1)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-md)'
              }}>
                <Heart size={32} style={{ color: '#3b82f6' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>WellBeing India</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Mental health awareness programs in schools, communities, and workplaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>Ready to Make a Difference?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 500, margin: '0 auto var(--space-lg)' }}>
            Join us in building a healthier, happier tomorrow for communities across India.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <Link to="/get-involved" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
              Get Involved
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;