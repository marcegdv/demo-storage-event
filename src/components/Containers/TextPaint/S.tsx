import './TextPaint.css';


export type SProps = {
    children: string,
};

export default function S({ children }: SProps): JSX.Element {

    return (
        <span className='used-string-color'>
            {children}
        </span>
    );

};
