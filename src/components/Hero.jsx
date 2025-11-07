import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Workflow Monitoring for Job Works</h1>
            <p className="mt-3 text-gray-700">
              Track procurement and delivery of workpieces, manage customers and workpiece profiles, and export rich reports in Excel or PDF.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800">
              <li className="bg-white/70 border rounded-lg px-3 py-2">Step 1: Record procurement</li>
              <li className="bg-white/70 border rounded-lg px-3 py-2">Step 2: Record delivery</li>
              <li className="bg-white/70 border rounded-lg px-3 py-2">Manage customers & workpieces</li>
              <li className="bg-white/70 border rounded-lg px-3 py-2">Generate Excel/PDF reports</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
}
