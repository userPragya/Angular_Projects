export class Arithmatic{
  constructor(num1 : number, num2 : number){
    this.Number1 = num1;
    this.Number2 = num2;
  }

  public Number1 : number = 0;
  public Number2 : number = 0;
  public result : number = 0;

  Addition(){
    this.result = this.Number1 + this.Number2;
	return this.result;
  }

  Subtraction(){
    this.result = this.Number1 + this.Number2;
	return this.result;
  }

  Division(){
    this.result = this.Number1 + this.Number2;
	return this.result;
  }

  Multiplication(){
    this.result = this.Number1 + this.Number2;
	return this.result;
  }

}

let obj = new Arithmatic(10,20);
var aresult = obj.Addition();
var sresult = obj.Subtraction();


let obj1 = new Arithmatic(21,11);
var mresult = obj1.Multiplication();
var dresult = obj1.Division();


console.log("Addition is : " + aresult);
console.log("Subtraction is : " + sresult);
console.log("Multiplication is : " + mresult);
console.log("Division is : " + dresult);

