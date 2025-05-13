
import React from 'react';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import UserTypesSection from '../components/home/UserTypesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import DatasetsSection from '../components/home/DatasetsSection';
import NotebooksSection from '../components/home/NotebooksSection';
import ModelsSection from '../components/home/ModelsSection';
import LearnCompetitionsSection from '../components/home/LearnCompetitionsSection';
import CompetitionsSection from '../components/home/CompetitionsSection';
import SolutionWriteupsSection from '../components/home/SolutionWriteupsSection';
import CoursesSection from '../components/home/CoursesSection';
import CommunitySection from '../components/home/CommunitySection';
import KagglersSection from '../components/home/KagglersSection';
import CommunityStatsSection from '../components/home/CommunityStatsSection';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <UserTypesSection />
        <ProjectsSection />
        <DatasetsSection />
        <NotebooksSection />
        <ModelsSection />
        <LearnCompetitionsSection />
        <CompetitionsSection />
        <SolutionWriteupsSection />
        <CoursesSection />
        <KagglersSection />
        <CommunitySection />
        <CommunityStatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
