const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

  //Task 1

function names(arr){
    return arr.map(({name})=> {return name});
}
console.log(names(scores));

//task 2

function passed(data){
    return data.filter(({marks})=>(marks>40))
}
console.log(passed(scores));

//task 3

function failed(data){
  return data.filter(({marks})=>marks<40).map(({name})=>name)
}

console.log(failed(scores));

//task 4
function average(data){
  return (data.map(({marks})=>marks).reduce((sum,each)=>sum+each,0))/data.length;
}
console.log("average:",average(scores));

//task 5
 function largest(data){
   let largest=data.map(({marks})=>marks).reduce((num1,num2)=>num1>num2?num1:num2);
   return data.filter(({marks})=>marks===largest).map(({name})=>name);
 }
console.log(largest(scores));
///////////////////////////////////////////////////////////////////////////////////////////////
//task 6
//intersection
function intersection_code(...data){
  var length=data.length;
  var intersected=[];
  if(length===1)return null;
  for(let i in data[0]){
   for(let j in data[1]){
     if(data[0][i]===data[1][j])intersected.push(data[0][i]);
   }
 }
var final_output=[];
 for(let i=2;i<length;i++){
   for(let j in intersected){
     final_output.push((data[i].filter((element)=>element===intersected[j])).pop())      
   }
   intersected=final_output;
 }
 var result=intersected.filter((elements,index)=>intersected.indexOf(elements)===index);
 return result;
}

a=[1,2,3,4,5,6,2];
b=[2,8,9,0,5,6,2];
c=[7,8,2,10,5,6];
d=[1,2,3,4,5,6,2];
console.log(intersection_code(a,b,c,d));

//////task 6.2
//uniq
function myuniq(data){
  return data.filter((element,index)=>data.indexOf(element)===index);
}
console.log(myuniq(b));

////task 6.3
//without
function mywithout(data,...out){
  var final_data;
  for(let i in out){
    final_data=(data.filter((element)=>element!==out[i]));
    data=final_data;
  }
  return final_data
}

console.log(mywithout(a,4,5,6));

///task 6.4
//groupby
function mygroupby(data,operation){
    var final={};
     var each,arr;
  if(typeof(operation)=="function"){
    var data_operated=data.map((element)=>operation(element));
    data_operated=myuniq(data_operated);

    for(let i=0;i<data_operated.length;i++){
      each=data_operated[i];
      arr=(data.filter((element)=>operation(element)==data_operated[i]));
      final[each]=arr;  
    }
     }else { 
      var data_operated=data.map((element)=>(element[operation]));
      data_operated=myuniq(data_operated);
      
      for(let i=0;i<data_operated.length;i++){
        each=data_operated[i];
        arr=(data.filter((element)=>(element[operation])==data_operated[i]));
        final[each]=arr;  
      }
     }
     return final;
}

x=[4.2,3.5,6.2,6.3];
y=["one","two","four"]
console.log(mygroupby(x,Math.floor));
console.log(mygroupby(y,'length'));




