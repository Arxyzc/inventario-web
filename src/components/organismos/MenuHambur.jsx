import styled from "styled-components";

export function MenuHambur() {
    return (
        <Container>
            <NavBar>

            </NavBar>
        </Container>
    );
}

const Container = styled.div`
    background-color: ${(props) => props.theme.body};
`

const NavBar = styled.div`
    display: flex;
`