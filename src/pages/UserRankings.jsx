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


export default function UserRankingsPage() {
  return (
    <div className="min-h-screen bg-white-100 px-6 py-8">
      <UserRankings />
    </div>
  );
}

