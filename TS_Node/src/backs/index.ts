import { genericFunctionArrow, genericFunction,printObject} from "../generics/generics";
import { vilian,Hero } from "../interfaces";







// printObject(123);
// printObject(new Date());
// printObject({a:1,b:2,c:3});
// printObject([1,2,3,4,5,6,7,8,9,10]);
// printObject('Hola Mundo');
// const name:string ='Fernando';


// console.log( genericFunctionArrow(3.1416).toFixed(2));
// console.log( genericFunctionArrow(name).toUpperCase());
// console.log( genericFunctionArrow(new Date()).getDate());


const deadpool ={
    name: 'deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<vilian>(deadpool).dangerLevel)