
import React, { useEffect, useState } from 'react';

/**
 * App Component
 * 
 * Implements a premium, minimal personal calling card for Jack Oliver Harris.
 * Narrative flow: who → what (with proof) → why it matters → connect → subscribe.
 */
const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the entrance animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-24 max-w-2xl mx-auto selection:bg-gray-200">
      
      {/* Hero Section: who → what → why */}
      <header 
        className={`text-center transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Who */}
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-10">
          Jack Oliver Harris
        </h1>
        
        <div className="space-y-6 max-w-lg mx-auto">
          {/* What + Credibility */}
          <p className="text-lg md:text-xl font-normal text-[#1A1A1A] leading-relaxed">
            Remote-ready systems for service businesses, proven inside a live tour operation.
          </p>
          
          {/* Why it matters (Sharp) */}
          <p className="text-base text-gray-500 font-light leading-relaxed">
            For founders physically tied to their business who want out of the bottleneck.
          </p>
        </div>
      </header>

      {/* Connect (Links) - Generous vertical spacing to separate high-level intent from action */}
      <nav 
        className={`mt-24 mb-32 flex items-center gap-10 text-sm transition-all duration-1000 delay-300 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <a 
          href="https://www.linkedin.com/in/jackoliverharris" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#1A1A1A] transition-colors duration-500 border-b border-transparent hover:border-[#1A1A1A] pb-1 tracking-wide font-medium"
        >
          LinkedIn
        </a>
        <a 
          href="https://instagram.com/jackoliverharris" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1A1A1A] transition-colors duration-500 border-b border-transparent hover:border-[#1A1A1A] pb-1 tracking-wide"
        >
          Instagram
        </a>
      </nav>

      {/* Subscribe Section (Continuation) */}
      <section 
        className={`w-full max-w-md transition-all duration-1000 delay-500 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-sm font-medium text-[#1A1A1A] mb-3">Notes from Jack</h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Occasional notes on systems, operations, and reducing reliance on the founder.
          </p>
        </div>

        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="flex flex-col sm:flex-row gap-3 w-full"
        >
          <input 
            type="email" 
            placeholder="Email address"
            required
            className="flex-1 bg-white border border-gray-100 rounded-md px-4 py-3 text-sm font-light focus:outline-none focus:border-gray-300 focus:ring-0 transition-all placeholder:text-gray-300"
          />
          <button 
            type="submit"
            className="bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium px-8 py-3 rounded-md hover:bg-[#333333] active:scale-[0.98] transition-all duration-300"
          >
            Join
          </button>
        </form>
      </section>

      {/* Subtle Footer */}
      <footer className="mt-40 text-center">
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-300 font-light">
          Jack Oliver Harris &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
};

export default App;
