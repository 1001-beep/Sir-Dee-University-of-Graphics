// Placeholder data shaped exactly like the Prisma schema.
// Swap these functions for real Prisma queries once DATABASE_URL is connected.

export const student = {
  fullName: "Amina Bello",
  matricNumber: "CSC/2022/0143",
  level: 300,
  department: "Computer Science",
  faculty: "Faculty of Computing",
  session: "2025/2026",
};

export const results = [
  { course: "CSC301", title: "Data Structures", units: 3, score: 78, grade: "A", gradePoint: 5.0, comment: "Excellent problem-solving." },
  { course: "CSC305", title: "Operating Systems", units: 3, score: 64, grade: "B", gradePoint: 4.0, comment: "Good grasp of concurrency." },
  { course: "CSC310", title: "Database Systems", units: 2, score: 71, grade: "A", gradePoint: 5.0, comment: "Strong schema design work." },
  { course: "GST301", title: "Entrepreneurship", units: 2, score: 55, grade: "C", gradePoint: 3.0, comment: "Attend more tutorials." },
];

export function calculateGPA(courseResults) {
  const totalUnits = courseResults.reduce((sum, r) => sum + r.units, 0);
  const totalPoints = courseResults.reduce((sum, r) => sum + r.units * r.gradePoint, 0);
  return totalUnits === 0 ? 0 : (totalPoints / totalUnits).toFixed(2);
}

export const cgpa = 4.31;

export const fees = {
  session: "2025/2026",
  semester: "Second",
  amountDue: 185000,
  amountPaid: 185000,
};

export const announcements = [
  { title: "Second Semester Exam Timetable Released", body: "Check the notice board for your department's schedule.", date: "2026-07-20" },
  { title: "Library Extended Hours", body: "Open till 10pm during revision week.", date: "2026-07-18" },
];

// Staff-facing: students in staff's own department
export const departmentStudents = [
  { matricNumber: "CSC/2022/0143", fullName: "Amina Bello", level: 300 },
  { matricNumber: "CSC/2022/0198", fullName: "Tunde Okafor", level: 300 },
  { matricNumber: "CSC/2023/0056", fullName: "Ifeoma Chukwu", level: 200 },
];

// Admin-facing: quick overview across departments
export const departmentsOverview = [
  { name: "Computer Science", students: 412, staff: 18 },
  { name: "Accounting", students: 530, staff: 22 },
  { name: "Mass Communication", students: 275, staff: 14 },
];
