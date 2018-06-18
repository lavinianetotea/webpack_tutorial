import React, {Component} from 'react';

const inputField = {
    width: '900px',
    border: 'transparent',
    borderBottom: '1px solid #80808063',
    paddingBottom: '12px'
};
const buttonTrash = {
    border: '1px solid #7b6bea',
    borderRadius: '0'
};
const buttonSearch = {
    backgroundColor: '#7b6bea',
    borderRadius: '0'
};

class Search extends Component {
    constructor() {
        super();
        this.state = {
            isSearchButtonDisabled: true,
            showHintText: 'block',
            searchValue: ''
        };
    }

    toggleSearchButton(value) {
        return value ? this.setState({isSearchButtonDisabled: false}) : this.setState({isSearchButtonDisabled: true});
    }

    displayInputNote(value) {
        return value ? this.setState({showHintText: 'none'}) : this.setState({showHintText: 'block'});
    }

    search() {
        const searchResults = [];
        const {maintenancePlans} = this.props;
        maintenancePlans.forEach(maintenancePlan => {
            const {status, quoteNumber, serialNumber, customer} = maintenancePlan;
            if(`${status} ${quoteNumber} ${serialNumber} ${customer}`.includes(this.state.searchValue)){
                searchResults.push(maintenancePlan);
            }
        });
        if(searchResults.length) {
            this.props.callbackFromParent(searchResults);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <button style={buttonTrash} type="button" className="btn">
                        <i style={{color: '#7b6bea'}} className="fa fa-trash"></i>
                    </button>
                </div>
                <div className="col-10">
                    <input id="inputSearch" style={inputField} type="text" placeholder="Search maintenance plans"
                           onChange={event => {
                               this.toggleSearchButton(event.target.value);
                               this.displayInputNote(event.target.value);
                               this.setState({searchValue: event.target.value.trim()})
                           }}/>
                    <p style={{display: this.state.showHintText}}>Please note that you can search for either status or
                        quote number</p>

                </div>
                <div className="col-1">
                    <button style={buttonSearch} type="button" className="btn"
                            disabled={this.state.isSearchButtonDisabled}
                            onClick={event => this.search(event)}
                    >
                        <i style={{color: 'white'}} className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;