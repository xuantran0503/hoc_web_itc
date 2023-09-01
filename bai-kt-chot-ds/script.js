var persons = [
    {
        fullName: 'Tran Anh Khoa',
        age: 18,
        Address: 'Ha Noi'
    },
    {
        fullName: 'Nguyen Quang Hoc',
        age: 21,
        Address: 'Bac Giang'
    }, 
    {
        fullName: 'Vu Thanh Dat',
        age: 20,
        Address: 'Thai Binh'
    },
    {
        fullName: 'Dang Phuc Linh',
        age: 19,
        Address: 'Ha Noi'
    },
];


persons.sort((a, b) => a.age - b.age);


const peopleInHaNoi = persons.filter(person => person.Address === 'Ha Noi');


persons.forEach(person => person.fullName = person.fullName.toUpperCase());

console.log(persons);