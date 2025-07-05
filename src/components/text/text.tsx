import React, { forwardRef, type Binding } from "@rbxts/react";
import { FrameProps } from "../frame";

export interface TextProps<T extends Instance = TextLabel> extends FrameProps<T> {
    font?: Font;
    text?: string | Binding<string>;
    textColor?: Color3 | Binding<Color3>;
    textSize?: number | Binding<number>;
    textTransparency?: number | Binding<number>;
    textWrapped?: boolean | Binding<boolean>;
    textXAlignment?: Enum.TextXAlignment;
    textYAlignment?: Enum.TextYAlignment;
    textTruncate?: Enum.TextTruncate;
    textScaled?: boolean | Binding<boolean>;
    textHeight?: number | Binding<number>;
    textAutoResize?: "X" | "Y" | "XY";
    richText?: boolean | Binding<boolean>;
    maxVisibleGraphemes?: number | Binding<number>;
}

export const Text = forwardRef<TextLabel, TextProps<TextLabel>>(
    (
        {
            children,
            font,
            text,
            textSize,
            textTransparency,
            textWrapped,
            textXAlignment,
            textYAlignment,
            textTruncate,
            textScaled,
            textHeight,
            richText,
            maxVisibleGraphemes,
            size,
            textAutoResize,
            position,
            anchorPoint,
            backgroundColor,
            backgroundTransparency,
            clipsDescendants,
            visible,
            zIndex,
            layoutOrder,
            change,
            event,
        },
        ref,
    ) => (
        <textlabel
            ref={ref}
            Font={Enum.Font.Unknown}
            FontFace={font ?? Font.fromName("Inter", Enum.FontWeight.Regular) /* Inter */}
            Text={text}
            TextSize={textSize ?? 16}
            children={children}
            TextTransparency={textTransparency}
            TextWrapped={textWrapped}
            TextXAlignment={textXAlignment}
            TextYAlignment={textYAlignment}
            TextTruncate={textTruncate}
            TextScaled={textScaled}
            LineHeight={textHeight}
            RichText={richText}
            MaxVisibleGraphemes={maxVisibleGraphemes}
            Size={size}
            AutomaticSize={textAutoResize}
            Position={position}
            AnchorPoint={anchorPoint}
            BackgroundColor3={backgroundColor}
            BackgroundTransparency={backgroundTransparency ?? 1}
            ClipsDescendants={clipsDescendants}
            Visible={visible}
            ZIndex={zIndex}
            LayoutOrder={layoutOrder}
            Change={change}
            Event={event}
        />
    ),
);
