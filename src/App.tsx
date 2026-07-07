import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import FintechPage from './pages/FintechPage';
import HealthcarePage from './pages/HealthcarePage';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-50 transition-colors duration-300 antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="relative overflow-hidden">
          {/* Ambient background styling */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0 overflow-hidden opacity-40 dark:opacity-20">
            <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-indigo-400 blur-[150px] rounded-full" />
            <div className="absolute top-[40%] right-[-20%] w-[500px] h-[500px] bg-purple-400 blur-[130px] rounded-full" />
          </div>

          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/fintech" element={<FintechPage />} />
              <Route path="/healthcare" element={<HealthcarePage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
