import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
   [
    {
      id: 1,
      name: "Danny Ganza",
      email: "danny@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Herve Rugwiro",
      email: "herve@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 day ago",
    },
    {
      id: 3,
      name: "Alice Mutoni",
      email: "alice@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "20 minutes ago",
    },
    {
      id: 4,
      name: "Kobi Bryant",
      email: "kobi@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 day ago",
    },
    {
      id: 3,
      name: "Lebron James",
      email: "lebron@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "20 minutes ago",
    },
    {
      id: 4,
      name: "Lamine Yamale",
      email: "lamine@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 day ago",
    },
  ]);
    const [users, setUsers] = useState(user);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};