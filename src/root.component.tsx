/* eslint-disable import/no-unresolved */
// @ts-ignore
import { useStore } from "@stagepass/util-state";

export default function Root(props) {
  const store = useStore();

  return (
    <section>
      {props.name} is mounted! --- {JSON.stringify(store)}
    </section>
  );
}
