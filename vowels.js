const str = 'Hey This is Skillsanta JS Training';
const vowelCount = (str = '') => {
   const splitString=str.split('');
   const obj={};
   const vowels="aeiou";
   splitString.forEach((letter)=>{
      if(vowels.indexOf(letter.toLowerCase()) !== -1){
         if(letter in obj){
            obj[letter]++;
         }else{
            obj[letter]=1;
         }
      }
   });
   return obj;
};
console.log(vowelCount(str));
