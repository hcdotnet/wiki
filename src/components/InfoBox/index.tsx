import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export type InfoBoxProps = React.PropsWithChildren<{
  title: string;
}>;

export default function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <table className={clsx(styles.infobox)}>
      <caption className={clsx(styles.infoboxTitle)}>{title}</caption>
      <tbody>{children}</tbody>
    </table>
  );
}

export function InfoBoxCaption({ children }: React.PropsWithChildren<{}>) {
  return <div className={clsx(styles.infoboxCaption)}>{children}</div>;
}

export function InfoBoxImage({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <td colSpan={2}>
      <img src={src} />
      {caption && <InfoBoxCaption>{caption}</InfoBoxCaption>}
    </td>
  );
}

export type InfoBoxLabelDataProps = {
  label: JSX.Element;
  data: JSX.Element;
};

export function InfoBoxLabelData({ label, data }: InfoBoxLabelDataProps) {
  return (
    <>
      <th className={clsx(styles.infoboxLabel)} scope="row">
        {label}
      </th>
      <td className={clsx(styles.infoboxData)}>{data}</td>
    </>
  );
}
