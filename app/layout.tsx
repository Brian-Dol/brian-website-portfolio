import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Brian Dol, Senior Full Stack Software Engineer",
  description:
    "Brian Dol is a senior full stack software engineer building web applications, APIs, and AI-powered digital solutions.",
  metadataBase: new URL("https://portfolio.briandol.workers.dev"),
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: {
    title: "Brian Dol, Senior Full Stack Software Engineer",
    description:
      "Full stack engineering, AI integrations, cloud systems, and practical digital solutions.",
    type: "website",
    url: "https://portfolio.briandol.workers.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#111512" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
