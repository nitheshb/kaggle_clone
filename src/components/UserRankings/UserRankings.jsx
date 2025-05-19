// import { useState } from 'react';
// import { Search, Award, Database, Book, MessageSquare, Info } from 'lucide-react';

// export default function KaggleRankings() {
//   const [activeTab, setActiveTab] = useState('Competitions');

//   const tabs = ['Competitions', 'Datasets', 'Notebooks', 'Discussions'];
  
//   const tiers = [
//     { name: 'Grandmasters', count: 362, color: 'text-yellow-400', bgColor: 'bg-yellow-100', icon: <Award size={24} className="text-yellow-400" /> },
//     { name: 'Masters', count: 2201, color: 'text-orange-500', bgColor: 'bg-orange-100', icon: <Award size={24} className="text-orange-500" /> },
//     { name: 'Experts', count: 10672, color: 'text-purple-500', bgColor: 'bg-purple-100', icon: <Award size={24} className="text-purple-500" /> },
//     { name: 'Contributors', count: 68286, color: 'text-blue-400', bgColor: 'bg-blue-100', icon: <Award size={24} className="text-blue-400" /> },
//     { name: 'Novices', count: 123135, color: 'text-green-500', bgColor: 'bg-green-100', icon: <Award size={24} className="text-green-500" /> }
//   ];

// const users = [
//   { rank: 1, user: 'Dieter', joined: 'joined 7 years ago', gold: 45, silver: 17, bronze: 3, points: 164122 },
//   { rank: 2, user: 'c-number', joined: 'joined 4 years ago', gold: 10, silver: 2, bronze: 0, points: 151935 },
//   { rank: 3, user: 'hyd', joined: 'joined 3 years ago', gold: 12, silver: 13, bronze: 0, points: 122772 },
//   { rank: 4, user: 'Raja Biswas', joined: 'joined 7 years ago', gold: 10, silver: 5, bronze: 1, points: 112159 },
//   { rank: 5, user: 'tascj', joined: 'joined 10 years ago', gold: 17, silver: 11, bronze: 3, points: 99507 },
//   { rank: 6, user: 'yuanzhe zhou', joined: 'joined 5 years ago', gold: 7, silver: 11, bronze: 8, points: 96884 },
//   { rank: 7, user: 'Psi', joined: 'joined 13 years ago', gold: 37, silver: 10, bronze: 0, points: 91917 },
//   { rank: 8, user: 'Pascal Pfeiffer', joined: 'joined 6 years ago', gold: 26, silver: 12, bronze: 3, points: 88792 },
//   { rank: 9, user: 'Darragh', joined: 'joined 11 years ago', gold: 27, silver: 12, bronze: 3, points: 88258 },
//   { rank: 10, user: 'Mathurin Aché', joined: 'joined 14 years ago', gold: 10, silver: 48, bronze: 57, points: 80308 },
//   { rank: 11, user: 'sayoulala', joined: 'joined 6 years ago', gold: 6, silver: 6, bronze: 1, points: 79540 },
//   { rank: 12, user: 'charmq', joined: 'joined 6 years ago', gold: 18, silver: 11, bronze: 7, points: 77746 },
//   { rank: 13, user: 'Ahmet Erdem', joined: 'joined 9 years ago', gold: 28, silver: 29, bronze: 6, points: 75854 },
//   { rank: 14, user: 'Takoi', joined: 'joined 9 years ago', gold: 16, silver: 15, bronze: 3, points: 70877 },
// ];


//   return (
//     <div className="bg-white min-h-screen">
    

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Kaggle Rankings</h1>
        
//         {/* Tabs */}
//         <div className="border-b border-gray-200 mb-8">
//           <nav className="-mb-px flex space-x-8">
//             {tabs.map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === tab
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//         </div>
        
//         {/* User Categories */}
//         <div className="flex justify-between mb-8 flex-wrap">
//           {tiers.map((tier, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <div className={`p-2 rounded-full ${tier.bgColor} mr-2`}>
//                 {tier.icon}
//               </div>
//               <div>
//                 <div className="text-xl font-bold">{tier.count.toLocaleString()}</div>
//                 <div className="text-gray-600">{tier.name}</div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Learn more link */}
//         <div className="flex justify-end mb-4">
//           <a href="#" className="text-blue-500 hover:underline flex items-center">
//             <span>Learn more about rankings</span>
//             <Info size={16} className="ml-1" />
//           </a>
//         </div>
        
//         {/* Rankings Table */}
//        <div className="overflow-x-auto max-h-[60vh] overflow-y-auto border rounded-md">

//           <table className="min-w-full">
//             <thead>
//               <tr className="border-b border-gray-200">
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Rank</th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Tier</th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">User</th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-500"></th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Medals</th>
//                 <th className="py-3 px-4 text-right text-sm font-medium text-gray-500">Points</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
//                   <td className="py-4 px-4 text-sm">{user.rank}</td>
//                   <td className="py-4 px-4">
//                     <div className="p-1 rounded-full bg-yellow-100 inline-block">
//                       <Award size={16} className="text-yellow-400" />
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-sm font-medium">{user.user}</td>
//                   <td className="py-4 px-4 text-sm text-gray-500">{user.joined}</td>
//                   <td className="py-4 px-4">
//                     <div className="flex items-center">
//                       <div className="flex items-center mr-2">
//                         <div className="w-5 h-5 rounded-full bg-yellow-400 text-white flex items-center justify-center text-xs mr-1">G</div>
//                         <span className="text-sm">{user.gold}</span>
//                       </div>
//                       <div className="flex items-center mr-2">
//                         <div className="w-5 h-5 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs mr-1">S</div>
//                         <span className="text-sm">{user.silver}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <div className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs mr-1">B</div>
//                         <span className="text-sm">{user.bronze}</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-right font-medium">{user.points.toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }



import { useState } from 'react';
import { Award, Database, Book, MessageSquare, Info } from 'lucide-react';

export default function KaggleRankings() {
  const [activeTab, setActiveTab] = useState('Competitions');

  const tabs = ['Competitions', 'Datasets', 'Notebooks', 'Discussions'];
  
  // Updated tier counts that match the screenshots for each tab
  const tierCounts = {
    Competitions: [
      { name: 'Grandmasters', count: 362, color: 'text-yellow-400', bgColor: 'bg-yellow-100', icon: <Award size={24} className="text-yellow-400" /> },
      { name: 'Masters', count: 2201, color: 'text-orange-500', bgColor: 'bg-orange-100', icon: <Award size={24} className="text-orange-500" /> },
      { name: 'Experts', count: 10672, color: 'text-purple-500', bgColor: 'bg-purple-100', icon: <Award size={24} className="text-purple-500" /> },
      { name: 'Contributors', count: 68286, color: 'text-blue-400', bgColor: 'bg-blue-100', icon: <Award size={24} className="text-blue-400" /> },
      { name: 'Novices', count: 123135, color: 'text-green-500', bgColor: 'bg-green-100', icon: <Award size={24} className="text-green-500" /> }
    ],
    Datasets: [
      { name: 'Grandmasters', count: 108, color: 'text-yellow-400', bgColor: 'bg-yellow-100', icon: <Award size={24} className="text-yellow-400" /> },
      { name: 'Masters', count: 154, color: 'text-orange-500', bgColor: 'bg-orange-100', icon: <Award size={24} className="text-orange-500" /> },
      { name: 'Experts', count: 2817, color: 'text-purple-500', bgColor: 'bg-purple-100', icon: <Award size={24} className="text-purple-500" /> },
      { name: 'Contributors', count: 6903, color: 'text-blue-400', bgColor: 'bg-blue-100', icon: <Award size={24} className="text-blue-400" /> },
      { name: 'Novices', count: 3830, color: 'text-green-500', bgColor: 'bg-green-100', icon: <Award size={24} className="text-green-500" /> }
    ],
    Notebooks: [
      { name: 'Grandmasters', count: 184, color: 'text-yellow-400', bgColor: 'bg-yellow-100', icon: <Award size={24} className="text-yellow-400" /> },
      { name: 'Masters', count: 839, color: 'text-orange-500', bgColor: 'bg-orange-100', icon: <Award size={24} className="text-orange-500" /> },
      { name: 'Experts', count: 7921, color: 'text-purple-500', bgColor: 'bg-purple-100', icon: <Award size={24} className="text-purple-500" /> },
      { name: 'Contributors', count: 25980, color: 'text-blue-400', bgColor: 'bg-blue-100', icon: <Award size={24} className="text-blue-400" /> },
      { name: 'Novices', count: 20588, color: 'text-green-500', bgColor: 'bg-green-100', icon: <Award size={24} className="text-green-500" /> }
    ],
    Discussions: [
      { name: 'Grandmasters', count: 93, color: 'text-yellow-400', bgColor: 'bg-yellow-100', icon: <Award size={24} className="text-yellow-400" /> },
      { name: 'Masters', count: 145, color: 'text-orange-500', bgColor: 'bg-orange-100', icon: <Award size={24} className="text-orange-500" /> },
      { name: 'Experts', count: 3833, color: 'text-purple-500', bgColor: 'bg-purple-100', icon: <Award size={24} className="text-purple-500" /> },
      { name: 'Contributors', count: 19331, color: 'text-blue-400', bgColor: 'bg-blue-100', icon: <Award size={24} className="text-blue-400" /> },
      { name: 'Novices', count: 2998, color: 'text-green-500', bgColor: 'bg-green-100', icon: <Award size={24} className="text-green-500" /> }
    ]
  };

  // Updated data for different tabs based on screenshots
  const competitionUsers = [
    { rank: 1, user: 'Dieter', joined: 'joined 7 years ago', gold: 45, silver: 17, bronze: 3, points: 164122 },
    { rank: 2, user: 'c-number', joined: 'joined 4 years ago', gold: 10, silver: 2, bronze: 0, points: 151935 },
    { rank: 3, user: 'hyd', joined: 'joined 4 years ago', gold: 12, silver: 13, bronze: 0, points: 122772 },
    { rank: 4, user: 'Raja Biswas', joined: 'joined 7 years ago', gold: 10, silver: 5, bronze: 1, points: 112159 },
    { rank: 5, user: 'tascj', joined: 'joined 10 years ago', gold: 17, silver: 11, bronze: 3, points: 99507 },
    { rank: 6, user: 'yuanzhe zhou', joined: 'joined 5 years ago', gold: 7, silver: 11, bronze: 8, points: 96884 },
    { rank: 7, user: 'Psi', joined: 'joined 13 years ago', gold: 37, silver: 10, bronze: 0, points: 91917 },
    { rank: 8, user: 'Pascal Pfeiffer', joined: 'joined 6 years ago', gold: 26, silver: 12, bronze: 3, points: 88792 },
    { rank: 9, user: 'Darragh', joined: 'joined 11 years ago', gold: 27, silver: 12, bronze: 3, points: 88258 },
    { rank: 10, user: 'Mathurin Aché', joined: 'joined 14 years ago', gold: 10, silver: 48, bronze: 57, points: 80308 },
    { rank: 11, user: 'sayoulala', joined: 'joined 6 years ago', gold: 6, silver: 6, bronze: 1, points: 79540 },
    { rank: 12, user: 'charmq', joined: 'joined 6 years ago', gold: 18, silver: 11, bronze: 7, points: 77746 },
    { rank: 13, user: 'Ahmet Erdem', joined: 'joined 9 years ago', gold: 28, silver: 29, bronze: 6, points: 75854 },
    { rank: 14, user: 'Takoi', joined: 'joined 9 years ago', gold: 16, silver: 15, bronze: 3, points: 70877 },
  ];

  const datasetUsers = [
    { rank: 1, user: 'Kanchana1990', joined: 'joined 3 years ago', gold: 8, silver: 30, bronze: 86, points: 1278 },
    { rank: 2, user: 'Mohamadreza Momeni', joined: 'joined 3 years ago', gold: 13, silver: 52, bronze: 14, points: 1069 },
    { rank: 3, user: 'Umer Haddii', joined: 'joined a year ago', gold: 7, silver: 36, bronze: 2, points: 1047 },
    { rank: 4, user: 'Melissa Monfared', joined: 'joined a year ago', gold: 18, silver: 0, bronze: 0, points: 1014 },
    { rank: 5, user: 'The Devastator', joined: 'joined 3 years ago', gold: 5, silver: 10, bronze: 186, points: 786 },
  ];

  const notebookUsers = [
    { rank: 1, user: 'Chris Deotte', joined: 'joined 7 years ago', gold: 128, silver: 33, bronze: 12, points: 4938 },
    { rank: 2, user: 'Marília Prata', joined: 'joined 6 years ago', gold: 21, silver: 117, bronze: 825, points: 4212 },
    { rank: 3, user: 'Ravi Ramakrishnan', joined: 'joined 4 years ago', gold: 62, silver: 73, bronze: 47, points: 3217 },
    { rank: 4, user: 'Matin Mahmoudi', joined: 'joined 5 years ago', gold: 33, silver: 2, bronze: 0, points: 2854 },
    { rank: 5, user: 'Alexis Cook', joined: 'joined 6 years ago', gold: 36, silver: 9, bronze: 19, points: 2721 },
  ];

  const discussionUsers = [
    { rank: 1, user: 'Ravi Ramakrishnan', joined: 'joined 4 years ago', gold: 341, silver: 240, bronze: 9922, points: 10025 },
    { rank: 2, user: 'Chris Deotte', joined: 'joined 7 years ago', gold: 581, silver: 756, bronze: 6373, points: 8921 },
    { rank: 3, user: 'Marília Prata', joined: 'joined 6 years ago', gold: 280, silver: 237, bronze: 12555, points: 4393 },
    { rank: 4, user: 'hengck23', joined: 'joined 12 years ago', gold: 529, silver: 674, bronze: 4038, points: 4115 },
    { rank: 5, user: 'CPMP', joined: 'joined 12 years ago', gold: 552, silver: 687, bronze: 5415, points: 2838 },
  ];

  // Get the appropriate tier data based on the active tab
  const getTierData = () => {
    return tierCounts[activeTab] || tierCounts.Competitions;
  };

  // Get the appropriate user data based on the active tab
  const getTabData = () => {
    switch(activeTab) {
      case 'Competitions':
        return competitionUsers;
      case 'Datasets':
        return datasetUsers;
      case 'Notebooks':
        return notebookUsers;
      case 'Discussions':
        return discussionUsers;
      default:
        return competitionUsers;
    }
  };

  // Get tier background color based on rank
  const getTierBgColor = (rank) => {
    if (rank <= 3) return 'bg-yellow-100';
    if (rank <= 10) return 'bg-orange-100';
    return 'bg-purple-100';
  };

  // Get tier icon color based on rank
  const getTierIconColor = (rank) => {
    if (rank <= 3) return 'text-yellow-400';
    if (rank <= 10) return 'text-orange-500';
    return 'text-purple-500';
  };

  // Get the icon for the corresponding tab
  const getTabIcon = (tab) => {
    switch(tab) {
      case 'Competitions':
        return <Award className="mr-2" size={16} />;
      case 'Datasets':
        return <Database className="mr-2" size={16} />;
      case 'Notebooks':
        return <Book className="mr-2" size={16} />;
      case 'Discussions':
        return <MessageSquare className="mr-2" size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      <main className="max-w-full px-8 py-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Kaggle Rankings</h1>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 border-b-2 font-medium text-base flex items-center ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {getTabIcon(tab)}
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        {/* User Categories */}
        <div className="flex justify-between mb-8 gap-2">
          {getTierData().map((tier, index) => (
            <div key={index} className="flex items-center">
              <div className={`p-2 rounded-full ${tier.bgColor} mr-2`}>
                {tier.icon}
              </div>
              <div>
                <div className="text-xl font-bold">{tier.count.toLocaleString()}</div>
                <div className="text-gray-600">{tier.name}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Learn more link */}
        <div className="flex justify-end mb-4">
          <a href="#" className="text-blue-500 hover:underline flex items-center">
            <span>Learn more about rankings</span>
            <Info size={16} className="ml-1" />
          </a>
        </div>
        
        {/* Rankings Table */}
        <div className="overflow-x-auto max-h-[60vh] overflow-y-auto border rounded-md">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Rank</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Tier</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">User</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500"></th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Medals</th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-500">Points</th>
              </tr>
            </thead>
            <tbody>
              {getTabData().map((user, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm">{user.rank}</td>
                  <td className="py-4 px-4">
                    <div className={`p-1 rounded-full ${getTierBgColor(user.rank)} inline-block`}>
                      <Award size={16} className={getTierIconColor(user.rank)} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium">{user.user}</td>
                  <td className="py-4 px-4 text-sm text-gray-500">{user.joined}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        <div className="w-5 h-5 rounded-full bg-yellow-400 text-white flex items-center justify-center text-xs mr-1">G</div>
                        <span className="text-sm">{user.gold}</span>
                      </div>
                      <div className="flex items-center mr-2">
                        <div className="w-5 h-5 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs mr-1">S</div>
                        <span className="text-sm">{user.silver}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs mr-1">B</div>
                        <span className="text-sm">{user.bronze}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-medium">{user.points.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}