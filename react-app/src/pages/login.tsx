import homeStyles from '../styles/pages/Home.module.css'
import styles from '../styles/components/Login.module.css'
import {Button, Card, Form, InputGroup, FormControl} from 'react-bootstrap'
import {FaUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import Link from 'next/link'
import { useState } from 'react'
import { login } from '../api/loginService'
import { setCpf, setCnpj, setCookie } from '../api/settings'
import { useRouter } from 'next/router'

export default function Login() {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        login(email, password)
            .then(res => {
                if (res != null) {
                    setCpf(res.cpf)
                    setCnpj(res.cnpj)
                    router.push('/quotations')
                }
                else console.log("null")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={`${homeStyles.container} ${homeStyles.bgSelected}`}>
            <Card style={{ width: '23rem'}} className={`${styles.cardContainer} mx-auto`}>
                <Form>
                    <Card.Body className="py-4">
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
                            <FormControl 
                                type="email"
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </InputGroup>
                        <InputGroup className="mt-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{backgroundColor:"#fff" , height:"100%"}}>
                                    <RiLockPasswordFill size="1.3rem" style={{ fill: "url(#blue-gradient)" }}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required/>
                        </InputGroup>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Lembrar-me" />
                        </Form.Group>
                        <div className="text-center mb-3 mt-5">
                            <Button onClick={handleSubmit} className={`${styles.btColor} w-100`}>
                                Login
                            </Button>
                        </div>
                        <Card.Text className="text-center mb-5">
                            <Link href="/register">
                                <a className="nav-link">Cadastro</a>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Form>
            </Card>
        </div>
    )
}