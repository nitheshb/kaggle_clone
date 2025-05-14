import React, { useRef } from 'react';

function Rules() {
  // Create refs for each major section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);
  const section14Ref = useRef(null);
  const section15Ref = useRef(null);
  const section16Ref = useRef(null);
  const section17Ref = useRef(null);
  const section4Ref = useRef(null);

  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex">
      {/* Main content */}
      <div className="flex-1 pr-8 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Rules</h2>
        
        <p className="text-gray-700 mb-6">
          ENTRY IN THIS COMPETITION CONSTITUTES YOUR ACCEPTANCE OF THESE OFFICIAL COMPETITION RULES.
          See Section 3.18 for defined terms.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Competition named below is a skills-based competition to promote and further the field of data science. You must register via the Competition Website to enter. To enter the Competition, you must agree to these Official Competition Rules, which incorporate by reference the provisions and content of the Competition Website and any Specific Competition Rules herein (collectively, the "Rules"). Please read these Rules carefully before entry to ensure you understand and agree. You further agree that Submission in the Competition constitutes agreement to these Rules. You may not submit to the Competition and are not eligible to receive the prizes associated with this Competition unless you agree to these Rules. These Rules form a binding legal agreement between you and the Competition Sponsor with respect to the Competition. Your competition Submissions must conform to the requirements stated on the Competition Website. Your Submissions will be scored based on the evaluation metric described on the Competition Website. Subject to compliance with the Competition Rules, Prizes, if any, will be awarded to Participants with the best scores, based on the merits of the data science models submitted. See below for the complete Competition Rules.
        </p>
        
        <p className="text-gray-700 mb-6">
          You cannot sign up to Kaggle from multiple accounts and therefore you cannot enter or submit from multiple accounts.
        </p>

        {/* Section 1 */}
        <div ref={section1Ref} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">1. COMPETITION-SPECIFIC TERMS</h3>
          <div className="pl-4 space-y-4">
            <div>
              <p className="text-gray-700 font-medium">1. COMPETITION TITLE</p>
              <p className="text-gray-700">Playground Series - Season 5, Episode 5</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">2. COMPETITION SPONSOR</p>
              <p className="text-gray-700">Google LLC</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">3. COMPETITION SPONSOR ADDRESS</p>
              <p className="text-gray-700">1600 Amphitheatre Pkwy Mountain View, CA 94043</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">4. COMPETITION WEBSITE</p>
              <p className="text-gray-700">https://www.kaggle.com/competitions/playground-series-s5e5</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">5. TOTAL PRIZES AVAILABLE</p>
              <p className="text-gray-700">Choice of Kaggle merchandise</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">6. WINNER LICENSE TYPE</p>
              <p className="text-gray-700">None</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium">7. DATA ACCESS AND USE</p>
              <p className="text-gray-700">Apache 2.0</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div ref={section2Ref} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">2. COMPETITION-SPECIFIC RULES</h3>
          <div className="pl-4 space-y-6">
            <div>
              <p className="text-gray-700 font-medium mb-2">1. TEAM LIMITS</p>
              <p className="text-gray-700 mb-2">a. The maximum Team size is three (3).</p>
              <p className="text-gray-700">b. Team mergers are allowed and can be performed by the Team leader. In order to merge, the combined Team must have a total Submission count less than or equal to the maximum allowed as of the Team Merger Deadline. The maximum allowed is the number of Submissions per day multiplied by the number of days the competition has been running.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">2. SUBMISSION LIMITS</p>
              <p className="text-gray-700 mb-2">a. You may submit a maximum of five (5) Submissions per day.</p>
              <p className="text-gray-700">b. You may select up to two (2) Final Submissions for judging.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">3. COMPETITION TIMELINE</p>
              <p className="text-gray-700">a. Competition Timeline dates (including Entry Deadline, Final Submission Deadline, Start Date, and Team Merger Deadline, as applicable) are reflected on the competition's Overview  Timeline page.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">4. COMPETITION DATA</p>
              <p className="text-gray-700 font-medium mb-1">a. Data Access and Use.</p>
              <p className="text-gray-700 mb-2">
                You may access and use the Competition Data for any purpose, whether commercial or non-commercial, including for participating in the Competition and on Kaggle.com forums, and for academic research and education. The Competition Sponsor reserves the right to disqualify any Participant who uses the Competition Data other than as permitted by the Competition Website and these Rules.
              </p>
              <p className="text-gray-700 mb-2">
                The Competition Data is also subject to the following terms and conditions: Apache 2.0.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b. Data Security.</p>
              <p className="text-gray-700">
                You agree to use reasonable and suitable measures to prevent persons who have not formally agreed to these Rules from gaining access to the Competition Data. You agree not to transmit, duplicate, publish, redistribute or otherwise provide or make available the Competition Data to any party not participating in the Competition. You agree to notify Kaggle immediately upon learning of any possible unauthorized transmission of or unauthorized access to the Competition Data and agree to work with Kaggle to rectify any unauthorized transmission or access.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">5. WINNER LICENSE</p>
              <p className="text-gray-700">None.</p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">6. EXTERNAL DATA AND TOOLS</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                You may use data other than the Competition Data ("External Data") to develop and test your Submissions. However, you will ensure the External Data is either publicly available and equally accessible to use by all Participants of the Competition for purposes of the competition at no cost to the other Participants, or satisfies the Reasonableness criteria as outlined in Section 2.6.b below. The ability to use External Data under this Section does not limit your other obligations under these Competition Rules, including but not limited to Section 2.8 (Winners Obligations).
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                The use of external data and models is acceptable unless specifically prohibited by the Host. Because of the potential costs or restrictions (e.g., "geo restrictions") associated with obtaining rights to use external data or certain software and associated tools, their use must be "reasonably accessible to all" and of "minimal cost". Also, regardless of the cost challenges as they might affect all Participants during the course of the competition, the costs of potentially procuring a license for software used to generate a Submission, must also be considered. The Host will employ an assessment of whether or not the following criteria can exclude the use of the particular LLM, data set(s), or tool(s):
              </p>
              <p className="text-gray-700 mb-2">
                Are Participants being excluded from a competition because of the "excessive" costs for access to certain LLMs, external data, or tools that might be used by other Participants. The Host will assess the excessive cost concern by applying a "Reasonableness" standard (the "Reasonableness Standard"). The Reasonableness Standard will be determined and applied by the Host in light of things like cost thresholds and accessibility.
              </p>
              <p className="text-gray-700 mb-2">
                By way of example only, a small subscription charge to use additional elements of a large language model such as Gemini Advanced are acceptable if meeting the Reasonableness Standard of Sec. 8.2. Purchasing a license to use a proprietary dataset that exceeds the cost of a prize in the competition would not be considered reasonable.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c. Automated Machine Learning Tools ("AMLT")</p>
              <p className="text-gray-700">
                Individual Participants and Teams may use automated machine learning tool(s) ("AMLT") (e.g., Google toML, H2O Driverless AI, etc.) to create a Submission, provided that the Participant or Team ensures that they have an appropriate license to the AMLT such that they are able to comply with the Competition Rules.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">7. ELIGIBILITY</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                Unless otherwise stated in the Competition-Specific Rules above or prohibited by internal policies of the Competition Entities, employees, interns, contractors, officers and directors of Competition Entities may enter and participate in the Competition, but are not eligible to win any Prizes. "Competition Entities" means the Competition Sponsor, Kaggle Inc., and their respective parent companies, subsidiaries and affiliates. If you are such a Participant from a Competition Entity, you are subject to all applicable internal policies of your employer with respect to your participation.
              </p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">8. WINNER'S OBLIGATIONS</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                As a condition to being awarded a Prize, a Prize winner must fulfill the following obligations:
              </p>
              <p className="text-gray-700 mb-2">
                Deliver to the Competition Sponsor the final model's software code as used to generate the winning Submission and associated documentation. The delivered software code should follow these documentation guidelines, must be capable of generating the winning Submission, and contain a description of resources required to build and/or run the executable code successfully. For avoidance of doubt, delivered software code should include training code, inference code, and a description of the required computational environment.
              </p>
              <p className="text-gray-700 mb-2">
                a. To the extent that the final model's software code includes generally commercially available software that is not owned by you, but that can be procured by the Competition Sponsor without undue expense, then instead of delivering the code for that software to the Competition Sponsor, you must identify that software, method for procuring it, and any parameters or other information necessary to replicate the winning Submission; Individual Participants and Teams who create a Submission using an AMLT may win a Prize. However, for clarity, the potential winner's Submission must still meet the requirements of these Rules, including but not limited to Section 2.5 (Winners License), Section 2.8 (Winners Obligations), and Section 3.14 (Warranty, Indemnity, and Release)."
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                Individual Participants and Teams who create a Submission using an AMLT may win a Prize. However, for clarity, the potential winner's Submission must still meet the requirements of these Rules,
              </p>
              <p className="text-gray-700 mb-2">
                Grant to the Competition Sponsor the license to the winning Submission stated in the Competition Specific Rules above, and represent that you have the unrestricted right to grant that license;
              </p>
              <p className="text-gray-700">
                Sign and return all Prize acceptance documents as may be required by Competition Sponsor or Kaggle, including without limitation: (a) eligibility certifications; (b) licenses, releases and other agreements required under the Rules; and (c) U.S. tax forms (such as IRS Form W-9 if U.S. resident, IRS Form W-8BEN if foreign resident, or future equivalents).
              </p>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2">9. GOVERNING LAW</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                Unless otherwise provided in the Competition Specific Rules above, all claims arising out of or relating to these Rules will be governed by California law, excluding its conflict of laws rules, and will be litigated exclusively in the Federal or State courts of Santa Clara County, California, USA. The parties consent to personal jurisdiction in those courts. If any provision of these Rules is held to be invalid or unenforceable, all remaining provisions of the Rules will remain in full force and effect.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div ref={section3Ref} className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">3. GENERAL COMPETITION RULES - BINDING AGREEMENT</h3>
          <div className="pl-4 space-y-6">
            <div ref={section11Ref}>
              <p className="text-gray-700 font-medium mb-2">1. ELIGIBILITY</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                To be eligible to enter the Competition, you must be:
              </p>
              <p className="text-gray-700 mb-2">
                a registered account holder at Kaggle.com;
                the older of 18 years old or the age of majority in your jurisdiction of residence (unless otherwise agreed to by Competition Sponsor and appropriate parental/guardian consents have been obtained by Competition Sponsor);
                not a resident of Crimea, so-called Donetsk People's Republic (DNR) or Luhansk People's Republic (LNR), Cuba, Iran, Syria, or North Korea; and
                not a person or representative of an entity under U.S. export controls or sanctions (see: https://www.treasury.gov/resourcecenter/sanctions/Programs/Pages/Programs.aspx).
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                Competitions are open to residents of the United States and worldwide, except that if you are a resident of Crimea, so-called Donetsk People's Republic (DNR) or Luhansk People's Republic (LNR), Cuba, Iran, Syria, North Korea, or are subject to U.S. export controls or sanctions, you may not enter the Competition. Other local rules and regulations may apply to you, so please check your local laws to ensure that you are eligible to participate in skills-based competitions. The Competition Host reserves the right to forego or award alternative Prizes where needed to comply with local laws. If a winner is located in a country where prizes cannot be awarded, then they are not eligible to receive a prize.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c.</p>
              <p className="text-gray-700 mb-2">
                If you are entering as a representative of a company, educational institution or other legal entity, or on behalf of your employer, these rules are binding on you, individually, and the entity you represent or where you are an employee. If you are acting within the scope of your employment, or as an agent of another party, you warrant that such party or your employer has full knowledge of your actions and has consented thereto, including your potential receipt of a Prize. You further warrant that your actions do not violate your employer's or entity's policies and procedures.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">d.</p>
              <p className="text-gray-700">
                The Competition Sponsor reserves the right to verify eligibility and to adjudicate on any dispute at any time. If you provide any false information relating to the Competition concerning your identity, residency, mailing address, telephone number, email address, ownership of right, or information required for entering the Competition, you may be immediately disqualified from the Competition.
              </p>
            </div>
            
            <div ref={section12Ref}>
              <p className="text-gray-700 font-medium mb-2">2. SPONSOR AND HOSTING PLATFORM</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                The Competition is sponsored by Competition Sponsor named above. The Competition is hosted on behalf of Competition Sponsor by Kaggle Inc. ("Kaggle"). Kaggle is an independent contractor of Competition Sponsor, and is not a party to this or any agreement between you and Competition Sponsor. You understand that Kaggle has no responsibility with respect to selecting the potential Competition winner(s) or awarding any Prizes. Kaggle will perform certain administrative functions relating to hosting the Competition, and you agree to abide by the provisions relating to Kaggle under these Rules. As a Kaggle.com account holder and user of the Kaggle competition platform, remember you have accepted and are subject to the Kaggle Terms of Service at www.kaggle.com/terms in addition to these Rules.
              </p>
            </div>
            
            <div ref={section13Ref}>
              <p className="text-gray-700 font-medium mb-2">3. COMPETITION PERIOD</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                For the purposes of Prizes, the Competition will run from the Start Date and time to the Final Submission Deadline (such duration the "Competition Period"). The Competition Timeline is subject to change, and Competition Sponsor may introduce additional hurdle deadlines during the Competition Period. Any updated or additional deadlines will be publicized on the Competition Website. It is your responsibility to check the Competition Website regularly to stay informed of any deadline changes. YOU ARE RESPONSIBLE FOR DETERMINING THE CORRESPONDING TIME ZONE IN YOUR LOCATION.
              </p>
            </div>
            
            <div ref={section14Ref}>
              <p className="text-gray-700 font-medium mb-2">4. COMPETITION ENTRY</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                NO PURCHASE NECESSARY TO ENTER OR WIN. To enter the Competition, you must register on the Competition Website prior to the Entry Deadline, and follow the instructions for developing and entering your Submission through the Competition Website. Your Submissions must be made in the manner and format, and in compliance with all other requirements, stated on the Competition Website (the "Requirements"). Submissions must be received before any Submission deadlines stated on the Competition Website. Submissions not received by the stated deadlines will not be eligible to receive a Prize.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                Submissions may not use or incorporate information from hand labeling or human prediction of the validation dataset or test data records.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c.</p>
              <p className="text-gray-700 mb-2">
                If the Competition is a multi-stage competition with temporally separate training and/or test data, one or more valid Submissions may be required during each Competition stage in the manner described on the Competition Website in order for the Submissions to be Prize eligible.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">d.</p>
              <p className="text-gray-700">
                Submissions are void if they are in whole or part illegible, incomplete, damaged, altered, counterfeit, obtained through fraud, or late. Competition Sponsor reserves the right to disqualify any entrant who does not follow these Rules, including making a Submission that does not meet the Requirements.
              </p>
            </div>
            
            <div ref={section15Ref}>
              <p className="text-gray-700 font-medium mb-2">5. INDIVIDUALS AND TEAMS</p>
              <p className="text-gray-700 font-medium mb-1">a. Individual Account.</p>
              <p className="text-gray-700 mb-2">
                You may make Submissions only under one, unique Kaggle.com account. You will be disqualified if you make Submissions through more than one Kaggle account, or attempt to falsify an account to act as your proxy. You may submit up to the maximum number of Submissions per day as specified on the Competition Website.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b. Teams.</p>
              <p className="text-gray-700 mb-2">
                If permitted under the Competition Website guidelines, multiple individuals may collaborate as a Team; however, you may join or form only one Team. Each Team member must be a single individual with a separate Kaggle account. You must register individually for the Competition before joining a Team. You must confirm your Team membership to make it official by responding to the Team notification message sent to your Kaggle account. Team membership may not exceed the Maximum Team Size stated on the Competition Website.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c. Team Merger.</p>
              <p className="text-gray-700 mb-2">
                Teams may request to merge via the Competition Website. Team mergers may be allowed provided that: (i) the combined Team does not exceed the Maximum Team Size; (ii) the number of Submissions made by the merging Teams does not exceed the number of Submissions permissible for one Team at the date of the merger request; (iii) the merger is completed before the earlier of: any merger deadline or the Competition deadline; and (iv) the proposed combined Team otherwise meets all the requirements of these Rules.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">d. Private Sharing.</p>
              <p className="text-gray-700">
                No private sharing outside of Teams. Privately sharing code or data outside of Teams is not permitted. It's okay to share code if made available to all Participants on the forums.
              </p>
            </div>
            
            <div ref={section16Ref}>
              <p className="text-gray-700 font-medium mb-2">6. SUBMISSION CODE REQUIREMENTS</p>
              <p className="text-gray-700 font-medium mb-1">a. Private Code Sharing.</p>
              <p className="text-gray-700 mb-2">
                Unless otherwise specifically permitted under the Competition Website or Competition Specific Rules above, during the Competition Period, you are not allowed to privately share source or executable code developed in connection with or based upon the Competition Data or other source or executable code relevant to the Competition ("Competition Code"). This prohibition includes sharing Competition Code between separate Teams, unless a Team merger occurs. Any such sharing of Competition Code is a breach of these Competition Rules and may result in disqualification.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b. Public Code Sharing.</p>
              <p className="text-gray-700 mb-2">
                You are permitted to publicly share Competition Code, provided that such public sharing does not violate the intellectual property rights of any third party. If you do choose to share Competition Code or other such code, you are required to share it on Kaggle.com on the discussion forum or notebooks associated specifically with the Competition for the benefit of all competitors. By so sharing, you are deemed to have licensed the shared code under an Open Source Initiative-approved license (see www.opensource.org) that in no event limits commercial use of such Competition Code or model containing or depending on such Competition Code.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c. Use of Open Source.</p>
              <p className="text-gray-700">
                Unless otherwise stated in the Specific Competition Rules above, if open source code is used in the model to generate the Submission, then you must only use open source code licensed under an Open Source Initiative-approved license (see www.opensource.org) that in no event limits commercial use of such code or model containing or depending on such code.
              </p>
            </div>
            
            <div ref={section17Ref}>
              <p className="text-gray-700 font-medium mb-2">7. DETERMINING WINNERS</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                Each Submission will be scored and ranked by the evaluation metric stated on the Competition Website. During the Competition Period, the current ranking will be visible on the Competition Website's Public Leaderboard. The potential winner(s) are determined solely by the leaderboard ranking on the Private Leaderboard, subject to compliance with these Rules. The Public Leaderboard will be based on the public test set and the Private Leaderboard will be based on the private test set.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700">
                In the event of a tie, the Submission that was entered first to the Competition will be the winner. In the event a potential winner is disqualified for any reason, the Submission that received the next highest score rank will be chosen as the potential winner.
              </p>
            </div>
            
                       {/* Continue from previous implementation */}

            <div ref={section4Ref}>
              <p className="text-gray-700 font-medium mb-2">8. NOTIFICATION OF WINNERS & DISQUALIFICATION</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                The potential winner(s) will be notified by email.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                If a potential winner (i) does not respond to the notification attempt within one (1) week from the first notification attempt or (ii) notifies Kaggle within one week after the Final Submission Deadline that the potential winner does not want to be nominated as a winner or does not want to receive a Prize, then, in each case (i) and (ii) such potential winner will not receive any Prize, and an alternate potential winner will be selected from among all eligible entries received based on the Competition's judging criteria.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c.</p>
              <p className="text-gray-700 mb-2">
                In case (i) and (ii) above Kaggle may disqualify the Participant. However, in case (ii) above, if requested by Kaggle, such potential winner may provide code and documentation to verify the Participant's compliance with these Rules. If the potential winner provides code and documentation to the satisfaction of Kaggle, the Participant will not be disqualified pursuant to this paragraph.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">d.</p>
              <p className="text-gray-700 mb-2">
                Competition Sponsor reserves the right to disqualify any Participant from the Competition if the Competition Sponsor reasonably believes that the Participant has attempted to undermine the legitimate operation of the Competition by cheating, deception, or other unfair playing practices or abuses, threatens or harasses any other Participants, Competition Sponsor or Kaggle.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">e.</p>
              <p className="text-gray-700 mb-2">
                A disqualified Participant may be removed from the Competition leaderboard, at Kaggle's sole discretion. If a Participant is removed from the Competition Leaderboard, additional winning features associated with the Kaggle competition platform, for example Kaggle points or medals, may also not be awarded.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">f.</p>
              <p className="text-gray-700">
                The final leaderboard list will be publicly displayed at Kaggle.com. Determinations of Competition Sponsor are final and binding.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">9. PRIZES</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                Prize(s) are as described on the Competition Website and are only available for winning during the time period described on the Competition Website. The odds of winning any Prize depends on the number of eligible Submissions received during the Competition Period and the skill of the Participants.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                All Prizes are subject to Competition Sponsor's review and verification of the Participant's eligibility and compliance with these Rules, and the compliance of the winning Submissions with the Submissions Requirements. In the event that the Submission demonstrates non-compliance with these Competition Rules, Competition Sponsor may at its discretion take either of the following actions: (i) disqualify the Submission(s); or (ii) require the potential winner to remediate within one week after notice all issues identified in the Submission(s) (including, without limitation, the resolution of license conflicts, the fulfillment of all obligations required by software licenses, and the removal of any software that violates the software restrictions).
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c.</p>
              <p className="text-gray-700 mb-2">
                A potential winner may decline to be nominated as a Competition winner in accordance with Section 3.8.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">d.</p>
              <p className="text-gray-700 mb-2">
                Potential winners must return all required Prize acceptance documents within two (2) weeks following notification of such required documents, or such potential winner will be deemed to have forfeited the prize and another potential winner will be selected. Prize(s) will be awarded within approximately thirty (30) days after receipt by Competition Sponsor or Kaggle of the required Prize acceptance documents. Transfer or assignment of a Prize is not allowed.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">e.</p>
              <p className="text-gray-700 mb-2">
                You are not eligible to receive any Prize if you do not meet the Eligibility requirements in Section 2.7 and Section 3.1 above.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">f.</p>
              <p className="text-gray-700">
                If a Team wins a monetary Prize, the Prize money will be allocated in even shares between the eligible Team members, unless the Team unanimously opts for a different Prize split and notifies Kaggle before Prizes are issued.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">10. TAXES</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                ALL TAXES IMPOSED ON PRIZES ARE THE SOLE RESPONSIBILITY OF THE WINNERS. Payments to potential winners are subject to the express requirement that they submit all documentation requested by Competition Sponsor or Kaggle for compliance with applicable state, federal, local and foreign (including provincial) tax reporting and withholding requirements. Prizes will be net of any taxes that Competition Sponsor is required by law to withhold. If a potential winner fails to provide any required documentation or comply with applicable laws, the Prize may be forfeited and Competition Sponsor may select an alternative potential winner. Any winners who are U.S. residents will receive an IRS Form-1099 in the amount of their Prize.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">11. GENERAL CONDITIONS</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                All federal, state, provincial and local laws and regulations apply.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">12. PUBLICITY</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                You agree that Competition Sponsor, Kaggle and its affiliates may use your name and likeness for advertising and promotional purposes without additional compensation, unless prohibited by law.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">13. PRIVACY</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                You acknowledge and agree that Competition Sponsor and Kaggle may collect, store, share and otherwise use personally identifiable information provided by you during the Kaggle account registration process and the Competition, including but not limited to, name, mailing address, phone number, and email address ("Personal Information"). Kaggle acts as an independent controller with regard to its collection, storage, sharing, and other use of this Personal Information, and will use this Personal Information in accordance with its Privacy Policy {"<www.kaggle.com/privacy>"}, including for administering the Competition. As a Kaggle.com account holder, you have the right to request access to, review, rectification, portability or deletion of any personal data held by Kaggle about you by logging into your account and/or contacting Kaggle Support at {"<www.kaggle.com/contact>"}.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700">
                As part of Competition Sponsor performing this contract between you and the Competition Sponsor, Kaggle will transfer your Personal Information to Competition Sponsor, which acts as an independent controller with regard to this Personal Information. As a controller of such Personal Information, Competition Sponsor agrees to comply with all U.S. and foreign data protection obligations with regard to your Personal Information. Kaggle will transfer your Personal Information to Competition Sponsor in the country specified in the Competition Sponsor Address listed above, which may be a country outside the country of your residence. Such country may not have privacy laws and regulations similar to those of the country of your residence.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">14. WARRANTY, INDEMNITY AND RELEASE</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                You warrant that your Submission is your own original work and, as such, you are the sole and exclusive owner and rights holder of the Submission, and you have the right to make the Submission and grant all required licenses. You agree not to make any Submission that: (i) infringes any third party proprietary rights, intellectual property rights, industrial property rights, personal or moral rights or any other rights, including without limitation, copyright, trademark, patent, trade secret, privacy, publicity or confidentiality obligations, or defames any person; or (ii) otherwise violates any applicable U.S. or foreign state or federal law.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                To the maximum extent permitted by law, you indemnify and agree to keep indemnified Competition Entities at all times from and against any liability, claims, demands, losses, damages, costs and expenses resulting from any of your acts, defaults or omissions and/or a breach of any warranty set forth herein. To the maximum extent permitted by law, you agree to defend, indemnify and hold harmless the Competition Entities from and against any and all claims, actions, suits or proceedings, as well as any and all losses, liabilities, damages, costs and expenses (including reasonable attorneys fees) arising out of or accruing from: (a) your Submission or other material uploaded or otherwise provided by you that infringes any third party proprietary rights, intellectual property rights, industrial property rights, personal or moral rights or any other rights, including without limitation, copyright, trademark, patent, trade secret, privacy, publicity or confidentiality obligations, or defames any person; (b) any misrepresentation made by you in connection with the Competition; (c) any non-compliance by you with these Rules or any applicable U.S. or foreign state or federal law; (d) claims brought by persons or entities other than the parties to these Rules arising from or related to your involvement with the Competition; and (e) your acceptance, possession, misuse or use of any Prize, or your participation in the Competition and any Competition-related activity.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c.</p>
              <p className="text-gray-700">
                You hereby release Competition Entities from any liability associated with: (a) any malfunction or other problem with the Competition Website; (b) any error in the collection, processing, or retention of any Submission; or (c) any typographical or other error in the printing, offering or announcement of any Prize or winners.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">15. INTERNET</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                Competition Entities are not responsible for any malfunction of the Competition Website or any late, lost, damaged, misdirected, incomplete, illegible, undeliverable, or destroyed Submissions or entry materials due to system errors, failed, incomplete or garbled computer or other telecommunication transmission malfunctions, hardware or software failures of any kind, lost or unavailable network connections, typographical or system/human errors and failures, technical malfunction(s) of any telephone network or lines, cable connections, satellite transmissions, servers or providers, or computer equipment, traffic congestion on the Internet or at the Competition Website, or any combination thereof, which may limit a Participant's ability to participate.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">16. RIGHT TO CANCEL, MODIFY OR DISQUALIFY</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                If for any reason the Competition is not capable of running as planned, including infection by computer virus, bugs, tampering, unauthorized intervention, fraud, technical failures, or any other causes which corrupt or affect the administration, security, fairness, integrity, or proper conduct of the Competition, Competition Sponsor reserves the right to cancel, terminate, modify or suspend the Competition. Competition Sponsor further reserves the right to disqualify any Participant who tampers with the submission process or any other part of the Competition or Competition Website. Any attempt by a Participant to deliberately damage any website, including the Competition Website, or undermine the legitimate operation of the Competition is a violation of criminal and civil laws. Should such an attempt be made, Competition Sponsor and Kaggle each reserves the right to seek damages from any such Participant to the fullest extent of the applicable law.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">17. NOT AN OFFER OR CONTRACT OF EMPLOYMENT</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700">
                Under no circumstances will the entry of a Submission, the awarding of a Prize, or anything in these Rules be construed as an offer or contract of employment with Competition Sponsor or any of the Competition Entities. You acknowledge that you have submitted your Submission voluntarily and not in confidence or in trust. You acknowledge that no confidential, fiduciary, agency, employment or other similar relationship is created between you and Competition Sponsor or any of the Competition Entities by your acceptance of these Rules or your entry of your Submission.
              </p>
            </div>

            <div ref={section4Ref}>
              <p className="text-gray-700 font-medium mb-2">4. DEFINITIONS</p>
              <p className="text-gray-700 font-medium mb-1">a.</p>
              <p className="text-gray-700 mb-2">
                "Competition Data" are the data or datasets available from the Competition Website for the purpose of use in the Competition, including any prototype or executable code provided on the Competition Website. The Competition Data will contain private and public test sets. Which data belongs to which set will not be made available to Participants.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">b.</p>
              <p className="text-gray-700 mb-2">
                An "Entry" is when a Participant has joined, signed up, or accepted the rules of a competition. Entry is required to make a Submission to a competition.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">c.</p>
              <p className="text-gray-700 mb-2">
                A "Final Submission" is the Submission selected by the user, or automatically selected by Kaggle in the event not selected by the user, that is/are used for final placement on the competition leaderboard.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">d.</p>
              <p className="text-gray-700 mb-2">
                A "Participant" or "Participant User" is an individual who participates in a competition by entering the competition and making a Submission.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">e.</p>
              <p className="text-gray-700 mb-2">
                The "Private Leaderboard" is a ranked display of Participants' Submission scores against the private test set. The Private Leaderboard determines the final standing in the competition.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">f.</p>
              <p className="text-gray-700 mb-2">
                The "Public Leaderboard" is a ranked display of Participants' Submission scores against a representative sample of the test data. This leaderboard is visible throughout the competition.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">g.</p>
              <p className="text-gray-700 mb-2">
                A "Sponsor" is responsible for hosting the competition, which includes but is not limited to providing the data for the competition, determining winners, and enforcing competition rules.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">h.</p>
              <p className="text-gray-700 mb-2">
                A "Submission" is anything provided by the Participant to the Sponsor to be evaluated for competition purposes and determine leaderboard position. A Submission may be made as a model, notebook, prediction file, or other format as determined by the Sponsor.
              </p>
              
              <p className="text-gray-700 font-medium mb-1">i.</p>
              <p className="text-gray-700">
                A "Team" is one or more Participants participating together in a Kaggle competition, by officially merging together as a Team within the competition platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar navigation */}
      <div className="w-64 pl-4 border-l border-gray-200">
  <div className="sticky top-4">
    <h4 className="text-lg font-semibold text-gray-800 mb-3">Jump to Section</h4>
    <ul className="space-y-2">
      <li>
        <button 
          onClick={() => scrollToSection(section1Ref)} 
          className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
        >
          1. Competition-Specific Terms
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section2Ref)} 
          className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
        >
          2. Competition-Specific Rules
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section3Ref)} 
          className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
        >
          3. General Competition Rules
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section11Ref)} 
          className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
        >
          3.1 Eligibility
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section12Ref)} 
          className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
        >
          3.2 Sponsor and Hosting
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section13Ref)} 
          className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
        >
          3.3 Competition Period
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section14Ref)} 
          className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
        >
          3.4 Competition Entry
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section15Ref)} 
          className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
        >
          3.5 Individuals and Teams
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section16Ref)} 
          className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
        >
          3.6 Submission Code
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section17Ref)} 
          className="text-gray-600 hover:text-black text-sm pl-4 transition-colors duration-200"
        >
          3.7 Determining Winners
        </button>
      </li>
      <li>
        <button 
          onClick={() => scrollToSection(section4Ref)} 
          className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
        >
          4. Definitions
        </button>
      </li>
    </ul>
  </div>
</div>
    </div>
  );
}

export default Rules;