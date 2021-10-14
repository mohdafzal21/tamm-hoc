import HoverHOC from './HoverHoc';

interface DivProps {
    onMouseOver: (state: boolean) => void;
    onMouseLeave: (state: boolean) => void;
    onClick: () => void;
}

interface StackProps {
    textHover: boolean;
    textColor: string;
    divProps: DivProps;
}

function MouseHoverComponent(props: StackProps) {
    const { textColor, textHover, ...divProps } = props;

    return (
        <div>
            <h2 {...divProps} style={{ color: textColor }}>Mouse {textHover ? 'In' : 'Out'}</h2>
        </div>
    )
}

export default HoverHOC(MouseHoverComponent);