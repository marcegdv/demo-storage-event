import { useRef } from 'react'

import FlexContainer from './components/Containers/Flex/Flex';
import InputTextForm from './components/InputTextForm/InputTextForm';
import SmallButton from './components/Button/Small/Small';

import { useStorageState } from './hooks/useSotrageState';


export default function App () {

    const storage = useStorageState('local');

    const inputRef: any = useRef(null);

    const handleOnPushkAdd = () => {
        if (!inputRef) return;
        const input = inputRef.current;
        const fullName = input.value;
        if (fullName.trim().length < 1) return;
        const newList: string[] = storage.get('names') || [];
        newList.push(fullName);
        storage.set('names', newList);
        input.focus();
        input.value = '';
    };

    const handleOnPushkClear = () => storage.set('names', []);

    const handleOnPushkSetUser = () => {
        storage.set('user', { user: 'name', pass: 'pass', id: 123 });
    };

    const handleOnPushkRemoveUser = () => {
        storage.set('user', null);
    };

    const handleOnPushkClearAll = () => storage.clear();

    return (
        <FlexContainer orientation='column' innerSpace='16' secondary='start'>
            <InputTextForm
                label='Nombre'
                placeHolder='Escribe un nombre...'
                defaultValue=''
                id='fullName'
                name='fullName'
                refference={inputRef}
                buttonLabel='Agregar'
                onPush={handleOnPushkAdd}
            />
            <FlexContainer orientation='column' innerSpace='16' secondary='start'>
                <FlexContainer orientation='row' innerSpace='16'>
                    <SmallButton label='Login' onPush={handleOnPushkSetUser} variant='safe' />
                    <SmallButton label='Logout' onPush={handleOnPushkRemoveUser} variant='secondary' />
                </FlexContainer>
                <FlexContainer orientation='row' innerSpace='16'>
                    <SmallButton label='Vaciar nombres' onPush={handleOnPushkClear} variant='warning' />
                    <SmallButton label='Vaciar Storage' onPush={handleOnPushkClearAll} variant='danger' />
                </FlexContainer>
            </FlexContainer>
            <FlexContainer orientation='column' innerSpace='8' secondary='start'>
                {Object.keys(storage.all()).map(
                    (key: string, index: number) => {
                        return (
                            <div key={index}>
                                {key}:{storage.all()[key]}
                            </div>
                        );
                    }
                )}
            </FlexContainer>
        </FlexContainer>
    );
};