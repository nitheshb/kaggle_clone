// function SupportContact() {
//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold">SupportContact</h1>
//       <p className="mt-4">This is the SupportContact page.</p>
//     </div>
//   );
// }

// export default SupportContact;




import React from 'react';

const sections = [
  {
    title: 'Account/Login',
    links: [
      'I cannot activate my account',
      "I'd like to change my...",
      'I want to appeal an enforcement action taken against my account or content',
      'I want to appeal Kaggle\'s decision not to take action on content that I reported',
      'I am blocked from accessing my account?',
      "I'd like to delete my account",
      "I'd like to withdraw my account",
      'I am having problems changing my login method',
      'I have a question about identity verification',
    ],
  },
  {
    title: 'Competitions',
    links: [
      'Where do I start?',
      'I have a question about a current competition',
      'I have a question about an old competition',
      'I have a question about a Community competition',
      "I'm interested in hosting a competition",
      "I'd like to report cheating in a Competition",
    ],
  },
  {
    title: 'Datasets',
    links: [
      'Using data for a project/questions about data license',
      "I'd like to delete my dataset",
    ],
  },
  {
    title: 'Notebooks',
    links: [
      "I'm having notebook connection issues",
      "I'd like to request a package/library",
      'I need to delete my notebook',
    ],
  },
  {
    title: 'Privacy and Security',
    links: [
      'I want you to delete my personal data',
      "I want to delete content I've created on Kaggle",
      'I want you to delete content that someone else created',
      'I want a copy of all my data',
      'I want to exercise my rights under the EU General Data Protection Regulation',
      'I am under the age of 18 (or the age of contractual majority in my country) and want to use Kaggle or enter into Kaggle competitions',
      "I'm a parent or guardian of a child under 13 and found out that my child has been using Kaggle",
      'I have questions about the Privacy Policy or want to contact your Data Protection Office',
      "I'd like more Information about Monthly Active Recipients under the Digital Services Act (EU)",
      'I received an inappropriate message from another user',
    ],
  },
  {
    title: 'Organizations',
    links: ['I want to delete an organization profile'],
  },
  {
    title: 'Other',
    links: [
      'I have a media/press/appearance inquiry',
      'Kaggle Logos and Brand Guidelines',
      'Feature Request/Enhancement',
      'I found an issue with the website',
      "Where can I find Kaggle's community guidelines?",
      'Australian Online Safety Act',
    ],
  },
];

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-lg mb-10">
        Thanks for your interest in Kaggle. A lot of the common inquiries we receive are listed below.
        Please click on the one that applies to you to learn more.
      </p>

      {sections.map((section, idx) => (
        <section key={idx} className="mb-10">
          <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
          <ul className="space-y-3">
            {section.links.map((text, i) => (
              <li key={i}>
                <a href="#" className="text-blue-600 hover:underline">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Index;
