import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { DigitalApplications } from './pages/DigitalApplications';
import { Consulting } from './pages/Consulting';
import { Cybersecurity } from './pages/Cybersecurity';
import { TechServices } from './pages/TechServices';
import { EcoConstruction } from './pages/EcoConstruction';
import { Finance } from './pages/Finance';
import { Veridia } from './pages/projects/Veridia';
import { AFGRID } from './pages/projects/AFGRID';
import { AgrAIA } from './pages/AgrAIA';
import { About } from './pages/About';
import { Vision } from './pages/Vision';
import { Sectors } from './pages/Sectors';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services/digital-applications', Component: DigitalApplications },
      { path: 'services/consulting', Component: Consulting },
      { path: 'services/cybersecurity', Component: Cybersecurity },
      { path: 'services/tech-services', Component: TechServices },
      { path: 'services/eco-construction', Component: EcoConstruction },
      { path: 'services/finance', Component: Finance },
      { path: 'services/AgrAIA', Component: AgrAIA },
      { path: 'projects/veridia', Component: Veridia },
      { path: 'projects/AFGRID', Component: AFGRID },
      { path: 'projects/AgrAIA', Component: AgrAIA },
      { path: 'about', Component: About },
      { path: 'vision', Component: Vision },
      { path: 'sectors', Component: Sectors },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
