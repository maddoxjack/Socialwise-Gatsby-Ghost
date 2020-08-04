import React from "react"
import PropTypes from "prop-types"
import logo from "../../../images/logo.svg"
import "./styles.scss"

const Logo = ({ size }) => (
    <div id="logo" className={size}>
        <img src={logo} alt="logo" /> <span>socialwise</span>
    </div>
)

Logo.propTypes = {
    size: PropTypes.string,
}

Logo.defaultProps = {
    size: `full`,
}

export default Logo
