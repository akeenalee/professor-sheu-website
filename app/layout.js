import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://shehuakintola.com"),
  title: "Prof. Akintola Shehu Latunji | Professor of Fisheries, LASU",
  description: "Official academic portfolio of Prof. Akintola Shehu Latunji — Professor of Fisheries and Dean of the Faculty of Science, Lagos State University.",
  keywords: ["Akintola Shehu Latunji", "Professor of Fisheries", "Lagos State University", "LASU", "Fisheries Research Nigeria", "Aquaculture", "Food Security"],
  authors: [{ name: "Prof. Akintola Shehu Latunji" }],
  openGraph: {
    title: "Prof. Akintola Shehu Latunji | Professor of Fisheries, LASU",
    description: "Academic portfolio of Prof. Akintola Shehu Latunji — Dean, Faculty of Science, Lagos State University.",
    url: "https://shehuakintola.com",
    siteName: "Prof. Akintola Shehu Latunji",
    images: [{ url: "/prof-sheu.jpg", width: 800, height: 600 }],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-81TFZ219YY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-81TFZ219YY');
          `}
        </Script>
      </body>
    </html>
  );
}