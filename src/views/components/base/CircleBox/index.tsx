
import clsx from 'clsx';
import { ReactNode } from 'react';
import CircleBoxStyle from './style';
interface CircleProps {
    children?: ReactNode
    className?: string
    size?: "xl" | "lg" | "md" | "sm" | "xs"
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CircleBox: React.FunctionComponent<CircleProps> = (props) => {
    const classes = CircleBoxStyle();
    const { className, children, size, onClick } = props;
    const clClass = clsx(
        classes.root,
        "admin-circle-box",
        className, size);

    return <div className={clClass} onClick={onClick}>{children}</div>
}

export default CircleBox