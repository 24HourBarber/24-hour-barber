export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-6 py-20 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-300">
          24 Hour Barber
        </p>

        <h1 className="text-5xl font-semibold leading-tight">
          Request Service Consultation
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
          Individual appointments, residential partnerships, recurring grooming,
          and consultation requests.
        </p>

        <form
          action="/api/inquiry"
          method="POST"
          className="mt-10 space-y-4 max-w-xl"
        >
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-2xl px-4 py-3 text-black"
          />

          <input
            name="organization"
            placeholder="Organization / residential home"
            className="w-full rounded-2xl px-4 py-3 text-black"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-2xl px-4 py-3 text-black"
          />

          <input
            name="phone"
            required
            placeholder="Phone number"
            className="w-full rounded-2xl px-4 py-3 text-black"
          />

          <select
            name="serviceType"
            required
            className="w-full rounded-2xl px-4 py-3 text-black"
          >
            <option value="">Select service type</option>
            <option>Individual Appointment</option>
            <option>Residential Program Inquiry</option>
            <option>Recurring Grooming Service</option>
            <option>Consultation Request</option>
          </select>

          <input
            name="residents"
            placeholder="Number of residents / clients"
            className="w-full rounded-2xl px-4 py-3 text-black"
          />

          <textarea
            name="message"
            required
            placeholder="Tell us what you need"
            rows="5"
            className="w-full rounded-2xl px-4 py-3 text-black"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-white px-5 py-3 font-semibold text-neutral-950"
          >
            Request Service Consultation
          </button>
        </form>
      </section>
    </main>
  );
}
