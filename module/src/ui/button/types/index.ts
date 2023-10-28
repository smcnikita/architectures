import type { ButtonHTMLAttributes } from "vue";

export type TBaseButtonVariant = "primary" | "secondary";

interface IBaseAttrs extends ButtonHTMLAttributes {}

export interface IBaseInputProps {
  attrs?: IBaseAttrs;
  variant?: TBaseButtonVariant;
}
