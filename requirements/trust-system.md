# UGC Creator Platform - Trust System Specification

## Executive Summary

The trust system is the backbone of the UGC Creator Platform, designed to create a marketplace where both brands and creators can operate with confidence. Unlike popularity-based systems (follower counts, review volume), this system rewards verifiable behaviors and builds trust through consistent, measurable actions.

**Core Design Principles:**

1. **Entity-based identity** - Trust attaches to brands/creators as entities, not email addresses
2. **Behavior-based gamification** - Scores, levels, and badges reflect verifiable actions
3. **Earned, not purchased** - Trust cannot be bought, only demonstrated over time
4. **Bidirectional trust** - Both brands and creators are measured and visible to each other
5. **Slow to earn, slow to lose** - Prevents gaming and provides stability

---

## 1. Trust Scores - Calculation Methodology

### 1.1 Creator Reliability Score (0-100)

The Creator Reliability Score is a composite metric reflecting a creator's trustworthiness and professionalism.

**Factors and Weighting:**

| Factor                       | Weight | Description                                 | Measurement                                            |
| ---------------------------- | ------ | ------------------------------------------- | ------------------------------------------------------ |
| On-time delivery             | 30%    | Percentage of orders delivered by deadline  | (On-time deliveries / Total deliveries) x 100          |
| Approval rate                | 25%    | First-submission approval without revisions | (First-take approvals / Total submissions) x 100       |
| Revision success             | 15%    | Revisions completed within limits           | (Successful revisions / Total revision requests) x 100 |
| Communication responsiveness | 15%    | Average response time to brand messages     | Scaled: <2hr=100, <8hr=80, <24hr=60, >24hr=40          |
| Script adherence             | 10%    | Deliverables match approved script          | Brand confirmation + dispute absence                   |
| Order completion rate        | 5%     | Orders completed vs orders accepted         | (Completed / Accepted) x 100                           |

**Calculation Formula:**

```
Reliability Score = (OTD x 0.30) + (AR x 0.25) + (RS x 0.15) + (CR x 0.15) + (SA x 0.10) + (OCR x 0.05)
```

**Score Display:**

- 90-100: Exceptional
- 75-89: Highly Reliable
- 60-74: Reliable
- 40-59: Developing
- Below 40: At Risk (flagged for review)

### 1.2 Brand Integrity Score (0-100)

The Brand Integrity Score indicates how trustworthy and professional a brand is to work with.

**Factors and Weighting:**

| Factor                    | Weight | Description                                        | Measurement                                      |
| ------------------------- | ------ | -------------------------------------------------- | ------------------------------------------------ |
| Approval timeliness       | 25%    | Reviews submissions within response window         | (Timely reviews / Total submissions) x 100       |
| Payment integrity         | 25%    | No chargebacks, escrow disputes, or payment issues | (Clean payments / Total payments) x 100          |
| Dispute rate              | 20%    | Percentage of orders resulting in disputes         | 100 - (Disputes / Total orders x 100)            |
| Revision reasonableness   | 15%    | Revision requests within scope and limits          | (In-scope revisions / Total revisions) x 100     |
| Product delivery accuracy | 10%    | Products delivered on time with correct tracking   | (Accurate deliveries / Total product jobs) x 100 |
| Brief quality             | 5%     | Briefs require minimal clarification               | Based on clarification messages per brief        |

**Calculation Formula:**

```
Integrity Score = (AT x 0.25) + (PI x 0.25) + (DR x 0.20) + (RR x 0.15) + (PDA x 0.10) + (BQ x 0.05)
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

### 2.1 Creator Experience Levels

| Level | Name                 | Requirements                                                     | Benefits Unlocked                                       |
| ----- | -------------------- | ---------------------------------------------------------------- | ------------------------------------------------------- |
| 1     | New Creator          | Account created, profile complete                                | Access to marketplace briefs                            |
| 2     | Verified Creator     | 3 completed orders + identity verification                       | Visible verification badge, priority in searches        |
| 3     | Established Creator  | 10 completed orders + 70+ reliability score                      | Auto-accept eligibility, higher brief visibility        |
| 4     | Professional Creator | 25 completed orders + 80+ reliability score + 3 months tenure    | Featured placement, access to premium briefs            |
| 5     | Expert Creator       | 50 completed orders + 85+ reliability score + 6 months tenure    | Top visibility, reduced commission rate (optional)      |
| 6     | Elite Creator        | 100+ completed orders + 90+ reliability score + 12 months tenure | VIP status, early access to features, dedicated support |

**Level Progression Rules:**

- Cannot skip levels
- Must maintain score threshold for 30 consecutive days to level up
- Losing threshold for 60+ days triggers level review (not automatic demotion)
- Admin can manually adjust levels in exceptional circumstances

### 2.2 Brand Experience Levels

| Level | Name              | Requirements                                                   | Benefits Unlocked                                      |
| ----- | ----------------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| 1     | New Brand         | Account created, subscription active                           | Post briefs, manual creator selection                  |
| 2     | Active Brand      | 3 completed orders + payment method verified                   | Access to invite-only briefs                           |
| 3     | Trusted Brand     | 10 completed orders + 70+ integrity score                      | Auto-accept configuration unlocked                     |
| 4     | Established Brand | 25 completed orders + 80+ integrity score + verified status    | Priority matching, saved creator lists                 |
| 5     | Premium Brand     | 50 completed orders + 85+ integrity score + 6 months tenure    | Featured brief placement, bulk brief creation          |
| 6     | Enterprise Brand  | 100+ completed orders + 90+ integrity score + 12 months tenure | Custom integrations, account manager, negotiated rates |

---

## 3. Badge System

### 3.1 Creator Badges

**Behavior-Based Badges (Automatic):**

| Badge           | Criteria                                                 | Display         | Revocable                           |
| --------------- | -------------------------------------------------------- | --------------- | ----------------------------------- |
| On-Time Pro     | 95%+ on-time delivery over 20+ orders                    | Gold clock icon | Yes, if drops below 90% for 30 days |
| First-Take Ace  | 80%+ first-submission approvals over 15+ orders          | Star icon       | Yes, if drops below 70% for 30 days |
| Fast Turnaround | Average delivery 2+ days before deadline over 10+ orders | Lightning bolt  | Yes, if average slips to deadline   |
| Low Revision    | <15% revision rate over 20+ orders                       | Checkmark icon  | Yes, if rises above 25% for 30 days |
| Responsive      | Average response time <4 hours over 30+ days             | Chat bubble     | Yes, if average exceeds 12 hours    |
| Ad-Ready        | 10+ orders with paid usage rights delivered successfully | Ad icon         | Yes, if usage violation reported    |
| Niche Expert    | 15+ orders in a single niche category with 85+ approval  | Specialty icon  | Yes, if approval drops in niche     |

**Verification Badges (One-Time):**

| Badge              | Criteria                                  | Display      | Revocable                          |
| ------------------ | ----------------------------------------- | ------------ | ---------------------------------- |
| ID Verified        | Completed KYC verification                | Shield icon  | Only if fraud detected             |
| Location Confirmed | Verified shipping address                 | Pin icon     | On address change (must re-verify) |
| Portfolio Verified | Platform-hosted portfolio with 5+ samples | Gallery icon | No                                 |

### 3.2 Brand Badges

**Behavior-Based Badges (Automatic):**

| Badge                 | Criteria                                              | Display        | Revocable                           |
| --------------------- | ----------------------------------------------------- | -------------- | ----------------------------------- |
| High Integrity        | 90%+ integrity score maintained for 60+ days          | Diamond icon   | Yes, if drops below 85% for 30 days |
| Clear Briefs          | <5% clarification rate over 15+ briefs                | Document icon  | Yes, if rises above 15%             |
| Fair Reviewer         | 90%+ approvals within response window over 20+ orders | Hourglass icon | Yes, if drops below 80%             |
| Low Revision Requests | <20% revision rate over 20+ orders                    | Thumbs up      | Yes, if rises above 30%             |
| Product Reliable      | 95%+ on-time product delivery over 10+ product jobs   | Box icon       | Yes, if drops below 90%             |
| Repeat Client         | Has rehired same creator 3+ times                     | Heart icon     | No (historical)                     |

**Verification Badges (One-Time):**

| Badge                 | Criteria                                             | Display            | Revocable                     |
| --------------------- | ---------------------------------------------------- | ------------------ | ----------------------------- |
| Verified Brand        | Domain + social accounts connected                   | Verified checkmark | Only if accounts disconnected |
| Ad Accounts Connected | Meta/TikTok/Google ads linked                        | Integration icon   | On disconnect                 |
| Payment Verified      | Payment method verified, no chargebacks in 6+ months | Credit card icon   | On chargeback                 |

---

## 4. Brand Trust Indicators (For Creators to Vet Brands)

Creators see the following when evaluating whether to accept a brief:

**Primary Indicators:**

- Brand Integrity Score (0-100 with category label)
- Experience Level (1-6 with name)
- Active Badges

**Detailed Metrics:**

- Total completed orders
- Total active orders
- Average approval time (hours)
- Revision request rate (%)
- Dispute rate (%)
- Creator approval rate (% of applications accepted)
- Repeat creator rate (% of orders with returning creators)

**History Access:**

- Last 10 public reviews from creators
- Dispute resolution outcomes (anonymized)
- Product delivery accuracy (for product jobs)

**Red Flags (System-Generated Warnings):**

- Brand integrity below 60: "This brand has below-average integrity scores"
- Dispute rate above 10%: "This brand has an elevated dispute rate"
- High revision rate: "This brand frequently requests revisions"
- Slow approval: "This brand takes longer than average to approve submissions"

---

## 5. Creator Trust Indicators (For Brands to Select Creators)

Brands see the following when evaluating creator applications:

**Primary Indicators:**

- Creator Reliability Score (0-100 with category label)
- Experience Level (1-6 with name)
- Active Badges

**Detailed Metrics:**

- Total completed orders
- On-time delivery rate (%)
- First-submission approval rate (%)
- Average revision count per order
- Average response time
- Specializations/niches

**History Access:**

- Last 10 public reviews from brands
- Portfolio samples (if uploaded)
- Work history summary (niches, content types)

**Trust Qualifiers for Auto-Accept:**

- Minimum level met: Yes/No
- Minimum score met: Yes/No
- Required badges present: Yes/No
- Previous work with this brand: Yes/No/Number of orders
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

### 7.1 Creator Fraud Signals

| Signal              | Detection Method                                   | Action                        |
| ------------------- | -------------------------------------------------- | ----------------------------- |
| Fake portfolio      | AI analysis + reverse image search                 | Flag for manual review        |
| Multiple accounts   | IP/device fingerprinting + payment method matching | Account merge or suspension   |
| Review manipulation | Unusual review patterns, coordinated timing        | Reviews removed, flag account |
| Fake completions    | Same brand/creator completing orders rapidly       | Investigate relationship      |
| Identity fraud      | KYC verification failure or document tampering     | Immediate suspension          |

### 7.2 Brand Fraud Signals

| Signal               | Detection Method                                       | Action                                |
| -------------------- | ------------------------------------------------------ | ------------------------------------- |
| Entity cycling       | Domain/payment/personnel overlap with restricted brand | Merge entities, carry over history    |
| Chargeback abuse     | Multiple chargebacks after receiving content           | Restrict account, require pre-funding |
| Dispute manipulation | Pattern of disputes for free content                   | Restrict auto-accept, admin review    |
| Fake orders          | Self-ordering to inflate metrics                       | Remove fake orders, reset metrics     |
| Payment fraud        | Stolen payment methods or fraud flags                  | Immediate suspension                  |

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

**For Creators:**

| Outcome                       | Score Impact      | Badge Impact             | Level Impact           |
| ----------------------------- | ----------------- | ------------------------ | ---------------------- |
| Ruled in creator's favor      | No penalty        | No penalty               | No penalty             |
| Ruled against creator (minor) | -5 to -10 points  | Warning on related badge | None                   |
| Ruled against creator (major) | -15 to -25 points | Badge revoked if related | Level review triggered |
| Creator at fault (severe)     | -30+ points       | Multiple badges revoked  | Level demotion         |

**For Brands:**

| Outcome                     | Score Impact      | Badge Impact             | Level Impact                         |
| --------------------------- | ----------------- | ------------------------ | ------------------------------------ |
| Ruled in brand's favor      | No penalty        | No penalty               | No penalty                           |
| Ruled against brand (minor) | -5 to -10 points  | Warning on related badge | None                                 |
| Ruled against brand (major) | -15 to -25 points | Badge revoked if related | Level review triggered               |
| Brand at fault (severe)     | -30+ points       | Multiple badges revoked  | Auto-accept disabled, level demotion |

### 8.3 Dispute Rate Impact

- Dispute rate is calculated as: (Disputes / Total Orders) x 100
- Rate is visible to counterparties
- Rate above 5%: Warning displayed
- Rate above 10%: Trust restrictions apply
- Rate above 20%: Account review, potential suspension

---

## 9. New User Bootstrapping (Cold Start Problem)

### 9.1 Creator Cold Start

**Initial Trust Setup:**

- New creators start at Level 1 with a "New Creator" designation
- Initial reliability score: 70 (neutral starting point)
- Score becomes "real" after 3 completed orders

**Early Order Protection:**

- First 5 orders are weighted lighter in score calculation (50% weight)
- Poor performance on early orders has limited long-term impact
- Exceptional early performance gets normal credit

**Visibility Boost:**

- New creators (Level 1) get dedicated "New Talent" section
- Brief matching includes "new creator" filter for brands
- New creators cannot be filtered OUT entirely (always some visibility)

**Accelerated Progression:**

- First level-up (1 to 2) requires only 3 orders instead of usual metrics
- Verification unlocks immediate visibility boost

### 9.2 Brand Cold Start

**Initial Trust Setup:**

- New brands start at Level 1 with "New Brand" designation
- Initial integrity score: 70 (neutral starting point)
- Score becomes "real" after 3 completed orders

**Creator Transparency:**

- "New Brand" label clearly displayed to creators
- Creators can filter to show/hide new brands
- New brand orders show enhanced escrow confirmation messaging

**Feature Gating:**

- Auto-accept locked until Level 3 (10 completed orders)
- Invite-only briefs locked until Level 2 (3 completed orders)
- Bulk operations locked until Level 5

**Verification Incentives:**

- Verified brands (domain + social) start with +5 score bonus
- Connected ad accounts add +3 score bonus
- These bonuses remain until real score is established

### 9.3 Bootstrapping Safeguards

**Anti-Gaming Measures:**

- Cannot artificially complete orders to inflate metrics
- Orders below minimum value don't count toward level progression
- Cancelled orders count negatively
- Self-dealing detection active from first order

---

## 10. Trust Tier Thresholds and Benefits

### 10.1 Creator Trust Tiers

| Tier         | Score Range | Level Req | Benefits                                                                  |
| ------------ | ----------- | --------- | ------------------------------------------------------------------------- |
| **Bronze**   | 0-59        | 1-2       | Basic marketplace access                                                  |
| **Silver**   | 60-74       | 2-3       | Standard matching, visible in searches                                    |
| **Gold**     | 75-84       | 3-4       | Auto-accept eligible, priority matching, featured in niche                |
| **Platinum** | 85-94       | 4-5       | Premium brief access, reduced commission (optional), top search placement |
| **Diamond**  | 95-100      | 5-6       | VIP status, exclusive opportunities, lowest commission, dedicated support |

**Tier-Specific Features:**

| Feature              | Bronze    | Silver   | Gold           | Platinum        | Diamond        |
| -------------------- | --------- | -------- | -------------- | --------------- | -------------- |
| Marketplace access   | Yes       | Yes      | Yes            | Yes             | Yes            |
| Appear in search     | Limited   | Yes      | Priority       | Top tier        | First position |
| Auto-accept eligible | No        | No       | Yes            | Yes             | Yes            |
| Premium briefs       | No        | No       | No             | Yes             | Yes            |
| Commission rate      | Standard  | Standard | Standard       | -2%             | -5%            |
| Support level        | Community | Email    | Priority email | Priority + chat | Dedicated rep  |

### 10.2 Brand Trust Tiers

| Tier         | Score Range | Level Req | Benefits                                                     |
| ------------ | ----------- | --------- | ------------------------------------------------------------ |
| **Bronze**   | 0-59        | 1-2       | Basic brief creation, manual selection only                  |
| **Silver**   | 60-74       | 2-3       | Full brief features, standard matching                       |
| **Gold**     | 75-84       | 3-4       | Auto-accept enabled, priority creator matching               |
| **Platinum** | 85-94       | 4-5       | Featured briefs, bulk creation, premium creator access       |
| **Diamond**  | 95-100      | 5-6       | Enterprise features, custom integrations, account management |

**Tier-Specific Features:**

| Feature                  | Bronze        | Silver   | Gold           | Platinum                | Diamond                    |
| ------------------------ | ------------- | -------- | -------------- | ----------------------- | -------------------------- |
| Brief creation           | Basic         | Full     | Full           | Bulk                    | Unlimited                  |
| Auto-accept              | No            | No       | Yes            | Yes                     | Advanced rules             |
| Creator tiers accessible | Bronze-Silver | All      | All            | Priority with Platinum+ | Exclusive Diamond creators |
| Brief visibility         | Standard      | Standard | Featured       | Premium placement       | Top placement              |
| Subscription discount    | None          | None     | 5%             | 10%                     | Custom                     |
| Support level            | Help center   | Email    | Priority email | Priority + chat         | Dedicated rep              |

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
- Core badges (On-Time Pro, ID Verified, Verified Brand)
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
