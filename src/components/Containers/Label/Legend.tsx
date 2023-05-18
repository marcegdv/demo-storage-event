import './Legend.css';


export type LegendProps = {
    className?: string,
    text: string,
};

export default function Legend({ className, text }: LegendProps): JSX.Element {

    return (
        <legend className={className}>{text}</legend>
    );

};
