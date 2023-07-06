import { Inter } from "next/font/google";
import HomeView from "@/src/views/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeView />;
}
