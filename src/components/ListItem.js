import React from 'react';

const ListItem = ({item}) => {
    return (
      <div className="card list-item mb-2 shadow-sm" >
          <div className="card-body media">
              <img className="mr-3" src={item.snippet.thumbnails.medium.url} alt={item.snippet.description} />
              <div className="media-body">
                  <strong className="mt-0">{item.snippet.title}</strong>
              </div>
          </div>
      </div>
      );
};

export default ListItem;