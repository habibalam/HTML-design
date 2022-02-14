/*var per=prompt('Enter somethings','');
if(per!=''){
   alert('Thank you ');
}
 else{
    alert('cant enter anythings');
 }*/


 const arr=[10,15,25,30];
 for(let i=0; i <arr.length; i++){
     console.log(arr[i]);
 }


 for(let el of arr){
     console.log(el);
 }

 arr.push(233);
 console.log('array is updated',arr);

 arr.push();
 console.log('update after pop:',arr);