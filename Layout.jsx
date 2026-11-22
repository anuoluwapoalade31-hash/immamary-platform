import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight, HeartHandshake } from 'lucide-react';
import { organization } from '../lib/config';

export function Layout() {
  const [open, setOpen] = useState(false);
  const [armsOpen, setArmsOpen] = useState(false);
  const close = () => { setOpen(false); setArmsOpen(false); };
  return <>
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">IM</span>
          <span><strong>IMMAMARY</strong><small>MINISTRIES INTERNATIONAL</small></span>
        </Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/leadership" onClick={close}>Leadership</NavLink>
          <div className="nav-dropdown">
            <button className="nav-drop-trigger" onClick={() => setArmsOpen(!armsOpen)}>Our Arms <ChevronDown size={15}/></button>
            <div className={armsOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
              {organization.arms.map(arm => <Link key={arm.id} to={arm.path} onClick={close}><b>{arm.label}</b><small>{arm.name}</small></Link>)}
            </div>
          </div>
          <NavLink to="/news" onClick={close}>News & Events</NavLink>
          <NavLink to="/get-involved" onClick={close}>Get Involved</NavLink>
          <Link to="/contact" className="nav-contact" onClick={close}>Contact us <ArrowUpRight size={15}/></Link>
        </nav>
      </div>
    </header>
    <main><Outlet/></main>
    <footer className="footer">
      <div className="container footer-grid">
        <div><Link to="/" className="brand footer-brand"><span className="brand-mark">IM</span><span><strong>IMMAMARY</strong><small>MINISTRIES INTERNATIONAL</small></span></Link><p>Advancing God’s Kingdom through missions, leadership development, social welfare and holistic community transformation.</p></div>
        <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/leadership">Founders & leadership</Link><Link to="/education">Education arm</Link><Link to="/venture">Venture arm</Link><Link to="/missions">Missions arm</Link></div>
        <div><h4>Connect</h4><Link to="/get-involved">Get involved</Link><Link to="/news">News & events</Link><Link to="/contact">Contact</Link><a href={`mailto:${organization.email}`}>{organization.email}</a><Link to="/admin">Administration</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {organization.name}. All rights reserved.</span><span>{organization.tagline}</span></div>
    </footer>
    <a className="floating-help" href="/contact" aria-label="Contact IMMAMARY"><HeartHandshake size={20}/></a>
  </>;
}
