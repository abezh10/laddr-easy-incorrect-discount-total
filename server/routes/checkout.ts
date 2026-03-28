export const checkoutRoute = {
  path: "/checkout",
  method: "GET",
};

export function handleCheckout() {
  return {
    ok: true,
    route: "checkout",
    message: "Starter route for Incorrect Discount Total",
  };
}
