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
          <img src="https://media.discordapp.net/attachments/1077345452694970438/1107078467738157147/Component_28.png?width=480&height=480"
            className='sm:h-[45px] h-[25px]'
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
          <div className="sm:w-[60px] w-[40px] max-w-md  flex flex-center justify-center overflow-hidden rounded bg-white dark:bg-gray-800  text-sm leading-6 shadow-lg 
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
                className='sm:h-[45px] h-[25px]'
              />
              </button>

              <button 
                onClick={() => changeLanguage("en")}
                className='p-1'
              >
                <img src="https://media.discordapp.net/attachments/1077345452694970438/1107078468014977034/estados-unidos.png?width=480&height=480"
                  className='sm:h-[45px] h-[25px]'
                />
            
              </button> 
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}