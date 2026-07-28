import { student, results, calculateGPA, cgpa, fees, announcements } from "@/lib/mock-data";

export default function StudentDashboard() {
  const gpa = calculateGPA(results);
  const feeBalance = fees.amountDue - fees.amountPaid;

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <header className="flex items-start justify-between mb-8">
        <div>
          <p className="font-mono text-xs tracking-[0.15em] text-gold uppercase">SDUG · {student.faculty}</p>
          <h1 className="font-display text-2xl font-semibold text-navy">{student.fullName}</h1>
          <p className="text-slate text-sm">{student.department} · {student.level} Level · {student.matricNumber}</p>
        </div>
        <div className="w-16 h-16 rounded-full ledger-seal flex items-center justify-center text-navy font-display font-semibold text-lg shrink-0">
          {cgpa}
        </div>
      </header>

      {/* Results Ledger */}
      <section className="mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-display text-lg text-navy">Result Ledger — {fees.session}, {fees.semester} Semester</h2>
          <span className="font-mono text-sm text-navy">GPA: {gpa}</span>
        </div>
        <div className="bg-white border border-navy/10 rounded-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-parchment text-xs uppercase tracking-wide">
                <th className="text-left px-4 py-2 font-medium">Course</th>
                <th className="text-left px-4 py-2 font-medium">Units</th>
                <th className="text-left px-4 py-2 font-medium">Score</th>
                <th className="text-left px-4 py-2 font-medium">Grade</th>
                <th className="text-left px-4 py-2 font-medium">Comment</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.course} className="border-t border-navy/5">
                  <td className="px-4 py-2.5">
                    <span className="font-mono text-xs text-slate">{r.course}</span>
                    <p className="text-navy">{r.title}</p>
                  </td>
                  <td className="px-4 py-2.5 font-mono">{r.units}</td>
                  <td className="px-4 py-2.5 font-mono">{r.score}</td>
                  <td className="px-4 py-2.5 font-mono font-semibold text-navy">{r.grade}</td>
                  <td className="px-4 py-2.5 text-slate text-xs">{r.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Fees */}
      <section className="mb-8">
        <h2 className="font-display text-lg text-navy mb-3">School Fees</h2>
        <div className="bg-white border border-navy/10 rounded-card p-4 flex items-center justify-between">
          <div>
            <p className="text-slate text-xs uppercase tracking-wide">{fees.session} · {fees.semester} Semester</p>
            <p className="font-mono text-navy text-lg mt-1">₦{fees.amountDue.toLocaleString()}</p>
          </div>
          <span className={`font-mono text-xs px-3 py-1.5 rounded-full ${feeBalance === 0 ? "bg-paid/10 text-paid" : "bg-due/10 text-due"}`}>
            {feeBalance === 0 ? "Fully Paid" : `₦${feeBalance.toLocaleString()} due`}
          </span>
        </div>
      </section>

      {/* Announcements */}
      <section>
        <h2 className="font-display text-lg text-navy mb-3">Announcements</h2>
        <div className="space-y-2">
          {announcements.map((a) => (
            <div key={a.title} className="bg-white border border-navy/10 rounded-card p-4">
              <div className="flex items-baseline justify-between">
                <h3 className="text-navy font-medium text-sm">{a.title}</h3>
                <span className="font-mono text-xs text-slate">{a.date}</span>
              </div>
              <p className="text-slate text-sm mt-1">{a.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
  }
