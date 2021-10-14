import { ComponentType, useState } from 'react';


const withHoverHOC = (WrappedComponent: ComponentType<any>) => {

    const WithHover = () => {
        const [textHover, setHover] = useState(false);
        const [textColor, setTextColor] = useState('#143dd1');
        return <WrappedComponent
            textColor={textColor}
            textHover={textHover}
            onMouseOver={() => { setHover(true); setTextColor("#b2a8ff"); }}
            onMouseLeave={() => { setHover(false); setTextColor("#143dd1"); }}
            onClick={() => setTextColor('#06aa5b')} />
    }

    return WithHover;
}

export default withHoverHOC;