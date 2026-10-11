import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { ArrowUpRight, CalendarDays, ChevronRight, Clock3, Instagram, MapPin, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import "@/App.css";

const fresha = "https://www.fresha.com/p/mayur-aggarwal-6622969?share=true&pId=3116178";
const whatsappNumber = "919990428329";
const whatsappDefaultUrl = `https://wa.me/${whatsappNumber}`;
const whatsappProductUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm browsing your salon catalog online and want to order a product. Please confirm availability and UPI details.")}`;
const nav: [string, string][] = [
  ["Home", "/"], ["Hair Care", "/hair-care"], ["Nails & Beauty", "/beauty"],
  ["Shop", "/shop"], ["Our Team", "/team"], ["Contact", "/contact"],
];

const services = [
  { title: "Signature Hair Ritual", copy: "Consultation, cut, cleanse and finish tailored to your texture.", price: "From ₹799" },
  { title: "Luminous Skin Facial", copy: "A refined glow ritual using professional, skin-loving formulas.", price: "From ₹1,499" },
  { title: "Modern Bridal Edit", copy: "Camera-ready hair, makeup and draping for your most important day.", price: "From ₹4,999" },
];

const products: [string, string, string][] = [
  ["Moderma Pro Hair Fall Control Shampoo", "/images/moderma-shampoo.webp", "Wheat protein · 300 ml"],
  ["Moderma Pro Biotin Shampoo", "/images/moderma-biotin-shampoo.webp", "Biotin, keratin & aloe vera"],
  ["Moderma Pro Keratin Hair Mask", "/images/moderma-keratin-mask.webp", "Keratin & betaine"],
  ["Moderma Pro Gold Serum", "/images/moderma-gold-serum.webp", "24K gold infused beauty oil"],
  ["Moderma Pro Korean Day Cream", "/images/moderma-day-cream.webp", "Daily moisture & glow"],
  ["Moderma Pro Brightening Toner", "/images/moderma-toner.webp", "Cucumber brightening mist"],
];

function FreshaLink({ children = "Book Now", className = "button button-gold" }: { children?: ReactNode; className?: string }) {
  return (
    <a data-testid="fresha-booking-link" className={`${className} tap-target`} href={fresha} target="_blank" rel="noreferrer">
      <span className="action-label">{children}</span>
      <ArrowUpRight size={16} />
    </a>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={whatsappDefaultUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="header-inner">
        <Link data-testid="brand-home-link" className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">M<span>•</span>L</span>
          <span className="brand-copy"><b>Modern</b><small>Luxury Salon</small></span>
        </Link>
        <nav data-testid="desktop-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {nav.map(([label, path]) => (
            <Link
              data-testid={`nav-${label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}-link`}
              className={location.pathname === path ? "active" : ""}
              key={path}
              to={path}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <FreshaLink className="button button-gold header-book" />
          <button data-testid="mobile-menu-button" className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer data-testid="site-footer" className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">M<span>•</span>L</span>
            <span className="brand-copy"><b>Modern</b><small>Luxury Salon</small></span>
          </div>
          <p className="footer-note">An elevated everyday ritual for hair, beauty and self-expression in East Delhi.</p>
        </div>
        <div>
          <p className="eyebrow">Visit us</p>
          <address data-testid="nap-address">
            60 Feet Road, Ram Nagar<br />Shahdara, East Delhi, Delhi 110032
          </address>
          <a data-testid="directions-link" className="text-link" href="https://www.google.com/maps/search/?api=1&query=60+Feet+Road+Ram+Nagar+Shahdara+Delhi" target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={14} />
          </a>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <a data-testid="nap-phone" className="footer-contact" href="tel:+919990428329">
            <Phone size={16} /> +91 99904 28329
          </a>
          <p className="footer-hours"><Clock3 size={16} /> Mon–Sun · 10:00–21:00</p>
          <a data-testid="instagram-link" className="footer-contact" href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={16} /> @modernluxurysalon
          </a>
          <p className="footer-instagram-note">
            Follow our transformations on Instagram:{" "}
            <a data-testid="instagram-follow-link" href="https://instagram.com" target="_blank" rel="noreferrer">@newmodernluxurysalon</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Modern Luxury Salon</span>
        <span>Shahdara · East Delhi</span>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="mobile-book"><FreshaLink>Book an appointment</FreshaLink></div>
      <WhatsAppFloat />
      <Footer />
    </>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {copy && <p className="lede">{copy}</p>}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow reveal">Hair · Beauty · Ritual</p>
          <h1 className="reveal delay-1">Modern Luxury Salon <em>| Premium Hair Coloring, Nails &amp; Luxury Beauty Salon in Shahdara, East Delhi</em></h1>
          <p className="lede reveal delay-2">A considered beauty experience on 60 Feet Road, where expert hands, beautiful products and a slower pace meet.</p>
          <div className="hero-actions reveal delay-3">
            <FreshaLink>Book Your Visit</FreshaLink>
            <Link data-testid="explore-services-link" className="text-link" to="/hair-care">Explore the salon <ChevronRight size={16} /></Link>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Ram Nagar, Shahdara</span>
            <span><Sparkles size={15} /> East Delhi&apos;s beauty address</span>
          </div>
        </div>
        <div className="hero-image-wrap reveal delay-2">
          <img data-testid="hero-image" className="hero-image" src="/images/salon-hero.webp" alt="Modern Luxury Salon interior in Shahdara" />
          <div className="image-caption">01 <span>THE HOUSE OF MODERN</span></div>
        </div>
      </section>

      <section className="dark-band">
        <div className="band-intro">
          <p className="eyebrow">The experience</p>
          <h2>Luxury, made personal.</h2>
        </div>
        <div className="experience-grid">
          {[["01", "Expert hands", "Personalised artistry from a team that listens first."], ["02", "Quiet confidence", "A calm, elevated space just minutes from Shahdara Metro Station."], ["03", "Modern rituals", "Thoughtful services and Moderma Pro care for every texture."]].map(([n, t, c]) => (
            <article data-testid={`experience-${n}`} key={n}>
              <span className="number">{n}</span>
              <h3>{t}</h3>
              <p>{c}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="light-section">
        <div className="section-header">
          <SectionIntro eyebrow="Signature menu" title="Made for your moment." copy="Whether it is a quiet refresh or a full transformation, our Shahdara salon team makes every detail feel considered." />
          <Link data-testid="all-services-link" className="text-link" to="/hair-care">View all services <ArrowUpRight size={15} /></Link>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <article data-testid={`service-card-${i + 1}`} className="service-card" key={s.title}>
              <span className="service-index">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <strong>{s.price}</strong>
              <FreshaLink className="card-link">Reserve <ArrowUpRight size={14} /></FreshaLink>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <p className="eyebrow">Your new ritual</p>
        <blockquote>&ldquo;Beauty is not an occasion here. It is the way you leave feeling.&rdquo;</blockquote>
        <FreshaLink>Find your ritual</FreshaLink>
      </section>
    </>
  );
}

function HairCare() {
  const items: [string, string][] = [
    ["Haircut & finish", "₹399"], ["Luxury styling", "₹799"], ["Global hair colour", "₹2,499"],
    ["Keratin smoothening", "₹3,999"], ["Head, neck & shoulder massage", "₹599"], ["Bridal hair edit", "₹1,899"],
  ];
  return (
    <div className="page-shell">
      <SectionIntro eyebrow="Hair care · Shahdara" title="Hair that feels like you." copy="From a precision cut to a complete colour transformation, our stylists bring a modern eye to every texture in East Delhi." />
      <div className="split-menu">
        <div className="dark-panel">
          <p className="eyebrow">The edit</p>
          <h2>Beautifully <em>considered.</em></h2>
          <p>Our hair rituals begin with a conversation and end with a finish that belongs to you.</p>
          <FreshaLink>Book hair care</FreshaLink>
        </div>
        <div className="price-list">
          {items.map(([name, price], i) => (
            <div data-testid={`hair-service-${i + 1}`} className="price-row" key={name}>
              <span><small>0{i + 1}</small>{name}</span>
              <b>{price}</b>
            </div>
          ))}
        </div>
      </div>
      <div className="local-note">
        <MapPin size={20} />
        <p><b>Find us on 60 Feet Road, Ram Nagar.</b><br />A short ride from Shahdara Metro Station, our salon is designed for a calm pause in the heart of East Delhi.</p>
      </div>
    </div>
  );
}

function Beauty() {
  return (
    <div className="page-shell">
      <SectionIntro eyebrow="Nails & beauty aesthetics" title="The finishing touches." copy="Polished nails, luminous skin and makeup that lets you stay unmistakably yourself." />
      <div className="beauty-grid">
        <article className="beauty-feature">
          <div>
            <p className="eyebrow">01 · Skin</p>
            <h2>Glow, not glitter.</h2>
            <p>Hydrating facials and de-tan rituals for a fresh, rested finish.</p>
            <FreshaLink>Book skin care</FreshaLink>
          </div>
          <div className="gold-orb">✦</div>
        </article>
        <div className="beauty-list">
          {[["Nail rituals", "Classic manicure, gel finish & extensions", "From ₹699"], ["Bridal & party makeup", "HD, airbrush, engagement & draping", "From ₹2,499"], ["Lash & brow edit", "Threading, shaping & tinting", "From ₹299"]].map(([t, c, p], i) => (
            <article data-testid={`beauty-service-${i + 1}`} key={t}>
              <span>0{i + 1}</span>
              <div><h3>{t}</h3><p>{c}</p></div>
              <b>{p}</b>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function Shop() {
  return (
    <div className="page-shell">
      <SectionIntro eyebrow="Moderma Pro · Delivered in Delhi" title="Your salon ritual, at home." copy="Professional-grade hair and skin care, selected by our team. Shop with confidence and discover your everyday luxury." />
      <div className="product-grid">
        {products.map(([name, image, copy], i) => (
          <article data-testid={`product-card-${i + 1}`} className="product-card" key={name}>
            <div className="product-image"><img src={image} alt={name} /></div>
            <div className="product-info">
              <p className="eyebrow">Moderma Pro</p>
              <h3>{name}</h3>
              <p>{copy}</p>
              <a data-testid={`buy-now-${i + 1}`} className="card-link product-order-btn" href={whatsappProductUrl} target="_blank" rel="noreferrer">
                <span className="action-label">Order Now</span><ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="page-shell">
      <SectionIntro eyebrow="Meet the team" title="The people behind the ritual." copy="Warm, highly trained and quietly exacting. Our artists make the Modern experience what it is." />
      <div className="team-grid">
        {[["01", "Nisha Aggarwal", "Founder · Creative Director", "A belief that the best beauty experiences feel personal, never prescriptive."], ["02", "The Hair Atelier", "Colour · Cut · Texture", "A collective of texture-aware stylists who see the detail in every strand."], ["03", "The Beauty Studio", "Skin · Nails · Makeup", "Thoughtful beauty artists for a glow that looks and feels entirely yours."]].map(([n, t, r, c]) => (
          <article data-testid={`team-member-${n}`} className="team-card" key={n}>
            <div className="team-avatar">{n}</div>
            <p className="eyebrow">{r}</p>
            <h2>{t}</h2>
            <p>{c}</p>
            <FreshaLink className="card-link">Meet in the studio <ArrowUpRight size={14} /></FreshaLink>
          </article>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-shell contact-page">
      <SectionIntro eyebrow="Contact · Shahdara, East Delhi" title="Come find your new favourite place." copy="Visit us on 60 Feet Road in Ram Nagar, close to Shahdara Metro Station. We cannot wait to welcome you." />
      <div className="contact-grid">
        <div className="contact-card">
          <p className="eyebrow">The salon</p>
          <h2>Modern Luxury Salon</h2>
          <address data-testid="contact-address">
            60 Feet Road, Ram Nagar<br />Shahdara, East Delhi<br />Delhi 110032
          </address>
          <a data-testid="contact-phone" className="big-contact" href="tel:+919990428329">+91 99904 28329</a>
          <div className="contact-actions">
            <FreshaLink>Book an appointment</FreshaLink>
            <a data-testid="contact-map-link" className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=60+Feet+Road+Ram+Nagar+Shahdara+Delhi" target="_blank" rel="noreferrer">Open map <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="map-card">
          <div className="map-grid"><MapPin size={34} /></div>
          <p className="eyebrow">Your local landmark</p>
          <h3>60 Feet Road<br />× Ram Nagar</h3>
          <p>Minutes from Shahdara Metro Station</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hair-care" element={<HairCare />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
