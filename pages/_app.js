import App, { Container } from "next/app";
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'

class MyApp extends App {


  render() {
    const { Component } = this.props;

    return (
        <Page>
          <Component></Component>
        </Page>
    );
  }
}

export default MyApp;
