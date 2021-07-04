import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/components/Bar.module.css'
import homeStyles from '../styles/pages/Home.module.css'
import { IoBagCheck } from 'react-icons/io5';
import { GiFruitBowl, GiReceiveMoney } from 'react-icons/gi'
import { GoChecklist } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import {Nav} from 'react-bootstrap'
import Link from 'next/link'
import Register from './register'
import Login from './login'
import RegisterEnterprise from './enterprise'
import { useState, useEffect } from 'react';
import { getUser } from '../api/loginService';
import { GetServerSideProps } from 'next';
import { User } from '../interfaces/User';
import { NavDropdown } from 'react-bootstrap'
import { isLogged, setCpf } from '../api/settings';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

type Props = {
    userLogged: User
}

function MyApp({ Component, pageProps, router }, { userLogged } : Props) {

    if (router.pathname.startsWith('/register')) {
        return <Register/>
    }
    if (router.pathname.startsWith('/login')) {
        return <Login/>
    }
    if (router.pathname.startsWith('/enterprise')) {
        return <RegisterEnterprise/>
    }

    const [selected1, setSelected1] = useState('')
    const [selected2, setSelected2] = useState('')
    const [selected3, setSelected3] = useState('')
    const [selected4, setSelected4] = useState('')

    const [selecteda, setSelecteda] = useState('')
    const [selectedb, setSelectedb] = useState('')
    const [selectedc, setSelectedc] = useState('')
    const [selectedd, setSelectedd] = useState('')

    useEffect(() => {
        if (router.pathname.startsWith('/quotations')) {
           setSelected1("url(#blue-gradient)")
           setSelected2("#6c757d")
           setSelected3("#6c757d")
           setSelected4("#6c757d")
           
           
           setSelecteda("#9e4ef5")
           setSelectedb("#6c757d")
           setSelectedc("#6c757d")
           setSelectedd("#6c757d")
        }
        if (router.pathname.startsWith('/products')) {
            setSelected2("url(#blue-gradient)")
            setSelected1("#6c757d")
            setSelected3("#6c757d")
            setSelected4("#6c757d")

            setSelectedb("#9e4ef5")
            setSelecteda("#6c757d")
            setSelectedc("#6c757d")
            setSelectedd("#6c757d")
        }
        if (router.pathname.startsWith('/bids')) {
            setSelected2("#6c757d")
            setSelected1("#6c757d")
            setSelected3("url(#blue-gradient)")
            setSelected4("#6c757d")

            setSelectedb("#6c757d")
            setSelecteda("#6c757d")
            setSelectedc("#9e4ef5")
            setSelectedd("#6c757d")
        }

        if (router.pathname.startsWith('/transactions')) {
            setSelected2("#6c757d")
            setSelected1("#6c757d")
            setSelected3("#6c757d")
            setSelected4("url(#blue-gradient)")

            setSelectedb("#6c757d")
            setSelecteda("#6c757d")
            setSelectedc("#6c757d")
            setSelectedd("#9e4ef5")
        }
    })

    function asd() {
        if(router.pathname.startsWith('/quotations') || router.pathname.startsWith('/my-quotations')) {
            return (
                <div className="row">
                    <div className="col">
                        <Nav className="mt-4 mb-3 ms-1" variant="tabs" defaultActiveKey="link-1">
                            <Nav.Item>
                                <Nav.Link style={{fontWeight: 600}} eventKey="link-1">
                                    <Link href="/quotations">
                                        Todas Cotações
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{fontWeight: 600}} eventKey="link-2">
                                    <Link href="/my-quotations">
                                        Minhas Cotações
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            )
        }
    }

    function logout () {
        destroyCookie(null, 'cnpj')
        destroyCookie(null, 'cpf')
        router.reload(window.location.pathname)
    }

    const navDropdownTitle = (
        <span className ="me-1"><FaUserCircle style={{ fill: "url(#blue-gradient)"}} size="1.8rem" className="me-2 fs-5 bi-speedometer2"/> 
            <span className="d-none d-sm-inline-block" style={{fontWeight: 600}}>Usuário</span>
        </span>
    );

    return ( 
        <div>
            <nav className={`${styles.shadowBar} navbar navbar-expand-lg navbar-light py-0`}>
                <a href="#" style={{fontWeight: 600}} className={`${styles.bgSelected} mr-auto text-decoration-none`}>
                    <FiMenu color="black" size="1.5rem" className="mt-2 ms-3"/>
                </a>
                <a href="#home" style={{fontWeight: 600}} className={`${styles.bgSelected} navbar-brand mx-auto d-none d-sm-inline`}>
                    ProjetoZeus
                </a>
                <div className="ms-auto">
                    <ul className="navbar-nav ms-auto"  style={{flexDirection: "row"}}>
                        <li className={`${styles.itemBorder} d-md-none`}>
                            <a className="nav-link" href="#home" >
                                <IoBagCheck className="mx-3 fs-5 bi-speedometer2"/>
                            </a>
                        </li>
                        <li className={`${styles.itemBorder} d-md-none`}>
                            <a className="nav-link" href="#home" >
                                <GiFruitBowl className="mx-3 fs-5 bi-speedometer2"/>    
                            </a>
                        </li>
                        <li className={`${styles.itemBorder} d-md-none`}>
                            <a className="nav-link" href="#home" >
                                <GiReceiveMoney className="mx-3 fs-5 bi-speedometer2"/>
                            </a>
                        </li>
                        <li className={`${styles.itemBorder} nav-item d-md-none`}>
                            <a className="nav-link" href="#home" >
                                <GoChecklist className="mx-3 fs-5 bi-speedometer2"/>
                            </a>
                        </li>
                        <li className={`${styles.itemBorder} nav-item me-3`}>
                            <a className="nav-link" href="#home" >
                                <BsFillChatDotsFill className="mx-3 mx-sm-2 fs-5 bi-speedometer2"/>
                            </a>
                        </li>
                        <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => logout() }>Sair</NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid overflow-hidden">
                <div className="row">
                    <div className={`${styles.bgColor} ${styles.shadowBar} col-xl-2 col-lg-2 col-md-3 px-sm-2 px-0 d-flex sticky-top d-none d-xl-block d-lg-block d-md-block`}>
                        <div className="flex-sm-column flex-row align-items-sm-start px-2 pt-2">
                            <ul className="nav nav-pills flex-sm-column" id="menu">
                                <li className="my-3">
                                    <Link href="/quotations">
                                        <a className={ `px-0 text-secondary text-decoration-none` }>
                                            <svg width="0" height="0">
                                                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                                    <stop stopColor="#4b2ae9" offset="0%" />
                                                    <stop stopColor="#9e4ef5" offset="100%" />
                                                </linearGradient>
                                            </svg>
                                            <IoBagCheck size="1.5rem" style={{ fill: selected1}} className="me-2"/>
                                            <span style={{fontWeight: 600, color: selecteda}} className="d-none d-sm-inline ms-1">
                                                Cotações
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/products">
                                        <a className="px-0 text-secondary text-decoration-none">
                                            <GiFruitBowl size="1.5rem" style={{ fill: selected2}} className="me-2"/>
                                            <span style={{fontWeight: 600, color: selectedb}} className="ms-1 d-none d-sm-inline">
                                                Meus Produtos
                                            </span> 
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/bids">
                                        <a className="px-0 text-secondary text-decoration-none">
                                            <GiReceiveMoney size="1.5rem" style={{ fill: selected3}} className="me-2"/>
                                            <span style={{fontWeight: 600, color: selectedc}} className="ms-1 d-none d-sm-inline">
                                                Meus Bid's
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/transactions">
                                        <a href="#" className="px-0 text-secondary text-decoration-none">
                                            <GoChecklist size="1.5rem" style={{ fill: selected4}} className="me-2"/>
                                            <span style={{fontWeight: 600, color: selectedd}} className="ms-1 d-none d-sm-inline">
                                                Transações
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${homeStyles.bgSelected} vh-100 col`}>
                        <div className="mb-2 px-0 mx-0">
                            {asd()}
                            <Component {...pageProps} />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const router = useRouter()
    if (!isLogged) {
        router.push('/login')
    } else {
        const userLogged: User = await getUser(ctx) ?? null
        return { props: { userLogged } }
    }
}*/

export default MyApp
