import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  const [value, setValue] = useState("resents");

  const handlerChange = (event, newValue) => {
    setValue(newValue)
  };
  return (
    <footer>
    <BottomNavigation
      value={value}
      onChange={handlerChange}
    >
      <BottomNavigationAction 
        label="Favorites"
        value="favotires"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction 
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
      <BottomNavigationAction 
        label="My Instagram"
        value="finstagram"
        icon={<InstagramIcon />}
      />
    </BottomNavigation>
  </footer>
  )
};

export { Footer };