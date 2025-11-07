import { useEffect, useMemo, useState } from 'react';
import { Calendar, ArrowRightLeft, User, Package, StickyNote } from 'lucide-react';

const Input = ({ label, children }) => (
  <label className="block">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <div className="mt-1">{children}</div>
  </label>
);

export default function WorkflowForm() {
  const [mode, setMode] = useState('procured'); // 'procured' | 'delivered'

  // Mock data for UI demo; in full app these come from backend
  const customers = useMemo(() => [
    { id: 'CUST001', company: 'Acme Industries', contact: 'Ravi' },
    { id: 'CUST002', company: 'Nova Tools', contact: 'Meera' },
  ], []);

  const workpieces = useMemo(() => [
    { id: 'WP-AX12', name: 'Axle Rod', unit: 'pcs', process: 'Turning' },
    { id: 'WP-BR90', name: 'Bracket 90mm', unit: 'pcs', process: 'Milling' },
    { id: 'WP-PL01', name: 'Plastic Cap', unit: 'kg', process: 'Moulding' },
  ], []);

  const [form, setForm] = useState({
    customerId: '',
    customerText: '',
    workpieceId: '',
    workpieceText: '',
    quantity: '',
    date: new Date().toISOString().slice(0, 10),
    note: '',
  });

  const unit = useMemo(() => workpieces.find(w => w.id === form.workpieceId)?.unit || '', [form.workpieceId, workpieces]);

  useEffect(() => {
    // Reset quantity when workpiece changes to avoid unit mismatch
    setForm(f => ({ ...f, quantity: '' }));
  }, [form.workpieceId]);

  const submit = (e) => {
    e.preventDefault();
    // For now, just show an alert to illustrate the payload
    const payload = { ...form, mode, unit };
    alert(`Saved ${mode} entry:\n` + JSON.stringify(payload, null, 2));
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Record {mode === 'procured' ? 'Procurement' : 'Delivery'}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setMode('procured')}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border ${mode==='procured' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              <ArrowRightLeft className="w-4 h-4" /> Procured
            </button>
            <button
              onClick={() => setMode('delivered')}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border ${mode==='delivered' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
            >
              <ArrowRightLeft className="w-4 h-4 rotate-180" /> Delivered
            </button>
          </div>
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border rounded-xl p-6 shadow-sm">
          <Input label={`${mode === 'procured' ? 'From' : 'To'} customer`}>
            <div className="flex gap-2">
              <select
                value={form.customerId}
                onChange={(e) => setForm({ ...form, customerId: e.target.value })}
                className="w-1/2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select customer</option>
                {customers.map(c => (
                  <option key={c.id} value={c.id}>{c.company} ({c.id})</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Or type new customer"
                value={form.customerText}
                onChange={(e) => setForm({ ...form, customerText: e.target.value })}
                className="flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </Input>

          <Input label="Workpiece">
            <div className="flex gap-2">
              <select
                value={form.workpieceId}
                onChange={(e) => setForm({ ...form, workpieceId: e.target.value })}
                className="w-1/2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select workpiece</option>
                {workpieces.map(w => (
                  <option key={w.id} value={w.id}>{w.name} ({w.id})</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Or type new workpiece"
                value={form.workpieceText}
                onChange={(e) => setForm({ ...form, workpieceText: e.target.value })}
                className="flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Unit auto-fills from selected workpiece ID.</p>
          </Input>

          <Input label={`Quantity${unit ? ` (${unit})` : ''}`}>
            <input
              type="number"
              min="0"
              step="any"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </Input>

          <Input label="Date">
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full pl-9 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </Input>

          <div className="md:col-span-2">
            <Input label="Optional note">
              <div className="relative">
                <StickyNote className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <textarea
                  rows={3}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="Add any extra details..."
                  className="w-full pl-9 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </Input>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
              <Package className="w-4 h-4" />
              Save entry
            </button>
          </div>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <p className="font-medium">User journey</p>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Login with name and 4‑digit passcode</li>
            <li>Record procurement: choose customer, workpiece, enter quantity, pick date (defaults to today)</li>
            <li>Record delivery with similar flow and notes</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
