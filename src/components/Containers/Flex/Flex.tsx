import {
    OrientationType,
    InnerSpaceType,
    PrimaryAxisType,
    SecondaryAxisType,
    ColorScaleLevelType,
} from '../../../types/stylesProps';
import Legend from '../Label/Legend';

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
    labelColorLvl?: ColorScaleLevelType,
    labelBgcolorLvl?: ColorScaleLevelType,
};

const FlexContainer = (
    {
        children,
        orientation, innerSpace, primary, secondary,
        bgcolorLvl, label, colorLvl, labelColorLvl, labelBgcolorLvl
    }: FlexContainerProps
): JSX.Element => {

    const fieldsetClasses: string =
        'container-flex-' + (orientation ? orientation : 'column') +
        ' container-flex-inner-space-' + (innerSpace ? innerSpace : '8') +
        ' container-flex-primary-' + (primary ? primary : 'center') +
        ' container-flex-secondary-' + (secondary ? secondary : 'center') +
        ' bgcolor-scale-' + (bgcolorLvl ? bgcolorLvl : '0') +
        ' color-scale-' + (colorLvl ? colorLvl : '0') +
        `${label ? ' border-color-scale-' + (labelBgcolorLvl ? labelBgcolorLvl : '0') : ''}`
        ;

    const legendClasses: string = 'container-flex-legend' +
        ' bgcolor-scale-' + (labelBgcolorLvl ? labelBgcolorLvl : '0') +
        ' color-scale-' + (labelColorLvl ? labelColorLvl : '0')
        ;

    return (
        <>
            {label
                ? <fieldset className={fieldsetClasses}>
                    <Legend className={legendClasses} text={label} />
                    {children}
                </fieldset>
                : <div className={fieldsetClasses}>
                    {children}
                </div>
            }
        </>
    );

};

export default FlexContainer;