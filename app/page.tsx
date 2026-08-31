import Link from "next/link";
import { Layout, SectionTitle, ServiceGrid } from "./components";

export default function Home(){return <Layout>
  <section className="home-hero">
    <div className="hero-overlay">
      <div className="hero-copy">
        <span className="kicker">Professional excellence since 1967</span>
        <h1>Professional Auditing<br/>
        <em>Services</em>
        </h1><p>Delivering excellence in financial auditing, risk management and business advisory services with integrity and expertise.</p>
        <div className="hero-buttons">
          <Link className="btn primary" href="/about">Read More</Link>
          <Link className="btn ghost" href="/services">Our Services</Link>
          </div>
          </div>
          </div>
          </section>

  <section className="home-about section">
    <div className="about-image">
      <img src="/about.jpg" alt="CFA and Associates professionals in a meeting"/>
      <span>Established<br/><b>1967</b></span>
    </div>
    <div><SectionTitle eyebrow="About CFA & Associates" title="A legacy of reliability and professional discipline"/>
      <p>The firm was registered under the laws of the Republic of Ghana in 1967 as a sole practitioner and later incorporated under the Private Partnership Act of 1962 as Christian Fosu & Associates.</p>
      <p>Rooted in heritage and driven by modern standards, we deliver dependable financial insight and compliance-focused solutions for businesses across Ghana.</p>
      <ul className="checks">
        <li>Seasoned practitioners with deep industry knowledge</li>
        <li>Ethical standards and transparent financial practices</li>
        <li>Modern, business-focused professional advice</li>
        </ul>
        <Link className="btn primary" href="/about">Learn More About Us</Link>
    </div>
  </section>

  <section className="stats">
    <div>
      <b>57+</b><span>Years of Practice</span>
      </div>
    <div>
      <b>200+</b><span>Clients Served</span>
    </div>
    <div>
        <b>1,500+</b><span>Tax Filings Completed</span>
    </div><div><b>6</b><span>Core Service Areas</span>
    </div>
  </section>

  <section className="section pale">
    <SectionTitle eyebrow="What We Do" title="Our Services" text="Comprehensive financial and advisory services tailored to your business needs."/>
    <ServiceGrid/>
    <div className="center">
      <Link className="btn primary" href="/services">View All Services</Link>
      </div>
  </section>

  <section className="why section"><div>
    <SectionTitle eyebrow="Why Choose Us" title="Experience, integrity and advice you can trust"/>
    <p>Our team combines more than five decades of practice with a modern understanding of Ghanaian businesses and regulatory requirements.</p>
    <div className="why-list"><article><b>01</b>
    <div><h3>Seasoned Practitioners</h3><p>Experienced professionals who understand the details and the wider business picture.</p>
      </div>
      </article>
      <article><b>02</b><div><h3>Integrity & Compliance</h3><p>Ethical, confidential work aligned with professional and regulatory standards.</p>
      </div></article><article><b>03</b><div><h3>Client-Centred Service</h3><p>Responsive advice shaped around your organisation&apos;s actual priorities.</p></div></article></div></div><img src="/team.jpg" alt="Professional team collaborating"/>
  </section>

  <section className="trusted-section" aria-labelledby="trusted-heading">
  <h2 id="trusted-heading">Trusted by Leading Organizations</h2>
  <span className="trusted-line" />

  <div className="trusted-marquee">
    <div className="trusted-track">
      {[0, 1].map((group) => (
        <div
          className="trusted-group"
          aria-hidden={group === 1}
          key={group}
        >
          <div className="trusted-logo">
            <img src="/clients/win-energy.png" alt="Win Energy" />
          </div>

          <div className="trusted-logo">
            <img
              src="/clients/anum-rural-bank.png"
              alt="Anum Rural Bank PLC"/>
          </div>

          <div className="trusted-logo">
            <img
              src="/clients/ghana-exim-bank.png"
              alt="Ghana Exim Bank"/>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




  <section className="cta">
    <div>
      <span>Let&apos;s work together</span><h2>Ready to strengthen your financial future?</h2><p>Speak with our team about your audit, tax or advisory needs.</p>
        </div><Link className="btn white" href="/contact">Contact Us</Link>
  </section>
</Layout>}

