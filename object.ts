type MyObj = {
  a: number;
  b: number;
  c: string;
};

interface MyObjProps {
  readonly a: number;
  b: number;
  c: string;
  //   print?: () => number;
  [key: string]: string | number;
}

const obj: MyObjProps = {
  a: 1,
  b: 2,
  c: "fjjd",
  ee: "sskksk",
  sd: 34,
};

const obj1: MyObjProps = {
  a: 1,
  b: 8,
  c: "566",
};

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const john: Person = {
  name: "John",
  age: 56,
};

interface Account {
  login: string;
  email: string;
  active: boolean;
}

interface Developer extends Person, Account {
  skills: string[];
  level?: string;
}

const mark: Developer = {
  name: "Mark",
  age: 58,
  email: "",
  login: "snssj",
  active: false,
  skills: ["JS", "TS"],
};


type FirtsPerson  ={
    age: number;
  }
  

  
  type MyAccount = {
    login: string;
    email: string;
    active: boolean;
  }
  
  type FrontendDeveloper = FirtsPerson & MyAccount;

  const devArr: FrontendDeveloper[] = []