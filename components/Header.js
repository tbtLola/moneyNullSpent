import Sidebar from "react-sidebar";
import { Component } from "react";

class Header extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

      render() {
        return (
          <div>
            <Sidebar
              sidebar={<b>Sidebar content</b>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { background: "white" } }}
            >
              <button onClick={() => this.onSetSidebarOpen(true)}>
                Open sidebar
              </button>
            </Sidebar>
          </div>
        );
      }
}

export default Header;
