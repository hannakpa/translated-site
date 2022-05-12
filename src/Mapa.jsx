import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Mapa(props) {

    let bicis = props.datos;
    let bicisMapa = bicis.map((elemento, i) =>{
        
    return (

        < Marker key={i} position={[elemento.latitude, elemento.longitude]} >
            <Popup>
                <h4>Dirección: {elemento.name}</h4>
                <h4>Bicis disponibles: {elemento.free_bikes}</h4>
                <h4>Plazas libres: {elemento.empty_slots}</h4>
            </Popup>
        </Marker >
    );
    })



    return (
        <MapContainer center={[41.393, 2.18]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {bicisMapa}
        </MapContainer>
    )
}

export default Mapa