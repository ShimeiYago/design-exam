import React from 'react';

export function Image(props: Props): JSX.Element {
  const { src, alt, width, height } = props;

  const sizeStyle: React.CSSProperties = {
    width: width || 'auto',
    height: height || 'auto',
  };

  return <img src={src} alt={alt} style={sizeStyle} />;
}

export type Props = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
};
