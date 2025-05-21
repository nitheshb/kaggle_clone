import React from 'react';

// Simple Divider component
const Divider = () => (
  <hr className="my-8 border-gray-300" />
);

// Medal component for different medal types
const Medal = ({ type, count }) => {
  let color = "text-gray-600";
  let emoji = "🥉";

  if (type === "gold") {
    emoji = "🥇";
    color = "text-yellow-600";
  } else if (type === "silver") {
    emoji = "🥈";
    color = "text-gray-400";
  } else if (type === "bronze") {
    emoji = "🥉";
    color = "text-yellow-700";
  }

  return (
    <span className={`${color} flex items-center`}>
      <span className="mr-1">{emoji}</span> {count} {type} medal{count !== 1 ? 's' : ''}
    </span>
  );
};

// Category requirements component
const CategoryRequirements = ({ category, requirements }) => (
  <div className="mb-4">
    <h4 className="font-semibold text-gray-800 mb-2">{category}</h4>
    <div className="flex flex-col gap-2">
      {requirements.map((req, idx) => (
        <div key={idx} className="flex items-center">
          <input type="checkbox" className="mr-2" disabled />
          {typeof req === 'string' ? (
            <span>{req}</span>
          ) : (
            <Medal type={req.type} count={req.count} />
          )}
        </div>
      ))}
    </div>
  </div>
);

// Clean TierCard without padding/border/shadow (for Novice/Contributor)
const SimpleTierCard = ({ tierName, description, tasks, image }) => (
  <div className="flex items-start gap-6 mb-8">
    {image && (
      <img
        src={image}
        alt={`${tierName} icon`}
        width={96}
        height={96}
        className="flex-shrink-0"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/api/placeholder/96/96";
        }}
      />
    )}
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{tierName}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <ul className="list-disc list-inside text-gray-600">
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  </div>
);

// TierCard component for Expert/Master/Grandmaster
const TierCard = ({ tierName, description, categories, image }) => {
  return (
    <div className="mb-12">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={`${tierName} icon`}
            width={96}
            height={96}
            className="flex-shrink-0"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/96/96";
            }}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{tierName}</h3>
          <p className="text-gray-700 mb-6">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categories.map((category, idx) => (
              <CategoryRequirements
                key={idx}
                category={category.name}
                requirements={category.requirements}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the competition medals table
const CompetitionMedalsTable = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-50">
          <th className="p-4 border-b border-r border-gray-200 text-left"></th>
          <th className="p-4 border-b border-r border-gray-200 text-center">0-99 Teams</th>
          <th className="p-4 border-b border-r border-gray-200 text-center">100-249 Teams</th>
          <th className="p-4 border-b border-r border-gray-200 text-center">250-999 Teams</th>
          <th className="p-4 border-b border-gray-200 text-center">1000+ Teams</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4 border-b border-r border-gray-200 flex items-center">
            <span className="mr-2 text-yellow-700">🥉</span> Bronze
          </td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 40%</td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 40%</td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 100</td>
          <td className="p-4 border-b border-gray-200 text-center">Top 10%</td>
        </tr>
        <tr>
          <td className="p-4 border-b border-r border-gray-200 flex items-center">
            <span className="mr-2 text-gray-400">🥈</span> Silver
          </td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 20%</td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 20%</td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 50</td>
          <td className="p-4 border-b border-gray-200 text-center">Top 5%</td>
        </tr>
        <tr>
          <td className="p-4 border-b border-r border-gray-200 flex items-center">
            <span className="mr-2 text-yellow-600">🥇</span> Gold
          </td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 10%</td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 10</td>
          <td className="p-4 border-b border-r border-gray-200 text-center">Top 10 + 0.2%*</td>
          <td className="p-4 border-b border-gray-200 text-center">Top 10 + 0.2%*</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// Main KagglePerformanceGuide component
function KagglePerformanceGuide() {
  // Example data for tiers
  const tiers = [
    {
      name: "Novice",
      description: "You've joined the community.",
      tasks: ["Register!"],
      image: "/novice.svg"
    },
    {
      name: "Contributor",
      description: "You've completed your profile, engaged with the community, and fully explored Kaggle's platform.",
      tasks: [
        "Run 1 notebook or script",
        "Make 1 competition submission",
        "Make 1 comment",
        "Give 1 upvote"
      ],
      image: "/contributor.svg"
    },
    {
      name: "Expert",
      description: "You have demonstrated expertise in one or more categories.",
      categories: [
        {
          name: "Competitions",
          requirements: [
            { type: "gold", count: 1 },
            { type: "silver", count: 2 },
            { type: "bronze", count: 5 }
          ]
        },
        {
          name: "Datasets",
          requirements: [
            { type: "gold", count: 1 },
            { type: "silver", count: 2 },
            { type: "bronze", count: 5 }
          ]
        },
        {
          name: "Notebooks",
          requirements: [
            { type: "gold", count: 1 },
            { type: "silver", count: 2 },
            { type: "bronze", count: 5 }
          ]
        },
        {
          name: "Discussion",
          requirements: [
            { type: "gold", count: 1 },
            { type: "silver", count: 2 },
            { type: "bronze", count: 5 }
          ]
        }
      ],
      image: "/expert.svg"
    },
    {
      name: "Master",
      description: "You have reached the Master tier in at least one category.",
      categories: [
        {
          name: "Competitions",
          requirements: [
            { type: "gold", count: 5 },
            { type: "silver", count: 10 },
            { type: "bronze", count: 20 }
          ]
        },
        {
          name: "Datasets",
          requirements: [
            { type: "gold", count: 5 },
            { type: "silver", count: 10 },
            { type: "bronze", count: 20 }
          ]
        },
        {
          name: "Notebooks",
          requirements: [
            { type: "gold", count: 5 },
            { type: "silver", count: 10 },
            { type: "bronze", count: 20 }
          ]
        },
        {
          name: "Discussion",
          requirements: [
            { type: "gold", count: 5 },
            { type: "silver", count: 10 },
            { type: "bronze", count: 20 }
          ]
        }
      ],
      image: "/master.svg"
    },
    {
      name: "Grandmaster",
      description: "You are among the top contributors in the Kaggle community.",
      categories: [
        {
          name: "Competitions",
          requirements: [
            { type: "gold", count: 10 },
            { type: "silver", count: 20 },
            { type: "bronze", count: 40 }
          ]
        },
        {
          name: "Datasets",
          requirements: [
            { type: "gold", count: 10 },
            { type: "silver", count: 20 },
            { type: "bronze", count: 40 }
          ]
        },
        {
          name: "Notebooks",
          requirements: [
            { type: "gold", count: 10 },
            { type: "silver", count: 20 },
            { type: "bronze", count: 40 }
          ]
        },
        {
          name: "Discussion",
          requirements: [
            { type: "gold", count: 10 },
            { type: "silver", count: 20 },
            { type: "bronze", count: 40 }
          ]
        }
      ],
      image: "/grandmaster.svg"
    }
  ];

  return (
    <div className="mb-12 max-w-6xl mx-auto px-4">


      {/* Performance Tiers Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Performance Tiers</h2>
        <p className="text-gray-700 mb-4">
          Within each category of expertise, there are five performance tiers that can be achieved in accordance with the quality and quantity of work you produce:{" "}
          <span className="font-semibold">Novice, Contributor, Expert, Master, and Grandmaster</span>.
        </p>
        <p className="text-gray-700 mb-4">
          For example, you could be a Competitions Master, a Datasets Expert, a Notebooks Grandmaster, and a Discussion Expert:
        </p>

        {/* Box layout with larger image */}
        <div className="flex justify-center my-6">
          <div className="border-2 border-gray-200 rounded-lg p-6 shadow-lg bg-white w-full max-w-full">
            <img
              src="/tiers-example.png"
              alt="Performance tiers example"
              className="w-full h-auto rounded-lg"
              style={{ minHeight: "500px", objectFit: "contain" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/1200/600";
                console.error("Failed to load image at /tiers-example.png");
              }}
            />
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          The performance tiers are designed to reflect your growth and expertise in each category, allowing you to showcase your achievements and progress as a data scientist on Kaggle.
        </p>

        {/* Render Tier Cards */}
        {tiers.map((tier, index) => (
          <React.Fragment key={tier.name}>
            {tier.tasks ? (
              <SimpleTierCard
                tierName={tier.name}
                description={tier.description}
                tasks={tier.tasks}
                image={tier.image}
              />
            ) : (
              <TierCard
                tierName={tier.name}
                description={tier.description}
                categories={tier.categories}
                image={tier.image}
              />
            )}
            {index < tiers.length - 1 && <Divider />}
          </React.Fragment>
        ))}

        {/* Horizontal line before Medals */}
        <hr className="my-8 border-gray-300" />

        {/* Medals section without blue background */}
        <div className="p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Medals</h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">To reward your best work</h4>
          <p className="text-gray-700 mb-4">
            Medals are a standardized way of recognizing and rewarding excellent pieces of work across the categories of expertise on Kaggle. Each medal is awarded for a single accomplishment: a great competition result, a popular notebook, a useful dataset or an insightful comment.
          </p>
        </div>

        {/* Competition Medals Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Competition Medals</h3>
          <p className="text-gray-700 mb-6">
            Competition medals are awarded for top competition results. The number of medals awarded per competition varies depending on the size of the competition. 
            Percentage calculations are rounded down. For example, a competition with 9 teams will not award any gold medals. Note that Community, Playground, and 
            Getting Started competitions typically do not award medals.
          </p>

          {/* Competition Medals Table */}
          <CompetitionMedalsTable />

          {/* Footnote */}
          <p className="text-gray-700 mt-4">
            * (Top 10 + 0.2%) means that an extra gold medal will be awarded for every 500 additional teams in the competition. For example, a competition with 500 
            teams will award gold medals to the top 11 teams and a competition with 5000 teams will award gold medals to the top 20 teams.
          </p>
        </div>

        <Divider />

        {/* Dataset Medals Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Dataset Medals</h3>
          <p className="text-gray-700 mb-6">
            Dataset Medals are awarded to popular public datasets published to the site, as measured by number of upvotes. Not all upvotes count towards medals: self-votes and votes by novices are excluded from medal calculation.
          </p>

          {/* Dataset Medals Table */}
          <div className="mx-auto max-w-md">
            <table className="min-w-full border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-yellow-700">🥉</span> Bronze
                  </td>
                  <td className="p-4 border border-gray-200 text-center">5 Votes</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-gray-400">🥈</span> Silver
                  </td>
                  <td className="p-4 border border-gray-200 text-center">20 Votes</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-yellow-600">🥇</span> Gold
                  </td>
                  <td className="p-4 border border-gray-200 text-center">50 Votes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Divider />

        {/* Notebook Medals Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Notebook Medals</h3>
          <p className="text-gray-700 mb-6">
            Notebook Medals are awarded to popular public notebooks published to the site, as measured by number of upvotes. Not all upvotes count towards medals: self-votes and votes by novices are excluded from medal calculation.
          </p>

          {/* Notebook Medals Table */}
          <div className="mx-auto max-w-md">
            <table className="min-w-full border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-yellow-700">🥉</span> Bronze
                  </td>
                  <td className="p-4 border border-gray-200 text-center">5 Votes</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-gray-400">🥈</span> Silver
                  </td>
                  <td className="p-4 border border-gray-200 text-center">20 Votes</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-yellow-600">🥇</span> Gold
                  </td>
                  <td className="p-4 border border-gray-200 text-center">50 Votes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Divider />

        {/* Discussion Medals Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Discussion Medals</h3>
          <p className="text-gray-700 mb-6">
            Discussion Medals are awarded to popular topics and comments posted across the site, as measured by net votes (upvotes minus downvotes). Not all upvotes count towards medals: votes by novices and votes on old posts are excluded from medal calculation, and there are additional hidden rules as well, to prevent upvote rings and progression system manipulation.
          </p>

          {/* Discussion Medals Table */}
          <div className="mx-auto max-w-md">
            <table className="min-w-full border border-gray-200">
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-yellow-700">🥉</span> Bronze
                  </td>
                  <td className="p-4 border border-gray-200 text-center">5 Votes</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-gray-400">🥈</span> Silver
                  </td>
                  <td className="p-4 border border-gray-200 text-center">20 Votes</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 flex items-center">
                    <span className="mr-2 text-yellow-600">🥇</span> Gold
                  </td>
                  <td className="p-4 border border-gray-200 text-center">50 Votes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Divider />
      </div>

      {/* Kaggle Rankings Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Kaggle Rankings</h2>
        <p className="text-gray-700 mb-6">
          The Kaggle Rankings page is a live leaderboard of the absolute best data scientists on Kaggle. Each category of expertise has its own leaderboard and point system. A data scientist's profile will display their current rank, as well as the highest rank they have ever achieved for each category. A data scientist must be a expert tier or higher to be ranked for that category.
        </p>
      </div>

      {/* Points Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Points</h2>
        <p className="text-gray-700 mb-6">
          While tiers and medals are permanent representations of a data scientist's achievements, points are designed to decay over time. This keeps Kaggle's rankings contemporary and competitive. All points awarded decay in a consistent way using the formula below:
        </p>

        {/* Mathematical formula */}
        <div className="flex justify-center my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-2xl font-mono mb-2">
              e<sup>-t/500</sup>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-8">
          In this formula, t is the number of days elapsed since the point was awarded.
        </p>
      </div>

      {/* Competitions Points Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Competitions</h2>
        <p className="text-gray-700 mb-4">
          Competition points are awarded based on how well a team did in a competition, the number of members on the team, and the number of teams in the competition. Note that Community, Playground, and Getting Started competitions typically do not award points.
        </p>
        <p className="text-gray-700 mb-6">
          The algorithm for competition points has not changed since the 13th of May 2015:
        </p>

        {/* Competition Points Formula */}
        <div className="flex justify-center my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <div className="text-lg font-mono">
              <span className="inline-block">
                [<span className="inline-block align-middle">
                  <span className="block text-center border-b border-gray-800 pb-1">
                    100000
                  </span>
                  <span className="block text-center pt-1">
                    √N<sub>teammates</sub>
                  </span>
                </span>]
              </span>
              <span className="mx-2">×</span>
              <span className="inline-block">
                [Rank<sup>-0.75</sup>]
              </span>
              <span className="mx-2">×</span>
              <span className="inline-block">
                [log<sub>10</sub>(1 + log<sub>10</sub>(N<sub>teams</sub>))]
              </span>
              <span className="mx-2">×</span>
              <span className="inline-block">
                [e<sup>-t/500</sup>]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Datasets Points Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Datasets</h2>
        <p className="text-gray-700 mb-6">
          Dataset points are awarded based on the popularity of all public datasets a Kaggler has created. Each upvote on a dataset is initially worth 1 point, and decays based on the day the vote was cast.
        </p>
      </div>

      {/* Notebooks Points Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Notebooks</h2>
        <p className="text-gray-700 mb-6">
          Notebook points are awarded based on the popularity of all public notebooks a data scientist has created. Each upvote on a notebook is initially worth 1 point, and decays based on the day the vote was cast.
        </p>
      </div>

      {/* Discussion Points Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Discussion</h2>
        <p className="text-gray-700 mb-6">
          Discussion points are calculated as the sum of total upvotes minus the sum of total downvotes cast on a data scientist's topics and comments on Kaggle. Decay is applied to both upvotes and downvotes based on the day the votes were cast.
        </p>
      </div>
    </div>
  );
}

export default KagglePerformanceGuide;