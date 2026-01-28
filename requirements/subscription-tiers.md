# SaaS Platform - Subscription Tier Specification

## Executive Summary

This specification defines a three-tier subscription model (Starter, Growth, Scale) plus an Enterprise tier. The model is designed to:

- Gate features progressively based on business maturity
- Maintain competitive pricing in the market
- Fund platform operations through subscriptions and commissions

---

## 1. Tier Names and Descriptions

| Tier       | Name           | Description                                      |
| ---------- | -------------- | ------------------------------------------------ |
| **Tier 1** | **Starter**    | New users needing guidance and basic features    |
| **Tier 2** | **Growth**     | Established users scaling their operations       |
| **Tier 3** | **Scale**      | High-volume operations with team collaboration   |
| **Tier 4** | **Enterprise** | Organizations managing multiple accounts/clients |

---

## 2. Pricing Structure (Monthly/Annual)

| Tier           | Monthly Price           | Annual Price        | Annual Savings |
| -------------- | ----------------------- | ------------------- | -------------- |
| **Starter**    | $149/mo                 | $119/mo ($1,428/yr) | 20%            |
| **Growth**     | $399/mo                 | $319/mo ($3,828/yr) | 20%            |
| **Scale**      | $799/mo                 | $639/mo ($7,668/yr) | 20%            |
| **Enterprise** | Custom (from $1,500/mo) | Custom              | Negotiated     |

**Pricing Rationale:**

- Starter provides accessible entry point for new users
- Growth positioned for established users with more value
- Scale positioned for high-volume users with premium features
- Enterprise custom pricing for organizations with complex needs

---

## 3. Feature Matrix Per Tier

### Core Features (All Tiers)

| Feature             | Starter | Growth | Scale | Enterprise |
| ------------------- | ------- | ------ | ----- | ---------- |
| Account creation    | Yes     | Yes    | Yes   | Yes        |
| Basic dashboard     | Yes     | Yes    | Yes   | Yes        |
| <core-feature-1>    | Yes     | Yes    | Yes   | Yes        |
| <core-feature-2>    | Yes     | Yes    | Yes   | Yes        |
| <core-feature-3>    | Yes     | Yes    | Yes   | Yes        |
| Email notifications | Yes     | Yes    | Yes   | Yes        |

### Advanced Features (Gated by Tier)

| Feature                 | Starter   | Growth              | Scale     | Enterprise   |
| ----------------------- | --------- | ------------------- | --------- | ------------ |
| Multi-user accounts     | No        | 3 seats             | 10 seats  | Unlimited    |
| Account verification    | Manual    | Priority            | Priority  | Dedicated    |
| <feature-1>             | No        | Yes                 | Yes       | Yes          |
| <feature-2>             | Basic     | Advanced            | Advanced  | Advanced     |
| <feature-3>             | 5 max     | 25 max              | Unlimited | Unlimited    |
| Saved items (favorites) | 10 max    | 50 max              | Unlimited | Unlimited    |
| Search filters          | Basic     | Advanced            | Advanced  | Advanced     |
| Templates library       | Community | Community + Premium | All       | All + Custom |

### Enterprise Features

| Feature                      | Starter     | Growth      | Scale             | Enterprise         |
| ---------------------------- | ----------- | ----------- | ----------------- | ------------------ |
| Multi-account management     | No          | No          | No                | Yes (15+ accounts) |
| Unified dashboard            | No          | No          | No                | Yes                |
| White-label options          | No          | No          | No                | Optional           |
| API access                   | No          | No          | Limited           | Full               |
| Advanced analytics/reporting | No          | Basic       | Advanced          | Custom             |
| Dedicated account manager    | No          | No          | No                | Yes                |
| Priority support             | Email (48h) | Email (24h) | Chat + Email (4h) | Dedicated Slack    |

---

## 4. Usage Limits

| Limit                         | Starter   | Growth    | Scale     | Enterprise   |
| ----------------------------- | --------- | --------- | --------- | ------------ |
| **<usage-limit-1>/month**     | 3         | 15        | Unlimited | Unlimited    |
| **Active items (concurrent)** | 5         | 25        | 100       | Unlimited    |
| **Team seats included**       | 1         | 3         | 10        | Unlimited    |
| **Additional seat cost**      | N/A       | $29/mo    | $29/mo    | Included     |
| **Accounts per organization** | 1         | 1         | 1         | 15+ (custom) |
| **<usage-limit-2>/month**     | 10        | 50        | Unlimited | Unlimited    |
| **<usage-limit-3>**           | 72h       | 48h       | 48h       | Custom       |
| **History retention**         | 12 months | 24 months | Unlimited | Unlimited    |

---

## 5. Commission Rates Per Tier

The platform takes commission from transactions upon completion. Commission rates decrease at higher tiers to reward volume:

| Tier           | Platform Commission | User Net | Notes            |
| -------------- | ------------------- | -------- | ---------------- |
| **Starter**    | 15%                 | 85%      | Standard rate    |
| **Growth**     | 12%                 | 88%      | Volume discount  |
| **Scale**      | 10%                 | 90%      | Premium discount |
| **Enterprise** | 8-10%               | 90-92%   | Negotiated       |

**Example:** For a $200 transaction:

- Starter: User receives $170, platform takes $30
- Growth: User receives $176, platform takes $24
- Scale: User receives $180, platform takes $20
- Enterprise: User receives $180-184, platform takes $16-20

---

## 6. Upgrade/Downgrade Policies

### Upgrades

- **Immediate effect:** Access to new features is instant upon upgrade
- **Prorated billing:** Remaining value of current period applied as credit
- **No lock-in:** Can upgrade at any time during billing cycle
- **Limit increases:** New limits take effect immediately
- **Activity continuity:** Active items continue unaffected

### Downgrades

- **End of billing period:** Downgrade takes effect at renewal
- **Grace period for limits:** 30-day grace to reduce active items below new limits
- **Data retention:** Historical data retained based on new tier limits
- **Feature access:** Advanced features disabled at renewal
- **Team seats:** Owner can select which seats to retain (others receive 14-day notice)

### Cancellation

- **No long-term contracts:** Cancel anytime (monthly/annual)
- **Annual refund policy:** Prorated refund for unused months (minus 20% early termination if < 6 months)
- **Activity completion:** Active items continue to completion even after cancellation
- **Data export:** 30-day window to export all data after cancellation
- **Account dormancy:** Account preserved but marked inactive

---

## 7. Trial Period Strategy

### Free Trial Approach

| Aspect               | Details                                             |
| -------------------- | --------------------------------------------------- |
| **Duration**         | 14 days                                             |
| **Tier access**      | Growth tier features                                |
| **Payment required** | Credit card on file (not charged until trial ends)  |
| **Limits**           | Reduced limits (subset of Growth tier)              |
| **Commission**       | 15% (Starter rate) during trial                     |
| **Conversion path**  | Auto-converts to Growth if not cancelled or changed |

### Trial Objectives

1. **Educate new users:** Guide users through first successful interaction
2. **Demonstrate value:** Show workflow efficiency
3. **Reduce risk:** Payment protection from day one builds trust
4. **Qualify leads:** Credit card requirement filters serious users

### Trial-to-Paid Conversion Tactics

- Day 1: Welcome email with guided tutorial
- Day 7: Milestone check - "Have you completed your first <action>?"
- Day 10: Tier comparison - "Which plan fits your needs?"
- Day 12: Urgency + offer - "2 days left - get 10% off first month"
- Day 14: Conversion or downgrade to Starter prompt

---

## 8. Enterprise/Custom Tier Considerations

### Enterprise Tier Features

**For Organizations:**

- Multi-account management: Manage 15+ accounts under one organization
- Unified dashboard: Single view of all accounts' activity
- Organization-wide settings: Shared preferences across accounts
- Custom reporting: Client-ready reports with white-label options
- Bulk operations: Perform actions across multiple accounts simultaneously

**Custom Pricing Factors:**

- Number of accounts
- Expected monthly volume
- API access requirements
- White-label customization
- Dedicated support level
- Custom commission rates

**Enterprise Onboarding:**

- Dedicated account manager
- Custom training sessions
- API integration support
- Account migration assistance
- Custom contract terms (NET 30, etc.)

### Minimum Commitment

- 12-month agreement (negotiable)
- Minimum monthly spend: $1,500/mo or equivalent volume
- Custom SLA agreements available

---

## 9. Revenue Model Summary

**Revenue Streams:**

1. **Subscription fees:** Primary revenue from subscriptions
2. **Commission:** 8-15% of each completed transaction
3. **Add-ons:** Extra seats ($29/mo), extra accounts (Enterprise)
4. **Future:** Usage extension fees, premium features, API access tiers

**Unit Economics Target:**

- Average subscription: $350/mo
- Average transactions per subscriber: 8/mo
- Average transaction value: $200
- Average commission per transaction: $24
- Monthly revenue per subscriber: $350 + $192 = $542

---

## Polar Integration Notes

All subscription billing will be handled through Polar:

- **Products:** Create products for each tier (Starter, Growth, Scale)
- **Pricing:** Configure monthly and annual pricing options
- **Webhooks:** Handle subscription lifecycle events (created, updated, canceled)
- **Customer Portal:** Allow users to manage their subscription via Polar's portal
- **Usage Metering:** Track usage for limit enforcement
- **Commission Collection:** Payments processed through Polar with automatic fee calculation
