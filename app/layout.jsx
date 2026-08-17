import './globals.css';

export const metadata = {
  metadataBase: new URL('https://uxvel.com'),
  title: {
    default: 'UxVel — Design and development partner for digital growth',
    template: '%s',
  },
  description: 'UxVel is a design and development studio building research-led products, websites and brands.',
  icons: { icon: '/brand/logo-white.png' },
  openGraph: { siteName: 'UxVel', type: 'website', locale: 'en_GB' },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B1220',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
