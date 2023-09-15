import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'

function Map() {
const navigate = useNavigate();

const [searchParam, setSearchParam] = useSearchParams();

const lat = searchParam.get("lat");
const lng = searchParam.get ("lng");

    return (
        <div className={styles.mapContainer} onClick={()=> {navigate("form")}}>
            <h1>{lat}</h1>
            <h1>{lng}</h1>
        </div>
    )
}

export default Map
