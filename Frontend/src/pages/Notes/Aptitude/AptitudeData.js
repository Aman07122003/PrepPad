const AptitudeData = [
  {
    id: "number_system",
    title: "Number System - Complete Coverage",
    topics: [
      // Basic Concepts (All Exams)
      "Classification of Numbers: Natural, Whole, Integers, Rational, Irrational, Real, Complex",
      "Divisibility Rules (2-13, 25) with Advanced Rules for 7, 11, 13",
      "Place Value, Face Value, and Decimal System",
      "Unit Digit Concepts and Cyclicity (1-9 patterns)",
      
      // Prime Numbers & Factors (SSC + CAT)
      "Prime Numbers (1-100), Co-prime, Twin Primes, Prime Triplets",
      "Prime Factorization Methods and Applications",
      "Finding Number of Factors: Total, Odd, Even, Prime Factors",
      "Sum of Factors, Product of Factors Formulas",
      "Number of ways to express number as product of two factors",
      
      // LCM & HCF (All Exams)
      "LCM and HCF by Prime Factorization & Division Method",
      "Relationship: LCM × HCF = Product of Numbers",
      "Word Problems on LCM and HCF (All exam types)",
      "Finding Largest Number dividing numbers leaving same remainder",
      "Finding Least Number which when divided leaves specific remainders",
      "Bell Ringing, Circular Motion Applications",
      
      // Fractions & Decimals (SSC Focus)
      "Types of Fractions: Proper, Improper, Mixed, Equivalent, Complex",
      "Recurring Decimals to Fractions Conversion (Shortcut methods)",
      "Terminating vs Non-terminating Decimals",
      "Simplification of Complex Fractions and Decimal Operations",
      
      // Important Formulas (CAT + SSC)
      "Sum of first n natural numbers, squares, cubes",
      "Number of zeros in n! = [n/5] + [n/25] + [n/125] + ...",
      "Finding exponent of prime p in n! (Legendre's formula)",
      "Number of digits in a^b using logarithms",
      
      // Remainder Theorem (CAT Advanced)
      "Remainder Theorem Basics and Applications",
      "Euler's Theorem: a^φ(n) ≡ 1 mod n (when a,n co-prime)",
      "Fermat's Theorem: a^p ≡ a mod p (p prime)",
      "Chinese Remainder Theorem Applications",
      "Wilson's Theorem: (p-1)! ≡ -1 mod p",
      "Remainder of large exponents using cyclicity",
      
      // Number Properties (All Exams)
      "Even-Odd Operations and Properties",
      "Consecutive Numbers Properties and Sums",
      "Finding Last Digit, Last Two Digits (CAT Advanced)",
      "Digital Sum and Digital Root Applications",
      
      // Special Numbers (CAT Specific)
      "Perfect Numbers, Deficient, Abundant Numbers",
      "Armstrong Numbers, Palindrome Numbers",
      "Factorial Numbers and their Properties",
      "Fibonacci Numbers and Properties",
      
      // Advanced Applications (CAT + Service Sector)
      "Finding Numbers with exactly x factors",
      "Number of divisors of form (4n+1), (4n+3)",
      "Finding numbers not divisible by any of given numbers",
      "Inclusion-Exclusion principle in number system",
      
      // Previous Year Focus
      "SSC CGL: Unit digit, Divisibility, Basic LCM-HCF",
      "CAT: Remainder theorem, Factors, Advanced number theory",
      "Service Sector: Basic operations, Fractions, Decimals",
      "Banking: Quick calculations, Approximation techniques"
    ]
  },
  {
    id: "hcf_lcm",
    title: "HCF & LCM - Advanced Applications",
    topics: [
      "Basic Concepts and Calculation Methods",
      "Prime Factorization vs Division Method Comparison",
      "Relationship: LCM × HCF = Product of Numbers (Proof & Applications)",
      "Word Problems: Arrangements, Tiling, Packaging",
      "Finding Largest Number dividing numbers leaving same remainder",
      "Finding Least Number which when divided leaves specific remainders",
      "Bell Ringing Problems with multiple bells",
      "Circular Motion and Meeting Point Problems",
      "Arrangement in Rows and Columns (Army Marching)",
      "Pipes and Cisterns Applications",
      "Time and Work Coordination Problems",
      "SSC CGL Previous Year Patterns",
      "CAT Level: Complex word problems with multiple conditions",
      "Service Sector: Practical scheduling problems"
    ]
  },
  {
    id: "percentages",
    title: "Percentages - Complete Coverage",
    topics: [
      // Basic Concepts (All Exams)
      "Percentage to Fraction Conversion (1/8=12.5% etc.)",
      "Fraction to Percentage Conversion",
      "Basic Percentage Calculations",
      
      // Increase/Decrease (SSC + Service Sector)
      "Percentage Increase and Decrease",
      "Successive Percentage Change",
      "Net Percentage Change Formula",
      "Population Growth Problems",
      
      // Profit Loss (All Exams)
      "Cost Price, Selling Price, Marked Price Concepts",
      "Profit/Loss Percentage Calculations",
      "Successive Profit/Loss Problems",
      "Discount and Markup Problems",
      "False Weight Problems",
      
      // Simple Interest (Service Sector + SSC)
      "Simple Interest Formula and Applications",
      "Principal, Rate, Time Calculations",
      "Installment Problems with SI",
      
      // Advanced Applications (CAT)
      "Percentage in Data Interpretation",
      "Mixture Problems using Percentage",
      "Allocation and Distribution Problems",
      "Voting Percentage and Election Problems",
      
      // Exam Specific Focus
      "SSC CGL: Quick calculation shortcuts",
      "CAT: DI based percentage problems",
      "Banking: Interest, Profit/Loss, Commission",
      "Service Sector: Salary increment, Performance metrics"
    ]
  },
  {
    id: "ratio_proportion",
    title: "Ratio & Proportion - Advanced",
    topics: [
      "Basic Ratio Concepts and Properties",
      "Proportion and Mean Proportion",
      "Direct, Inverse, and Compound Proportion",
      "Partnership Problems with different investment periods",
      "Mixture and Alligation: Basic to Advanced",
      "Alligation Cross Method for mixtures",
      "Replacement in Mixtures",
      "Income, Expenditure, Savings Ratio Problems",
      "Age Ratio Problems with time gap",
      "Coin, Money Distribution Problems",
      "Work Efficiency Ratio Problems",
      "Speed, Distance, Time Ratio Applications",
      "CAT Level: Complex ratio problems with multiple variables",
      "SSC CGL: Quick ratio comparison techniques",
      "Service Sector: Resource allocation, Team distribution"
    ]
  },
  {
    id: "simple_compound_interest",
    title: "Simple & Compound Interest",
    topics: [
      // Simple Interest (Service Sector + SSC)
      "Simple Interest Formula: SI = P×R×T/100",
      "Finding Principal, Rate, Time from SI",
      "Installment Problems with SI",
      "Multiple Investment SI Problems",
      
      // Compound Interest Basics
      "Compound Interest Formula: A = P(1+R/100)^T",
      "CI for different compounding periods",
      "Half-yearly, Quarterly, Monthly Compounding",
      "Difference between SI and CI",
      
      // Advanced CI (CAT + Banking)
      "CI with varying rates over time",
      "Population Growth and Depreciation Problems",
      "Installment with CI (Loan EMIs)",
      "Effective Annual Rate vs Nominal Rate",
      
      // Growth & Depreciation
      "Exponential Growth Problems",
      "Depreciation of Assets",
      "Inflation and Purchasing Power",
      
      // Exam Specific
      "SSC CGL: Basic SI/CI, Difference problems",
      "CAT: Advanced CI, Growth problems",
      "Banking: Loan EMIs, Investment planning",
      "Service Sector: Salary growth, Investment returns"
    ]
  },
  {
    id: "probability",
    title: "Probability - Complete Syllabus",
    topics: [
      // Basic Probability (All Exams)
      "Probability Basics: Sample Space, Events",
      "Classical Probability: P(E) = n(E)/n(S)",
      "Addition Theorem: P(A∪B) = P(A) + P(B) - P(A∩B)",
      
      // Types of Events
      "Independent and Dependent Events",
      "Mutually Exclusive Events",
      "Exhaustive Events",
      "Conditional Probability",
      
      // Practical Problems
      "Coin Toss Problems (Single/Multiple coins)",
      "Dice Problems (Single/Multiple dice)",
      "Card Problems (Deck of 52 cards)",
      "Ball Problems (Bag and balls)",
      
      // Advanced Probability (CAT)
      "Bayes' Theorem Applications",
      "Probability with Permutations & Combinations",
      "Geometric Probability",
      "Probability Distributions (Basic)",
      
      // Real World Applications
      "Quality Control and Defective Items",
      "Game Theory Basics",
      "Risk Assessment Problems",
      "Weather Forecasting Models",
      
      // Exam Focus
      "Service Sector: Basic probability for decision making",
      "SSC CGL: Coin, dice, card problems",
      "CAT: Conditional probability, Bayes theorem"
    ]
  },
  {
    id: "permutations_combinations",
    title: "Permutations & Combinations",
    topics: [
      // Fundamental Concepts
      "Fundamental Principle of Counting",
      "Factorial Notation and Properties",
      "Permutations vs Combinations Difference",
      
      // Permutations
      "Permutations without repetition: nPr = n!/(n-r)!",
      "Permutations with repetition",
      "Circular Permutations",
      "Permutations with restrictions",
      "Permutations of alike objects",
      
      // Combinations
      "Combinations without repetition: nCr = n!/r!(n-r)!",
      "Combinations with repetition",
      "Combinations with restrictions",
      "Group Formation Problems",
      
      // Advanced Concepts (CAT)
      "Derangements Concept",
      "Division and Distribution Problems",
      "Geometry Applications (Lines, triangles from points)",
      "Number Formation Problems",
      
      // Real World Applications
      "Committee Formation Problems",
      "Team Selection Problems",
      "Password and Code Formation",
      "Seating Arrangement Applications",
      
      // Exam Specific
      "Service Sector: Basic selection problems",
      "SSC CGL: Word arrangement, number formation",
      "CAT: Advanced P&C with multiple conditions"
    ]
  },
  {
    id: "time_speed_distance_work",
    title: "Time Speed Distance & Work",
    topics: [
      // Time Speed Distance Basics
      "Basic Relationship: Speed = Distance/Time",
      "Average Speed Concepts",
      "Relative Speed: Same and Opposite directions",
      
      // Advanced TSD
      "Boats and Streams: Upstream, Downstream",
      "Trains: Crossing objects, platforms",
      "Circular Motion and Races",
      "Escalator Problems",
      
      // Time and Work
      "Work and Time Basic Concepts",
      "Work Efficiency and Comparison",
      "Work Equivalence Principle",
      "Multiple Workers Problems",
      
      // Pipes and Cisterns
      "Inlet and Outlet Pipes",
      "Net Work Rate Calculations",
      "Time to Fill/Empty Tanks",
      
      // Advanced Applications
      "Wages Distribution based on Work",
      "Alternate Day Work Problems",
      "Work with Efficiency Changes",
      "Collaborative Work Problems",
      
      // Exam Focus
      "Service Sector: Project timeline estimation",
      "SSC CGL: Basic TSD, Work problems",
      "CAT: Advanced relative speed, complex work problems"
    ]
  },
  {
    id: "profit_loss_mixtures",
    title: "Profit Loss & Mixtures",
    topics: [
      // Profit Loss Basics
      "Cost Price, Selling Price, Marked Price",
      "Profit/Loss Percentage Calculations",
      "Successive Profit/Loss",
      "Discount and Markup",
      
      // Advanced Profit Loss
      "False Weight Problems",
      "Article sold at same price problems",
      "Profit/Loss with faulty measures",
      "Partnership Profit Sharing",
      
      // Mixtures & Alligation
      "Mixture Basics and Concentration",
      "Rule of Alligation",
      "Replacement in Mixtures",
      "Multiple Mixture Problems",
      
      // Advanced Applications
      "Income and Expenditure Problems",
      "Budget Allocation Problems",
      "Price Variation Problems",
      "Business Scenario Problems",
      
      // Exam Specific
      "Service Sector: Business calculations, Pricing",
      "SSC CGL: Basic profit loss, Discount problems",
      "CAT: Advanced mixture, Partnership problems"
    ]
  },
  {
    id: "algebra",
    title: "Algebra - Quantitative Aptitude",
    topics: [
      "Linear Equations in one and two variables",
      "Quadratic Equations and Factorization",
      "Algebraic Identities and Formulas",
      "Sequence and Series: AP, GP, HP",
      "Inequalities and Modulus Functions",
      "Functions and Graphs Basics",
      "Logarithms and their Properties",
      "Set Theory and Venn Diagrams",
      "Maxima and Minima Problems",
      "Progressions and Series Summation"
    ]
  },
  {
    id: "geometry",
    title: "Geometry & Mensuration",
    topics: [
      "Lines, Angles, and Triangles",
      "Circle Theorems and Properties",
      "Quadrilaterals and Polygons",
      "Coordinate Geometry Basics",
      "Area and Perimeter Calculations",
      "Volume and Surface Area",
      "Similarity and Congruence",
      "Trigonometry Basics",
      "Height and Distance Problems",
      "3D Geometry Concepts"
    ]
  },
  {
    id: "data_interpretation",
    title: "Data Interpretation",
    topics: [
      "Table Data Interpretation",
      "Bar Graphs and Histograms",
      "Pie Charts and Doughnut Charts",
      "Line Graphs and Time Series",
      "Caselet based DI",
      "Mixed DI Problems",
      "Data Sufficiency Questions",
      "Logical DI Problems",
      "Comparison and Analysis",
      "Percentage and Ratio in DI"
    ]
  },
  {
    id: "modern_math",
    title: "Modern Mathematics",
    topics: [
      "Set Theory and Venn Diagrams",
      "Functions and Graphs",
      "Sequence and Series",
      "Logarithms and Properties",
      "Binary Numbers and Operations",
      "Clocks and Calendars",
      "Cryptarithmetic Problems",
      "Blood Relations in Quant",
      "Direction Sense in Quant Context",
      "Logical Sequencing in Numbers"
    ]
  }
];

export default AptitudeData;