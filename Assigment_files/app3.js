function merge_array(array1, array2) {
    //const result_array = [];
    const arr = array1.concat(array2);
    let len = arr.length;
    
  console.log(arr);  
// remove all duplicates element here
let unique = arr.filter(function (item, index) {
  return arr.indexOf(item) === index;
});
console.log(unique);

   //return result_array;
   for(var i=0; i<arr.length-1;i++){
    for(var j=1+i; j<arr.length-1;j++){
      if(arr[i]==arr[j]){
        console.log("duplicate" + arr[i]);
      }
    }

   }
}


const array1 = [1, 2, 3,4,];

const array2 = [2, 30, 1,4];

merge_array(array1, array2);
