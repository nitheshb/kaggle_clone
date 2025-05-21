
import React from 'react';

import CompetitionNavbarA from '../components/layout/NavbarA'; 
import KaggleTeamPage from '../components/Team/Team';

export default function TeamPage() {
  return (
    <div className="min-h-screen">
        <CompetitionNavbarA visible={true} />
    <main className="pt-20 px-6 pb-10">
      <KaggleTeamPage />
      </main>
    </div>
  );
}
