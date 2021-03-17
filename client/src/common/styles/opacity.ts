export const getWhiteOpacity = (opacity: number) => {
  if (opacity > 100) {
    opacity = 100;
  } else if (opacity < 0) {
    opacity = 0;
  }

  opacity = Number((opacity / 100).toFixed(2));

  return `rgba(255, 255, 255, ${opacity})`;
};

export const getBlackOpacity = (opacity: number) => {
  if (opacity > 100) {
    opacity = 100;
  } else if (opacity < 0) {
    opacity = 0;
  }

  opacity = Number((opacity / 100).toFixed(2));

  return `rgba(0, 0, 0, ${opacity})`;
};

export const getHexOpacity = (color: string, demical: number) => {
  const hex = ((demical / 100) * 255).toString(16);

  return color + hex;
};
