# Incorrect Discount Total

- Category: Debug / Logic Bugs
- Difficulty: Easy

## Contains
- `server/routes/checkout.ts`
- `server/services/pricingService.ts`
- `tests/pricing.test.ts`
- `package.json`

## Prompt
Percentage discounts are being applied after tax instead of before tax. Fix the pricing flow so totals are calculated in the correct order.

## Likely Change Dirs
- `server/routes`
- `server/services`
- `server/tests`
