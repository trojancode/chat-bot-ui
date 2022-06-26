import { Transition } from "@headlessui/react"


const FAQItem = ({ question = "Ask me?",className="" }) => {

  const Dot = () => (
    <div className=" bg-orange-400/20 w-[14px] h-[14px] p-[3px] rounded-full">
      <div className="bg-orange-400/80 rounded-full h-[8px] w-[8px]"></div>
    </div>
  )

  return (
    <Transition.Child
      enter={`${className} ease-out duration-300`}
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as="div"
    >
      <div className=" text-dark shadow-black08 items-center gap-2 text-xs leading-[21px] rounded-lg border-[1px] border-gray-200 py-[14px] px-[5px] flex flex-row ">
        <Dot></Dot>
        {question}
      </div>
    </Transition.Child>

  )
}

export default FAQItem