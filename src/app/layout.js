import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic"],
  variable: "--font-logo",
});

export const metadata = {
  title: 'BitPolito',
  description: 'bitpolito',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className={playfairDisplay.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#F9F9F9] dark:bg-blue-dark text-blue-dark dark:text-white">
        {children}
      </body>
    </html>
  );
}