const UserClass = require("./UserClass");

class AdminUser extends UserClass {
  constructor(name, email) {
    super(name, email, "admin");
  }

  getDashboardAccess() {
    return "Admin dashboard: manage sessions and view all bookings";
  }
}

module.exports = AdminUser;