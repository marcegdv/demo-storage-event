import { geom, SvgName } from './GeomSvg';

export const geomList: string[] = Object.keys(geom);

export type GeomName = SvgName;

export type IconProps = {
    color?: string,
    size?: string,
    name: SvgName,
    title?: boolean,
    tooltip?: string,
};

/**
 * @color string, optional
 * @size string, optional
 * @name SvgName
 * @title boolean, optional
 * @tooltip string, optional
 */
const GeomIcon = (props: IconProps): JSX.Element => {
    const { color, size, name, title, tooltip } = props;
    
    const setColor: string = color || 'currentcolor';
    const setSize: string = size || '32';
    const path: JSX.Element = geom[name];

    const svgIcon: JSX.Element =
        <svg viewBox='0 0 32 32' width={setSize} height={setSize} fill={setColor}>
            {path}
        </svg >

    if (title) return <div title={tooltip || name}>{svgIcon}</div>;
    return svgIcon;
};

export default GeomIcon;