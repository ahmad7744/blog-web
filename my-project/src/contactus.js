import React from 'react'

const contactus = () => {
  return (
    
    <div className="container mx-auto md:py-32 py-8 sm:py-16 max-w-7xl">
            <div className="xl:flex lg:flex">
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full">
                    <form id="contact" className="bg-white py-5 px-8">
                        <h1 className="xl:text-4xl text-2xl text-gray-800 font-extrabold mb-8">Send Us A Message</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-full sm:w-1/2 mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder className="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 xl:w-11/12" rows={5} id="message" defaultValue={""} />
                            </div>
                            <button className="focus:outline-none bg-indigo-700 mb-1 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="xl:w-2/5 lg:w-2/5 py-16 flex items-center">
                    <div className="w-5/6 mx-auto">
                        <p className="text-base text-gray-600 tracking-wide font-normal">
                        The Olympus Mall, 1st floor, F-11 Markaz <br />
                            Islamabad.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between mt-6 mb-3">
                            <div className="flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={3} y={5} width={18} height={14} rx={2} />
                                        <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                </div>
                                <a className="pl-2 text-gray-600 text-sm font-normal"  href='mailto:contact@website.com'>contact@website.com</a>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                        <path d="M15 7a2 2 0 0 1 2 2" />
                                        <path d="M15 3a6 6 0 0 1 6 6" />
                                    </svg>
                                </div>
                                
                                <a className="pl-2 text-gray-600 text-sm font-normal" href='tel:0927 6277 28525'>0927 6277 28525</a>
                            </div>
                        </div>
                        <iframe
                            className="w-full rounded shadow-lg"
                            src="https://maps.google.com/maps?q=The Olympus Mall, F-11 Markaz F 11 Markaz F-11, Islamabad, Pakistan&t=&z=10&ie=UTF8&iwloc=&output=embed"
                            width={425}
                            height={250}
                            style={{
                                border: 0,
                            }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default contactus


            
      
