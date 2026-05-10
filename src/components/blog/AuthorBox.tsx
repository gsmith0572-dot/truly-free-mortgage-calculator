import Image from "next/image";

export default function AuthorBox() {
  return (
    <div style={{ background: "#f7fafc", borderRadius: "8px", padding: "24px", display: "flex", alignItems: "flex-start", gap: "20px", marginTop: "48px" }}>
      <div style={{ flexShrink: 0 }}>
        <Image src="/george-smith.png" alt="George Smith" width={72} height={72} style={{ borderRadius: "50%", objectFit: "cover" }} />
      </div>
      <div>
        <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "4px" }}>WRITTEN BY</div>
        <div style={{ fontSize: "16px", fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: "2px" }}>George Smith</div>
        <div style={{ fontSize: "13px", color: "#0058c3", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "6px" }}>Founder, Klickify Agency</div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "10px" }}>
          <a href="mailto:george@klickifyagency.com" style={{ fontSize: "12px", color: "#718096", textDecoration: "none", letterSpacing: "-0.01em" }}>george@klickifyagency.com</a>
          <a href="https://www.linkedin.com/in/george-smith-832113217/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#0058c3", textDecoration: "none", fontWeight: 600, letterSpacing: "-0.01em" }}>LinkedIn</a>
        </div>
        <div style={{ fontSize: "14px", color: "#4a5568", lineHeight: "1.6", letterSpacing: "-0.01em" }}>George builds free web tools that respect user privacy. Founder of Klickify Agency.</div>
      </div>
    </div>
  );
}
