# Two-Sided Marketplace Trust System - Generic Template

> **Template Note:** This document describes a generic two-sided marketplace trust system architecture. It is designed to be adapted for any marketplace connecting service providers with clients. Placeholders (e.g., `<provider-factor-1>`, `<client-badge-1>`) should be replaced with domain-specific factors relevant to your marketplace vertical.

---

## Executive Summary

The trust system is the backbone of a two-sided marketplace platform, designed to create an environment where both clients and providers can operate with confidence. Unlike popularity-based systems (follower counts, review volume), this system rewards verifiable behaviors and builds trust through consistent, measurable actions.

**Core Design Principles:**

1. **Entity-based identity** - Trust attaches to clients/providers as entities, not email addresses
2. **Behavior-based gamification** - Scores, levels, and badges reflect verifiable actions
3. **Earned, not purchased** - Trust cannot be bought, only demonstrated over time
4. **Bidirectional trust** - Both clients and providers are measured and visible to each other
5. **Slow to earn, slow to lose** - Prevents gaming and provides stability

---

## 1. Trust Scores - Calculation Methodology

### 1.1 Provider Reliability Score (0-100)

The Provider Reliability Score is a composite metric reflecting a provider's trustworthiness and professionalism.

**Factors and Weighting:**

| Factor                       | Weight | Description                              | Measurement                                            |
| ---------------------------- | ------ | ---------------------------------------- | ------------------------------------------------------ |
| `<provider-factor-1>`        | 30%    | Primary delivery/completion metric       | (Successful completions / Total orders) x 100          |
| `<provider-factor-2>`        | 25%    | Quality acceptance rate                  | (First-submission approvals / Total submissions) x 100 |
| `<provider-factor-3>`        | 15%    | Revision/correction handling             | (Successful revisions / Total revision requests) x 100 |
| Communication responsiveness | 15%    | Average response time to client messages | Scaled: <2hr=100, <8hr=80, <24hr=60, >24hr=40          |
| `<provider-factor-4>`        | 10%    | Specification/requirements adherence     | Client confirmation + dispute absence                  |
| Order completion rate        | 5%     | Orders completed vs orders accepted      | (Completed / Accepted) x 100                           |

**Calculation Formula:**

```
Reliability Score = (F1 x 0.30) + (F2 x 0.25) + (F3 x 0.15) + (CR x 0.15) + (F4 x 0.10) + (OCR x 0.05)
```

**Score Display:**

- 90-100: Exceptional
- 75-89: Highly Reliable
- 60-74: Reliable
- 40-59: Developing
- Below 40: At Risk (flagged for review)

### 1.2 Client Integrity Score (0-100)

The Client Integrity Score indicates how trustworthy and professional a client is to work with.

**Factors and Weighting:**

| Factor                  | Weight | Description                                        | Measurement                                  |
| ----------------------- | ------ | -------------------------------------------------- | -------------------------------------------- |
| `<client-factor-1>`     | 25%    | Reviews submissions within response window         | (Timely reviews / Total submissions) x 100   |
| Payment integrity       | 25%    | No chargebacks, escrow disputes, or payment issues | (Clean payments / Total payments) x 100      |
| Dispute rate            | 20%    | Percentage of orders resulting in disputes         | 100 - (Disputes / Total orders x 100)        |
| Revision reasonableness | 15%    | Revision requests within scope and limits          | (In-scope revisions / Total revisions) x 100 |
| `<client-factor-2>`     | 10%    | Fulfillment of client-side obligations             | (Accurate fulfillments / Total orders) x 100 |
| `<client-factor-3>`     | 5%     | Quality of initial requirements/specifications     | Based on clarification messages per order    |

**Calculation Formula:**

```
Integrity Score = (F1 x 0.25) + (PI x 0.25) + (DR x 0.20) + (RR x 0.15) + (F2 x 0.10) + (F3 x 0.05)
```

**Score Display:**

- 90-100: Exemplary
- 75-89: High Integrity
- 60-74: Good Standing
- 40-59: Caution
- Below 40: Restricted (cannot use auto-accept, flagged for admin review)

### 1.3 Rolling Window and Recency Weighting

Scores are calculated using a **rolling 90-day window** with recency weighting:

- Last 30 days: 50% weight
- 31-60 days: 30% weight
- 61-90 days: 20% weight

This ensures recent behavior matters most while maintaining stability.

---

## 2. Experience Levels - Progression Criteria

### 2.1 Provider Experience Levels

| Level | Name             | Requirements                                                     | Benefits Unlocked                                       |
| ----- | ---------------- | ---------------------------------------------------------------- | ------------------------------------------------------- |
| 1     | `<level-name-1>` | Account created, profile complete                                | Access to marketplace listings                          |
| 2     | `<level-name-2>` | 3 completed orders + identity verification                       | Visible verification badge, priority in searches        |
| 3     | `<level-name-3>` | 10 completed orders + 70+ reliability score                      | Auto-accept eligibility, higher listing visibility      |
| 4     | `<level-name-4>` | 25 completed orders + 80+ reliability score + 3 months tenure    | Featured placement, access to premium listings          |
| 5     | `<level-name-5>` | 50 completed orders + 85+ reliability score + 6 months tenure    | Top visibility, reduced commission rate (optional)      |
| 6     | `<level-name-6>` | 100+ completed orders + 90+ reliability score + 12 months tenure | VIP status, early access to features, dedicated support |

**Level Progression Rules:**

- Cannot skip levels
- Must maintain score threshold for 30 consecutive days to level up
- Losing threshold for 60+ days triggers level review (not automatic demotion)
- Admin can manually adjust levels in exceptional circumstances

### 2.2 Client Experience Levels

| Level | Name             | Requirements                                                   | Benefits Unlocked                                      |
| ----- | ---------------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| 1     | `<level-name-1>` | Account created, subscription active                           | Post listings, manual provider selection               |
| 2     | `<level-name-2>` | 3 completed orders + payment method verified                   | Access to invite-only listings                         |
| 3     | `<level-name-3>` | 10 completed orders + 70+ integrity score                      | Auto-accept configuration unlocked                     |
| 4     | `<level-name-4>` | 25 completed orders + 80+ integrity score + verified status    | Priority matching, saved provider lists                |
| 5     | `<level-name-5>` | 50 completed orders + 85+ integrity score + 6 months tenure    | Featured listing placement, bulk listing creation      |
| 6     | `<level-name-6>` | 100+ completed orders + 90+ integrity score + 12 months tenure | Custom integrations, account manager, negotiated rates |

---

## 3. Badge System

### 3.1 Provider Badges

**Behavior-Based Badges (Automatic):**

| Badge                | Criteria                                                 | Display         | Revocable                           |
| -------------------- | -------------------------------------------------------- | --------------- | ----------------------------------- |
| `<provider-badge-1>` | 95%+ on-time delivery over 20+ orders                    | Gold clock icon | Yes, if drops below 90% for 30 days |
| `<provider-badge-2>` | 80%+ first-submission approvals over 15+ orders          | Star icon       | Yes, if drops below 70% for 30 days |
| `<provider-badge-3>` | Average delivery 2+ days before deadline over 10+ orders | Lightning bolt  | Yes, if average slips to deadline   |
| `<provider-badge-4>` | <15% revision rate over 20+ orders                       | Checkmark icon  | Yes, if rises above 25% for 30 days |
| `<provider-badge-5>` | Average response time <4 hours over 30+ days             | Chat bubble     | Yes, if average exceeds 12 hours    |
| `<provider-badge-6>` | 10+ orders with premium service tier delivered           | Premium icon    | Yes, if service violation reported  |
| `<provider-badge-7>` | 15+ orders in a single category with 85+ approval        | Specialty icon  | Yes, if approval drops in category  |

**Verification Badges (One-Time):**

| Badge              | Criteria                                  | Display      | Revocable                          |
| ------------------ | ----------------------------------------- | ------------ | ---------------------------------- |
| ID Verified        | Completed KYC verification                | Shield icon  | Only if fraud detected             |
| Location Confirmed | Verified address                          | Pin icon     | On address change (must re-verify) |
| Portfolio Verified | Platform-hosted portfolio with 5+ samples | Gallery icon | No                                 |

### 3.2 Client Badges

**Behavior-Based Badges (Automatic):**

| Badge              | Criteria                                              | Display        | Revocable                           |
| ------------------ | ----------------------------------------------------- | -------------- | ----------------------------------- |
| `<client-badge-1>` | 90%+ integrity score maintained for 60+ days          | Diamond icon   | Yes, if drops below 85% for 30 days |
| `<client-badge-2>` | <5% clarification rate over 15+ listings              | Document icon  | Yes, if rises above 15%             |
| `<client-badge-3>` | 90%+ approvals within response window over 20+ orders | Hourglass icon | Yes, if drops below 80%             |
| `<client-badge-4>` | <20% revision rate over 20+ orders                    | Thumbs up      | Yes, if rises above 30%             |
| `<client-badge-5>` | 95%+ on-time fulfillment over 10+ orders              | Box icon       | Yes, if drops below 90%             |
| `<client-badge-6>` | Has rehired same provider 3+ times                    | Heart icon     | No (historical)                     |

**Verification Badges (One-Time):**

| Badge                  | Criteria                                             | Display            | Revocable                     |
| ---------------------- | ---------------------------------------------------- | ------------------ | ----------------------------- |
| Verified Client        | Domain + social accounts connected                   | Verified checkmark | Only if accounts disconnected |
| Integrations Connected | External service accounts linked                     | Integration icon   | On disconnect                 |
| Payment Verified       | Payment method verified, no chargebacks in 6+ months | Credit card icon   | On chargeback                 |

---

## 4. Client Trust Indicators (For Providers to Vet Clients)

Providers see the following when evaluating whether to accept a listing:

**Primary Indicators:**

- Client Integrity Score (0-100 with category label)
- Experience Level (1-6 with name)
- Active Badges

**Detailed Metrics:**

- Total completed orders
- Total active orders
- Average approval time (hours)
- Revision request rate (%)
- Dispute rate (%)
- Provider acceptance rate (% of applications accepted)
- Repeat provider rate (% of orders with returning providers)

**History Access:**

- Last 10 public reviews from providers
- Dispute resolution outcomes (anonymized)
- Fulfillment accuracy (for orders with client obligations)

**Red Flags (System-Generated Warnings):**

- Client integrity below 60: "This client has below-average integrity scores"
- Dispute rate above 10%: "This client has an elevated dispute rate"
- High revision rate: "This client frequently requests revisions"
- Slow approval: "This client takes longer than average to approve submissions"

---

## 5. Provider Trust Indicators (For Clients to Select Providers)

Clients see the following when evaluating provider applications:

**Primary Indicators:**

- Provider Reliability Score (0-100 with category label)
- Experience Level (1-6 with name)
- Active Badges

**Detailed Metrics:**

- Total completed orders
- On-time delivery rate (%)
- First-submission approval rate (%)
- Average revision count per order
- Average response time
- Specializations/categories

**History Access:**

- Last 10 public reviews from clients
- Portfolio samples (if uploaded)
- Work history summary (categories, service types)

**Trust Qualifiers for Auto-Accept:**

- Minimum level met: Yes/No
- Minimum score met: Yes/No
- Required badges present: Yes/No
- Previous work with this client: Yes/No/Number of orders
- Active disputes: Yes/No

---

## 6. Trust Decay and Maintenance Rules

### 6.1 Score Decay

**Inactivity Decay:**

- After 60 days of no activity: Score begins gradual decay
- Decay rate: 1 point per week of continued inactivity
- Maximum decay: 20 points (score floors at 60% of original)
- Decay stops immediately upon completing any order

**Why Decay Exists:**

- Ensures active participants are prioritized
- Prevents dormant accounts from maintaining high trust unfairly
- Encourages consistent platform participation

### 6.2 Badge Maintenance

**Behavioral badges require ongoing performance:**

- Badges are re-evaluated weekly
- If criteria drops below threshold for 30 days, badge enters "warning" state
- If criteria remains below threshold for 60 days, badge is revoked
- Badge can be re-earned by meeting criteria again

**Grace periods:**

- First badge loss: 14-day grace period before visible removal
- Subsequent losses: Immediate removal

### 6.3 Level Maintenance

**Levels are sticky but not permanent:**

- Score threshold must be maintained
- If score drops below level threshold for 90+ days, level review is triggered
- Admin reviews case before any demotion
- Demotion is never more than 1 level at a time
- 30-day notification period before any level change

---

## 7. Fraud Detection Signals

### 7.1 Provider Fraud Signals

| Signal              | Detection Method                                   | Action                        |
| ------------------- | -------------------------------------------------- | ----------------------------- |
| Fake portfolio      | AI analysis + reverse image search                 | Flag for manual review        |
| Multiple accounts   | IP/device fingerprinting + payment method matching | Account merge or suspension   |
| Review manipulation | Unusual review patterns, coordinated timing        | Reviews removed, flag account |
| Fake completions    | Same client/provider completing orders rapidly     | Investigate relationship      |
| Identity fraud      | KYC verification failure or document tampering     | Immediate suspension          |

### 7.2 Client Fraud Signals

| Signal               | Detection Method                                        | Action                                |
| -------------------- | ------------------------------------------------------- | ------------------------------------- |
| Entity cycling       | Domain/payment/personnel overlap with restricted client | Merge entities, carry over history    |
| Chargeback abuse     | Multiple chargebacks after receiving service            | Restrict account, require pre-funding |
| Dispute manipulation | Pattern of disputes for free service                    | Restrict auto-accept, admin review    |
| Fake orders          | Self-ordering to inflate metrics                        | Remove fake orders, reset metrics     |
| Payment fraud        | Stolen payment methods or fraud flags                   | Immediate suspension                  |

### 7.3 Platform-Level Detection

**Behavioral Anomaly Detection:**

- Unusual order velocity (too many orders too quickly)
- Score volatility (rapid unexplained changes)
- Communication pattern anomalies
- Geographic inconsistencies

**Automated Actions:**

- Soft flag: Increased monitoring, no user impact
- Medium flag: Restrict certain features pending review
- Hard flag: Account suspension pending admin review

---

## 8. Dispute Impact on Trust

### 8.1 Dispute Lifecycle

1. **Dispute Filed** - Either party initiates
2. **Evidence Collection** - Both parties submit documentation
3. **Admin Review** - Platform reviews case
4. **Resolution** - Outcome determined
5. **Trust Adjustment** - Scores adjusted based on outcome

### 8.2 Trust Impact by Dispute Outcome

**For Providers:**

| Outcome                        | Score Impact      | Badge Impact             | Level Impact           |
| ------------------------------ | ----------------- | ------------------------ | ---------------------- |
| Ruled in provider's favor      | No penalty        | No penalty               | No penalty             |
| Ruled against provider (minor) | -5 to -10 points  | Warning on related badge | None                   |
| Ruled against provider (major) | -15 to -25 points | Badge revoked if related | Level review triggered |
| Provider at fault (severe)     | -30+ points       | Multiple badges revoked  | Level demotion         |

**For Clients:**

| Outcome                      | Score Impact      | Badge Impact             | Level Impact                         |
| ---------------------------- | ----------------- | ------------------------ | ------------------------------------ |
| Ruled in client's favor      | No penalty        | No penalty               | No penalty                           |
| Ruled against client (minor) | -5 to -10 points  | Warning on related badge | None                                 |
| Ruled against client (major) | -15 to -25 points | Badge revoked if related | Level review triggered               |
| Client at fault (severe)     | -30+ points       | Multiple badges revoked  | Auto-accept disabled, level demotion |

### 8.3 Dispute Rate Impact

- Dispute rate is calculated as: (Disputes / Total Orders) x 100
- Rate is visible to counterparties
- Rate above 5%: Warning displayed
- Rate above 10%: Trust restrictions apply
- Rate above 20%: Account review, potential suspension

---

## 9. New User Bootstrapping (Cold Start Problem)

### 9.1 Provider Cold Start

**Initial Trust Setup:**

- New providers start at Level 1 with a "New Provider" designation
- Initial reliability score: 70 (neutral starting point)
- Score becomes "real" after 3 completed orders

**Early Order Protection:**

- First 5 orders are weighted lighter in score calculation (50% weight)
- Poor performance on early orders has limited long-term impact
- Exceptional early performance gets normal credit

**Visibility Boost:**

- New providers (Level 1) get dedicated "New Talent" section
- Listing matching includes "new provider" filter for clients
- New providers cannot be filtered OUT entirely (always some visibility)

**Accelerated Progression:**

- First level-up (1 to 2) requires only 3 orders instead of usual metrics
- Verification unlocks immediate visibility boost

### 9.2 Client Cold Start

**Initial Trust Setup:**

- New clients start at Level 1 with "New Client" designation
- Initial integrity score: 70 (neutral starting point)
- Score becomes "real" after 3 completed orders

**Provider Transparency:**

- "New Client" label clearly displayed to providers
- Providers can filter to show/hide new clients
- New client orders show enhanced escrow confirmation messaging

**Feature Gating:**

- Auto-accept locked until Level 3 (10 completed orders)
- Invite-only listings locked until Level 2 (3 completed orders)
- Bulk operations locked until Level 5

**Verification Incentives:**

- Verified clients (domain + social) start with +5 score bonus
- Connected integrations add +3 score bonus
- These bonuses remain until real score is established

### 9.3 Bootstrapping Safeguards

**Anti-Gaming Measures:**

- Cannot artificially complete orders to inflate metrics
- Orders below minimum value don't count toward level progression
- Cancelled orders count negatively
- Self-dealing detection active from first order

---

## 10. Trust Tier Thresholds and Benefits

### 10.1 Provider Trust Tiers

| Tier         | Score Range | Level Req | Benefits                                                                    |
| ------------ | ----------- | --------- | --------------------------------------------------------------------------- |
| **Bronze**   | 0-59        | 1-2       | Basic marketplace access                                                    |
| **Silver**   | 60-74       | 2-3       | Standard matching, visible in searches                                      |
| **Gold**     | 75-84       | 3-4       | Auto-accept eligible, priority matching, featured in category               |
| **Platinum** | 85-94       | 4-5       | Premium listing access, reduced commission (optional), top search placement |
| **Diamond**  | 95-100      | 5-6       | VIP status, exclusive opportunities, lowest commission, dedicated support   |

**Tier-Specific Features:**

| Feature              | Bronze    | Silver   | Gold           | Platinum        | Diamond        |
| -------------------- | --------- | -------- | -------------- | --------------- | -------------- |
| Marketplace access   | Yes       | Yes      | Yes            | Yes             | Yes            |
| Appear in search     | Limited   | Yes      | Priority       | Top tier        | First position |
| Auto-accept eligible | No        | No       | Yes            | Yes             | Yes            |
| Premium listings     | No        | No       | No             | Yes             | Yes            |
| Commission rate      | Standard  | Standard | Standard       | -2%             | -5%            |
| Support level        | Community | Email    | Priority email | Priority + chat | Dedicated rep  |

### 10.2 Client Trust Tiers

| Tier         | Score Range | Level Req | Benefits                                                     |
| ------------ | ----------- | --------- | ------------------------------------------------------------ |
| **Bronze**   | 0-59        | 1-2       | Basic listing creation, manual selection only                |
| **Silver**   | 60-74       | 2-3       | Full listing features, standard matching                     |
| **Gold**     | 75-84       | 3-4       | Auto-accept enabled, priority provider matching              |
| **Platinum** | 85-94       | 4-5       | Featured listings, bulk creation, premium provider access    |
| **Diamond**  | 95-100      | 5-6       | Enterprise features, custom integrations, account management |

**Tier-Specific Features:**

| Feature                   | Bronze        | Silver   | Gold           | Platinum                | Diamond                     |
| ------------------------- | ------------- | -------- | -------------- | ----------------------- | --------------------------- |
| Listing creation          | Basic         | Full     | Full           | Bulk                    | Unlimited                   |
| Auto-accept               | No            | No       | Yes            | Yes                     | Advanced rules              |
| Provider tiers accessible | Bronze-Silver | All      | All            | Priority with Platinum+ | Exclusive Diamond providers |
| Listing visibility        | Standard      | Standard | Featured       | Premium placement       | Top placement               |
| Subscription discount     | None          | None     | 5%             | 10%                     | Custom                      |
| Support level             | Help center   | Email    | Priority email | Priority + chat         | Dedicated rep               |

### 10.3 Trust Tier Transitions

**Promotion Rules:**

- Meet score AND level requirements
- Maintain score for 30 consecutive days
- No active disputes
- Automatic promotion when criteria met

**Demotion Rules:**

- Score drops below tier threshold for 60 consecutive days
- 14-day warning period with notification
- Demotion is gradual (one tier at a time)
- 30-day "cooldown" before re-promotion attempt

---

## Implementation Phases

### Phase 1 (MVP Foundation)

- Basic reliability/integrity scores (simplified 3-factor version)
- Experience levels 1-3 only
- Core badges (`<provider-badge-1>`, ID Verified, Verified Client)
- New user bootstrapping

### Phase 2 (Full Trust System)

- Complete score calculation with all factors
- All 6 experience levels
- Full badge system
- Trust tiers with benefits
- Decay and maintenance rules

### Phase 3 (Advanced Trust)

- AI-powered fraud detection
- Predictive trust scoring
- Cross-platform trust portability (future)
- Advanced dispute resolution with ML assistance
