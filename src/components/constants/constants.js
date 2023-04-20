export const COLORS = {
  dark_purple: "hsl(0, 7%, 16%)",
  semi_dark_purple: "hsl(291, 12%, 24%)",
  purple: "hsl(267, 83%, 60%)",
  yellow: "hsl(57, 77%, 75%)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1320,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
};
