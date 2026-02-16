import "./globals.css";
import Header from './Components/Header'
import Footer from './Components/Footer'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
