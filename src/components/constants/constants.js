export const COLORS = {
  dark_purple: "hsl(0, 7%, 16%)",
  dark_purple_fade: "hsla(0, 7%, 16%, 0.6)",
  semi_dark_purple: "hsl(291, 12%, 24%)",
  semi_dark_purple_fade: "hsla(291, 12%, 24%, 0.7)",
  purple: "hsl(267, 83%, 60%)",
  yellow: "hsl(57, 77%, 75%)",
  yellow_fade: "hsla(57, 77%, 75%, 0.4)",
  white_fade: "hsla(0, 100%, 100%, 0.1)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  laptop: 900,
  exclusiveWidth1: 1700,
  exclusiveWidth2: 1450,
  exclusiveWidth3: 1350,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptop: `(max-height: ${BREAKPOINTS.laptop / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
  exclusiveWidth2: `(max-width: ${BREAKPOINTS.exclusiveWidth2 / 16}rem)`,
  exclusiveWidth3: `(max-width: ${BREAKPOINTS.exclusiveWidth3 / 16}rem)`,
};
