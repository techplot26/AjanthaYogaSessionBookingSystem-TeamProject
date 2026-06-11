class BookingObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }

  notify(data) {
    this.observers.forEach((observerFunction) => {
      observerFunction(data);
    });
  }
}

const bookingObserver = new BookingObserver();

bookingObserver.subscribe((data) => {
  console.log(`Notification: Booking update for ${data.userEmail} - ${data.message}`);
});

module.exports = bookingObserver;