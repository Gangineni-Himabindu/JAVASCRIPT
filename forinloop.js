let abc={
    name:"bindu",
    tech:"js",
    laptop:{
        cpu:'i5',
        ram:4,
        brand:'Asus'
    }
}
for(let key in abc)
{
    console.log(key,abc[key]);
}