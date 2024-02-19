import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AsideBar from "./components/AsideBar";
// import icon from './assets/'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ingenre Entertainment",
  description: "Get a quick list of animes to watch",
  icons:{
    icon:['/assets/ingenre.png'],
    iconTwo:['./assets/ingenre(2).png'],
    iconThree:['./assets/ingenre(3).png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AsideBar/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
