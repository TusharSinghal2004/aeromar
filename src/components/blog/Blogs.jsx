import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Industry News", "India-USA Trade", "Logistics Insights", "Shipping Guides", "Market Updates"];

const posts = [
  {
    category: "India-USA Trade",
    read: "6 min read",
    title: "The India-USA Trade Corridor: Opportunities for 2026",
    excerpt: "How shifting global supply chains are creating unprecedented opportunities for Indian exporters reaching the U.S. market.",
    image: "https://images.unsplash.com/photo-1504197832061-98360e1f2a10?w=800&q=80",
  },
  {
    category: "Logistics Insights",
    read: "5 min read",
    title: "FMC-Licensed NVOCC: What It Means For Your Shipments",
    excerpt: "Why working with an FMC-licensed Non-Vessel Operating Common Carrier protects your cargo and your business.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    category: "Market Updates",
    read: "8 min read",
    title: "Ocean Freight Rates Outlook: Q4 2025 Market Update",
    excerpt: "Carrier capacity, contract negotiations, and demand signals shaping spot and contract pricing this quarter.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  },
  {
    category: "Shipping Guides",
    read: "7 min read",
    title: "U.S. Customs Compliance: A Guide For Furniture Importers",
    excerpt: "From HTS classification to anti-dumping duties, here's what every furniture importer needs to know before booking a container.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    category: "Industry News",
    read: "4 min read",
    title: "Warehouse-To-Door: The Last-Mile Advantage",
    excerpt: "Door-to-door logistics is now the default expectation. Here's how to engineer the last mile for resilience.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    category: "Shipping Guides",
    read: "6 min read",
    title: "Air Freight For Perishables: Building A Reliable Cold Chain",
    excerpt: "Temperature integrity from origin tarmac to destination DC — what separates a good air freight partner from a great one.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
];

const categoryColors = {
  "India-USA Trade":    { bg: "#EEF4FF", text: "#1A73C8" },
  "Logistics Insights": { bg: "#FFF8E6", text: "#C8960A" },
  "Market Updates":     { bg: "#EEF4FF", text: "#1E3A7B" },
  "Shipping Guides":    { bg: "#E8F5EE", text: "#1A6B3C" },
  "Industry News":      { bg: "#F3F0FF", text: "#5B3FD4" },
};

function PostCard({ post, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[post.category] || { bg: "#F0F4FF", text: "#1E3A7B" };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.65s ease ${0.1 + index * 0.08}s, transform 0.65s ease ${0.1 + index * 0.08}s`,
        cursor: "pointer",
      }}
      className="bg-white border border-gray-100 overflow-hidden flex flex-col group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        {/* Dark overlay */}
        <div
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.35s ease" }}
          className="absolute inset-0 bg-[#081229]/30 pointer-events-none"
        />
        {/* Arrow */}
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translate(0,0)" : "translate(-4px, 4px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-[#C8960A] flex items-center justify-center"
        >
          <ArrowUpRight size={14} className="text-white" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span
            style={{ background: color.bg, color: color.text }}
            className="text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-1"
          >
            {post.category}
          </span>
          <span className="text-gray-300 text-xs">·</span>
          <span className="text-gray-400 text-[11px]">{post.read}</span>
        </div>

        {/* Title */}
        <h3
          style={{
            color: hovered ? "#C8960A" : "#1E3A7B",
            transition: "color 0.25s ease",
          }}
          className="text-sm font-extrabold leading-[1.45] mb-2"
        >
          {post.title}
        </h3>

        {/* Animated underline */}
        <div
          style={{
            width: hovered ? "2.5rem" : "1rem",
            transition: "width 0.35s ease",
            backgroundColor: "#C8960A",
          }}
          className="h-[2px] mb-3"
        />

        {/* Excerpt */}
        <p className="text-gray-500 text-xs leading-[1.75] flex-1">{post.excerpt}</p>

        {/* Read link */}
        <div
          style={{
            color: hovered ? "#C8960A" : "#1A73C8",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
            transition: "color 0.25s ease, transform 0.25s ease",
          }}
          className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
        >
          Read Article
          <ArrowUpRight size={12} />
        </div>
      </div>
    </article>
  );
}

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Filter tabs */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
          }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: isActive ? "#081229" : "white",
                  color: isActive ? "#C8960A" : "#6B7280",
                  borderColor: isActive ? "#081229" : "#E5E7EB",
                  transform: isActive ? "translateY(-1px)" : "translateY(0)",
                  transition: "all 0.2s ease",
                }}
                className="border text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-2 hover:border-[#081229] hover:text-[#081229]"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post, i) => (
            <PostCard key={post.title} post={post} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
}