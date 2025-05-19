export default function CommunityGuidelines() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Kaggle Community Guidelines
      </h1>
      
      <div className="text-gray-600 mb-8">
        Updated February 24, 2024 | <span className="text-blue-600 underline cursor-pointer">Previous Version</span>
      </div>

      <p className="text-gray-700 mb-8 leading-relaxed">
        Kaggle's community is made up of data scientists and machine learners from all over the world with a variety of skills and backgrounds. We strongly 
        believe that our community and the future of the field are brighter when we embrace differences.
      </p>

      <p className="text-gray-700 mb-8 leading-relaxed">
        To help ensure that anyone in the world who loves working with data feels equally welcome to participate, we have created the community guidelines 
        below. Our expectation is that all members of the Kaggle community will uphold these guidelines and contribute to their enforcement by{' '}
        <span className="text-blue-600 underline">reporting inappropriate content</span>.
      </p>

      {/* General Guidelines */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">General Guidelines</h2>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        These guidelines apply to all user communication on kaggle.com, including Discussions, Notebooks, Datasets, etc. whether private or public.
      </p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Be patient. Be friendly.</h3>
        <p className="text-gray-700 leading-relaxed">
          Nuance is easily lost when communicating online especially when many people are not using their first language. Instead of making assumptions, stay 
          calm and ask clarifying questions. If you feel you can't be patient or friendly, take a step back and respond later.
        </p>
      </div>

      {/* Examples Table */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Instead of ...</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-3">●</span>
                <span className="text-gray-700">"This is bad. Why bother doing it this way?"</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3">●</span>
                <span className="text-gray-700">"Why won't anyone just tell me how to do well in this competition?"</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Try ...</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">"Thanks for sharing! Have you considered trying ...?"</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">"I'm not sure how to get started here. Can anyone recommend any resources?"</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Discuss and respect ideas. Don't make it personal.</h3>
        <p className="text-gray-700 leading-relaxed">
          We're all here to learn and share ideas. When you have critical feedback, focus on the ideas that others are sharing, not the person.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Harassment and threats are unacceptable.</h3>
        <p className="text-gray-700 leading-relaxed">
          Low-level harassment is still harassment. Even minor or subtle put downs set a negative tone in our community that will alienate others.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Bigotry is not allowed.</h3>
        <p className="text-gray-700 leading-relaxed">
          We strive to be a community that welcomes and supports people of all backgrounds and identities. This includes, but is not limited to, members of any 
          race, ethnicity, culture, national origin, color, immigration status, social and economic class, educational level, sex, sexual orientation, gender identity and 
          expression, age, size, family status, political belief, religion, and mental and physical ability.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Keep it professional.</h3>
        <p className="text-gray-700 leading-relaxed">
          Kaggle is a professional community of data scientists and machine learners; NSFW and other inappropriate content does not have a home here and will be 
          removed. This includes spam and deceptive content or practices, misinformation, sensitive and/or sexually explicit content, violent or dangerous content 
          or practices, and content that violates the intellectual property rights of Kaggle or others.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Don't try to manipulate the progression system.</h3>
        <p className="text-gray-700 leading-relaxed">
          Progression manipulation includes any behaviors that intend to game Kaggle's reputation system. They harm the fairness and quality of the community 
          and are forbidden on our platform. Off-topic self promotion, upvote collusion, plagiarism, and cheating are some (but not all) examples of progression 
          manipulation.
        </p>
      </div>

      {/* Self Promotion */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Self Promotion</h2>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        Self promotion on Kaggle refers to linking to your own work (profile, notebooks, datasets, models, etc.) as well as asking users to visit or upvote your 
        work. Self promotion is considered a type of spam and is generally not allowed on Kaggle. Sharing self-promoting posts in forums or in comments may 
        result in the removal of that content and a warning may be issued to the author.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        There are a few exceptions where linking to your own content is allowed:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Posts in the Accomplishments forums</li>
        <li>Competition Solution Writeups or Guides</li>
        <li>Places where the content is clearly on-topic (examples include: a direct response to a user asking a question that your notebook solves, a product feedback post about an issue, etc.)</li>
      </ul>

      <p className="text-gray-700 mb-8 leading-relaxed">
        Requesting upvotes or suggesting that other users should view or "check out" your work when posted as a comment or off-topic post is not allowed. 
        Comments or posts of this nature may be removed and a warning may be issued to the author.
      </p>

      {/* Discussion Posts */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Discussion Posts</h2>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        It is appropriate to share lists, articles, how-tos, industry advice, etc. in the forums, so long as your post:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Is on-topic and offers genuine value to other Kagglers (i.e. spam of any kind is not allowed)</li>
        <li>Aligns with the purpose of the forum you are posting in</li>
        <li>Is written and assembled by you</li>
        <li>Is not plagiarized and includes citations to any references used</li>
        <li>Is not highly similar to an existing post</li>
        <li>Does not include job inquiries or resumes (if you're looking for a data science job, we recommend joining our official{' '}
          <span className="text-blue-600 underline">Discord</span> community, which features two channels dedicated to job leads)</li>
        <li>Follows the AI-generated content guidelines below:</li>
      </ul>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">AI- and LLM-generated content</h3>
        <p className="text-gray-700 leading-relaxed">
          The discussion forums are primarily a place for our community to connect, learn from each other, and get answers to specific questions. When AI tools are 
          used to create content that is incorrect, off topic or spammy, it harms our community and makes our discussion forums a less useful place for everyone. In 
          order to preserve the purpose of our community, we must insist that generative models and other AI tools only be used for discussion posts and 
          comments in the following capacities:
        </p>
      </div>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
        <li>Translating original content to another language</li>
        <li>Spelling and grammar checks and/or edits</li>
      </ul>

      {/* Models, Datasets and Notebooks */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Models, Datasets and Notebooks</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Guidelines for on-topic and relevant content</h3>
        <p className="text-gray-700 leading-relaxed">
          Kaggle provides a platform for the community to do and share work related to data science, AI, and machine learning. Models, datasets, and notebooks 
          publicly shared on Kaggle should be primarily useful in this context for:
        </p>
      </div>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Building solutions to Competitions using libraries and tools designed for modeling, data processing, and coding tasks respectively</li>
        <li>Creating a public portfolio of one's own work</li>
        <li>Sharing new and innovative works for the community to explore and use</li>
        <li>Publishing assets associated with a research publication</li>
        <li>Serving as educational content for data science, AI, and ML learners</li>
      </ul>

      <p className="text-gray-700 mb-6 leading-relaxed">
        If a model, dataset, or notebook doesn't meet at least one of these criteria, it may not be on-topic.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Models, datasets, and notebooks shared on Kaggle should not:
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
        <li>Be plagiarized</li>
        <li>Misrepresent or violate the license or other terms of use of their source</li>
        <li>Contain spam of any kind</li>
        <li>In any other way violate the Community Guidelines</li>
      </ul>

      {/* Unacceptable Conduct */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Unacceptable Conduct</h3>
      
      <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
        <li>Unless they contain significant additions of your own work, notebooks that have been forked or copied from another user should not be shared 
          publicly, as this constitutes plagiarism. Any plagiarized notebooks should be reported.</li>
        <li>Users who perform unsolicited additions of collaborators to notebooks, datasets, or models may be issued a warning and the content may be removed. 
          If you wish to add another user as a collaborator on your notebook, dataset, or model please only do so with their permission.</li>
        <li>Attaching unused and/or unrelated datasets or models to your notebook is not allowed.</li>
      </ul>

      {/* Enforcement and Reporting */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement and Reporting</h2>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        These Community Guidelines describe our policies around acceptable use of Kaggle, and outline what type of content isn't allowed on kaggle.com. The 
        Guidelines are designed to ensure a safe and positive experience for our users, and abide by applicable laws. This section provides additional information 
        on how we identify problematic content and enforce these guidelines.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        We use a combination of people and machine learning to detect and review problematic content. The Kaggle community also plays an important role in 
        reporting content they think is inappropriate.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>If you see something that you feel violates these guidelines please bring it to our attention using the report option on comment and discussion topics, 
          user profiles, datasets, models or notebooks.</li>
        <li>If you find content that you think violates applicable local law, <span className="text-blue-600 underline">report it</span>.</li>
        <li>Each user may submit one report per issue. Duplicate or repeat reports will be rejected.</li>
      </ul>

      <p className="text-gray-700 mb-8 leading-relaxed">
        We consider various information when determining whether content violates our Community Guidelines, such as the content itself, information about the 
        author (including past history of policy violations), and other information provided through reporting mechanisms. Machine learning systems also help us 
        identify and remove spam automatically.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        We take action on content that violates our policies and is harmful to the Kaggle community. If your account or content are found to be in violation, we 
        may:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Remove or limit the visibility of the material</li>
        <li>Temporarily or permanently suspend your access to Kaggle.com</li>
        <li>Report illegal materials to appropriate law enforcement authorities</li>
      </ul>

      <p className="text-gray-700 mb-8 leading-relaxed">
        If content is removed or restricted from Kaggle, it is removed or restricted globally by default. Egregious violations of our policies may result in more 
        significant enforcement repercussions, including but not limited to an immediate ban and escalation to law enforcement authorities.
      </p>

      <p className="text-gray-700 mb-8 leading-relaxed">
        If your content or account was actioned against, you will receive a notification about the type of enforcement and the reasoning for the enforcement 
        action. The notification will also contain information about steps you can take to appeal our decision if you believe it was a mistake. If you submit an 
        appeal, we'll ask you to identify what you would like to appeal and why. We encourage you to provide information to support your appeal. Each user may 
        submit one appeal per issue. Duplicate or repeat appeals will be rejected. Once we've reviewed your appeal, we'll communicate the outcome to you. If we 
        agree with your appeal, we'll take appropriate action to reverse our prior decision.
      </p>

      <p className="text-gray-700 mb-8 leading-relaxed">
        Appeals may not be available in all circumstances (e.g., certain court ordered removals). You should receive more information about your appeals options 
        in the notification we send to you about your content or account. You can also find information about our appeals process by visiting our{' '}
        <span className="text-blue-600 underline">contact page</span>.
      </p>

      <p className="text-gray-700 mb-8 leading-relaxed">
        The Kaggle team determines whether content is appropriate and we will make a decision internally. We take repeat violations of our policies seriously and 
        continue to expand a strike system for repeat offenders. If we've found a violation of our community guidelines, repercussions may include (but are not 
        limited to):
      </p>

      {/* Warning Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Warning</h3>
        <p className="text-gray-700 leading-relaxed">
          A warning will be issued as a courtesy to any user who violates Kaggle's community guidelines and may be supplemented with the removal of content 
          associated with the violation. Examples of behavior warranting a warning include but are not limited to upvote begging, spam posting, plagiarism and 
          attempts to manipulate Kaggle's progression system.
        </p>
      </div>

      {/* Suspension Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Suspension</h3>
        <p className="text-gray-700 leading-relaxed">
          If more than one warning is issued for the same behavior, your account may be suspended. A user's access to Kaggle will be revoked for a predetermined 
          period of time, depending on the offense. Please note: we reserve the right to suspend your account without warning in more severe cases.
        </p>
      </div>

      {/* Ban Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Ban</h3>
        <p className="text-gray-700 leading-relaxed">
          Bans may be issued in cases where a user continues to participate in a behavior for which they have previously been issued a suspension. For example, if 
          your account is suspended for upvote begging, and you continue to request upvotes from other users once the suspension has been lifted, you may be 
          banned. Additionally, immediate account bans may be issued to those who create duplicate accounts, share NSFW content, have usernames containing 
          offensive language, post excessive spam or abuse kernel resources such as free storage.
        </p>
      </div>

      <p className="text-gray-700 mb-8 leading-relaxed">
        If you're covered by the European Union's Digital Services Act ("DSA"), the option to refer your complaint to a certified out-of-court dispute settlement 
        body may also be available to you. Learn more about the European Union's DSA. If you have legal questions or wish to examine other remedies that may 
        be available to you, including the option of referring this matter to a court, you may wish to speak to your own lawyer.
      </p>

      {/* Recommendations */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommendations</h2>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        We display dataset and model recommendations to help you find quality resources for your next real-world ML project. Kaggle selects these 
        recommendations based on several indices of popularity (e.g., date of upload, number of downloads). To determine what's trending, we analyze 
        aggregated signals such as clicks and downloads of a particular dataset or model. These signals do not personally identify our users. Based on these 
        signals we are able to display the general interest in a dataset or model. These recommendations are not personalized to our users.
      </p>

      <p className="text-gray-700 mb-8 leading-relaxed">
        Recommendations are built on the simple principle of reflecting community interest in a particular dataset or model. In general, we analyze in a certain 
        moment in time primarily the datasets' and models' recency and popularity to make recommendations. Recommendations are not a guarantee of quality or 
        suitability to your particular situation—you should always perform your own evaluation of datasets and models for your project.
      </p>

      {/* Contact Us */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
      
      <p className="text-gray-700">
        Have a question? Reach out to Kaggle through the{' '}
        <span className="text-blue-600 underline">contact page</span>.
      </p>
    </div>
  );
}