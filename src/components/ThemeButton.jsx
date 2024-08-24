import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useTheme } from '../hooks/useTheme'
import { GnButton } from './common/button/GnButton'

const getFlag = (theme) => {
  switch (theme) {
    case 'light': return (
      <img
        src="https://github.com/lotus-pds/ctp-acolhe-assets/blob/main/img/light-theme-icon.png?raw=true"
        className='sm:h-[45px] h-[30px]' />
    );

    case 'dark': return (
      <img
        src="https://github.com/lotus-pds/ctp-acolhe-assets/blob/main/img/dark-theme-icon.png?raw=true"
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