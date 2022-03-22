import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import Pagination from 'docs/src/modules/components/Pagination';

// const styles = {
//     slide: {
//         padding: 15,
//         minHeight: 100,
//         color: '#fff',
//     },
//     slide1: {
//         userDrag: none,
//         webkitUserDrag: none,
//         user- Delect: none,
//     mozUserSelect: none,
//     webkitUserSelect: none,
//     msUserSelect: none,
// },
//     slide2: {
//         backgroundColor: '#B3DC4A',
//     },
//     slide3: {
//         backgroundColor: '#6AC0FF',
//     },
// };

const Initial = () => {
    const [index, setIndex] = useState(0)

    const changeIndex = (idx: number) => {
        setIndex(idx);
    }

    return <>
        <div className="lg:flex items-center justify-between space-y-8 lg:space-y-0">
            <div className="lg:flex place-items-center">
                <h2 className="text-5xl font-semibold">
                    We give you the tools needed for your sports team to succeed
                </h2>
                {/* <div className="w-full"></div> */}
            </div>
            <div className="grid place-items-center">
                <div className="hidden md:flex container relative">
                    <div className="flex space-x-[70px]">
                        <div className="w-[300px] scale-95">
                            <img src="/assets/chat.png" />
                        </div>
                        <div className="w-[300px] scale-95">
                            <img src="/assets/detail.png" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-[185px]">
                        <div className="w-[300px]">
                            <img src="/assets/schedule.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
                {/* <div className="w-[300px]">
                    <img src="/assets/chat.png" />
                </div>
                <div className="w-[300px]">
                    <img src="/assets/detail.png" />
                </div> */}
                <div className="w-[300px]">
                    <img src="/assets/schedule.png" />
                </div>
            </div>
            {/* <div className="w-min">
                <SwipeableViews enableMouseEvents>
                    <div className="w-[300px]">
                        <img src="/assets/chat.png" draggable="false" />
                    </div>
                    <div className="w-[300px]">
                        <img src="/assets/detail.png" draggable="false" />
                    </div>
                    <div className="w-[300px]">
                        <img src="/assets/schedule.png" draggable="false" />
                    </div>
                </SwipeableViews></div> */}
        </div>
    </>
}

export default Initial