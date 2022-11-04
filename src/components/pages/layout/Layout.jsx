import React, { Fragment } from "react";
import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import { Outlet } from "react-router-dom";

class Layout extends React.Component {

  render() {
    return (
      <Fragment>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default Layout;