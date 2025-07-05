import React, { type Binding, forwardRef } from "@rbxts/react";

/**
 * Props for the Group component.
 * @property position - Sets the Position of the frame (UDim2 or Binding<UDim2>).
 * @property size - Sets the Size of the frame (UDim2 or Binding<UDim2>). Defaults to UDim2.fromScale(1, 1).
 * @property clipsDescendants - If true, clips any descendants that overflow the frame.
 * @property children - Elements to render inside the frame.
 */
export interface GroupProps extends React.PropsWithChildren {
    position?: UDim2 | Binding<UDim2>;
    size?: UDim2 | Binding<UDim2>;
    clipsDescendants?: boolean | Binding<boolean>;
}

/**
 * Group is a lightweight wrapper component for a Roblox <frame> element.
 * Forwards ref to the underlying Frame instance.
 */
export const Group = forwardRef<Frame, GroupProps>(
    ({ children, position, size, clipsDescendants }: GroupProps, ref) => {
        return (
            <frame
                ref={ref}
                Position={position}
                Size={size ?? UDim2.fromScale(1, 1)}
                ClipsDescendants={clipsDescendants}
                children={children}
            />
        );
    },
);
