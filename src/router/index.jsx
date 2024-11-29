//配置路由
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ActivityPage from '../pages/ActivityPage';
import ContactPage from '../pages/ContactPage';
import ProjectPage from '../pages/ProjectPage';

const routers = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/activity" element={<ActivityPage />} />
    <Route path="/projects" element={<ProjectPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default routers;