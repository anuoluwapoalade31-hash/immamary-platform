import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import ArmPage from './pages/ArmPage.jsx';
import Admin from './pages/Admin.jsx';
import { About, Leadership, News, GetInvolved, Contact } from './pages/General.jsx';

const arms = {
  education: {
    id: 'education', eyebrow: 'GLOBAL KINGDOM HARVEST INSTITUTE',
    title: 'Equipping leaders for faithful, effective service.',
    description: 'Biblical formation, leadership development and practical training for Christian leaders, churches and communities.',
    focus: [
      {title:'Biblical and theological formation',text:'Learning rooted in Scripture and Christian discipleship.'},
      {title:'Leadership development',text:'Equipping pastors and ministry leaders with practical skills for service.'},
      {title:'Intercultural mission',text:'Preparing leaders to serve faithfully across cultures and communities.'}
    ],
    opportunities:['Leadership and ministry training','Church and institutional partnerships','Seminars, workshops and learning programmes'],
    image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85',
    cta:'Enquire about training',formTitle:'Connect with the Education Arm',table:'education_enquiries'
  },
  venture: {
    id: 'venture', eyebrow: 'IMMAMARY VENTURES',
    title: 'Practical initiatives for stronger communities.',
    description: 'Developing practical, community-oriented initiatives that connect innovation, enterprise and social impact.',
    focus: [
      {title:'Community enterprise',text:'Supporting practical ideas and initiatives that respond to local needs.'},
      {title:'Innovation for impact',text:'Exploring appropriate technologies and sustainable approaches.'},
      {title:'Partnership and opportunity',text:'Connecting people and organizations around responsible development.'}
    ],
    opportunities:['Share a community-focused idea','Explore partnerships and collaboration','Support practical development initiatives'],
    image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85',
    cta:'Partner with us',formTitle:'Connect with IMMAMARY VENTURES',table:'venture_enquiries'
  },
  missions: {
    id: 'missions', eyebrow: 'MISSIONS & COMMUNITY TRANSFORMATION',
    title: 'Proclaiming the Gospel. Demonstrating God’s love.',
    description: 'Mobilizing people and partners for Christian mission, social welfare and holistic community transformation.',
    focus: [
      {title:'Missions mobilization',text:'Recruiting, preparing and sending people for meaningful mission engagement.'},
      {title:'Social welfare',text:'Responding to vulnerability with dignity, compassion and practical support.'},
      {title:'Community transformation',text:'Working with communities and partners towards lasting, locally grounded change.'}
    ],
    opportunities:['Participate in missions and outreach','Volunteer in community initiatives','Partner on social welfare projects'],
    image:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85',
    cta:'Get involved',formTitle:'Connect with the Missions Arm',table:'missions_enquiries'
  }
};
function Arm({id}) { return <ArmPage {...arms[id]} />; }

export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><Routes><Route element={<Layout/>}>
    <Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="leadership" element={<Leadership/>}/>
    <Route path="education" element={<Arm id="education"/>}/><Route path="venture" element={<Arm id="venture"/>}/><Route path="missions" element={<Arm id="missions"/>}/>
    <Route path="news" element={<News/>}/><Route path="get-involved" element={<GetInvolved/>}/><Route path="contact" element={<Contact/>}/><Route path="admin" element={<Admin/>}/>
    <Route path="*" element={<Home/>}/>
  </Route></Routes></BrowserRouter>;
}