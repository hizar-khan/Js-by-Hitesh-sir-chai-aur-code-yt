// Reduce 
// make the array values in single values/do calculation on array
// use in shopping cart
// in reduce we have callback ftn same as foreach,map,filter but here in the callback ftn we have two parameter 
// i) accumulater ii) currentValue
// firsttime accumulater  have initialValue 0 and currenVale will have the value coming from the array 
// than the accumulater will have the value that come from the accumultaer + currnetValue . 

const myArr = [1, 2, 3, 4, 5]

const newArr = myArr.reduce((accumulater, currentValue) =>
{
    // console.log(`acc:${accumulater} and currvale:${currentValue}`);//checking 

    return accumulater + currentValue
},0)// 0 means what will be the value of accumulator at the start / initial value of acc

// console.log(newArr);

// 
// in the above program when reduce begain on "myArr" first the accumulator will have '0' and currentValue will have the value coming from the array "myArr"
// at retrun the accumulatro + currentValue will do addition as acc =0 at firstTime and currntValue = 1 so 0+1 = 1
// the the value of accumulator will became 1 and the currntValue will be 2 htat is coming from the array , so return 1+2 = 3
// now the accumulator will became  3 and currentValue = 3 , return 3 + 3 = 6
// now accumulator = 6 and currentValue =  4 , return acc + currvalue = 6 + 4 = 10
// accumulator = 10 and currentValue = 5 , return  10 + 5 = 15 
// finaly the 15 will return to newArr 
// c.log(newArr) = 15

// const myArr = [1, 2, 3, 4, 5]
// shortcut
//  const add = myArr.reduce((acc, curr )=> acc + curr, 0)
//  console.log(add);

// buy differnt courses and get the total price of all courses
 const shoppingCart = [
    { courseName: "javaScript course", price: 5999},
    { courseName: "FrontEnd course", price: 3999},
    { courseName: "BackEnd course", price: 6999},
    { courseName: "FullStack course", price: 10999}
    
 ]
 const totalPrice = shoppingCart.reduce((acc, curr) =>{
    console.log(curr.courseName,':', curr.price);
    
    let addPrice =  acc+ curr.price
    return addPrice
 },0)
 console.log(`total Price: ${totalPrice}`);
 console.log("Total Price:", totalPrice);