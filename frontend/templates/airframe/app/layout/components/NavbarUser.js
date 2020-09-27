import React from 'react';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink
} from './../../components';

const NavbarUser = (props) => (
    <NavItem { ...props }>
        <NavLink href="/account/login">
            <i className="fa fa-power-off" />
        </NavLink>
    </NavItem>
);
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
