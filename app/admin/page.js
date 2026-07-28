import { departmentsOverview } from "@/lib/mock-data";

export default function AdminDashboard() {
  const totalStudents = departmentsOverview.reduce((s, d) => s + d.students, 0);
  const totalStaff = departmentsOverview.reduce((s, d) => s + d.staff, 0);

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <header className="mb-8">
        <p className="font-mono text-xs tracking-[0.15em] text-gold uppercase">SDUG · Admin · Full Access</p>
        <h1 className="font-display text-2xl font-semibold text-navy">Portal Overview</h1>
      </header>

      <section className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-white border border-navy/10 rounded-card p-5">
          <p className="text-slate text-xs uppercase tracking-wide">Total Students</p>
          <p className="font-display text-3xl text-navy mt-1">{totalStudents}</p>
        </div>
        <div className="bg-white border border-navy/10 rounded-card p-5">
          <p className="text-slate text-xs uppercase tracking-wide">Total Staff</p>
          <p className="font-display text-3xl text-navy mt-1">{totalStaff}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-lg text-navy mb-3">Departments</h2>
        <div className="bg-white border border-navy/10 rounded-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-parchment text-xs uppercase tracking-wide">
                <th className="text-left px-4 py-2 font-medium">Department</th>
                <th className="text-left px-4 py-2 font-medium">Students</th>
                <th className="text-left px-4 py-2 font-medium">Staff</th>
              </tr>
            </thead>
            <tbody>
              {departmentsOverview.map((d) => (
                <tr key={d.name} className="border-t border-navy/5">
                  <td className="px-4 py-2.5 text-navy">{d.name}</td>
                  <td className="px-4 py-2.5 font-mono">{d.students}</td>
                  <td className="px-4 py-2.5 font-mono">{d.staff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg text-navy mb-3">Manage Fees</h2>
        <form className="bg-white border border-navy/10 rounded-card p-5 grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Department</label>
            <select className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm">
              {departmentsOverview.map((d) => (
                <option key={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Level</label>
            <select className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm">
              <option>100L</option><option>200L</option><option>300L</option><option>400L</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Session</label>
            <input className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm" placeholder="2025/2026" />
          </div>
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Amount (₦)</label>
            <input type="number" className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm" placeholder="185000" />
          </div>
          <button
            type="submit"
            className="col-span-2 bg-navy text-parchment font-medium py-2.5 rounded hover:bg-indigo transition-colors"
          >
            Save Fee Structure
          </button>
        </form>
      </section>
    </main>
  );
    }
