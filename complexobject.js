let abc={
    name:"bindu",
    tech:"js",
    laptop:{
        cpu:'i5',
        ram:4,
        brand:'Asus'
    }
}
console.log(abc.laptop.brand.length)
console.log(abc.laptop.brand)
console.log(abc.laptop1?.brand)
delete abc.tech
console.log(abc)