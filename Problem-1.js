{
    //function of sum array
    function SumArray(numbers) {
        return numbers.reduce(function (x, y) { return x + y; }, 0);
    }
    // Sample Input:
    console.log(SumArray([1, 2, 3, 4, 5]));
}
