import React, { useEffect, useState } from 'react';
import * as itemAPI from '../../apis/itemAPI';

function ItemsScreen() {
  const [items, setItems] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await itemAPI.getItems();
      setItems(fetchedItems);

      console.log(fetchedItems);
    };

    fetchItems();
  }, []);

  return <div>Items Screen</div>;
}

export default ItemsScreen;
