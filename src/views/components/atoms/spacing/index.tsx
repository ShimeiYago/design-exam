import React from 'react';

export function Spacing(props: Props): JSX.Element {
  const style: React.CSSProperties = {
    margin: props.margin,
    marginTop: props.marginTop ?? props.marginVertical,
    marginBottom: props.marginBottom ?? props.marginVertical,
    marginLeft: props.marginLeft ?? props.marginHorizontal,
    marginRight: props.marginRight ?? props.marginHorizontal,
    padding: props.padding,
    paddingTop: props.paddingTop ?? props.paddingVertical,
    paddingBottom: props.paddingBottom ?? props.paddingVertical,
    paddingLeft: props.paddingLeft ?? props.paddingHorizontal,
    paddingRight: props.paddingRight ?? props.paddingHorizontal,
  };

  return <div style={style}>{props.children}</div>;
}

export type Props = {
  children: React.ReactNode;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginVertical?: string;
  marginHorizontal?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
};
