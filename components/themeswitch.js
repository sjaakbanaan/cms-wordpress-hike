import Switch from 'react-switch'
import { NoSsr } from '@material-ui/core';
import useDarkMode from 'use-dark-mode'
import { FiMoon, FiSun } from 'react-icons/fi'

const MODE_TRANSITION_CLASS_NAME = 'dark-mode-transition'
const MODE_TRANSITION_DURATION = 0

function setDarkModeTransition() {
  document.documentElement.classList.add(MODE_TRANSITION_CLASS_NAME)
  setTimeout(
    () => document.documentElement.classList.remove(MODE_TRANSITION_CLASS_NAME),
    MODE_TRANSITION_DURATION
  )
}

export default function ThemeSwitch() {
  const { value: hasActiveDarkMode, toggle: activateDarkMode } = useDarkMode()

  const toggleDarkMode = () => {
    setDarkModeTransition()
    activateDarkMode()
  }

  return (
    <NoSsr>
      <Switch
        onChange={toggleDarkMode}
        checked={hasActiveDarkMode}
        checkedIcon={<FiMoon className="inline-block mx-2 my-1" />}
        uncheckedIcon={<FiSun className="inline-block mx-2 my-1" />}
        onColor="#1a202c"
        offColor="#f7fafc"
        onHandleColor="#f7fafc"
        offHandleColor="#1a202c"
        className="text-gray-900 dark:text-gray-100 border border-gray-400 dark:border-gray-800 shadow-none"
      />
    </NoSsr>
  )
}