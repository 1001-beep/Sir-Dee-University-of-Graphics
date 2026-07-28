import { departmentStudents } from "@/lib/mock-data";

export default function StaffDashboard() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <header className="mb-8">
        <p className="font-mono text-xs tracking-[0.15em] text-gold uppercase">SDUG · Staff · Computer Science Dept.</p>
        <h1 className="font-display text-2xl font-semibold text-navy">Dr. Chinedu Eze</h1>
      </header>

      {/* Upload result */}
      <section className="mb-10">
        <h2 className="font-display text-lg text-navy mb-3">Upload a Result</h2>
        <form className="bg-white border border-navy/10 rounded-card p-5 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Student (Matric No.)</label>
            <select className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm">
              {departmentStudents.map((s) => (
                <option key={s.matricNumber}>{s.matricNumber} — {s.fullName}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Course Code</label>
            <input className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm" placeholder="CSC301" />
          </div>
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Score (0–100)</label>
            <input type="number" className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm" placeholder="78" />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-medium text-slate uppercase tracking-wide">Comment</label>
            <input className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm" placeholder="Excellent problem-solving." />
          </div>
          <button
            type="submit"
            className="col-span-2 bg-navy text-parchment font-medium py-2.5 rounded hover:bg-indigo transition-colors"
          >
            Save Result
          </button>
        </form>
      </section>

      {/* Roster */}
      <section>
        <h2 className="font-display text-lg text-navy mb-3">Department Students</h2>
        <div className="bg-white border border-navy/10 rounded-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-parchment text-xs uppercase tracking-wide">
                <th className="text-left px-4 py-2 font-medium">Matric No.</th>
                <th className="text-left px-4 py-2 font-medium">Name</th>
                <th className="text-left px-4 py-2 font-medium">Level</th>
              </tr>
            </thead>
            <tbody>
              {departmentStudents.map((s) => (
                <tr key={s.matricNumber} className="border-t border-navy/5">
                  <td className="px-4 py-2.5 font-mono text-xs text-slate">{s.matricNumber}</td>
                  <td className="px-4 py-2.5 text-navy">{s.fullName}</td>
                  <td className="px-4 py-2.5 font-mono">{s.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
        }
