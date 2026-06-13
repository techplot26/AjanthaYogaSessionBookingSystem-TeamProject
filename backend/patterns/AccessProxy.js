class AccessProxy {
  static canManageSessions(user) {
    if (!user || user.role !== "admin") {
      return {
        allowed: false,
        message: "Access denied. Admin role required."
      };
    }

    return {
      allowed: true,
      message: "Access granted. Admin can manage yoga sessions."
    };
  }

  static canViewBookings(user) {
    if (!user || (user.role !== "admin" && user.role !== "instructor")) {
      return {
        allowed: false,
        message: "Access denied. Admin or instructor role required."
      };
    }

    return {
      allowed: true,
      message: "Access granted. User can view bookings."
    };
  }
}

module.exports = AccessProxy;