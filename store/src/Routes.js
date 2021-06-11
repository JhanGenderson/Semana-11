import {Route} from 'react-router-dom'
import PortadaView from './views/PortadaView'
import ProductoView from './views/ProductoView'
import CarritoView from './views/CarritoView'
import CasualView from './views/CasualView'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={PortadaView}/>
            <Route path="/detalle/:id" component={ProductoView}/>
            <Route path="/carrito" exact component={CarritoView}/>
            <Route path="/cat-casual" exact component={CasualView}/>
        </div>
    )
}
