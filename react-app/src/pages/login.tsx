import homeStyles from '../styles/pages/Home.module.css'
import styles from '../styles/components/Login.module.css'
import {Button, Card, Form, InputGroup, FormControl} from 'react-bootstrap'
import {FaUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import Link from 'next/link'

export default function Login() {
    return (
        <div className={`${homeStyles.container} ${homeStyles.bgSelected}`}>
        <Card style={{ width: '23rem'}} className={`${styles.cardContainer} mx-auto`}>
            <Card.Body className="py-4">
            <Form>
                <InputGroup className="mt-5">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{backgroundColor:"#fff" , height:"100%"}}>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#4b2ae9" offset="0%" />
                                <stop stopColor="#9e4ef5" offset="100%" />
                            </linearGradient>
                        </svg>
                        <FaUserCircle size="1.3rem" style={{ fill: "url(#blue-gradient)" }} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="Email" />
                </InputGroup>
                <InputGroup className="mt-4">
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{backgroundColor:"#fff" , height:"100%"}}>
                            <RiLockPasswordFill size="1.3rem" style={{ fill: "url(#blue-gradient)" }}/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="Senha" />
                </InputGroup>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lembrar-me" />
                </Form.Group>
                <div className="text-center mb-3 mt-5">
                    <Link href="/quotations">
                        <Button type="submit" className={`${styles.btColor} w-100`}>
                            Login
                        </Button>
                    </Link>
                </div>
            </Form>
                <Card.Text className="text-center mb-5">
                    <Link href="/register">
                        <a className="nav-link">Cadastro</a>
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}