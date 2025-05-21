import React from 'react';
import KaggleDocumentation from '../components/Documentation/Documentation';
import CompetitionNavbarA from '../components/layout/NavbarA'; // Adjust the path if needed

export default function DocumentationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top navbar */}
      <CompetitionNavbarA visible={true} />

      {/* Main content with top padding to offset fixed navbar height */}
      <main className="pt-20 px-6 pb-10">
        <KaggleDocumentation />
      </main>
    </div>
  );
}
