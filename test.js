const calculator = {
    add: function(a, b){
    console.log("a + b =" , a+b , " 입니다." )
    },
    minus: function(a, b){
    console.log("a - b =" , a-b , " 입니다." )
    },
    mul: function(a, b){
    console.log("a * b =" , a*b , " 입니다." )
    },
    div: function(a, b){
    console.log("a / b =" , a/b , " 입니다." )
    },
    power: function(a, b){
    console.log("a ** b =" , a**b , " 입니다." )
    }
}

calculator.add(1, 2);
calculator.minus(3, 2);
calculator.mul(3, 4);
calculator.div(5, 2);
calculator.power(3, 2);