const UserClass = require("./UserClass");

class StudentUser extends UserClass {
  constructor(name, email) {
    super(name, email, "student");
  }

  getDashboardAccess() {
    return "Student dashboard: view and book yoga sessions";
  }
}

module.exports = StudentUser;