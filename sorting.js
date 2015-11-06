function bubbleSort(arr){
    if(!arr.every(function(itemInQuestion){
        return typeof itemInQuestion === 'number';
    })) throw new Error("Error");
    
    //if(arr.length === 1) return arr;
    var finalArray = [];
    var counter = 0;
    while(arr.length){
        arr = sortOnce(arr);
        finalArray.unshift(arr.pop());
    }
    return finalArray;
}

function sortOnce(arr) {
    var temp = [];
    while(arr.length){
        var in0 = arr[0];
        var in1 = arr[1];
        if(in0 > in1) {
            arr[0] = in1;
            arr[1] = in0;
        }
        temp.push(arr.shift());
    }
    return temp;
}

function merge(arr1, arr2) {
    
    var finalArray = [];

    while(arr1.length > 0 && arr2.length > 0) {
        var num1 = arr1[0];
        var num2 = arr2[0];

        if (num1 < num2) finalArray.push(arr1.shift());
        else finalArray.push(arr2.shift());
    }
    if (arr1.length === 0) finalArray = finalArray.concat(arr2);
    else finalArray = finalArray.concat(arr1);

    return finalArray;
}

function split(arr) {
    var leftArr = [];
    var rightArr = [];

    var center = Math.floor((arr.length-1)/2);

    leftArr = arr.slice(0, center+1);
    rightArr = arr.slice(center+1);

    return [leftArr, rightArr];
}

function mergeSort(arr) {
    if(arr.length === 1) return arr;
    else {
        arr = split(arr);
        return merge(mergeSort(arr[0]), mergeSort(arr[1]));
    }
}