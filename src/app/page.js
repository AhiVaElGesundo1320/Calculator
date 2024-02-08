"use client";
import { Calculator } from "./components/[id]";
import { ThemeContextProvider } from "./components/ThemeContextProvider";
export default function Home() {
  return (
    //text-gray-50
    <main className="h-screen flex flex-col items-center justify-center text-gray-50 bg-teal-100 dark:bg-teal-950">
      <ThemeContextProvider>
        <Calculator />
        </ThemeContextProvider>
    </main>
  );
}
