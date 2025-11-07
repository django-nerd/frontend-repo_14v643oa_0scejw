import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import WorkflowForm from './components/WorkflowForm';
import InfoSections from './components/InfoSections';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar onNavigate={setView} />
      <main className="pt-16">
        <Hero />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-sm">
            <p>
              This is a product preview for a workflow monitoring app tailored for job-work firms. It demonstrates the key flows you described: procurement, delivery, profile management, and reporting.
            </p>
          </div>
        </div>

        <WorkflowForm />
        <InfoSections />

        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FlowTrack — Efficient job-work monitoring.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
