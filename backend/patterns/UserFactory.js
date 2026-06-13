const AdminUser = require("../models/oop/AdminUser");
const StudentUser = require("../models/oop/StudentUser");
const InstructorUser = require("../models/oop/InstructorUser");

class UserFactory {
  static createUser(role, name, email) {
    switch (role) {
      case "admin":
        return new AdminUser(name, email);

      case "student":
        return new StudentUser(name, email);

      case "instructor":
        return new InstructorUser(name, email);

      default:
        throw new Error("Invalid user role");
    }
  }
}

module.exports = UserFactory;