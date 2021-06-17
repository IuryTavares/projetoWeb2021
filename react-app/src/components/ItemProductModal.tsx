const ItemProductModal = () => {
    return (
        <li className="list-group-item">
            <div className="form-group row">
                <div className="col-sm-6">
                    <label>
                        Castanha do Pará
                    </label>
                </div>
                <div className="col">
                    <input className="form-control" type="number" placeholder="Quant." />
                </div>
                <div className="col-sm-1">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                </div>
            </div>
        </li>
    )
}

export default ItemProductModal