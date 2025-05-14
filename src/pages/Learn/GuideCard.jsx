import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function GuideCard({ item }) {
  const nav = useNavigate();
  return (
    <div onClick={() => nav('/404')} className="border rounded-lg p-4 hover:shadow cursor-pointer bg-white">
      <div className="flex items-start space-x-4">
        <img src={item.icon} alt={item.title} className="w-12 h-12" />
        <div>
          <h3 className="font-semibold mb-1">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      </div>
    </div>
  );
}