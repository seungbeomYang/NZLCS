export default function Contact() {
  return (
    <section id="contact" className="bg-accent border-b-[3px] border-border-hard">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="brut-eyebrow">Get in touch</span>
          <h2 className="mt-5 font-bold text-4xl md:text-5xl tracking-tight leading-none">
            Ready to <span className="text-primary">get started?</span>
          </h2>
          <p className="mt-5 text-muted text-base md:text-lg leading-relaxed">
            Send us a photo of the site and we&apos;ll get back to you with a quote — fast.
          </p>
        </div>

        {/* 50 / 50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT — form */}
          <div className="brut-card bg-surface p-7 md:p-10">
            <h3 className="font-bold text-2xl tracking-tight mb-6">Send an enquiry</h3>
            <form className="flex flex-col gap-5">
              <Field label="Full Name" name="name" placeholder="John Smith" required />
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@company.com"
                required
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+64 21 XXX XXX"
              />
              <div>
                <label className="block font-bold text-xs uppercase tracking-widest mb-2">
                  Service Type
                </label>
                <select
                  name="service"
                  className="w-full border-[3px] border-border-hard bg-background px-4 py-3 font-semibold focus:outline-none focus:bg-white"
                  defaultValue="Rust & Oxide Removal"
                >
                  <option>Rust &amp; Oxide Removal</option>
                  <option>Graffiti Removal</option>
                  <option>Industrial Surface Prep</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-xs uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Please include the site address, scope of work, and any photos if available."
                  className="w-full border-[3px] border-border-hard bg-background px-4 py-3 resize-none focus:outline-none focus:bg-white"
                />
              </div>
              <div>
                <label className="block font-bold text-xs uppercase tracking-widest mb-2">
                  Upload photos (up to 10 MB)
                </label>
                <input
                  type="file"
                  name="upload"
                  multiple
                  className="w-full border-[3px] border-border-hard bg-background px-4 py-3 file:mr-4 file:py-1 file:px-3 file:border-[2px] file:border-border-hard file:bg-primary file:text-white file:font-bold file:uppercase file:text-xs"
                />
              </div>
              <button type="submit" className="brut-btn brut-btn-primary self-start mt-2">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT — info */}
          <div className="flex flex-col gap-6">
            <InfoRow
              label="Address"
              value="Auckland, New Zealand"
              emoji="📍"
            />
            <InfoRow label="Email" value="info@nzlcs.co.nz" emoji="✉" />
            <InfoRow label="Phone" value="021 419 933" emoji="☎" />

            {/* Map placeholder — hard-bordered frame */}
            <div className="brut-card bg-surface aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-muted">
                <div className="font-bold text-xs uppercase tracking-widest">
                  Google Maps
                </div>
                <div className="text-xs mt-1">Embed goes here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-bold text-xs uppercase tracking-widest mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full border-[3px] border-border-hard bg-background px-4 py-3 font-semibold focus:outline-none focus:bg-white"
      />
    </div>
  );
}

function InfoRow({
  label,
  value,
  emoji,
}: {
  label: string;
  value: string;
  emoji: string;
}) {
  return (
    <div className="brut-card bg-surface p-5 flex items-center gap-4">
      <div className="w-12 h-12 border-[3px] border-border-hard bg-primary text-white flex items-center justify-center text-xl shrink-0">
        {emoji}
      </div>
      <div>
        <div className="font-bold text-xs uppercase tracking-widest text-muted">
          {label}
        </div>
        <div className="font-bold text-lg leading-tight">{value}</div>
      </div>
    </div>
  );
}
