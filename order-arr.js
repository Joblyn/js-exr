// Function which rearranges array into ordered array
const answer = (array) => {
    // arrange strings in array 
    for(let i=0; i<array.length; i++){
        if(typeof(array[i]) === "string"){
            str = [];
            str.push(array[i]);
    }}
    array.unshift(str);
    for(let i=0; i<array.length; i++){
        if(typeof(array[i]) === "string"){
            array.splice(i,1) 
        }
    }
     // sort the array into newArray
    const newArray = [];
    let sortedArray = array.sort((a, b) => a - b);
    // iterate through array by twos joining alike numbers  
    for (let i = 0; i < sortedArray.length; i += 2) {
        let first = sortedArray[i];
        let second = sortedArray[i + 1];
        if (first === second) {
            let set = [];
            set.push(first, second);
            newArray.push(set);
        }
        else { newArray.push(first, second); }
    };
    // iterate through newArray by twos joining alike item  
    const rearrange = (Arr) => {
        let finalArray = [];
        for (var i = 0; i < Arr.length; i += 2) {
            let first = Arr[i];
            let second = Arr[i + 1];
            if (Array.isArray(first) === true && Array.isArray(second) === true) {
                let comp = () => {
                    let newSet = [];
                    newSet.push(...first, ...second);
                    finalArray.push(newSet)
                }
                first[1] === second[0] ? comp() : finalArray.push(first, second);
            } else if (Array.isArray(first) === true && isNaN(second) === false) {
                let comp = () => {
                    let newSet = [];
                    newSet.push(...first, second);
                    finalArray.push(newSet)
                }
                first[1] === second ? comp() : finalArray.push(first, second);
            } else if (isNaN(first) === false && Array.isArray(second) === true) {
                let comp = () => {
                    let newSet = [];
                    newSet.push(first, ...second);
                    finalArray.push(newSet)
                }
                first === second[0] ? comp() : finalArray.push(first, second)
            } else if (isNaN(first) === false && isNaN(second) === false) {
                let comp = () => {
                    let formed = [first, second];
                    finalArray.push(formed);
                }
                first === second ? comp() : finalArray.push(first, second);
            }
        
        }; return finalArray
    };
    // when array is odd or even
    if (arr.length % 2 === 1) {
        let lastItem = newArray[newArray.length - 2];
        console.log(lastItem);
        for (let i = 0; i < (newArray.length - 2); i++) {
            if (typeof (newArray[i]) === "number" && lastItem === newArray[i]) {
                let newarr = [];
                newarr.push(lastItem, newArray[i]);
                newArray[i] = newarr;
                newArray.pop();
                let newArr = rearrange(newArray);
                newArr.push(lastItem);
                return newArr
            } break
        }
        for (let i = 0; i < (newArray.length - 2); i++) {
            if (typeof (newArray[i]) === "object" && lastItem === newArray[i][0]) {
                newArray[i].push(lastItem);
                let newArr = rearrange(newArray);
                newArr.push(lastItem);
                return newArr
            } break
        }
        for (let i = 0; i < (newArray.length - 2); i++) {
            if (lastItem !== newArray[i]) {
                let newArr = rearrange(newArray);
                newArr.push(lastItem);
                return newArr
            }
        }
    } else {
        return rearrange(newArray);
    }
};
answer();


