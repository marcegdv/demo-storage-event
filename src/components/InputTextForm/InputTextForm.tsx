import Button from "../Button/Small/Small";
import FlexContainer from "../Containers/Flex/Flex";

import './InputTextForm.css';

export type InputTextProps = {
    label?: string,
    placeHolder?: string,
    defaultValue?: string,
    id: string,
    name?: string,
    refference: any,
    buttonLabel: string,
    onPush: Function,
};

const InputTextForm = (props: InputTextProps): JSX.Element => {
    const { label, placeHolder, defaultValue, id, name, refference, buttonLabel, onPush } = props;

    const handleOnPushkAdd = () => onPush();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onPush();
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <FlexContainer
                orientation='row'
                innerSpace='16'
                bgcolorLvl='2'
                colorLvl='e'
                label='Agregar nombre a la lista:'
            >
                {label ?
                    <label
                        className='input-text-form-label'
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    : <></>
                }
                <input
                    ref={refference}
                    className='input-text-form'
                    id={id}
                    name={name}
                    type='text'
                    defaultValue={defaultValue}
                    placeholder={placeHolder}
                />
                <Button label={buttonLabel} onPush={handleOnPushkAdd} />
            </FlexContainer>
        </form>
    );
};

export default InputTextForm;