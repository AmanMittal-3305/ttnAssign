"use client"
import "./globals.css";
import { SessionProvider } from "next-auth/react";


export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
      <body
        
      >
        {children}
      </body>
      </SessionProvider>
    </html>
  );
}
