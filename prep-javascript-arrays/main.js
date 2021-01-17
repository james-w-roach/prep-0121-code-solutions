var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('languagesArray:', languagesArray);
console.log('length:', languagesArray.length);

languagesArray.push('C#', 'php');
console.log('pushed C# and php:', languagesArray);

languagesArray.pop();
console.log('removed last element:', languagesArray);

languagesArray.unshift('C++');
console.log('added element to front:', languagesArray);

languagesArray.shift();
console.log('removed first element:', languagesArray);

var thirdElement = languagesArray[2];
console.log('third element:', thirdElement);

var arrayLength = languagesArray.length;
console.log('length:', arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('last item:', lastItem);
