import img1 from "@/assets/images/blog-img.png";
import dP from "@/assets/images/dprinciples.png";
import colorTheory from "@/assets/images/color-theory.png";
import typography from "@/assets/images/typography.png";
import figmaIntro from "@/assets/images/figma-intro.png";

export interface BlogPost {
  title: string;
  linkPath: string;
  highlightText: string;
  category: string;
  duration: string;
  image: { src: string };
}

export const blogPosts: BlogPost[] = [
  {
    title: "Introduction to Visual Design (I) - Design Elements",
    linkPath: "/blog/visual-design-elements",
    highlightText:
      "The term design is used in many contexts. From architecture and structural design, to fashion, information technology, branding and strategy. Design is created for a purpose — every design is made to fulfil a goal.",
    category: "Design fundamentals",
    duration: "3 mins",
    image: img1,
  },
  {
    title: "Introduction to Visual Design (II) - Design Principles",
    linkPath: "/blog/visual-design-principles",
    highlightText:
      "Design principles help designers create useful, effective and cohesive work. From unity and variety to hierarchy and balance, these principles shape how information reaches the viewer.",
    category: "Design fundamentals",
    duration: "4 mins",
    image: dP,
  },
  {
    title: "Color Theory in Design",
    linkPath: "/blog/color-theory",
    highlightText:
      "Color theory is the study of how colors work together and how they affect our emotions and perceptions. It helps you choose colors that convey the right mood and work together.",
    category: "Color",
    duration: "5 mins",
    image: colorTheory,
  },
  {
    title: "Mastering Typography: The Power of Fonts in Design",
    linkPath: "/blog/typography",
    highlightText:
      "Explore typography's role in creating readable, impactful and visually compelling designs.",
    category: "Typography",
    duration: "4 mins",
    image: typography,
  },
  {
    title: "Introduction to Figma",
    linkPath: "/blog/figma-intro",
    highlightText:
      "Learn the essentials of Figma for creating intuitive and polished user interfaces from scratch.",
    category: "Design tools",
    duration: "6 mins",
    image: figmaIntro,
  },
];
