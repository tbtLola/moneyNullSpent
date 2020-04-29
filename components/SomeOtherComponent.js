import React from 'react';
import styled from 'styled-components';

const SomeComponentStyle = styled.div`
  display: flex; 
  background-color: blue; 
`;


export default class SomeOtherComponent extends React.Component {
    render() {
        return (
            <SomeComponentStyle>
                this some other component, tryna flex
            </SomeComponentStyle>
            );
    }
}