let abc={
    name:"bindu",
    tech:"js",
    greet:function(){
        console.log();
    }
}
abc.greet();
let abc1={
    name:"bindu",
    tech:"python",
    greet:function(){
        console.log(this.tech);
    }
}
abc.greet()