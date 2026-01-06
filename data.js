export const salesArchitectureData = {
  "meta": {
    "name": "Sales Architecture",
    "version": "4.0",
    "tagline": "Five Modular Blueprints to Build Your Sales Engine",
    "website": "StrategyandStack.com",
    "powered_by": ["LinkedIn Success Formula", "AuthGen", "Rockets Traffic", "Evil Genius"]
  },
  "hero": {
    "headline": "Build Your Sales Engine in 90 Days",
    "subheadline": "Five modular blueprints. 50 to 70 percent less time than DIY. You own everything we build.",
    "cta_primary": "Book a 30 Minute Scope Call",
    "cta_secondary": "See How It Works"
  },
  "value_proposition": {
    "main": "We install sales systems that generate leads while you close deals",
    "supporting": "A proven framework for generating leads and booking meetings without building a large sales team. Combines automation, AI, and battle tested processes to deliver results that would traditionally require 3x to 5x more staff hours.",
    "outcome": "We install the framework. You run it and close deals."
  },
  "guarantee": {
    "title": "What We Promise",
    "what_we_guarantee": [
      "The work gets done: emails sent, profiles optimized, ads launched, content published",
      "The systems are configured correctly and running",
      "You have full visibility into activity and metrics",
      "You own everything we build (accounts, content, data)"
    ],
    "what_depends_on_market": [
      "Response rates and conversion rates",
      "Meetings booked and deals closed",
      "Cost per lead and cost per acquisition"
    ]
  },
  "target_market": {
    "title": "Who This Is For",
    "criteria": [
      "US based service businesses: CPA firms, law firms, agencies, consultancies, SaaS",
      "Companies that are cash flow positive and have grown through referrals",
      "Teams with operational capacity to handle more clients but no outbound system",
      "Business owners who would rather hire experts than figure it out themselves",
      "Companies ready to move beyond word of mouth to predictable lead flow"
    ]
  },
  "blueprints": [
    {
      "id": "account-setup",
      "number": 1,
      "name": "Account Setup",
      "tagline": "The foundation for all outreach",
      "description": "Sets up the infrastructure you need before sending a single message: verified domains, warmed email accounts, optimized LinkedIn profiles, and a landing page that converts.",
      "timeline": "2 to 3 weeks from kickoff to fully warmed accounts",
      "deliverables": [
        "2 custom domains with SPF, DKIM, DMARC configured",
        "10 email accounts warmed to 95%+ deliverability",
        "2 LinkedIn profiles built to LSF specs",
        "1 conversion focused landing page",
        "1,000 enriched leads ready for outreach"
      ],
      "comparison": {
        "manual_hours": "80-100",
        "blueprint_hours": 32
      },
      "tasks": [
        {"task": "Domain Setup", "manual": "8 to 12 hours", "blueprint": "2 hours"},
        {"task": "Email Warmup", "manual": "20+ hours", "blueprint": "30 min setup"},
        {"task": "LinkedIn Optimization", "manual": "6 to 10 hours", "blueprint": "3 to 4 hours"},
        {"task": "Landing Page", "manual": "15 to 25 hours", "blueprint": "6 to 10 hours"}
      ]
    },
    {
      "id": "content",
      "number": 2,
      "name": "Content",
      "tagline": "Consistent content builds trust",
      "description": "Creates 13 weeks of content using our 40/30/30 framework: Educational (40%), Personal (30%), and Sales (30%).",
      "deliverables": [
        "26 posts across LinkedIn and IG",
        "13 weeks of content scheduled",
        "40/30/30 framework adherence",
        "LSF writing rules validation"
      ],
      "comparison": {
        "manual_hours": "40-60",
        "blueprint_hours": 10
      }
    },
    {
      "id": "ads",
      "number": 3,
      "name": "Ads",
      "tagline": "Paid advertising accelerates everything",
      "description": "Sets up and runs lead generation campaigns on Meta, Google, and LinkedIn with Awareness, Consideration, and Decision stages.",
      "deliverables": [
        "Multi-channel lead gen campaigns",
        "8 ad creatives based on LSF",
        "30 days of campaign management",
        "Weekly optimization and reporting"
      ],
      "comparison": {
        "manual_hours": "60-80",
        "blueprint_hours": 23
      }
    },
    {
      "id": "outbound",
      "number": 4,
      "name": "Outbound",
      "tagline": "Direct outreach that scales",
      "description": "Executes email and LinkedIn outreach to 1,000 qualified leads over 90 days. Approximately 4,000 total touches.",
      "deliverables": [
        "1,000 qualified leads contacted",
        "4,000 total touches (email + LI)",
        "3 message sequence LSF structure",
        "Response routing to inbox"
      ],
      "comparison": {
        "manual_hours": "170-230",
        "blueprint_hours": 26
      }
    },
    {
      "id": "process-automation",
      "number": 5,
      "name": "Process Automation",
      "tagline": "AI powered workflow automation",
      "description": "Maps processes, identifies opportunities, and builds custom workflows with Make, n8n, and Claude/GPT APIs.",
      "deliverables": [
        "Lead capture to CRM enrichment",
        "Client onboarding workflows",
        "AI powered email drafting",
        "Automated reporting dashboards"
      ],
      "comparison": {
        "manual_hours": "Ongoing",
        "blueprint_hours": "Automated"
      }
    }
  ],
  "packages": [
    {
      "id": "starter",
      "name": "Starter",
      "tagline": "Account Setup + Outbound",
      "description": "For businesses ready to test outbound with proper infrastructure",
      "includes": ["Account Setup", "Outbound (90 days)"]
    },
    {
      "id": "growth",
      "name": "Growth",
      "tagline": "Account Setup + Content + Outbound",
      "description": "For businesses that want credibility backing their outreach",
      "includes": ["Account Setup", "Content (13 weeks)", "Outbound (90 days)"],
      "popular": true
    },
    {
      "id": "full-stack",
      "name": "Full Stack",
      "tagline": "All Four Sales Blueprints",
      "description": "For businesses going all in on demand generation",
      "includes": ["Account Setup", "Content (13 weeks)", "Ads (30 days)", "Outbound (90 days)"]
    },
    {
      "id": "scale",
      "name": "Scale",
      "tagline": "Full Stack + Process Automation",
      "description": "For established businesses ready to scale with systems",
      "includes": ["Everything in Full Stack", "Custom process automation", "Revenue share option available"]
    }
  ],
  "linkedin_success_formula": {
    "title": "The Operating System Behind Every Blueprint",
    "description": "A structured API processor with strict character limits and validation rules based on 9 months of tested data across multiple industries.",
    "key_components": {
      "headline": {
        "name": "Headline Logic",
        "formula": "I help [A] do [B], through [C]. If you want [D], then do [E] and get [F].",
        "spec": "220 Chars Max"
      },
      "about_me": {
        "name": "About Me Engine",
        "formula": "[Hook 300c] -> [Core Value] -> [Framework] -> [Social Proof] -> [Soft CTA]",
        "spec": "1650 Chars Max"
      },
      "outreach": {
        "name": "Outreach Protocol",
        "formula": "Day 0: Intro | Day 2: Insight | Day 4: Network Frame",
        "spec": "450 Chars Per Message"
      }
    },
    "validation": {
      "checks": [
        "Exact character count matching",
        "Hook strength validation",
        "Line break cadence verification",
        "Prohibited phrase detection",
        "Service Seed alignment check",
        "Protrusion-free truncation check"
      ]
    }
  },
  "faq": [
    {
      "question": "What makes your LinkedIn optimization different from other agencies?",
      "answer": "We use a validated formula with strict character limits. Most agencies write 'good' copy. We write engineered copy that passes 17 specific technical checks for truncation and mobile readability."
    },
    {
      "question": "Why is the outreach sequence only 4 days instead of longer?",
      "answer": "Longer sequences feel like harassment. Our 3-message structure moves from intro to insight to network frame. After 4 days, they either want to talk or they don't."
    },
    {
      "question": "How do you guarantee deliverability on cold emails?",
      "answer": "We guarantee technical configuration: verified domains, SPF/DKIM/DMARC, and accounts warmed to 95%+ deliverability scores."
    },
    {
      "question": "What happens after the initial run period?",
      "answer": "You own everything. There is no lock-in. You can run it yourself or hire us for maintenance."
    }
  ],
  "social_proof": {
    "stats": [
      {"metric": "Hours Saved / Blueprint", "value": "70", "suffix": ""},
      {"metric": "Efficiency Increase", "value": "300", "suffix": "%"},
      {"metric": "Deliverability Target", "value": "95", "suffix": "%+"},
      {"metric": "Validation Checks", "value": "17", "suffix": ""}
    ]
  },
  "cta_sections": {
    "primary": {
      "headline": "Ready to build your sales engine?",
      "subheadline": "Book a 30 minute call to discuss which blueprint fits your situation.",
      "button_text": "Book Your Scope Call",
      "secondary_text": "Implementation starts within 48 hours of agreement"
    },
    "secondary": {
      "headline": "Not sure where to start?",
      "subheadline": "Let's audit your current stack and identify the biggest leverage point.",
      "button_text": "Schedule a Discovery Call"
    }
  },
  "next_steps": [
    "Book a 30 minute call to discuss your architecture.",
    "Complete the Intake Form so we can hit the ground running.",
    "Receive a custom scope and implementation timeline.",
    "Kickoff: Implementation starts within 48 hours."
  ],
  "footer": {
    "tagline": "Strategy & Stack | Sales Architecture",
    "website": "StrategyandStack.com",
    "powered_by": "AuthGen + Rockets Traffic + Evil Genius"
  }
};
