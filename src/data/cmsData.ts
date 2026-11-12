import { Program, Player, Coach, FacilityItem, BhoomiStory, NewsArticle, Partner, Testimonial } from '../types';

export const VERIFIED_STATS = [
  { label: "Trained Students", value: "300+", subtext: "Athletes developed across grassroots to professional circuits" },
  { label: "Years of Excellence", value: "10+", subtext: "A decade of pioneering tennis development in India" },
  { label: "Competitions", value: "22", subtext: "National & sanctioned tournaments hosted & competed" },
  { label: "Programs", value: "15+", subtext: "Specialized training pathways from Red Ball to Pro & Coaching" }
];

export const ACADEMY_INFO = {
  name: "Rohan Bopanna Tennis Academy",
  shortName: "RBTA",
  founder: "Rohan Bopanna",
  foundedYear: 2016,
  locationName: "Padukone-Dravid Centre for Sports Excellence (CSE)",
  city: "Bengaluru, India",
  fullAddress: "Padukone-Dravid Centre for Sports Excellence, Survey No 336, Bettahalasuru, Jala Hobli, Yelahanka, Bengaluru, Karnataka 562157",
  email: "info@rohanbopannatennisacademy.com",
  admissionsEmail: "admissions@rohanbopannatennisacademy.com",
  phone: "+91 63641 37755",
  whatsapp: "916364137755",
  whatsappFormatted: "+91 63641 37755",
  hours: "Monday – Saturday: 6:00 AM – 7:30 PM (Sunday Closed for Recovery)",
  airportDistance: "15 minutes drive from Kempegowda International Airport (BLR)",
  tagline: "Shaping the future of India's Tennis Champions",
  motto: "Serve Big. Play Smart. Win Bold.",
  subMotto: "Serving Champions, One Game at a Time",
  sloganExcellence: "Tennis excellence crafted here.",
  socials: {
    instagram: "https://www.instagram.com/rohanbopannatennisacademy",
    facebook: "https://www.facebook.com/rohanbopannatennisacademy",
    youtube: "https://www.youtube.com/@rohanbopannatennisacademy",
    twitter: "https://twitter.com/RBTAIndia"
  }
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'red-ball',
    order: '01',
    name: 'Red Ball Program',
    tagline: 'First Steps to Racket Mastery & Natural Athletic Movement',
    ageGroup: 'Ages 4 to 7',
    ballType: 'Red Foam / Low Compression (75% slower bounce)',
    courtSize: '36 ft × 18 ft (Quarter court)',
    coachRatio: '1:4 Coach-to-Student Ratio',
    level: 'Grassroots',
    shortDesc: 'Igniting a lifelong passion for tennis through playful agility, hand-eye coordination, and fundamental motor skills.',
    fullDesc: 'The Red Ball program introduces young athletes to the magical universe of tennis. Utilizing oversized, low-compression red balls and proportional 19-21 inch rackets on modified courts, children experience early success and develop natural rally instincts from day one.',
    objectives: [
      'Master dynamic balance, split-step timing, and multi-directional footwork.',
      'Establish clean contact points for forehand, backhand, and overhead tracking.',
      'Develop spatial awareness, ball trajectory estimation, and rhythm.',
      'Cultivate sportsmanship, attentiveness, and high enthusiasm for the sport.'
    ],
    coachingApproach: [
      'Gamified skill acquisition tailored for early childhood cognitive development.',
      'Multi-sport agility circuits enhancing gross motor coordination.',
      'Encouragement of self-directed play and cooperative rallying games.'
    ],
    weeklyCommitment: '2 to 3 sessions per week (45–60 mins per session)',
    performanceSupport: [
      'Quarterly fundamental movement assessment',
      'Fun mini-tournament round-robins',
      'Parent developmental feedback conferences'
    ],
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=80',
    features: ['Scaled Courts', 'Slow Bounce Balls', 'Agility Obstacle Circuits', 'High Energy Group Dynamics'],
    equipmentNeeded: '19" to 21" Junior Tennis Racket, Non-marking clay/hard court shoes, RBTA training shirt.',
    scheduleOverview: 'Afternoon & Saturday morning batches available.'
  },
  {
    id: 'orange-ball',
    order: '02',
    name: 'Orange Ball Program',
    tagline: 'Directional Control, Spin Mechanics & Tactical Foundation',
    ageGroup: 'Ages 7 to 9',
    ballType: 'Orange Stage 2 (50% slower bounce than standard yellow)',
    courtSize: '60 ft × 21 ft (Three-quarter court)',
    coachRatio: '1:4 Coach-to-Student Ratio',
    level: 'Foundation',
    shortDesc: 'Transitioning to tactical point play, swing-path acceleration, and reliable groundstroke consistency.',
    fullDesc: 'As players gain motor control, the Orange Ball program expands their spatial boundary to a 60-foot court. Players begin understanding court geometry, utilizing spin (topspin and slice basics), serving overhead from modified baselines, and executing offensive vs. defensive shot selection.',
    objectives: [
      'Transition from pushing to accelerating through the strike zone.',
      'Execute deliberate crosscourt and down-the-line directional drives.',
      'Develop full overhead serving motion with pronation and trophy stance.',
      'Master split-step reaction and recovery footwork back to court center.'
    ],
    coachingApproach: [
      'Situational point play and tactical problem-solving games.',
      'Video biomechanical capture of swing shape and contact stability.',
      'Speed and agility ladder drills focused on tennis-specific lateral deceleration.'
    ],
    weeklyCommitment: '3 to 4 sessions per week (75 mins per session)',
    performanceSupport: [
      'Bi-monthly tactical video review',
      'Match-play simulation on weekends',
      'Hydration and junior nutrition education'
    ],
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1000&q=80',
    features: ['60-foot Court Geometry', 'Topspin Development', 'Full Serving Action', 'Tactical Scenario Training'],
    equipmentNeeded: '23" to 25" Junior Tennis Racket, Tennis-specific court shoes, RBTA Academy kit.',
    scheduleOverview: 'Weekday afternoons and weekend competitive match practice.'
  },
  {
    id: 'green-ball',
    order: '03',
    name: 'Green Dot Ball Program',
    tagline: 'Full Court Adaptation, Power Transition & Match Toughness',
    ageGroup: 'Ages 9 to 11',
    ballType: 'Green Dot Stage 1 (25% slower bounce than standard yellow)',
    courtSize: '78 ft × 27 ft (Full standard tennis court)',
    coachRatio: '1:4 Coach-to-Student Ratio',
    level: 'Foundation',
    shortDesc: 'Playing on the full 78-foot court with Green Dot compression balls while refining stroke depth, transition volleys, and strategic mental poise.',
    fullDesc: 'The critical bridge to standard yellow tennis. On a full-sized 78-foot court, the Green Dot Ball allows young players to maintain technically sound mechanics without being overwhelmed by rapid bounces. Focus is placed on weapon development, depth control, net approach sequences, and second-serve kick.',
    objectives: [
      'Command full-court depth and heavy spin on both wings.',
      'Develop reliable kick and slice variations on first and second serves.',
      'Incorporate approach shots, mid-court drives, and assertive net finishing.',
      'Build match endurance, game plans, and score-state awareness.'
    ],
    coachingApproach: [
      'Target-oriented baseline repetition and depth target drills.',
      'Structured pressure simulations (e.g. 30-all, tiebreaks, deuce points).',
      'Introduction to dynamic warm-ups and post-training stretching routines.'
    ],
    weeklyCommitment: '4 to 5 sessions per week (90 mins per session)',
    performanceSupport: [
      'Quarterly physical endurance benchmark testing at CSE Lab',
      'Local tournament entry guidance & tournament scheduling',
      'Match chart analysis'
    ],
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=80',
    features: ['Full 78-ft Court', 'Weapon Development', 'Net Approaches & Volleys', 'Physical Conditioning Initiation'],
    equipmentNeeded: '25" or 26" Transition Rackets, Multi-surface tennis shoes, RBTA match gear.',
    scheduleOverview: 'Monday to Friday intensive sessions with Saturday match-play round-robins.'
  },
  {
    id: 'intermediate',
    order: '04',
    name: 'Intermediate Program',
    tagline: 'Technical Precision, Shot Depth & Tournament Sparring',
    ageGroup: 'Ages 10 to 15',
    ballType: 'Standard Yellow Competition Ball (ITF Approved)',
    courtSize: '78 ft × 27 ft (Standard Court)',
    coachRatio: '1:3 to 1:4 Coach-to-Student Ratio',
    level: 'Intermediate',
    shortDesc: 'Consolidating stroke technique, high-tempo baseline rallying, tactical pattern execution, and introductory tournament match play.',
    fullDesc: 'The Intermediate Program is tailored for players who have transitioned through the colored ball stages and are now mastering the full yellow ball. Emphasizing repeatable technique, aggressive court positioning, and physical stamina, players begin competing in state and local ranking fixtures.',
    objectives: [
      'Establish dependable topspin depth to push opponents behind the baseline.',
      'Execute pattern-based serving strategies targeting specific returner weaknesses.',
      'Refine transitional footwork, approach shots, and drive volleys.',
      'Develop physical speed, dynamic balance, and core rotational power.'
    ],
    coachingApproach: [
      'High-repetition tactical drills and live situational sparring.',
      'Video biomechanical reviews of serve action and kinetic chain.',
      'Weekly supervised competitive match play under simulated tournament conditions.'
    ],
    weeklyCommitment: '8 to 12 hours per week (Tennis + Functional Fitness)',
    performanceSupport: [
      'Periodic functional movement screenings',
      'Tournament calendar consultation',
      'Nutritional hydration guidelines'
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    features: ['Standard Yellow Ball', 'Tactical Situational Drills', 'State Ranking Readiness', 'Physical Agility Circuits'],
    equipmentNeeded: '26" to 27" Performance Racquet, Hard court tennis shoes, RBTA training kit.',
    scheduleOverview: 'Afternoon slots (4:00 PM – 6:30 PM) & Saturday morning sparring.'
  },
  {
    id: 'junior-development',
    order: '04',
    name: 'Junior Development Program',
    tagline: 'Technical Precision, Physical Conditioning & Competitive Readiness',
    ageGroup: 'Ages 10 to 14',
    ballType: 'Standard Yellow Competition Ball (ITF Approved)',
    courtSize: '78 ft × 27 ft (Standard Court)',
    coachRatio: '1:3 to 1:4 Coach-to-Student Ratio',
    level: 'Advanced',
    shortDesc: 'Structured training for young athletes transitioning to state and national AITA ranking tournaments.',
    fullDesc: 'Designed for junior players committed to competitive tennis. This program integrates rigorous technical refinement, early sports science metrics, comprehensive physical fitness, and mental toughness modules to prepare players for the demands of tournament travel and high-pressure matches.',
    objectives: [
      'Solidify reliable primary weapons and defensive counter-punching strategies.',
      'Increase racquet-head speed, rotational torque, and core stability.',
      'Develop tactical scouting, reading opponent weaknesses, and mid-match adjustments.',
      'Establish professional routines for pre-match warm-ups, fueling, and recovery.'
    ],
    coachingApproach: [
      'Intensive drill blocks paired with competitive sparring with older peers.',
      'Integrated S&C sessions 3 times weekly supervised by CSE performance coaches.',
      'Mental focus protocols designed around breathing, focus cues, and emotional resets.'
    ],
    weeklyCommitment: '12 to 16 hours per week (On-court + Fitness)',
    performanceSupport: [
      'Sports science testing at CSE Biomechanics Lab',
      'Full tournament calendar design for AITA / ATF tournaments',
      'Physiotherapy screening and injury prevention drills'
    ],
    image: 'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?auto=format&fit=crop&w=1000&q=80',
    features: ['ITF Yellow Ball', 'CSE Strength & Conditioning', 'AITA Tournament Readiness', 'Video Biomechanical Audits'],
    equipmentNeeded: 'Full-size 27" performance racquets (strung to custom tension), tournament footwear.',
    scheduleOverview: 'Morning fitness slots + afternoon intensive tennis blocks (Mon–Sat).'
  },
  {
    id: 'junior-pro',
    order: '05',
    name: 'Junior Pro Pathway',
    tagline: 'National & International Junior Circuit Excellence',
    ageGroup: 'Ages 12 to 18',
    ballType: 'Standard Yellow Competition Ball (Tour Grade)',
    courtSize: 'Standard Full Court',
    coachRatio: '1:2 to 1:3 Coach-to-Student Ratio',
    level: 'Advanced',
    shortDesc: 'Elite training for ranked juniors targeting Top 10 national AITA rankings and ITF Junior World Tour points.',
    fullDesc: 'The Junior Pro Pathway is an intensive training regimen for athletes dedicated to achieving international junior success. Under the direct technical guidance of Rohan Bopanna, Scott Davidoff, and Balachandran Manikkath, players refine individual identities, weaponize their serves and returns, and develop the relentless fitness required to win multiple matches per week.',
    objectives: [
      'Refine distinctive playing identity (Aggressive Baseliner, All-Court, Serve & Volley).',
      'Excel in pressure-cooker tiebreak situations and crucial break points.',
      'Achieve peak cardiovascular and explosive lateral speed thresholds.',
      'Navigate ITF Junior Grade 5 to Grade 1 tournament schedules worldwide.'
    ],
    coachingApproach: [
      'Low player-to-coach ratio allowing customized individual technical interventions.',
      'Match analysis utilizing high-speed cameras and statistical charting.',
      'Dedicated travel coach support for priority national and international events.'
    ],
    weeklyCommitment: '20 to 24 hours per week (Tennis, S&C, Recovery, Video Analysis)',
    performanceSupport: [
      'Monthly physiological profiling (VO2 Max, explosive jump, mobility)',
      'Direct mentoring by Rohan Bopanna on tour realities and doubles acumen',
      'Custom nutrition and recovery protocols (hydrotherapy & sports massage)'
    ],
    image: 'https://images.unsplash.com/photo-1511067007798-446708063d48?auto=format&fit=crop&w=1000&q=80',
    features: ['ITF Junior Circuit Focused', 'Low Player-to-Coach Ratio', 'Travel Coach Support', 'Residential Options Available'],
    equipmentNeeded: 'Multiple matching performance racquets, tour bag, customized strings & grips.',
    scheduleOverview: 'Dual daily sessions (Morning S&C + Tennis, Afternoon Match Simulation).'
  },
  {
    id: 'high-performance',
    order: '06',
    name: 'High Performance Program',
    tagline: 'World-Class Development for Collegiate & Professional Contenders',
    ageGroup: 'Ages 14 & Above / Elite Juniors',
    ballType: 'Tour Grade Yellow Ball',
    courtSize: 'Standard Full Court',
    coachRatio: '1:1 to 1:2 Personalized Coaching',
    level: 'Elite',
    shortDesc: 'Comprehensive, all-inclusive program for athletes targeting US NCAA Division 1 scholarships, National Senior Championships, and initial ATP/WTA points.',
    fullDesc: 'The pinnacle junior-to-senior development program at RBTA. High Performance athletes train in an environment that replicates the daily life of top-100 ATP/WTA professionals. Every variable—biomechanics, periodized training cycles, power outputs, mental toughness, and tournament travel—is managed by a multidisciplinary team of experts at the Padukone-Dravid CSE campus.',
    objectives: [
      'Transition from junior play patterns to senior tour-level heavy ball striking.',
      'Master doubles court awareness, angles, and net instincts pioneered by Rohan Bopanna.',
      'Achieve peak athletic conditioning to sustain 3-hour match intensity.',
      'Secure NCAA Division 1 tennis recruitment or ATP/WTA rankings.'
    ],
    coachingApproach: [
      'Individualized annual periodization planning synced with tournament peaks.',
      'Elite sparring with visiting ATP/WTA tour professionals.',
      'Regular technical masterclasses conducted by Scott Davidoff and Rohan Bopanna.'
    ],
    weeklyCommitment: '26 to 30 hours per week (Full-time intensive schedule)',
    performanceSupport: [
      'Daily physiotherapy, ice baths, and sports massage access',
      'NCAA recruitment counseling, video portfolio creation & agency advice',
      'Sports psychologist consultations for tournament stress inoculation'
    ],
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=80',
    features: ['1:1 Technical Sessions', 'NCAA D1 Pathway Support', 'Full CSE Sports Science Access', 'Tour Pro Sparring'],
    equipmentNeeded: 'Tournament grade gear, match telemetry wearable, customized stringing specifications.',
    scheduleOverview: 'Full-day athlete schedule with residential boarding at CSE.'
  },
  {
    id: 'pro-training',
    order: '07',
    name: 'Professional Player Training',
    tagline: 'ATP & WTA Tour-Level Coaching, Off-Season Camps & Match Refinement',
    ageGroup: 'Professional & Tour-Bound Players',
    ballType: 'Official ATP/WTA Tour Balls',
    courtSize: 'Standard Full Court',
    coachRatio: 'Dedicated 1:1 Coaching & Private Squads',
    level: 'Professional',
    shortDesc: 'Bespoke off-season training, tournament prep blocks, and tactical sharpening for touring ATP, WTA, and Davis Cup/BJK Cup professionals.',
    fullDesc: 'Founded by active World No. 1 and Grand Slam Champion Rohan Bopanna, RBTA offers touring professionals a world-class training base in Asia. With state-of-the-art hard courts, covered facilities, cutting-edge recovery labs at CSE, and high-level sparring partners, pros fine-tune their games between Asian and Australian swing tours.',
    objectives: [
      'Optimize return of serve and first-strike tennis against top 100 level opponents.',
      'Master world-class doubles positioning, communication, and court geometry.',
      'Execute aggressive load-and-recovery cycles to avoid in-season burnout.',
      'Refine equipment customization (lead tape, string tension, swing weight).'
    ],
    coachingApproach: [
      'Direct strategic consultation with Scott Davidoff and Rohan Bopanna.',
      'Data-driven shot placement and serve radar telemetry analysis.',
      'Comprehensive medical and athletic maintenance under senior tour physios.'
    ],
    weeklyCommitment: 'Tailored weekly / monthly training blocks',
    performanceSupport: [
      'Exclusive private court access and sparring squads',
      'Full CSE recovery suite: cryotherapy, sauna, cold plunge, hyperbaric',
      'Custom chef-curated nutrition and private airport transfers'
    ],
    image: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=1000&q=80',
    features: ['Tour Coach Mentorship', 'Custom Off-Season Camps', 'Cryotherapy & High Performance Recovery', 'Private Court Blocks'],
    equipmentNeeded: 'Professional equipment and travel specifications.',
    scheduleOverview: 'Customized training blocks booked in advance with Academy Directors.'
  },
  {
    id: 'coaching-certification',
    order: '09',
    name: 'Coaching Certification Program',
    tagline: 'Standardizing Elite Coaching Pedagogy Across India',
    ageGroup: 'Tennis Coaches, Physical Trainers & Former Players',
    ballType: 'Red, Orange, Green & Yellow Training Systems',
    courtSize: 'Full & Scaled Development Courts',
    coachRatio: 'Master Coach Mentorship',
    level: 'Professional',
    shortDesc: 'A rigorous 10-day coaching certification structured across 3 modules with on-court practical application periods between modules.',
    fullDesc: 'Designed to elevate the standard of tennis coaching across India. RBTA’s Coaching Certification Program bridges textbook sports science and world-class tour experience. Spread across three intensive 3-day modules with 2 to 3-month practical application windows, coaches master early red-court initiation, large-group management, video biomechanics, and tactical development.',
    objectives: [
      'Module 1 (3 Days): Master on-court practical drills for kids on the Red Court, differentiating between Red Initiation, Competition, and Total Tennis.',
      'Module 2 (3 Days): Advanced player development, stroke biomechanics, kinetic chain diagnostics, and multi-directional footwork.',
      'Module 3 (3 Days): Practical on-court assessment, tactical charting methodology, and official RBTA Coaching Certification.'
    ],
    coachingApproach: [
      'Interactive masterclasses led by Technical Director Scott Davidoff and Chief Coach Balachandran Manikkath.',
      'Practical mentoring on court with real junior squads at the CSE campus.',
      '2-to-3-month practical break between modules for real-world coaching implementation and review.'
    ],
    weeklyCommitment: '10 Days Total (Three 3-day modules spaced over months)',
    performanceSupport: [
      'Official RBTA Certified Coach Credential',
      'Curriculum coursebook and video drill library access',
      'Annual refresher webinars with Rohan Bopanna'
    ],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80',
    features: ['3 Intensive Modules', 'Red Court Specialization', 'Tour Coach Mentorship', 'Official Certification'],
    equipmentNeeded: 'Coaching notebook, performance tennis gear, multiple racquets.',
    scheduleOverview: 'Quarterly intakes announced via academy newsletter & website.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'mahesh-bhupathi',
    author: 'Mahesh Bhupathi',
    role: '12-Time Grand Slam Champion & Davis Cup Legend',
    quote: 'The perfect combination for youngsters to pursue their dreams of playing Professional tennis... the first and only facility in India catering comprehensively to tennis, fitness, diet, mental strength, recovery, and tournament play. I am confident that RBTA will become a factory of producing Indian Tennis Talent!',
    highlight: 'A factory of producing Indian Tennis Talent',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'sriram-balaji',
    author: 'N. Sriram Balaji',
    role: 'Indian Davis Cup Member & ATP Tour Professional',
    quote: 'RBTA is one of India\'s top professional tennis academies, backed by world-class facilities and knowledgeable, experienced coaches who understand what it takes to succeed on the ATP circuit.',
    highlight: 'One of India\'s top professional tennis academies',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'parent-rao',
    author: 'Praveen & Sudha Rao',
    role: 'Parents of High Performance Junior Trainee (Ranked Top 20 AITA)',
    quote: 'The transformation in our son\'s athletic discipline, court temperament, and tactical maturity under Balachandran Sir and the RBTA team has been exceptional. Having tennis, sports science, and schooling support all in one campus at CSE has made all the difference.',
    highlight: 'Exceptional athletic and character transformation',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  }
];

export const PLAYERS_DATA: Player[] = [
  {
    id: 'prajwal-dev',
    name: 'S. D. Prajwal Dev',
    category: 'Pro Circuit',
    age: 28,
    hometown: 'Mysuru, Karnataka',
    plays: 'Right-handed (Two-handed backhand)',
    currentRanking: 'India Top 5 / ATP Career High #580',
    rankingSystem: 'ATP',
    careerHigh: 'ATP 580 (Singles), ATP 260 (Doubles)',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    bio: 'One of Karnataka’s leading professionals and long-time trainee alongside Rohan Bopanna. Prajwal represented India at the Davis Cup squad trials and has clinched multiple ITF World Tennis Tour doubles and singles titles across Asia.',
    achievements: [
      'Multiple ITF World Tennis Tour Men’s Doubles Titles',
      'Member of Indian Davis Cup Squad (Reserve / Sparring)',
      'Men’s National Grasscourt Championships Runner-up',
      'Regular sparring partner to Rohan Bopanna during Tour training blocks'
    ],
    recentResults: [
      { tournament: 'ITF M25 Mysuru Open', result: 'Doubles Champion', year: '2024' },
      { tournament: 'ITF M15 Bengaluru', result: 'Singles Semifinalist', year: '2024' },
      { tournament: 'National Tennis Championships', result: 'Quarterfinalist', year: '2023' }
    ],
    racket: 'Yonex VCORE 98',
    favoriteSurface: 'Plexicushion Hard Court'
  },
  {
    id: 'nikki-poonacha',
    name: 'Niki Kaliyanda Poonacha',
    category: 'Pro Circuit',
    age: 29,
    hometown: 'Bengaluru, Karnataka',
    plays: 'Right-handed (Two-handed backhand)',
    currentRanking: 'ATP Doubles #120 / Davis Cup Member',
    rankingSystem: 'ATP',
    careerHigh: 'ATP Doubles #105, ATP Singles #480',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Indian Davis Cup stalwart and National Champion who trains periodically at RBTA with Rohan Bopanna. Known for his thunderous first serve and attacking net prowess, Niki is a cornerstone of Indian professional men’s tennis.',
    achievements: [
      'Indian Davis Cup Team Member (Won debut doubles rubber)',
      'Multiple ATP Challenger Tour Doubles Finalist & Champion',
      'Fenesta Open Men’s National Champion',
      'Gold Medalist at National Games of India'
    ],
    recentResults: [
      { tournament: 'ATP Challenger Bengaluru Open', result: 'Doubles Finalist', year: '2024' },
      { tournament: 'Davis Cup World Group I (India vs Pakistan)', result: 'Rubber Winner', year: '2024' },
      { tournament: 'ATP Challenger Shenzhen', result: 'Doubles Champion', year: '2023' }
    ],
    racket: 'Babolat Pure Drive Tour',
    favoriteSurface: 'Hard Court'
  },
  {
    id: 'arjun-kadhe',
    name: 'Arjun Kadhe',
    category: 'Pro Circuit',
    age: 30,
    hometown: 'Pune, Maharashtra',
    plays: 'Right-handed (Two-handed backhand)',
    currentRanking: 'ATP Doubles #135',
    rankingSystem: 'ATP',
    careerHigh: 'ATP Doubles #88',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Former NCAA Division 1 All-American and veteran tour campaigner who utilizes RBTA facilities for intensive off-season preparation and doubles masterclasses with Rohan Bopanna.',
    achievements: [
      '5x ATP Challenger Doubles Titles',
      'Tata Open Maharashtra ATP 250 Semifinalist',
      'Former Top 100 ATP Doubles Player'
    ],
    recentResults: [
      { tournament: 'ATP Challenger Nonthaburi', result: 'Doubles Champion', year: '2024' },
      { tournament: 'Chennai Open Challenger', result: 'Semifinalist', year: '2024' }
    ],
    racket: 'Wilson Pro Staff 97',
    favoriteSurface: 'Hard Court'
  },
  {
    id: 'rohit-narayan',
    name: 'Rohit Narayan',
    category: 'High Performance',
    age: 17,
    hometown: 'Bengaluru, Karnataka',
    plays: 'Right-handed (Two-handed backhand)',
    currentRanking: 'ITF Junior #312 / AITA U18 #4',
    rankingSystem: 'ITF Junior',
    careerHigh: 'ITF Junior #280',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    bio: 'Rising star of Karnataka junior tennis. Training full-time at RBTA under Balachandran Manikkath for over 4 years, Rohit combines an aggressive baseline game with razor-sharp return instincts.',
    achievements: [
      'AITA Super Series U18 Champion (Bengaluru)',
      'ITF J60 Hyderabad Doubles Champion',
      'Karnataka State Junior Champion 2023 & 2024'
    ],
    recentResults: [
      { tournament: 'ITF J100 New Delhi', result: 'Quarterfinalist', year: '2024' },
      { tournament: 'AITA National Championship U18', result: 'Semifinalist', year: '2024' },
      { tournament: 'ITF J60 Colombo', result: 'Finalist', year: '2023' }
    ],
    racket: 'Head Speed MP',
    favoriteSurface: 'Plexicushion Hard Court'
  },
  {
    id: 'ananya-krishnan',
    name: 'Ananya Krishnan',
    category: 'High Performance',
    age: 16,
    hometown: 'Chennai, Tamil Nadu',
    plays: 'Right-handed (One-handed backhand)',
    currentRanking: 'AITA Girls U18 #8 / ITF Junior #440',
    rankingSystem: 'AITA',
    careerHigh: 'AITA Girls U18 #6',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    bio: 'Full-time resident trainee at the CSE academy campus. Known for her rare and aesthetic one-handed backhand and tactical finesse, Ananya is targeting US College Tennis recruitment.',
    achievements: [
      'AITA National Series U16 Champion',
      'Fenesta Open Girls U16 Quarterfinalist',
      'Tamil Nadu State U16 Gold Medalist'
    ],
    recentResults: [
      { tournament: 'AITA Championship Series Bengaluru', result: 'Champion', year: '2024' },
      { tournament: 'ITF J30 Madurai', result: 'Doubles Winner', year: '2024' }
    ],
    racket: 'Wilson Blade 98',
    favoriteSurface: 'Hard Court'
  },
  {
    id: 'bhoomi-kavya-m',
    name: 'Kavya M.',
    category: 'Bhoomi Scholar',
    age: 14,
    hometown: 'Chikkaballapur Rural, Karnataka',
    plays: 'Right-handed (Two-handed backhand)',
    currentRanking: 'AITA Girls U14 #14 (Karnataka #2)',
    rankingSystem: 'AITA',
    careerHigh: 'AITA Girls U14 #14',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    bio: 'Discovered through the Bhoomi Program talent outreach in rural Karnataka. Provided with a full residential scholarship, world-class schooling, and high-performance tennis coaching at RBTA since age 10.',
    achievements: [
      'AITA Talent Series U14 Champion (3 Titles in 2024)',
      'Karnataka State Rural Sports Meet Gold Medalist',
      'Selected for National Junior Development Squad'
    ],
    recentResults: [
      { tournament: 'AITA Championship Series U14 Bengaluru', result: 'Champion', year: '2024' },
      { tournament: 'AITA Super Series Mysuru U14', result: 'Finalist', year: '2024' }
    ],
    racket: 'Wilson Ultra 100',
    favoriteSurface: 'Hard Court',
    bhoomiScholar: true
  },
  {
    id: 'bhoomi-manoj-kumar',
    name: 'Manoj Kumar',
    category: 'Bhoomi Scholar',
    age: 15,
    hometown: 'Kolar District, Karnataka',
    plays: 'Left-handed (Two-handed backhand)',
    currentRanking: 'AITA Boys U16 #22',
    rankingSystem: 'AITA',
    careerHigh: 'AITA Boys U16 #22',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    bio: 'A natural left-handed athlete inducted into the Bhoomi Program in 2021. With 100% scholarship support, Manoj has developed explosive court coverage and a wicked swinging slider serve.',
    achievements: [
      'AITA Championship Series U16 Champion',
      'All India Inter-School Tennis Championship Silver Medalist',
      'Bhoomi Excellence in Sports & Academics Awardee'
    ],
    recentResults: [
      { tournament: 'AITA Super Series Hubballi U16', result: 'Champion', year: '2024' },
      { tournament: 'AITA National Series Hyderabad U16', result: 'Semifinalist', year: '2024' }
    ],
    racket: 'Babolat Pure Aero (Rafael Nadal Spec)',
    favoriteSurface: 'Plexicushion Hard Court',
    bhoomiScholar: true
  },
  {
    id: 'dhruv-reddy',
    name: 'Dhruv Reddy',
    category: 'Junior',
    age: 12,
    hometown: 'Bengaluru, Karnataka',
    plays: 'Right-handed (Two-handed backhand)',
    currentRanking: 'AITA Boys U12 #11',
    rankingSystem: 'AITA',
    careerHigh: 'AITA Boys U12 #11',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    bio: 'Started in RBTA’s Green Ball program at age 9, Dhruv has progressed rapidly into national U12 tournaments. Notable for his relentless footwork and sportsmanship on court.',
    achievements: [
      'AITA Talent Series U12 Champion',
      'Bangalore Junior Open U12 Winner 2024'
    ],
    recentResults: [
      { tournament: 'AITA Talent Series Bengaluru U12', result: 'Champion', year: '2024' },
      { tournament: 'KSLTA State Ranking U12', result: 'Finalist', year: '2024' }
    ],
    racket: 'Head Gravity Jr 26',
    favoriteSurface: 'Hard Court'
  }
];

export const COACHES_DATA: Coach[] = [
  {
    id: 'rohan-bopanna',
    name: 'Rohan Bopanna',
    role: 'Founder & Director',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    credentials: [
      'Grand Slam Men’s Doubles Champion (Australian Open 2024)',
      'Grand Slam Mixed Doubles Champion (French Open 2017)',
      'ATP World No. 1 in Men’s Doubles (Oldest No. 1 in tennis history)',
      'Padma Shri & Arjuna Awardee by Government of India',
      '2x Olympian (London 2012, Rio 2016)',
      '20+ Years on ATP Tour with 26 ATP Tour Titles'
    ],
    experience: '25+ Years in World-Class Professional Tennis',
    bio: 'Rohan Bopanna is one of the most celebrated figures in Indian sports history. Known for his legendary sportsmanship, immense serve, and visionary net play, Rohan founded RBTA with the conviction that Indian tennis players deserve an international-standard development ecosystem on home soil. He is personally involved in academy curriculum design, coach mentoring, and elite player development.',
    quote: 'True champions are not made by luck; they are forged through the right basics, unwavering fitness, and the smarts to overcome adversity on and off the court.',
    specialties: ['Elite Tactical Strategy', 'Doubles Court Geometry', 'Serve & Return Mastery', 'Mental Resilience at Tour Level'],
    isFounder: true
  },
  {
    id: 'scott-eric-davidoff',
    name: 'Scott Eric Davidoff',
    role: 'Technical Director & Senior Consultant Coach',
    category: 'Technical Coaching',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1000&q=80',
    credentials: [
      'Personal Coach to Rohan Bopanna & Matthew Ebden (2024 Australian Open Champions)',
      'Coach to Multiple ATP Top 10 Doubles and Top 50 Singles Players',
      'Former Head Coach, University of South Florida (USF)',
      'USTA Master High Performance Certified Coach'
    ],
    experience: '30+ Years Tour & NCAA Elite Coaching',
    bio: 'Scott Davidoff has coached at every level of international tennis—from collegiate champions in the United States to the finals of Wimbledon, the US Open, and the Australian Open. As RBTA’s Technical Director, Scott conducts regular masterclass bootcamps in Bengaluru, auditing every player’s stroke biomechanics, court positioning, and tactical periodization.',
    quote: 'Modern tennis demands hyper-efficient movement and aggressive intent. We don’t just teach shots; we build problem solvers who thrive in chaotic match conditions.',
    specialties: ['Biomechanics & Kinetic Chain', 'Tour Level Scouting', 'NCAA College Placement', 'High Performance Periodization']
  },
  {
    id: 'balachandran-manikkath',
    name: 'Balachandran Manikkath',
    role: 'Chief Coach & Head of High Performance',
    category: 'Technical Coaching',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80',
    credentials: [
      'Former Coach of Indian Davis Cup Team',
      'Coach to Multiple ATP/WTA Ranked Professionals and National Champions',
      'ITF Level 3 Certified Master Coach',
      'Over 2 Decades as India’s Foremost Player Developer'
    ],
    experience: '25+ Years High Performance Coaching',
    bio: 'Balachandran Manikkath is revered as one of the finest coaching minds in Asia. Having guided numerous Indian Davis Cuppers and junior national champions, Balachandran oversees daily on-court training operations at RBTA. His systematic approach ensures every junior transitions smoothly from fundamental mastery to high-pressure national and international circuits.',
    quote: 'Repetition without intention is useless. At RBTA, every ball hit has a purpose, a target, and a consequence.',
    specialties: ['Player Pathway Transition', 'Pressure Situations Training', 'Junior Talent Scouting', 'Match Charting & Analytics']
  },
  {
    id: 'dragan-bukumirovic',
    name: 'Dragan Bukumirovic',
    role: 'International Performance Coach',
    category: 'Technical Coaching',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
    credentials: [
      'Serbian Tennis Federation Certified Pro Coach',
      '15+ Years Developing European Junior & Senior Competitors',
      'Specialist in Heavy Topspin Baseline Mechanics & Movement'
    ],
    experience: '18 Years European & Asian Academy Coaching',
    bio: 'Bringing the celebrated European clay-court intensity and rigorous discipline to RBTA, Dragan works extensively with our Junior Pro and High Performance squads. His coaching emphasizes footwork stamina, heavy trajectory manipulation, and mental resilience during long, grinding baseline rallies.',
    quote: 'You must love the struggle. When points get difficult, that is when the real tennis begins.',
    specialties: ['European Footwork Methodology', 'Heavy Spin Generation', 'Endurance Rallies', 'Junior Competitive Transition']
  },
  {
    id: 'marcus-fernandes',
    name: 'Marcus Fernandes',
    role: 'Head of Strength & Conditioning',
    category: 'Sports Science & Fitness',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    credentials: [
      'CSCS (Certified Strength and Conditioning Specialist)',
      'M.Sc. in Sports Science & Biomechanics',
      'Former S&C Consultant for Olympic & National Level Athletes'
    ],
    experience: '12 Years Tennis-Specific S&C',
    bio: 'Marcus oversees all physical preparation at RBTA, utilizing the elite facilities at the Padukone-Dravid CSE gym. His tennis-specific programs focus on rotational power, deceleration mechanics, core rotational torque, and cardiovascular interval training designed around tennis energy systems.',
    quote: 'In tennis, your shots are only as good as your legs. We build athletes who are still exploding into shots in the third set.',
    specialties: ['Rotational Power', 'Lateral Deceleration', 'VO2 Max Intervals', 'Injury Prevention']
  },
  {
    id: 'dr-priya-shankar',
    name: 'Dr. Priya Shankar, PT',
    role: 'Lead Sports Physiotherapist & Recovery Specialist',
    category: 'Physiotherapy & Recovery',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    credentials: [
      'Masters in Sports Physiotherapy (UK)',
      'Certified Dry Needling & Manual Therapy Practitioner',
      'Specialist in Shoulder & Hip Tennis Biomechanics'
    ],
    experience: '10 Years Clinical Sports Rehabilitation',
    bio: 'Dr. Priya manages athlete recovery, injury screening, and functional mobility. Working alongside the Abhinav Bindra Targeting Performance center at CSE, she ensures players manage workloads, maintain joint integrity, and recover swiftly using hydrotherapy, contrast baths, and targeted soft-tissue therapies.',
    quote: 'Recovery is not an afterthought; it is 50% of the training program.',
    specialties: ['Rotator Cuff Maintenance', 'Hip Mobility', 'Contrast Hydrotherapy', 'Prehab Protocols']
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'courts-hard',
    title: '10+ ITF-Standard Plexicushion Hard Courts',
    category: 'Courts',
    shortDesc: 'Tournament-grade acrylic courts with international competition LED illumination.',
    description: 'The academy features a sprawling complex of over 10 championship hard courts surfaced with official ITF-approved Plexicushion/acrylic systems. Formulated for true bounce, consistent ball speed, and gentle shock absorption to protect young athletes joints during heavy daily training volumes.',
    specs: [
      'ITF Category 3 Medium-Pace Surface',
      '1000+ Lux Anti-Glare LED Tournament Lighting for Evening Play',
      'Expansive run-off margins matching Grand Slam specifications',
      'Permanent umpire chairs, shaded player benches, and courtside hydration stations'
    ],
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['10+ Championship Courts', 'Tournament LED Floodlights', 'True ITF Pace', 'All-Day Availability']
  },
  {
    id: 'covered-courts',
    title: 'Covered All-Weather Training Arena',
    category: 'Courts',
    shortDesc: '3 specialized indoor covered courts ensuring uninterrupted training throughout Bengaluru monsoons.',
    description: 'Weather is never an obstacle at RBTA. Our 3 covered indoor tennis courts feature high-clearance architectural canopies, natural ventilation, and tournament-grade surfaces that allow uninterrupted practice regardless of rain, extreme sun, or monsoon downpours.',
    specs: [
      '3 Fully Covered Championship Tennis Courts',
      '12-meter clear ceiling clearance for high lobs and serving trajectory',
      'Engineered cross-ventilation keeping temperatures optimal',
      'Integrated high-definition video camera mounts for live match capture'
    ],
    image: 'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511067007798-446708063d48?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Monsoon-Proof Training', 'High Overhead Clearance', 'Zero Rain Stoppages', 'Multi-Angle Camera Hubs']
  },
  {
    id: 'sports-science',
    title: 'Sports Science & Biomechanics Lab',
    category: 'Sports Science',
    shortDesc: 'Abhinav Bindra Targeting Performance (ABTP) integration at the CSE campus.',
    description: 'In partnership with world-class sports science centers at the Padukone-Dravid CSE, RBTA utilizes state-of-the-art diagnostic equipment. High-speed 3D motion capture cameras analyze kinetic chain transmission in serves and groundstrokes, identifying subtle energy leaks and injury vulnerabilities before they manifest.',
    specs: [
      '3D Markerless Motion Analysis & High-Speed Video Analysis',
      'Force plates measuring ground reaction force and lateral load',
      'Cardiopulmonary exercise testing (CPET) & VO2 Max profiling',
      'Isokinetic dynamometry assessing muscular balance across shoulders and knees'
    ],
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Kinetic Chain Mapping', 'Ground Reaction Telemetry', 'Injury Risk Screening', 'Data-Driven Technical Fixes']
  },
  {
    id: 'fitness-center',
    title: 'Olympic-Standard Strength & Conditioning Arena',
    category: 'Fitness',
    shortDesc: '20,000 sq. ft. multidisciplinary athletic gym with dedicated tennis movement zones.',
    description: 'Tennis demands multidirectional power, rapid acceleration, and brutal deceleration. The CSE strength and conditioning gym houses Keiser pneumatic resistance machines, Olympic lifting platforms, medicine ball throwing tracks, agility turf zones, and sprint lanes tailored specifically for racket athletes.',
    specs: [
      'Keiser Air-Powered Rotational Training Equipment',
      'Indoor 50m sprint track and agility turf',
      'Full suite of Eleiko Olympic lifting barbells and bumper plates',
      'Dedicated junior functional development corner'
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['20,000 sq ft Gym', 'Tennis-Specific Equipment', 'Rotational Power Labs', 'Olympic Barbells & Turf']
  },
  {
    id: 'recovery-suite',
    title: 'Hydrotherapy & Sports Recovery Center',
    category: 'Recovery',
    shortDesc: 'Cryotherapy, contrast pools, dry sauna, and sports massage therapy rooms.',
    description: 'World-class training must be met with world-class recovery. RBTA athletes access specialized hot and cold contrast plunge pools, whole-body cryotherapy units, NormaTec compression boots, and private treatment rooms staffed daily by licensed physiotherapists.',
    specs: [
      'Hot & Cold Contrast Hydrotherapy Pools (4°C Cold Plunge & 38°C Hot Jacuzzi)',
      'NormaTec Pulse 2.0 pneumatic leg and arm compression systems',
      'Theragun percussive therapy and dry needling stations',
      'Full-time clinical rehabilitation suites'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['Contrast Cold Plunge', 'NormaTec Compression', 'On-Site Physios', 'Rapid Muscle Recovery']
  },
  {
    id: 'residential-dining',
    title: 'Athlete Residential Suites & Performance Dining',
    category: 'Residential',
    shortDesc: 'Safe, premium boarding on campus with sports-nutritionist curated dining plans.',
    description: 'For national and international players enrolled full-time, the CSE residential wings provide modern air-conditioned twin-sharing rooms, 24/7 security, quiet study zones for online schooling, and a dedicated athlete cafeteria offering calorie-tailored, nutrient-rich meals designed for intense athletic energy expenditure.',
    specs: [
      'Twin-sharing en-suite residential rooms with high-speed Wi-Fi',
      '24/7 campus security, warden oversight, and medical dispensary',
      'Chef-curated sports dining with customized macro-nutrient splits',
      'Study halls, recreation lounges, and laundry facilities'
    ],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: ['On-Campus Living', 'Sports Nutrition Cafeteria', '24/7 Security & Wardens', 'Study & Tutoring Hubs']
  }
];

export const BHOOMI_STORIES: BhoomiStory[] = [
  {
    id: 'kavya-story',
    studentName: 'Kavya M.',
    origin: 'Rural Chikkaballapur District',
    yearsAtRBTA: '4 Years (Since 2021)',
    currentLevel: 'Ranked #14 in India (Girls U14)',
    story: 'Kavya was discovered during a Bhoomi grassroots talent camp at a rural government school. Showing extraordinary hand-eye reflexes and tenacity, she was selected for a full scholarship. Today, Kavya resides on campus, attends an accredited English-medium school, and has won three national AITA tournament titles in 2024.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    achievements: ['3x National AITA Junior Titles', 'Top 15 All-India Junior Ranking', 'Academic Distinction in Grade 8']
  },
  {
    id: 'manoj-story',
    studentName: 'Manoj Kumar',
    origin: 'Kolar District, Karnataka',
    yearsAtRBTA: '3.5 Years',
    currentLevel: 'Ranked #22 in India (Boys U16)',
    story: 'The son of an agricultural laborer, Manoj had never held a tennis racket before the Bhoomi talent identification scouts visited his village. Inducted into RBTA, Manoj received complete tennis gear, daily coaching, and customized nutrition. His southpaw topspin game has earned him victories over seeded national players.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    achievements: ['AITA Super Series Winner', 'State Rural Championship Gold', 'Selected for Khelo India Scholarship Trials']
  },
  {
    id: 'priya-story',
    studentName: 'Priya Nayak',
    origin: 'Dharwad, North Karnataka',
    yearsAtRBTA: '2 Years',
    currentLevel: 'Junior Development Squad (U12)',
    story: 'Priya showed boundless energy and exceptional natural foot speed. Supported by our CSR corporate sponsors through Bhoomi, she trains 5 days a week at RBTA while maintaining a stellar academic record. Her dream is to represent India at the Junior Fed Cup.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    achievements: ['Karnataka State U12 Semifinalist', 'Best Sportsmanship Award RBTA 2024']
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'australian-open-triumph',
    slug: 'rohan-bopanna-historic-australian-open-title',
    title: 'Founder Rohan Bopanna Makes Tennis History: 2024 Australian Open Champion & World No. 1',
    excerpt: 'At 43, Rohan Bopanna became the oldest Grand Slam Men’s Doubles champion and World No. 1 in tennis history, inspiring generations of young players at RBTA.',
    category: 'Tour Insights',
    date: 'January 28, 2024',
    readTime: '4 min read',
    author: 'RBTA Media Team',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Australian Open', 'Rohan Bopanna', 'Grand Slam', 'World No. 1', 'ATP Tour'],
    content: [
      'In a crowning achievement that captivated the sporting world, RBTA Founder Rohan Bopanna clinched the 2024 Australian Open Men’s Doubles title on Rod Laver Arena alongside Australian partner Matthew Ebden.',
      'The historic victory propelled Bopanna to the World No. 1 ranking in the ATP Doubles rankings, cementing his status as the oldest player in the history of tennis to reach the pinnacle.',
      '“This victory belongs to everyone who believed that age is simply a number when supported by discipline, sports science, and mental clarity,” said Bopanna upon his return to the academy in Bengaluru.',
      'Students and coaches at the Padukone-Dravid Centre for Sports Excellence held a celebratory guard of honor, with Rohan sharing the championship trophy with junior trainees and Bhoomi Foundation scholars.'
    ]
  },
  {
    id: 'scott-davidoff-camp-2024',
    slug: 'scott-davidoff-high-performance-masterclass',
    title: 'Technical Director Scott Davidoff Concludes Elite Biomechanics Masterclass in Bengaluru',
    excerpt: 'Intensive 10-day training camp focused on ground reaction force, serve acceleration, and tactical doubles patterns for junior pro athletes.',
    category: 'Academy News',
    date: 'March 15, 2024',
    readTime: '3 min read',
    author: 'Coaching Department',
    image: 'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?auto=format&fit=crop&w=1200&q=80',
    tags: ['Scott Davidoff', 'Biomechanics', 'High Performance', 'Coaching'],
    content: [
      'Senior Tour Coach and RBTA Technical Director Scott Eric Davidoff concluded an intensive high-performance masterclass camp at the academy campus.',
      'Over 35 junior competitive and collegiate athletes underwent comprehensive video biomechanics auditing at the CSE sports science lab.',
      'Specific emphasis was placed on kinetic chain efficiency—ensuring power is generated from the ground through hip rotation rather than placing undue stress on the shoulder and elbow joints.',
      '“The technical standard here in Bengaluru is rising dramatically,” commented Davidoff. “Our goal is to prepare players who can step on court against any junior in Europe or the US and hold their ground physically and tactically.”'
    ]
  },
  {
    id: 'bhoomi-annual-intake-2024',
    slug: 'bhoomi-foundation-expands-scholarships',
    title: 'Bhoomi Foundation Welcomes 12 New Scholars in 2024 Rural Talent Initiative',
    excerpt: 'With new corporate CSR backing, the foundation expands its fully funded residential, educational, and elite tennis scholarship program.',
    category: 'Bhoomi Program',
    date: 'May 10, 2024',
    readTime: '3 min read',
    author: 'Foundation Secretariat',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    tags: ['Bhoomi Foundation', 'CSR', 'Scholarships', 'Social Impact'],
    content: [
      'The Bhoomi Foundation is thrilled to announce the induction of 12 young talents selected from over 400 participants during scouting drives across rural Karnataka and neighboring districts.',
      'Each selected child receives a 100% scholarship encompassing boarding at the CSE hostel, enrollment in English-medium partnering schools, specialized nutrition, Wilson equipment, and daily coaching by RBTA coaches.',
      '“Talent is distributed evenly across our nation, but opportunity is not,” stated Rohan Bopanna. “The Bhoomi Foundation guarantees that no child with gifted athletic ability is left behind simply because of financial circumstance.”'
    ]
  },
  {
    id: 'aita-nationals-cse-host',
    slug: 'rbta-hosts-aita-championship-series-bengaluru',
    title: 'RBTA Trainees Dominate AITA National Ranking Tournament at Padukone-Dravid CSE',
    excerpt: 'Academy players capture 3 singles titles and 2 doubles crowns on home courts in an exhilarating week of junior tennis.',
    category: 'Tournament Results',
    date: 'July 22, 2024',
    readTime: '2 min read',
    author: 'Tournament Desk',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80',
    tags: ['AITA', 'Junior Champions', 'Tournaments', 'Padukone Dravid CSE'],
    content: [
      'The pristine Plexicushion courts of RBTA played host to the AITA National Championship Series with over 180 juniors from across India participating.',
      'Trainees from RBTA delivered standout performances, claiming victory in the Boys U16 singles, Girls U14 singles, and Boys U14 doubles categories.',
      'Tournament referee and AITA officials lauded the academy’s world-class courts, punctual scheduling, and high sportsmanship displayed by all athletes.'
    ]
  }
];

export const PARTNERS_DATA: Partner[] = [
  {
    id: 'cse-bengaluru',
    name: 'Padukone–Dravid Centre for Sports Excellence',
    category: 'Venue & Infrastructure',
    logoText: 'PADUKONE–DRAVID CSE',
    logoSubtext: 'Integrated High Performance Sports Campus',
    description: 'India’s premier integrated multi-sport campus spread over 15 acres, housing RBTA’s state-of-the-art tennis facilities, sports science labs, recovery suites, and residential complexes.',
    website: 'https://centreforsportsexcellence.com',
    verified: true
  },
  {
    id: 'asics',
    name: 'ASICS',
    category: 'Equipment & Apparel',
    logoText: 'ASICS',
    logoSubtext: 'Sound Mind, Sound Body',
    description: 'Global athletic footwear and apparel leader. Long-term performance partner to Rohan Bopanna, supporting cutting-edge tennis shoes (Court FF & Solution Speed series) for maximum court traction.',
    website: 'https://www.asics.com',
    verified: true
  },
  {
    id: 'wilson',
    name: 'Wilson Sporting Goods',
    category: 'Equipment & Apparel',
    logoText: 'WILSON',
    logoSubtext: 'Official Tennis Equipment Partner',
    description: 'The world’s premier tennis equipment manufacturer. Supplies tour-caliber tennis racquets, strings, and junior development balls across all RBTA training stages.',
    website: 'https://www.wilson.com',
    verified: true
  },
  {
    id: 'aita',
    name: 'All India Tennis Association (AITA)',
    category: 'Governing Body',
    logoText: 'AITA',
    logoSubtext: 'National Governing Body',
    description: 'National governing body for tennis in India. RBTA regularly hosts sanctioned AITA junior and senior ranking tournaments on its championship courts.',
    website: 'https://www.aitatennis.com',
    verified: true
  },
  {
    id: 'kslta',
    name: 'Karnataka State Lawn Tennis Association (KSLTA)',
    category: 'Governing Body',
    logoText: 'KSLTA',
    logoSubtext: 'State Association',
    description: 'Working in close partnership to foster grassroots junior tennis leagues, state ranking events, and talent scouting across the state of Karnataka.',
    website: 'https://www.kslta.com',
    verified: true
  }
];

export const FAQS_DATA = [
  {
    question: "What makes Rohan Bopanna Tennis Academy different from other academies in India?",
    answer: "RBTA is founded and actively guided by Grand Slam Champion and World No. 1 Rohan Bopanna. Located at the prestigious Padukone-Dravid Centre for Sports Excellence in Bengaluru, we provide not just on-court tennis drills, but an integrated ecosystem combining tour-level coaching, sports science biomechanics, dedicated S&C, physiotherapy recovery, and character development based on our three pillars: Fitness First, Right Basics, and Play Smart."
  },
  {
    question: "How does the admission and trial assessment process work?",
    answer: "Prospective players submit an online enquiry via our Admissions Form. Our coaching team schedules a 90-minute on-court assessment trial with our senior coaches. We evaluate fundamental movement, hand-eye coordination, technical stroke mechanics, and coachability. Based on the assessment, we recommend the ideal development pathway (Red/Orange/Green ball for juniors, or Junior Pro/High Performance)."
  },
  {
    question: "Are residential boarding facilities available for outstation and international players?",
    answer: "Yes. RBTA offers comprehensive residential boarding at the Padukone-Dravid CSE campus. Trainees live in secure, air-conditioned twin-sharing dormitories with 24/7 security and wardens. The campus features a dedicated sports nutrition cafeteria, study halls for online schooling, and high-speed Wi-Fi, allowing athletes to train full-time without commuting."
  },
  {
    question: "What is the Bhoomi Foundation and who is eligible for scholarships?",
    answer: "The Bhoomi Foundation is RBTA's social impact initiative founded by Rohan Bopanna. It identifies talented children from economically disadvantaged and rural backgrounds. Selected scholars receive 100% free tennis training, world-class equipment, tournament travel funding, English-medium formal education, and on-campus residential support. CSR organizations and individual patrons can partner with the foundation to sponsor upcoming champions."
  },
  {
    question: "Can tournament players receive travel coaching support?",
    answer: "Yes. For players enrolled in our Junior Pro and High Performance pathways, RBTA coaches travel to designated AITA National, ATF, and ITF Junior tournaments. We provide pre-match scouting, courtside charting, warm-up supervision, and post-match video debriefing."
  },
  {
    question: "What equipment should my child bring for their initial assessment session?",
    answer: "Athletes should bring non-marking tennis shoes (suitable for hard courts), comfortable athletic wear, an appropriate tennis racket if they currently own one (our academy can also provide size-appropriate rackets for beginners during trials), a water bottle, and a towel."
  }
];
