let franc=require('franc');
let lng=require('langs')
let col=require('colors');
let strings=process.argv.slice(2);

let ans='';

for(let i=0;i<strings.length;i++){
    ans+=strings[i]+' ';
}


if(ans){
    let code=franc(ans);
    let language=lng.where("3",code);
    if(code==='und'){
        console.log('Sorry, couln\'t find any'.yellow);
    }
    else{
        console.log(`Our best guess is ${language.name.green}`);
    }
}
else{
    console.log('Type something'.red);
}
