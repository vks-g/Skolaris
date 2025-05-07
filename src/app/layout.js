import './globals.css';

export const metadata = {
  title: 'Skolaris',
  description: 'Collaborate, Innovate, and Grow Together',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

