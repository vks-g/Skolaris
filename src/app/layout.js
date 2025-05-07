import '../globals.css';

export const metadata = {
  title: 'Gray Matter Guild',
  description: 'Collaborate, Innovate, and Grow Together',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

