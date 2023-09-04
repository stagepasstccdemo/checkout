// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { Button } from "@stagepass/osiris-ui";
import { navigateToUrl } from "single-spa";

// eslint-disable-next-line import/prefer-default-export
export function CheckoutSuccess() {
  return (
    <div>
      <h1>Checkout Success</h1>
      <Button onClick={navigateToUrl("/events")}>Go Back to home screen</Button>
    </div>
  );
}
