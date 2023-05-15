const courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    }, {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    }, {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    }, {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    }, {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
]

// When does the PROG200 course start?
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?

function findPROG200 (course) {
    return course.CourseId === 'PROG200';
}
const prog200 = courses.find(findPROG200)
console.log('Prog200 starts', prog200.startDate);



function findPROJ500(course) {
    return course.CourseId === 'PROJ500';
}
const proj500 = courses.find( findPROJ500 )
console.log('Title of PROJ500:', proj500.Title);


 
function isUnder50USD(course) {
    return courses.Fee <= 50;
}
const coursesUnder50 = courses.filter(isUnder50USD);
 console.log('courses under $50');
 for (const course of coursesUnder50) {
    console.log('', course.Fee, course.Title);
 }

 function classesInClassroom1(course) {
    return course.Location === 'Classroom 1';
 }
const allClassesInClassroom = courses.filter(classesInClassroom1);
console.log('Courses in Classroom 1');
for (let i=0; i<allClassesInClassroom; i++) {
    const course = allClassesInClassroom[i];
    console.log(' ', course.Title);
}




//function courseStart (courseIdValue) {
    //if (courseIdValue === PROG200) {
      //  return true;
    //}
    //else {
  //      return false;
    //}
//}
//let StartDate = courses.StartDate;
// let classStartDate = courses.find(StartDate);
// console.log (classStartDate);