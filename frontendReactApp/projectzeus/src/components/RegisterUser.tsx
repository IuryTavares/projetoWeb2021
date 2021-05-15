import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col, Button, Card, Form, InputGroup, FormControl} from 'react-bootstrap'
import styles from '../styles/components/Register.module.css'
import {AiFillRightCircle} from 'react-icons/ai'

export function RegisterUser() {
    return (
        <Card className={`${styles.cardContainer} w-50`}>
            <Card.Header className="text-center ">Cadastro</Card.Header>
            <Card.Body className="pb-2">
            <Form>
                <Form.Row as={Row} className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome Completo" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="number" placeholder="CPF (Apenas números)" />
                    </Form.Group>
                </Form.Row>
                <Form.Row as={Row} className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" placeholder="Endereço" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Insira seu email" />
                </Form.Group>
                <Form.Row as={Row} className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha contendo números e letras" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Confirme sua Senha</Form.Label>
                        <Form.Control type="password" placeholder="Repita a senha" />
                    </Form.Group>
                </Form.Row>
            </Form>
            <Form>
                <div className="text-center mb-3 mt-5">
                    <svg width="0" height="0">
                        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#4b2ae9" offset="0%" />
                            <stop stopColor="#9e4ef5" offset="100%" />
                        </linearGradient>
                    </svg>
                    <AiFillRightCircle size="3.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                </div>
            </Form>
                <Card.Text className="text-center">
                    <span>Já possui conta? <a href="#" className="nav-link p-0">Faça o login</a></span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}