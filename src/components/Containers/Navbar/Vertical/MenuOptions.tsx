

export type MenuOptionsProps = {
    children?: JSX.Element | JSX.Element[],
    style?: React.CSSProperties,
    showList: boolean,
};

const MenuOptions = (props: MenuOptionsProps): JSX.Element => {
    const { children, style, showList } = props;

    const handleOpacity = () => showList ? '1' : '0';
    const handlePosition = () => {
        return showList ? 'translate(0px, 0px)' : 'translate(-332px, 0%)';
    };

    return (
        <div
            className=''
            style={{
                display: 'flex', gap: '24px', flexDirection: 'column',
                padding: '8px',
                position: 'absolute', top: '49px', left: '0px',
                backgroundColor: '#444',
                width: '300px', height: '500px',
                opacity: handleOpacity(),
                transform: handlePosition(),
                transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
        >
            {children}
        </div>
    );
};

export default MenuOptions;