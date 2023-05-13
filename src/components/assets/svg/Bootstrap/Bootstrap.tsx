import { bootstrap, SvgName } from './BootstrapSvg';

export const bootstrapList: string[] = Object.keys(bootstrap);

export type BootstrapName = SvgName;

export type IconProps = {
    color?: string,
    size?: string,
    name: SvgName,
    title?: boolean,
    tooltip?: string,
};

//fix: svgrepo.com
/**
 * @color string, optional
 * @size string, optional
 * @name SvgName
 * @title boolean, optional
 * @tooltip string, optional (title required)
 */
const BootstrapIcon = (props: IconProps): JSX.Element => {
    const { color, size, name, title, tooltip } = props;

    const setColor: string = color || 'currentcolor';
    const setSize: string = size || '16';
    const path: JSX.Element = bootstrap[name];

    const svgIcon: JSX.Element =
        <svg viewBox='0 0 16 16' width={setSize} height={setSize} fill={setColor}>
            {path}
        </svg >

    if (title) return <div title={tooltip || name}>{svgIcon}</div>;
    return svgIcon;
};

export default BootstrapIcon;