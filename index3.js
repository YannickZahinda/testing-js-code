class MyCalculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    addition(){
        return this.a + this.b;
    }

    multiply(){
        return this.a * this.b;
    }

    divide(){
        return this.a / this.b;
    }

    substrac(){
        return this.a - this.b;
    }
}

module.exports = MyCalculator;