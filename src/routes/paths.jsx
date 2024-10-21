// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_HOME = "/home";

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_HOME,
  test: (d) => path(ROOTS_HOME, `/test/${d}`),
};
