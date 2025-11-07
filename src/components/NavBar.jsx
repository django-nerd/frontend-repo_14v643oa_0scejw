import { useState } from 'react';
import { Home, ClipboardList, Boxes, Building2, FileSpreadsheet } from 'lucide-react';

export default function NavBar({ onNavigate }) {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'workflow', label: 'Workflow', icon: ClipboardList },
    { id: 'manage', label: 'Profiles', icon: Boxes },
    { id: 'reports', label: 'Reports', icon: FileSpreadsheet },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <Building2 className="w-5 h-5 text-indigo-600" />
          <span>FlowTrack</span>
        </div>
        <nav className="flex items-center gap-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActive(id);
                onNavigate?.(id);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                active === id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
