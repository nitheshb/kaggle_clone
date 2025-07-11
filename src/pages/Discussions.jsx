import React from 'react';
import Header from '../components/Discussions/Header';
import ForumCategories from '../components/Discussions/ForumCategories';
import DiscussionList from '../components/Discussions/DiscussionList';
import { forumCategories, discussionItems } from '../components/Discussions/KaggleData';

// This is the main component for the Discussions page
const Discussions = () => {
  return (
    <div className="bg-white font-sans" style={{ minHeight: "150vh", width: "100%" }}>
      {/* Main Content */}
      <div className="w-full mx-auto px-4 sm:px-6 pt-8 pb-16">
        {/* Header Section */}
        <Header />

        {/* Forums Section */}
        <ForumCategories categories={forumCategories} />

        {/* Discussion from across Kaggle Section */}
        <DiscussionList discussions={discussionItems} />
      </div>
    </div>
  );
};

// Make sure to add this default export
export default Discussions;
