import './FullWidth.css';

export type FullWidthProps = {
    children?: JSX.Element | JSX.Element[],
};

const FullWidth = (props: FullWidthProps): JSX.Element => {
    const { children } = props;

    

    return (
        <div className='full-width'>
            {children}
        </div>
    );
};

export default FullWidth;