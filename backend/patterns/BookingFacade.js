const {
  RegularBookingStrategy,
  CancellationStrategy
} = require("./BookingStrategy");

const bookingObserver = require("./BookingObserver");

class BookingFacade {
  constructor() {
    this.bookingStrategy = new RegularBookingStrategy();
    this.cancellationStrategy = new CancellationStrategy();
  }

  createBooking(user, session) {
    if (!this.bookingStrategy.canBook(session)) {
      return {
        success: false,
        message: "Booking failed. Session is full."
      };
    }

    const booking = {
      userEmail: user.email,
      sessionTitle: session.title,
      status: "confirmed"
    };

    bookingObserver.notify({
      userEmail: user.email,
      message: `Booking confirmed for ${session.title}`
    });

    return {
      success: true,
      message: "Booking created successfully",
      booking
    };
  }

  cancelBooking(booking) {
    if (!this.cancellationStrategy.canCancel(booking)) {
      return {
        success: false,
        message: "Booking is already cancelled"
      };
    }

    booking.status = "cancelled";

    bookingObserver.notify({
      userEmail: booking.userEmail,
      message: "Booking has been cancelled"
    });

    return {
      success: true,
      message: "Booking cancelled successfully",
      booking
    };
  }
}

module.exports = BookingFacade;