import Link from "next/link";

export const services = [
  [
    "BK",
    "Monthly & Quarterly Bookkeeping",
    "Accurate financial records and timely reports that keep your books audit-ready.",
  ],
  [
    "PT",
    "Payroll & Tax Preparation",
    "Reliable payroll processing and tax preparation that keeps your organisation compliant.",
  ],
  [
    "CR",
    "Company Re-Organisation",
    "Practical financial and operational support for stronger, more efficient organisations.",
  ],
  [
    "FA",
    "Forensic Audit",
    "Focused investigations that identify irregularities and protect organisational assets.",
  ],
  [
    "CT",
    "Corporate Tax Service",
    "Clear guidance through corporate tax requirements, filings and statutory obligations.",
  ],
  [
    "TA",
    "Tax Planning & Advisory",
    "Forward-looking strategies that improve tax efficiency and support better decisions.",
  ],
];

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          CFA <span>&</span> Associates
          <small>Chartered Accountants</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <div className="nav-dropdown">
            <Link href="/about">
              About <span>⌄</span>
            </Link>
            <div>
              <Link href="/about">Our Story</Link>
              <Link href="/about#mission">Mission & Vision</Link>
              <Link href="/team">Team</Link>
            </div>
          </div>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/team">Team</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="logo light">
            CFA <span>&</span> Associates
            <small>Chartered Accountants</small>
          </Link>
          <p>
            Professional audit, accounting, tax and advisory services delivered
            with integrity, drawing on roots dating back to 1967.
          </p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Our Services</h3>
          <Link href="/services">Bookkeeping</Link>
          <Link href="/services">Tax Preparation</Link>
          <Link href="/services">Forensic Audit</Link>
          <Link href="/services">Business Advisory</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Republic House, Accra Central<br />GPS: GA-105-2085</p>
          <a href="mailto:christianfosu.associates@yahoo.com">christianfosu.associates@yahoo.com</a>
          <a href="tel:+233277822963">027 782 2963</a><a href="tel:+233244624177">024 462 4177</a>
        </div>
      </div>
      <div className="copyright">
        © 2026 CFA & Associates. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div>
        <p>
          Home <b>/</b> {title}
        </p>
        <h1>{title}</h1>
        <span>{text}</span>
      </div>
    </section>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-title">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map(([code, title, text]) => (
        <article key={code}>
          <div className="service-icon">{code}</div>
          <h3>{title}</h3>
          <p>{text}</p>
          <Link href="/contact">
            Learn more <span>→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
