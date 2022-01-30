// I still thinking about what should be inside of each buttons...

function StartBtnPersonal() {
  return (
    <div className='start_container_personal'>
      <button className='start_button_personal'>Personal Stats</button>
    </div>
  );
}

function StartBtnCharacters() {
  return (
    <div className='start_container_characters'>
      <button className='start_button_characters'>Characters</button>
    </div>
  );
}

function StartBtnItems() {
  return (
    <div className='start_container_items'>
      <button className='start_button_items'>Items</button>
    </div>
  );
}

function StartBtnEsport() {
  return (
    <div className='start_container_esport'>
      <button className='start_button_esport'>eSports</button>
    </div>
  );
}

export { StartBtnPersonal, StartBtnCharacters, StartBtnItems, StartBtnEsport };
