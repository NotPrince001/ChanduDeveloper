// Objects
const obj1 = {
  name: "RAM",
  city: "Delhi",
  age: 22,
  fullAddress: () => "Function inside an object",
};
const obj2 = new Object();
const obj3 = {};
obj2.address = "Abes EC GZB";
obj2.contact = 9289329208;
delete obj1.age; // Deletes key from object
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj1.fullAddress());
