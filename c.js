let n="abcde";
let count=0;
for(let i=0;i<n.length;i++){
   if('aeiouAEIOU'.includes(n.charAt(i)))
    count++;
}
console.log(count);