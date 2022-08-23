function getIndexToIns(arr, num) {
    // return num;
    let array = [];
    for(let i =0; i< arr.length; i++)
    {   //arr[i] > array
        if(array[i] > num)
        {
          return num;
        }
        return array;
    }
  }  // not  
  
  console.log(getIndexToIns([40, 60], 50));