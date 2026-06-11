export type ProgramCategory =
  | "People & Team Dynamics"
  | "Communication"
  | "Thinking & Performance"
  | "Leadership & Ownership"
  | "New Joinee & Onboarding"
  | "Sales & Customer Facing";

export type ProgramFormat =
  | "Power Session (3 Hours)"
  | "Half Day Intensive (5 Hours)"
  | "Full Day Workshop (8 Hours)"
  | "Multi-Session Program (Weekly/Monthly)";

export type CorporateProgram = {
  name: string;
  category: ProgramCategory;
  outcome: string;
  recommendedFormats: ProgramFormat[];
};

export const deliveryFormats: Array<{
  name: ProgramFormat;
  duration: string;
  focus: string;
}> = [
  {
    name: "Power Session (3 Hours)",
    duration: "3 Hours",
    focus: "One focused skill - high energy, immediate impact"
  },
  {
    name: "Half Day Intensive (5 Hours)",
    duration: "5 Hours",
    focus: "Deeper transformation for team dynamics or leadership"
  },
  {
    name: "Full Day Workshop (8 Hours)",
    duration: "8 Hours",
    focus: "Complete team experience covering multiple skills"
  },
  {
    name: "Multi-Session Program (Weekly/Monthly)",
    duration: "Weekly / Monthly",
    focus: "Long-term culture building and team development"
  }
];

export const corporatePrograms: CorporateProgram[] = [
  {
    name: "The Winning Unit - Building High-Performance Teams",
    category: "People & Team Dynamics",
    outcome: "Align team roles and improve collective execution velocity.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Full Day Workshop (8 Hours)"]
  },
  {
    name: "The Alliance - Creating a Collaboration Culture",
    category: "People & Team Dynamics",
    outcome: "Break silos and establish reliable cross-functional collaboration.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "The Peace Table - Workplace Harmony & Conflict Resolution",
    category: "People & Team Dynamics",
    outcome: "Resolve recurring team conflicts with practical communication tools.",
    recommendedFormats: ["Half Day Intensive (5 Hours)"]
  },
  {
    name: "The Trust Factor - Building Trust in Teams",
    category: "People & Team Dynamics",
    outcome: "Increase trust behaviors for better accountability and ownership.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "The Change Maker - Leading Change with Confidence",
    category: "People & Team Dynamics",
    outcome: "Equip teams to adapt quickly during transition and uncertainty.",
    recommendedFormats: ["Power Session (3 Hours)", "Multi-Session Program (Weekly/Monthly)"]
  },
  {
    name: "Speak to Lead - Power Communication",
    category: "Communication",
    outcome: "Strengthen high-impact communication across levels and contexts.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "Own the Room - Executive Presence & Presentation",
    category: "Communication",
    outcome: "Build authority, confidence, and executive presentation fluency.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Full Day Workshop (8 Hours)"]
  },
  {
    name: "The Honest Game - Building a Feedback Culture",
    category: "Communication",
    outcome: "Normalize candid, constructive feedback loops across teams.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "The Bridge Builder - Breaking Silos",
    category: "Communication",
    outcome: "Improve inter-team handoffs and alignment on shared outcomes.",
    recommendedFormats: ["Power Session (3 Hours)"]
  },
  {
    name: "The Impossible Box - Creative Problem Solving",
    category: "Thinking & Performance",
    outcome: "Train teams to generate high-quality ideas under constraints.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "The Next Move - Sharp Decision Making",
    category: "Thinking & Performance",
    outcome: "Improve decision quality in high-pressure business scenarios.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "Full Throttle - Peak Productivity",
    category: "Thinking & Performance",
    outcome: "Optimize execution habits and focus for measurable productivity gains.",
    recommendedFormats: ["Power Session (3 Hours)"]
  },
  {
    name: "Pressure to Power - Stress to Strength",
    category: "Thinking & Performance",
    outcome: "Convert stress response into resilient performance behavior.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Multi-Session Program (Weekly/Monthly)"]
  },
  {
    name: "The Founder's Chair - The Ownership Edge",
    category: "Leadership & Ownership",
    outcome: "Develop founder-level ownership mindset across leadership teams.",
    recommendedFormats: ["Half Day Intensive (5 Hours)"]
  },
  {
    name: "The Leadership Game - Leaders Who Inspire",
    category: "Leadership & Ownership",
    outcome: "Strengthen influence and coaching behaviors in people leaders.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Full Day Workshop (8 Hours)"]
  },
  {
    name: "The Successor - Building Future Leaders",
    category: "Leadership & Ownership",
    outcome: "Create succession-ready leadership pipelines with practical frameworks.",
    recommendedFormats: ["Multi-Session Program (Weekly/Monthly)"]
  },
  {
    name: "The Coach Within - The Coaching Manager",
    category: "Leadership & Ownership",
    outcome: "Shift managers from command mode to coaching mode effectively.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Multi-Session Program (Weekly/Monthly)"]
  },
  {
    name: "No Excuses - A Culture of Accountability",
    category: "Leadership & Ownership",
    outcome: "Drive accountability norms that stick across teams and levels.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "The Real World - Campus to Corporate",
    category: "New Joinee & Onboarding",
    outcome: "Accelerate transition readiness for fresh joiners entering the workplace.",
    recommendedFormats: ["Power Session (3 Hours)", "Half Day Intensive (5 Hours)"]
  },
  {
    name: "Day One Ready - Rapid Onboarding",
    category: "New Joinee & Onboarding",
    outcome: "Reduce onboarding friction and boost first-30-day confidence.",
    recommendedFormats: ["Power Session (3 Hours)"]
  },
  {
    name: "The Stickiness Factor - Retention through Engagement",
    category: "New Joinee & Onboarding",
    outcome: "Increase engagement signals that contribute to early retention.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Multi-Session Program (Weekly/Monthly)"]
  },
  {
    name: "The Closer - Sales Confidence & Closing Power",
    category: "Sales & Customer Facing",
    outcome: "Improve closing confidence and opportunity conversion discipline.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Full Day Workshop (8 Hours)"]
  },
  {
    name: "The WOW Factor - Customer Delight",
    category: "Sales & Customer Facing",
    outcome: "Elevate customer interactions through empathy and service excellence.",
    recommendedFormats: ["Power Session (3 Hours)"]
  },
  {
    name: "The Deal Table - The Art of Negotiation",
    category: "Sales & Customer Facing",
    outcome: "Build negotiation confidence for high-value client conversations.",
    recommendedFormats: ["Half Day Intensive (5 Hours)", "Full Day Workshop (8 Hours)"]
  }
];
