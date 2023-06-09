# Javascript - StorageEvent y window.onstorage

Ejemplo de un `localStorage` que cuando otra página modifica su contenido, ejecuta un *callback* (que en esta demo) se actualiza un estado de React para renderizar los cambios que realizan las distintas páginas en el storage.

- Instalación: `npm i`
- Ejecución: `npm run start`

## - Demo

Al ejecutar el proyecto localmente, abre más de una pestaña o navegador y entra a la url **http://localhost:3000** del proyecto. Verás que no importa en que pestaña se haga un cambio, las otas se actualizará con los cambios.

## - StorageEvent interfaz
Cuando hagas un cambio, en la otra página verás en consola el siguiente evento que fue capturado con la *callbakc* que se asignó a `window.onstorage`:
```js
{
    isTrusted: true
    bubbles: false
    cancelBubble: false
    cancelable: false
    composed: false
    currentTarget: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    defaultPrevented: false
    eventPhase: 0
    key: "user"
    newValue: "null"
    oldValue: "{\"user\":\"name\",\"pass\":\"pass\",\"id\":123}"
    returnValue: true
    srcElement: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    storageArea: Storage {user: 'null', length: 1}
    target: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    timeStamp: 102861.79999995232
    type: "storage"
    url: "http://localhost:8080/"
}
```

## Hook useStorageState
Se encarga de setear la detección de cambios en el `localStorage` realizados por otras páginas y volver a renderizar el componente. También detecta cambios en el `sessionStorage` haciendo que el componente se vuelva a renderizar.

```js
import { useStorageState } from './hooks/useSotrageState';

/* ... */

export default function App () {

    //para detectar cambios en la misma y en otras páginas
    const storage = useStorageState('local');
    
    //para detectar cambios en la misma página
    const storage = useStorageState('session');

};
```

El hook retorna las siguientes funciones:
- `set(key: string, value: any): void` - agrega una clave:valor al storage.
- `get(key: string): any` - retorna el valor de una clave.
- `remove(key: string): void` - elimina una clave.
- `length(): number` - retorna la cantidad de claves.
- `clear(): void ` - vacía el contenido del storage.
- `all(): any` - retorna un objeto con el contenido del storage.
- `keys(): string[]` - retorna la lista de claves del storage.
