import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Competitions from '../pages/Competitions/Competitions';
import Datasets from '../pages/Datasets';
import Models from '../pages/Models';
import Code from '../pages/Code';
import Discussions from '../pages/Discussions';
import Courses from '../pages/Courses';
import Learn from '../pages/Learn/Learn';
import CourseDetail from '../pages/Learn/CourseDetail.jsx';
import NotFound from '../pages/NotFound';
import ImageMatching from '../pages/ImageMatching';
import AllCompetetions from '../pages/AllCompetetions';
import DataVisualization  from '../pages/Learn/DataVisualization/DataVisualization.jsx';
import Featured from '../pages/Featured';
import PredictCaloriesExpenditure from '../pages/PredictCalorieExpenditure';
import YaleUNCCH from '../pages/YaleUNCCH';
import UserRankings from '../pages/UserRankings';
import GeneralForum from '../components/Discussions/GeneralForum'; // ✅ Add this
import CompetitionHost from '../pages/HostCompetition';
import Podcast from '../pages/podcast';
import Terms from '../pages/Terms';
import AuthPage from '../pages/AuthPage'; // ✅ Add this
import DocumentationPage from '../pages/Documentation';
import SupportContact from '../pages/SupportContact'; // ✅ Add this
import KaggleCommunityGuidelines from '../pages/CommunityGuidelines.jsx';
import CommunityGuidelines from '../pages/CommunityGuidelines.jsx';
import Progression from '../pages/Progression.jsx';

// Inside <Routes>:


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/competitions" element={<Layout><Competitions /></Layout>} />
      <Route path="/datasets" element={<Layout><Datasets /></Layout>} />
      <Route path="/models" element={<Layout><Models /></Layout>} />
      <Route path="/code" element={<Layout><Code /></Layout>} />
      <Route path="/discussions" element={<Layout><Discussions /></Layout>} />

      {/* ✅ Restored missing general forum routes */}
      <Route path="/discussions/general" element={<Layout><GeneralForum /></Layout>} />
      <Route path="/forums/general" element={<Layout><GeneralForum /></Layout>} />
      <Route path="/forums/:category" element={<Layout><GeneralForum /></Layout>} />

      <Route path="/user-rankings" element={<Layout><UserRankings /></Layout>} />
      {/* <Route path="/courses" element={<Layout><Courses /></Layout>} /> */}
     <Route path="/user-rankings" element={<Layout><UserRankings /></Layout>} />
     <Route path="/Documentation" element={<Layout><DocumentationPage/></Layout>} />
      <Route path="/courses" element={<Layout><Courses /></Layout>} />
      <Route path="/learn" element={<Layout><Learn /></Layout>} />
      <Route path="/courses/:courseSlug" element={<CourseDetail />} />
      <Route path="/all-competetions" element={<Layout><AllCompetetions /></Layout>} />
      <Route path="/courses/data-visualization" element={<Layout><DataVisualization /></Layout>} />
      <Route path="/featured" element={<Layout><Featured /></Layout>} />
      <Route path="/predict-calorie-expenditure" element={<Layout><PredictCaloriesExpenditure /></Layout>} />
      <Route path="/yale-unc-ch-geophysical-waveform-inversion" element={<Layout><YaleUNCCH /></Layout>} />
      <Route path="/image-matching-challenge-2025" element={<Layout><ImageMatching /></Layout>} />
      <Route path="/competitions/predict-podcast-listening-time" element={<Layout><Podcast /></Layout>} />
      <Route path="/host-competition" element={<Layout><CompetitionHost /></Layout>} />
      <Route path="/Terms" element={<Layout><Terms /></Layout>} />
      <Route path="/support/contact" element={<Layout><SupportContact /></Layout>} />
      <Route path="/community-guidelines" element={<Layout><CommunityGuidelines /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/progression" element={<Layout><Progression /></Layout>} />

      <Route path="/competitions/image-matching-challenge-2025" element={<Layout><ImageMatching /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;
