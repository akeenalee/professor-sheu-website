import "./globals.css";

export const metadata = {
  title: "Prof. Akintola Shehu Latunji | Professor of Fisheries, LASU",
  description:
    "Official academic portfolio of Prof. Akintola Shehu Latunji — Professor of Fisheries and Dean of the Faculty of Science, Lagos State University. Research in fisheries ecology, aquaculture, food security, and sustainability.",
  keywords: [
    "Akintola Shehu Latunji",
    "Professor of Fisheries",
    "Lagos State University",
    "LASU",
    "Fisheries Research Nigeria",
    "Aquaculture",
    "Food Security",
    "Small Scale Fisheries",
    "Fisheries Ecology",
  ],
  authors: [{ name: "Prof. Akintola Shehu Latunji" }],
  openGraph: {
    title: "Prof. Akintola Shehu Latunji | Professor of Fisheries, LASU",
    description:
      "Academic portfolio of Prof. Akintola Shehu Latunji — Dean, Faculty of Science, Lagos State University.",
    url: "https://professor-sheu-website.vercel.app",
    siteName: "Prof. Akintola Shehu Latunji",
    images: [{ url: "/prof-sheu.jpg", width: 800, height: 600 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Akintola Shehu Latunji | LASU",
    description: "Professor of Fisheries & Dean, Faculty of Science, Lagos State University.",
    images: ["/prof-sheu.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}