/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
// @ts-nocheck
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useStore } from "@stagepass/util-state";
import { navigateToUrl } from "single-spa";
import { Loading } from "@stagepass/osiris-ui";

let stripePromise: Promise<any>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51NV2XnGTOYfIjEnG2GNrGrZHLoCNvRSfgxaJtQMvQpxunIMG9SCGNoVWbmuoQlTyVWXv8D3aTipO6YKN0WnE2Ohd00ZKQcPJ3h"
    );
  }

  return stripePromise;
};

export function CheckoutPayment() {
  const store = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const item = {
    price: store.ticketInfo.ticketOptions[0].id,
    quantity: 1,
  };

  const checkoutSettings = {
    lineItems: [item],
    mode: "payment",
    successUrl: "https://stagepasstickets.com/checkout/success",
    cancelUrl: "https://stagepasstickets.com/checkout/failure",
  };

  const redirectToCheckout = async () => {
    setIsLoading(true);
    const stripe: any = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutSettings);
    if (error) {
      console.warn("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    redirectToCheckout(); // Call redirectToCheckout when the component mounts
  }, []);

  return isLoading ? <Loading /> : null;
}
