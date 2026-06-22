import { ArrowRight, Phone, Gift, Compass, ExternalLink, Camera } from 'lucide-react';

function GetInvolved() {
  const benefits = [
    "Hands-on experience in community health",
    "Training and skill development opportunities",
    "Join a network of passionate changemakers",
    "Make a tangible difference in people's lives",
    "Develop leadership and communication skills"
  ];

  const opportunities = [
    "Health camp coordination and support",
    "Awareness workshop facilitation",
    "Digital content creation and social media",
    "Fundraising and partnership development",
    "Photography and documentation"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero hero-small">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up delay-1">Get Involved</h1>
          <p className="hero-description animate-fade-in-up delay-1">
            Join us in building a healthier tomorrow. Whether you volunteer, donate, or collaborate — your support creates real change.
          </p>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(13,148,136,0.1)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)' }}>
                <Gift size={32} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>Volunteer</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>Share your time and skills with communities in need.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfObqsyQWYjAy4BVS4uvKdodopM0yCEmETkyr7FAox7hnhVPA/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                Sign Up Now
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(244,63,94,0.1)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)' }}>
                <Camera size={32} style={{ color: '#e11d48' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>Follow Us</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>Stay connected with our latest initiatives and impact stories.</p>
              <a href="https://www.instagram.com/arogyamfoundation/" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', background: 'linear-gradient(45deg, #f43f5e, #e11d48)', color: 'white' }}>
                @arogyamfoundation
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(13,148,136,0.1)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)' }}>
                <Phone size={32} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>Contact Us</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>Collaborate with us on healthcare or wellness programs.</p>
              <a href="tel:+917051721421" className="btn btn-primary" style={{ width: '100%' }}>
                <Phone size={18} />
                +91 70517 21421
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Make a Difference</h2>
            <p>Join our network of passionate changemakers and create lasting impact.</p>
          </div>

          <div className="grid-2" style={{ gap: 'var(--space-xl)' }}>
            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                <Gift size={24} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: 0 }}>Benefits for Volunteers</h3>
              </div>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                {benefits.map((benefit, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '24px', height: '24px', background: 'rgba(13,148,136,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                <Compass size={24} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: 0 }}>Volunteer Opportunities</h3>
              </div>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                {opportunities.map((opp, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '24px', height: '24px', background: 'rgba(244,63,94,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#f43f5e', borderRadius: '50%' }}></div>
                    </div>
                    <span>{opp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>Ready to Join Us?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '500px', margin: '0 auto var(--space-lg)' }}>
            Every contribution matters. Whether you have a few hours or specialized skills, there's a place for you at Arogyam Foundation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfObqsyQWYjAy4BVS4uvKdodopM0yCEmETkyr7FAox7hnhVPA/viewform" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
              Become a Volunteer
              <ArrowRight size={18} />
            </a>
            <a href="https://www.instagram.com/arogyamfoundation/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Follow Our Journey
              <Camera size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInvolved;