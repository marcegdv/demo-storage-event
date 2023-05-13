export type SvgName =
    | 'bookmark'
    | 'calendar'
    | 'camera'
    | 'chat'
    | 'check'
    | 'chevronDown'
    | 'chevronLeft'
    | 'chevronRight'
    | 'chevronUp'
    | 'cross'
    | 'clock'
    | 'close'
    | 'cloud'
    | 'cog'
    | 'home'
    | 'info'
    | 'link'
    | 'list'
    | 'lock'
    | 'not'
    | 'refresg'
    | 'search'
    | 'tag'
    | 'trash'
    | 'triangleDown'
    | 'triangleLeft'
    | 'triangleRight'
    | 'triangleUp'
    | 'user'
    | 'warning'
    ;
    
export type SvgObject = Record<SvgName, JSX.Element>;

export const geom: SvgObject = {
    bookmark: <path d="M6 2 L26 2 L26 30 L16 24 L6 30 Z"></path>,
    calendar: <path d="M2 4 L6 4 L6 2 A2 2 0 0 1 10 2 L10 4 L22 4 L22 2 A2 2 0 0 1 26 2 L26 4 L30 4 L30 10 L2 10 M2 12 L30 12 L30 30 L2 30"></path>,
    camera: <path d="M0 6 L8 6 L10 2 L22 2 L24 6 L32 6 L32 28 L0 28 z M9 17 A7 7 0 0 0 23 17 A7 7 0 0 0 9 17"></path>,
    chat: <path d="M32 16 A16 12 0 0 0 0 16 A16 12 0 0 0 16 28 L18 28 C20 30 24 32 28 32 C27 31 26 28 26 25.375 L26 25.375 A16 12 0 0 0 32 16"></path>,
    check: <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>,
    chevronDown: <path d="M1 12 L16 26 L31 12 L27 8 L16 18 L5 8 z"></path>,
    chevronLeft: <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>,
    chevronRight: <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>,
    chevronUp: <path d="M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z"></path>,
    cross: <path d='M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z'></path>,
    clock: <path d="M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 28 16 A12 12 0 0 1 16 28 A12 12 0 0 1 4 16 A12 12 0 0 1 16 4 M14 6 L14 17.25 L22 22 L24.25 18.5 L18 14.75 L18 6z"></path>,
    close: <path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"></path>,
    cloud: <path d="M7 14 A7 7 0 0 0 0 21 A7 7 0 0 0 7 28 H27 A5 5 0 0 0 32 23 A5 5 0 0 0 27 18 A10 10 0 0 0 28 14 A10 10 0 0 0 18 4 A10 10 0 0 0 8 14 A7 7 0 0 0 7 14"></path>,
    cog: <path d="M14 0 H18 L19 6 L20.707 6.707 L26 3.293 L28.707 6 L25.293 11.293 L26 13 L32 14 V18 L26 19 L25.293 20.707 L28.707 26 L26 28.707 L20.707 25.293 L19 26 L18 32 L14 32 L13 26 L11.293 25.293 L6 28.707 L3.293 26 L6.707 20.707 L6 19 L0 18 L0 14 L6 13 L6.707 11.293 L3.293 6 L6 3.293 L11.293 6.707 L13 6 L14 0 z M16 10 A6 6 0 0 0 16 22 A6 6 0 0 0 16 10"></path>,
    home: <path d="M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z"></path>,
    info: <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>,
    link: <path d="M0 16 A8 8 0 0 1 8 8 L14 8 A8 8 0 0 1 22 16 L18 16 A4 4 0 0 0 14 12 L8 12 A4 4 0 0 0 4 16 A4 4 0 0 0 8 20 L10 24 L8 24 A8 8 0 0 1 0 16z M22 8 L24 8 A8 8 0 0 1 32 16 A8 8 0 0 1 24 24 L18 24 A8 8 0 0 1 10 16 L14 16 A4 4 0 0 0 18 20 L24 20 A4 4 0 0 0 28 16 A4 4 0 0 0 24 12z"></path>,
    list: <path d="M3 8 A3 3 0 0 0 9 8 A3 3 0 0 0 3 8 M12 6 L28 6 L28 10 L12 10z M3 16 A3 3 0 0 0 9 16 A3 3 0 0 0 3 16 M12 14 L28 14 L28 18 L12 18z M3 24 A3 3 0 0 0 9 24 A3 3 0 0 0 3 24 M12 22 L28 22 L28 26 L12 26z"></path>,
    lock: <path d="M22 16 L22 12 A6 6 0 0 0 10 12 L10 16 z M4 16 L6 16 L6 12 A10 10 0 0 1 26 12 L26 16 L28 16 L28 30 L4 30 z"></path>,
    not: <path d="M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 6 A10 10 0 0 1 20.675 7 L7 20.675 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 M26 16 A10 10 0 0 1 16 26 A10 10 0 0 1 11.325 25 L25 11.325 A10 10 0 0 1 26 16"></path>,
    refresg: <path d="M16 2 A14 14 0 0 0 2 16 A14 14 0 0 0 16 30 A14 14 0 0 0 26 26 L 23.25 23 A10 10 0 0 1 16 26 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 A10 10 0 0 1 23.25 9 L19 13 L30 13 L30 2 L26 6 A14 14 0 0 0 16 2"></path>,
    search: <path d="M12 0 A12 12 0 0 0 0 12 A12 12 0 0 0 12 24 A12 12 0 0 0 18.5 22.25 L28 32 L32 28 L22.25 18.5 A12 12 0 0 0 24 12 A12 12 0 0 0 12 0 M12 4 A8 8 0 0 1 12 20 A8 8 0 0 1 12 4"></path>,
    tag: <path d="M0 18 L16 2 L29 3 L30 16 L14 32 z M20 9 A3 3 0 0 0 26 9 A3 3 0 0 0 20 9"></path>,
    trash: <path d="M4 4 L10 4 L12 2 L20 2 L22 4 L28 4 L29 8 L3 8 z M5 10 L27 10 L26 30 L6 30 z"></path>,
    triangleDown: <path d="M4 8 H28 L16 26 z"></path>,
    triangleLeft: <path d="M24 4 V28 L6 16 z"></path>,
    triangleRight: <path d="M8 4 V28 L26 16 z"></path>,
    triangleUp: <path d="M4 24 H28 L16 6 z"></path>,
    user: <path d="M10 8 A6 6 0 0 1 22 8 L22 12 A6 6 0 0 1 10 12 z M2 26 C3 23 10 20 14 20 L18 20 C22 20 29 23 30 26 L30 28 L2 28 z"></path>,
    warning: <path d="M15 0 H17 L32 29 L31 30 L1 30 L0 29 z M19 8 L13 8 L14 20 L18 20 z M16 22 A3 3 0 0 0 16 28 A3 3 0 0 0 16 22"></path>,
};