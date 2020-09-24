import React from 'react';

const ListItem = ({item, onClickItem}) => {
    return (
      <div className="card list-item mb-2 shadow-sm" onClick={() => onClickItem(item)} >
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