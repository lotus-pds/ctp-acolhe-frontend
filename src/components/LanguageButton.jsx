import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next';


export function LanguageButton() {

  const {i18n} = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 leading-6 outline-none">    
          <img src="https://media.discordapp.net/attachments/1077345452694970438/1099061954154344478/change-language_1.png?width=456&height=480"
            className='h-[45px]'
          />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-[60px] max-w-md  flex flex-center justify-center overflow-hidden rounded bg-white dark:bg-gray-800  text-sm leading-6 shadow-lg 
            dark:shadow-xl
          ">
            <div className="
              flex flex-col
            ">
              <button
                onClick={() => changeLanguage("pt")}
                className='p-1'
              >

              <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572128636801034/brazil-colorfull.png"
                className='h-[45px]'
              />
              </button>

              <button 
                onClick={() => changeLanguage("en")}
                className='p-1'
              >
                <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572128435490928/england-colorfull.png"
                  className='h-[45px]'
                />
            
              </button> 
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}