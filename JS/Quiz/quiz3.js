function factorialize(num)
{
    {
    if (num === 0 | num ===1){
        return 1;
    }
    else{
        return num * factorialize(num-1);
    }
}
return num ;
}
    

console.log(factorialize(7));
// Finding the nth Factorialize Number ?    