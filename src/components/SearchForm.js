import React, {Component} from 'react';

class SearchForm extends Component {

    state = {term: '', valid: true}

    helpTextClass = 'text-muted form-text';

    onSearchSubmit = (e) => {
        e.preventDefault();
        (this.state.term.length > 2) ? this.setState({valid: true}) : this.setState({valid: false});
        if (this.state.term.length > 2) {
            this.props.onChange(this.state.term);
        }
    }

    onSearchChange = (e) => {
        this.setState({term: e.target.value});
    }

    render() {
        return (
          <div className="card youtube-search-form mb-4 shadow-sm">
              <div className="card-body">
                  <form onSubmit={this.onSearchSubmit}>
                      <div className="form-group">
                          <label htmlFor="exampleInputEmail1">{this.props.label}</label>
                          <input type="text" className="form-control" value={this.state.term} onChange={this.onSearchChange} />
                          <small className={!this.state.valid ? 'text-danger' : 'text-muted'}>Enter minimun 3 Charector</small>
                      </div>
                  </form>
              </div>
          </div>
          );
    }
}

export default SearchForm;