import { useTheme } from "@heroui/use-theme";
import {Switch} from "@heroui/react";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeMode = (flag: boolean) => {
    setTheme(flag ? 'dark' : 'light');
  }

  return (
    <Switch
      defaultSelected={!!(theme === 'dark')}
      color="success"
      size="md"
      endContent={<MoonIcon />}
      startContent={<SunIcon />}
      onChange={(e) => handleThemeMode(e.target.checked)}
    />
  )
};
