let arr = [1, 2, 3, 4, 5];

for(let i = 0; i<=arr.length; i++) {
    console.log(`i: ${arr[i]}`);
}

arr.forEach(function(item, index){
    console.log(`item: ${item}`);
});