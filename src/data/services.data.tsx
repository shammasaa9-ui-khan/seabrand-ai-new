import React from "react";
import { 
  RefreshCw, 
  Mic, 
  Share2, 
  Megaphone, 
  TrendingUp, 
  UserCheck, 
  Video, 
  Target // Added for the purpose bullseye icon in image_91eba6.png
} from "lucide-react";

export const servicesData = {
  header: {
    badge: "Our Services",
    title: "AI Strategic\nPowered Branding",
    objective: "Refresh and reposition an existing brand for today's market.",
    description:
      "From data-driven business positioning to personalized identity workflows—we deliver end-to-end strategic branding tailored to your goals.",
  },
  services: [
    {
      id: "business-branding",
      number: "01", 

      // Home Page Slideshow Content
      dynamicTitle: "Business Branding.",
      rightTitle: "BUSINESS BRANDING",
      rightDesc:
        "Build a strong, market-leading brand with AI-driven strategy, identity, and positioning.",

      // Services Page Card Content
      title: "AI Strategic\nBusiness Branding",
      description:
        "Transform existing businesses into scalable, AI-driven brands through strategy, identity, content, marketing, and growth systems.",
      
      process: [
        {
          step: "01",
          name: "Rebranding",
          icon: <RefreshCw className="w-5 h-5 stroke-[2.5]" />,
          detail: "Objective: Refresh and reposition an existing brand for today's market.",
          services: [
            "Brand Strategy Audit",
            "Brand Repositioning",
            "Logo Redesign",
            "Brand Identity System",
            "Brand Guidelines",
            "Visual Identity Refresh"
          ]
        },
        {
          step: "02",
          name: "Podcast Branding",
          icon: <Mic className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Objective: Build trust and authority through strategic storytelling.",
          services: [
            "Founder Story Development",
            "Brand Story Creation",
            "Product Storytelling",
            "Service Storytelling",
            "Podcast Strategy",
            "Podcast Production Planning",
            "AI Content Repurposing"
          ]
        },
        {
          step: "03",
          name: "Social Media Branding",
          icon: <Share2 className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Objective: Create a consistent and recognizable digital brand presence.",
          services: [
            "Social Media Brand Strategy",
            "Social Media Profile Optimization",
            "Content Strategy",
            "Creative Design System",
            "Social Media Posters",
            "Reels & Short-form Content",
            "Content Calendar",
            "Community Engagement Strategy"
          ]
        },
        {
          step: "04",
          name: "Brand Marketing",
          icon: <Megaphone className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Objective: Turn branding into measurable business growth.",
          services: [
            "Marketing Strategy",
            "Campaign Planning",
            "Lead Generation Strategy",
            "Brand Awareness Campaigns",
            "Customer Engagement Strategy",
            "Performance Tracking",
            "Growth Optimization",
            "AI Marketing Automation"
          ]
        },
        {
          step: "05",
          name: "Business Growth",
          icon: <TrendingUp className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Objective: Develop a structured execution plan that transforms strategy into measurable business growth.",
          services: [
            "Business Growth Strategy",
            "Execution Roadmap",
            "Workflow Design",
            "KPI & Performance Planning",
            "Scaling Strategy",
            "Team Process Planning",
            "Business Optimization",
            "Business System Development"
          ]
        }
      ],

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: "personal-branding",
      number: "02",

      // Home Page Slideshow Content
      dynamicTitle: "Personal Branding.",
      rightTitle: "PERSONAL BRANDING",
      rightDesc:
        "Build a strong personal identity, authority, and influence using an AI-driven strategic branding ecosystem.",

      // Services Page Card Content
      title: "AI Strategic\nPersonal Branding",
      subtitle:"For Founders, Entrepreneurs, Professionals, Creators & Public Figures",
      description:
        "We help founders, professionals, creators, and industry experts build influential personal brands that attract opportunities, partnerships, and authority.",
      
      // Added Purpose field with matching target icon from image_91eba6.png
      purpose: {
        title: "Purpose",
        icon: <Target className="w-6 h-6 stroke-[2.5]" />,
        text: "Build a strong personal identity, authority, and influence using an AI-driven strategic branding ecosystem."
      },

      overview:
        "Your reputation is your biggest asset. We use AI-driven insights to uncover your unique value proposition, scaling your personal narrative into a recognizable, authoritative brand.",
      
      deliverables: [
        "Personal Brand Strategy",
        "Content Pillar Architecture",
        "Social Media Identity Kit",
        "Thought Leadership Framework"
      ],
      
      process: [
        {
          step: "01",
          name: "Personal Brand Development",
          icon: <UserCheck className="w-5 h-5 stroke-[2.5]" />,
          detail: "Objective: Build confidence, clarity, and leadership.",
          services: [
            "Personality Assessment",
            "Confidence Building",
            "Public Speaking Preparation",
            "Camera Confidence Training",
            "Stage Presence Development",
            "Leadership Mindset",
            "Personal Positioning",
            "Personal Brand Direction"
          ]
        },
        {
          step: "02",
          name: "Personal Story Branding",
          icon: <Mic className="w-5 h-5 stroke-[2.5]" />,
          detail: "Objective: Turn your journey into your strongest brand asset through podcast.",
          services: [
            "Founder Story",
            "Personal Story",
            "Business Journey",
            "Success & Failure Stories",
            "Brand Voice Development",
            "Signature Message",
            "Thought Leadership Positioning"
          ]
        },
        {
          step: "03",
          name: "Content & Vlog Branding",
          icon: <Video className="w-5 h-5 stroke-[2.5]" />,
          detail: "Objective: Build authority through consistent content.",
          services: [
            "Vlog Strategy",
            "Educational Content",
            "Founder Content",
            "Business Lessons",
            "Behind-the-Scenes Content",
            "Podcast Content",
            "Short-form Video Strategy",
            "AI Content Repurposing"
          ]
        },
        {
          step: "04",
          name: "Personal Brand Promotion",
          icon: <Megaphone className="w-5 h-5 stroke-[2.5]" />,
          detail: "Objective: Increase visibility and authority.",
          services: [
            "Social Media Branding",
            "Profile Optimization",
            "Content Distribution",
            "Community Building",
            "Audience Growth Strategy",
            "Personal PR Strategy",
            "Platform Growth",
            "AI Content Scheduling"
          ]
        },
        {
          step: "05",
          name: "Personal Brand Growth",
          icon: <TrendingUp className="w-5 h-5 stroke-[2.5]" />,
          detail: "Objective: Scale your personal brand through a structured growth strategy that strengthens visibility, credibility, influence, and long-term career opportunities.",
          services: [
            "Growth Strategy",
            "Execution Roadmap",
            "Opportunity Mapping",
            "Personal Brand Scaling",
            "Collaboration Planning",
            "Speaking Opportunities",
            "Network Building",
            "Long-term Personal Brand Roadmap"
          ]
        }
      ],
      

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ],
};