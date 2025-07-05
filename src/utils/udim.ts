import { Binding } from "@rbxts/react";

export function toUDim(value: Binding<number> | Binding<UDim> | number | UDim): UDim | Binding<UDim> {
    if (typeIs(value, "UDim") || typeIs(value, "RBXScriptConnection")) return value as Binding<UDim>;
    if (typeIs(value, "number")) return new UDim(0, value);
    return (value as Binding<number>).map((val) => new UDim(0, val));
}
