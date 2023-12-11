export const getListHeightSize = (options: any) => {
  const length = options.length;

  if (length === 1) {
    return 44;
  } else if (length === 2) {
    return 84;
  } else if (length === 3) {
    return 124;
  } else if (length === 4) {
    return 164;
  } else {
    return 165;
  }
};
