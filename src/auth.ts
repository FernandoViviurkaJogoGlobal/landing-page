// auth.ts

import users from "./users.json";

interface User {
  username: string;
  password: string;
  viewer: string;
  isAuthenticated?: boolean;
}

let currentUser: User | null = null;

export function login(
  username: string,
  password: string,
  viewer: string
): void {
  const user = users.users.find(
    (user: User) => user.username === username && user.password === password
  );

  if (user && user.viewer === viewer) {
    user.isAuthenticated = true;
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  } else {
    currentUser = null;
  }
}

export function logout(): void {
  currentUser = null;
  localStorage.removeItem("currentUser");
}

export function getCurrentUser(): User | null {
  if (!currentUser) {
    const storedUser = localStorage.getItem("currentUser");
    currentUser = storedUser ? JSON.parse(storedUser) : null;
  }
  return currentUser;
}
