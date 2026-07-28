const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  const faculty = await prisma.faculty.create({
    data: { name: "Faculty of Computing" },
  });

  const department = await prisma.department.create({
    data: { name: "Computer Science", facultyId: faculty.id },
  });

  await prisma.course.createMany({
    data: [
      { code: "CSC301", title: "Data Structures", units: 3, semester: "SECOND", departmentId: department.id },
      { code: "CSC305", title: "Operating Systems", units: 3, semester: "SECOND", departmentId: department.id },
      { code: "CSC310", title: "Database Systems", units: 2, semester: "SECOND", departmentId: department.id },
    ],
  });

  const passwordHash = await bcrypt.hash("changeme123", 10);

  const adminUser = await prisma.user.create({
    data: {
      email: "admin@sdug.edu.ng",
      passwordHash,
      role: "ADMIN",
      admin: { create: { fullName: "Portal Admin" } },
    },
  });

  console.log("Seeded:", { faculty: faculty.name, department: department.name, adminEmail: adminUser.email });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
