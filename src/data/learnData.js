/** Election learning content organized by topic */
export const LEARN_DATA = {
  overview: {
    title: 'How Elections Work',
    icon: '🔍',
    text: 'Elections are the foundation of democracy. Citizens choose their representatives through a structured, multi-phase process that ensures fairness, transparency, and accountability.',
    steps: [
      { t: 'Announcement', d: 'The election authority officially announces the election date and schedule.' },
      { t: 'Voter Registration', d: 'Eligible citizens register on the electoral roll to gain the right to vote.' },
      { t: 'Candidate Nomination', d: 'Individuals or party members file nominations to stand for election.' },
      { t: 'Campaigning', d: 'Candidates present their platforms to voters through rallies, media, and outreach.' },
      { t: 'Voting', d: 'Registered voters cast their ballots at designated polling stations.' },
      { t: 'Counting & Results', d: 'Votes are counted, verified, and results are officially declared.' },
    ],
  },
  registration: {
    title: 'Voter Registration',
    icon: '📝',
    text: 'Registration is the process of adding your name to the official list of eligible voters. Without registration, you typically cannot vote.',
    steps: [
      { t: 'Check Eligibility', d: 'Confirm you meet age, citizenship, and residency requirements.' },
      { t: 'Gather Documents', d: 'Prepare proof of identity, address, and citizenship documents.' },
      { t: 'Submit Application', d: 'Apply online, by mail, or in person at a registration office.' },
      { t: 'Verification', d: 'Authorities verify your details and add you to the electoral roll.' },
      { t: 'Receive Confirmation', d: 'You receive a voter ID card or registration confirmation.' },
    ],
  },
  campaigns: {
    title: 'Election Campaigns',
    icon: '📣',
    text: 'Campaigns are the period when candidates and parties communicate their policies and vision to voters to win support.',
    steps: [
      { t: 'Platform Development', d: 'Candidates create their policy positions and manifesto.' },
      { t: 'Public Rallies', d: 'Candidates hold public events to connect with voters directly.' },
      { t: 'Media Outreach', d: 'TV debates, social media, advertisements, and press interviews.' },
      { t: 'Door-to-Door Canvassing', d: "Volunteers visit homes to share the candidate's message." },
      { t: 'Campaign Silence Period', d: 'Campaigning stops 24-48 hours before voting begins.' },
    ],
  },
  voting: {
    title: 'Voting Day',
    icon: '🗳️',
    text: 'Election day is when registered voters go to their assigned polling station to cast their ballot. The process is designed to be private, fair, and secure.',
    steps: [
      { t: 'Locate Your Polling Station', d: 'Find your assigned voting location using official tools.' },
      { t: 'Bring Required ID', d: 'Carry your voter ID or accepted identification documents.' },
      { t: 'Queue & Verification', d: 'Wait in line, officials verify your identity against the voter list.' },
      { t: 'Cast Your Vote', d: 'Enter the booth privately and mark your ballot or use the voting machine.' },
      { t: 'Ballot Submission', d: 'Submit your marked ballot into the sealed ballot box or confirm electronically.' },
    ],
  },
  counting: {
    title: 'Vote Counting',
    icon: '📊',
    text: 'After polls close, votes are carefully counted and verified under observation to ensure accuracy and transparency.',
    steps: [
      { t: 'Polls Close', d: 'Voting ends at the designated time; all remaining voters in line may finish.' },
      { t: 'Seal & Transport', d: 'Ballot boxes are sealed and transported to counting centers.' },
      { t: 'Counting Begins', d: 'Officials count votes in the presence of observers from all parties.' },
      { t: 'Verification', d: 'Counts are verified, and discrepancies are investigated.' },
      { t: 'Provisional Results', d: 'Initial results are announced; official certification follows later.' },
    ],
  },
  results: {
    title: 'Election Results',
    icon: '🏆',
    text: 'Results determine who wins representation. The process includes verification, potential recounts, and official certification.',
    steps: [
      { t: 'Preliminary Results', d: 'Unofficial counts are released as counting progresses.' },
      { t: 'Challenges & Recounts', d: 'Candidates may challenge results or request recounts if margins are thin.' },
      { t: 'Official Certification', d: 'The election commission formally certifies the final results.' },
      { t: 'Winner Declared', d: 'The winning candidate or party is officially announced.' },
      { t: 'Transition', d: 'Power transfers to the elected representatives through oath-taking.' },
    ],
  },
};

export const TIMELINE = [
  { phase: 'Pre-Election', title: 'Election Announced', desc: 'Official schedule and rules published', dur: '6-12 months before' },
  { phase: 'Pre-Election', title: 'Registration Opens', desc: 'Voters and candidates register', dur: '3-6 months before' },
  { phase: 'Pre-Election', title: 'Campaign Period', desc: 'Candidates campaign for votes', dur: '1-3 months before' },
  { phase: 'Pre-Election', title: 'Campaign Silence', desc: 'No campaigning allowed', dur: '24-48 hours before' },
  { phase: 'Election Day', title: 'Polls Open', desc: 'Voters cast their ballots', dur: 'Election Day' },
  { phase: 'Post-Election', title: 'Vote Counting', desc: 'Ballots are counted and verified', dur: '1-7 days after' },
  { phase: 'Post-Election', title: 'Results Certified', desc: 'Official results declared', dur: '1-4 weeks after' },
  { phase: 'Post-Election', title: 'Transition', desc: 'Elected officials take office', dur: '1-3 months after' },
];

export const KEY_TERMS = [
  { word: 'Ballot', def: 'The paper or digital form used to cast your vote.' },
  { word: 'Constituency', def: 'A geographic area represented by an elected official.' },
  { word: 'Electoral Roll', def: 'The official list of people eligible to vote.' },
  { word: 'Manifesto', def: "A public statement of a party's policies and promises." },
  { word: 'Polling Station', def: 'The designated place where voters go to cast their vote.' },
  { word: 'Franchise', def: 'The legal right to vote in elections.' },
  { word: 'Incumbent', def: 'The person currently holding an elected office.' },
  { word: 'Coalition', def: 'An alliance of parties that govern together.' },
];
