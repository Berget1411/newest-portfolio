import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/home/";
import { Provider } from "@/components/provider/provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ludvigbergstrom.com/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Ludvig Bergström - Full-Stack IT Consultant",
    template: "%s | Ludvig Bergström",
  },
  description:
    "Ludvig Bergström is a full-stack IT consultant and industrial engineering and management student with hands-on experience in software development, hackathons, and consulting. Passionate about computer science, artificial intelligence, finance, and management. Driven by curiosity, I enjoy tackling complex problems, delivering innovative solutions, and collaborating closely with others in dynamic, fast-paced environments.",
  keywords: [
    "full-stack developer",
    "IT consultant",
    "We Know IT",
    "KTH AI Society",
    "THS Business",
    "artificial intelligence",
    "React",
    "Next.js",
    "TypeScript",
    "finance",
    "management",
    "Industrial Engineering",
    "hackathon winner",
  ],
  authors: [{ name: "Ludvig Bergström" }],
  creator: "Ludvig Bergström",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ludvigbergstrom.com",
    title: "Ludvig Bergström | Full-Stack IT Consultant & Developer",
    description:
      "Full-Stack IT Consultant and Industrial Engineering and Management student with hands-on experience in software development, hackathons, and consulting. Passionate about computer science, artificial intelligence, finance, and management.",
    siteName: "Ludvig Bergström Portfolio",
    images: [
      {
        url: "https://ludvigbergstrom.com/portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Ludvig Bergström - Full-Stack IT Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludvig Bergström | Full-Stack IT Consultant & Developer",
    description:
      "Full-Stack IT Consultant and Industrial Engineering and Management student with hands-on experience in software development, hackathons, and consulting. Passionate about computer science, artificial intelligence, finance, and management.",
    images: ["https://ludvigbergstrom.com/portrait.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <Provider>
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
