import React from 'react';

const Header = () => {
  const titulos = ['Home', 'Shop', 'Contact', 'About'];
  const variable = true; // Puedes establecer esta variable según tus necesidades
  const backgroundColor = variable ? 'white' : 'black';

  const styles = {
    backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  return (
    <div style={styles}>
      {titulos.map((titulo, index) => {
        return <h5 key={index}>{titulo}</h5>;
      })}
    </div>
  );
};

export default Header;