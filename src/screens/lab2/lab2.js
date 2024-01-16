const class1 = [
    {
        mssv: "PS0000",
        name: "Nguyen Van A",
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: "pass",
    },
    {
        mssv: "PS0001",
        name: "Nguyen Van B",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "pass",
    }
];
const class2 = [
    {
        mssv: "PS0002",
        name: "Nguyen Van C",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "failed",
    },
    {
        mssv: "PS0003",
        name: "Nguyen Van D",
        avgPoint: 10,
        avgTraningPoint: 10,
        status: "pass",
    },
    {
        mssv: "PS0004",
        name: "Nguyen Van E",
        avgPoint: 10,
        avgTraningPoint: 2,
        status: "pass",
    }
];
const sortedByAvgPoint = [...class1, ...class2].sort((a,b) => b.avgPoint = a.avgPoint);
console.log("Danh sach sinh vien theo avgPoint tu cao xuong thap:");
console.log(sortedByAvgPoint);
const sortedByAvgTrangPoint = [...class1, ...class2].sort((a,b) => b.avgTraningPoint = a.avgTraningPoint);
console.log("Danh sach sinh vien");
console.log(sortedByAvgTrangPoint);
const allStudents = [...class1, ...class2];
const maxAvgPointStudent = allStudents.reduce((max, student) => (student.avgPoint > max.avgPoint ? student : max));
const maxAvgTraningOintStudent = allStudents.reduce((max, student) => (student.avgTraningPoint > max.avgTraningPoint ? student : max));
console.log("thong tin sinh vien co avgPoint cao nhat: ");
console.log(maxAvgPointStudent);
console.log("thong tin sinh vien co avgTraningPoint cao nhat: ");
console.log(maxAvgTraningOintStudent);