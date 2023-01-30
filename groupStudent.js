const students = [
    { name: "Mike", age: 10,stateOfOrigin:"Niger" },
    { name: "Max", age: 12,stateOfOrigin:"Oyo" },
    { name: "Jane", age: 15,stateOfOrigin:"Abia" },
    { name: "Adora", age: 13,stateOfOrigin:"Benue" },
    { name: "Aishat", age: 14, stateOfOrigin: "Rivers" },
    { name: "Abu", age: 15,stateOfOrigin:"Adamawa" },
    { name: "Abraham", age: 14,stateOfOrigin:"Adamawa" },
    { name: "Tunmise", age: 15,stateOfOrigin:"Oyo" },
  ];

  const groupBy = (studentData,groupByProperty) => {
    return studentData.reduce((accumulated,currentObj)=>{
        const key = currentObj[groupByProperty]
        const currentGroup = accumulated[key] ?? []

        return {...accumulated,[key]:[...currentGroup,currentObj]}
    },{})
  }

  const groupedStudentByState = groupBy(students,"stateOfOrigin")

  console.log(groupedStudentByState)