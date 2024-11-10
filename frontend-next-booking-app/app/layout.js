import {Inter} from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "BOOKING APP USING RANT STACK",
  description: "Book a meeting or conference room for your team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
         <main className="mx-ato max-w-7xl px-4 py-6">
<h1>estT</h1>
         </main>
        {children}
      </body>
    </html>
  );
}
