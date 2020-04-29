import React from 'react';
import styled from 'styled-components';

const StyledSideNav = styled.div`
 position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 180%;
  width: 95px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 20px;
  display: flex; 
`;

class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav></StyledSideNav>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav>

            </SideNav>
        );
    }
}