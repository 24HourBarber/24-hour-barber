export default function ResidentialPartnersPage() {
  const benefits = [
    "Consistent recurring grooming schedules",
    "Reduced transportation and coordination challenges",
    "Comfortable on-site service in familiar environments",
    "Professional presentation support for residents",
    "Dependable communication with staff and coordinators",
    "Respectful, patience-first barbering approach",
  ];

  const services = [
    {
      title: "Recurring Grooming Days",
      body: "Establish scheduled on-site service days for residents who benefit from routine and consistency.",
    },
    {
      title: "Individual Resident Appointments",
      body: "Haircuts, beard grooming, shape-ups, and personal grooming services delivered on-site.",
    },
    {
      title: "Special Event Preparation",
      body: "Professional grooming support before celebrations, appointments, holidays, and community events.",
    },
    {
      title: "Residential Consultations",
      body: "Collaborative planning with coordinators and care teams to build dependable grooming systems.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      body: "Discuss your residents, scheduling needs, preferred service frequency, and operational coordination.",
    },
    {
      step: "02",
      title: "Service Planning",
      body: "Create a dependable service structure designed around your program’s routines and staffing needs.",
    },
    {
      step: "03",
      title: "On-Site Service Delivery",
      body: "Receive professional barber services delivered respectfully, consistently, and efficiently on location.",
    },
  ];

  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-glow hero-glow-right" />
        <div className="hero-glow hero-glow-left" />

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

              <a href="#services" className="button button-outline">
                View Partnership Services
              </a>
            </div>
          </div>

          <aside className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-header">
                <div>
                  <p className="section-kicker">Why Residential Programs Partner</p>
                  <h2>Dependable, dignified grooming support.</h2>
                </div>

                <div className="pill">Care-Focused</div>
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
              <p className="section-kicker">Partnership Services</p>
              <h2>Built for residential communities and coordinated care environments.</h2>
            </div>

            <p className="section-supporting-copy">
              Professional barber services designed around consistency, communication,
              resident comfort, and dependable scheduling.
            </p>
          </div>

          <div className="card-grid card-grid-two">
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

      <section className="section">
        <div className="container process-panel">
          <p className="section-kicker">How Partnership Works</p>

          <h2>
            A structured process designed for residential coordination.
          </h2>

          <div className="card-grid card-grid-three">
            {process.map((item) => (
              <article key={item.step} className="step-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
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
```

Your `app/residential-partners/page.js` must contain **only JavaScript/JSX**, ending with:

```jsx
  );
}
```

# Add Footer Link

In your footer links:

```jsx
<a href="/residential-partners">Residential Partners</a>
```

# Recommended SEO Page Title

Add later using metadata:

```jsx
export const metadata = {
  title: "Residential Grooming Partnerships | 24 Hour Barber",
  description:
    "Professional on-site barber services for residential homes, supportive housing programs, and care-centered communities.",
};
```
