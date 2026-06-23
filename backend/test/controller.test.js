const { expect } = require("chai");
const sinon = require("sinon");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

process.env.JWT_SECRET = "test_secret";

const User = require("../models/User");
const Booking = require("../models/Booking");
const YogaSession = require("../models/YogaSession");

const authController = require("../controllers/authController");
const bookingController = require("../controllers/bookingController");
const yogaSessionController = require("../controllers/yogaSessionController");

function mockResponse() {
  const res = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns(res);
  return res;
}

describe("Step 5 Functional Testing - Backend Unit Tests", function () {
  afterEach(function () {
    sinon.restore();
  });

  describe("Authentication Controller", function () {
    it("UT-01 should register a new user successfully", async function () {
      const req = {
        body: {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
          role: "user",
        },
      };
      const res = mockResponse();

      sinon.stub(User, "findOne").resolves(null);
      sinon.stub(bcrypt, "hash").resolves("hashedPassword");
      sinon.stub(User, "create").resolves({
        _id: "user123",
        name: "Test User",
        email: "test@example.com",
        role: "user",
      });

      await authController.register(req, res);

      expect(res.status.calledWith(201)).to.equal(true);
      expect(res.json.firstCall.args[0].message).to.equal("Registration successful");
    });

    it("UT-02 should login user successfully and return token", async function () {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };
      const res = mockResponse();

      sinon.stub(User, "findOne").resolves({
        _id: "user123",
        name: "Test User",
        email: "test@example.com",
        password: "hashedPassword",
        role: "user",
      });
      sinon.stub(bcrypt, "compare").resolves(true);
      sinon.stub(jwt, "sign").returns("mockJwtToken");

      await authController.login(req, res);

      expect(res.status.calledWith(200)).to.equal(true);
      expect(res.json.firstCall.args[0].message).to.equal("Login successful");
      expect(res.json.firstCall.args[0].token).to.equal("mockJwtToken");
    });

    it("UT-03 should reject invalid login credentials", async function () {
      const req = {
        body: {
          email: "wrong@example.com",
          password: "wrongpassword",
        },
      };
      const res = mockResponse();

      sinon.stub(User, "findOne").resolves(null);

      await authController.login(req, res);

      expect(res.status.calledWith(400)).to.equal(true);
      expect(res.json.firstCall.args[0].message).to.equal("Invalid email or password");
    });
  });

  describe("Yoga Session Controller", function () {
    it("UT-04 should create a yoga session", async function () {
      const req = {
        body: {
          title: "Morning Yoga",
          instructor: "Ajantha",
          date: "2026-07-01",
          duration: 60,
          capacity: 10,
        },
      };
      const res = mockResponse();

      sinon.stub(YogaSession, "create").resolves(req.body);

      await yogaSessionController.createSession(req, res);

      expect(res.status.calledWith(201)).to.equal(true);
      expect(res.json.firstCall.args[0].title).to.equal("Morning Yoga");
    });

    it("UT-05 should fetch all yoga sessions", async function () {
      const req = {};
      const res = mockResponse();

      sinon.stub(YogaSession, "find").resolves([
        { title: "Morning Yoga" },
        { title: "Evening Yoga" },
      ]);

      await yogaSessionController.getSessions(req, res);

      expect(res.json.firstCall.args[0]).to.be.an("array");
      expect(res.json.firstCall.args[0]).to.have.lengthOf(2);
    });

    it("UT-06 should update a yoga session", async function () {
      const req = {
        params: { id: "session123" },
        body: { title: "Updated Yoga Session" },
      };
      const res = mockResponse();

      sinon.stub(YogaSession, "findByIdAndUpdate").resolves({
        _id: "session123",
        title: "Updated Yoga Session",
      });

      await yogaSessionController.updateSession(req, res);

      expect(res.json.firstCall.args[0].title).to.equal("Updated Yoga Session");
    });

    it("UT-07 should delete a yoga session", async function () {
      const req = {
        params: { id: "session123" },
      };
      const res = mockResponse();

      sinon.stub(YogaSession, "findByIdAndDelete").resolves({});

      await yogaSessionController.deleteSession(req, res);

      expect(res.json.firstCall.args[0].message).to.equal("Session deleted successfully");
    });
  });

  describe("Booking Controller", function () {
    it("UT-08 should create a booking", async function () {
      const req = {
        body: {
          sessionId: "session123",
          userId: "user123",
          selectedDate: "2026-07-01",
          selectedTime: "09:00",
        },
      };
      const res = mockResponse();

      sinon.stub(YogaSession, "findById").resolves({ _id: "session123" });
      sinon.stub(Booking, "findOne").resolves(null);
      sinon.stub(Booking, "create").resolves({
        user: "user123",
        session: "session123",
        selectedDate: "2026-07-01",
        selectedTime: "09:00",
        status: "booked",
      });

      await bookingController.bookSession(req, res);

      expect(res.status.calledWith(201)).to.equal(true);
      expect(res.json.firstCall.args[0].message).to.equal("Session booked successfully");
    });

    it("UT-09 should fetch all bookings", async function () {
      const req = {};
      const res = mockResponse();

      const bookings = [{ user: "user123", session: "session123", status: "booked" }];

      const secondPopulate = sinon.stub().resolves(bookings);
      const firstPopulate = sinon.stub().returns({ populate: secondPopulate });

      sinon.stub(Booking, "find").returns({ populate: firstPopulate });

      await bookingController.getBookings(req, res);

      expect(res.json.firstCall.args[0]).to.be.an("array");
      expect(res.json.firstCall.args[0][0].status).to.equal("booked");
    });

    it("UT-10 should cancel a booking", async function () {
      const req = {
        params: { id: "booking123" },
      };
      const res = mockResponse();

      sinon.stub(Booking, "findByIdAndUpdate").resolves({
        _id: "booking123",
        status: "cancelled",
      });

      await bookingController.cancelBooking(req, res);

      expect(res.json.firstCall.args[0].message).to.equal("Booking cancelled successfully");
      expect(res.json.firstCall.args[0].booking.status).to.equal("cancelled");
    });
  });
});