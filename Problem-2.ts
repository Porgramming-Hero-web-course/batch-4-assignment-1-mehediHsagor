{

    function removeDuplicates (numbers:number[]): number[]{


        return numbers.filter((x , y)=> numbers.indexOf(x)===y)
    }
    console.log(removeDuplicates([1,2,2,3,3,4,4,5]))
}