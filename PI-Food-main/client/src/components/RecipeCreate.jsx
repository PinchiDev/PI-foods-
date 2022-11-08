import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDiets } from "../redux/actions";

export default function RecipeCreate(){
    const dispatch = useDispatch();
    const diets = useSelector((state)=> state.diets);

    const [input, setInput] = useState({
        title:"",
        summary:"",
        healthScore:"",
        steps:[],
        diets:[]
    });


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleCheck(e){
        if (e.target.checked){
            setInput({
                ...input,
                diets: input.diets.push(e.target.value)
            })
            console.log(input.diets)
            
            //TENGO QUE VER COMO IR GUARDANDO EN EL INPUT.DIETS LAS DIETAS QUE SELECCIONO EN UN ARRAY PARA EL POST
            //podria hacer otro estado que vaya cargando en un objeto lo que se checkea para ahi guardarlo en el diets del create
        }
    }


    useEffect(()=>{
        dispatch(getDiets())
    },[])
//me falta cargar en el estado diets las dietas que me traigo de la base de datos

    return (
        <div>
            <Link to='/home'><button>Go back to Home</button></Link>
            <h1>Here you can create your own recipes!</h1>
            <h3>Fill the form and submit it to create a new recipe that will be saved to your data base</h3>
            
            <form>

                <div>
                    <label>Title:</label>
                    <input type="text" value={input.title} name="title" onChange={handleChange}/>
                </div>
                <div>
                    <label>Summary:</label>
                    <input type="text" value={input.summary} name="summary" onChange={handleChange}/>
                </div>
                <div>
                    <label>Health Score:</label>
                    <input type="number" min="0" max="100" value={input.healthScore} name="healthScore" onChange={handleChange}/>
                </div>
                <div>
                    <label>Steps:</label>
                    <input type="text" value={input.steps} name="steps" onChange={handleChange}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" value={input.image} name="image" onChange={handleChange}/>
                </div>

                <div>
                    <label>Diet Types:</label>
                        <div>
                            {
                                diets.map((d)=>(
                                    <label value={d.name} name={d.name} key={d.id} onChange={handleCheck}>
                                        <input type="checkbox" value={d.name} />{d.name}
                                    </label>
                                ))
                            }
                        </div>

                    <div>
                        <button type="submit">Create Recipe</button>
                    </div>
                </div>
            </form>
        </div>
    )

}


{/* <label>
<input type="checkbox" value="dairy free" name="dairy free"/>dairy free
</label>
<label>
<input type="checkbox" value="frutarian" name="frutarian"/>frutarian
</label>
<label>
<input type="checkbox" value="lacto ovo vegetarian" name="lacto ovo vegetarian"/>lacto ovo vegetarian
</label>
<label>
<input type="checkbox" value="gluten free" name="gluten free"/>gluten free
</label>
<label>
<input type="checkbox" value="ketogenic" name="ketogenic"/>ketogenic
</label>
<label>
<input type="checkbox" value="lacto Vegetarian" name="lacto Vegetarian"/>lacto Vegetarian
</label>
<label>
<input type="checkbox" value="low FODMAP" name="low FODMAP"/>low FODMAP
</label>
<label>
<input type="checkbox" value="ovo Vegetarian" name="ovo Vegetarian"/>ovo Vegetarian
</label>
<label>
<input type="checkbox" value="paleolithic" name="paleolithic"/>paleolithic
</label>
<label>
<input type="checkbox" value="pescetarian" name="pescetarian"/>pescetarian
</label>
<label>
<input type="checkbox" value="primal" name="primal"/>primal
</label>
<label>
<input type="checkbox" value="vegan" name="vegan"/>vegan
</label>
<label>
<input type="checkbox" value="vegetarian" name="vegetarian"/>vegetarian
</label>
<label>
<input type="checkbox" value="whole 30" name="whole 30"/>whole 30
</label> */}