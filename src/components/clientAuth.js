export const clientAuth = {
  isAuthenticated: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
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
