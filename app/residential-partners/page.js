export default function ResidentialPartnersPage() {
  const organizations = [
    "Administration for Children’s Services (ACS)",
    "NYC Department of Education (NYC DOE)",
    "City of New York",
    "Office for People With Developmental Disabilities (OPWDD)",
    "Department of State (DOS)",
    "The Arthur Ashe Institute for Urban Health",
    "Services for the UnderServed (SUS)",
  ];
  
return (
    <main className="page-shell">
    <header className="site-header">
  <div className="container header-inner">
    <a href="/" className="brand" aria-label="24 Hour Barber home">
      <div className="brand-badge">24</div>

      <div>
        <div className="brand-kicker">24 Hour Barber</div>
        <div className="brand-subtitle">
          On-site barber services for individuals and residential care communities.
        </div>
      </div>
    </a>

    <nav className="site-nav" aria-label="Primary navigation">
      <a href="/">Home</a>
      <a href="/#services">Services</a>
      <a href="/#contact">Contact</a>
    </nav>

    <a
      href="https://calendly.com/24hourbarber"
      target="_blank"
      rel="noopener noreferrer"
      className="button button-light"
    >
      Schedule Consultation
    </a>
  </div>
</header>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Residential Grooming Partnerships</div>

            <h1 className="hero-title">
              Professional on-site barber services for residential care communities.
            </h1>

            <p className="hero-copy">
              24 Hour Barber partners with residential homes, supportive housing programs,
              and care-centered organizations to provide dependable, respectful grooming
              services directly on-site.
            </p>

            <div className="button-row">
              <a
                href="https://calendly.com/24hourbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-gold"
              >
                Schedule Residential Consultation
              </a>
            </div>
          </div>

          <aside className="feature-card">
            <div className="feature-card-inner">
              <p className="section-kicker">Why It Matters</p>
              <h2>Dependable, dignified grooming support.</h2>
              <p className="body-copy">
                Consistent grooming supports confidence, dignity, presentation,
                and routine for residents and care communities.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container partner-panel">
          <div>
            <p className="section-kicker">Clients, Partners, Vendors & Licensing</p>
            <h2>
              Built through experience serving clients, communities, and organizations
              across New York City.
            </h2>

            <p className="body-copy">
              24 Hour Barber’s service philosophy is informed by professional experience,
              community engagement, and operational familiarity with organizations and
              systems that support children, families, adults, and underserved populations.
            </p>
          </div>

          <div className="card-grid card-grid-two">
            {organizations.map((item) => (
              <div key={item} className="support-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-last">
        <div className="container contact-panel">
          <div>
            <p className="section-kicker contact-kicker">
              Residential Partnership Inquiry
            </p>

            <h2>
              Let’s build a dependable grooming solution for your residents.
            </h2>

            <p className="contact-copy">
              Schedule a consultation to discuss recurring service days,
              resident accommodations, operational coordination, and partnership options.
            </p>
          </div>

          <div className="contact-card">
            <a
              href="https://calendly.com/24hourbarber"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold button-full"
            >
              Schedule Residential Consultation
            </a>

            <a
              href="mailto:info@24hourbarber.com"
              className="button button-outline button-full"
              style={{ marginTop: "1rem" }}
            >
              Email Partnership Inquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
