import { useState } from "react";
import Section from "../../components/section.tsx";
import styles from "./Support.module.css";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const SUPPORT_CATEGORIES = [
  {
    icon: "⌚",
    title: "Device & Cloud Sync",
    desc: "Connecting Suunto, Shearwater, Garmin, or other dive computers.",
  },
  {
    icon: "🤿",
    title: "Dive Logs & Media",
    desc: "Matching underwater photos, timestamps, depth profiles, and marine life tags.",
  },
  {
    icon: "👤",
    title: "Account & Data",
    desc: "Managing account settings, cloud backups, and exporting dive records.",
  },
  {
    icon: "🐙",
    title: "Troubleshooting",
    desc: "Need technical help? Contact our support team directly.",
  },
];

const FAQ_DATA: FAQItem[] = [
  {
    category: "Device & Cloud Sync",
    question: "How do I connect my Suunto account to auto-sync dives?",
    answer: "Navigate to 'Contribute' > 'Link with your brand' in the app and select Suunto. Follow the OAuth prompt to log in and grant permissions. Dives synced to the Suunto app will automatically import.",
  },
  {
    category: "Device & Cloud Sync",
    question: "Why aren't my latest dives appearing in Scuba Seasons?",
    answer: "Ensure your dive computer has first synced to its official manufacturer app (e.g., Suunto App). Cloud syncing can take 1–2 minutes. You can also manually pull updates via Contribute > Link with your brand > [Brand] > Refresh Sync.",
  },
  {
    category: "Dive Logs & Media",
    question: "How does photo matching to depth profiles work?",
    answer: "When you upload photos to a dive, Scuba Seasons reads the camera's EXIF timestamp and cross-references it with your dive computer's depth profile to plot the exact depth and minute each photo was taken.",
  },
  {
    category: "Account & Data",
    question: "Can I export my dive logs to another format?",
    answer: "Yes, you can export your complete dive history, depth logs, and site logs in standard formats (such as CSV or UDDF) under Account Settings > Export Data.",
  },
  {
    category: "Account & Data",
    question: "How do I disconnect a brand integration?",
    answer: "Go to Contribute > Link with your brand > select the connected brand, and tap 'Disconnect Account'. You can also revoke access from the provider's online portal.",
  },
  {
    category: "Troubleshooting",
    question: "Having technical issues or sync errors?",
    answer: "Please reach out directly to our support team at support@scubaseasons.com or via 'Profile > Settings > Report an Issue' in the app with your device type and app version, and we'll help get it sorted out.",
  },
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? faq.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const supportSubject = encodeURIComponent("Scuba Seasons Support Request (Web)");

  const supportBody = encodeURIComponent(
  `Hi Scuba Seasons Support,

  [ Please describe your issue or feedback below ]



  ---
  - App Version (Found in app Settings): 
  - OS (Android or iOS): 
  `
  );

  return (
    <>
      <div className={styles.headerBackground} />

      {/* Hero & Search */}
      <Section>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", padding: "1rem 0" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem", color: "#0f172a" }}>
            Scuba Seasons Support
          </h1>
          <p style={{ color: "#475569", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Find answers to common questions about dive computer integrations, photo-depth matching, and account settings.
          </p>

          <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Search help articles (e.g. Suunto sync, photos, export)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.85rem 1.25rem",
                fontSize: "1rem",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                outline: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* Topic Cards */}
      <Section>
        <div style={{ width: "100%" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Browse Topics</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {SUPPORT_CATEGORIES.map((cat, i) => {
              const isSelected = selectedCategory === cat.title;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedCategory(isSelected ? null : cat.title)}
                  style={{
                    backgroundColor: isSelected ? "#eff6ff" : "#ffffff",
                    border: isSelected ? "2px solid #0073e6" : "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "1.25rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{cat.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", margin: "0 0 0.25rem 0", color: "#0f172a" }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>
          {selectedCategory && (
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <button
                onClick={() => setSelectedCategory(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#0073e6",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                Clear filter (Showing {selectedCategory}) ✕
              </button>
            </div>
          )}
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Frequently Asked Questions</h2>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#0073e6",
                    letterSpacing: "0.05em",
                  }}
                >
                  {faq.category}
                </span>
                <h3 style={{ fontSize: "1.15rem", margin: "0.25rem 0 0.5rem 0", color: "#0f172a" }}>
                  {faq.question}
                </h3>
                <p style={{ margin: 0, color: "#475569", lineHeight: "1.6", fontSize: "0.975rem" }}>
                  {faq.answer}
                </p>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#64748b" }}>
              No answers found for "{searchQuery}". Try searching for something else or contact support below.
            </p>
          )}
        </div>
      </Section>

      {/* Direct Contact Section */}
      <Section>
        <div className={"twoCol"}>
          <div className={"sectionContent"}>
            <h2>Still need help or troubleshooting?</h2>
            <div>
              <p>
                If you are running into technical issues or need help with a specific dive log, reach out directly to our support team:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1.5rem 0" }}>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  ✉️ <strong>Email:</strong>{" "}
                    <a 
                    href={`mailto:support@scubaseasons.com?subject=${supportSubject}&body=${supportBody}`} 
                    style={{ color: "#0073e6", textDecoration: "underline" }}
                  >
                    scubaseasons@gmail.com
                  </a>
                </li>
                <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  📱 <strong>In-App:</strong> Profile &gt; Settings &gt; Report an Issue
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  ⚡ <strong>Response Time:</strong> Within 24-48 hours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}