let employee={
    empname:"scott",
    empid:1023,
    job:"engineer",
    basicsal:50000,
    bonus: function(){
        return((this.basicsal*10)/100);

    }

};

//console.log(employee["empname"]);
console.log(employee.bonus());//5000

// constructor function
function Participant(name,age,qualification,height){
    this.name=name;
    this.age=age;
    this.qualification=qualification;
    this.height=height;
}

const candidate=new Participant("tanmay","24",["B,A","B.Ed"],"166");
console.log(candidate.name);

