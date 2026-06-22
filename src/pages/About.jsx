import { Link } from 'react-router-dom';
import { Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';

function About() {
  const founders = [
    {
      image: '/images/satyam.jpg',
      name: 'Satyam Sharma',
      role: 'Co-Founder & Digital Initiatives Lead',
      bio: 'Leads digital literacy and AI education programs for underprivileged youth. Passionate about bridging the digital divide.',
      tags: ['Technology', 'Education']
    },
    {
      image: '/images/khushi.jpg',
      name: 'Khushi Rajput',
      role: 'Co-Founder & Women\'s Health Lead',
      bio: 'Leads menstrual hygiene initiatives and women\'s health awareness drives across Jammu & Kashmir.',
      tags: ['Health', 'Women']
    },
    {
      image: '/images/sarvagya.jpg',
      name: 'Sarvagya Sharma',
      role: 'Co-Founder & Community Outreach Lead',
      bio: 'Works in community centers and migrant camps to promote health schemes and social empowerment.',
      tags: ['Community', 'Outreach']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero hero-small">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up delay-1">About Arogyam Foundation</h1>
          <p className="hero-description animate-fade-in-up delay-1">
            Empowering communities through health, education, and innovation — nurturing "Sukham Sampadam" for all.
          </p>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Co-Founders</h2>
            <p>Passionate changemakers dedicated to transforming community health.</p>
          </div>

          <div className="grid-3">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <img src={founder.image} alt={founder.name} className="founder-card-image" />
                <h3 className="founder-card-name">{founder.name}</h3>
                <p className="founder-card-role">{founder.role}</p>
                <p className="founder-card-bio">{founder.bio}</p>
                <div className="founder-card-tags">
                  {founder.tags.map((tag, i) => (
                    <span key={i} className={`badge ${i === 0 ? 'badge-primary' : 'badge-secondary'}`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="section-header">
              <h2>Who We Are</h2>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
              <p className="mb-md">Arogyam Foundation is a non-profit mental health organization dedicated to advancing holistic wellbeing across India. Founded by passionate changemakers from diverse backgrounds, we work tirelessly to bridge gaps in healthcare access, digital literacy, and social awareness.</p>
              <p>Our approach blends traditional values with modern innovation, ensuring that wellness, knowledge, and empowerment reach even the most remote communities. From menstrual hygiene awareness and mental health education to digital empowerment and social outreach — we envision an India where health and happiness thrive hand-in-hand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Approach</h2>
          </div>

          <div className="grid-2">
            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(13,148,136,0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
                <Users size={28} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>Community-Centered Solutions</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>We believe in working with communities, not just for them. Our programs are designed through continuous dialogue with local stakeholders.</p>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} /> Participatory program design
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} /> Local leadership development
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} /> Cultural sensitivity and adaptation
                </li>
              </ul>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ width: '56px', height: '56px', background: 'rgba(13,148,136,0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
                <Heart size={28} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>Holistic Wellbeing Framework</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>Our interventions address physical, mental, and social wellbeing through integrated approaches.</p>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} /> Preventive healthcare focus
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} /> Mental health integration
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} /> Social determinants of health
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--space-sm)' }}>Join Our Mission</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '500px', margin: '0 auto var(--space-lg)' }}>
            Be part of the change. Together, we can create a healthier, more equitable India.
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

export default About;