var input=[29.76,41.85,46.5];

var ans=input.reduce(function(a,b){
    return a+b
})
console.log(ans/3);

var input=[29.76,41.85,46.5]

var ans=input.reduce(function(a,b){
    if(30<b){
        a.push(b); 
    }
    return a
},[])
console.log(ans);