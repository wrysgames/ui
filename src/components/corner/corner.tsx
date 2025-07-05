import React, { Binding, forwardRef } from "@rbxts/react";

export interface CornerProps extends React.PropsWithChildren {
    radius?: UDim | Binding<UDim>;
}

export const Corner = forwardRef<UICorner, CornerProps>(({
    children,
    radius
}, ref) => (
    <uicorner
    ref={ref}
    CornerRadius={radius}
    children={children}
    />
))