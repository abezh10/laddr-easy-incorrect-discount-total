# Incorrect Discount Total

- Category: Debug
- Topic: Logic Bugs
- Difficulty: Easy

## Overview
This sample repository is set up for an easy debug exercise in the logic bugs track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to trace the current behavior and fix the underlying defect.

## Exercise Summary
Percentage discounts are being applied after tax instead of before tax. Fix the pricing flow so totals are calculated in the correct order.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `package.json`
- `server/routes/checkout.ts`
- `server/services/pricingService.ts`
- `tests/pricing.test.ts`

## Likely Change Areas
- `server/routes`
- `server/services`
- `tests`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
