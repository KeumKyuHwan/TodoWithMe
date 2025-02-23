export const isTablet = (width, height) => {
  return (width >= 768 && height >= 1024) || (width >= 1024 && height >= 768);
};