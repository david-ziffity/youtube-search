import React from 'react';
import ListItem from './ListItem';

const Lister = ({list, onSelectItem}) => {
    
    if (!list) {
        return null;
    }

    const lists = list.map((item, i) => <ListItem item={item} key={item.id.videoId} onClickItem={onSelectItem} />);

    return (
      <div className="lister">
          {lists}
      </div>
      );
};

export default Lister;