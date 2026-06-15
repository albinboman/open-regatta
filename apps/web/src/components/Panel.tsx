import type { PropsWithChildren } from "react";

type PanelProps = PropsWithChildren<{
  title: string;
}>;

export function Panel({ title, children }: PanelProps) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      <div className="panel-content">{children}</div>
    </section>
  );
}
