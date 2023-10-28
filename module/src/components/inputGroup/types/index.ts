import type { IBaseLabelProps } from "@/ui/label";
import type { TBaseInputVariant } from "@/ui/input";

export interface IBaseProps {
  laberAttrs?: IBaseLabelProps["attrs"];
  variant?: TBaseInputVariant;
}
