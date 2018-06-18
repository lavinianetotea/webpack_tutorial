import React, {Component} from 'react';

class ProductCard extends Component {
    render() {
        const {customerMachine} = this.props;
        const {productName, serialNumber, softwareVersion, maintenancePlan, hardwareId, model} = customerMachine;
        const {supportType, expirationDate} = maintenancePlan;

        return (
            <div style={{borderRadius: '0', backgroundColor: '#f5f4f7'}} className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 mt-4">
                            <img src="./src/assets/img/host-32.svg" width="30" height="30"/>
                        </div>
                        <div className="col-10">
                                <h6 className="m-0">{productName}</h6>
                                <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}} className="m-0">{serialNumber}</p>
                                <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}} className="m-0">{softwareVersion}</p>
                                <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}} className="m-0">{supportType} - {expirationDate}</p>
                                <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}} className="m-0">{hardwareId}</p>
                                <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}} className="m-0">{model}</p>

                        </div>
                        <div className="col-1 mt-4">
                            <button type="button" className="btn btn-link">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;