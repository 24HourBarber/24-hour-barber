
import './globals.css';

export const metadata = {
  title: '24 Hour Barber | Mobile Barbering with Dignity',
  description:
    'Professional barbering for regular clients and residential homes serving adults with intellectual disabilities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
