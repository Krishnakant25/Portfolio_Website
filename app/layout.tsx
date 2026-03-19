import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Kant Sahu — Data Analyst & AI Developer",
  description:
    "Portfolio of Krishna Kant Sahu — Data Analyst & AI Developer specializing in Generative AI, Python, SQL, and Workflow Automation.",
  keywords: ["Data Analyst", "AI Developer", "Generative AI", "Python", "SQL", "Workflow Automation"],
  authors: [{ name: "Krishna Kant Sahu" }],
  openGraph: {
    title: "Krishna Kant Sahu — Data Analyst & AI Developer",
    description: "Portfolio of Krishna Kant Sahu — AI Developer & Data Analyst.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
