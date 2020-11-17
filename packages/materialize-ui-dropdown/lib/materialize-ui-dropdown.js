import React, { useRef, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { string, node, object } from "prop-types";

const Dropdown = ({ name, children, options }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    M.Dropdown.init(dropdownRef.current, options);
  });

  return (
    <>
      <a
        ref={dropdownRef}
        className="dropdown-trigger btn"
        href="#trigger"
        data-target="dropdown1"
      >
        {name}
      </a>

      <ul id="dropdown1" className="dropdown-content">
        {children}
      </ul>
    </>
  );
};

Dropdown.propTypes = {
  name: string,
  children: node,
  options: object,
};

Dropdown.defaultProps = {
  name: "Drop Me!",
  options: {},
  children: (
    <>
      <li>
        <a href="#!">one</a>
      </li>
      <li>
        <a href="#!">two</a>
      </li>
      <li className="divider" tabIndex="-1"></li>
      <li>
        <a href="#!">
          <i className="material-icons">cloud</i>three
        </a>
      </li>
    </>
  ),
};

export default Dropdown;
