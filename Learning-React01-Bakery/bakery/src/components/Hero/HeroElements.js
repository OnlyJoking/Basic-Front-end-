import styled from "styled-components";
import  ImBg   from "../../images/bkr2.jpg";


export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)), url(${ImBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;