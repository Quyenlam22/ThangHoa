import { useContext } from 'react';
import { Button } from 'antd';
import { ThemeContext } from '../../Context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Tối' : '☀️ Sáng'}
    </Button>
  );
}

export default ThemeToggle;