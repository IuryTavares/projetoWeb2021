import styles from '../styles/components/Register.module.css'
import {AiFillRightCircle} from 'react-icons/ai'
import homeStyles from '../styles/pages/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import {useRouter} from 'next/router'
import { registerUser } from '../lib/register'

const RegisterUser = () => {
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [cpf, setCpf] = useState('')

    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault() // pra nao recarregar a pagina

        registerUser(
            name, 
            birthDate, 
            email, 
            address, 
            password, 
            cpf
        )

        router.push({
            pathname: '/enterprise',
        })
    }

    return (
        <div className={homeStyles.container}>
            <div className={`card ${styles.cardContainer} w-50`}>
                <div className="card-header text-center">
                    Cadastro
                </div>
                <div className="card-body pb-2">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md">
                                <label className="col-form-label" htmlFor="name">Nome</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nome Completo" />
                                   
                            </div>
                            <div className="col-md">
                                <label className="col-form-label">CPF</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="cpf" 
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    placeholder="CPF (Apenas números)" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md">
                                <label className="col-form-label">Endereço</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="adress" 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Endereço" />
                            </div>
                            <div className="col-md">
                                <label className="col-form-label">Data de Nascimento</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="date" 
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    placeholder="CPF (Apenas números)"/>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="col-form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Insira seu Email"/>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md">
                                <label className="col-form-label">Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Senha contendo letras e números" />
                            </div>
                            <div className="col-md">
                                <label className="col-form-label">Confirme sua Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="confirmPassword" 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Repita a senha"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <button type="submit" className={styles.noStyle}>
                                    <div className="text-center mb-3 mt-5">
                                        <svg width="0" height="0">
                                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                                <stop stopColor="#4b2ae9" offset="0%" />
                                                <stop stopColor="#9e4ef5" offset="100%" />
                                            </linearGradient>
                                        </svg>
                                        <AiFillRightCircle size="3.5rem" style={{ fill: "url(#blue-gradient)"}}/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className="card-text text-center">
                        <Link href="/login">
                            <span>Já possui conta? <a href="#" className="nav-link p-0">Faça o login</a></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser