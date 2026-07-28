# SDUG Portal — Sir Dee University of Graphics

Student, staff, and admin portal — results, fees, and announcements.

## What's here (Stage 1)

- `/` — login screen (UI only, no auth wired yet) with quick links to preview each dashboard
- `/student` — result ledger with auto-calculated GPA + CGPA seal, fee status, announcements
- `/staff` — department roster + a result-upload form (department-scoped)
- `/admin` — cross-department overview + fee-structure management form
- `prisma/schema.prisma` — full data model: Faculty, Department, User (Student/Staff/Admin), Course, Result, Fee, StudentFee, Announcement
- `lib/mock-data.js` — placeholder data so the dashboards render before a database is connected

Everything currently renders from mock data — no real login, no database writes yet. This is the visual/structural shell to react to before we wire up the real thing.

## Running it locally

```bash
npm install
npm run dev
