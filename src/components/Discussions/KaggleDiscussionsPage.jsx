import React from 'react';
import Header from './Header';
import ForumCategories from './ForumCategories';
import DiscussionList from './DiscussionList';
import { forumCategories, discussionItems } from './KaggleData';

const KaggleDiscussionsPage = () => {
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

export default KaggleDiscussionsPage;