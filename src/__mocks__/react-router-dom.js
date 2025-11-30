const React = require('react');

function BrowserRouter({ children }) {
  return React.createElement(React.Fragment, null, children);
}

function Link({ to, children, ...props }) {
  return React.createElement('a', { href: to, ...props }, children);
}

function Routes({ children }) {
  return React.createElement(React.Fragment, null, children);
}

function Route({ element }) {
  return element || null;
}

function MemoryRouter({ children }) {
  return BrowserRouter({ children });
}

function NavLink({ to, children, ...props }) {
  return Link({ to, children, ...props });
}

function useNavigate() {
  return () => {};
}

module.exports = {
  BrowserRouter,
  Link,
  Routes,
  Route,
  MemoryRouter,
  NavLink,
  useNavigate,
};
