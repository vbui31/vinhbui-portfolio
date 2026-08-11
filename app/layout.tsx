import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinh Bui | Chemical Engineering Portfolio",
  description:
    "Portfolio of Vinh Bui, LSU Chemical Engineering student focused on process engineering, data analytics, energy systems, and leadership.",
  keywords: [
    "Chemical Engineering",
    "LSU",
    "Portfolio",
    "Process Engineering",
    "Data Analytics",
    "Energy Systems",
    "Vinh Bui"
  ],
  openGraph: {
    title: "Vinh Bui | Chemical Engineering Portfolio",
    description:
      "Future engineer and problem solver building technical depth in process engineering, analytics, and leadership.",
    type: "website",
    url: "https://vbui31.github.io/vinhbui-portfolio/",
    images: [{ url: "/headshot.jpg", alt: "Vinh Bui" }]
  },
  twitter: { card: "summary_large_image", title: "Vinh Bui | Chemical Engineering Portfolio", images: ["/headshot.jpg"] },
  alternates: { canonical: "https://vbui31.github.io/vinhbui-portfolio/" },
  icons: { icon: "/M_Hex.png" },
  metadataBase: new URL("https://vbui31.github.io/vinhbui-portfolio/")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
