import { useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Nate Keating",
    title: "Kaggle Lead",
    image: "nate.jpg",
    bio: "Before leading the Kaggle team, Nate led the Product at Kaggle. Prior to joining Kaggle, Nate was senior PM leading MLOps products in Google Cloud. He holds a B.S. in Economics from Duke University. He is honored to work with this team and with this incredible community."
  },
  {
    id: 2,
    name: "Jeff Moser",
    title: "Chief Architect",
    image: "jeff.jpg",
    bio: "Good software is a game of inches where polishing is very important. My main strategy is to invest a lot of blood, sweat, and tears into a product and then multiply its value by the number of its happy users."
  },
  {
    id: 3,
    name: "William Cukierski",
    title: "Head of Competitions and Data Scientist",
    image: "will.jpg",
    bio: "Will Cukierski has a bachelor's degree in physics from Cornell University and a Ph.D. in biomedical engineering from Rutgers, where he studied applications of machine learning to cancer research. He has published on graph theory, dimensionality reduction, clustering, and image analysis."
  },
  {
    id: 4,
    name: "Jerad Rose",
    title: "Developer",
    image: "jerad.jpg",
    bio: "Jerad is a full-stack software engineer with a focus on building highly interactive web applications. Before jumping on board the Kaggle train, he was an architect for Humana. He has a drive for building online communities, founding & running his own web community since 2002."
  },
  {
    id: 5,
    name: "Meghan O'Connell",
    title: "Strategy and Operations",
    image: "meghan.jpg",
    bio: "Meghan graduated from Santa Clara University with a double bachelor's degree in Economics and Marketing. Prior to joining Kaggle, Meghan worked as the Manager of Professional Services for a boutique outsourcing firm, where she was responsible for scaling project management operations."
  },
  {
    id: 6,
    name: "Myles O'Neill",
    title: "Designer",
    image: "myles.jpg",
    bio: "Myles is passionate about solving complex problems using elegant designs. He holds a bachelor's degree in computer science and genetics from the Australian National University. Myles likes to create things in his spare time. He recently Kickstarted and published his own board game."
  },
  {
    id: 7,
    name: "Meg Risdal",
    title: "Product Manager",
    image: "meg.jpg",
    bio: "Meg holds Master's degrees in linguistics from UCLA and NC State University where she studied laboratory phonology and sociophonetics. Prior to Kaggle, she was a data scientist in market research and product manager at Stack Overflow. She's passionate about open technical communities."
  },
  {
    id: 8,
    name: "Maggie Demkin",
    title: "Customer Success",
    image: "maggie.jpg",
    bio: "Maggie works with Kaggle hosts to launch competitions on the platform. She brings customer lifecycle management and operations experience from different industries to manage successful competitions. She has an MBA from the University of Chicago in Finance and Strategic Management as well as a Bachelors from the University of California, Berkeley."
  }
];

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <button className="bg-white bg-opacity-75 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </button>
          <button className="bg-white bg-opacity-75 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
        <p className="text-blue-500 font-medium mb-2">{member.title}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default function KaggleTeamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMembers = teamMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          {/* Header content removed: logo and search */}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </main>
    </div>
  );
};