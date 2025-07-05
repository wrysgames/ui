import React, { Binding, forwardRef } from "@rbxts/react";
import { toUDim } from "utils/udim";

export interface ListProps extends React.PropsWithChildren {
    /** Sets the padding between elements in the list */
    padding?: Binding<UDim> | Binding<number> | UDim | number;

    
}

export const List = forwardRef<UIListLayout, ListProps>(({
    children,
    padding,
}, ref) => (
    <uilistlayout
    ref={ref}
    Padding={toUDim(padding ?? 0)}
    children={children}
    />
));