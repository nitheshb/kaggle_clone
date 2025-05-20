import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function KaggleColabApp() {
  const [expandedFaq, setExpandedFaq] = useState("Why should educators use Kaggle and Colab?");

  const toggleFaq = (faqTitle) => {
    setExpandedFaq(expandedFaq === faqTitle ? null : faqTitle);
  };

  return (
    <div className="flex flex-col items-center w-full font-sans bg-white">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-8 py-16 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Create course content using Kaggle and Colab
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Integrate Kaggle's datasets and competitions with Colab's interactive coding environment for data-rich educational experiences.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium">
            See example course content
          </button>
        </div>
        <div className="lg:w-1/2">
        <img src="/images/light-group-illo.png" alt="Logo" />
        </div>
      </section>

      {/* Why Create Section */}
     
      <div className="py-12 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-10">
        <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-3xl font-bold text-gray-800">Why create course content on Kaggle?</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 space-y-10">
          <p className="text-lg text-gray-700">
            Anyone can now create course content leveraging Kaggle resources and Colab's editor.
          </p>
          
          <p className="text-lg text-gray-700">
            Easily manage your classroom group on Kaggle and invite students to the platform. Sharing content with your class is seamless.
          </p>
          
          <p className="text-lg text-gray-700">
            Select and build your course content using Kaggle's extensive library of public datasets, models, and notebooks, or upload your own materials.
          </p>
        </div>
        
        {/* Right Column - Features */}
        <div className=" md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Kaggle Course Content Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Row 1 */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Self-Service Setup</span>
            </div>
            
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Discussion Forums</span>
            </div>
            
            {/* Row 2 */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Dataset Hosting</span>
            </div>
            
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Colab Notebooks</span>
            </div>
            
            {/* Row 3 */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Model Hosting</span>
            </div>
            
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Reproducable Results</span>
            </div>
            
            {/* Row 4 */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Group Management</span>
            </div>
            
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16m-7 6h7" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Flexible Content Options</span>
            </div>
            
            {/* Row 5 */}
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">No Cost</span>
            </div>
            
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Kaggle's Public Resources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Example Course Content */}
      <div className="w-full px-4 py-6">
      <div className="flex items-center mb-6">
        <div className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Example Course Content</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stanford CS372 Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Stanford CS372...</h2>
            </div>
            <div className="w-12 h-12">
              <img 
                src="/api/placeholder/48/48" 
                alt="Stanford Logo" 
                className="w-full h-full rounded"
                style={{ backgroundColor: '#8C1515' }} 
              />
            </div>
          </div>
          <div className="mb-3">
            <span className="text-gray-600 text-sm">Community Competition</span>
          </div>
          <p className="text-gray-700">
            Abnormal Detection for Chest X-Ray Images
          </p>
        </div>

        {/* Harvard CS287 Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Harvard CS287 S1...</h2>
            </div>
            <div className="w-12 h-12">
              <img 
                src="/api/placeholder/48/48" 
                alt="Harvard Logo" 
                className="w-full h-full rounded"
                style={{ backgroundColor: '#A51C30' }} 
              />
            </div>
          </div>
          <div className="mb-3">
            <span className="text-gray-600 text-sm">Community Competition</span>
          </div>
          <p className="text-gray-700">
            Harvard CS287 Spring 2019 HW1: Text Classification
          </p>
        </div>
        
        {/* UC Berkeley CS189 Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">UC Berkeley CS189 H...</h2>
            </div>
            <div className="w-12 h-12">
              <img 
                src="/api/placeholder/48/48" 
                alt="UC Berkeley Logo" 
                className="w-full h-full rounded"
                style={{ backgroundColor: '#003262' }} 
              />
            </div>
          </div>
          <div className="mb-3">
            <span className="text-gray-600 text-sm">Community Competition</span>
          </div>
          <p className="text-gray-700">
            CS189 HW6 competition for CIFAR-10 image classification
          </p>
        </div>

        {/* Stanford Stats 202 Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Stanford Stats 202:...</h2>
            </div>
            <div className="w-12 h-12">
              <img 
                src="/api/placeholder/48/48" 
                alt="Stanford Logo" 
                className="w-full h-full rounded"
                style={{ backgroundColor: '#8C1515' }} 
              />
            </div>
          </div>
          <div className="mb-3">
            <span className="text-gray-600 text-sm">Community Competition</span>
          </div>
          <p className="text-gray-700">
            Predicting walking patterns from accelerometer data
          </p>
        </div>
      </div>
    </div>


      {/* Simple Course Creation */}
      <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-gray-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 10L11 13L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Simple Course Creation & Sharing</h1>
      </div>
      
      <p className="text-lg text-gray-700 mb-8">
        Learn how to use our self-service platform and explore the options available to you
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Classroom Groups */}
        <div className="border-r border-gray-200 pr-4">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">Classroom groups</h2>
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-400 rounded-full opacity-60"></div>
              <div className="relative z-10 bg-white rounded-full p-2 border border-gray-200">
                {/* Circle Arrow Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8L16 12M16 12L12 16M16 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            Control access to your course content and simplify sharing with students on Kaggle.
          </p>
          
          <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-800 font-medium hover:bg-gray-100 transition-colors">
            Create group
          </button>
        </div>
        
        {/* Notebook Assignments */}
        <div className="border-r border-gray-200 px-4">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">Notebook assignments</h2>
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-300 rounded-md opacity-60"></div>
              <div className="relative z-10 bg-white rounded-md p-2 border border-gray-200">
                {/* Package Box Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 4L21 9L12 14L3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11.5V16.5L12 19.5L17 16.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            Create flexible, notebook-based assignments for an engaging learning experience.
          </p>
          
          <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-800 font-medium hover:bg-gray-100 transition-colors">
            Create notebook
          </button>
        </div>
        
        {/* Classroom Competitions */}
        <div className="pl-4">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">Classroom competitions</h2>
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-400 rounded-full opacity-60"></div>
              <div className="relative z-10 bg-white rounded-full p-2 border border-gray-200">
                {/* Trophy Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7V4H7V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 4H19C20.1046 4 21 4.89543 21 6V9C21 11.2091 19.2091 13 17 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 4H5C3.89543 4 3 4.89543 3 6V9C3 11.2091 4.79086 13 7 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 13L9.5 17H14.5L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            Engage students with assignments leveraging Kaggle's powerful competitions platform.
          </p>
          
          <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-800 font-medium hover:bg-gray-100 transition-colors">
            Create competition
          </button>
        </div>
      </div>
    </div>
      {/* FAQs Section */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">FAQs</h2>

          <div className="flex flex-col space-y-4">
            {[
              {
                title: "Why should educators use Kaggle and Colab?",
                content: (
                  <>
                    <p className="mb-4"><strong>Kaggle benefits:</strong> Kaggle provides access to real world datasets and models, collaboration and community support. Kaggle Community competition is a great way to host classroom assignments which offers custom evaluation metrics, real time submission scoring, leaderboard, and more, all at no cost.</p>
                    <p className="mb-4"><strong>Colab benefits:</strong> Colab offers a no-cost, cloud-based Jupyter notebook environment, easy sharing via Google Drive, and access to compute at no cost.</p>
                    <p className="mb-4"><strong>Combined benefit:</strong> Educators can create engaging and practical learning experiences that prepare students for real-world data science challenges. Students can use Colab to develop and test their models on Kaggle datasets, participate in competitions, and share their work with the community.</p>
                  </>
                )
              },
              {
                title: "How can I use Kaggle Notebooks for teaching",
                content: "Kaggle Notebooks offer a no-cost, web-based platform for coding and data analysis, ideal for classroom use as they require no installation and provide computational resources. Instructors can create stable and reproducible interactive learning materials, assign coding exercises and data projects with readily available datasets, and facilitate collaboration among students. This environment streamlines coursework, promotes hands-on learning, and exposes students to real-world data science practices."
              },
              {
                title: "How can I use Kaggle Datasets in my curriculum?",
                content: "Integrate Kaggle datasets into your curriculum by selecting relevant data, designing engaging assignments like EDA and modeling, and providing structure with starter notebooks and clear criteria. Kaggle is home to nearly half a million public datasets, so it's easy to find useful data on nearly any topic."
              },
              {
                title: "How do I create a class competition on Kaggle?",
                content: "To create a class competition on Kaggle, define the problem, choose/create a dataset, determine the evaluation metric, and write a clear description"
              },
              {
                title: "How can I use Colab for interactive lectures?",
                content: "Colab allows you to create, share, and present interactive lectures featuring rich markdown and html formatting interleaved with interactive coding blocks, enabling rich, self-documenting material that enables live coding and experimentation during lectures. You can present concepts, run code examples, and have students actively participate by modifying and executing code within the notebook. And you can do all of this without any setup or hardware requirements for you or your students."
              },
              {
                title: "How do I share Colab notebooks with my students?",
                content: "You can share Colab notebooks via a link just like any other document in Google Drive, granting students edit access directly (with caution), or granting them viewing permission so that they can make their own copy. Alternatively, share with specific individuals or groups by email for more controlled permissions. These methods facilitate distribution and collaboration in your classroom."
              },
              {
                title: "What are some resources for getting started?",
                content: " Colab offers a no-cost, cloud-based Jupyter notebook environment, easy sharing via Google Drive, and access to compute at no cost"
              }
            ].map((faq) => (
              <div key={faq.title} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(faq.title)}
                >
                  <span className="font-medium text-gray-900">{faq.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      expandedFaq === faq.title ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === faq.title && (
                  <div className="mt-4 text-gray-600">{faq.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}