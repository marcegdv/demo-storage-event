import { ColorVariant } from '../../../types/stylesProps';
import '../Buttons.css';

export type SmallButtonProps = {
    label: string,
    onPush?: Function,
    variant?: ColorVariant,
};

const SmallButton = (props: SmallButtonProps): JSX.Element => {
    const { label, onPush, variant } = props;

    const handleOnPush = () => {
        if (onPush) onPush();
    };

    const handleOnKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if ((event.key === ' ' || event.key === 'Enter') && onPush) onPush();
    };

    const classVariant: string = 'button-' + (variant || 'primary');

    return (
        <button
            className={'small-button ' + classVariant}
            onClick={handleOnPush}
            onKeyUp={handleOnKeyUp}
        >
            {label}
        </button>
    );
};

export default SmallButton;