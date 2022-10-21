import { createContext } from "react";

export const FetchContext = createContext({});

// useEffect(() => {
//   fetch("/user")
//     .then((r) => r.json())
//     .then((user) => setUser(user));
//   const timer = setInterval(() => {
//     fetch("/user")
//       .then((r) => r.json())
//       .then((user) => setUserData(user));
//   }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);
export default FetchContext;
