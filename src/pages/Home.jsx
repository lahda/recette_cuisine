import Classique from "../components/Classique";
// import Populaire from "../components/Populaire";
import React from "react";
import {motion} from "framer-motion";

function Home(){
    return(
        <div>
        {/* <BrowserRouter>
        <Nav>
            <GiKnifeFork/>
          <Logo to ={"/"}/>Recette<Logo/>
        </Nav>
        </BrowserRouter> */}
        
         <motion.div
          animate = {{opacity: 1}}
          initial = {{opacity: 0}}
          exit = {{opacity: 0}}
          transition = {{duration: 0.5}}
         >
            <Classique />
            {/* <Populaire />  */}
         </motion.div>
        </div>    
    );
}
// const Logo = styled(Link)`
//   text-decoration: none;
//   font-size: 1.5rem;
//   font-weight: 400;
//   font-family: "Lobster-two", cursive;
// `;
// const Nav= styled.div`
//   padding: 4rem 0rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   svg {
//     font-size: 2rem;
// }
// `;

export default Home;