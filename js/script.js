const getNavLinkClass = (path) => {
  return location.pathname === path ? " active" : "";
};
