import { useState } from 'react';
import { ArrowRight, BookOpen, BriefcaseBusiness, Globe2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitPublicForm } from '../lib/supabase';

const icons = { education: BookOpen, venture: BriefcaseBusiness, missions: Globe2 };
export default function ArmPage({ id, eyebrow, title, description, focus, opportunities, image, cta, formTitle, table }) {
  const Icon = icons[id];
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault(); setBusy(true); setStatus('');
    try { await submitPublicForm(table, { ...form, arm: id }); setStatus('Thank you. Your submission has been received.'); setForm({ name:'', email:'', phone:'', message:'' }); }
    catch (err) { setStatus(err.message); }
    finally { setBusy(false); }
  }
  return <>
    <section className={`arm-hero ${id}`}><div className="container arm-hero-grid"><div><div className="eyebrow"><Icon size={16}/>{eyebrow}</div><h1>{title}</h1><p>{description}</p><a href="#connect" className="button button-light">{cta} <ArrowRight size={17}/></a></div><div className="arm-visual" style={{backgroundImage:`linear-gradient(0deg,rgba(9,28,23,.25),rgba(9,28,23,.05)),url(${image})`}}><span>{id === 'education' ? 'Equipping leaders' : id === 'venture' ? 'Serving communities' : 'Taking the mission forward'}</span></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">OUR FOCUS</span><h2>What this arm is committed to</h2><p>Explore the priorities and opportunities within this division.</p></div><div className="feature-grid">{focus.map((item,i)=><article className="feature-card" key={item.title}><span className="feature-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="section section-soft"><div className="container two-col"><div><span className="eyebrow">GET INVOLVED</span><h2>There is a place for you in this work.</h2><p>We welcome individuals, churches, institutions and organizations who share a commitment to service, integrity and meaningful transformation.</p><ul className="check-list">{opportunities.map(x=><li key={x}><CheckCircle2 size={18}/>{x}</li>)}</ul><Link to="/contact" className="text-link">Speak with our team <ArrowRight size={16}/></Link></div><div className="callout-card"><h3>Part of one bigger mission</h3><p>This division operates as an arm of IMMAMARY MINISTRIES INTERNATIONAL, connected by a shared institutional vision and commitment.</p><Link to="/about" className="button button-dark">About the parent organization</Link></div></div></section>
    <section className="section" id="connect"><div className="container form-layout"><div><span className="eyebrow">TAKE THE NEXT STEP</span><h2>{formTitle}</h2><p>Send an enquiry to express your interest. Once the online application system is activated, submissions will be routed to the appropriate arm manager.</p></div><form className="form-card" onSubmit={handleSubmit}><label>Full name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your full name"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Phone number<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your phone number"/></label><label>How can we help?<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us a little about your interest"/></label><button className="button button-dark" disabled={busy}>{busy?'Submitting…':'Submit enquiry'} <ArrowRight size={16}/></button>{status && <p className="form-status" role="status">{status}</p>}</form></div></section>
  </>;
}
