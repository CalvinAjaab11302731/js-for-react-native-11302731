function processArray(arrayArguement){
    return arrayArguement.map(numbers => {
        if (numbers % 2 === 0){
            return numbers * numbers;
        }
        else{
            return numbers * 3;
        }
    });
}
function formatArrayStrings(arrStrings,arrNumbers){
    return arrStrings.map((stringg, index)=>
       { const newwernumber = arrNumbers[index];
        if(newwernumber % 2 ==0){
            return stringg.toUpperCase();
        }
        else
        {
            return stringg.toLowerCase();
        }
    }
);
}
const stringChar = ["New","Brave","Old","World"];
const newNumbers = [4,6,7,2,1,8];
const processedNewnumbers = processArray(newNumbers);
const proccessedStringChar = formatArrayStrings(stringChar,processedNewnumbers);
console.log(proccessedStringChar);
module.export = formatArrayStrings;