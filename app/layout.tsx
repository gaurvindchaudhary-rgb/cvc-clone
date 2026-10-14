import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma, and burnout therapy for adults. CBT, EMDR, and mindfulness. In-person & telehealth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              name: "Dr. Maya Reynolds, PsyD",
              description: "Licensed clinical psychologist offering anxiety, trauma, and burnout therapy for adults in Santa Monica, CA.",
              address: { "@type": "PostalAddress", streetAddress: "123th Street 45 W", addressLocality: "Santa Monica", addressRegion: "CA", postalCode: "90401" },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
