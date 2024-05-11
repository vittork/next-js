import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: {
    default: "Vittorio Page",
    template: "%s | Vittorio Page",
  },
  description: "Berisi Mobil Impian Vittorio",
};

export default function RootLayout({ children }) {
  return (
    <html className="roboto">
      <head>
        <title>Codepolitan</title>
      </head>
      <body className="bg-gray-100 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          Im Here to Stay
        </footer>
      </body>
    </html>
  );
}
