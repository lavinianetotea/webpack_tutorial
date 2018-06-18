import React, {Component} from 'react';
import ProductCard from "./product-card";

class MachinesList extends Component {
    render() {
        const {customerMachines} = this.props;
        return customerMachines.map((machine, index) =>
            <ProductCard key={index} customerMachine={machine}/>
        );
    }
}

export default MachinesList;