import { useState } from 'react';
import Envio from './Envio';

const Formulario = () => {
  const [oso, setOso] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?/;
    if (oso.length > 5 && oso.includes(' ') && regex.test(oso)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      {!show && (
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <label>Nombre Del Oso</label>
          <input
            type="text"
            value={oso}
            onChange={(event) => setOso(event.target.value)}
          />
          <button>Enviar</button>
        </form>
      )}
      {show && <Envio nombreOso={oso} />}
      {error && <h5 style={{ color: 'red' }}>Verifique bien los datos antes de enviar</h5>}
    </div>
  );
};

export default Formulario;