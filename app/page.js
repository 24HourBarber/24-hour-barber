<form action="/api/inquiry" method="POST" style={{ display: "grid", gap: "16px" }}>
  <input
    name="name"
    required
    placeholder="Your name"
    style={{ padding: "14px", borderRadius: "14px", color: "black" }}
  />

  <input
    name="organization"
    placeholder="Organization / residential home"
    style={{ padding: "14px", borderRadius: "14px", color: "black" }}
  />

  <input
    name="email"
    type="email"
    required
    placeholder="Email address"
    style={{ padding: "14px", borderRadius: "14px", color: "black" }}
  />

  <input
    name="phone"
    required
    placeholder="Phone number"
    style={{ padding: "14px", borderRadius: "14px", color: "black" }}
  />

  <select
    name="serviceType"
    required
    style={{ padding: "14px", borderRadius: "14px", color: "black" }}
  >
    <option value="">Select service type</option>
    <option value="Individual Appointment">Individual Appointment</option>
    <option value="Residential Program Inquiry">Residential Program Inquiry</option>
    <option value="Recurring Grooming Service">Recurring Grooming Service</option>
    <option value="Consultation Request">Consultation Request</option>
  </select>

  <input
    name="residents"
    placeholder="Number of residents / clients"
    style={{ padding: "14px", borderRadius: "14px", color: "black" }}
  />

  <textarea
    name="message"
    required
    placeholder="Tell us what you need"
    rows="5"
    style={{ padding: "14px", borderRadius: "14px", color: "black" }}
  />

  <button
    type="submit"
    style={{
      padding: "14px",
      borderRadius: "14px",
      background: "white",
      color: "#0b0b0d",
      fontWeight: "700",
      cursor: "pointer"
    }}
  >
    Request Service Consultation
  </button>
</form>
