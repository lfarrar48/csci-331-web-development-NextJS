import Link from "next/link";
import SearchBar from '@/components/SearchBar';

export default function Store() {
  return (
    <div className="p-5 font-sans">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="m-0 text-3xl">NextJS Assignment - CSI 331</h1>
          <h3 className="mt-1 mb-0 text-xl">Author - Farrar, Landon</h3>
        </div>
        <div>
          <Link 
            href="/"
            className="text-blue-600 underline text-lg hover:text-blue-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      
      <div className="my-5">
        <h2 className="text-2xl mb-4">Fake Store</h2>
        <SearchBar />
      </div>
    </div>
  );
}