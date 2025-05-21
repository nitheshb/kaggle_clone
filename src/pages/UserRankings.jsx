// function UserRankings() {
//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold">UserRankings</h1>
//       <p className="mt-4">This is the UserRankings page.</p>
//     </div>
//   );
// }

import React from 'react';
import UserRankings from "../components/UserRankings/UserRankings";
import CompetitionNavbarA from '../components/layout/NavbarA'; 

export default function UserRankingsPage() {
  return (
    <div className="min-h-screen">
        <CompetitionNavbarA visible={true} />
    <main className="pt-20 px-6 pb-10">
      <UserRankings />
      </main>
    </div>
  );
}

