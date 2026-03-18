

const services = [
  {
    title: 'Haircuts & Shape-Ups',
    body: 'Professional cuts, shape-ups, beard grooming, and dependable routine barbering for individual clients and community members.',
  },
  {
    title: 'Residential Home Visits',
    body: 'On-site barber services for adult residential homes, supportive housing, and programs serving adults with intellectual disabilities.',
  },
  {
    title: 'Recurring Grooming Days',
    body: 'Simple recurring scheduling for residences and agencies that want reliable service, predictable routines, and easy coordination.',
  },
  {
    title: 'Calm, Respectful Service',
    body: 'A patience-first approach centered on dignity, clear communication, professionalism, and comfort for every client.',
  },
];

const benefits = [
  'Supports dignity, confidence, and presentation',
  'Reduces transportation and scheduling barriers',
  'Creates consistent grooming routines for residents',
  'Makes coordination easier for administrators and staff',
];

const audiences = [
  'Individual clients',
  'Families and guardians',
  'Residential homes',
  'Supportive housing programs',
  'Agency coordinators and care teams',
];

const steps = [
  {
    step: '01',
    title: 'Tell us what you need',
    body: 'Share whether you need an individual appointment, recurring residential visits, or a consultation for your program.',
  },
  {
    step: '02',
    title: 'Choose the service plan',
    body: 'Select a one-time visit, recurring grooming schedule, or on-site service day that fits your residents or household.',
  },
  {
    step: '03',
    title: 'Receive dependable service',
    body: 'Get professional barbering delivered with consistency, patience, and care-centered professionalism.',
  },
];

const partnerCards = [
  'Recurring on-site service days',
  'Clear scheduling with staff and coordinators',
  'Professional appearance support for appointments, visits, and events',
  'Respectful service for adults who benefit from familiar routines',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="24 Hour Barber home">
            <div className="brand-badge">24</div>
            <div>
              <div className="brand-kicker">24 Hour Barber</div>
              <div className="brand-subtitle">Mobile barbering with dignity</div>
            </div>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#partners">Residential Partners</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="button button-light">
            Request Service
          </a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-glow hero-glow-right" />
        <div className="hero-glow hero-glow-left" />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Individual clients + residential care settings</div>
            <h1 className="hero-title">
              Professional grooming for everyday clients and adults who need care-centered barber service.
            </h1>
            <p className="hero-copy">
              24 Hour Barber provides dependable haircut and grooming services with special focus on
              residential homes, supportive programs, and adults with intellectual disabilities who benefit from
              consistent, respectful, on-site care.
            </p>
            <div className="button-row">
              <a href="#contact" className="button button-gold">
                Book a Consultation
              </a>
              <a href="#services" className="button button-outline">
                View Services
              </a>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-value">On-Site</div>
                <div className="stat-label">Residential visits available</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Reliable</div>
                <div className="stat-label">Consistent recurring service</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Respectful</div>
                <div className="stat-label">Dignity-first barber care</div>
              </div>
            </div>
          </div>

          <aside className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-header">
                <div>
                  <p className="section-kicker">Featured Focus</p>
                  <h2>Residential Barber Service</h2>
                </div>
                <div className="pill">Agency Friendly</div>
              </div>

              <div className="benefit-list">
                {benefits.map((item) => (
                  <div key={item} className="benefit-item">
                    <span className="dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head section-head-split">
            <div>
              <p className="section-kicker">Services</p>
              <h2>A modern barber service built around trust, quality, and access.</h2>
            </div>
            <p className="section-supporting-copy">
              Designed for both standard barber clients and care-centered partner organizations that need
              dependable, professional grooming support.
            </p>
          </div>

          <div className="card-grid card-grid-four">
            {services.map((service) => (
              <article key={service.title} className="info-card">
                <div className="mini-badge">24HB</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="section">
        <div className="container partner-panel">
          <div>
            <p className="section-kicker">Residential Partners</p>
            <h2>A cleaner, easier grooming solution for residential homes and support programs.</h2>
            <p className="body-copy">
              Traditional barber access can be inconsistent for residents who face mobility, transportation,
              sensory, or scheduling barriers. 24 Hour Barber helps close that gap with professional on-site
              barbering designed around dignity, routine, and dependable coordination.
            </p>
          </div>

          <div className="card-grid card-grid-two">
            {partnerCards.map((item) => (
              <div key={item} className="support-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-panel">
          <p className="section-kicker">How It Works</p>
          <h2>Simple booking for individuals, families, and residential programs.</h2>

          <div className="card-grid card-grid-three">
            {steps.map((item) => (
              <article key={item.step} className="step-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <article className="about-card">
            <p className="section-kicker">About 24 Hour Barber</p>
            <h2>Looking sharp supports confidence, dignity, and community presence.</h2>
            <p className="body-copy">
              24 Hour Barber serves regular clients while placing intentional focus on people who are often
              underserved by traditional barber access. The goal is to deliver dependable grooming where it is
              needed most, especially in residential homes and supportive care environments.
            </p>
          </article>

          <aside className="audience-card">
            <p className="section-kicker">Who We Serve</p>
            <div className="audience-list">
              {audiences.map((item) => (
                <div key={item} className="audience-item">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="section section-last">
        <div className="container contact-panel">
          <div>
            <p className="section-kicker contact-kicker">Contact</p>
            <h2>Request service for yourself, a loved one, or your residential program.</h2>
            <p className="contact-copy">
              Ready for the next step? Replace the placeholder contact details below with your phone number,
              email address, booking link, or intake form.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-field">Your name or organization</div>
            <div className="contact-field">Phone or email</div>
            <div className="contact-field">Individual or residential request</div>
            <div className="contact-field">Service details</div>
            <a href="mailto:you@example.com" className="button button-light button-full">
              Submit Inquiry
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 24 Hour Barber. Mobile barbering for clients and residential care communities.</p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#partners">Residential Partners</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
