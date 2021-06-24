import {Row, Col, Button, Card, Form} from 'react-bootstrap'
import styles from '../styles/components/Register.module.css'
import {AiFillLeftCircle, AiFillCheckCircle} from 'react-icons/ai'
import homeStyles from '../styles/pages/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { registerEnterprise } from '../api/register'

const RegisterEnterprise = () => {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [address, setAddress] = useState('')

    const router = useRouter()

    const handleSubmita = (event) => {
        event.preventDefault() // pra nao recarregar a pagina

        registerEnterprise(
            name,
            cnpj,
            address
        )

        router.push({
            pathname: '/login',
        })
    }
    return (
        <div className={`${homeStyles.container} ${homeStyles.bgSelected}`}>
        <Card className={`${styles.cardContainer} w-50`}>
            <Card.Header className="text-center ">Informações sobre a Empresa</Card.Header>
            <Card.Body className="pb-2">
            <Form onSubmit={handleSubmita}>
                <Form.Row as={Row} className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={name}
                            maxLength={30}
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Nome Fantasia" 
                            required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cnpj}
                            pattern="[0-9]+$"
                            minLength={14}
                            maxLength={14}
                            onChange={(e) => setCnpj(e.target.value)} 
                            placeholder="CNPJ (Apenas números)" 
                            required/>
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={address}
                        maxLength={40}
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="Endereço" 
                        required/>
                </Form.Group>
                <div className="text-center mb-3 mt-5">
                    <Row>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#4b2ae9" offset="0%" />
                                <stop stopColor="#9e4ef5" offset="100%" />
                            </linearGradient>
                        </svg>
                        
                        <Col>
                            <Link href="/register"><a>
                                <AiFillLeftCircle size="3.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                            </a></Link>
                        </Col>
                        <Col>
                            <button type="submit" className={styles.noStyle}>
                                <AiFillCheckCircle size="3.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                            </button>
                        </Col>
                        
                    </Row>
                </div>
            </Form>
                <Card.Text className="text-center">
                    <span>Já possui conta? 
                        <Link href="/login"><a href="#" className="nav-link p-0">
                            Faça o login
                        </a></Link>
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default RegisterEnterprise