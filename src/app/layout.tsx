import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Truly Free Mortgage Calculator — No Registration Required",
  description: "Calculate your mortgage payment instantly. Full amortization schedule, PMI, taxes, HOA. 100% free. No email. No signup. Your data never leaves your browser.",
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
};

function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "none", boxShadow: "0 -1px 3px 0 rgb(0 0 0 / 0.06)", marginTop: "auto" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 32px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096", marginBottom: "16px" }}>Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="/about" style={{ fontSize: "14px", color: "#4a5568", textDecoration: "none", letterSpacing: "-0.01em" }}>About Us</a>
            <a href="/blog" style={{ fontSize: "14px", color: "#4a5568", textDecoration: "none", letterSpacing: "-0.01em" }}>Blog</a>
            <a href="/contact" style={{ fontSize: "14px", color: "#4a5568", textDecoration: "none", letterSpacing: "-0.01em" }}>Feedback</a>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096", marginBottom: "16px" }}>Legal</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="/privacy" style={{ fontSize: "14px", color: "#4a5568", textDecoration: "none", letterSpacing: "-0.01em" }}>Privacy Policy</a>
            <a href="/terms" style={{ fontSize: "14px", color: "#4a5568", textDecoration: "none", letterSpacing: "-0.01em" }}>Terms of Service</a>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#718096", marginBottom: "16px" }}>Support</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="/contact" style={{ fontSize: "14px", color: "#4a5568", textDecoration: "none", letterSpacing: "-0.01em" }}>Contact</a>
            <a href="mailto:george@klickifyagency.com" style={{ fontSize: "14px", color: "#4a5568", textDecoration: "none", letterSpacing: "-0.01em" }}>george@klickifyagency.com</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(74,85,104,0.08)", padding: "20px 24px", textAlign: "center" }}>
        <span style={{ fontSize: "13px", color: "#a0aec0", letterSpacing: "-0.01em" }}>
          2026 Truly Free Mortgage · Built by{" "}
          <a href="https://klickifyagency.com" target="_blank" rel="noopener noreferrer" style={{ color: "#0058c3", fontWeight: 600, textDecoration: "none" }}>Klickify Agency</a>
          {" "}· Your data never leaves your browser.
        </span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {children}
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8680464039127093"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
