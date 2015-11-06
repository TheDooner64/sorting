describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect(bubbleSort([])).toEqual([]);
    });
    it('handles an arry with one item', function(){
        expect(bubbleSort([10])).toEqual([10]);
    });
    xit('and throws an error if items are not numbers', function(){
        expect(bubbleSort(["banana"])).toEqual("Error");
        expect(bubbleSort([1,2,"three",4])).toEqual("Error");
        expect(bubbleSort([1,2,"3",4])).toEqual("Error");
    });
    it('correctly sorts an array of number', function(){
        expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
        expect(bubbleSort([11,34,35,3,1,7,6,54,36,8,23])).toEqual([1,3,6,7,8,11,23,34,35,36,54]);
    });
    it('handles negative and repeated numbers', function(){
        expect(bubbleSort([4,-2,3,-9])).toEqual([-9,-2,3,4]);
        expect(bubbleSort([5,3,10,2,3,10])).toEqual([2,3,3,5,10,10]);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([2, 3, 6], [1, 4, 9])).toEqual([1, 2, 3, 4, 6, 9]);
    });

    it('is able to split an array into two separate arrays', function(){
        expect(split([2, 3, 6, 1, 4, 9])).toEqual([[2, 3, 6], [1, 4, 9]]);
    });

    it('takes an array and returns a sorted array using the merge sort algorithm', function(){
        expect(mergeSort([2, 3, 6, 1, 4, 9, 5, 8])).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
    });
});