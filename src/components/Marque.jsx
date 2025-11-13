import { useParams } from "react-router-dom";

const Marques = (props) => {
    let { brand } = useParams();
    return ( 
        <>
            <h1>La marque : {brand}</h1>
        </>
     );
}
 
export default Marques;