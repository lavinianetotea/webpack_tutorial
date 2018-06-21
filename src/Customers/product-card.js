import React, {Component} from 'react';

class ProductCard extends Component {
    render() {
        const {customerMachine} = this.props;
        const {serialNumber, softwareVersion, hardwareId, model, productName} = customerMachine;

        return (
            <div style={{borderRadius: '0', backgroundColor: '#f5f4f7'}} className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 mt-4">
                            <img src="./src/assets/img/host-32.svg" width="30" height="30"/>
                        </div>
                        <div className="col-11">
                            <h6 className="m-0">S/N: {serialNumber}</h6>
                            <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}}
                               className="m-0">{softwareVersion}</p>
                            <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}}
                               className="m-0">{hardwareId}</p>
                            <p style={{fontSize: '14px', color: 'gray', marginBottom: '0'}}
                               className="m-0">Model: {model} - Name: {productName}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;