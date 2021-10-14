# Getting Started with Create React App

```
npm install && npm run start 

```

Two components 
-- Higher Order Component 
```tsx
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
```

-- Mouse Hover component to change color
```tsx
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
```