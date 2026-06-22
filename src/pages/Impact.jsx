import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Megaphone, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

function Impact() {
  const stats = [
    { number: '18', label: 'Health Campaigns', sub: 'Across 2 states' },
    { number: '1,450+', label: 'Beneficiaries', sub: 'Direct impact' },
    { number: '24', label: 'Communities', sub: 'Rural & urban' },
    { number: '150+', label: 'Volunteers', sub: 'Medical & non-medical' }
  ];

  const timeline = [
    { date: 'December 2024', title: 'Foundation', description: 'Conducted a cleanliness drive in local communities.', align: 'left' },
    { date: 'January 2025', title: 'Educational Drives', description: 'First 5 educational drives conducted, reaching 100+ learners.', align: 'right' },
    { date: 'April 2025', title: 'Expansion', description: 'Expanded to 2 states, launched digital literacy program.', align: 'left' },
    { date: 'May 2025', title: 'Partnerships', description: "Launched women's health initiative, reaching 250+ women.", align: 'right' },
    { date: 'August 2025', title: 'Old Age Home Visit', description: 'Brought smiles and comfort to old age home residents.', align: 'left' },
    { date: 'September 2025', title: 'Flood Relief', description: '2-day flood relief drive, providing essential supplies.', align: 'right' }
  ];

  const programs = [
    {
      icon: Stethoscope,
      color: 'var(--primary)',
      title: 'Health Camps',
      description: 'Mobile health camps providing essential medical services to underserved communities.',
      features: ['Free health checkups', 'Referrals to specialized care', '85% follow-up care']
    },
    {
      icon: Megaphone,
      color: '#f43f5e',
      title: 'Awareness Programs',
      description: 'Educational initiatives empowering communities with health knowledge.',
      features: ['Workshops on hygiene & nutrition', '45% increase in preventive practices', 'Digital health literacy']
    }
  ];

  const metrics = [
    { value: '92%', label: 'Satisfaction Rate', sub: 'Among beneficiaries' },
    { value: '78%', label: 'Behavior Change', sub: 'Adoption of healthier practices' },
    { value: '70%', label: 'Women Participation', sub: 'In health programs' }
  ];

  const stories = [
    { name: 'Sita Devi', role: 'Village Health Leader', initials: 'SD', quote: 'Thanks to Arogyam Foundation, our village now has regular health checkups and awareness sessions. It\'s changed our lives.' },
    { name: 'Rajesh Kumar', role: 'Community Volunteer', initials: 'RK', quote: "I've seen firsthand how Arogyam's flood relief program has helped our community recover and stay safe." },
    { name: 'Priya Mehta', role: 'Workshop Participant', initials: 'PM', quote: "The women's health workshop gave me knowledge I never had access to before. I'm now educating other women." }
  ];

  // Notification animation - keep as-is from original Flask site
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const names = ["Aarav Mehta", "Priya Nair", "Rohan Sharma", "Ishita Verma", "Vikram Singh", "Sanya Kapoor", "Devansh Gupta"];
    const messages = ["received free access to education!", "attended a women's hygiene session.", "got digital education resources.", "benefited from our wellness program."];

    const showNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const message = messages[Math.floor(Math.random() * messages.length)];
      const id = Date.now();

      setNotifications(prev => [...prev, { id, name, message }]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 4000);
    };

    const interval = setInterval(showNotification, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero hero-small">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up delay-1">Transforming Lives</h1>
          <p className="hero-description animate-fade-in-up delay-1">
            Transforming lives through compassion, wellness, and community-driven change.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Impact So Far</h2>
          </div>

          <div className="grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-card-number">{stat.number}</div>
                <div className="stat-card-label">{stat.label}</div>
                <div className="stat-card-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Milestones & Memories</h2>
          </div>

          <div className="timeline">
            {/* Curvy gradient line */}
            <svg className="timeline-curve" viewBox="0 0 100 1400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0D9488" />
                  <stop offset="50%" stopColor="#20F1EE" />
                  <stop offset="100%" stopColor="#0D9488" />
                </linearGradient>
              </defs>
              <path d="M50,0 Q20,175 50,350 Q80,525 50,700 Q20,875 50,1050 Q80,1225 50,1400"
                    stroke="url(#curveGradient)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"/>
            </svg>

            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="timeline-date">{item.date}</p>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
          </div>

          <div className="grid-2" style={{ marginBottom: 'var(--space-xl)' }}>
            {programs.map((program, index) => (
              <div key={index} className="card" style={{ padding: 'var(--space-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                  <div style={{ width: '56px', height: '56px', background: `${program.color}15`, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <program.icon size={28} style={{ color: program.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: 0 }}>{program.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>{program.description}</p>
                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                  {program.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <CheckCircle size={16} style={{ color: program.color }} /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid-3">
            {metrics.map((metric, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', background: 'rgba(13,148,136,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-sm)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>{metric.value}</span>
                </div>
                <p style={{ fontWeight: '600' }}>{metric.label}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
          </div>

          <div className="grid-3">
            {stories.map((story, index) => (
              <div key={index} className="card" style={{ padding: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--bg-tertiary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--primary)' }}>{story.initials}</div>
                  <div>
                    <h4 style={{ fontWeight: '600', margin: 0 }}>{story.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{story.role}</p>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notifications - kept as-is from original Flask site */}
      <div id="notification-container" style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 50 }}>
        {notifications.map((notif) => (
          <div key={notif.id} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px 16px', boxShadow: 'var(--shadow-lg)', marginBottom: '8px', animation: 'fadeInUp 0.5s ease', maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(13,148,136,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: 'var(--primary)' }}>{notif.name.charAt(0)}</div>
              <p style={{ margin: 0, fontSize: '0.9rem' }}><span style={{ color: 'var(--primary)', fontWeight: '600' }}>{notif.name}</span> {notif.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Impact;