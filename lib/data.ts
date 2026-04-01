export const personalInfo = {
  name: "Sai Saran Ravi",
  roles: ["Data Analyst", "Product Analyst", "Product Data Analyst", "Business Analyst", "BI Analyst"],
  email: "saisaranravi9@gmail.com",
  phone: "413-472-0003",
  linkedin: "https://linkedin.com/in/sai-saran-ravi-138a04248",
  github: "https://github.com/saisaranravi5",
  location: "United States",
  bio: [
    "I got into analytics because I was always more interested in the why than the what.",
    "Numbers tell you something happened. The interesting question is why it happened and what someone should do about it. That is the part I cannot stop thinking about.",
    "I spent two years at Cognizant working inside enterprise data for Macy's Customer Loyalty program. SQL queries, Oracle tables, loyalty metrics, ETL validation. But what kept me engaged was always the behavior underneath the numbers. Why do customers disengage? What does a drop in a metric actually signal about someone's experience?",
    "That question followed me into my own projects.",
    "In a feature adoption analysis I ran, 72% of users who saw a feature never clicked it. But the ones who did retained at 2 to 3 times higher rates through Day 30. The number was interesting. But what I kept thinking about was what did those 72% see that made them scroll past? That kind of question is what pulls me toward product thinking.",
    "In a financial screening project I built 25+ modular SQL queries to evaluate US public companies on profitability, valuation, and growth signals. In an insurance prediction model I made a deliberate choice to optimize for recall over accuracy because missing a high risk customer is the expensive mistake in that domain. Every project taught me that the analytical decision and the business decision are the same decision.",
    "I completed my MS in Business Analytics at University of Massachusetts Amherst with a 3.7 GPA, where I deepened my skills in SQL, Power BI, Python, and statistical analysis. I am now looking for roles in Data Analytics, Product Analytics, Business Intelligence, or Growth where I can bring that same thinking to a team full time.",
    "If you care about why users do what they do, not just what they do, I would like to talk.",
  ],
};

export const education = [
  {
    degree: "M.S. in Business Analytics",
    school: "University of Massachusetts Amherst",
    department: "Isenberg School of Management",
    location: "Amherst, MA",
    gpa: "3.7 / 4.0",
    period: "Feb 2024 – May 2025",
  },
  {
    degree: "B.E. in Computer Science",
    school: "Sathyabama Institute of Science and Technology",
    department: "",
    location: "Chennai, India",
    gpa: "",
    period: "Aug 2018 – Jul 2022",
  },
];

export const experience = [
  {
    role: "Data Analyst Volunteer",
    company: "Bright Mind Enrichment",
    location: "Remote, United States",
    period: "Aug 2025 - Present",
    type: "Volunteer",
    bullets: [
      "Took raw volunteer participation and survey data that was sitting in messy Excel sheets and turned it into something the team could actually use, cleaning inconsistencies, standardizing formats, and removing duplicate records across reporting cycles.",
      "Built Excel dashboards using Pivot Tables to track attendance trends and surface recurring feedback patterns, giving a small nonprofit team their first real visibility into where volunteer engagement was strong and where it was quietly dropping off.",
      "Identified a consistent participation drop-off pattern after the first few sessions of each program cycle, a finding the team hadn't spotted before, and flagged it alongside survey themes pointing to scheduling and communication gaps.",
    ],
    detail: [
      "After completing my Master's in Business Analytics, I wanted to stay hands-on with real data while searching for the right full-time role. I joined Bright Mind Enrichment, a nonprofit focused on community wellness and youth enrichment programs across the US, as a volunteer Data Analyst.",
      "The organization was managing everything in spreadsheets but the data was inconsistent and hard to draw reliable conclusions from. My first task was bringing structure to that. I cleaned and standardized participation records for 300+ volunteers across multiple program cycles, resolving formatting inconsistencies, missing entries, and duplicate records across Google Sheets and Excel. Once the data was clean it fed directly into reporting for board directors and sponsors who needed visibility into volunteer acquisition, program reach, and how resources were being allocated.",
      "The more interesting work came from the engagement dashboards I built to track volunteer intake and program performance over time. What the data revealed was a consistent pattern of early-stage drop-off. New volunteers were disengaging in the first few weeks at a higher rate than expected. After investigating, I traced the root cause to onboarding gaps. New volunteers had a lot of unanswered questions and were not getting the information they needed upfront, which led to disengagement before they could become active contributors.",
      "I recommended restructuring the orientation workflow so all key information including programs, expectations, and how to get involved was covered on day one rather than trickling in over email. I also put together a presentation covering what BME does, who they serve, and how volunteers fit into the mission, giving new joiners a clear and motivating picture from the start.",
      "For a small team without dedicated analytics support, having clean organized data and a clear picture of engagement trends made a real difference in how they planned and ran their programs.",
    ],
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "Jul 2022 - Dec 2023",
    type: "Full-time",
    team: "Customer Loyalty Program",
    bullets: [
      "Supported the analytics team behind a customer loyalty program, handling 10 to 15 SQL-based data requests per week, extracting transaction and customer data from ETL-populated Oracle tables and validating it before it fed into performance reports.",
      "Made data quality a first-class concern. Every dataset I touched got checked for nulls, duplicate records, and date inconsistencies before it moved downstream. Working at multi-million-row scale meant a small logic error could silently distort an entire report.",
      "When metrics looked off between reports, I traced the problem back to its source, reviewing join logic, filter conditions, and aggregation structure until the discrepancy had a root cause, not just a workaround.",
      "Tracked reward redemption behavior and customer engagement KPIs on a recurring basis, giving the team a consistent, reliable read on how loyalty program activity was trending week over week.",
    ],
    detail: [
      "I supported the analytics team behind Macy's Customer Loyalty program at Cognizant, one of the largest retail loyalty programs in the United States. My role sat at the downstream end of the data pipeline. Once ETL processes loaded transaction and customer data into Oracle tables nightly, I was responsible for making sure that data was clean, accurate, and ready before it reached the senior analysts who depended on it for loyalty campaign and retention decisions.",
      "A significant part of my week was handling 10 to 15 ad-hoc SQL requests. Questions like how many customers redeemed rewards last week, which loyalty tiers were most active, or how a recent campaign had affected transaction volume. I would write the queries, validate the outputs, and hand back data the team could use immediately without second-guessing the numbers.",
      "Beyond the day-to-day requests, I developed a habit of proactive validation. I built a simple rolling average check to compare each day's transaction count against the previous 7 days, which helped me catch partial ETL loads before incomplete data made it into any report. On a few occasions this check saved the team from presenting numbers that would have looked like a real business drop but were actually just a pipeline failure.",
      "When metrics looked off between reports, I would trace the discrepancy back through the SQL, reviewing join logic, filter conditions, and aggregation structure until I found the root cause. Documenting those fixes meant the same issue never quietly wasted the same amount of time twice.",
      "This role shaped how I think about data fundamentally. Clean data is not just a technical requirement. It is the foundation every business decision is built on.",
    ],
  },
  {
    role: "Student Intern",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "Jan 2022 - Jun 2022",
    type: "Internship",
    bullets: [
      "Wrote SQL queries against customer and transaction datasets to answer real business questions, things like purchase frequency, average order value, and transaction counts across customer segments.",
      "Built summary tables consolidating key findings and presented trend analysis and metric drivers to senior stakeholders during internship evaluations, an early lesson in translating data into something a non-technical audience could act on.",
    ],
    detail: [
      "My internship at Cognizant was structured around learning by building. After completing training in Java and microservices architecture, covering how to design, connect, and test REST APIs across services, our cohort was given a capstone project to deliver at the end of the program.",
      "Our team built a Claims Management System to simulate a real-world insurance claims workflow end to end. I was responsible for the backend, developing REST APIs using Spring Boot to handle claim submissions and data retrieval, connecting an H2 database to store and persist claims records, and integrating everything with a React-based frontend that made the workflow feel like a real application.",
      "Throughout the project I used Postman to test every API endpoint, validating that data was moving correctly from the frontend through the API layer to the database and back. At the end of the program we presented the working system to subject matter experts, walking them through the full architecture and doing a live demonstration of the workflow.",
      "It was my first real experience seeing how data moves through an enterprise system from end to end. From a user action on a frontend all the way down to a database record. That understanding of how data is generated, structured, and stored at the application layer directly informed how I approached data work later in my career.",
    ],
  },
];

export const skills = [
  { category: "Query & Code", icon: "Code2", items: ["SQL", "Python", "Window Functions", "CTEs", "JOINs"] },
  { category: "Visualization & BI", icon: "BarChart3", items: ["Power BI", "DAX", "Tableau", "Excel", "Power Query"] },
  { category: "Databases & Cloud", icon: "Database", items: ["Snowflake", "MySQL", "PostgreSQL", "Oracle", "Alteryx"] },
  { category: "Analytics Methods", icon: "TrendingUp", items: ["KPI Development", "EDA", "Statistical Analysis", "Data Cleaning", "Data Modeling"] },
];

export const allTools = [
  "SQL", "Python", "Power BI", "Tableau", "Excel", "Snowflake", "MySQL",
  "PostgreSQL", "Oracle", "Alteryx", "Mixpanel", "Pandas", "scikit-learn",
  "Matplotlib", "DAX", "Power Query", "Seaborn", "Alpha Vantage API",
];

// ── Update `link` values with your personal certificate URLs ──
export const certifications = [
  {
    name: "Data Analyst Associate",
    issuer: "DataCamp",
    icon: "🎓",
    link: "https://www.datacamp.com/certificate/DA0019910516891",
  },
  {
    name: "SQL Associate",
    issuer: "DataCamp",
    icon: "🗃️",
    link: "https://www.datacamp.com/certificate/SQA0012345678901",
  },
  {
    name: "Alteryx Designer Core",
    issuer: "Alteryx",
    icon: "⚙️",
    link: "https://www.credly.com/org/alteryx/badge/alteryx-designer-core-certification",
  },
  {
    name: "PwC US Audit Job Simulation",
    issuer: "Forage",
    icon: "📊",
    link: "https://www.theforage.com/simulations/pwc-ch/us-business-audit-pcqe",
  },
  {
    name: "Financial Analyst Job Simulation",
    issuer: "NY Jobs CEO Council · Forage",
    icon: "💹",
    link: "https://www.theforage.com/simulations/ny-jobs-ceo-council/financial-analyst-pnwq",
  },
  {
    name: "Learning Excel: Data Analysis",
    issuer: "LinkedIn Learning",
    icon: "📈",
    link: "https://www.linkedin.com/learning/certificates/",
  },
];

export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  github: string;
  impact: { value: string; label: string }[];
  overview: string;
  approach: string[];
  findings: string[];
};

export const projects: Project[] = [
  {
    slug: "feature-adoption-retention",
    number: "01",
    title: "Feature Adoption & Retention Analysis",
    tagline: "Do users who engage with features actually stick around?",
    description:
      "Designed a hypothesis-driven tracking framework mapping four event-level signals to product questions around discovery, friction, and stickiness — then measured whether feature engagement predicts long-term retention.",
    category: "Product Analytics",
    tags: ["SQL", "Snowflake", "Mixpanel", "Excel"],
    github: "https://github.com/saisaranravi5",
    impact: [
      { value: "28%", label: "view-to-click rate — the key friction point" },
      { value: "2–3×", label: "higher Day 30 retention for feature-engaged users" },
      { value: "38%", label: "target click rate recommended via UX changes" },
    ],
    overview:
      "Most product teams track feature usage. Few trace the full funnel from awareness to completion. This project built that framework — mapping four behavioral signals and comparing retention between engaged and non-engaged user cohorts.",
    approach: [
      "Defined 4 event-level signals (viewed → clicked → used → completed) to capture the full adoption funnel",
      "Pulled and cleaned event data from Mixpanel using SQL queries in Snowflake",
      "Compared Day 7, Day 14, and Day 30 retention rates between feature-engaged and non-engaged cohorts",
      "Identified the view → click gap (28%) as the critical drop-off and quantified its business impact",
      "Tied each recommendation directly to a specific signal in the funnel",
    ],
    findings: [
      "Only 28% of users who viewed a feature clicked within 7 days — features were visible but not compelling enough to act on",
      "Feature-engaged users retained at 2–3× higher rates through Day 30, confirming engagement as a strong activation signal",
      "Recommended treating first feature interaction as an onboarding milestone with early-session nudges to accelerate it",
      "A 28% → 38% view-to-click improvement would materially shift retention cohort composition",
    ],
  },
  {
    slug: "financial-data-sql",
    number: "02",
    title: "Financial Data Analysis using Advanced SQL",
    tagline: "25+ queries. 5 modules. One screening engine that actually scales.",
    description:
      "Replaced slow, inconsistent Excel-based financial screening with a modular MySQL engine — 25+ reusable queries across five analytical modules to evaluate 170 U.S. public companies on profitability, growth, valuation, ownership, and sector benchmarks.",
    category: "Financial Analysis",
    tags: ["MySQL", "Power Query", "Excel"],
    github: "https://github.com/saisaranravi5/Financial-Data-Analysis-using-Advanced-SQL",
    impact: [
      { value: "25+", label: "reusable MySQL queries across 5 modules" },
      { value: "170", label: "companies with validated financial records" },
      { value: "18–25%", label: "reduction in manual benchmarking effort" },
    ],
    overview:
      "Financial screening in Excel breaks at scale — slow to update, hard to audit, easy to corrupt. This project replaced that workflow with a structured SQL engine that runs consistently across a 200-company dataset.",
    approach: [
      "Designed 5 analytical modules: profitability, growth, valuation, ownership, and sector benchmarking",
      "Wrote 25+ MySQL queries using CTEs, CASE statements, and window functions for reusability",
      "Rejected null-filling with zeros or averages — chose exclusion over imputation to prevent misleading metrics",
      "Retained 170 of 200 companies with complete records across 15+ critical fields",
      "Built a composite valuation scoring framework using P/B, PEG, and forward P/E ratios",
    ],
    findings: [
      "Null-filling with averages creates misleading financial metrics — exclusion over imputation was the right call",
      "Window functions enabled consistent relative ranking across sectors without repeated query logic",
      "The scoring framework cut manual benchmarking effort by 18–25% vs. spreadsheet-based analysis",
      "Modular design makes the system easy to extend for new financial periods or metrics",
    ],
  },
  {
    slug: "aapl-msft-performance",
    number: "03",
    title: "Apple & Microsoft — Performance Analysis",
    tagline: "15 years of data. One efficiency gap that changes the whole story.",
    description:
      "Compared Apple and Microsoft across 15 years of income statement data using a 4-page Power BI narrative. Overlaid Python linear regression forecasts against Power BI's built-in model to show how methodology shifts 2025–2028 projections.",
    category: "BI & Visualization",
    tags: ["Power BI", "Python", "DAX", "scikit-learn", "Alpha Vantage API"],
    github: "https://github.com/saisaranravi5/AAPL-MSFT-Performance_Analysis",
    impact: [
      { value: "$0.98", label: "Microsoft's operating profit per $1 of OpEx" },
      { value: "$0.46", label: "Apple's operating profit per $1 of OpEx" },
      { value: "15 yrs", label: "of income statement data modeled" },
    ],
    overview:
      "Apple dominates on revenue. Microsoft wins on operating leverage. This project built a structured Power BI narrative to explain why — then stress-tested the forecasts by comparing two different modeling approaches.",
    approach: [
      "Pulled 15 years of income statement data via the Alpha Vantage API and modeled using a DAX star schema",
      "Built a 4-page Power BI narrative: What (scale), How (operations), Why (efficiency), What's Next (forecasts)",
      "Calculated operating profit per OpEx dollar as the core efficiency metric",
      "Built a Python linear regression model and compared 2025–2028 projections against Power BI's built-in forecast",
    ],
    findings: [
      "Microsoft generates $0.98 per $1 of OpEx vs. Apple's $0.46 — the efficiency gap is structural, not cyclical",
      "Microsoft's software model carries ~30% cost-of-revenue vs. Apple's hardware-heavy ~54%",
      "Power BI's built-in forecast is more optimistic than linear regression — they diverge meaningfully by 2027–2028",
      "Forecasting methodology is a hidden assumption analysts rarely question — surfacing it changes how projections get used",
    ],
  },
  {
    slug: "insurance-claim-prediction",
    number: "04",
    title: "Insurance Claim Prediction",
    tagline: "When 83% accuracy still means you're missing the people who matter most.",
    description:
      "Built a classification pipeline on 10,000 customer records to predict insurance claims. The core challenge wasn't accuracy — it was recall. Missing a high-risk customer costs the business far more than flagging a low-risk one.",
    category: "Machine Learning",
    tags: ["Python", "Pandas", "scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/saisaranravi5/Insurance_claim_prediction",
    impact: [
      { value: "85%", label: "final accuracy with Bagging ensemble" },
      { value: "71%", label: "recall on high-risk class — the metric that matters" },
      { value: "10K", label: "customer records across 18 features" },
    ],
    overview:
      "Insurance risk assessment has a specific failure mode: missing a high-risk customer (false negative) is far more costly than flagging a low-risk one. That asymmetry drove every modeling decision here.",
    approach: [
      "Trained and evaluated Logistic Regression, Decision Trees, Random Forest, and a Bagging ensemble",
      "Used 10,000 records with 18 features: credit score, driving history, vehicle data, accident history",
      "Evaluated on recall for the high-risk class — because false negatives cost the business",
      "Selected Logistic Regression for interpretability and balanced recall, then boosted with Bagging",
      "Translated outputs into three specific business recommendations with operational context",
    ],
    findings: [
      "Random Forest hit 83% accuracy but only 63% recall on high-risk customers — too many were slipping through",
      "Logistic Regression + Bagging: 85% accuracy, 71% recall — a better trade-off for this business problem",
      "Recommended dynamic risk-based premium pricing, a fraud triage system, and a telematics partnership strategy",
      "Interpretability matters in insurance — being able to explain a pricing decision is both regulatory and business-critical",
    ],
  },
  {
    slug: "awesome-chocolate-powerbi",
    number: "05",
    title: "Chocolate Sales Performance Dashboard",
    tagline: "Which products, regions, and reps are driving the business — and which aren't?",
    description:
      "Interactive Power BI dashboard analyzing sales performance for a chocolate company — tracking monthly revenue trends, product profitability, regional breakdowns, and rep-level performance using custom DAX measures.",
    category: "BI & Visualization",
    tags: ["Power BI", "DAX", "Excel"],
    github: "https://github.com/saisaranravi5/Awesome_Chocolate_PowerBI",
    impact: [
      { value: "Multi-dim", label: "analysis across products, regions, and reps" },
      { value: "% Profit", label: "& LBS% as custom DAX segmentation measures" },
      { value: "Interactive", label: "filterable across all dimensions in real time" },
    ],
    overview:
      "A business question that sounds simple — how are sales doing? — usually hides several harder ones underneath. This dashboard was built to answer all of them at once.",
    approach: [
      "Cleaned and structured raw sales data in Excel before loading into Power BI",
      "Built a star schema data model to support cross-dimensional analysis",
      "Created custom DAX measures — % Profit and LBS % — for deeper product-level segmentation",
      "Designed interactive report pages for trends, product breakdowns, regional maps, and rep performance",
    ],
    findings: [
      "Monthly profit trends revealed seasonal peaks invisible in annual summaries",
      "Product-level % Profit metrics surfaced high-revenue but low-margin SKUs",
      "Regional analysis exposed performance gaps hidden in national aggregates",
      "Top rep analysis showed 20% of reps driving disproportionate revenue — a classic Pareto pattern",
    ],
  },
  {
    slug: "huskie-motor-profitability",
    number: "06",
    title: "Huskie Motor Corporation — Profitability Analysis",
    tagline: "Regional sales, contribution margins, and an inventory risk hiding in plain sight.",
    description:
      "Comprehensive financial and operational analysis of Huskie Motor Corporation covering regional sales, product contribution margins, and inventory efficiency to support executive decision-making using Excel and Tableau.",
    category: "Financial Analysis",
    tags: ["Excel", "Tableau", "PowerPoint"],
    github: "https://github.com/saisaranravi5/Profitability-Performance-Analysis-for-Huskie-Motor-Corporation",
    impact: [
      { value: "24M+", label: "units analyzed across all markets" },
      { value: "147 days", label: "inventory duration flagged for the Island model" },
      { value: "~4M", label: "contribution margin for the Advantage model" },
    ],
    overview:
      "Executive decisions need structured data — not summaries, but the right breakdown of what's working, what isn't, and where the risk is hiding.",
    approach: [
      "Analyzed regional sales data to identify dominant markets and underperforming segments",
      "Evaluated contribution margins by product model to surface high- and low-performers",
      "Assessed operational efficiency via inventory duration and shipment volume by configuration",
      "Built Tableau visualizations for executive presentation and projected Q4 2017 sales trajectory",
    ],
    findings: [
      "USA dominates with 24M+ units; Apechete and Tatra brands lead by volume",
      "Advantage model has the strongest contribution margin (~4M); Jespie and Mortimer underperform",
      "Island model carries 147 days of inventory — a risk flag invisible in top-line reporting",
      "Sales forecast projects Q4 2017 decline with compressing contribution margins across product lines",
    ],
  },
  {
    slug: "tjx-gap-financial",
    number: "07",
    title: "TJX vs. GAP — Comparative Financial Analysis",
    tagline: "Three years of 10-K filings. Two retailers. One clear winner on fundamentals.",
    description:
      "Comparative financial analysis of TJX Companies vs. GAP Inc. using SEC 10-K filings from 2021–2023. Evaluated liquidity, solvency, profitability, and efficiency ratios using horizontal and vertical analysis in Excel.",
    category: "Financial Analysis",
    tags: ["Excel", "SEC 10-K Filings"],
    github: "https://github.com/saisaranravi5/TJX-GAP_Financial_Analysis",
    impact: [
      { value: "3 yrs", label: "of SEC 10-K data (2021–2023)" },
      { value: "15+", label: "financial ratios across 4 categories" },
      { value: "2", label: "major U.S. retailers benchmarked head-to-head" },
    ],
    overview:
      "Reading financial statements is a skill — knowing what to compare, how to normalize, and what ratios actually mean in context. This project applied that framework to two well-known retailers across three years of filings.",
    approach: [
      "Extracted data from TJX and GAP 10-K filings for fiscal years 2021–2023",
      "Calculated liquidity (Current Ratio), solvency (Debt-to-Equity), and profitability margins",
      "Ran horizontal (YoY change) and vertical (income statement structure) analysis for both companies",
      "Evaluated operational efficiency via asset turnover, ROA, ROE, and cash conversion cycle",
    ],
    findings: [
      "TJX consistently outperforms GAP on operating efficiency and profitability margins across all three years",
      "GAP's high debt-to-equity creates financial risk not visible from top-line revenue",
      "TJX recovered faster post-pandemic; GAP's margins remained compressed through the analysis period",
      "TJX's inventory management — visible in cash conversion cycle metrics — is a structural competitive advantage",
    ],
  },
];
