// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

/*const user = {
  name: "Valya",
  age: 32,
  address: {
    street: "Studentska St",
    city: "Kharkiv",
  },
};
const readonlyUser: DeepReadonly<typeof user> = user;

readonlyUser.name = "Ann";
readonlyUser.address.street = "Example St";*/


// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання
//  навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};



/*interface Person {
  name: string;
  age?: number;
  address: {
    street: string;
    city: string;
}
}

const readonlyRequiredPerson: DeepRequireReadonly<Person> = {
  name: "Valya",
  age: 32,
  address: {
    street: "Studentska St",
    city: "Kharkiv",
  },
};*/



// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

/*const myObject = {
  age: 32,
  name: "Valya",
  city:"Kharkiv"
};

type UppercaseKeysObject = UpperCaseKeys<typeof myObject>;*/



// І саме цікаве.
//  Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};


const myObject = {
  age: 32,
  name: "Valya",
  
};

/*const propertyDescriptorObject: ObjectToPropertyDescriptor<typeof myObject> = {
  age: { value: 32, writable: true, enumerable: true, configurable: true },
  name: { value: "Valya", writable: true, enumerable: true, configurable: true },
};*/

const propertyDescriptors: ObjectToPropertyDescriptor<typeof myObject> = {
  name: Object.getOwnPropertyDescriptor(myObject, "name")!,
  age: Object.getOwnPropertyDescriptor(myObject, "age")!,
};

