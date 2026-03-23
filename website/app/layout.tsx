import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Honey Beez | Learn About Bees!",
  description:
    "An interactive bee education experience for kids ages 9-12. Explore the hive, decode waggle dances, and become a Bee Ambassador!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
