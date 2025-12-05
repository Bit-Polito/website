import "./globals.css";

export const metadata = {
  title: 'Bitpolito',
  description: 'bitpolito',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
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
