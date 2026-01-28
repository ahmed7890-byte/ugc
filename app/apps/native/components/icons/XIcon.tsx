import Svg, { Path } from "react-native-svg";

interface XIconProps {
  size?: number;
  color?: string;
}

/**
 * X (formerly Twitter) logo icon
 * Matches the style of Ionicons for consistency
 */
export function XIcon({ size = 24, color = "#000000" }: XIconProps) {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <Path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill={color}
      />
    </Svg>
  );
}

export default XIcon;
