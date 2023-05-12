import './Flex.css';

export type FlexContainerProps = {
    children?: React.ReactNode,
    orientation?: 'row' | 'column',
    innerSpace?: '8' | '16',
    primary?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
    secondary?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
};

const FlexContainer = (props: FlexContainerProps): JSX.Element => {
    const { children, orientation, innerSpace, primary, secondary } = props;

    const classes: string = 'container-flex-' + (orientation ? orientation : 'column') +
        ' container-flex-inner-space-' + (innerSpace ? innerSpace : '8') +
        ' container-flex-primary-' + (primary ? primary : 'center') +
        ' container-flex-secondary-' + (secondary ? secondary : 'center')
        ;

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default FlexContainer;