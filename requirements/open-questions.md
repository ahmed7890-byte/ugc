# Open Questions for Product Sponsor

Based on review of all documentation, here are the areas needing clarification before implementation.

---

## Payments

| Question                                       | Why It Matters                                             |
| ---------------------------------------------- | ---------------------------------------------------------- |
| Minimum order value?                           | Affects trust progression calculations and prevents gaming |
| Chargeback handling - who bears the loss?      | Risk allocation                                            |
| Currency support - USD only or multi-currency? | International scalability                                  |
| Minimum payout threshold?                      | Operational costs                                          |

---

## Orders

| Question                                           | Why It Matters                           |
| -------------------------------------------------- | ---------------------------------------- |
| Auto-approval window duration?                     | Referenced but not specified (48h? 72h?) |
| Cancellation policy if buyer cancels after escrow? | Seller protection                        |

---

## Disputes

| Question                                    | Why It Matters   |
| ------------------------------------------- | ---------------- |
| Timeline for dispute resolution?            | SLA expectations |
| Appeal process after admin ruling?          | Fairness         |
| Partial refund percentages by dispute type? | Predictability   |

---

## Subscriptions

| Question                                              | Why It Matters      |
| ----------------------------------------------------- | ------------------- |
| What happens to active orders if subscription lapses? | Business continuity |
| Overage fees for exceeding plan limits?               | Cost predictability |
| Mid-cycle downgrade with active orders?               | Transition handling |

---

## Summary

**Needs Product Sponsor Input:**

- ~12 open questions spanning payment terms, order handling, dispute resolution, and subscription edge cases
