import styled from 'styled-components';
import{NavLink as Link} from 'react-router-dom';
import { FaBirthdayCake} from 'react-icons/fa';
export const Nav = styled.nav`
 background: #DDAF4E;
 height: 80px;
 display: flex;
 justify-content: center;
 font-weight:700;
`;
export const NavLink = styled(Link)`
    color: #9C634F;
    font-size: 2rem;
    display: flex;
    align-items: center;
    corsor: pointer;
    font-family: 'Kanit', sans-serif;

@media Screen and (max-width: 400px){
    position: adsolute;
    top: 10px;
    left: 25px;

}
`;
export const NavIcon = styled.div`
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     cursor: pointer;
     color: #fff;

     p{
         transform: translate(-175%, 100%);
         font-weight: bold;
     }
`

export const Bars= styled(FaBirthdayCake)`
     font-size: 2rem;
     tranform: translate(-50%, -15%);
`
