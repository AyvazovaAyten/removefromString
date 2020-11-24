function removefromString(word, x){
   let lowerword = word.toLowerCase();
   let y = x.toLowerCase();
   let result = [];
    for(let i=0; i<lowerword.length; i++){
        let currentletter = lowerword[i];
        if(currentletter === y){ 
            currentletter == null;}
         else result.push(lowerword[i]); 
    }
    return result;
}
console.log(removefromString('Azkaban', 'A'));