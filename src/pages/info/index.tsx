import Navbar from '../../components/Containers/Navbar/Navbar';
import C from '../../components/Containers/TextPaint/C';
import F from '../../components/Containers/TextPaint/F';
import S from '../../components/Containers/TextPaint/S';

import './info.css';


export default function InfoPage(): JSX.Element {

    return (
        <div className='info-page-full-height info-page-container'>
            <div className=' info-page-container info-page-pad-4'>
                <Navbar />
                <div className='info-page-information'>
                    <h1 style={{ textAlign: 'center' }}>Info page</h1>
                    <h3>StorageEvent</h3>
                    <p>Detecta los cambios en el sotrage del navegador para que el componente que depende de los datos guardados en éste, se vuelva a renderizar.</p>
                    <h4>localStorage</h4>
                    <p>Cuando el hook <F>useStorageState</F> se inicializa para observar el <S>localStorage</S>, detectará los cambios que otras páginas hagan en el <S>localStorage</S>. Esto se logra con método <F>onstorage</F> que nos proveé la API <C>window</C> del navegador.</p>
                    <h4>sessionStorage</h4>
                    <p>Cuando el hook <F>useStorageState</F> se inicializa para observar el sessionStorage, detectará los cambios que se hagan en éste. Por supuesto que las demás páginas no pueden modificar el sessionStorage de otras páginas.</p>
                </div>
            </div>
            <footer className='info-page-footer'>
                Ideas random 2023
            </footer>
        </div>
    );

};
