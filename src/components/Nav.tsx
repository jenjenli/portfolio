import styled from 'styled-components';
import { Link } from "react-router-dom";


const NavContainer = styled.nav `
    width: 30%;

`;

const NavWrapper = styled.nav `
    width: 100%; 
`;

const UnorderedList = styled.ul`
    display: flex;
    border: 5px;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: rgb(0, 0, 0);
    font-size: calc(1px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    margin: 0 auto;
    @media (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgb(0, 0, 0);
        list-style: none;
        padding-left: 0;
        margin: 0 auto;
      }
`;


const ListItem = styled.li`
    font-size: calc(2px + 2vw);

      }`;

export default function Nav(){
    return(
        <NavContainer>
            <NavWrapper>
                <UnorderedList>
                    <ListItem>
                        <Link to = {`/`}>Home</Link>
                    </ListItem>
                </UnorderedList>
            </NavWrapper>
        </NavContainer>

    );
}
