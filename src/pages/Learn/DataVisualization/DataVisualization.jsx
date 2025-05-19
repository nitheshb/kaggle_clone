// src/pages/DataVisualization.jsx
import React, { useState } from 'react'
import CompetitionNavbarA from '../../../components/layout/NavbarA'
import CourseHeader from './CourseHeader'
import CourseNavigation from './CourseNavigation'
import LessonsList from './LessonsList'
import CourseInfo from './CourseInfo'
import DiscussionsList from './DiscussionsList'

export default function DataVisualization() {
  const [activeTab, setActiveTab] = useState('Courses')

  return (
    <div className="min-h-screen bg-white">
      {/* fixed navbar, always visible */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <CompetitionNavbarA visible={true} />
      </div>

      {/* push content down by navbar height (adjust if needed) */}
      <div className="pt-8 max-w-[1600px] mx-auto px-0">
        <CourseHeader />

        <div className="mt-12 mb-4">
          <CourseNavigation
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {activeTab === 'Courses' ? (
          <div
            className="overflow-x-auto pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex pl-6 min-w-[1000px]">
              <div className="lg:w-3/4 mb-32">
                <LessonsList />
              </div>
              <div className="lg:w-1/4 -mt-2">
                <CourseInfo />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <DiscussionsList />
          </div>
        )}
      </div>
    </div>
  )
}
