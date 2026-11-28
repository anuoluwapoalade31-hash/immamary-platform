import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BriefcaseBusiness, Globe2, HeartHandshake, MoveUpRight, ShieldCheck, Sprout, Users } from 'lucide-react';
import { organization } from '../lib/config';

const photos = {
  education: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
  venture: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
  missions: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85'
};
const icons = [BookOpen, BriefcaseBusiness, Globe2];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-shade" />
      <div className="container hero-content">
        <span className="eyebrow eyebrow-light">FAITH IN ACTION <i/> SERVICE WITH PURPOSE</span>
        <h1>Faith that moves<br/><em>people into action.</em></h1>
        <p>Recruiting, mobilizing, training and sending people to serve God and communities through missions, leadership development and practical social impact.</p>
        <div className="hero-actions">
          <Link to="/about" className="button button-gold">Discover IMMAMARY <ArrowRight size={17}/></Link>
          <Link to="/get-involved" className="button button-outline">Get involved</Link>
        </div>
        <div className="hero-note"><span/> A Christian, non-governmental organization in Nigeria</div>
      </div>
      <div className="hero-side-note">KINGDOM PURPOSE <b>·</b> COMMUNITY TRANSFORMATION</div>
    </section>

    <section className="intro-strip">
      <div className="container intro-grid">
        <span className="eyebrow">OUR CALLING</span>
        <h2>Proclaim the Gospel.<br/><em>Demonstrate its love.</em></h2>
        <p>We believe the message of Christ should be expressed through compassionate service, responsible leadership and practical responses to community needs.</p>
      </div>
    </section>

    <section className="section arms-section">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><span className="eyebrow">ONE SHARED VISION</span><h2>Three arms.<br/>A connected mission.</h2></div>
          <p>Each arm has a distinct focus, working together to equip people, strengthen communities and create opportunities for meaningful service.</p>
        </div>
        <div className="arm-cards">
          {organization.arms.map((arm, i) => {
            const Icon = icons[i];
            return <article className="arm-card" key={arm.id}>
              <Link to={arm.path} className="arm-card-image" style={{backgroundImage:`url(${photos[arm.id]})`}} aria-label={`Explore ${arm.name}`}/>
              <div className="arm-card-body">
                <div className="arm-icon"><Icon size={22}/></div>
                <span className="eyebrow">{arm.label} ARM</span>
                <h3>{arm.name}</h3>
                <p>{arm.short}</p>
                <Link to={arm.path} className="text-link">Explore this arm <MoveUpRight size={16}/></Link>
              </div>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="principles-section">
      <div className="container principles-grid">
        <div className="principles-intro">
          <span className="eyebrow eyebrow-light">HOW WE SERVE</span>
          <h2>Grounded in faith.<br/><em>Committed to people.</em></h2>
          <p>Our work brings together spiritual formation, human dignity and practical community engagement.</p>
          <Link to="/about" className="text-link text-link-light">Our mission and values <ArrowRight size={16}/></Link>
        </div>
        <div className="principle-list">
          <article><span>01</span><div><ShieldCheck/><h3>Integrity & stewardship</h3><p>Serving with accountability, transparency and responsible use of resources.</p></div></article>
          <article><span>02</span><div><Users/><h3>People-centred service</h3><p>Respecting the dignity, voice and participation of the communities we serve.</p></div></article>
          <article><span>03</span><div><Sprout/><h3>Holistic transformation</h3><p>Connecting spiritual growth with practical action and sustainable development.</p></div></article>
        </div>
      </div>
    </section>

    <section className="section founder-preview">
      <div className="container founder-preview-grid">
        <div className="founder-preview-image">
          <img src={`${import.meta.env.BASE_URL}founders-emmanuel-mary-alade.jpg`} alt="IMMAMARY founders Emmanuel and Mary Alade"/>
          <span>FOUNDERS · IMMAMARY MINISTRIES INTERNATIONAL</span>
        </div>
        <div className="founder-preview-copy">
          <span className="eyebrow">FOUNDERS & LEADERSHIP</span>
          <h2>A vision shaped by faith, service and transformation.</h2>
          <p>Founded by Emmanuel and Mary Alade, IMMAMARY MINISTRIES INTERNATIONAL is committed to equipping people and mobilizing practical responses to the needs of communities.</p>
          <p>Learn more about the organization’s leadership, ministry experience and guiding convictions.</p>
          <Link to="/leadership" className="button button-dark">Meet our founder <ArrowRight size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="impact-band">
      <div className="container impact-grid">
        <div><span className="eyebrow eyebrow-light">COMMUNITY TRANSFORMATION</span><h2>Service that reaches<br/><em>beyond the walls.</em></h2></div>
        <p>Our approach includes missions engagement, social welfare, leadership formation and practical initiatives that respond to local priorities. We seek to work alongside communities and partners, not simply speak on their behalf.</p>
      </div>
    </section>

    <section className="cta-section">
      <div className="container cta-inner">
        <HeartHandshake size={34}/>
        <span className="eyebrow">TAKE THE NEXT STEP</span>
        <h2>Be part of the mission.</h2>
        <p>Volunteer, explore training, share an idea or start a conversation about partnership.</p>
        <div className="hero-actions">
          <Link to="/get-involved" className="button button-gold">Find your place <ArrowRight size={17}/></Link>
          <Link to="/contact" className="button button-outline-dark">Contact us</Link>
        </div>
      </div>
    </section>
  </>;
}
