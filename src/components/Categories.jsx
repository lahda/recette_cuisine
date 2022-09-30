import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function Categories() {
    return(
        <div>
            <div>
               <FaPizzaSlice/>
               <h4>Italien</h4>  
            </div>
            <div>
               <FaHamburger/>
               <h4>Americain</h4>  
            </div>
            <div>
               <GiNoodles/>
               <h4>Français</h4>  
            </div>
            <div>
               <GiChopsticks/>
               <h4>Japon</h4>  
            </div>
        </div>
        
    ); 
}

const List = styled.div `
     display: flex;
     justify-content: center;
     margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
export default Categories;


