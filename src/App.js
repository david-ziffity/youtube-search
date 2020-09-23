import React, {Component}
from 'react';
import SearchForm from './components/SearchForm';
import Lister from './components/Lister';
import ItemDetail from './components/ItemDetail';
import youtube from './api/youtube';

import './App.css';

class App extends Component {

    state = {
        list: [],
        selectedItem: null
    }

    onSearchFormChange = async (term) => {
        const response = await youtube.get(
          '/search',
          {params: {q: term}
          });
          
        this.setState({
            list: response.data.items,
            selectedItem: response.data.items[0]
        });
    }

    componentDidMount() {
        this.onSearchFormChange('seven wonders');
    }

    renderContent() {
        if (!this.state.list.length) {
            return (
              <div className="container">
                  <div className="alert alert-danger text-center m-5">OOps.. Facing issue to get the Data for you !</div>
              </div>
              )
        }
        
        return (
          <div className="youtube-app container mt-4">
              <SearchForm label="Enter search Term:" onChange={this.onSearchFormChange} />
              <div className="row">
                  <div className="col-lg-7">
                      <ItemDetail item={this.state.selectedItem} />
                  </div>
                  <div className="col-lg-5">
                      <Lister list={this.state.list} />
                  </div>
              </div>
          </div>
          );
    }

    render = () => this.renderContent();

}

export default App;
