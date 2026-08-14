import React from "react";
import { 
  RefreshCw, 
  Mic, 
  Share2, 
  Megaphone, 
  TrendingUp, 
  UserCheck, 
  Video, 
  Users,
  Lightbulb,
  PenTool,
  UserCog,
  Search
} from "lucide-react";

export const servicesData = {
  services: [
    {
      id: "business-branding",
      number: "01", 

      // Home Page Slideshow Content
      dynamicTitle: "Business Branding.",
      rightTitle: "BUSINESS BRANDING",
      rightDesc:
        "Transform existing businesses into scalable, AI-driven brands through strategy, identity, content, marketing, and growth systems.",

      // Services Page Card Content
      title: "AI Strategic Business Branding",
      subtitle: "For Existing Businesses Only",
      description:
        "Transform existing businesses into scalable, AI-driven brands through strategy, identity, content, marketing, and growth systems.",
      
      purpose: {
        title: "Purpose",
        text: "Transform existing businesses into scalable, AI-driven brands through strategy, identity, content, marketing, and growth systems."
      },
      process: [
        {
          step: "01",
          name: "Rebranding",
          icon: <RefreshCw className="w-5 h-5 stroke-[2.5]" />,
          detail: "Refresh and reposition an existing brand for today's market.",
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
          detail: "Build trust and authority through strategic storytelling.",
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
          detail: "Create a consistent and recognizable digital brand presence.",
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
          detail: "Turn branding into measurable business growth.",
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
          detail: "Develop a structured execution plan that transforms strategy into measurable business growth through optimized workflows, performance management, and scalable systems.",
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
      // Services Page Card Content
title: "AI Strategic Personal Branding",
subtitle: (
  <div style={{ textAlign: 'center' }}>
    For Founders, Entrepreneurs, Professionals,
    <br />
    Creators & Public Figures
  </div>
),
description: "Build a strong personal identity, authority, and influence using an AI-driven strategic branding ecosystem.",
      process: [
        {
          step: "01",
          name: "Personal Brand Development",
          icon: <UserCheck className="w-5 h-5 stroke-[2.5]" />,
          detail: "Build confidence, clarity, and leadership.",
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
          detail: "Turn your journey into your strongest brand asset through podcast storytelling.",
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
          detail: "Build authority through consistent content creation.",
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
          detail: "Increase visibility and brand authority across networks.",
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
          detail: "Scale your personal brand through a structured growth strategy that strengthens visibility, credibility, influence, and long-term career opportunities.",
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
    {
      id: "startup-branding",
      number: "03", 

      // Home Page Slideshow Content
      dynamicTitle: "Startup Branding.",
      rightTitle: "STARTUP BRANDING",
      rightDesc:
        "Transform ideas into market-ready startups through AI-driven strategy, branding, validation, and growth.",

      // Services Page Card Content
      title: "AI Strategic Startup Branding",
      subtitle: "For Startups, Innovators & Early-Stage Founders",
      description:
        "Transform ideas into market-ready startups through AI-driven strategy, branding, validation, and growth.",
      
      purpose: {
        title: "Purpose",
        text: "Transform ideas into market-ready startups through AI-driven strategy, branding, validation, and growth."
      },
      process: [
        {
          step: "01",
          name: "Startup Idea Development",
          icon: <Lightbulb className="w-5 h-5 stroke-[2.5]" />,
          detail: "Validate and strengthen startup ideas before execution.",
          services: [
            "Idea Validation",
            "Problem Identification",
            "Market Research",
            "Market Opportunity Assessment",
            "Business Model Development",
            "Startup Concept Refinement",
            "MVP Planning",
            "Execution Roadmap"
          ]
        },
        {
          step: "02",
          name: "Startup Consulting",
          icon: <Users className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Build the startup foundation.",
          services: [
            "Startup Strategy",
            "Brand Value Proposition",
            "Business Planning",
            "Brand Naming",
            "Legal & Compliance Guidance",
            "Go-to-Market Strategy",
            "Pricing Strategy",
            "Startup Brand Identity",
            "Investor Readiness"
          ]
        },
        {
          step: "03",
          name: "Startup Brand Identity",
          icon: <PenTool className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Create a professional startup brand.",
          services: [
            "Logo Design",
            "Brand Identity System",
            "Brand Guidelines",
            "Stationery Design",
            "Company Profile",
            "Brochure Design",
            "Marketing Collateral"
          ]
        },
        {
          step: "04",
          name: "Startup Digital Branding",
          icon: <Megaphone className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Build a strong online presence before scaling.",
          services: [
            "Social Media Branding",
            "Website Strategy",
            "Content Strategy",
            "Launch Campaign",
            "Startup Storytelling",
            "Community Building"
          ]
        },
        {
          step: "05",
          name: "Startup Scaling Strategy",
          icon: <TrendingUp className="w-5 h-5 stroke-[2.5]" />, 
          detail: "Scale startups through strategic planning, operational excellence, and sustainable business growth.",
          services: [
            "Scaling Roadmap",
            "KPI Planning",
            "Growth Systems",
            "AI Workflow Strategy",
            "Operational Planning",
            "Expansion Strategy",
            "Marketing Campaigns",
            "Partnership Strategy",
            "Performance Tracking",
            "Continuous Optimization"
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
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
  id: "entertainment-branding",
  number: "04", 

  // Home Page Slideshow Content
  dynamicTitle: "Entertainment Branding.",
  rightTitle: "AI STRATEGIC ENTERTAINMENT BRANDING",
  rightDesc:
    "Build an entertainment brand with AI-driven strategy, content, audience growth, and monetization.",

  // Services Page Card Content
  title: "AI Strategic Entertainment Branding",
  subtitle: "For Creators, Artists, Influencers, Celebrities, Production Houses & Entertainment Brands",
  description:
    "Build an entertainment brand with AI-driven strategy, content, audience growth, and monetization.",
  
  purpose: {
    title: "Purpose",
    text: "Build an entertainment brand with AI-driven strategy, content, audience growth, and monetization."
  },
  process: [
    {
      step: "01",
      name: "Content Strategy & Research",
      icon: <Search className="w-5 h-5 stroke-[2.5]" />, 
      detail: "Build content around audience demand.",
      services: [
        "Topic Research",
        "Trend Analysis",
        "Content Ideation",
        "Content Calendar",
        "Series Planning",
        "Audience Research",
        "Niche Positioning",
        "AI Content Planning"
      ]
    },
    {
      step: "02",
      name: "Creator Setup",
      icon: <UserCog className="w-5 h-5 stroke-[2.5]" />, 
      detail: "Build a professional digital presence.",
      services: [
        "Social Media Account Setup",
        "Profile Optimization",
        "Channel Branding",
        "Platform Strategy",
        "Creator Identity",
        "Brand Positioning",
        "Platform Integration"
      ]
    },
    {
      step: "03",
      name: "Content Branding",
      icon: <PenTool className="w-5 h-5 stroke-[2.5]" />, 
      detail: "Build a recognizable creator brand.",
      services: [
        "Visual Identity",
        "Thumbnail Strategy",
        "Poster Design",
        "Reels & Shorts Branding",
        "Creative Direction",
        "Audience Growth",
        "Campaign Planning"
      ]
    },
    {
      step: "04",
      name: "Audience Engagement",
      icon: <Users className="w-5 h-5 stroke-[2.5]" />, 
      detail: "Grow audience and visibility.",
      services: [
        "Social Media Marketing",
        "Performance Campaigns",
        "Audience Growth",
        "Community Building",
        "Fan Engagement",
        "Influencer Collaboration Strategy",
        "Lead Generation",
        "Content Distribution"
      ]
    },
    {
      step: "05",
      name: "Growth Strategy",
      icon: <TrendingUp className="w-5 h-5 stroke-[2.5]" />, 
      detail: "Accelerate creator growth through structured strategies, audience engagement, and sustainable brand development.",
      services: [
        "Creator Growth Strategy",
        "Platform Scaling",
        "Brand Partnerships",
        "Monetization Strategy",
        "Sponsorship Planning",
        "Audience Retention",
        "Long-term Roadmap"
      ]
    }
  ],
  // 
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
}
  ],
  
};