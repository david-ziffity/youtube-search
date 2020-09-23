import React from 'react';

const ItemDetail = ({item}) => {

    if (!item) {
        return null;
    }

    const videourl = `http://www.youtube.com/embed/${item.id.videoId}`;

    return (
      <div className="item-detail card">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Video player" className="embed-responsive-item" src={videourl} frameborder="0"></iframe>
          </div>
          <div className="card-body">
              <h5>{item.snippet.title}</h5>
              <p>{item.snippet.description}</p>
          </div>
      </div>
      );
};

export default ItemDetail;