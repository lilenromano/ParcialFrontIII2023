import { useState } from 'react';
import '../styles/Card.css';

const Card = ({ oso, setTipo }) => {
  const { id, img, tipo, precio, rareza } = oso;
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='card'>
      <img src={img} alt='' className='card-img' />
      <h3>{tipo}</h3>
      <h4>{extrañoNivel}</h4>
      <p>Rareza: {rareza}</p>
      <div className='buttons'>
        <button onClick={restar} disabled={count === 0}>
          -
        </button>
        <h3>{count}</h3>
        <button onClick={sumar}>+</button>
      </div>
      <button
        onClick={() =>
          setPedidos((prevState) => {
            const updatedTipo = [...prevState];
            const index = updatedTipo.findIndex((tipo) => tipo.id === oso.id);

            if (index !== -1) {
              updatedTipo[index].cantidad += count;
            } else {
              updatedTipo.push({ ...oso, cantidad: count });
            }

            return updatedTipo;
          })
        }
      >
        Ver...Rareza del Oso
      </button>
    </div>
  );
};
