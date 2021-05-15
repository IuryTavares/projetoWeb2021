import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import '../styles/components/MyProductsPage.module.css'
import { CardProduct } from './views/CardProduct'

export function MyProductsPage() {
    return(
        <div>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        </div>
        
    )
}