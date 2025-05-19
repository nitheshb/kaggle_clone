


// src/pages/Learn/CourseDetail.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext.jsx';
import Sidebar from '../../components/layout/Sidebar.jsx';
import NotFound from '../NotFound.jsx';
import { Menu, Search } from 'lucide-react';

// Course metadata
const courses = [
  {
    title: 'Intermediate Machine Learning',
    description: 'Handle missing values, non-numeric values, data leakage, and more.',
    icon: '/images/intermediate-machine-learning.svg',
    meta: '4 hours',
    builds: ['Intro to Machine Learning', 'Pandas'],
    prep: ['Feature Engineering', 'Time Series'],
    hoursToEarn: '4 (estimated)',
    cost: 'No cost, like all Kaggle Learn Courses',
    instructor: { name: 'Alexis Cook', avatar: '/images/alexis-cook.jpg' }
  }
];

// Lessons
const lessons = [
  { id: 1, title: 'Introduction', desc: 'Review what you need for this course.' },
  { id: 2, title: 'Missing Values', desc: 'Missing values happen. Be prepared for this common challenge in real datasets.' },
  { id: 3, title: 'Categorical Variables', desc: `There's a lot of non-numeric data out there. Here's how to use it for machine learning.` },
  { id: 4, title: 'Pipelines', desc: 'A critical skill for deploying complex models.' },
  { id: 5, title: 'Cross-Validation', desc: 'A better way to test your models.' }
];

// Discussion topics
const pinnedTopics = [
  { id: 1, title: 'Welcome to the Intermediate Machine Learning course discussion!', user: 'Alexis Cook', votes: 117, avatar: '/images/alexis-cook.jpg' }
];
const otherTopics = [
  { id: 2, title: '[Missing Values] Columns removed, put back', user: 'Venkata Aditya Putcha', votes: 0, avatar: '/images/user2.jpg', comments: 1 },
  { id: 3, title: 'Missing code', user: 'Falak Ejaz', votes: 0, avatar: '/images/user3.jpg', comments: 0 }
];

export default function CourseDetail() {
  const { toggleSidebar } = useSidebar();
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('courses');

  const course = courses.find(
    c => c.title.toLowerCase().replace(/\s+/g,'-') === courseSlug
  );
  if (!course) return <NotFound />;

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Sticky header */}
        <nav className="sticky top-0 z-30 bg-white border-b flex items-center px-8 py-3">
          <button onClick={toggleSidebar} className="p-2 md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
          <div className="relative flex-1 max-w-3xl mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/signin')} className="text-gray-700 hover:text-black">Sign In</button>
            <button onClick={() => navigate('/register')} className="px-4 py-2 bg-black text-white rounded-full">Register</button>
          </div>
        </nav>
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-8 py-6">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold capitalize">{course.title}</h1>
                <p className="mt-2 text-gray-600">{course.description}</p>
              </div>
              <div className="flex justify-end">
                <img src={course.icon} alt={course.title} className="h-32" />
              </div>
            </div>
            {/* Begin + progress */}
            <div className="flex items-center gap-4 mb-8">
              <button className="px-5 py-2 bg-black text-white rounded-full">Begin Course</button>
              <div className="flex-1 bg-gray-200 h-2 rounded">
                <div className="bg-black h-2 w-1/4 rounded"></div>
              </div>
              <span className="text-gray-700">{course.meta} to go</span>
            </div>
            {/* Tabs */}
            <div className="border-b mb-4">
              <nav className="flex gap-6">
                <button
                  className={`pb-2 ${tab === 'courses' ? 'border-b-2 border-black' : ''}`}
                  onClick={() => setTab('courses')}
                >
                  Courses
                </button>
                <button
                  className={`pb-2 ${tab === 'discussions' ? 'border-b-2 border-black' : ''}`}
                  onClick={() => setTab('discussions')}
                >
                  Discussions
                </button>
              </nav>
            </div>

            {tab === 'courses' ? (
              <div className="md:flex gap-8">
                {/* Lessons */}
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
                  <div className="hidden md:flex text-sm text-gray-500 mb-2">
                    <div className="w-1/12">#</div>
                    <div className="w-5/12">Lesson</div>
                    <div className="w-2/12 text-center">Tutorial</div>
                    <div className="w-2/12 text-center">Exercise</div>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {lessons.map(l => (
                      <li
                        key={l.id}
                        onClick={() => navigate('/404')}
                        className="flex items-center py-4 hover:bg-gray-50 cursor-pointer px-4"
                      >
                        <div className="w-1/12 font-bold">{l.id}</div>
                        <div className="w-5/12">
                          <h3 className="font-medium">{l.title}</h3>
                          <p className="text-sm text-gray-600">{l.desc}</p>
                        </div>
                        <div className="w-2/12 text-center">📖</div>
                        <div className="w-2/12 text-center">💻</div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Sidebar info */}
                <aside className="md:w-1/4 mt-8 md:mt-0 space-y-6 text-sm">
                  <div>
                    <h3 className="font-semibold">Builds on</h3>
                    {course.builds.map((b,i) => <p key={i}><a href="#" className="text-blue-600 hover:underline">{b}</a></p>)}
                  </div>
                  <div>
                    <h3 className="font-semibold">Preparation for</h3>
                    {course.prep.map((p,i) => <p key={i}><a href="#" className="text-blue-600 hover:underline">{p}</a></p>)}
                  </div>
                  <div>
                    <h3 className="font-semibold">Hours to earn certificate</h3>
                    <p>{course.hoursToEarn}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cost</h3>
                    <p>{course.cost}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-semibold">Instructor</h3>
                      <p><a href="#" className="text-blue-600 hover:underline">{course.instructor.name}</a></p>
                    </div>
                    <img src={course.instructor.avatar} alt="Instructor" className="h-10 w-10 rounded-full" />
                  </div>
                </aside>
              </div>
            ) : (
              <div className="md:flex gap-8">
                {/* Discussions */}
                <div className="md:w-full">
                  <h2 className="text-2xl font-semibold mb-4">Discussion</h2>
                  {/* Pinned */}
                  {pinnedTopics.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-700 mb-2">Pinned topics</h3>
                      <ul className="divide-y divide-gray-200">
                        {pinnedTopics.map(t => (
                          <li
                            key={t.id}
                            onClick={() => navigate('/404')}
                            className="flex items-center justify-between py-4 hover:bg-gray-50 cursor-pointer px-4"
                          >
                            <div className="flex items-center gap-4">
                              <img src={t.avatar} alt="" className="h-8 w-8 rounded-full" />
                              <div>
                                <p className="font-medium">{t.title}</p>
                                <p className="text-sm text-gray-500">{t.user}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="p-2 rounded-full hover:bg-gray-100">▲</button>
                              <span>{t.votes}</span>
                              <button className="p-2 rounded-full hover:bg-gray-100">▼</button>
                              <button onClick={e => e.stopPropagation()} className="p-2">•••</button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Other */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">All other topics</h3>
                    <ul className="divide-y divide-gray-200">
                      {otherTopics.map(t => (
                        <li
                          key={t.id}
                          onClick={() => navigate('/404')}
                          className="flex items-center justify-between py-4 hover:bg-gray-50 cursor-pointer px-4"
                        >
                          <div className="flex items-center gap-4">
                            <img src={t.avatar} alt="" className="h-8 w-8 rounded-full" />
                            <div>
                              <p className="font-medium">{t.title}</p>
                              <p className="text-sm text-gray-500">{t.user}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 rounded-full hover:bg-gray-100">▲</button>
                            <span>{t.votes}</span>
                            <button className="p-2 rounded-full hover:bg-gray-100">▼</button>
                            <span className="text-sm text-gray-500">{t.comments} comments</span>
                            <button onClick={e => e.stopPropagation()} className="p-2">•••</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
