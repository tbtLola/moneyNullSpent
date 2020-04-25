import { Component } from "react";
import Sidebar from "react-sidebar";
import Link from "next/link";
import Header from "../components/Header";

class Page extends Component {

  render() {
    return (
      <div>
       <Header/>
       <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Page;
