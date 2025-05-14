// import { Link } from 'react-router-dom';

// const Learn = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">Learn</h1>
//       <p className="text-gray-700">
//         Develop your data science skills with free, interactive tutorials.
//       </p>
//     </div>
//   );
// };

// export default Learn;


// src/components/Learn.jsx
import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar.jsx';
import { Search, BarChart2, Bookmark, List, Grid } from 'lucide-react';

// Courses data
const courses = [
  { title: 'Intro to Programming', description: 'Get started with Python, if you have no coding experience.', icon: '/images/intro-to-programming.svg', meta: '5 hours · 1 guided project', prereq: 'No prerequisites' },
  { title: 'Python', description: 'Learn the most important language for data science.', icon: '/images/python.svg', meta: '5 hours', builds: 'Intro to Programming' },
  { title: 'Intro to Machine Learning', description: 'Learn the core ideas in machine learning, and build your first models.', icon: '/images/intro-to-machine-learning.svg', meta: '3 hours', builds: 'Python' },
  { title: 'Pandas', description: 'Solve short hands-on challenges to perfect your data manipulation skills.', icon: '/images/pandas.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Intermediate Machine Learning', description: 'Handle missing values, non-numeric values, data leakage, and more.', icon: '/images/intermediate-machine-learning.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Data Visualization', description: 'Make great data visualizations. A great way to see the power of coding!', icon: '/images/data-visualization.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Feature Engineering', description: 'Better features make better models. Discover how to get the most out of your data.', icon: '/images/feature-engineering.svg', meta: '5 hours · 1 guided project', prereq: 'No prerequisites' },
  { title: 'Intro to SQL', description: 'Learn SQL for working with databases, using Google BigQuery.', icon: '/images/intro-to-sql.svg', meta: '3 hours', builds: 'Intro to Programming' },
  { title: 'Advanced SQL', description: 'Master advanced SQL patterns and optimizations.', icon: '/images/advanced-sql.svg', meta: '3 hours', builds: 'Python' },
  { title: 'Intro to Deep Learning', description: 'Dive into neural networks and deep learning fundamentals.', icon: '/images/intro-to-deep-learning.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Computer Vision', description: 'Apply machine learning to interpret images and videos.', icon: '/images/computer-vision.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Time Series', description: 'Analyse temporal data and build forecasting models.', icon: '/images/time-series.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Data Cleaning', description: 'Learn techniques to clean and preprocess datasets.', icon: '/images/data-cleaning.svg', meta: '3 hours', builds: 'Intro to Programming' },
  { title: 'Intro to AI Ethics', description: 'Explore ethical considerations in AI development.', icon: '/images/intro-to-ai-ethics.svg', meta: '3 hours', builds: 'Python' },
  { title: 'Geospatial Analysis', description: 'Analyse spatial data and visualise geographic insights.', icon: '/images/geospatial-analysis.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Machine Learning Explainability', description: 'Understand and interpret ML model decisions.', icon: '/images/machine-learning-explainability.svg', meta: '4 hours', builds: 'Python' },
  { title: 'Intro to Game AI and Reinforcement Learning', description: 'Build your own video game bots with RL algorithms.', icon: '/images/intro-to-game-ai-and-reinforcement-learning.svg', meta: '4 hours', builds: 'Python' },
];

// Guides data
const guides = [
  { title: '5-Day Intensive Generative AI Course', description: 'Google hosted a 5-Day Intensive Generative AI Course in November, 2024.', icon: '/images/5-day-genai-guide.svg' },
  { title: 'JAX Guide', description: 'JAX is a library for high-performance machine learning.', icon: '/images/jax-guide.svg' },
  { title: 'TensorFlow Guide', description: 'TensorFlow is a library for developing and training machine learning models.', icon: '/images/tensorflow-guide.svg' },
  { title: 'Transfer Learning for CV Guide', description: 'Transfer Learning is the practice of using a pre-trained model towards a new task.', icon: '/images/transfer-learning-cv-guide.svg' },
  { title: 'Kaggle Competitions Guide', description: 'Kaggle Competitions are machine learning challenges, often with large prizes.', icon: '/images/kaggle-competitions-guide.svg' },
  { title: 'Natural Language Processing Guide', description: 'NLP is a subfield of ML concerned with understanding text.', icon: '/images/natural-language-processing-guide.svg' },
  { title: 'R Guide', description: 'R is a programming language for statistical analysis and visualization.', icon: '/images/r-guide.svg' },
];

export default function Learn() {
  // hide global scrolling and nav when on this page
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    const globalNav = document.querySelector('header') || document.querySelector('.app-header');
    if (globalNav) globalNav.style.display = 'none';
    return () => {
      document.body.style.overflow = '';
      if (globalNav) globalNav.style.display = '';
    };
  }, []);

  const [view, setView] = useState('list');
  const [guidesView, setGuidesView] = useState('list');
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <nav className="sticky top-0 z-20 bg-white px-8 py-3 flex items-center justify-between shadow-sm">
          <div className="relative flex-1">
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

        <div className="flex-1 overflow-auto pb-8">
          {/* Hero */}
          <section className="px-8 pt-4 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold">Learn</h1>
              <p className="mt-4 text-lg text-gray-600">Gain the skills you need to do independent data science projects.</p>
            </div>
            <div className="flex justify-end">
              <img src="/images/learnImage.svg" alt="Two people learning data science" className="max-w-full h-auto" />
            </div>
          </section>

          {/* Courses Section */}
          <section className="px-8 pt-0 pb-4 border-t">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-gray-700" />
                <h2 className="text-2xl font-semibold">Courses</h2>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <List onClick={() => setView('list')} className={`h-5 w-5 cursor-pointer ${view==='list'?'text-black':''}`} />
                <Grid onClick={() => setView('grid')} className={`h-5 w-5 cursor-pointer ${view==='grid'?'text-black':''}`} />
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              We pare down complex topics to their key practical components, so you gain usable skills in a few hours (instead of weeks or months). The courses are provided at no cost to you, and you can now earn certificates.{' '}
              <a href="#" className="text-blue-600 hover:underline">Learn more about courses.</a>
            </p>
            {view==='list' ? (
              <div className="flex flex-col divide-y divide-gray-200">
                {courses.map(c => {
                  const slug = c.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div
                      key={c.title}
                      onClick={() => navigate(`/courses/${slug}`)}
                      className="flex items-center py-4 px-4 hover:bg-gray-50 cursor-pointer transition"
                    >
                      <img src={c.icon} alt={c.title} className="h-10 w-10 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-base font-medium">{c.title}</h3>
                        <p className="text-sm text-gray-600">{c.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map(c => {
                  const slug = c.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div
                      key={c.title}
                      onClick={() => navigate(`/courses/${slug}`)}
                      className="border rounded-lg p-4 hover:bg-gray-50 hover:shadow-md cursor-pointer transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-base font-medium">{c.title}</h3>
                        <img src={c.icon} alt={c.title} className="h-8 w-8" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{c.meta}</p>
                      <p className="text-sm text-gray-600">{c.description}</p>
                      <p className="mt-4 text-xs text-gray-500">
                        {c.prereq ?? 'Builds on:'}{' '}
                        {c.builds && <a href="#" className="text-blue-600 hover:underline">{c.builds}</a>}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Guides Section */}
          <section className="px-8 pt-0 pb-8 border-t">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-gray-700" />
                <h2 className="text-2xl font-semibold">Guides</h2>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <List onClick={() => setGuidesView('list')} className={`h-5 w-5 cursor-pointer ${guidesView==='list'?'text-black':''}`} />
                <Grid onClick={() => setGuidesView('grid')} className={`h-5 w-5 cursor-pointer ${guidesView==='grid'?'text-black':''}`} />
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Explore these curated collections of high-quality learning resources authored by the Kaggle community.{' '}
              <a href="#" className="text-blue-600 hover:underline">Learn more about guides.</a>
            </p>
            {guidesView==='list' ? (
              <div className="flex flex-col divide-y divide-gray-200">
                {guides.map(g => {
                  const slug = g.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div
                      key={g.title}
                      onClick={() => navigate(`/guides/${slug}`)}
                      className="flex items-center py-4 px-4 hover:bg-gray-50 cursor-pointer transition"
                    >
                      <img src={g.icon} alt={g.title} className="h-10 w-10 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-base font-medium">{g.title}</h3>
                        <p className="text-sm text-gray-600">{g.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {guides.map(g => {
                  const slug = g.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <div
                      key={g.title}
                      onClick={() => navigate(`/guides/${slug}`)}
                      className="border rounded-lg p-4 hover:bg-gray-50 hover:shadow-md cursor-pointer transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-base font-medium">{g.title}</h3>
                        <img src={g.icon} alt={g.title} className="h-8 w-8" />
                      </div>
                      <p className="text-sm text-gray-600">{g.description}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
