import Link from "next/link";
import { Layout, SectionTitle, ServiceGrid } from "./components";

export default function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <div className="hero-overlay">
          <div className="hero-copy">
            <span className="kicker">A professional heritage dating back to 1967</span>
            <h1>
              Professional Auditing
              <br />
              <em>Services</em>
            </h1>
            <p>
              Delivering excellence in financial auditing, risk management and
              business advisory services with integrity and expertise.
            </p>
            <div className="hero-buttons">
              <Link className="btn primary" href="/about">
                Read More
              </Link>
              <Link className="btn ghost" href="/services">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="home-about section">
        <div className="about-image">
          <img
            src="/about.jpg"
            alt="CFA and Associates professionals in a meeting"
          />
          <span>
            Our roots
            <br />
            <b>1967</b>
          </span>
        </div>
        <div>
          <SectionTitle
            eyebrow="About CFA & Associates"
            title="A legacy of reliability and professional discipline"
          />
          <p>
            Our roots date back to 1967 through our predecessor, Christian Fosu & Associates. CFA & Associates was registered in its current partnership form in 2014.
          </p>
          <p>
            Rooted in heritage and driven by modern standards, we deliver
            dependable financial insight and compliance-focused solutions for
            businesses across Ghana.
          </p>
          <ul className="checks">
            <li>Seasoned practitioners with deep industry knowledge</li>
            <li>Ethical standards and transparent financial practices</li>
            <li>Modern, business-focused professional advice</li>
          </ul>
          <Link className="btn primary" href="/about">
            Learn More About Us
          </Link>
        </div>
      </section>
      <section className="stats">
        <div>
          <b>1967</b>
          <span>Our Roots</span>
        </div>
        <div>
          <b>2014</b>
          <span>Current Partnership</span>
        </div>
        <div>
          <b>10</b>
          <span>Permanent Staff</span>
        </div>
        <div>
          <b>6</b>
          <span>Core Service Areas</span>
        </div>
      </section>
      <section className="section pale">
        <SectionTitle
          eyebrow="What We Do"
          title="Our Services"
          text="Comprehensive financial and advisory services tailored to your business needs."
        />
        <ServiceGrid />
        <div className="center">
          <Link className="btn primary" href="/services">
            View All Services
          </Link>
        </div>
      </section>
      <section className="why section">
        <div>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Experience, integrity and advice you can trust"
          />
          <p>
            Our firm builds on a professional heritage dating back to 1967, with a modern
            understanding of Ghanaian businesses and regulatory requirements.
          </p>
          <div className="why-list">
            <article>
              <b>01</b>
              <div>
                <h3>Seasoned Practitioners</h3>
                <p>
                  Experienced professionals who understand the details and the
                  wider business picture.
                </p>
              </div>
            </article>
            <article>
              <b>02</b>
              <div>
                <h3>Integrity & Compliance</h3>
                <p>
                  Ethical, confidential work aligned with professional and
                  regulatory standards.
                </p>
              </div>
            </article>
            <article>
              <b>03</b>
              <div>
                <h3>Client-Centred Service</h3>
                <p>
                  Responsive advice shaped around your organisation&apos;s actual
                  priorities.
                </p>
              </div>
            </article>
          </div>
        </div>
        <img src="/team.jpg" alt="Professional team collaborating" />
      </section>
      <section className="section pale approach">
        <SectionTitle eyebrow="Our Approach" title="Clarity at every stage" text="Careful planning, focused work and clear communication guide each engagement." />
        <div className="process-grid">
          <article><b>01</b><h3>Understand</h3><p>We discuss your objectives, reporting requirements and the risks that matter to your organisation.</p></article>
          <article><b>02</b><h3>Plan</h3><p>We agree the scope, responsibilities and timetable, with a team suited to the assignment.</p></article>
          <article><b>03</b><h3>Examine</h3><p>We evaluate records and controls, gather evidence and review significant findings with care.</p></article>
          <article><b>04</b><h3>Communicate</h3><p>We deliver clear reports and practical recommendations, with time to discuss the next steps.</p></article>
        </div>
      </section>

      <section className="cta">
        <div>
          <span>Let&apos;s work together</span>
          <h2>Ready to strengthen your financial future?</h2>
          <p>Speak with our team about your audit, tax or advisory needs.</p>
        </div>
        <Link className="btn white" href="/contact">
          Contact Us
        </Link>
      </section>
    </Layout>
  );
}
