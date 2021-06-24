import {Modal} from 'react-bootstrap'
import styles from '../styles/components/MyProductsPage.module.css'
import CardProduct from '../components/CardProduct'
import { IoAddCircleSharp } from 'react-icons/io5'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { ImCancelCircle } from 'react-icons/im'
import { useState } from 'react'
import { registerProduct, getAllProducts } from '../api/productsService'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { Product } from '../interfaces/Product'
import ItemProductModal from '../components/ItemProductModal'
import { registerCotation } from '../api/cotationService'

type Props = {
    items: Product[]
}

const Products = ( { items }: Props) => {

    // Add product
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

    // Add Cotations
    const [initDate, setInitDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [descriptionCotation, setDescripitionCotation] = useState('')

    const handleInputChange = (event) => {
        items.find((item) => {
            if(item.id == event.target.value) return item
        }).checkCotation = event.target.checked
    }

    const handleSubmitCotation = (event) => {
        event.preventDefault()
        let productsToAdd = items.filter((item) => {
            if(item.checkCotation) return item
        }).map((i) => { return i.id })
        
        registerCotation(
            initDate, 
            endDate, 
            descriptionCotation, 
            productsToAdd
        )

        items.map((item) => {
            item.checkCotation = false
        })
    }

    // Modals
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
                {items.map((item)=>
                    <div className="col-lg-4 col-sm-6" key={item.id}>
                        <CardProduct data={ item }/>
                    </div>
                )}
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
                            <form onSubmit={handleSubmitCotation}>
                                <Modal.Body className={styles.bgModal}>
                            
                                <div className="row">
                                    <div className="col">
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <input 
                                                    className="form-control" 
                                                    type="date" 
                                                    value={initDate}
                                                    onChange={(e) => setInitDate(e.target.value)}
                                                    placeholder="Data de Início" 
                                                    required/>
                                            </div>
                                        </div>
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <input 
                                                    className="form-control" 
                                                    type="date" 
                                                    value={endDate}
                                                    onChange={(e) => setEndDate(e.target.value)}
                                                    placeholder="Data do Fim" 
                                                    required/>
                                            </div>
                                        </div>
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <div className="form-group">
                                                    <textarea 
                                                        className="form-control" 
                                                        rows={3}
                                                        maxLength={150}
                                                        value={descriptionCotation}
                                                        onChange={(e) => setDescripitionCotation(e.target.value)}
                                                        placeholder="Descrição"
                                                        required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row mb-sm-3">
                                            <div className="col">
                                                <ul className="list-group">
                                                    {items.map((item)=>
                                                        <li className="list-group-item" key={item.id}>
                                                            <div className="form-group row">
                                                                <div className="col-sm-7">
                                                                    <label>
                                                                        {item.name}
                                                                    </label>
                                                                </div>
                                                                <div className="col">
                                                                    <label>
                                                                        {item.quantity} unid.
                                                                    </label>
                                                                </div>
                                                                <div className="col-sm-1">
                                                                    <input 
                                                                        className="form-check-input" 
                                                                        type="checkbox" 
                                                                        value={item.id} 
                                                                        onChange={handleInputChange}/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button 
                                        type="submit" 
                                        className={`${styles.btColor} btn`} 
                                        onClick={handleCloseAddQuotes}>
                                        Adicionar
                                    </button>
                                </Modal.Footer>
                            </form>
                            
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
                                            placeholder="Marca" 
                                            required/>
                                    </div>
                                </div>
                                <div className="row mb-sm-3">
                                    <div className="col">
                                        <input 
                                            className="form-control" 
                                            type="number" 
                                            id="quantity" 
                                            value={quantity}
                                            min={1}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            placeholder="Quantidade" 
                                            required/>
                                    </div>
                                    <div className="col">
                                        <input 
                                            className="form-control" 
                                            id="limitePrice" 
                                            type="number"
                                            value={limitPrice}
                                            min={1}
                                            onChange={(e) => setLimitPrice(e.target.value)}
                                            placeholder="Preço Limite" 
                                            required/>
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
    const items: Product[] = await getAllProducts() ?? null
    return { props: { items } }
}

export default Products