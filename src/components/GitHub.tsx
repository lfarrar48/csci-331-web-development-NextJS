'use client';

export default function GitHub() {
  return (
    <div className="bg-orange-500 p-8 my-5 rounded-xl shadow-lg text-white text-center">
      <p className="my-4 text-lg leading-relaxed">
        Check out my <a 
          href="https://github.com/lfarrar48/csci-331-web-development-NextJS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 underline font-bold transition-colors duration-300 hover:text-blue-800 hover:no-underline"
        >
          GitHub repository
        </a> for this Assignment 8 NextJS project.
      </p>
    </div>
  );
}