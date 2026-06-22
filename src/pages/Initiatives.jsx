import { Link } from 'react-router-dom';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';

function Initiatives() {
  const initiatives = [
    {
      image: '/initiatives/menstrual1.jpg',
      tag: "Women's Health",
      title: "Menstrual Hygiene Awareness",
      description: "We aim to break taboos and improve access to menstrual hygiene resources for adolescent girls in Jammu & Kashmir.",
      focus: ["Awareness campaigns in schools", "Sanitary napkin distribution", "Breaking stigma through dialogue"],
      challenges: ["Only 42% use sanitary pads", "40,000 girls lack access"],
      impact: "Educating 20,000 rural individuals (Aug–Nov 2025)"
    },
    {
      image: '/initiatives/digital1.jpg',
      tag: "Education",
      title: "Digital Literacy for Underprivileged Teens",
      description: "Bridging the digital divide by equipping teenagers with essential technology and financial literacy skills.",
      focus: ["Basic computer education", "AI & digital tools introduction", "Financial literacy workshops"],
      challenges: ["Only 2.7% have computer access", "19,000+ students lack facilities"],
      impact: "Educating 1,000 teenagers about technology & AI"
    },
    {
      image: '/initiatives/migrant1.jpg',
      tag: "Community",
      title: "Migrant & Displaced Community Outreach",
      description: "Supporting migrant families with healthcare, education, and access to government schemes.",
      focus: ["Awareness drives in migrant camps", "Connecting families with health schemes", "Educational workshops for children"],
      challenges: ["62,000 migrants in J&K camps", "14% lack essential services"],
      impact: "Reaching migrant camps to empower families"
    },
    {
      image: '/initiatives/document1.jpg',
      tag: "Storytelling",
      title: "Documentation & Storytelling",
      description: "We document grassroots efforts through storytelling, photography, and community reports to amplify impact.",
      focus: ["Storytelling & interviews", "Photography & videography", "Publishing community reports"],
      challenges: ["Document 1,500 initiatives", "Raise visibility for unsung heroes"],
      impact: "Making invisible community efforts visible"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero hero-small">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up delay-1">Our Initiatives</h1>
          <p className="hero-description animate-fade-in-up delay-1">
            Empowering communities through wellness, education, and social impact programs.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

            {initiatives.map((initiative, index) => (
              <div key={index} className="initiative-card">
                <div className="initiative-card-image">
                  <img src={initiative.image} alt={initiative.title} />
                </div>
                <div className="initiative-card-content">
                  <span className="initiative-card-tag">{initiative.tag}</span>
                  <h3 className="initiative-card-title">{initiative.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                    {initiative.description}
                  </p>
                  <div className="grid-2" style={{ marginBottom: 'var(--space-md)' }}>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Key Focus:</h4>
                      <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        {initiative.focus.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Check size={16} style={{ color: 'var(--primary)' }} /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Challenges:</h4>
                      <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        {initiative.challenges.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <AlertCircle size={16} style={{ color: '#f43f5e' }} /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(13,148,136,0.1)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ color: 'var(--primary)', fontWeight: '600' }}><span style={{ fontWeight: '600' }}>Impact Goal:</span> {initiative.impact}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>Join Our Mission</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '500px', margin: '0 auto var(--space-lg)' }}>
            Your support can help us expand these initiatives and reach more communities in need.
          </p>
          <Link to="/get-involved" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
            Get Involved
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Initiatives;