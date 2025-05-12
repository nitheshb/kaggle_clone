
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import UserTypes from '@/components/home/UserTypes';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import CompetitionsSection from '@/components/home/CompetitionsSection';
import CommunitySection from '@/components/home/CommunitySection';
import ResourcesGroupOne from '@/components/home/ResourcesGroupOne';
import ResourcesGroupTwo from '@/components/home/ResourcesGroupTwo';
import KagglersSection from '@/components/home/KagglersSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="with-fixed-navbar">
        <Hero />
        <UserTypes />
        <ProjectShowcase />
        <ResourcesGroupOne />
        <CompetitionsSection />
        <ResourcesGroupTwo />
        <CommunitySection />
        <KagglersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
