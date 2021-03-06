import styles from '../styles/components/Register.module.css'
import {AiFillRightCircle} from 'react-icons/ai'
import homeStyles from '../styles/pages/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import {useRouter} from 'next/router'
import { registerUser } from '../api/register'
import { setTempCpf } from '../api/settings'

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
        
        if (password==confirmPassword) {
            registerUser(
                name, 
                birthDate, 
                email, 
                address, 
                password, 
                cpf  
            )
            setTempCpf(cpf)
            router.push({
                pathname: '/enterprise',
            })
        } else {
            console.log(password);
            console.log(confirmPassword);
            console.log("senhas diferentes");
        }
        
    }

    return (
        <div className={`${homeStyles.container} ${homeStyles.bgSelected}`}>
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
                                    placeholder="Nome Completo"
                                    maxLength={50}
                                    required />
                            </div>
                            <div className="col-md">
                                <label className="col-form-label">CPF</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="cpf" 
                                    pattern="[0-9]+$"
                                    minLength={11}
                                    maxLength={11}
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    placeholder="CPF (Apenas n??meros)" 
                                    required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md">
                                <label className="col-form-label">Endere??o</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="address"
                                    maxLength={40} 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Endere??o" 
                                    required/>
                            </div>
                            <div className="col-md">
                                <label className="col-form-label">Data de Nascimento</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="date" 
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    placeholder="CPF (Apenas n??meros)"
                                    required/>
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
                                placeholder="Insira seu Email"
                                required/>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md">
                                <label className="col-form-label">Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password"
                                    name="password"
                                    minLength={8}
                                    maxLength={15}
                                    pattern="(?=.*\d)(?=.*[a-z]).{8,}" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Senha contendo letras e n??meros" 
                                    required/>
                            </div>
                            <div className="col-md">
                                <label className="col-form-label">Confirme sua Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="confirmPassword"
                                    minLength={8}
                                    maxLength={15} 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Repita a senha"
                                    required/>
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
                            <span>J?? possui conta? <a href="#" className="nav-link p-0">Fa??a o login</a></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser