// function Terms() {
//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold">Terms</h1>
//       <p className="mt-4">This is the Terms page.</p>
//     </div>
//   );
// }

// export default Terms;




import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Terms() {
  const [version, setVersion] = useState("October 4, 2024 (active)");
  const [isOpen, setIsOpen] = useState(false);

  const versions = [
    "October 4, 2024 (active)",
    "February 16, 2024",
    "May 26, 2022",
    "March 3, 2022"
  ];
  
  // Map versions to their effective dates
  const versionDates = {
    "October 4, 2024 (active)": "October 4, 2024",
    "February 16, 2024": "February 16, 2024",
    "May 26, 2022": "May 26, 2022",
    "March 3, 2022": "March 3, 2022"
  };

  const handleVersionSelect = (selectedVersion) => {
    setVersion(selectedVersion);
    setIsOpen(false);
  };

  return (
    <div className="font-sans max-w-4xl mx-auto  py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms</h1>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">VERSION</p>
        <div className="relative inline-block w-full max-w-md">
          <button 
            className=" flex items-center justify-between border border-gray-300 rounded-md px-4 py-2 bg-white text-left text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{version}</span>
            <ChevronDown size={20} />
          </button>
          
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {versions.map((ver, index) => (
                  <button
                    key={index}
                    className={`block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 ${
                      ver === version ? 'bg-gray-200' : ''
                    }`}
                    onClick={() => handleVersionSelect(ver)}
                  >
                    {ver}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-base font-medium text-gray-800 uppercase tracking-wide">
          PLEASE NOTE THAT YOUR USE OF AND ACCESS TO OUR SERVICES (DEFINED BELOW) ARE SUBJECT TO THE FOLLOWING TERMS. IF YOU DO NOT AGREE TO ALL OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS THE SERVICES IN ANY MANNER.
        </p>
        
        <h2 className="text-2xl font-medium text-gray-900 mt-8 text-center">Terms of Use</h2>
        
        <div className="mt-8 text-gray-800">
          <p className="mb-6 text-lg font-medium">Effective Date: {versionDates[version]}</p>
          
          <p className="mb-4 text-base">
            Welcome to Kaggle. Please read on to learn the rules and restrictions that govern your use of our website(s), products, services and applications (the "Services"). If you have any questions, comments, or concerns regarding these Terms or the Services, please <span className="text-blue-600 cursor-pointer hover:underline">contact us</span>. These Terms of Use (the "Terms") are a binding contract between you and Kaggle Inc. ("Kaggle," "we" and "us"). Kaggle is organized under the laws of the State of Delaware, USA, and has offices located at 1600 Amphitheatre Parkway, Mountain View, California 94043 USA. You must agree to and accept all of the Terms, or you don't have the right to use the Services. Your use of the Services in any way means that you agree to all of these Terms, and these Terms will remain in effect while you use the Services. These Terms include the provisions in this document, as well as those in the <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>, <span className="text-blue-600 cursor-pointer hover:underline">Copyright Dispute Policy</span> and the <span className="text-blue-600 cursor-pointer hover:underline">Community Guidelines</span>. In these Terms, the words "include" or "including" mean "including but not limited to", and examples are for illustration purposes and are not limiting.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">1. Will these Terms ever change?</h3>
            <p className="mb-4">
              We are constantly trying to improve our Services, so these Terms may need to change along with the Services. We 
              reserve the right to change the Terms at any time, but if we do, we will bring it to your attention by placing a notice on 
              the www.kaggle.com website, by sending you an email, or by some other means. Changes will not apply retroactively 
              and will become effective no sooner than 14 days after they are posted. However, changes addressing new functions 
              for a Service or changes made for legal reasons will be effective immediately. If you don't agree with the new Terms, 
              you are free to reject them; unfortunately, that means you will no longer be able to use the Services. If you use the 
              Services in any way after a change to the Terms is effective, that means you agree to all of the changes.
            </p>
            <p className="mb-4">
              Except for changes by us as described here, no other amendment or modification of these Terms will be effective 
              unless in writing and signed by both you and us.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">2. What about my privacy?</h3>
            <p className="mb-4">
              Kaggle takes the privacy of its users very seriously. For the current Kaggle Privacy Policy, please click <span className="text-blue-600 cursor-pointer hover:underline">here</span>.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">3. What are the basics of using Kaggle?</h3>
            <p className="mb-4">
              You may be required to sign up for an account, and select a password and username ("Kaggle User ID"). You promise 
              to provide us with accurate, complete, and updated registration information about yourself. You may not select as your 
              Kaggle User ID a name that you don't have the right to use, or another person's name with the intent to impersonate 
              that person. You may not transfer your account to anyone else without our prior written permission. You also may not 
              have, control, or operate under more than one active Kaggle account or Kaggle User ID. If we determine that you have, 
              control, or are operating under more than one Kaggle account or Kaggle User ID, we may take action without notice, 
              including banning your user account, revoking access to your Kaggle User ID, and disqualifying you from any ongoing 
              Competition(s).
            </p>
            <p className="mb-4">
              If you are not of legal age to form a binding contract, please see "Our Commitment to Children's Privacy" in the <span className="text-blue-600 cursor-pointer hover:underline">Privacy 
              Policy</span> and contact us at <span className="text-blue-600 cursor-pointer hover:underline">Kaggle Support</span> for more information on the parental consent process.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">4. Are there any additional restrictions on my use of the Services?</h3>
            <p className="mb-4">
              Yes. Unless otherwise specified in writing by Kaggle, Kaggle does not intend uses of the Services to create obligations 
              under the Health Insurance Portability and Accountability Act of 1996 as it may be amended from time to time, and any 
              regulations issued under it ("HIPAA"), and makes no representations that the Services satisfy HIPAA requirements. If 
              you are or become a Covered Entity or Business Associate, as defined in HIPAA, you will not use the Services for any 
              purpose or in any manner involving Protected Health Information (as defined in HIPAA) unless you have received prior 
              written consent for such use from Kaggle.
            </p>
            <p className="mb-4">
              You represent, warrant, and agree that you will not contribute any Content or User Submission or otherwise use the 
              Services or interact with the Services in a manner that:
            </p>
            
            <div className="pl-8 mb-4">
              <p className="mb-3">
                a. Violates the Acceptable Use Policy, available at <span className="text-blue-600 cursor-pointer hover:underline">www.kaggle.com/aup</span>;
              </p>
              
              <p className="mb-3">
                b. Is harmful, threatening, harassing, defamatory, obscene, or otherwise objectionable;
              </p>
              
              <p className="mb-3">
                c. "Crawls," "scrapes," or "spiders" any page, data, or portion of or relating to the Services or Content (through 
                use of manual or automated means);
              </p>
              
              <p className="mb-3">
                d. Copies or stores any significant portion of the Content;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}