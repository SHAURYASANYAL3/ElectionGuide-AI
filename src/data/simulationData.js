/** Simulation steps for the interactive voting experience */
export const SIM_STEPS = [
  {
    emoji: '📋', title: 'Registration',
    text: "You're a citizen who wants to vote. The first step is registering on the electoral roll. What do you do?",
    options: ['Register online through the election portal', 'Visit the local registration office in person', "Skip registration — I'll figure it out later"],
    feedback: ['Great choice! Online registration is convenient and fast.', 'In-person registration works too — officers can help with any questions.', "⚠️ Without registration, you won't be able to vote! Let's go back and register."],
    correct: [0, 1],
  },
  {
    emoji: '🔍', title: 'Research Candidates',
    text: "You're registered! Now it's time to learn about the candidates. How will you research?",
    options: ['Read official manifestos and policy documents', 'Watch candidate debates on TV or online', 'Ask friends and family who to vote for'],
    feedback: ["Excellent! Manifestos give you direct, unfiltered information about each candidate's plans.", 'Debates are great for comparing candidates side-by-side!', 'Friends can help, but always verify with official sources to form your own informed opinion.'],
    correct: [0, 1],
  },
  {
    emoji: '📍', title: 'Find Your Polling Station',
    text: 'Election day is approaching! You need to find where to vote.',
    options: ['Check the election commission website or app', 'Look at the voter ID card for your assigned station', "Go to the nearest school — it's probably a polling station"],
    feedback: ['The official website always has the most up-to-date station assignments.', 'Your voter ID usually lists your assigned polling station — great instinct!', '⚠️ Not all schools are polling stations, and you must go to your assigned one.'],
    correct: [0, 1],
  },
  {
    emoji: '🗳️', title: 'Election Day — At the Poll',
    text: "It's Election Day! You arrive at your polling station. What do you bring?",
    options: ['Voter ID and a valid photo identification', 'Just my phone — I have a digital copy', "Nothing — they should have my name on the list"],
    feedback: ['Perfect! Valid ID is essential for verification at the polling station.', '⚠️ Digital copies may not be accepted everywhere. Always carry the original.', '⚠️ Even if your name is on the list, you typically need ID to verify your identity.'],
    correct: [0],
  },
  {
    emoji: '✅', title: 'Casting Your Vote',
    text: "You're in the voting booth. It's private. How do you vote?",
    options: ['Mark your preferred candidate clearly on the ballot', 'Take a selfie with the ballot to share on social media', 'Mark multiple candidates since you like more than one'],
    feedback: ['Correct! One clear mark for your chosen candidate. Simple and effective.', '⚠️ Photography inside the booth is illegal in most countries! It violates ballot secrecy.', '⚠️ Marking multiple candidates typically invalidates your ballot (spoiled vote).'],
    correct: [0],
  },
  {
    emoji: '🎉', title: 'After Voting',
    text: "You've voted! What happens next?",
    options: ['Check results when officially announced by the election commission', "Celebrate — you've done your civic duty!", 'Share your experience (without revealing your vote) to encourage others'],
    feedback: ['Results will be officially announced after counting. Stay tuned to verified sources.', 'Yes! Participating in democracy is something to be proud of.', 'Great idea! Encouraging others while respecting the secrecy of your ballot is wonderful.'],
    correct: [0, 1, 2],
  },
];

/** Voter checklist items organized by phase */
export const CHECKLIST_DATA = [
  { section: '📋 Before Election Day', items: [
    { t: 'Confirm voter registration', d: 'Verify your name is on the electoral roll' },
    { t: 'Check voter ID validity', d: 'Ensure your ID is not expired and photo is current' },
    { t: 'Find your polling station', d: 'Use the official election commission portal' },
    { t: 'Research candidates', d: 'Read manifestos, watch debates, compare policies' },
    { t: 'Note polling hours', d: 'Know when your station opens and closes' },
  ]},
  { section: '🗳️ On Election Day', items: [
    { t: 'Bring valid photo ID', d: 'Voter ID card or accepted government ID' },
    { t: 'Arrive early to avoid long queues', d: 'Peak hours are usually mid-morning' },
    { t: 'Verify your details at the desk', d: 'Officials will check your identity against the roll' },
    { t: 'Vote privately in the booth', d: 'Mark your ballot clearly — one candidate only' },
    { t: 'Submit your ballot', d: 'Drop it in the sealed box or confirm on the machine' },
  ]},
  { section: '📊 After Voting', items: [
    { t: 'Keep your voter receipt (if issued)', d: 'Proof that you participated' },
    { t: 'Wait for official results', d: 'Check only verified election commission sources' },
    { t: 'Encourage others to vote', d: 'Share your experience without revealing your choice' },
  ]},
];
