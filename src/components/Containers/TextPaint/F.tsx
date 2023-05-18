import './TextPaint.css';


export type FProps = {
    children: string,
};

export default function F({ children }: FProps): JSX.Element {

    return (
        <span className='used-function-color'>
            {children}
        </span>
    );

};
