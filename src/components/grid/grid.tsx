import React, { Binding, forwardRef } from "@rbxts/react";

export interface GridProps extends React.PropsWithChildren {
    cellPadding?: UDim2 | Binding<UDim2>;
    cellSize?: UDim2 | Binding<UDim2>;
    fillDirection?: Enum.FillDirection;
    fillDirectionMaxCells?: number | Binding<number>;
    sortOrder?: Enum.SortOrder;
    startCorner?: Enum.StartCorner;
    horizontalAlignment?: Enum.HorizontalAlignment;
    verticalAlignment?: Enum.VerticalAlignment;
}

export const Grid = forwardRef<UIGridLayout, GridProps>(({
    children,
    cellPadding,
    cellSize,
    fillDirection,
    fillDirectionMaxCells,
    sortOrder,
    startCorner,
    horizontalAlignment,
    verticalAlignment,
}, ref) => (
    <uigridlayout
    ref={ref}
    CellPadding={cellPadding}
    CellSize={cellSize}
    FillDirection={fillDirection}
    FillDirectionMaxCells={fillDirectionMaxCells}
    SortOrder={sortOrder}
    StartCorner={startCorner}
    HorizontalAlignment={horizontalAlignment}
    VerticalAlignment={verticalAlignment}
    children={children}
    />
))