{
    function removeDuplicates(numbers) {
        return numbers.filter(function (x, y) { return numbers.indexOf(x) === y; });
    }
    console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5]));
}
