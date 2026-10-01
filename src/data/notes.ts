export const notes = [
  {
    slug: 'the-ai-is-not-the-product',
    category: 'Product',
    title: 'The AI is not the product',
    description:
      'Why extraction is only one step, and the surrounding workflow is where dependable business software gets built.',
    readingTime: '5 min read',
    published: '1 October 2026',
    publishedIso: '2026-10-01',
    linkedin:
      'https://www.linkedin.com/posts/sidhanshu-udawat_ai-saas-startups-activity-7502969277361287168-ugPb',
  },
  {
    slug: 'one-person-can-build-a-serious-product',
    category: 'AI-assisted delivery',
    title: 'One person can build a serious product now',
    description:
      'What changes when a founder can direct coding agents, and what stubbornly remains the founder’s responsibility.',
    readingTime: '6 min read',
    published: '1 October 2026',
    publishedIso: '2026-10-01',
    linkedin:
      'https://www.linkedin.com/posts/sidhanshu-udawat_aicoding-softwareengineering-productdesign-share-7509196478016487424-7-WJ',
  },
  {
    slug: 'small-businesses-do-not-want-workflow-builders',
    category: 'Product strategy',
    title: 'Small businesses do not want workflow builders',
    description:
      'The case for starting with a finished operational workflow instead of giving every customer a blank canvas.',
    readingTime: '5 min read',
    published: '1 October 2026',
    publishedIso: '2026-10-01',
    linkedin:
      'https://www.linkedin.com/posts/sidhanshu-udawat_neevflow-automate-your-business-workflows-activity-7492284138658504706-Hhpx',
  },
  {
    slug: 'first-90-days-as-an-engineering-manager',
    category: 'Leadership',
    title: 'Your first 90 days as an engineering manager',
    description:
      'The early mistakes that feel productive, the identity shift underneath them, and a more useful way to begin.',
    readingTime: '6 min read',
    published: '1 October 2026',
    publishedIso: '2026-10-01',
    linkedin:
      'https://www.linkedin.com/posts/sidhanshu-udawat_engineeringmanager-techleadership-softwareengineering-activity-7453186649737355265-_fFG',
  },
  {
    slug: 'from-leading-teams-to-building-one-product',
    category: 'Founder journey',
    title: 'From leading multiple teams to building one product',
    description:
      'What engineering leadership prepared me for, what it did not, and why founding does not feel like starting from zero.',
    readingTime: '5 min read',
    published: '1 October 2026',
    publishedIso: '2026-10-01',
  },
] as const;

export type Note = (typeof notes)[number];
