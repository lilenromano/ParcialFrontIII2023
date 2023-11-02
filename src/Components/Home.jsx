import React, { useState } from 'react';
import imgOso from '../assets/Osos-8.jpg';
import Card from './Card';
import Formulario from './Formulario';
import { home, titulo, item } from '../styles/Home.module.css';

const Home = () => {
  const [Tipo, setTipo] = useState([]);
  const Osos = [
    { id: 1, tipo: 'Pardo', extrañoNivel: '1', img: imgOso },
    { id: 2, tipo: 'Polar', extrañoNivel: '2', img: 'https://t1.ea.ltmcdn.com/es/posts/2/1/1/oso_polar_24112_7_600.webp' },
    { id: 3, tipo: 'Panda', extrañoNivel: '3', img: 'https://t1.ea.ltmcdn.com/es/posts/2/1/1/oso_panda_gigante_24112_6_600.webp' },
    { id: 4, tipo: 'Labiado', extrañoNivel: '4', img: 'https://t2.ea.ltmcdn.com/es/posts/2/1/1/oso_labiado_24112_1_600.webp' },
    { id: 5, tipo: 'Malayo', extrañoNivel: '5', img: 'https://t1.ea.ltmcdn.com/es/posts/2/1/1/oso_malayo_24112_0_600.webp' },
  ];

  return (
    <div className={home}>
      <h1 className={titulo}>Sección Osos</h1>
      <h3>Tipos</h3>
      <ul>
        {Osos.map(oso => (
          <li className={item} key={oso.id}>
            {oso.tipo}
          </li>
        ))}
      </ul>
      <Formulario />
      {Osos.map(oso => <Card setTipo={setTipo} oso={oso} key={oso.id} />)}
    </div>
  );
};

export default Home;