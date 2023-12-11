import { SVGProps } from 'react';

export interface SVGCustomProps extends SVGProps<SVGSVGElement> {
  $filled?: boolean;
  disabled?: boolean;
}
