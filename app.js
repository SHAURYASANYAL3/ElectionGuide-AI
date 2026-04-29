// ========== STATE ==========
const state = {
  country: '', electionType: '', level: '', theme: 'dark',
  simStep: 0, simJournal: [], checkedItems: new Set()
};

// ========== DATA ==========
const LEARN_DATA = {
  overview: {
    title: '🔍 How Elections Work',
    text: 'Elections are the foundation of democracy. Citizens choose their representatives through a structured, multi-phase process that ensures fairness, transparency, and accountability.',
    steps: [
      { t: 'Announcement', d: 'The election authority officially announces the election date and schedule.' },
      { t: 'Voter Registration', d: 'Eligible citizens register on the electoral roll to gain the right to vote.' },
      { t: 'Candidate Nomination', d: 'Individuals or party members file nominations to stand for election.' },
      { t: 'Campaigning', d: 'Candidates present their platforms to voters through rallies, media, and outreach.' },
      { t: 'Voting', d: 'Registered voters cast their ballots at designated polling stations.' },
      { t: 'Counting & Results', d: 'Votes are counted, verified, and results are officially declared.' }
    ]
  },
  registration: {
    title: '📝 Voter Registration',
    text: 'Registration is the process of adding your name to the official list of eligible voters. Without registration, you typically cannot vote.',
    steps: [
      { t: 'Check Eligibility', d: 'Confirm you meet age, citizenship, and residency requirements.' },
      { t: 'Gather Documents', d: 'Prepare proof of identity, address, and citizenship documents.' },
      { t: 'Submit Application', d: 'Apply online, by mail, or in person at a registration office.' },
      { t: 'Verification', d: 'Authorities verify your details and add you to the electoral roll.' },
      { t: 'Receive Confirmation', d: 'You receive a voter ID card or registration confirmation.' }
    ]
  },
  campaigns: {
    title: '📣 Election Campaigns',
    text: 'Campaigns are the period when candidates and parties communicate their policies and vision to voters to win support.',
    steps: [
      { t: 'Platform Development', d: 'Candidates create their policy positions and manifesto.' },
      { t: 'Public Rallies', d: 'Candidates hold public events to connect with voters directly.' },
      { t: 'Media Outreach', d: 'TV debates, social media, advertisements, and press interviews.' },
      { t: 'Door-to-Door Canvassing', d: 'Volunteers visit homes to share the candidate\'s message.' },
      { t: 'Campaign Silence Period', d: 'Campaigning stops 24-48 hours before voting begins.' }
    ]
  },
  voting: {
    title: '🗳️ Voting Day',
    text: 'Election day is when registered voters go to their assigned polling station to cast their ballot. The process is designed to be private, fair, and secure.',
    steps: [
      { t: 'Locate Your Polling Station', d: 'Find your assigned voting location using official tools.' },
      { t: 'Bring Required ID', d: 'Carry your voter ID or accepted identification documents.' },
      { t: 'Queue & Verification', d: 'Wait in line, officials verify your identity against the voter list.' },
      { t: 'Cast Your Vote', d: 'Enter the booth privately and mark your ballot or use the voting machine.' },
      { t: 'Ballot Submission', d: 'Submit your marked ballot into the sealed ballot box or confirm electronically.' }
    ]
  },
  counting: {
    title: '📊 Vote Counting',
    text: 'After polls close, votes are carefully counted and verified under observation to ensure accuracy and transparency.',
    steps: [
      { t: 'Polls Close', d: 'Voting ends at the designated time; all remaining voters in line may finish.' },
      { t: 'Seal & Transport', d: 'Ballot boxes are sealed and transported to counting centers.' },
      { t: 'Counting Begins', d: 'Officials count votes in the presence of observers from all parties.' },
      { t: 'Verification', d: 'Counts are verified, and discrepancies are investigated.' },
      { t: 'Provisional Results', d: 'Initial results are announced; official certification follows later.' }
    ]
  },
  results: {
    title: '🏆 Election Results',
    text: 'Results determine who wins representation. The process includes verification, potential recounts, and official certification.',
    steps: [
      { t: 'Preliminary Results', d: 'Unofficial counts are released as counting progresses.' },
      { t: 'Challenges & Recounts', d: 'Candidates may challenge results or request recounts if margins are thin.' },
      { t: 'Official Certification', d: 'The election commission formally certifies the final results.' },
      { t: 'Winner Declared', d: 'The winning candidate or party is officially announced.' },
      { t: 'Transition', d: 'Power transfers to the elected representatives through oath-taking.' }
    ]
  }
};

const TIMELINE = [
  { phase: 'Pre-Election', title: 'Election Announced', desc: 'Official schedule and rules published', dur: '6-12 months before' },
  { phase: 'Pre-Election', title: 'Registration Opens', desc: 'Voters and candidates register', dur: '3-6 months before' },
  { phase: 'Pre-Election', title: 'Campaign Period', desc: 'Candidates campaign for votes', dur: '1-3 months before' },
  { phase: 'Pre-Election', title: 'Campaign Silence', desc: 'No campaigning allowed', dur: '24-48 hours before' },
  { phase: 'Election Day', title: 'Polls Open', desc: 'Voters cast their ballots', dur: 'Election Day' },
  { phase: 'Post-Election', title: 'Vote Counting', desc: 'Ballots are counted and verified', dur: '1-7 days after' },
  { phase: 'Post-Election', title: 'Results Certified', desc: 'Official results declared', dur: '1-4 weeks after' },
  { phase: 'Post-Election', title: 'Transition', desc: 'Elected officials take office', dur: '1-3 months after' }
];

const TERMS = [
  { word: 'Ballot', def: 'The paper or digital form used to cast your vote.' },
  { word: 'Constituency', def: 'A geographic area represented by an elected official.' },
  { word: 'Electoral Roll', def: 'The official list of people eligible to vote.' },
  { word: 'Manifesto', def: 'A public statement of a party\'s policies and promises.' },
  { word: 'Polling Station', def: 'The designated place where voters go to cast their vote.' },
  { word: 'Franchise', def: 'The legal right to vote in elections.' },
  { word: 'Incumbent', def: 'The person currently holding an elected office.' },
  { word: 'Coalition', def: 'An alliance of parties that govern together.' }
];

const COUNTRY_DATA = {
  'India': { system: 'Parliamentary', head: 'Prime Minister', body: 'Election Commission of India', method: 'First-Past-The-Post', age: '18+', compulsory: 'No', freq: 'Every 5 years', parties: 'Multi-party' },
  'United States': { system: 'Presidential', head: 'President', body: 'Federal Election Commission', method: 'Electoral College', age: '18+', compulsory: 'No', freq: 'Every 4 years', parties: 'Two-party dominant' },
  'United Kingdom': { system: 'Parliamentary', head: 'Prime Minister', body: 'Electoral Commission', method: 'First-Past-The-Post', age: '18+', compulsory: 'No', freq: 'Every 5 years', parties: 'Multi-party' },
  'Germany': { system: 'Parliamentary', head: 'Chancellor', body: 'Federal Returning Officer', method: 'Mixed-Member Proportional', age: '18+', compulsory: 'No', freq: 'Every 4 years', parties: 'Multi-party' },
  'France': { system: 'Semi-Presidential', head: 'President', body: 'Constitutional Council', method: 'Two-Round System', age: '18+', compulsory: 'No', freq: 'Every 5 years', parties: 'Multi-party' },
  'Brazil': { system: 'Presidential', head: 'President', body: 'Superior Electoral Court', method: 'Two-Round + Proportional', age: '16+ (mandatory 18-70)', compulsory: 'Yes', freq: 'Every 4 years', parties: 'Multi-party' },
  'Japan': { system: 'Parliamentary', head: 'Prime Minister', body: 'Election Administration Commission', method: 'Parallel Voting', age: '18+', compulsory: 'No', freq: 'Every 4 years', parties: 'Multi-party' },
  'Australia': { system: 'Parliamentary', head: 'Prime Minister', body: 'Australian Electoral Commission', method: 'Preferential (Ranked)', age: '18+', compulsory: 'Yes', freq: 'Every 3 years', parties: 'Multi-party' }
};

const SIM_STEPS = [
  { emoji: '📋', title: 'Registration', text: 'You\'re a citizen who wants to vote. The first step is registering on the electoral roll. What do you do?',
    options: ['Register online through the election portal', 'Visit the local registration office in person', 'Skip registration — I\'ll figure it out later'],
    feedback: ['Great choice! Online registration is convenient and fast.', 'In-person registration works too — officers can help with any questions.', '⚠️ Without registration, you won\'t be able to vote! Let\'s go back and register.'],
    correct: [0, 1] },
  { emoji: '🔍', title: 'Research Candidates', text: 'You\'re registered! Now it\'s time to learn about the candidates. How will you research?',
    options: ['Read official manifestos and policy documents', 'Watch candidate debates on TV or online', 'Ask friends and family who to vote for'],
    feedback: ['Excellent! Manifestos give you direct, unfiltered information about each candidate\'s plans.', 'Debates are great for comparing candidates side-by-side!', 'Friends can help, but always verify with official sources to form your own informed opinion.'],
    correct: [0, 1] },
  { emoji: '📍', title: 'Find Your Polling Station', text: 'Election day is approaching! You need to find where to vote.',
    options: ['Check the election commission website or app', 'Look at the voter ID card for your assigned station', 'Go to the nearest school — it\'s probably a polling station'],
    feedback: ['The official website always has the most up-to-date station assignments.', 'Your voter ID usually lists your assigned polling station — great instinct!', '⚠️ Not all schools are polling stations, and you must go to your assigned one.'],
    correct: [0, 1] },
  { emoji: '🗳️', title: 'Election Day — At the Poll', text: 'It\'s Election Day! You arrive at your polling station. What do you bring?',
    options: ['Voter ID and a valid photo identification', 'Just my phone — I have a digital copy', 'Nothing — they should have my name on the list'],
    feedback: ['Perfect! Valid ID is essential for verification at the polling station.', '⚠️ Digital copies may not be accepted everywhere. Always carry the original.', '⚠️ Even if your name is on the list, you typically need ID to verify your identity.'],
    correct: [0] },
  { emoji: '✅', title: 'Casting Your Vote', text: 'You\'re in the voting booth. It\'s private. How do you vote?',
    options: ['Mark your preferred candidate clearly on the ballot', 'Take a selfie with the ballot to share on social media', 'Mark multiple candidates since you like more than one'],
    feedback: ['Correct! One clear mark for your chosen candidate. Simple and effective.', '⚠️ Photography inside the booth is illegal in most countries! It violates ballot secrecy.', '⚠️ Marking multiple candidates typically invalidates your ballot (spoiled vote).'],
    correct: [0] },
  { emoji: '🎉', title: 'After Voting', text: 'You\'ve voted! What happens next?',
    options: ['Check results when officially announced by the election commission', 'Celebrate — you\'ve done your civic duty!', 'Share your experience (without revealing your vote) to encourage others'],
    feedback: ['Results will be officially announced after counting. Stay tuned to verified sources.', 'Yes! Participating in democracy is something to be proud of.', 'Great idea! Encouraging others while respecting the secrecy of your ballot is wonderful.'],
    correct: [0, 1, 2] }
];

const CHECKLIST = [
  { section: '📋 Before Election Day', items: [
    { t: 'Confirm voter registration', d: 'Verify your name is on the electoral roll' },
    { t: 'Check voter ID validity', d: 'Ensure your ID is not expired and photo is current' },
    { t: 'Find your polling station', d: 'Use the official election commission portal' },
    { t: 'Research candidates', d: 'Read manifestos, watch debates, compare policies' },
    { t: 'Note polling hours', d: 'Know when your station opens and closes' }
  ]},
  { section: '🗳️ On Election Day', items: [
    { t: 'Bring valid photo ID', d: 'Voter ID card or accepted government ID' },
    { t: 'Arrive early to avoid long queues', d: 'Peak hours are usually mid-morning' },
    { t: 'Verify your details at the desk', d: 'Officials will check your identity against the roll' },
    { t: 'Vote privately in the booth', d: 'Mark your ballot clearly — one candidate only' },
    { t: 'Submit your ballot', d: 'Drop it in the sealed box or confirm on the machine' }
  ]},
  { section: '📊 After Voting', items: [
    { t: 'Keep your voter receipt (if issued)', d: 'Proof that you participated' },
    { t: 'Wait for official results', d: 'Check only verified election commission sources' },
    { t: 'Encourage others to vote', d: 'Share your experience without revealing your choice' }
  ]}
];

// ========== DOM HELPERS ==========
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ========== NAVIGATION ==========
function navigateTo(section) {
  $$('.section').forEach(s => s.classList.remove('section--active'));
  $$('.nav-link').forEach(l => l.classList.remove('active'));
  const target = $(`#section-${section}`);
  if (target) target.classList.add('section--active');
  const navLink = $(`[data-section="${section}"]`);
  if (navLink) navLink.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (section === 'learn') renderLearn('overview');
  if (section === 'compare') renderCompare();
  if (section === 'simulate') initSim();
  if (section === 'checklist') renderChecklist();
}

$$('.nav-link').forEach(l => l.addEventListener('click', () => navigateTo(l.dataset.section)));
$$('.feature-card').forEach(c => c.addEventListener('click', () => navigateTo(c.dataset.section)));

// ========== THEME TOGGLE ==========
$('#themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle('light-theme', state.theme === 'light');
  $('.theme-icon').textContent = state.theme === 'dark' ? '🌙' : '☀️';
});

// ========== ONBOARDING ==========
function showOnboardStep(n) {
  $$('.onboard-step').forEach(s => s.classList.remove('active'));
  const step = $(`#onboard-step-${n}`);
  if (step) step.classList.add('active');
}

$$('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    $('#inputCountry').value = tag.dataset.value;
    $$('.tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
  });
});

$('#btnStep1Next').addEventListener('click', () => {
  const val = $('#inputCountry').value.trim();
  if (!val) { $('#inputCountry').focus(); return; }
  state.country = val;
  showOnboardStep(2);
});

$('#btnStep2Back').addEventListener('click', () => showOnboardStep(1));
$('#btnStep3Back').addEventListener('click', () => showOnboardStep(2));

$$('#onboard-step-2 .option-card').forEach(card => {
  card.addEventListener('click', () => {
    state.electionType = card.dataset.value;
    $$('#onboard-step-2 .option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    setTimeout(() => showOnboardStep(3), 300);
  });
});

$$('#onboard-step-3 .option-card').forEach(card => {
  card.addEventListener('click', () => {
    state.level = card.dataset.value;
    $$('#onboard-step-3 .option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    setTimeout(completeOnboarding, 400);
  });
});

function completeOnboarding() {
  $('#onboardingCard').classList.add('hidden');
  $('#profileSummary').classList.remove('hidden');
  $('#profileCountry').textContent = `🌍 ${state.country}`;
  $('#profileType').textContent = `🗳️ ${state.electionType}`;
  $('#profileLevel').textContent = `🧠 ${state.level}`;
}

$('#editProfile').addEventListener('click', () => {
  $('#profileSummary').classList.add('hidden');
  $('#onboardingCard').classList.remove('hidden');
  showOnboardStep(1);
});

// ========== LEARN MODE ==========
function renderLearn(topic) {
  const data = LEARN_DATA[topic];
  if (!data) return;
  $$('.topic-btn').forEach(b => b.classList.remove('active'));
  const btn = $(`[data-topic="${topic}"]`);
  if (btn) btn.classList.add('active');

  let stepsHTML = data.steps.map((s, i) => `
    <li class="step-item">
      <div class="step-num">${i + 1}</div>
      <div class="step-body"><h4>${s.t}</h4><p>${s.d}</p></div>
    </li>`).join('');

  $('#learnPanel').innerHTML = `
    <h3>${data.title}</h3>
    <p class="overview-text">${data.text}</p>
    <ol class="step-list">${stepsHTML}</ol>`;

  // Timeline
  $('#timeline').innerHTML = TIMELINE.map(t => `
    <div class="timeline-item">
      <div class="tl-phase">${t.phase}</div>
      <div class="tl-title">${t.title}</div>
      <div class="tl-desc">${t.desc}</div>
      <span class="tl-duration">${t.dur}</span>
    </div>`).join('');

  // Key Terms
  $('#termsGrid').innerHTML = TERMS.map(t => `
    <div class="term-card">
      <div class="term-word">${t.word}</div>
      <div class="term-def">${t.def}</div>
    </div>`).join('');
}

$$('.topic-btn').forEach(btn => btn.addEventListener('click', () => renderLearn(btn.dataset.topic)));

// ========== COMPARE MODE ==========
function renderCompare() {
  const a = $('#compareA').value, b = $('#compareB').value;
  const da = COUNTRY_DATA[a], db = COUNTRY_DATA[b];
  if (!da || !db) return;
  const rows = [
    ['System', da.system, db.system], ['Head of Govt', da.head, db.head],
    ['Election Body', da.body, db.body], ['Voting Method', da.method, db.method],
    ['Voting Age', da.age, db.age], ['Compulsory', da.compulsory, db.compulsory],
    ['Frequency', da.freq, db.freq], ['Party System', da.parties, db.parties]
  ];
  $('#compareTable').innerHTML = `
    <thead><tr><th>Feature</th><th>${a}</th><th>${b}</th></tr></thead>
    <tbody>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody>`;
}

$('#compareA').addEventListener('change', renderCompare);
$('#compareB').addEventListener('change', renderCompare);

// ========== SIMULATION MODE ==========
function initSim() {
  state.simStep = 0;
  state.simJournal = [];
  $('#simJournal').classList.add('hidden');
  renderSimStep();
}

function renderSimStep() {
  const step = SIM_STEPS[state.simStep];
  if (!step) { renderSimComplete(); return; }
  const total = SIM_STEPS.length;
  $('#simProgressBar').style.width = `${(state.simStep / total) * 100}%`;
  $('#simStepIndicator').textContent = `Step ${state.simStep + 1} of ${total}`;
  $('#simContent').innerHTML = `
    <div class="sim-emoji">${step.emoji}</div>
    <h3>${step.title}</h3>
    <p>${step.text}</p>`;
  $('#simActions').innerHTML = step.options.map((opt, i) => `
    <button class="sim-btn" data-idx="${i}">${opt}</button>`).join('');
  $$('.sim-btn').forEach(btn => btn.addEventListener('click', () => handleSimChoice(parseInt(btn.dataset.idx))));
}

function handleSimChoice(idx) {
  const step = SIM_STEPS[state.simStep];
  const isCorrect = step.correct.includes(idx);
  state.simJournal.push({ step: step.title, choice: step.options[idx], feedback: step.feedback[idx], correct: isCorrect });

  // Show feedback briefly
  $('#simContent').innerHTML = `
    <div class="sim-emoji">${isCorrect ? '✅' : '⚠️'}</div>
    <h3>${isCorrect ? 'Good choice!' : 'Not ideal...'}</h3>
    <p>${step.feedback[idx]}</p>`;
  $('#simActions').innerHTML = '';

  const shouldRetry = !isCorrect && step.correct.length > 0 && idx === 2;
  setTimeout(() => {
    if (shouldRetry && state.simStep === 0) { renderSimStep(); return; }
    state.simStep++;
    renderSimStep();
  }, 2000);
}

function renderSimComplete() {
  $('#simProgressBar').style.width = '100%';
  $('#simStepIndicator').textContent = 'Complete!';
  const score = state.simJournal.filter(j => j.correct).length;
  const total = state.simJournal.length;
  $('#simContent').innerHTML = `
    <div class="sim-emoji">🎉</div>
    <h3>Simulation Complete!</h3>
    <p>You scored <strong>${score}/${total}</strong> optimal choices. ${score === total ? 'Perfect run!' : 'Review your journey below to learn more.'}</p>`;
  $('#simActions').innerHTML = `<button class="btn btn-primary" id="simRestart">🔄 Try Again</button>`;
  $('#simRestart').addEventListener('click', initSim);

  // Show journal
  $('#simJournal').classList.remove('hidden');
  $('#journalEntries').innerHTML = state.simJournal.map(j => `
    <div class="journal-entry">
      <div class="je-step">${j.correct ? '✅' : '⚠️'} ${j.step}</div>
      <div class="je-choice">Your choice: ${j.choice}</div>
      <div class="je-feedback">${j.feedback}</div>
    </div>`).join('');
}

// ========== CHECKLIST MODE ==========
function renderChecklist() {
  let totalItems = 0;
  $('#checklistSections').innerHTML = CHECKLIST.map((sec, si) => {
    const itemsHTML = sec.items.map((item, ii) => {
      const id = `cl-${si}-${ii}`;
      totalItems++;
      const checked = state.checkedItems.has(id);
      return `<div class="cl-item ${checked ? 'checked' : ''}" data-id="${id}">
        <div class="cl-checkbox">${checked ? '✓' : ''}</div>
        <div class="cl-text"><strong>${item.t}</strong><span>${item.d}</span></div>
      </div>`;
    }).join('');
    return `<div class="cl-section"><div class="cl-section-title">${sec.section}</div>${itemsHTML}</div>`;
  }).join('');

  updateChecklistProgress(totalItems);

  $$('.cl-item').forEach(item => item.addEventListener('click', () => {
    const id = item.dataset.id;
    if (state.checkedItems.has(id)) state.checkedItems.delete(id); else state.checkedItems.add(id);
    item.classList.toggle('checked');
    const cb = item.querySelector('.cl-checkbox');
    cb.textContent = state.checkedItems.has(id) ? '✓' : '';
    updateChecklistProgress(totalItems);
  }));
}

function updateChecklistProgress(total) {
  const done = state.checkedItems.size;
  $('#checklistCount').textContent = `${done} / ${total}`;
  $('#checklistProgressBar').style.width = `${(done / total) * 100}%`;
}

// ========== HELP MODAL ==========
$('#fabHelp').addEventListener('click', () => $('#helpModal').classList.remove('hidden'));
$('#helpModalClose').addEventListener('click', () => $('#helpModal').classList.add('hidden'));
$('#helpModal').addEventListener('click', e => { if (e.target === $('#helpModal')) $('#helpModal').classList.add('hidden'); });

// ========== INIT ==========
renderLearn('overview');
