import React from 'react'
import styled from 'styled-components'
import {Grid} from '@material-ui/core'
const Nav = styled(Grid)`
    height:50px;
    background-color:black;
    padding-right:10px;
`;

const NavBar = () => {
    return (
        <Nav container alignItems="center" justify="flex-end">
        </Nav>
    )
    
}

export default NavBar
