import { useCallback, useEffect, useState } from 'react';

const getFallbackTheme = () => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
};

const getAutoThemeFromSunCycle = async () => {
  if (!navigator.geolocation) {
    return getFallbackTheme();
  }

  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: false,
        timeout: 6000,
        maximumAge: 600000
      });
    });

    const { latitude, longitude } = position.coords;
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`
    );
    const data = await response.json();

    if (!data?.results?.sunrise || !data?.results?.sunset) {
      return getFallbackTheme();
    }

    const now = new Date();
    const sunrise = new Date(data.results.sunrise);
    const sunset = new Date(data.results.sunset);
    const isNight = now < sunrise || now >= sunset;

    return isNight ? 'dark' : 'light';
  } catch {
    return getFallbackTheme();
  }
};

export const useTheme = () => {
  const [mode, setMode] = useState('auto');
  const [theme, setTheme] = useState(getFallbackTheme());

  useEffect(() => {
    let intervalId;
    let mounted = true;

    const applyAutoTheme = async () => {
      const nextTheme = await getAutoThemeFromSunCycle();
      if (mounted) {
        setTheme(nextTheme);
      }
    };

    if (mode === 'auto') {
      applyAutoTheme();
      intervalId = window.setInterval(applyAutoTheme, 10 * 60 * 1000);
    } else {
      setTheme(mode);
    }

    return () => {
      mounted = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [mode]);

  useEffect(() => {
    document.documentElement.classList.toggle('theme-dark', theme === 'dark');
    document.documentElement.classList.toggle('theme-light', theme === 'light');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    if (mode === 'auto') {
      setMode(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, [mode, theme]);

  return {
    theme,
    toggleTheme
  };
};
