import React from "@rbxts/react";

export interface LayerProps extends React.PropsWithChildren {
    displayOrder?: number;
    ignoreGuiInset?: boolean;
    zIndexBehavior?: Enum.ZIndexBehavior;
    resetOnSpawn?: boolean;
}

export const Layer = React.forwardRef<ScreenGui, LayerProps>(
    (
        {
            children,
            displayOrder = 0,
            ignoreGuiInset = true,
            zIndexBehavior = Enum.ZIndexBehavior.Sibling,
            resetOnSpawn = false,
        },
        ref,
    ) => (
        <screengui
            DisplayOrder={displayOrder}
            IgnoreGuiInset={ignoreGuiInset}
            ZIndexBehavior={zIndexBehavior}
            ResetOnSpawn={resetOnSpawn}
            ref={ref}
            children={children}
        />
    ),
);
