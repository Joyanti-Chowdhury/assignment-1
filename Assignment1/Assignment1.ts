{

    function formatString(input: string, toUpper?: boolean): string {
    if(toUpper == true  || toUpper == undefined){
        return input.toUpperCase()
    }else{
        return input.toLowerCase()
    }
    }
    formatString("Output",false)
  
formatString("Hello");       
formatString("Hello", true);   
formatString("Hello", false);  

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter((item) => item.rating >= 4);
}

  filterByRating(books); 

function concatenateArrays<T>(...arrays: T[][]): any {
  return ([] as T[]).concat(...arrays);
}
concatenateArrays(["a", "b"], ["c"]);      
concatenateArrays([1, 2], [3, 4], [5]);     


class Vehicle {
  name: string;
 private _make: string;
  private _year: number;

  constructor(name: string,make:string, year: number) {
      this.name = name;
      this._make = make;
      this._year = year;
  }    
  getInfo(): string {
    return `The ${this.name} is a ${this._make} from ${this._year}.`;
  }
}
const vehicle1 = new Vehicle("car", "Toyata", 2026); 

class Car extends Vehicle{
  model: string;
  constructor(name: string,make:string, year: number, model: string) {
      super(name,make, year);
      this.model = model;
  }    
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("car", "Toyata", 2028, "Civic"); 


function processValue(value: string | number) : number {

    
    if(typeof value === "string"){
        return value.length
    }
    else if (typeof value === "number") { 
        return value * 2
    
       }
       else{
        return 0
       }
    
}

processValue("hello");
processValue(10);      


interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensiveProduct = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensiveProduct.price) {
        mostExpensiveProduct = products[i];
      }
    }
  
    return mostExpensiveProduct;
  }

  const products = [
    { name: "Pen", price: 60 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  getMostExpensiveProduct(products);  



enum Day {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  

  function getDayType(day: Day): string {
    if (day >= Day.Monday && day <= Day.Friday) {
      return "Weekday";
    } else if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Invalid day";
    }
  }
 

  getDayType(Day.Monday);  
  getDayType(Day.Sunday);   





async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Number cannot be negative"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  squareAsync(4).then(console.log);        
squareAsync(-3).catch(console.error);   



}