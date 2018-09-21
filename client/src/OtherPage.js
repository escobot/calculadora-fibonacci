import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Otra página
            <Link to="/">Volver a la página anterior</Link>
        </div>
    )
}
