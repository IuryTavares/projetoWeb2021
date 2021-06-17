import '../styles/globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import styles from '../styles/components/Bar.module.css'
import homeStyles from '../styles//pages/Home.module.css'
import {IoBagCheck} from 'react-icons/io5';
import {GiFruitBowl, GiReceiveMoney} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {FaUserCircle} from 'react-icons/fa'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import Link from 'next/link'
import Register from './register'
import Login from './login'
import RegisterEnterprise from './enterprise'

function MyApp({ Component, pageProps, router }) {

    if (router.pathname.startsWith('/register')) {
        return <Register/>
    }
    if (router.pathname.startsWith('/login')) {
        return <Login/>
    }
    if (router.pathname.startsWith('/enterprise')) {
        return <RegisterEnterprise/>
    }

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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className ="me-1"><FaUserCircle style={{ fill: "url(#blue-gradient)"}} size="1.8rem" className="me-2 fs-5 bi-speedometer2"/> 
                                    <span className="d-none d-sm-inline-block" style={{fontWeight: 600}}>Iury Tavares</span>
                                </span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Perfil</a>
                                <a className="dropdown-item" href="#">Configurações</a>
                            <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Sair</a>
                            </div>
                        </li>
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
                                        <a className={`px-0 ${styles.bgSelected} text-decoration-none` }>
                                            <svg width="0" height="0">
                                                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                                    <stop stopColor="#4b2ae9" offset="0%" />
                                                    <stop stopColor="#9e4ef5" offset="100%" />
                                                </linearGradient>
                                            </svg>
                                            <IoBagCheck size="1.5rem" style={{ fill: "url(#blue-gradient)"}} className="me-2"/>
                                            <span style={{fontWeight: 600}} className="d-none d-sm-inline ms-1">
                                                Cotações
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/products">
                                        <a  className="px-0 text-secondary text-decoration-none">
                                            <GiFruitBowl size="1.5rem" className="me-2"/>
                                            <span style={{fontWeight: 600}} className="ms-1 d-none d-sm-inline">
                                                Meus Produtos
                                            </span> 
                                        </a>
                                    </Link>
                                </li>
                                {/*<li className="mb-3">
                                    <Link href="/bids">
                                        <a href="#" className="px-0 text-secondary text-decoration-none">
                                            <GiReceiveMoney size="1.5rem" className="me-2 fs-5 bi-speedometer2"/>
                                            <span style={{fontWeight: 600}} className="ms-1 d-none d-sm-inline text-secondary">
                                            Meus Bid's
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/transactions">
                                        <a href="#" className="px-0 text-secondary text-decoration-none">
                                            <GoChecklist size="1.5rem" className="me-2 fs-5 bi-speedometer2"/>
                                            <span style={{fontWeight: 600}} className="ms-1 d-none d-sm-inline text-secondary">
                                                Transações
                                            </span>
                                        </a>
                                    </Link>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                    <div className={`${homeStyles.bgSelected} vh-100 col`}>
                        <div className="mb-2 px-0 mx-0">
                            <Component {...pageProps} />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyApp
