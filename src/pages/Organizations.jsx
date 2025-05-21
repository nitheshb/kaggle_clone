import React, { useState } from 'react';

const OrganizationsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'how-profiles-work':
        return <ProfilesWorkSection />;
      case 'creating-profile':
        return <CreatingProfileSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-left mb-4">Organizations</h1>
        <p className="text-lg text-gray-700 mb-8">How to create, use, and manage organization profiles</p>
        
        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="lg:w-3/4 pr-0 lg:pr-8">
            {renderContent()}
          </div>
          
          {/* Right Navigation */}
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <h2 className="text-xl font-bold mb-4">Documentation</h2>
            <ul className="space-y-4">
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'competitions' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/competitions'}
                >
                  <span className="mr-2">›</span> Competitions
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'datasets' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/datasets'}
                >
                  <span className="mr-2">›</span> Datasets
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'public-api' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/public-api'}
                >
                  <span className="mr-2">›</span> Public API
                </button>
              </li>
              <li>
                <span className="text-gray-700">Efficient GPU Usage Tips</span>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'tpus' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/tpus'}
                >
                  <span className="mr-2">›</span> Tensor Processing Units (TPUs)
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'models' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/models'}
                >
                  <span className="mr-2">›</span> Models
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'competitions-setup' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/competitions-setup'}
                >
                  <span className="mr-2">›</span> Competitions Setup
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full font-semibold text-blue-600`}
                >
                  <span className="mr-2">v</span> Organizations
                </button>
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <button 
                      className={`text-left ${activeSection === 'overview' ? 'font-semibold' : ''}`}
                      onClick={() => setActiveSection('overview')}
                    >
                      Overview
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`flex items-center text-left w-full ${activeSection === 'how-profiles-work' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                      onClick={() => setActiveSection('how-profiles-work')}
                    >
                      <span className="mr-2">›</span> How do organization profiles work
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`flex items-center text-left w-full ${activeSection === 'creating-profile' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                      onClick={() => setActiveSection('creating-profile')}
                    >
                      <span className="mr-2">›</span> Creating a new organization profile
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'groups' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/groups'}
                >
                  <span className="mr-2">›</span> Groups
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center text-left w-full ${activeSection === 'packages' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                  onClick={() => window.location.href = '/packages'}
                >
                  <span className="mr-2">›</span> Kaggle Packages
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Overview</h2>
      <p className="text-gray-700 mb-6">
        Anyone can create an organization profile on Kaggle. Organization profiles allow anyone in the community to
        find your organization's datasets, models, and competitions in one place.
      </p>
      <p className="text-gray-700 mb-8">
        Before creating an organization, it's helpful to understand how organization profiles work.
      </p>

      <h2 className="text-3xl font-bold mb-4">How do organization profiles work</h2>
      <h3 className="text-2xl font-bold mb-4">What are organizations for?</h3>
      <p className="text-gray-700 mb-6">
        Organization profiles are a "landing page" for your organization's published competitions, models, and datasets.
        For example, it gives you an easy way to share (and other users to find) all of the datasets and models that your
        team has published with a single link.
      </p>

      <h3 className="text-2xl font-bold mb-4">What are organizations NOT for?</h3>
      <p className="text-gray-700 mb-6">
        Organizations are not meant to be used as a tool for collaboration with a group of people. You should use
        Kaggle groups for this purpose.
      </p>
      
      <div className="bg-gray-50 p-6 mb-8 border-l-4 border-blue-500">
        <p className="text-gray-700">
          Note: While all members of an organization can create competitions, datasets, and models as an organization,
          this does not give other members of the organization the ability to manage that content (edit, delete, update, or
          view private resources). Read more about organization permissions below.
        </p>
      </div>
    </div>
  );
};

const ProfilesWorkSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">How do organization profiles work</h2>
      <h3 className="text-2xl font-bold mb-4">What are organizations for?</h3>
      <p className="text-gray-700 mb-6">
        Organization profiles are a "landing page" for your organization's published competitions, models, and datasets.
        For example, it gives you an easy way to share (and other users to find) all of the datasets and models that your
        team has published with a single link.
      </p>

      <h3 className="text-2xl font-bold mb-4">What are organizations NOT for?</h3>
      <p className="text-gray-700 mb-6">
        Organizations are not meant to be used as a tool for collaboration with a group of people. You should use
        Kaggle groups for this purpose.
      </p>
      
      <div className="bg-gray-50 p-6 mb-8 border-l-4 border-blue-500">
        <p className="text-gray-700">
          Note: While all members of an organization can create competitions, datasets, and models as an organization,
          this does not give other members of the organization the ability to manage that content (edit, delete, update, or
          view private resources). Read more about organization permissions below.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-4">Who should create and use organization profiles?</h3>
      <p className="text-gray-700 mb-6">
        For research labs, whether part of a university or industry corporation, organization profiles provide a way to
        organize the models and datasets your team has published in one place. For large companies, an organization
        profile will display all of the competitions you've hosted.
      </p>
      <p className="text-gray-700 mb-6">
        For professors, we recommend using a Kaggle group to make it easier to see and manage datasets, notebooks
        and models you share in your classes.
      </p>
    </div>
  );
};

const CreatingProfileSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Creating a new organization profile</h2>
      <h3 className="text-2xl font-bold mb-4">Creation</h3>
      <p className="text-gray-700 mb-4">
        Anyone with a Kaggle account can request the creation of an organization profile. To start the process, sign in
        to your Kaggle account, and then fill out the new Organization request form.
      </p>
      <p className="text-gray-700 mb-6">You'll need to provide the following information:</p>
      <ul className="list-disc pl-8 mb-6 space-y-4">
        <li>
          <strong>Name:</strong> The name of your organization
        </li>
        <li>
          <strong>URL:</strong> You should edit this to something that's short. All links to this organization page will start with this URL,
          e.g., any datasets or models it owns.
        </li>
        <li>
          <strong>Moderation Details:</strong> Some information you share won't appear on your organization profile page, but will be
          used by Kaggle staff to verify your organization.
        </li>
      </ul>

      <p className="text-gray-700 mb-6">
        You'll be able to set the following on your organization profile page after it has been created:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-4">
        <li>
          <strong>Overview:</strong> A "bio" or long description for your organization
        </li>
        <li>
          <strong>Tagline:</strong> A short description of your organization
        </li>
        <li>
          <strong>Website:</strong> A URL to your organization website
        </li>
        <li>
          <strong>Image:</strong> A 400 × 400px image of your organization logo
        </li>
      </ul>

      <p className="text-gray-700 mb-6">
        You'll also be able to change or update most details of your organization freely on the organization profile page,
        as well as invite members to your organization, and more.  
      </p>

      <h3 className="text-2xl font-bold mb-4">Review</h3>
      <p className="text-gray-700 mb-6">
        Once you complete the new organization request form, your organization will be reviewed by the Kaggle team
        for approval, before it's created. Continue to the next section "Review" to learn more about the next steps.
      </p>

      <h3 className="text-2xl font-bold mb-4">Review</h3>
      <p className="text-gray-700 mb-6">
        Please be patient while your organization is being reviewed by the Kaggle team.
      </p>
      <p className="text-gray-700 mb-6">
        If you have questions about the review process or you would like to appeal a review, please see our contact
        page: https://www.kaggle.com/contact#/other/issue
      </p>

      <h3 className="text-2xl font-bold mb-4">Approval</h3>
      <p className="text-gray-700 mb-6">
        Once your organization has been approved, you'll receive an email and/or site notification. You and other
        members of the organization can now create organization-owned datasets, models, or competitions including
        making them public. Anyone can also see your organization's profile page.
      </p>
    </div>
  );
};

export default OrganizationsPage;