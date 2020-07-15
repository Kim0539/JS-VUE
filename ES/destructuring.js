// destructuring(비구조)
// data structure => Object, Array
// 비구조화 => Object, Array를 해체한다.

const student = {
    name: '김ssafy',
    course: 'ssafy 3rd',
    email: 'ssafy@ssafy.com',
    phone: '01012341234'
}

// 방법 1. => key와 변수명이 같아야 한다.
// const name = student.name
// const course = student.course
// const email = student.email
// const phone = student.phone

// 방법 2. => key와 변수명이 같아야 한다.
// const { name } = student
// const { course } = student
// const { email } = student
// const { phone } = student

// 방법 3. => key와 변수명이 같아야 한다.
const { name, course, email, phone } = student
console.log(name, course, email, phone)

// 실전
function getStudentInfo1(student) {
    console.log(`Hi, my name is ${student.name}, email is ${student.email}`)
}

// 비구조화
function getStudentInfo2({name, course, email, phone}) {
    console.log(`Hi, my name is ${name}, email is ${email}`)
}

// Why? 이렇게 하면 위험하다. 순서를 다 맞춰줘야하기 때문에. 그래서 그냥 객체를 넘겨준다.
function saveStudent1(name, course, email, phone, id, major){

}
saveStudent('김싸피', '싸피3기', '@ssafy.com')

// 순서와 상관없이 이름만 맞으면 돼!
function saveStudent2({name, course, email, phone}){ //객체에 4쌍이 k-v 페어가 있지만, name&course만 꺼낸다.
    return `${name}, ${course}`
}

saveStudent2('김싸피', 'ssafy3rd', 'a@ssafy.cm', '01012341234') // X
saveStudent2({
    name: '김ssafy',
    course: 'ssafy 3rd',
    email: 'ssafy@ssafy.com',
    phone: '01012341234'
})  // O