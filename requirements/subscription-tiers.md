# UGC Creator Platform - Subscription Tier Specification

## Executive Summary

This specification defines a three-tier subscription model for brands (Starter, Growth, Scale) plus an Enterprise tier for agencies. The model is designed to:

- Match brand personas to appropriate tiers (Marcus -> Starter, Sarah -> Growth, Priya -> Scale/Enterprise)
- Gate features progressively based on business maturity
- Maintain competitive pricing against Insense, Trend.io, Collabstr, and Billo
- Fund platform operations while keeping creator access free

---

## 1. Tier Names and Target Personas

| Tier       | Name           | Target Persona                    | Description                                           |
| ---------- | -------------- | --------------------------------- | ----------------------------------------------------- |
| **Tier 1** | **Starter**    | Marcus (New Brand Owner)          | First-time UGC buyers needing guidance and protection |
| **Tier 2** | **Growth**     | Sarah (Experienced Brand Manager) | Established D2C brands scaling UGC production         |
| **Tier 3** | **Scale**      | Sarah/Priya (High-volume brands)  | High-volume operations with team collaboration        |
| **Tier 4** | **Enterprise** | Priya (Agency Account Manager)    | Agencies managing multiple brand clients              |

---

## 2. Pricing Structure (Monthly/Annual)

| Tier           | Monthly Price           | Annual Price        | Annual Savings |
| -------------- | ----------------------- | ------------------- | -------------- |
| **Starter**    | $149/mo                 | $119/mo ($1,428/yr) | 20%            |
| **Growth**     | $399/mo                 | $319/mo ($3,828/yr) | 20%            |
| **Scale**      | $799/mo                 | $639/mo ($7,668/yr) | 20%            |
| **Enterprise** | Custom (from $1,500/mo) | Custom              | Negotiated     |

**Pricing Rationale:**

- Starter undercuts Insense Trial ($650/mo) significantly to capture new brand owners
- Growth positioned competitively against Insense Brand ($400-500/mo) with more value
- Scale positioned below Insense Agency ($640-800/mo) with unlimited briefs
- Enterprise custom pricing for agencies (similar to Insense managed services $1,600-2,900/mo)

---

## 3. Feature Matrix Per Tier

### Core Features (All Tiers)

| Feature                        | Starter | Growth | Scale | Enterprise |
| ------------------------------ | ------- | ------ | ----- | ---------- |
| Brand account creation         | Yes     | Yes    | Yes   | Yes        |
| Brand entity persistence       | Yes     | Yes    | Yes   | Yes        |
| Brand dashboard                | Yes     | Yes    | Yes   | Yes        |
| Guided brief creation          | Yes     | Yes    | Yes   | Yes        |
| AI script generation           | Yes     | Yes    | Yes   | Yes        |
| Script approval & locking      | Yes     | Yes    | Yes   | Yes        |
| Creator sourcing (marketplace) | Yes     | Yes    | Yes   | Yes        |
| Manual creator selection       | Yes     | Yes    | Yes   | Yes        |
| Order management               | Yes     | Yes    | Yes   | Yes        |
| Submission review              | Yes     | Yes    | Yes   | Yes        |
| Escrow payment protection      | Yes     | Yes    | Yes   | Yes        |
| Auto-approval protection       | Yes     | Yes    | Yes   | Yes        |

### Advanced Features (Gated by Tier)

| Feature                    | Starter   | Growth              | Scale       | Enterprise   |
| -------------------------- | --------- | ------------------- | ----------- | ------------ |
| Multi-user brand accounts  | No        | 3 seats             | 10 seats    | Unlimited    |
| Brand verification         | Manual    | Priority            | Priority    | Dedicated    |
| Ad account connection      | No        | 2 accounts          | 10 accounts | Unlimited    |
| Auto-accept configuration  | No        | Yes                 | Yes         | Yes          |
| Auto-accept execution      | No        | Yes                 | Yes         | Yes          |
| Saved scripts/templates    | 5 max     | 25 max              | Unlimited   | Unlimited    |
| Saved creators (favorites) | 10 max    | 50 max              | Unlimited   | Unlimited    |
| Invite-only briefs         | No        | Yes                 | Yes         | Yes          |
| Creator search filters     | Basic     | Advanced            | Advanced    | Advanced     |
| Brief templates library    | Community | Community + Premium | All         | All + Custom |

### Agency/Enterprise Features

| Feature                      | Starter     | Growth      | Scale             | Enterprise       |
| ---------------------------- | ----------- | ----------- | ----------------- | ---------------- |
| Multi-brand management       | No          | No          | No                | Yes (15+ brands) |
| Unified agency dashboard     | No          | No          | No                | Yes              |
| White-label options          | No          | No          | No                | Optional         |
| API access                   | No          | No          | Limited           | Full             |
| Advanced analytics/reporting | No          | Basic       | Advanced          | Custom           |
| Dedicated account manager    | No          | No          | No                | Yes              |
| Priority support             | Email (48h) | Email (24h) | Chat + Email (4h) | Dedicated Slack  |

---

## 4. Usage Limits

| Limit                              | Starter   | Growth    | Scale     | Enterprise   |
| ---------------------------------- | --------- | --------- | --------- | ------------ |
| **Active briefs/month**            | 3         | 15        | Unlimited | Unlimited    |
| **Active orders (concurrent)**     | 5         | 25        | 100       | Unlimited    |
| **Team seats included**            | 1         | 3         | 10        | Unlimited    |
| **Additional seat cost**           | N/A       | $29/mo    | $29/mo    | Included     |
| **Brands per account**             | 1         | 1         | 1         | 15+ (custom) |
| **AI script generations/month**    | 10        | 50        | Unlimited | Unlimited    |
| **Script regenerations per brief** | 3         | 5         | Unlimited | Unlimited    |
| **Revision rounds per order**      | 2         | 3         | 3         | Custom       |
| **Auto-approval window**           | 72h       | 48h       | 48h       | Custom       |
| **Order history retention**        | 12 months | 24 months | Unlimited | Unlimited    |

---

## 5. Commission Rates Per Tier

The platform takes commission from creator payments upon order completion. Commission rates decrease at higher tiers to reward volume:

| Tier           | Platform Commission | Creator Net | Notes            |
| -------------- | ------------------- | ----------- | ---------------- |
| **Starter**    | 15%                 | 85%         | Standard rate    |
| **Growth**     | 12%                 | 88%         | Volume discount  |
| **Scale**      | 10%                 | 90%         | Premium discount |
| **Enterprise** | 8-10%               | 90-92%      | Negotiated       |

**Example:** For a $200 creator fee:

- Starter: Creator receives $170, platform takes $30
- Growth: Creator receives $176, platform takes $24
- Scale: Creator receives $180, platform takes $20
- Enterprise: Creator receives $180-184, platform takes $16-20

**Competitive Position:**

- Insense charges 10-20% marketplace fee
- Collabstr charges 10% to brands + 15% to creators
- Our model is creator-friendly (no creator subscription) with competitive brand rates

---

## 6. Upgrade/Downgrade Policies

### Upgrades

- **Immediate effect:** Access to new features is instant upon upgrade
- **Prorated billing:** Remaining value of current period applied as credit
- **No lock-in:** Can upgrade at any time during billing cycle
- **Limit increases:** New limits take effect immediately
- **Order continuity:** Active orders continue unaffected

### Downgrades

- **End of billing period:** Downgrade takes effect at renewal
- **Grace period for limits:** 30-day grace to reduce active briefs/orders below new limits
- **Data retention:** Historical data retained based on new tier limits
- **Feature access:** Advanced features disabled at renewal
- **Team seats:** Owner can select which seats to retain (others receive 14-day notice)

### Cancellation

- **No long-term contracts:** Cancel anytime (monthly/annual)
- **Annual refund policy:** Prorated refund for unused months (minus 20% early termination if < 6 months)
- **Order completion:** Active orders continue to completion even after cancellation
- **Data export:** 30-day window to export all data after cancellation
- **Account dormancy:** Brand entity preserved (reputation intact) but marked inactive

---

## 7. Trial Period Strategy

### Free Trial Approach

| Aspect               | Details                                                           |
| -------------------- | ----------------------------------------------------------------- |
| **Duration**         | 14 days                                                           |
| **Tier access**      | Growth tier features                                              |
| **Payment required** | Credit card on file (not charged until trial ends)                |
| **Limits**           | 2 active briefs, 3 active orders, 5 AI script generations         |
| **Escrow**           | Full escrow protection (payment taken immediately for any orders) |
| **Commission**       | 15% (Starter rate) during trial                                   |
| **Conversion path**  | Auto-converts to Growth if not cancelled or changed               |

### Trial Objectives

1. **Educate new users:** Guide Marcus-type brands through first successful brief
2. **Demonstrate value:** Show Sarah-type brands the workflow efficiency
3. **Reduce risk:** Payment protection from day one builds trust
4. **Qualify leads:** Credit card requirement filters serious buyers

### Trial-to-Paid Conversion Tactics

- Day 1: Welcome email with guided tutorial
- Day 7: Milestone check - "Have you created your first brief?"
- Day 10: Tier comparison - "Which plan fits your needs?"
- Day 12: Urgency + offer - "2 days left - get 10% off first month"
- Day 14: Conversion or downgrade to Starter prompt

---

## 8. Enterprise/Custom Tier Considerations

### Enterprise Tier Features

**For Agencies (Priya persona):**

- Multi-brand management: Manage 15+ brand entities under one agency account
- Unified dashboard: Single view of all brands' briefs, orders, creators
- Agency-wide creator relationships: Favorite creators shared across brands
- Custom reporting: Client-ready reports with white-label options
- Bulk operations: Create briefs across multiple brands simultaneously

**Custom Pricing Factors:**

- Number of brand entities
- Expected monthly order volume
- API access requirements
- White-label customization
- Dedicated support level
- Custom commission rates

**Enterprise Onboarding:**

- Dedicated account manager
- Custom training sessions
- API integration support
- Brand entity migration assistance
- Custom contract terms (NET 30, etc.)

### Minimum Commitment

- 12-month agreement (negotiable)
- Minimum monthly spend: $1,500/mo or equivalent order volume
- Custom SLA agreements available

---

## 9. Competitor Pricing Comparison

| Platform         | Model         | Entry Price     | Mid-Tier        | High-Tier | Commission          |
| ---------------- | ------------- | --------------- | --------------- | --------- | ------------------- |
| **Our Platform** | Subscription  | $149/mo         | $399/mo         | $799/mo   | 10-15%              |
| **Insense**      | Subscription  | $650/mo (trial) | $500/mo         | $800/mo   | 7-20%               |
| **Collabstr**    | Transaction   | Free            | $299/mo         | $399/mo   | 10% + 15% creator   |
| **Trend.io**     | Credit packs  | $550 (one-time) | $1,045          | $1,980    | Included in credits |
| **Billo**        | Pay-per-video | No sub          | ~$150-200/video | Packages  | Included            |
| **Fiverr**       | Marketplace   | Free            | N/A             | N/A       | 5.5% buyer fee      |

### Competitive Advantages

1. **vs Insense:**
   - 77% cheaper entry tier ($149 vs $650)
   - No marketplace fee on top of subscription
   - Script-first workflow prevents brief issues

2. **vs Collabstr:**
   - Lower commission (10-15% vs 10%+15%)
   - Script approval before creator contact
   - Better brand accountability (entity system)

3. **vs Trend.io:**
   - Predictable monthly cost vs credit packs
   - Choose your own creators vs assigned
   - Full escrow protection

4. **vs Billo:**
   - Subscription model more predictable
   - Direct brand-creator relationship
   - Usage rights tracking built-in

5. **vs Fiverr:**
   - Script-first workflow (no vague briefs)
   - Fair timelines (product delivery triggers deadline)
   - Brand entity accountability

---

## 10. Revenue Model Summary

**Revenue Streams:**

1. **Subscription fees:** Primary revenue from brand subscriptions
2. **Commission:** 8-15% of each completed order
3. **Add-ons:** Extra seats ($29/mo), extra brands (Enterprise)
4. **Future:** Usage extension fees, premium features, API access tiers

**Unit Economics Target:**

- Average subscription: $350/mo
- Average orders per subscriber: 8/mo
- Average order value: $200
- Average commission per order: $24
- Monthly revenue per subscriber: $350 + $192 = $542

---

## Polar Integration Notes

All subscription billing will be handled through Polar:

- **Products:** Create products for each tier (Starter, Growth, Scale)
- **Pricing:** Configure monthly and annual pricing options
- **Webhooks:** Handle subscription lifecycle events (created, updated, canceled)
- **Customer Portal:** Allow brands to manage their subscription via Polar's portal
- **Usage Metering:** Track brief/order usage for limit enforcement
- **Commission Collection:** Order payments processed through Polar with automatic fee calculation
