import App, { Container } from "next/app";
import Sidebar from "react-sidebar";
import Page from '../components/Page'

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component></Component>
        </Page>
      </Container>
    );
  }
}

export default MyApp;
