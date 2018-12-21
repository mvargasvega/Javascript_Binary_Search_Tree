


array = [0,2,4,6,8,10,12,14,16,18,20];
number = 8;



function binarySearch(array, number){

  let mode = Math.floor(array.length / 2);

  console.log("We are trying to find " + number);
  // 5 ==> 10
  // new array is either 0 ---> 5 or 6 --->11
  console.log("Current value " + array[mode]);
  console.log("Our mode is " + mode)



    if (array[mode] > number){

      console.log("we are going to check the left side")
      console.log("Old Mode is "+ mode);

      mode = Math.floor( (mode / 2) - 1);
      console.log("Our new mode is " + mode);
      console.log("Current value " + array[mode]);

    }else if (array[mode] < number){
      console.log('we are going to check ther righ side')
    }else{
      console.log("None of the numbers match")
    }

}

binarySearch(array,number)


  // find the length of array and then either do the mode of that number and you have found the center
  // Compare the ceneter value to the number we have been asked to find
  // if the center number is higher, then if our number is less then or equal to the medium
  //  we will search to the left
  // if it is greater to or equal we will search to the right

  // then those steps will be repeated again
