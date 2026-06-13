const UserClass = require("./UserClass");

class InstructorUser extends UserClass {
  constructor(name, email) {
    super(name, email, "instructor");
  }

  getDashboardAccess() {
    return "Instructor dashboard: view assigned yoga sessions";
  }
}

module.exports = InstructorUser;