import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import styles from '../styles/components/Bar.module.css'
import {Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {IoBagCheck, IoLogoWechat } from 'react-icons/io5';
import {GiFruitBowl, GiReceiveMoney} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {FaUserCircle} from 'react-icons/fa'
import {CardItemList} from '../components/CardItemList'



export function Bar() {
    const navDropdownTitle = (<span className ="me-1"><FaUserCircle className="me-2 fs-5 bi-speedometer2"/> <IoLogoWechat className="me-2 fs-5 bi-speedometer2"/>Iury Tavares</span>);
    
    return (
      <div className="container-fluid overflow-hidden">
        <Row className="vh-100 overflow-auto"> {/**POR EXEMPL   O className={`asd asd ${styles.bg}`} */}
            <Col xl="2" lg="2" md="3"  className="px-sm-2 px-0 d-flex sticky-top d-none d-xl-block d-lg-block d-md-block"> {/* arrumar os icones, tirar esses d-none...*/}
                <div className="flex-sm-column flex-row align-items-sm-start px-3 pt-2">
                    <a href="/" className="d-flex pb-sm-3 text-decoration-none">
                    
                        <span className="fs-5 text-secondary">P<span className="d-none d-sm-inline ">rojetoZeus</span></span>
                    </a>
                    <ul className="nav nav-pills flex-sm-column" id="menu">
                        <li className="nav-item">
                            <a href="#" className={`px-0 ${styles.bgSelected}` }>
                                <IoBagCheck className="me-2 fs-5 bi-speedometer2"/>
                                <span className="ms-1 d-none d-sm-inline">Cotações</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"className="nav-link px-0 text-secondary">
                                <GiFruitBowl className="me-2 fs-5 bi-speedometer2"/>
                                <span className="ms-1 d-none d-sm-inline">Meus Produtos</span> 
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0 text-secondary">
                                <GiReceiveMoney className="me-2 fs-5 bi-speedometer2"/>
                                <span className="ms-1 d-none d-sm-inline text-secondary">Meus Bid's</span>
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link px-0 text-secondary">
                                <GoChecklist className="me-2 fs-5 bi-speedometer2"/>
                                <span className="ms-1 d-none d-sm-inline text-secondary">Transações</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col className="d-flex flex-column h-sm-100">
                <Row className="overflow-auto">
                    <Col>
                        <main className="row overflow-auto">
                            <Navbar expand="md" className="py-md-0">
                                <Navbar.Brand href="#home" className="d-md-none">P</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                                <Nav className="ms-auto py-0">
                                    <div className={`${styles.itemBorder} me-3`}>
                                        <Nav.Link href="#home" ></Nav.Link>
                                    </div>
                                    <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                {/*</Navbar.Collapse>*/}
                            </Navbar>
                        </main>
                    </Col>
                </Row>
                <Row className="overflow-auto">
                    <Col className="p-0 overflow-auto">
                        <div className={`vh-100 w-100 p-0 ${styles.bg}`}> 
                            <CardItemList></CardItemList>
                        </div>
                    </Col>
                </Row>
            </Col>
                {/*<main className="row overflow-auto">
                    <div className="col pt-4">
                        <h3>Vertical Sidebar that switches to Horizontal Navbar</h3>
                        <p className="lead">An example multi-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single menu is be open at a time.</p>
                        <hr/>
                        <h3>More content...</h3>
                        <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
                        <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    </div>
                </main>
                <footer className="row bg-light py-4 mt-auto">
                    <div className="col"> Footer content here... </div>
               </footer>*/}
            
        </Row>
    </div>
    )
  }