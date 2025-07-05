import React, { Binding, forwardRef } from "@rbxts/react";
import { toUDim } from "utils/udim";

export interface PaddingProps extends React.PropsWithChildren {
    /** Sets both horizontal padding (left + right) */
    paddingX?: Binding<UDim> | Binding<number> | UDim | number;

    /** Sets both vertical padding (top + bottom) */
    paddingY?: Binding<UDim> | Binding<number> | UDim | number;

    /** Sets top padding, overrides `paddingY` if both are defined */
    paddingTop?: Binding<UDim> | Binding<number> | UDim | number;

    /** Sets bottom padding, overrides `paddingY` if both are defined */
    paddingBottom?: Binding<UDim> | Binding<number> | UDim | number;

    /** Sets left padding, overrides `paddingX` if both are defined */
    paddingLeft?: Binding<UDim> | Binding<number> | UDim | number;

    /** Sets right padding, overrides `paddingX` if both are defined */
    paddingRight?: Binding<UDim> | Binding<number> | UDim | number;
}

export const Padding = forwardRef<UIPadding, PaddingProps>(({
    children,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
}, ref) => (
    <uipadding
    ref={ref}
    PaddingTop={toUDim(paddingTop ?? paddingY ?? 0)}
    PaddingBottom={toUDim(paddingBottom ?? paddingY ?? 0)}
    PaddingLeft={toUDim(paddingLeft ?? paddingX ?? 0)}
    PaddingRight={toUDim(paddingRight ?? paddingX ?? 0)}
    children={children}
    />
));