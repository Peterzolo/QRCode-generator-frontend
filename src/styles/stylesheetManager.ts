const allowedProps = [
  "alignItems",
  "flexDirection",
  "justifyContent",
  "backgroundColor",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",
  "flexDirection",
  "alignItems",
  "alignSelf",
  "justifyContent",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "textAlign",
  "letterSpacing",
  "lineheight",
];

export const shouldForwardProp = (prop: string) => {
  return allowedProps.includes(prop);
};
