# Open Questions for Product Sponsor

Based on review of all documentation, here are the areas needing clarification before implementation.

---

## Explicitly Listed Workflow Questions

### 1. Auto-accept Path Convergence

After "Creator sourcing", do manual selection and auto-accept both converge at "Booking and escrow", or does auto-accept skip steps entirely?

**Current assumption:** Both paths converge at the same escrow step, with auto-accept simply automating the selection decision.

### 2. Revision Limits Edge Case

What happens when the revision limit is reached but the brand still requests changes?

- Does this trigger dispute escalation?
- Can the brand pay for additional revisions?
- Is auto-approval forced?

### 3. Product Delivery Timeout

What happens if tracking shows the product as delivered but the creator doesn't confirm receipt?

- Is there a timeout period?
- Does tracking confirmation auto-advance the workflow?
- What dispute mechanism exists?

### 4. Usage Monitoring Requirements

Is connecting ad accounts required for paid usage jobs, or is it optional with manual verification as fallback?

- **Required:** Jobs with paid usage cannot proceed without connected accounts
- **Optional:** Brands can manually verify/report usage compliance

---

## Discovered Gaps (Unanswered in Documentation)

### Financial/Payment

| Gap                                                | Why It Matters                                             |
| -------------------------------------------------- | ---------------------------------------------------------- |
| Minimum order value?                               | Affects trust progression calculations and prevents gaming |
| Auto-approval window duration?                     | Referenced but not specified (48h? 72h?)                   |
| Cancellation policy if brand cancels after escrow? | Creator protection                                         |
| Chargeback handling - who bears the loss?          | Risk allocation                                            |
| Currency support - USD only or multi-currency?     | International scalability                                  |
| Creator minimum payout threshold?                  | Operational costs                                          |

### Dispute Resolution

| Gap                                         | Why It Matters   |
| ------------------------------------------- | ---------------- |
| Timeline for dispute resolution?            | SLA expectations |
| Appeal process after admin ruling?          | Fairness         |
| Who owns content during/after dispute?      | Legal clarity    |
| Partial refund percentages by dispute type? | Predictability   |

### Product Shipping

| Gap                               | Why It Matters         |
| --------------------------------- | ---------------------- |
| Who bears shipping costs?         | Budget planning        |
| Lost/damaged product liability?   | Risk allocation        |
| Geographic shipping restrictions? | Creator eligibility    |
| Maximum product value?            | Insurance implications |

### Trust & Moderation

| Gap                                             | Why It Matters   |
| ----------------------------------------------- | ---------------- |
| Prohibited product categories?                  | Brand onboarding |
| Content moderation guidelines?                  | Legal protection |
| How is "script adherence" objectively measured? | Score accuracy   |
| Can creators dispute brand scores?              | Fairness         |

### Creator Terms

| Gap                               | Why It Matters                       |
| --------------------------------- | ------------------------------------ |
| Minimum age requirement?          | Legal compliance                     |
| Maximum concurrent orders?        | Quality assurance                    |
| Can creators set their own rates? | Currently appears brand-defined only |
| Geographic restrictions?          | Operational scope                    |

### Subscription Edge Cases

| Gap                                                   | Why It Matters      |
| ----------------------------------------------------- | ------------------- |
| What happens to active orders if subscription lapses? | Business continuity |
| Overage fees for exceeding brief limits?              | Cost predictability |
| Mid-cycle downgrade with active orders?               | Transition handling |

### AI Script Generation

| Gap                              | Why It Matters          |
| -------------------------------- | ----------------------- |
| What AI model powers generation? | Capability expectations |
| Fallback if AI fails?            | UX continuity           |
| Can brands skip AI entirely?     | Workflow flexibility    |

---

## Summary

**Documented & Complete:**

- User personas (7 defined)
- Feature prioritization (MVP vs Phase 2)
- Trust system scoring and badges
- Subscription tiers and pricing
- Data model (Convex schema)
- Technical architecture

**Needs Product Sponsor Input:**

- 4 explicit workflow questions
- ~20+ implicit gaps spanning financial terms, dispute handling, shipping logistics, content policies, and edge cases
