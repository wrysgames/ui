import React, { type Binding, forwardRef, Ref } from "@rbxts/react";

export interface FrameProps<T extends Instance = Frame> extends React.PropsWithChildren {
    event?: React.InstanceEvent<T>;
    change?: React.InstanceChangeEvent<T>;
    size?: UDim2 | Binding<UDim2>;
    position?: UDim2 | Binding<UDim2>;
    anchorPoint?: Vector2 | Binding<Vector2>;
    rotation?: number | Binding<number>;
    backgroundColor?: Color3 | Binding<Color3>;
    backgroundTransparency?: number | Binding<number>;
    clipsDescendants?: boolean | Binding<boolean>;
    visible?: boolean | Binding<boolean>;
    zIndex?: number | Binding<number>;
    layoutOrder?: number | Binding<number>;
}

export const Frame = forwardRef(
    (
        {
            children,
            event,
            change,
            size,
            position,
            anchorPoint,
            rotation,
            backgroundColor,
            backgroundTransparency,
            clipsDescendants,
            visible,
            zIndex,
            layoutOrder,
        }: FrameProps,
        ref: Ref<Frame>,
    ) => {
        return (
            <frame
                ref={ref}
                Size={size}
                Position={position}
                AnchorPoint={anchorPoint}
                Rotation={rotation}
                BackgroundColor3={backgroundColor}
                BackgroundTransparency={backgroundTransparency}
                ClipsDescendants={clipsDescendants}
                Visible={visible}
                ZIndex={zIndex}
                LayoutOrder={layoutOrder}
                BorderSizePixel={0}
                Event={event}
                Change={change}
                children={children}
            />
        );
    },
);
