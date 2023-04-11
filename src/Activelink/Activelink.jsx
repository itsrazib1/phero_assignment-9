import React from 'react';
import './activelink.css'
import { NavLink } from 'react-router-dom';
const Activelink = ({to, children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {children}
                    {/* other code */}
                  </NavLink>
    );
};

export default Activelink;