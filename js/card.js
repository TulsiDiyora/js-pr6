 let tbody = document.getElementById('tbody');

let students = [{
    sr : 1,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 19,
    contact : 8799412827,
},{
    sr : 2,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
},{
    sr : 3,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 4,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
},{
    sr : 5,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 6,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
},{
    sr : 7,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 8,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
    contact : 8799412827,
},{
    sr : 9,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 10,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
    contact : 8799412827,
},{
    sr : 11,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 12,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
},{
    sr : 13,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 14,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
},{
    sr : 15,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 16,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
},{
    sr : 17,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 18,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
},{
    sr : 19,
    fname : "Tulsi",
    lname : "Diyora",
    email : "tulis112@gmail.com",
    age : 18,
    contact : 8799412827,
},{
    sr : 20,
    fname : "Ritu",
    lname : "Patel",
    email : "ritu23@gmail.com",
    age : 18,
    contact : 6778412827,
    contact : 8799412827,
}]


students.forEach((element) =>{
    tbody.innerHTML += `<tr><td>${element.sr} </td> <td> ${element.fname}</td> <td> ${element.lname}</td>  <td> ${element.email}</td> <td> ${element.age}</td> <td> ${element.contact}</td></tr>`;
});
