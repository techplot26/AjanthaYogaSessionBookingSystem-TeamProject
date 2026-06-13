const express = require("express");
const router = express.Router();

const {
  createSession,
  getSessions,
  updateSession,
  deleteSession,
} = require("../controllers/yogaSessionController");

const { protect } = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Admin only - create yoga session
router.post("/", protect, roleMiddleware(["admin"]), createSession);

// Public - view yoga sessions
router.get("/", getSessions);

// Admin only - update yoga session
router.put("/:id", protect, roleMiddleware(["admin"]), updateSession);

// Admin only - delete yoga session
router.delete("/:id", protect, roleMiddleware(["admin"]), deleteSession);

module.exports = router;