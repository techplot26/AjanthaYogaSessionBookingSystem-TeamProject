class UserClass {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  getProfile() {
    return {
      name: this.name,
      email: this.email,
      role: this.role
    };
  }

  getDashboardAccess() {
    return "General user dashboard";
  }
}

module.exports = UserClass;