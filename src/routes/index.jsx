import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Competitions from '../pages/Competitions';
import Datasets from '../pages/Datasets';
import Models from '../pages/Models';
import Code from '../pages/Code';
import Discussions from '../pages/Discussions';
import Courses from '../pages/Courses';
import Learn from '../pages/Learn';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/competitions" element={<Layout><Competitions /></Layout>} />
      <Route path="/datasets" element={<Layout><Datasets /></Layout>} />
      <Route path="/models" element={<Layout><Models /></Layout>} />
      <Route path="/code" element={<Layout><Code /></Layout>} />
      <Route path="/discussions" element={<Layout><Discussions /></Layout>} />
      <Route path="/courses" element={<Layout><Courses /></Layout>} />
      <Route path="/learn" element={<Layout><Learn /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;