import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

    numberOne ="";
    numberTwo ="";
    result = 0;
    changeHandlernumberOne(event){
        this.numberOne = event.target.value;
        console.log('this.numberOne',this.numberOne);
    }
    changeHandlernumberTwo(event){

        this.numberTwo = event.target.value;
        console.log('this.numberTwo',this.numberTwo);

    }
    inputHandler(event){
     let inputlabel = event.target.label;
    if(inputlabel == 'Add'){

        this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);

    }
    else if(inputlabel == 'Sub'){

        this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);

    }
    else if(inputlabel == 'Mul'){

        this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);

    }
    else if(inputlabel == 'Div'){

        this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);

    }}

    // addHandler(event){

    //     this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
    //     console.log('this.result',this.result);
    // }
    // subHandler(event){

    //     this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);
    //     console.log('this.result',this.result);
    // }
    // mulHandler(event){

    //     this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);
    //     console.log('this.result',this.result);
    // }
    // divHandler(event){

    //     this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);
    //     console.log('this.result',this.result);
    // }

}