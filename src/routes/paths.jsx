// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_HOME = "/home";

// ----------------------------------------------------------------------

export const PATH = {
  root: ROOTS_HOME,
  game: path(ROOTS_HOME, `/game`),
  settings: path(ROOTS_HOME, `/settings`),
  score: path(ROOTS_HOME, `/score`),

};
