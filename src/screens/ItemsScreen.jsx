import React, { useEffect, useState } from 'react';
import { getItems } from '../apis/dota';

function ItemsScreen() {
  const [items, setItems] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      setItems(fetchedItems);

      console.log(fetchedItems);
    };

    fetchItems();
  }, []);

  return <div>Items Screen</div>;
}

export default ItemsScreen;
