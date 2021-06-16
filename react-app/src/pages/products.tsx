import {Modal} from 'react-bootstrap'
import styles from '../styles/components/MyProductsPage.module.css'
import { CardProduct } from '../components/CardProduct'
import { IoAddCircleSharp } from 'react-icons/io5'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { ImCancelCircle } from 'react-icons/im'
import { useState, useEffect } from 'react'
import { registerProduct, getAllProducts } from '../api/products'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
    items
}

const Products = ( { items }: Props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [limitPrice, setLimitPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [brand, setBrand] = useState('')

    const handleSubmitProduct = (event) => {
        event.preventDefault()

        registerProduct(
            name, 
            description, 
            limitPrice, 
            quantity, 
            brand
        )
    }

    const [addProduct, setShowAddProduct] = useState(false);
    const handleCloseAddProduct = () => setShowAddProduct(false);
    const handleShowAddProduct = () => setShowAddProduct(true);

    const [addQuotes, setShowAddQuotes] = useState(false);
    const handleCloseAddQuotes = () => setShowAddQuotes(false);
    const handleShowAddQuotes = () => setShowAddQuotes(true);

    return(
        <div>
            <h5 className="mt-4 mb-3 ms-1 text-md-start text-center" style={{fontWeight: 600}}>Meus Produtos</h5>
            <div className="row mb-2">
                <div className="col">
                    <CardProduct/>
                </div>
                <div className="col">
                    <CardProduct/>
                </div>
                <div className="col">
                    <CardProduct/>
                </div>
            </div>

            {/**
             * footer and modals
             * arrumar isso aq
             */}

            <div className={styles.footer}>
                <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#4b2ae9" offset="0%" />
                        <stop stopColor="#9e4ef5" offset="100%" />
                    </linearGradient>
                </svg>
                <div className="row">
                    <div className="col">
                        <a href="#" onClick={handleShowAddQuotes}>
                            <RiShoppingCart2Fill size="4.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                        </a>
                        <Modal size="lg" show={addQuotes} onHide={handleCloseAddQuotes}>
                            <Modal.Header className={styles.shadowModalHeader} closeButton>
                                <Modal.Title className={styles.title}>Criar Quotação</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={styles.bgModal}>
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <input className="form-control" type="date" placeholder="Data de Início" />
                                            </div>
                                        </div>
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <input className="form-control" type="date" placeholder="Data do Fim" />
                                            </div>
                                        </div>
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <div className="form-group">
                                                    <textarea className="form-control" rows={3} placeholder="Descrição"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        <div className="form-group row">
                                                            <div className="col-sm-6">
                                                                <label>
                                                                    Castanha do Pará
                                                                </label>
                                                            </div>
                                                            <div className="col">
                                                                <input className="form-control" type="number" placeholder="Quant." />
                                                            </div>
                                                            <div className="col-sm-1">
                                                                <a href="#">
                                                                    <ImCancelCircle className="mt-2" color="red"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className={`${styles.btColor} btn`} onClick={handleCloseAddQuotes}>
                                    Adicionar
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <a href="#" onClick={handleShowAddProduct}>
                            <IoAddCircleSharp onClick={handleShowAddProduct} size="4.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                        </a>
                        <Modal show={addProduct} onHide={handleCloseAddProduct}>
                            <Modal.Header className={styles.shadowModalHeader} closeButton>
                                <Modal.Title className={styles.title}>Adicionar Produto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={styles.bgModal}>
                            <form onSubmit={handleSubmitProduct}>
                                <div className="row mb-sm-3">
                                    <div className="col">
                                        <input 
                                            className="form-control" 
                                            id="name" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Nome" />
                                    </div>
                                    <div className="col">
                                        <input 
                                            className="form-control"
                                            id="brand" 
                                            value={brand}
                                            onChange={(e) => setBrand(e.target.value)} 
                                            placeholder="Marca" />
                                    </div>
                                </div>
                                <div className="row mb-sm-3">
                                    <div className="col">
                                        <input 
                                            className="form-control" 
                                            type="number" 
                                            id="quantity" 
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            placeholder="Quantidade" />
                                    </div>
                                    <div className="col">
                                        <input 
                                            className="form-control" 
                                            id="limitePrice" 
                                            type="number"
                                            value={limitPrice}
                                            onChange={(e) => setLimitPrice(e.target.value)}
                                            placeholder="Preço Limite" />
                                    </div>
                                </div>
                                <div className="row mb-sm-3">
                                    <div className="col">
                                        <div className="form-group">
                                            <textarea 
                                                className="form-control" 
                                                rows={3} 
                                                id="description" 
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder="Descrição">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <Modal.Footer>
                                <button type="submit" className={`${styles.btColor} btn`} onClick={handleCloseAddProduct}>
                                    Adicionar
                                </button>
                                </Modal.Footer>
                            </form>
                            </Modal.Body>
                            
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export const getStaticProps: GetServerSideProps = async () => {
    const items = getAllProducts
    console.log(items)
    return { props: { items } }
}

export default Products