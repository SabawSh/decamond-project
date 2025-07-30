export interface User {
  cell: string;
  dob: {
    date: Date;
    age: number;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
}
