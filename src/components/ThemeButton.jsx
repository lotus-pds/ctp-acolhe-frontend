import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'


export function ThemeButton() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 outline-none">
        <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572131325366343/light-theme-icon.png?width=480&height=480"
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 outline-0">
          <div className="w-[60px] max-w-md  flex flex-center justify-center overflow-hidden rounded bg-white text-sm leading-6 shadow-lg">
            <div className="">
                <a href="#"
                className='p-1'
                >
                  <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572131107250197/dark-theme-icon.png?width=480&height=480"
                    className='h-[40px]'
                  />
              
                </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}