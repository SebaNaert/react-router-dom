import { useParams } from "react-router-dom";

const Cars = (props) => {
    let { name } = useParams();
    return ( 
        <>
            <h1>La voiture : {name} </h1>
        </>
     );
}
 
export default Cars;