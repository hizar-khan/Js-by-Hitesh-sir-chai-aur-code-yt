/**
 const myArr = ["pak", "ind", "Usa"]

const arrVarble = myArr.forEach((item) => {
    // console.log(item);
    return item
} )
console.log(arrVarble); // it will return nothing

 */

// it means that forEach  can't retrun anyThing ,but it is necessary to return bcz 
//every time we don't need to jsut print values someTime we retrun
// or someTime we check in that if that things is exist than print it otherWise retrun nothing
// e.g if we want to check apples in fruit array  , this can be done with help of filter
// for all these we will use filter loop
// it will return values into new array


const fruit = ["apple", "banana", "apple", "orange", "lemon", "apple"]

const values = fruit.filter((item) => {
   
    return item == "apple"
})
// console.log(values);
// both are same
const apples = fruit.filter(item => item == "apple")
// console.log(apples);

// if we want to do the above program by using forEach loop 

const myArr = []

 fruit.forEach(item => {
    if (item === "apple") {
         myArr.push(item)
        
    }
})
// console.log(myArr);

  // more on Filter

  const books = [
    {title: 'Book One',   genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two',   genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book four',  genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book five',  genre: 'science', publish: 2009, edition: 2014},
    {title: 'Book six',   genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book seven', genre: 'History', publish: 1986, edition: 1996},
  ]
  // get history books from the above array
 const hstroyBok = books.filter(item => item.genre === 'History')
 console.log(hstroyBok);

 // let fiction books or books that are published in or after 2000
 console.log("-------------");
  const filteredBooks = books.filter(item => item.genre === 'Fiction'  || item.publish >= 2000 )
  console.log(filteredBooks);

  // in the above example filter loop will run each objec of  books array ,each objcet will come into the parameter item , so we can do anyting on that obj by using its key values pair e.g each obj name will item so to get value from obj we will use this mehtod objName.keyName(item.title)