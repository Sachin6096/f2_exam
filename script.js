/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((obj) => {

    if(obj.marks > 50)
    {
      console.log(obj);
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((obj) => {
      if(obj.marks > 50)
      {
        console.log(obj);
      }
  });
 
}

function addData() {
  //Write your code here, just console.log
  let data = {id:4,name:"susan",age:"20",marks:45}
  arr.push(data)
  console.log(data)
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let newArray = []
  arr.forEach((obj) => {
    if(obj.marks >= 50)
    {
      newArray.push(obj);
    }
  });

  arr = newArray
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    {id: 5, name: "sachin", age: "20", marks: 89},
    {id: 6, name: "sonia", age: "18", marks: 70},
    {id: 7, name: "sandeep", age: "19", marks: 52},
  ];

  arr = arr.concat(arr2)
  console.log(arr)
}
