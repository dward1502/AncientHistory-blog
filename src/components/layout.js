import React, { useState} from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "../assets/stylesheet/index.scss"

import Navbar from "../components/Navbar/Navbar"
import SideBar from "../components/Navbar/Sidebar"


const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const [showSideBar, setShowSideBar] = useState(false)

  const sideBarClosedHandler = () => {
    setShowSideBar(false)
  }
  const sideBarToggleHandler = () => {
    setShowSideBar(true)
  }
  return (
    <>
      <Navbar SideBarToggleClicked={sideBarToggleHandler} />
      <SideBar open={showSideBar} closed={sideBarClosedHandler} />
      
        <main>{children}</main>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
