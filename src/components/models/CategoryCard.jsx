import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function CategoryCard({ title, icon, path }) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(path)}
      className="relative border rounded-lg p-4 hover:shadow-md cursor-pointer bg-white"
    >
      <img src={icon} alt="" className="h-16 w-full object-cover mb-4"/>
      <h3 className="font-medium text-lg">{title}</h3>
      <ChevronRight className="absolute top-4 right-4 text-gray-600"/>
    </div>
  );
}
