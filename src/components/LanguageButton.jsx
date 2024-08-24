import { useTranslation } from 'react-i18next';
import { GnButton } from './common/button/GnButton';
import { useEffect, useState } from 'react';

const getFlag = (lng) => {
  switch (lng) {
    case 'pt': return (
      <img
        src="https://github.com/lotus-pds/ctp-acolhe-assets/blob/main/img/brazil-flag.png?raw=true"
        className='sm:h-[45px] h-[25px]'
      />
    );

    case 'en': return (
      <img
        src="https://github.com/lotus-pds/ctp-acolhe-assets/blob/main/img/usa-flag.png?raw=true"
        className='sm:h-[45px] h-[25px]'
      />
    );
  }
}

export function LanguageButton() {

  const [lng, setLng] = useState();

  useEffect(() => {
    setLng(localStorage.getItem('i18nextLng'));
  }, [])

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    let newLng = lng == 'pt' ? 'en' : 'pt';

    i18n.changeLanguage(newLng);
    setLng(newLng);
  }

  return (
    <GnButton
      onClick={() => changeLanguage()}
      className='p-1 hover:bg-gray-400 w-[60px] h-[50px] flex justify-center items-center'
      color='NONE'
    >
      {getFlag(lng)}
    </GnButton>
  );
}