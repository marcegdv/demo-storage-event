import './TextPaint.css';


export type OProps = {
    children: string,
};

export default function O({ children }: OProps): JSX.Element {

    return (
        <span className='used-object-color'>
            {children}
        </span>
    );

};
