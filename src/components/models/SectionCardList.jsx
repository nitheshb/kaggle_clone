// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function SectionCardList({
//   title, subtitle, icon, items = [], Card, seeAll
// }) {
//   const nav = useNavigate();
//   return (
//     <section className="px-8 mt-8">
//       <div className="flex items-center justify-between mb-2">
//         <div className="flex items-center gap-2 text-gray-800">
//           {icon}
//           <h2 className="text-2xl font-semibold">{title}</h2>
//         </div>
//         {seeAll && (
//           <button
//             onClick={() => nav(seeAll)}
//             className="text-gray-600 hover:underline"
//           >See All</button>
//         )}
//       </div>
//       {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {items.map(item => <Card key={item.name} item={item}/>)}
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SectionCardList({
  title,
  subtitle,
  icon,
  items = [],
  Card,
  seeAll
}) {
  const nav = useNavigate();
  return (
    <section className="px-8 mt-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-gray-800">
          {icon}
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        {seeAll && (
          <button onClick={() => nav(seeAll)} className="text-gray-600 hover:underline">
            See All
          </button>
        )}
      </div>
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {items.map((i) => <Card key={i.name} item={i} />)} */}
        {items.map((itm, i) => <Card key={i} item={itm} />)}
      </div>
    </section>
  );
}
