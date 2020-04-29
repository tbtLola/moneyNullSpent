import Sidebar from 'react-sidebar';
import { Component } from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header`

.mainPageTitle {
  text-align: center; 
  padding-left:25px;
  padding-top:10px;
  padding-bottom:0px;
}
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <h1 className="mainPageTitle">MoneyNullSpent</h1>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
