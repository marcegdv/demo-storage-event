import {
    OrientationType,
    InnerSpaceType,
    PrimaryAxisType,
    SecondaryAxisType,
    ColorScaleLevelType,
} from '../../../types/stylesProps';

import './Flex.css';


export type FlexContainerProps = {
    children?: React.ReactNode,
    orientation?: OrientationType,
    innerSpace?: InnerSpaceType,
    primary?: PrimaryAxisType,
    secondary?: SecondaryAxisType,
    bgcolorLvl?: ColorScaleLevelType,
    label?: string,
    colorLvl?: ColorScaleLevelType,
};

const FlexContainer = (
    {
        children,
        orientation, innerSpace, primary, secondary,
        bgcolorLvl, label, colorLvl
    }: FlexContainerProps
): JSX.Element => {
    const classes: string =
        'container-flex-' + (orientation ? orientation : 'column') +
        ' container-flex-inner-space-' + (innerSpace ? innerSpace : '8') +
        ' container-flex-primary-' + (primary ? primary : 'center') +
        ' container-flex-secondary-' + (secondary ? secondary : 'center') +
        ' bgcolor-scale-' + (bgcolorLvl ? bgcolorLvl : '0') +
        ' color-scale-' + (colorLvl ? colorLvl : '0')
        ;

    return (
        <>
            {label
                ? <fieldset className={classes}>
                    <legend>{label}</legend>
                    {children}
                </fieldset>
                : <div className={classes}>
                    {children}
                </div>
            }
        </>
    );
};

export default FlexContainer;