import {Pagination} from 'react-bootstrap'
import styles from '../styles/components/PaginationElement.module.css'

export function PaginationElement() {
    return(
        <nav aria-label="Page navigation example" className={styles.divPagination}>
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>  
    );
}
    
