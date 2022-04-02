import useLuminance from "./useLuminance";

function useTheme(): "dark" | "light" {
  const luminance = useLuminance();
  return luminance > 255 / 2 ? "light" : "dark";
}

export default useTheme;
