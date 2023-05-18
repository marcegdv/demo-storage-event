import './TextPaint.css';


export type CProps = {
    children: string,
};

export default function C({ children }: CProps): JSX.Element {

    return (
        <span className='used-constant-color'>
            {children}
        </span>
    );

};
