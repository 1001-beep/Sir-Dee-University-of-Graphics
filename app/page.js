import Link from "next/link";

const roles = [
  { key: "student", label: "Student", desc: "Results, fees, announcements", href: "/student" },
  { key: "staff", label: "Staff", desc: "Upload results, view your department", href: "/staff" },
  { key: "admin", label: "Admin", desc: "Full oversight of the portal", href: "/admin" },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-2">
            2025/2026 Session · Second Semester
          </p>
          <h1 className="font-display text-4xl font-semibold text-navy">
            SDUG Portal
          </h1>
          <p className="text-slate mt-1 text-xs tracking-wide uppercase">
            Sir Dee University of Graphics
          </p>
          <p className="text-slate mt-2 text-sm">
            Sign in to view results, fees, and announcements.
          </p>
        </div>

        <form className="bg-white border border-navy/10 rounded-card p-6 space-y-4 shadow-sm">
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">
              Email or Matric Number
            </label>
            <input
              type="text"
              placeholder="e.g. CSC/2022/0143"
              className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full border border-navy/15 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-navy text-parchment font-medium py-2.5 rounded hover:bg-indigo transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-xs text-slate mt-6">
          Demo shells (no auth wired yet) — pick a role to preview:
        </p>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {roles.map((r) => (
            <Link
              key={r.key}
              href={r.href}
              className="text-center border border-navy/10 rounded-card py-2 px-1 text-xs font-medium text-navy hover:border-gold hover:text-gold transition-colors bg-white"
            >
              {r.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
    }
