import Link from "next/link";
import { Layout, PageHero, SectionTitle } from "../components";

export default function About() {
  return (
    <Layout>
      <PageHero
        title="About Us"
        text="Discover the story, values and purpose behind CFA & Associates."
      />

      <section className="home-about section">
        <div className="about-image">
          <img src="/about.jpg" alt="Professional meeting" />
          <span>
            Our roots
            <br />
            <b>1967</b>
          </span>
        </div>
        <div>
          <SectionTitle
            eyebrow="Our Story"
            title="Built on a tradition of trust"
          />
          <p>
            Our roots date back to 1967 through our predecessor, Christian Fosu & Associates. CFA & Associates was registered in 2014 under Ghana&apos;s Incorporated Private Partnership Act, 1962 (Act 152).
          </p>
          <p>
            Today, the firm is managed by seasoned practitioners who combine
            heritage, professional discipline and current industry knowledge to
            deliver reliable service.
          </p>
          <p>
            We support businesses and institutions with auditing, tax,
            bookkeeping, forensic investigation and strategic advisory services.
          </p>
          <Link className="btn primary" href="/contact">
            Talk to Our Team
          </Link>
        </div>
      </section>

      <section className="mission section pale" id="mission">
        <SectionTitle eyebrow="Our Direction" title="Mission & Vision" />
        <div className="mission-grid">
          <article>
            <span>01</span>
            <h3>Our Mission</h3>
            <p>
              To deliver timely, high-quality professional services ethically, building trusting relationships through a thorough understanding of each client&apos;s business. We provide tailored solutions and access to qualified professionals who offer clear guidance and ease the audit process.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Our Vision</h3>
            <p>
              To build and sustain our reputation as one of the leading local professional firms in Ghana and beyond, helping our people and clients achieve their full potential through passion, purpose, innovative approaches and deep expertise.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Our Values</h3>
            <p>
              Integrity, independence, confidentiality, professional excellence
              and respect for every client relationship.
            </p>
          </article>
        </div>
      </section>

      <section className="cta">
        <div>
          <span>Meet the people behind the work</span>
          <h2>Experienced professionals. Personal service.</h2>
        </div>
        <Link className="btn white" href="/team">
          Meet Our Team
        </Link>
      </section>
    </Layout>
  );
}
