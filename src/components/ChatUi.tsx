import { Dialog, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/outline"
import { useState } from "react"
import FAQItem from "./FAQItem"

const ChatUi = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Transition show={isOpen} >
                <Dialog onClose={(e) => setIsOpen(false)}>
                    <Dialog.Backdrop onClick={() => setIsOpen(false)}>

                    </Dialog.Backdrop>
                    <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-50"
                        className={"float-right"}
                    >
                        <Dialog.Panel>
                            <div className=" absolute top-0 left-0 bottom-0 sm:top-auto sm:left-auto sm:right-5 sm:bottom-7 h-full w-full sm:h-[621px] sm:w-[400px]  z-10 bg-white sm:rounded-[18px] shadow-shadow1">
                                <Transition.Child
                                    enter=" delay-[300ms] ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-400"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className=" bg-gradient-to-r px-3 pl-12 py-5  from-orange-500 to-orange-600 w-full h-[257px] sm:rounded-t-[18px] text-white">
                                        <Transition.Child
                                            enter="delay-[500ms] ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <h4 className="text-[30px] leading-[39px] font-bold">IRIS</h4>
                                            <h5 className="text-[22px] leading-[29px] font-bold">Hello 👋🏼</h5>
                                            <p className=" text-lg leading-[23px] font-medium">I am Iris, a Virtual Assistant
                                                <br />
                                                How may I help you?
                                            </p>
                                        </Transition.Child>
                                        <Transition.Child
                                            enter="delay-[500ms] ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            className={'absolute  left-10 mt-4 z-20'}
                                        >
                                            <div className="  shadow-black15 rounded-full h-16 w-16 p-4 bg-gradient-to-b from-orange-500 to-orange-600">
                                                <img src="/img/robot.svg" alt="robot image" className=" w-9 h-9" />
                                            </div>
                                        </Transition.Child>
                                    </div>
                                </Transition.Child>

                                <div className=" h-[calc(100%-205px)] ">
                                    <Transition.Child

                                        enter="delay-[800ms] ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        className={"h-full"}
                                    >
                                        <div className=" flex flex-col justify-between sm:justify-start h-full relative -mt-[75px] pt-[50px] px-[25px] pb-[21px]  mx-[13px] mb-[30px]  bg-white rounded-lg shadow-black25 border-[1px] border-gray-200">



                                            <div className="flex flex-col">
                                                <h6 className="flex items-center gap-2 text-dark">Frequently Asked Questions
                                                    <img src="/img/punctuation.svg" alt="punctuation" className=" w-5 h-5" />
                                                </h6>

                                                <div className="flex flex-col gap-2 mb-7 mt-[11px]">

                                                    <FAQItem className="delay-[1200ms]" question="Can I redeem my FB before the original term?"></FAQItem>
                                                    <FAQItem className="delay-[1500ms]" question="How do I pay my Credit card bill?"></FAQItem>
                                                    <FAQItem className="delay-[1800ms]" question="How can I get my Account Statement?"></FAQItem>
                                                    <FAQItem className="delay-[2100ms]" question="What is the tenure of Fixed Deposit?"></FAQItem>
                                                </div>
                                            </div>

                                            <Transition.Child

                                                enter="delay-[2400ms] ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                className={"mt-auto"}
                                            >
                                                <button className="  outline-none items-center gap-1 mx-auto rounded-full border-[1px] border-gray-400 shadow-black05 py-[13px] px-[40px] flex flex-row justify-center">
                                                    <img src="/img/chat.svg" className=" w-[14px] h-[14px]" alt="" />
                                                    <p className="text-dark text-sm font-medium">Start a New Conversation</p>
                                                </button>
                                            </Transition.Child>

                                        </div>
                                    </Transition.Child>
                                </div>

                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>

            <div onClick={(e) => setIsOpen(true)} className="  absolute right-8 bottom-10 p-4 rounded-full bg-orange-400 shadow-lg shadow-orange-700">
                <img src="/img/robot.svg" alt="robot" className="w-6 h-6"></img>
            </div>
        </div>
    )
}

export default ChatUi


