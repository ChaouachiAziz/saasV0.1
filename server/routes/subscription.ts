import express from "express";
import { prisma } from "../lib/db";
import { authenticateToken, AuthenticatedRequest } from "../middleware/auth";

const router = express.Router();

// Check subscription status
router.get(
  "/check",
  authenticateToken,
  async (req: AuthenticatedRequest, res): Promise<void> => {
    try {
      const subscriber = await prisma.subscriber.findFirst({
        where: { userId: req.user!.id },
      });

      if (!subscriber) {
        res.json({
          subscribed: false,
          subscription_tier: null,
        });
        return;
      }

      // Check if subscription is still active
      const isActive =
        subscriber.subscribed &&
        (!subscriber.subscriptionEnd ||
          new Date() < subscriber.subscriptionEnd);

      res.json({
        subscribed: isActive,
        subscription_tier: subscriber.subscriptionTier,
        subscription_end: subscriber.subscriptionEnd,
        employee_count: subscriber.employeeCount,
      });
    } catch (error) {
      console.error("Check subscription error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Create Stripe checkout session
router.post(
  "/create-checkout",
  authenticateToken,
  async (req: AuthenticatedRequest, res): Promise<void> => {
    try {
      const { planName, price, tier } = req.body;

      // Here you would integrate with Stripe to create a checkout session
      // For now, returning a placeholder response
      res.json({
        url: `https://checkout.stripe.com/pay/placeholder?plan=${planName}&price=${price}`,
        message: "Stripe integration needed - placeholder URL provided",
      });
    } catch (error) {
      console.error("Create checkout error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Create Stripe customer portal session
router.post(
  "/customer-portal",
  authenticateToken,
  async (req: AuthenticatedRequest, res): Promise<void> => {
    try {
      // Here you would integrate with Stripe to create a customer portal session
      // For now, returning a placeholder response
      res.json({
        url: "https://billing.stripe.com/p/login/placeholder",
        message: "Stripe integration needed - placeholder URL provided",
      });
    } catch (error) {
      console.error("Customer portal error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Update subscription (for webhook handling)
router.post("/update", async (req, res): Promise<void> => {
  try {
    const {
      email,
      userId,
      subscribed,
      subscriptionTier,
      subscriptionEnd,
      stripeCustomerId,
    } = req.body;

    // First, try to find existing subscriber by email
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      // Update existing subscriber
      await prisma.subscriber.update({
        where: { email },
        data: {
          userId,
          subscribed,
          subscriptionTier,
          subscriptionEnd: subscriptionEnd ? new Date(subscriptionEnd) : null,
          stripeCustomerId,
        },
      });
    } else {
      // Create new subscriber
      await prisma.subscriber.create({
        data: {
          userId,
          email,
          subscribed,
          subscriptionTier,
          subscriptionEnd: subscriptionEnd ? new Date(subscriptionEnd) : null,
          stripeCustomerId,
        },
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Update subscription error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
