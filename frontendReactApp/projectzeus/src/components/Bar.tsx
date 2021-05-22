import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import styles from '../styles/components/Bar.module.css'
import {Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {IoBagCheck} from 'react-icons/io5';
import {GiFruitBowl, GiReceiveMoney} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {FaUserCircle} from 'react-icons/fa'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {QuotesPage} from '../components/QuotesPage'
import {CardItemList} from './views/CardItemList'
import {FiMenu} from 'react-icons/fi'
import { BidsPage } from './BidsPage';
import { TransactionPage } from './TransactionPage';
import { MyProductsPage } from './MyProductsPage';

export function Bar() {
    const navDropdownTitle = (
        <span className ="me-1"><FaUserCircle style={{ fill: "url(#blue-gradient)"}} size="1.8rem" className="me-2 fs-5 bi-speedometer2"/> 
            <span className="d-none d-sm-inline-block" style={{fontWeight: 600}}>Iury Tavares</span>
        </span>
        );
    
    return (
      <div className="container-fluid overflow-hidden">
        <Row className="vh-100 overflow-auto">
            <Col xl="2" lg="2" md="3" style={{zIndex: 1}}  className={`${styles.bgColor} ${styles.shadowBar} px-sm-2 px-0 d-flex sticky-top d-none d-xl-block d-lg-block d-md-block`}>
                <div className="flex-sm-column flex-row align-items-sm-start px-3 pt-2">
                    <a href="#" style={{fontWeight: 600}} className={`${styles.bgSelected} d-flex pb-sm-3 text-decoration-none`}>
                        <FiMenu color="black" size="1.5rem" className="mt-2 ms-1"></FiMenu>
                    </a>
                    <ul className="nav nav-pills flex-sm-column" id="menu">
                        <li className="my-3">
                            <a href="#" className={`px-0 ${styles.bgSelected} text-decoration-none` }>
                                <svg width="0" height="0">
                                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="#4b2ae9" offset="0%" />
                                        <stop stopColor="#9e4ef5" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <IoBagCheck size="1.5rem" style={{ fill: "url(#blue-gradient)"}} className="me-2"/>
                                <span style={{fontWeight: 600}} className="d-none d-sm-inline ms-1">Cotações</span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="px-0 text-secondary text-decoration-none">
                                <GiFruitBowl size="1.5rem" className="me-2"/>
                                <span style={{fontWeight: 600}} className="ms-1 d-none d-sm-inline">Meus Produtos</span> 
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="px-0 text-secondary text-decoration-none">
                                <GiReceiveMoney size="1.5rem" className="me-2 fs-5 bi-speedometer2"/>
                                <span style={{fontWeight: 600}} className="ms-1 d-none d-sm-inline text-secondary">Meus Bid's</span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="px-0 text-secondary text-decoration-none">
                                <GoChecklist size="1.5rem" className="me-2 fs-5 bi-speedometer2"/>
                                <span style={{fontWeight: 600}} className="ms-1 d-none d-sm-inline text-secondary">Transações</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col className="d-flex flex-column h-sm-100">
                <Row className={`${styles.bgColor} ${styles.shadowBar}`} style={{zIndex: 2}}>
                    <Col>
                        <main className="row">
                            <Navbar expand="md" className="py-0">
                                <Navbar.Brand href="#home" style={{fontWeight: 600}} className={`${styles.bgSelected} mx-auto d-none d-sm-inline`}>ProjetoZeus</Navbar.Brand>
                                <Navbar.Brand href="#home" className="d-md-none">P</Navbar.Brand>
                                <Nav className="ms-auto nav-justified" style={{flexDirection: "row"}}>
                                    <div className={`${styles.itemBorder} d-md-none`}>
                                        <Nav.Link href="#home" >
                                            <IoBagCheck className="mx-3 fs-5 bi-speedometer2"/>
                                        </Nav.Link>
                                    </div>
                                    <div className={`${styles.itemBorder} d-md-none`}>
                                        <Nav.Link href="#home" >
                                            <GiFruitBowl className="mx-3 fs-5 bi-speedometer2"/>    
                                        </Nav.Link>
                                    </div>
                                    <div className={`${styles.itemBorder} d-md-none`}>
                                        <Nav.Link href="#home" >
                                            <GiReceiveMoney className="mx-3 fs-5 bi-speedometer2"/>
                                        </Nav.Link>
                                    </div>
                                    <div className={`${styles.itemBorder} d-md-none`}>
                                        <Nav.Link href="#home" >
                                            <GoChecklist className="mx-3 fs-5 bi-speedometer2"/>
                                        </Nav.Link>
                                    </div>
                                    <div className={`${styles.itemBorder} me-3`}>
                                        <Nav.Link href="#home" >
                                            <BsFillChatDotsFill className="mx-3 mx-sm-2 fs-5 bi-speedometer2"/>
                                        </Nav.Link>
                                    </div>
                                    <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Configurações</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#">Sair</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar>
                        </main>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="w-100 pt-3">
                            <TransactionPage/>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    )
  }