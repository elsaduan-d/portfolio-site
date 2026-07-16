import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'Yuzhi Duan | Product Management · Learning Design · AI Education',
  description:
    'A polished portfolio for Yuzhi Duan / Elsa Duan spanning product management, learning design, AI education, and evidence-based EdTech.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-ink antialiased">
        <LanguageProvider>
          <div className="min-h-screen bg-canvas text-ink">
            <Navbar />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
