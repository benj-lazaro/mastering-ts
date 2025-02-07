// Using 3rd Party Libraries: Axios

import axios from "axios";

// Custom interface type based on the response data from remote API server
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Make a basic HTTP request; type annotate with an array of custom interface User
axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => {
  console.log("It worked!");
  // printUser(res.data);
  res.data.forEach(printUser);
});

function printUser(user: User) {
  console.log(`Username: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Phone: ${user.phone}\n`);
}
