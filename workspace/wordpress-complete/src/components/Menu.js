import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MenuItem from "./MenuItem"

/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`
    query {
        allWpMenuItem {
          nodes {
            url
            path
            label
          }
        }
      }
      
`

const Menu = () => {
    return (
        <StaticQuery
            query={MENU_QUERY}
            render={(data) => {
                if (data.allWpMenuItem.nodes) {
                    const menuItems = data.allWpMenuItem.nodes

                    return (
                        <div style={{ marginBottom: "20px" }}>
                            {
                                menuItems &&
                                menuItems.map((menuItem) => (
                                    <MenuItem key={menuItem.label} menuItem={menuItem.label} wordPressUrl={menuItem.url} />
                                ))
                            }
                        </div>
                    )
                }
                return null
            }}
        />
    )
}

export default Menu