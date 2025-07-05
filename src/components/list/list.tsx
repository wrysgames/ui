import React, { Binding, forwardRef } from "@rbxts/react";
import { toUDim } from "utils/udim";

export interface ListProps extends React.PropsWithChildren {
    /** Sets the padding between elements in the list */
    padding?: Binding<UDim> | Binding<number> | UDim | number;

    /** Sets the list to be either `horizontal` or `vertical` */
    axis?: "horizontal" | "vertical";
    sortOrder?: Enum.SortOrder;
    wraps?: boolean;

    horizontalAlignment?: Enum.HorizontalAlignment;
    horizontalFlex?: Enum.UIFlexAlignment;

    verticalAlignment?: Enum.VerticalAlignment;
    verticalFlex?: Enum.UIFlexAlignment;

    itemLineAlignment?: Enum.ItemLineAlignment;
}

export const List = forwardRef<UIListLayout, ListProps>(({
    children,
    padding = 0,
    axis = "horizontal",
    sortOrder,
    wraps,
    horizontalAlignment,
    horizontalFlex,
    verticalAlignment,
    verticalFlex,
    itemLineAlignment,
}, ref) => (
    <uilistlayout
    ref={ref}
    FillDirection={axis === "horizontal" ? Enum.FillDirection.Horizontal : Enum.FillDirection.Vertical}
    Padding={toUDim(padding ?? 0)}
    HorizontalAlignment={horizontalAlignment}
    HorizontalFlex={horizontalFlex}
    VerticalAlignment={verticalAlignment}
    VerticalFlex={verticalFlex}
    SortOrder={sortOrder}
    Wraps={wraps}
    ItemLineAlignment={itemLineAlignment}
    children={children}
    />
));