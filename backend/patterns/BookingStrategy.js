class RegularBookingStrategy {
  canBook(session) {
    return session.capacity > 0;
  }

  getMessage() {
    return "Regular booking allowed";
  }
}

class FullSessionStrategy {
  canBook(session) {
    return session.capacity <= 0;
  }

  getMessage() {
    return "Booking not allowed because the session is full";
  }
}

class CancellationStrategy {
  canCancel(booking) {
    return booking.status !== "cancelled";
  }

  getMessage() {
    return "Booking cancellation allowed";
  }
}

module.exports = {
  RegularBookingStrategy,
  FullSessionStrategy,
  CancellationStrategy
};