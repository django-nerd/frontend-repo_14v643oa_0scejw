import { Users, Settings2, PackageSearch, FileOutput } from 'lucide-react';

export default function InfoSections() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={Users}
            title="Customers"
            items={[
              'Create and manage customer profiles',
              'Each profile: company, unique ID, contact person & number',
              'Use profiles in dropdowns during procurement/delivery',
            ]}
          />
          <Card
            icon={PackageSearch}
            title="Workpieces"
            items={[
              'Define name, default unit, and process',
              'Unit auto-fills when selected in forms',
              'Keep inventory consistent across steps',
            ]}
          />
          <Card
            icon={FileOutput}
            title="Reports"
            items={[
              'Export Excel (default) or PDF',
              'Filters: customer, workpiece, date range',
              'Toggle between procured or delivered',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, items }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
