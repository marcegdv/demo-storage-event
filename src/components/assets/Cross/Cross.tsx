

export type CrossProps = {
    color?: string,
    size?: string,
};

/**
 * @color string, optional
 * @size string, optional
 */
const Cross = (props: CrossProps): JSX.Element => {
    const { color, size } = props;
    const setColor: string = color || 'currentcolor';
    const setSize: string = size || '32';
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            width={setSize}
            height={setSize}
            fill={setColor}
        >
            <path d='M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z'></path>
        </svg >
    );
};

export default Cross;