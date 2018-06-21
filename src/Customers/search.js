import React, {Component} from 'react';

const inputField = {
    width: '990px',
    border: 'transparent',
    borderBottom: '1px solid #80808063',
    paddingBottom: '12px'
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
            searchValue: ''
        };
    }

    resetTable(value) {
        return value ? this.props.emptySearchFromParent(false) : this.props.emptySearchFromParent(true);

    }

    toggleSearchButton(value) {
        return value ? this.setState({isSearchButtonDisabled: false}) : this.setState({isSearchButtonDisabled: true});
    }

    search() {
        const searchResults = [];
        const {customers} = this.props;
        customers.forEach(customer => {
            Object.values(customer).forEach(value => {
                if (value.includes(this.state.searchValue)) {
                    searchResults.push(customer);
                }
            });
        });
        if (searchResults.length) {
            this.props.callbackFromParent(searchResults);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-11">
                    <input style={inputField} type="text" placeholder="Search for customers"
                           onChange={event => {
                               this.toggleSearchButton(event.target.value);
                               this.setState({searchValue: event.target.value.trim()})
                               this.resetTable(event.target.value);
                           }}/>
                </div>
                <div className="col-1">
                    <button style={buttonSearch} type="button" className="btn"
                            disabled={this.state.isSearchButtonDisabled}
                            onClick={event => this.search(event)}>
                        <i style={{color: 'white'}} className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;