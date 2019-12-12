export const clientAuth = {
  isAuthenticated: localStorage.getItem("isLoggedIn") || false,
  authenticate(cb) {
    clientAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    clientAuth.isAuthenticated = false;
    localStorage.clear();
    setTimeout(cb, 100);
  }
};
