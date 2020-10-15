import React from "react"
import { Link } from "gatsby"

const MenuItem = ({ menuItem, wordPressUrl }) => {
    return (
        <Link style={{ marginRight: '20px' }} to={wordPressUrl}>{menuItem}</Link>
    )
}

export default MenuItem