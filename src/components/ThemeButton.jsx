import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useTheme } from '../hooks/useTheme'


export function ThemeButton() {

  const {setTheme} = useTheme()

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 outline-none">
        <img src="https://media.discordapp.net/attachments/1077345452694970438/1099694692410605698/Component_25.png"
          className='sm:h-[40px] h-[25px]'
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 outline-0">
          <div className="sm:w-[60px] w-[40px] max-w-md  flex flex-center justify-center overflow-hidden rounded bg-white dark:bg-gray-800 text-sm leading-6 shadow-lg
            dark:shadow-xl
          ">
            <div className="flex flex-col items-center">
                <button 
                  className='p-1'
                  onClick={() => setTheme("dark")}
                >
                  <img src="https://media.discordapp.net/attachments/1077345452694970438/1099694692653879366/Component_24.png"
                    className='sm:h-[35px] h-[25px]'
                  />
                  
                </button>

                <button 
                  className='p-1'
                  onClick={() => setTheme("light")}
                >
                <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572131325366343/light-theme-icon.png?width=480&height=480"
                  className='sm:h-[45px] h-[30px]'/>
                </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}