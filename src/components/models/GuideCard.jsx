import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GuideCard({ guide }) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(guide.path)}
      // className="border rounded-lg p-4 hover:shadow-md cursor-pointer bg-white"
      className="border rounded-lg p-4 bg-white hover:shadow-md cursor-pointer"
    >
      <img src={guide.icon} alt="" className="h-10 w-10 mb-4"  />
      <h3 className="font-medium text-lg mb-1">{guide.title}</h3>
      <p className="text-sm text-gray-600">{guide.description}</p>
    </div>
  );
}
