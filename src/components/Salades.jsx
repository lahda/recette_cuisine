import React from "react";
import axios from "axios";
import { useEffect , useState} from "react";

function Salades(){
    const [salades, setSalades] = useState([]);
    useEffect(() => {
        getSalades()
    },[]);

    const getSalades = async() => {
        const url = 'https://api.spoonacular.com/recipes/random?apikey=${proces.env.REACT_APP_API_KEY&number=15';
        axios.get(url).then(data => console.log(data)).catch(error => console.log(error));
        
    };
    
    return (
        <div>
            {salades.map(recipe => {return(
                <div key={recipe.id}>
                    <p>{recipe.title}</p>
                </div>
            );
            })}
        </div>);   
}
export default Salades;
