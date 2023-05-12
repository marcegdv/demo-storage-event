import '../Buttons.css';

export type SmallButtonVariant =
    | 'primary'
    | 'secondary'
    | 'info'
    | 'safe'
    | 'warning'
    | 'danger';

export type SmallButtonProps = {
    label?: string,
    onPush?: Function,
    variant?: SmallButtonVariant,
};

const SmallButton = (props: SmallButtonProps): JSX.Element => {
    const { label, onPush, variant } = props;

    const handleOnPush = () => onPush ? onPush() : null;

    const classVariant: string = 'button-' + (variant || 'primary');

    return (
        <button
            className={'small-button ' + classVariant}
            onClick={handleOnPush}
            onKeyUp={handleOnPush}
        >
            {label || ''}
        </button>
    );
};

export default SmallButton;