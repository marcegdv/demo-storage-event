

export type MenuOptionsProps = {
    options: JSX.Element[],
    showList: boolean,
};

const MenuOptions = (props: MenuOptionsProps): JSX.Element => {
    const { options, showList } = props;

    const handleOpacity = () => showList ? '1' : '0';

    const handlePosition = () => {
        return showList ? 'translate(4px, 0px)' : 'translate(-332px, 0%)';
    };

    const withKey: JSX.Element[] = options.map(
        (element: JSX.Element, index: number) => {
            return (
                <div key={`vertical-nav-option-key-${index}`}>
                    {element}
                </div>
            );
        }
    );

    return (
        <div
            className=''
            style={{
                display: 'flex', gap: '24px', flexDirection: 'column',
                padding: '16px',
                position: 'absolute', top: '49px', left: '0px',
                backgroundColor: '#222',
                // background:'transparent(40%)',
                width: '300px', height: '500px',
                opacity: handleOpacity(),
                transform: handlePosition(),
                transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
        >
            {withKey}
        </div>
    );
};

export default MenuOptions;