import { mockUsers } from "../assets/mockData";

export const authenticateUser = (username, password) => {
  const user = mockUsers.find(
    (u) => u.username === username && u.password === password
  );
  return user || null;
};
