import Link from "next/link";
import Counter from "@/components/Counter";
import GitHub from "@/components/GitHub";
import FinalProject from "@/components/FinalProject";

export default function Home() {
  return (
    <div className="p-5 font-sans">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="m-0 text-3xl">NextJS Assignment - CSI 331</h1>
          <h3 className="mt-1 mb-0 text-xl">Author - Farrar, Landon</h3>
        </div>
        <div>
          <Link 
            href="/store"
            className="text-blue-600 underline text-lg hover:text-blue-800 transition-colors"
          >
            Check out my store →
          </Link>
        </div>
      </div>
      
      <div className="my-5">
        <h2 className="text-2xl mb-4">Counter Components</h2>
        <div className="flex gap-5 w-full my-5">
          <Counter 
            name="Pablo" 
            mult={1}
            buttonColor="#4CAF50"
          />
          <Counter 
            name="Pia" 
            mult={2}
            buttonColor="#2196F3"
          />
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      
      <GitHub />
      
      <FinalProject />
    </div>
  );
}
