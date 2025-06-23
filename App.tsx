
import React from 'react';
import { PasswordGenerator } from './components/PasswordGenerator';
import { PasswordSalter } from './components/PasswordSalter';
import { PasswordStrengthTester } from './components/PasswordStrengthTester';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 font-sans">
      <header className="text-center mb-10 md:mb-12 w-full max-w-5xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-2">
          Password Toolkit
        </h1>
        <p className="text-slate-400 text-md sm:text-lg">Secure your digital life: Salt, Generate & Analyze Passwords</p>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <PasswordGenerator />
        <PasswordSalter />
      </main>

      <div className="w-full max-w-3xl mt-10 md:mt-12">
        <PasswordStrengthTester />
      </div>

      <footer className="mt-12 md:mt-16 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Password Toolkit. For demonstration purposes.</p>
      </footer>
    </div>
  );
};

export default App;
