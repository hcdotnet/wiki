import React from "react";
import InfoBox, {
  InfoBoxCaption,
  InfoBoxImage,
  InfoBoxLabelData,
} from "../InfoBox";

export type SoftwareBoxProps = {
  title: string;
  image?: string;
  imageCaption?: string;
  author?: string;
  repository?: string;
};

export default function SoftwareBox({
  title,
  image,
  imageCaption,
  author,
  repository,
}: SoftwareBoxProps) {
  const tableItems: JSX.Element[] = [];

  if (image)
    tableItems.push(<InfoBoxImage src={image} caption={imageCaption} />);

  if (author)
    tableItems.push(
      <InfoBoxLabelData label={<>Author</>} data={<>{author}</>} />
    );

  if (repository)
    tableItems.push(
      <InfoBoxLabelData label={<>Repository</>} data={<>{repository}</>} />
    );

  return (
    <InfoBox title={title}>
      {tableItems.map((item) => (
        <tr>{item}</tr>
      ))}
    </InfoBox>
  );
}
