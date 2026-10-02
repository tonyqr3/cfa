import { Layout, PageHero, SectionTitle } from "../components";

export default function Contact() {
  return (
    <Layout>
      <PageHero
        title="Contact"
        text="Speak with our team about your audit, tax or advisory requirements."
      />

      <section className="contact-page section">
        <div>
          <SectionTitle eyebrow="Get In Touch" title="How can we help?" />
          <p>
            Tell us briefly about your organisation and the service you need. A
            member of our team will respond as soon as possible.
          </p>
          <div className="contact-details">
            <article>
              <b>01</b>
              <div>
                <h3>Location</h3>
                <p>Republic House, Accra Central. GPS: GA-105-2085. P. O. Box GP 428, Accra.</p>
              </div>
            </article>
            <article>
              <b>02</b>
              <div>
                <h3>Email</h3>
                <a href="mailto:christianfosu.associates@yahoo.com">
                  christianfosu.associates@yahoo.com
                </a>
              </div>
            </article>
            <article>
              <b>03</b>
              <div>
                <h3>Telephone</h3>
                <p>027 782 2963 / 024 462 4177</p>
              </div>
            </article>
          </div>
        </div>

        <form className="contact-form">
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div>
            <label>Email Address</label>
            <input type="email" placeholder="you@company.com" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="tel" placeholder="Your phone number" />
          </div>
          <div>
            <label>Service</label>
            <select defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Audit & Assurance</option>
              <option>Tax & Compliance</option>
              <option>Bookkeeping & Payroll</option>
              <option>Forensic Audit</option>
              <option>Business Advisory</option>
            </select>
          </div>
          <div className="full">
            <label>Message</label>
            <textarea
              rows={6}
              placeholder="How can we help?"
            />
          </div>
          <button type="button" className="btn primary">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}
