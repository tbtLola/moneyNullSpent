import { Component } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SomeOtherComponent from "../components/SomeOtherComponent";
import styled from 'styled-components';


const StyledGrid = styled.div`
  .item1 { 
    /* height:30%; */
    grid-area: header; 
   }
  .item2 { grid-area: menu;
    grid-template-columns: auto 50px 10% 2fr 1fr; }
  .item3 { grid-area: main; }
  /* .item4 { grid-area: right; } */
  .item5 { grid-area: footer; }
 
  display: grid;
  grid-template-areas:
    'header header header header header header header header header header header header header header header header'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu main main main main main main main main main main main main main main main'
    'menu footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer';
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
  width: 100vw;
  height: 100vh;
  #pageElement{
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  }
  #pageHeader {
    background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  }
  #pageMenu {
    background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;  
  }
`;


class Page extends Component {

  render() {
    return (
      <StyledGrid>
        <div id="pageHeader" class="item1">money null spent</div>
        <div id="pageMenu" class="item2">Menu</div>
        <div id="pageElement" class="item3">Main</div>
        {/* <div id="pageElement" class="item4">Right</div> */}
        <div id="pageElement" class="item5">Footer</div>
      </StyledGrid>
    );
  }
}

export default Page;
