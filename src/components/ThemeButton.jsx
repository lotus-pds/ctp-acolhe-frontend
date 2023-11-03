import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useTheme } from '../hooks/useTheme'
import { GnButton } from './common/button/GnButton'

const getFlag = (theme) => {
  switch (theme) {
    case 'light': return (
      <img
        src="https://media.discordapp.net/attachments/1077345452694970438/1097572131325366343/light-theme-icon.png?width=480&height=480"
        className='sm:h-[45px] h-[30px]' />
    );

    case 'dark': return (
      <img
        src="https://media.discordapp.net/attachments/1077345452694970438/1099694692653879366/Component_24.png"
        className='sm:h-[35px] h-[25px]'
      />

    );
  }
}


export function ThemeButton() {
  const { setTheme } = useTheme();

  const [theme, innerSetTheme] = useState();

  useEffect(() => {
    innerSetTheme(localStorage.getItem('theme'));
  }, [])

  const changeTheme = () => {
    let newTheme = theme == 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    innerSetTheme(newTheme);
  }

  return (
    <GnButton
      onClick={() => changeTheme()}
      className='p-1 hover:bg-gray-400 w-[60px] h-[50px] flex justify-center items-center'
      color='NONE'
    >
      {getFlag(theme)}
    </GnButton>
  );
}