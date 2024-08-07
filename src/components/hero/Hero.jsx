import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import rightArrow from "../../assets/arrow-right-s-line.svg"
import ActivityGraph from './ActivityGraph.jsx';
import StarRating from './StartRating.jsx'



function hero() {

    const [open, setOpen] = useState(false)

    const Menus = [
        { title: "Dashboard 1", src: "home-4-fill" },
        { title: "Dashboard 2", src: "bar-chart-box-line" },
        { title: "Dashboard 3", src: "home-4-line" },
        { title: "Dashboard 4", src: "wallet-3-line" },
        { title: "Dashboard 5", src: "shopping-bag-line" },
    ]

    const Totals = [
        { title: "Total Orders", src: "shopping-basket-2-line",logo:"", value: "75", profit: "4%", bgColor: "bg-blue-300" },
        { title: "Total Delivered", src: "shopping-bag-line",logo:"", value: "80", profit: "6%", bgColor: "bg-green-300" },
        { title: "Total Cancelled", src: "shopping-bag-line",logo:"", value: "25", profit: "3%", bgColor: "bg-red-300" },
        { title: "Total Revenue", src: "money-dollar-box-line",logo:"", value: "$5k", profit: "9%", bgColor: "bg-pink-300" },
    ]

    const percentage = 70;

    const Activitys = [
        { title: "Goals", src: "crosshair-2-line", bgColor: "bg-orange-300" },
        { title: "Popular Dishes", src: "burger", bgColor: "bg-purple-300" },
        { title: "Menus", src: "money-dollar-box-line", bgColor: "bg-green-300" },
    ]

    const CustomerDetails = [
        { name: "wade waren", src: "user-line", order: "12345678", amount: "124.00", status: "Deliverd", bgColor: "bg-green-400" },
        { name: "wade waren", src: "user-line", order: "12345679", amount: "124.00", status: "Deliverd", bgColor: "bg-green-400" },
        { name: "wade waren", src: "user-line", order: "12345680", amount: "24.00", status: "Cancelled", bgColor: "bg-red-400" },
        { name: "wade waren", src: "user-line", order: "12345681", amount: "124.00", status: "Pending", bgColor: "bg-yellow-200" },
        { name: "wade waren", src: "user-line", order: "12345682", amount: "124.00", status: "Deliverd", bgColor: "bg-green-400" },
        { name: "wade waren", src: "user-line", order: "12345683", amount: "124.00", status: "Pending", bgColor: "bg-yellow-200" },

    ]

    const feedbacks = [
        {
            name: "jenny wilson", src: "user-line",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem, porro dignissimos nesciunt quod odit officia illo doloribus repellat debitis ab architecto corrupti aliquam sint sed dolores provident consequuntur illum"
        },
        {
            name: "jenny wilson", src: "user-line",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem, porro dignissimos nesciunt quod odit officia illo doloribus repellat debitis ab architecto corrupti aliquam sint sed dolores provident consequuntur illum"
        },
        {
            name: "jenny wilson", src: "user-line",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem, porro dignissimos nesciunt quod odit officia illo doloribus repellat debitis ab architecto corrupti aliquam sint sed dolores provident consequuntur illum"
        },
        {
            name: "jenny wilson", src: "user-line",
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem, porro dignissimos nesciunt quod odit officia illo doloribus repellat debitis ab architecto corrupti aliquam sint sed dolores provident consequuntur illum"
        },
    ]

    return (
        <div className='flex text-white'>
            <div className={`hidden sm:block ${open ? "w-72 sm:72" : "w-20 sm:20"} duration-300  bg-1f2029 relative`}>
                <img className={`hidden sm:block  cursor-pointer duration-300 absolute -right-3 top-5 h-7  border-2 border-gray-600 bg-white rounded-full ${open && 'rotate-180'} `}
                    src="../src/assets/skip-right-line.svg" alt=""
                    onClick={() => setOpen(!open)} />
                <ul className='pt-7 sm:pt-14'>
                    {Menus.map((menu, index) => (

                        <li key={index} className='text-white text-sm flex hover:border-l-4 border-blue-400  gap-x-4 ps-2 md:ps-7 py-4 items-center md:py-4'>
                            <img className='h-8 w-8 p-1 bg-gray-400 hover:bg-blue-400 rounded-full ' src={`../src/assets/${menu.src}.svg`} alt="" />
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='bg-black p-4 w-full '>
                <h1 className='text-white font-bold p-2 '>Dashboard</h1>
                <div className='flex flex-col gap-4 sm:flex-row  h-auto pb-5'>
                    <div className=' rounded-md sm:w-2/3'>
                        <ul className='flex sm:gap-2'>
                            {Totals.map((total, index) => (
                                <li key={index} className="w-1/4 bg-1f2029 rounded-md p-4" >
                                    <img className={`h-6 sm:h-8 md:10 ${total.bgColor} p-1 rounded-md`} src={`../src/assets/${total.src}.svg`} alt="logo" />
                                    <span className='text-xs md:text-sm  text-white whitespace-nowrap'>{total.title}</span>
                                    <div className='flex justify-between items-center mt:2 md:mt-3'>
                                        <div>
                                        <span className='text-xl md:text-2xl text-white'>{total.value}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <div>
                                                <img className='h-8' src={'../src/assets/arrow-up-s-fill.svg'} alt="" />
                                            </div>
                                            <div>
                                            <span className='text-green-500'>{total.profit} </span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='p-3 bg-1f2029 w-full sm:w-1/3 flex rounded-md items-center justify-between py-3 px-3'>
                        <div className='flex-col '>
                            <h3 className='text-xs sm:text-base text-white mb-2'>New profile</h3>
                            <div className=''>
                                <div><span className='text-3xl text-white '>$6759.25</span></div>
                                <div className='flex items-center '>
                                    <div>
                                        <img className='h-8' src={'../src/assets/arrow-down-s-fill.svg'} alt="" />
                                    </div>
                                    <div><span className=' mt-2 text-red-500'>3%</span></div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <CircularProgressbar className='h-24 w-24' value={percentage} text={`${percentage}%`} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 sm:flex-row  h-auto pb-5'>
                    <div className='bg-1f2029 w-full rounded-md sm:w-2/3 p-4'>
                        <div>
                            <ActivityGraph />
                        </div>
                    </div>
                    <div className='bg-1f2029 rounded-md w-full sm:w-1/3'>
                        <ul>
                            {Activitys.map((act, index) => (
                                <li className='flex justify-between items-center py-5 px-4' key={index}>
                                    <div className='flex items-center'>
                                        <img className={`${act.bgColor} p-3 h-14 w-14 me-4 rounded-full`} src={`../src/assets/${act.src}.svg`} alt="l" />
                                        <h2>{act.title}</h2>
                                    </div>
                                    <div>
                                        <img className='bg-gray-400 h-7 w-7 rounded-full' src={rightArrow} alt="" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-4 sm:flex-row  h-auto pb-5'>
                    <div className='bg-1f2029 w-full rounded-md sm:w-2/3 p-4'>
                        <div className=''>
                            <h3>Recent Orders</h3>
                        </div>
                        <div className='flex justify-between py-2 ps-9 border-b border-dotted border-gray-500'>
                            <h3 >Customer</h3>
                            <h3>Order no</h3>
                            <h3>Amount</h3>
                            <h3>Status</h3>
                        </div>
                        <ul>
                            {CustomerDetails.map((cus, index) => (
                                <li className='flex items-center justify-between border-b border-dotted py-2 border-gray-500' key={index}>
                                    <div className='flex items-center gap-1'>
                                        <img className='bg-orange-300 rounded-full h-9 w-9 ' src={`../src/assets/${cus.src}.svg`} alt="" />
                                        <h3 className='me-2 '>{cus.name}</h3>
                                    </div>
                                    <div>
                                        <h3>{cus.order}</h3>
                                    </div>
                                    <div>
                                        <h3>{cus.amount}</h3>
                                    </div>
                                    <div>
                                        <h3 className={`${cus.bgColor} rounded-xl px-2 text-black`}>{cus.status}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-1f2029 rounded-md w-full px-4 py-4 sm:w-1/3'>
                        <h3>Customer's feedback</h3>
                        <ul className='h-80 overflow-y-auto'>
                            {feedbacks.map((fed, index) => (
                                <li className='mt-4 border-b border-dashed' key={index}>
                                    <div className='flex items-center gap-2'>
                                        <img className='bg-red-400 rounded-full h-8 w-8' src={`../src/assets/${fed.src}.svg`} alt="" />
                                        <h3>{fed.name}</h3>
                                    </div>
                                    <StarRating />
                                    <p className='text-xs mt-2 mb-3'>{fed.feedback}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero


// HEX:

// #1f2029

// HEX:

// #141316

// HEX:

// #7396fc

// HEX:

// #7292ff