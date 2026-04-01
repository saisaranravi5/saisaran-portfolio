export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "img"; src: string; caption: string }
  | { type: "h4"; text: string }
  | { type: "bullets"; items: string[] };

export type RichSection = {
  label: string;
  blocks: ContentBlock[];
};

export type RichContent = {
  sections: RichSection[];
  extraButton?: { label: string; href: string };
};

export const projectContents: Record<string, RichContent> = {

  /* ─── PROJECT 1 ─── */
  "feature-adoption-retention": {
    sections: [
      {
        label: "HOOK",
        blocks: [
          { type: "h4", text: "Do users who engage with features actually stick around?" },
          { type: "p", text: "Most product teams track whether users use a feature. Few ask what happens to those users 30 days later, and fewer still trace the full path from first exposure to completed workflow. This project built that framework from scratch." },
        ],
      },
      {
        label: "BUSINESS PROBLEM",
        blocks: [
          { type: "p", text: `Feature investment is expensive. Engineering time, design cycles, and QA resources all go into shipping a feature. But if users see it and do not engage, or engage once and never return, that investment does not pay off. The real question is not "did users try it?" It is "does feature interaction actually change how long users stick around?"` },
        ],
      },
      {
        label: "APPROACH",
        blocks: [
          { type: "p", text: "Most analysts start with the data. I started with a measurement plan, defining what to track, why to track it, and what business question each event answers before pulling a single number." },
          { type: "p", text: "Four events were tracked across the funnel:" },
          {
            type: "bullets",
            items: [
              "feature_viewed: Is the feature being discovered?",
              "feature_clicked: Is it compelling enough to try?",
              "feature_used: Are users actually engaging?",
              "feature_completed: Are they getting full value?",
            ],
          },
          { type: "p", text: "Each KPI was tied directly to a business question rather than tracked for its own sake. Engagement baselines (DAU/WAU/MAU) were measured first to validate dataset consistency before running any funnel or retention analysis." },
          { type: "img", src: "/p1-dau-wau-chart.png", caption: "DAU/WAU engagement baseline used to validate dataset consistency" },
        ],
      },
      {
        label: "KEY FINDINGS",
        blocks: [
          { type: "h4", text: "Finding 1: The funnel breaks at the very first step" },
          { type: "img", src: "/p1-funnel-chart.png", caption: "30-day funnel showing drop-off from viewed to clicked" },
          { type: "p", text: "Of 202 users who viewed a feature, only 57 clicked. That is a 28% view-to-click rate. The drop happens before users even try the feature. The problem is not UX complexity inside the feature. It is that the feature is not communicating its value clearly enough from the outside." },
          { type: "h4", text: "Finding 2: Search converts best. Dark Mode barely converts." },
          { type: "img", src: "/p1-funnel-by-feature.png", caption: "Funnel breakdown by feature showing conversion rate differences" },
          { type: "p", text: "Breaking the funnel down by feature showed that Search had the highest view-to-click rate at 33.96% while Dark Mode sat at 24.49%. The problem is not uniform across features. Some have a discoverability problem, others have a value communication problem, and they need different fixes." },
          { type: "h4", text: "Finding 3: Feature engagement is a strong retention signal" },
          { type: "img", src: "/p1-retention-chart.png", caption: "Day 30 retention comparison between feature-engaged and non-engaged users" },
          { type: "p", text: "Feature-engaged users retained at around 15% through Day 30. Non-feature users sat at around 5%. That is a consistent 2 to 3x gap sustained across the entire 60-day window, not a one-time spike. Early feature interaction is meaningfully correlated with long-term product stickiness." },
          { type: "h4", text: "Finding 4: Recommendations had the highest repeat usage" },
          { type: "img", src: "/p1-engagement-frequency.png", caption: "Average engagement frequency by feature across the observation period" },
          { type: "p", text: "Average usage frequency across features hovered between 1.1 and 1.3 times per month. Recommendations led consistently at 1.2 to 1.3x, suggesting it is the stickiest feature in the product." },
        ],
      },
      {
        label: "RECOMMENDATIONS",
        blocks: [
          { type: "h4", text: "1. Fix the view to click gap first" },
          { type: "p", text: `Only 28% of users who see a feature interact with it. Replace generic labels with action-oriented prompts like "Try Search Now", add short in-context tooltips for first-time viewers, and highlight one primary action instead of multiple options. Target: Move view-to-click from 28% to 38% in a controlled A/B test.` },
          { type: "h4", text: "2. Treat first feature interaction as an activation milestone" },
          { type: "p", text: `Given the 2 to 3x retention gap, the onboarding goal should shift from "user signs up" to "user completes one feature interaction." Early-session nudges toward high-converting features like Search could meaningfully improve long-term retention. Target: Track the percentage of users who complete at least one feature interaction in their first 3 sessions.` },
          { type: "h4", text: "3. Investigate Dark Mode separately" },
          { type: "p", text: "Dark Mode had the lowest conversion rate at 24.49% and near-zero end-to-end completion. Worth a dedicated investigation before investing more engineering time in it." },
        ],
      },
      {
        label: "LIMITATIONS",
        blocks: [
          { type: "p", text: "This analysis is correlational, not causal. Users who engage with features may already be more motivated to begin with. An A/B test would be needed to confirm that feature engagement drives retention rather than simply correlating with it. The dataset used here is synthetic and built to simulate real product event data. The focus of this project is the analytical framework and the questions being asked, not the data source." },
        ],
      },
    ],
  },

  /* ─── PROJECT 2 ─── */
  "financial-data-sql": {
    sections: [
      {
        label: "HOOK",
        blocks: [
          { type: "h4", text: "Can SQL do what a financial analyst does in Excel, faster and without the manual errors?" },
          { type: "p", text: "This project started with a simple frustration. Screening hundreds of companies for investment health, valuation, and growth potential in Excel is slow, inconsistent, and breaks the moment the data changes. This is a locally run SQL screening engine built in MySQL to evaluate U.S. public companies across profitability, growth, valuation, ownership, and sector benchmarking." },
        ],
      },
      {
        label: "BUSINESS PROBLEM",
        blocks: [
          { type: "p", text: "Investors and analysts who need to screen U.S. public companies typically rely on Excel filters and manual lookups. That works for 10 companies. It does not work for 200. The goal was to build something modular and reusable, where you change one parameter and the entire screening updates without touching formulas manually." },
        ],
      },
      {
        label: "APPROACH",
        blocks: [
          { type: "p", text: "The project started with raw data on 226 U.S. listed companies. Before any analysis, the data went through a deliberate cleaning process in Power Query. A dataStatus column was created to flag each record as Complete or Missing based on 17 critical financial fields. Records flagged as Missing were excluded entirely, bringing the working dataset to 171 companies." },
          { type: "p", text: "The key decision here was not to replace missing values with zeros or averages. In finance, zero is not neutral. A missing totalRevenue replaced with zero falsely implies the company had no revenue. Removing those rows was the more honest choice. All monetary figures were scaled to millions during cleaning to prevent integer overflow in MySQL and improve readability across queries." },
          { type: "p", text: "The screening engine covers 5 analytical modules with 25 queries total." },

          { type: "h4", text: "MODULE 1: Profitability and Operational Efficiency" },
          { type: "p", text: "Can the company actually make money, and how efficiently? Queries classify companies into High, Moderate, and Low profitability tiers using profit margins, benchmark EBITDA margins across industries, rank the top 3 companies by return on equity within each industry using window functions, and identify triple margin champions where gross, operating, and EBITDA margins all exceed 25%. From the data: 56 of 171 companies qualified as High Profitability. 61 companies met the triple margin threshold above 25% across all three margin types." },
          { type: "img", src: "/p2-profitability-tiers.png", caption: "Profitability tier classification across 171 companies" },

          { type: "h4", text: "MODULE 2: Growth Analytics" },
          { type: "p", text: "Is the company growing, and is that growth fairly priced? Queries classify companies by PEG ratio into Undervalued Growth, Fairly Valued, and Overvalued buckets, identify the top revenue growth company per industry, and benchmark each company against its industry average revenue growth using a CTE to find outperformers. From the data: 32 of 171 companies had a PEG ratio below 1, meaning their growth was underpriced relative to earnings at the time of analysis." },
          { type: "img", src: "/p2-peg-classification.png", caption: "PEG ratio classification showing undervalued vs overvalued growth companies" },

          { type: "h4", text: "MODULE 3: Valuation Metrics" },
          { type: "p", text: "Is the market pricing this company fairly? A composite valuation score was built by averaging forward PE and price-to-book to create a single ranking metric. Notable findings: Pfizer had the lowest composite valuation score suggesting potential undervaluation. Tesla and Netflix sat at the expensive end. Verizon and GM both traded below their industry average forward PE." },
          { type: "img", src: "/p2-valuation-score.png", caption: "Composite valuation score ranking across companies and sectors" },

          { type: "h4", text: "MODULE 4: Ownership and Governance" },
          { type: "p", text: "Who actually controls the company? Queries rank companies by shares outstanding to assess dilution risk, calculate average insider holding percentage by industry, flag companies with low insider ownership and high public float as potentially vulnerable to outside pressure, and estimate the dollar value of insider holdings." },
          { type: "img", src: "/p2-insider-holdings.png", caption: "Insider holding value and control tier classification by industry" },

          { type: "h4", text: "MODULE 5: Sector-Wide Benchmarking" },
          { type: "p", text: "Which industries are structurally stronger? Queries rank industries by average revenue growth, identify the top operating margin company per sector, and compare each industry's forward PE to the overall market average with an overvalued or undervalued flag." },
          { type: "img", src: "/p2-sector-benchmarking.png", caption: "Sector-level benchmarking showing PE ratios vs market average" },
        ],
      },
      {
        label: "LIMITATIONS",
        blocks: [
          { type: "p", text: "This is a point-in-time snapshot. The dataset captures financial metrics at one moment and does not account for earnings revisions, macro conditions, or changes in business model. The valuation score in Module 3 is a simplified composite and should not be used as standalone investment advice. Some records were excluded due to missing data, which means smaller or newer companies may be underrepresented." },
        ],
      },
    ],
  },

  /* ─── PROJECT 3 ─── */
  "aapl-msft-performance": {
    sections: [
      {
        label: "HOOK",
        blocks: [
          { type: "h4", text: "Apple is bigger. Microsoft is more efficient. But why, and what does that mean for the next four years?" },
          { type: "p", text: "This project traces 15 years of financial data across revenue, margins, cost structure, and operational efficiency to understand how two companies of similar scale ended up with fundamentally different profit models, and where that gap is heading." },
        ],
      },
      {
        label: "BUSINESS PROBLEM",
        blocks: [
          { type: "p", text: "Apple and Microsoft are two of the most analyzed companies in the world, yet most comparisons stop at revenue and stock price. That misses the more interesting story. Apple generates more money in absolute terms but Microsoft generates nearly twice the profit per dollar it spends on operations. Understanding why that gap exists, and whether it will close, is a question that matters to investors, analysts, and anyone trying to understand what a sustainable business model actually looks like in tech." },
        ],
      },
      {
        label: "APPROACH",
        blocks: [
          { type: "p", text: "The project was structured as a 4-page narrative built in Power BI, each page answering a different layer of the business question." },
          {
            type: "bullets",
            items: [
              "Page 1: The What. A high-level executive snapshot of scale, growth, and efficiency.",
              "Page 2: The How. A deep dive into how their profit models actually differ.",
              "Page 3: The How Efficiently. A look at operating leverage and cost efficiency.",
              "Page 4: The What's Next. A forward-looking forecast comparing two different models.",
            ],
          },
          { type: "p", text: "Data was pulled using the Alpha Vantage API via a Python script in Google Colab. The 2010 to 2024 window was chosen deliberately as it marks Apple's post-iPhone 4 era and the beginning of Microsoft's cloud pivot, making it a fair starting point for comparison." },
          { type: "p", text: "A Many-to-One relationship was built between the Financials table and a Dim Date calendar table. 15 plus DAX measures were written covering profitability ratios, growth metrics, cost ratios, and a Cost Efficiency Ratio measuring how much operating profit each company generates per dollar of total operating expenditure." },
          { type: "img", src: "/p3-executive-summary.png", caption: "Page 1 executive summary showing scale, growth, and efficiency KPIs" },
        ],
      },
      {
        label: "KEY FINDINGS",
        blocks: [
          { type: "h4", text: "Finding 1: Apple is bigger but Microsoft is more efficient" },
          { type: "p", text: "Apple held approximately 61% of combined FY2024 revenue at around $378B versus Microsoft's $185B. But Microsoft has sustained an average operating margin of around 33% over the full period while Apple's, though strong, has sat lower." },
          { type: "img", src: "/p3-profitability-deepdive.png", caption: "Page 2 profitability deep dive showing cost structure and margin trends" },

          { type: "h4", text: "Finding 2: The margin gap comes down to cost of revenue" },
          { type: "p", text: "Microsoft's gross margin sits at around 70%. Apple's is around 46%. That 24-point gap is explained almost entirely by cost structure. Apple's cost of revenue is approximately 54% of total revenue because it manufactures physical hardware. Microsoft's cost of revenue is only around 30% because software and cloud services cost almost nothing to reproduce once built." },

          { type: "h4", text: "Finding 3: Microsoft earns nearly twice as much profit per dollar spent" },
          { type: "p", text: "In 2024, Microsoft generated approximately $0.98 in operating profit for every $1 spent on operations. Apple generated approximately $0.46. That ratio has been improving for Microsoft consistently since 2017. In the same year, Microsoft's operating income grew 23.6% while revenue grew only 15.7%. The business is becoming more profitable faster than it is growing." },
          { type: "img", src: "/p3-operational-efficiency.png", caption: "Page 3 operational efficiency showing cost efficiency ratio trend" },

          { type: "h4", text: "Finding 4: The forecasts tell different stories depending on the model" },
          { type: "p", text: "Power BI's built-in exponential smoothing projects Microsoft reaching approximately $362B in revenue by 2028. The Python linear regression model projects only around $255B. This difference reflects how the two models interpret trends differently. Linear regression weights the full 15-year history equally. Power BI's exponential smoothing weights recent years more heavily, capturing Microsoft's recent acceleration in cloud growth. Neither forecast is right or wrong. They answer different questions." },
          { type: "img", src: "/p3-forecasting.png", caption: "Page 4 forecast comparison between Power BI exponential smoothing and Python linear regression models" },
        ],
      },
      {
        label: "CONCLUSIONS",
        blocks: [
          { type: "p", text: "Apple wins on scale. Its hardware ecosystem, premium pricing, and brand generate enormous absolute revenue and profit numbers that Microsoft has not matched in total size." },
          { type: "p", text: "Microsoft wins on efficiency. Its software and cloud model gives it structural advantages in margins, cost control, and operating leverage that Apple's hardware-heavy model cannot replicate without a fundamental business model shift." },
          { type: "p", text: "The forecasts suggest that if Microsoft's efficiency momentum continues, the profit gap between the two companies could nearly close by 2028 even as Apple maintains its lead in revenue." },
        ],
      },
      {
        label: "LIMITATIONS",
        blocks: [
          { type: "p", text: "All forecasts are based on historical trends only. Actual outcomes will depend heavily on strategic execution in AI, new product categories, and macroeconomic conditions. The Python linear regression model is intentionally simple and serves as a baseline comparison point rather than a precise prediction. The analysis covers income statement data only and does not incorporate balance sheet or cash flow metrics." },
        ],
      },
    ],
  },

  /* ─── PROJECT 4 ─── */
  "insurance-claim-prediction": {
    sections: [
      {
        label: "HOOK",
        blocks: [
          { type: "h4", text: "83% accuracy sounds impressive. But what if the 17% you got wrong were exactly the customers who were about to file a claim?" },
          { type: "p", text: "This project is about understanding why the wrong accuracy metric can give an insurance company false confidence, and how choosing the right model for the right reason matters more than chasing the highest number." },
        ],
      },
      {
        label: "BUSINESS PROBLEM",
        blocks: [
          { type: "p", text: "Insurance companies lose money in two specific ways. They underprice high-risk customers because they did not identify the risk early enough. And they pay out fraudulent or unexpected claims that a better screening process might have flagged. Both problems trace back to the same root cause: not knowing which customers are actually likely to file a claim before the policy period begins." },
          { type: "p", text: "The goal was to build a classification model that predicts claim likelihood using information available at the time of policy issuance, giving insurers a way to act before the loss happens rather than after." },
        ],
      },
      {
        label: "APPROACH",
        blocks: [
          { type: "p", text: "The dataset contained 10,000 customer records with 18 features covering demographics, driving history, and vehicle details. Missing values in credit score and annual mileage were imputed using column means. Postal code and customer ID were removed as they showed no meaningful correlation with the target variable." },
          { type: "p", text: "Three features stood out as the strongest predictors: credit score showed a clear negative relationship with claims, annual mileage correlated positively with claim probability particularly in the 10,000 to 15,000 mile range, and sports cars showed a notably higher claim rate than other vehicle types." },
          { type: "p", text: "Three classification models were trained and compared: Logistic Regression, Decision Tree, and Random Forest, evaluated on accuracy, precision, recall, and F1 score. A Bagging ensemble with cross-validation was used as a final step." },

          { type: "h4", text: "THE MODEL SELECTION DECISION" },
          { type: "p", text: "Random Forest achieved 83% overall accuracy. On paper that looks like the best result. But when you look at recall on the Claimed class specifically — the class that actually matters for an insurer — it only reached 63%. That means 37 out of every 100 high-risk customers were being predicted as safe. For an insurance company, those are exactly the customers who will cost the most." },
          { type: "p", text: "Logistic Regression achieved lower overall accuracy at 71% but reached 71% recall on the Claimed class and produced an F1 score of 74% for that class. More importantly, its model coefficients are interpretable. An underwriter can look at the output and understand exactly which features drove the risk score for a specific customer. That transparency matters in a regulated industry where decisions need to be explainable." },
          { type: "p", text: "The Bagging ensemble pushed final accuracy to 85% while maintaining 71% recall on the Claimed class." },
          { type: "p", text: "The lesson: accuracy is the wrong metric when classes are imbalanced and the cost of a false negative is much higher than the cost of a false positive. In insurance, missing a high-risk customer is far more expensive than flagging a low-risk one for review." },
        ],
      },
      {
        label: "RECOMMENDATIONS",
        blocks: [
          { type: "h4", text: "1. Risk-based pricing" },
          { type: "p", text: "Use model output probabilities to segment customers into risk tiers at the point of policy issuance. High-risk customers should be priced accordingly. Low-risk customers can be offered competitive discounts to improve retention." },
          { type: "h4", text: "2. Fraud triage system" },
          { type: "p", text: "The model can serve as a first-pass filter on incoming claims. Claims from customers the model flagged as high-risk at policy issuance should be automatically routed for closer review before payout. This prioritizes investigator attention where it is most needed." },
          { type: "h4", text: "3. Safe driving incentive programs" },
          { type: "p", text: "Since driving experience and past violations are strong predictors, reward programs that incentivize safe driving behavior address the risk at the source rather than just pricing around it." },
        ],
      },
      {
        label: "LIMITATIONS",
        blocks: [
          { type: "p", text: "The dataset is synthetic and does not reflect real-world class distributions, which are typically far more imbalanced toward not claimed. The model was not tested on external data, so generalization to a live insurance portfolio is unknown. The analysis is correlational and does not establish causal relationships between features and claim outcomes. Future work could include SMOTE or other class balancing techniques and exploration of gradient boosting models like XGBoost." },
        ],
      },
    ],
    extraButton: { label: "View Project Slides", href: "https://github.com/saisaranravi5" },
  },

  /* ─── PROJECT 5 ─── */
  "awesome-chocolate-powerbi": {
    sections: [
      {
        label: "HOOK",
        blocks: [
          { type: "h4", text: "$34 million in sales. 6,000 shipments. One dashboard to see it all." },
        ],
      },
      {
        label: "BUSINESS PROBLEM",
        blocks: [
          { type: "p", text: "Sales teams managing large product portfolios across multiple regions and salespeople need a single source of truth for performance. Without it, decisions get made on gut feel or incomplete data. This dashboard gives the Awesome Chocolates business a unified view of what is selling, where, by whom, and at what cost." },
        ],
      },
      {
        label: "APPROACH",
        blocks: [
          { type: "p", text: "Built as an end-to-end Power BI project covering data modeling, DAX measure development, and interactive dashboard design. DAX measures were written to calculate percentage profit and shipment weight percentages, which power the key performance indicators across the dashboard. The dashboard answers four practical business questions: how are monthly sales and profits trending, which products and regions are most profitable, who are the top performing salespeople, and how efficient is the shipment operation." },
          { type: "h4", text: "WHAT THE DASHBOARD SHOWS" },
          {
            type: "bullets",
            items: [
              "Monthly sales and profit trends with the ability to filter by time period.",
              "Product-level profitability breakdown showing which lines drive margins.",
              "Regional performance comparison across all markets.",
              "Salesperson leaderboard tracking individual contribution.",
              "Shipment efficiency metrics showing cost and weight distribution.",
            ],
          },
          { type: "img", src: "/p5-powerbi-dashboard.png", caption: "Interactive Power BI dashboard showing sales performance, profit trends, shipment analysis and salesperson leaderboard" },
        ],
      },
      {
        label: "LIMITATIONS",
        blocks: [
          { type: "p", text: "This project was built on a clean fictional dataset designed for demonstration purposes. Real-world deployment would require integration with live ERP or CRM data sources and additional data validation steps." },
        ],
      },
    ],
  },

  /* ─── PROJECT 6 ─── */
  "huskie-motor-profitability": {
    sections: [
      {
        label: "HOOK",
        blocks: [
          { type: "h4", text: "Two models losing money. One sitting on the lot for 147 days. A Q4 cliff no one had mapped yet." },
        ],
      },
      {
        label: "BUSINESS PROBLEM",
        blocks: [
          { type: "p", text: "Automobile manufacturers operating across multiple regions and brand lines need visibility into which parts of the business are generating value and which are quietly eroding it. Without structured analysis, underperforming models and regional inefficiencies stay hidden inside aggregated revenue numbers." },
        ],
      },
      {
        label: "APPROACH",
        blocks: [
          { type: "p", text: "The analysis covered four areas structured as an executive-ready Tableau presentation. Global and brand level performance to understand which regions and brands were driving revenue. Financial analytics to evaluate contribution margins and cost variability across models. Operational efficiency to assess inventory turnover and time on lot. And a forward-looking forecast of sales volume and contribution margins for the next four quarters." },
        ],
      },
      {
        label: "KEY FINDINGS",
        blocks: [
          {
            type: "bullets",
            items: [
              "The USA was the top performing region with 24 million plus units.",
              "The Advantage model had the highest contribution margin across the portfolio.",
              "The Jespie and Mortimer models were operating at negative or very low margins, representing a clear cost or pricing problem.",
              "Sales were forecast to stabilize before a sharp drop in Q4, which warrants early attention from the planning team.",
              "The Island model had the longest time on lot at around 147 days, suggesting a pricing or demand issue worth investigating before the next production cycle.",
            ],
          },
          { type: "img", src: "/p6-tableau-dashboard.jpg", caption: "Model profitability analysis showing contribution margins across all vehicle models" },
        ],
      },
      {
        label: "LIMITATIONS",
        blocks: [
          { type: "p", text: "This analysis is based on a fictional dataset built for a capstone case study. The findings are directionally illustrative rather than based on real market data." },
        ],
      },
    ],
  },

  /* ─── PROJECT 7 ─── */
  "tjx-gap-financial": {
    sections: [
      {
        label: "HOOK",
        blocks: [
          { type: "h4", text: "Three years of 10-K filings. Two retailers. One clear winner on the fundamentals." },
        ],
      },
      {
        label: "BUSINESS PROBLEM",
        blocks: [
          { type: "p", text: "Comparing two public companies on revenue alone misses the more important story of how efficiently they generate returns, manage assets, and sustain liquidity. This analysis goes deeper using real regulatory filings to build a structured financial comparison across the metrics that actually matter to analysts and investors." },
        ],
      },
      {
        label: "APPROACH",
        blocks: [
          { type: "p", text: "Data was sourced directly from SEC-filed 10-K annual reports for both TJX Companies and GAP Inc. The analysis covers three structured worksheets: raw financial data extracted from the filings including balance sheet, income statement, and cash flow statements. A three-year financial ratio analysis for GAP Inc. covering liquidity, solvency, profitability, and efficiency metrics. And a comparative ROE analysis between TJX and GAP across fiscal years 2021 to 2023, alongside return on assets, asset turnover, and cash conversion cycle calculations." },
          { type: "p", text: "The primary skill demonstrated here is the ability to read and extract information from real regulatory filings and translate them into structured financial models that support comparison and decision making." },
        ],
      },
      {
        label: "LIMITATIONS",
        blocks: [
          { type: "p", text: "This analysis was completed as part of a financial reporting course and covers income statement and balance sheet data only. It does not incorporate qualitative factors such as brand strength, supply chain strategy, or macroeconomic conditions that would typically inform a full investment thesis." },
        ],
      },
    ],
  },

};
