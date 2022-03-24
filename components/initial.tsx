import React, { useState } from 'react';
import ImageWrapper from './misc/image';
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
                <h2 className="text-4xl md:text-5xl font-semibold">
                    The ultamite lightweight sports team management app
                </h2>
            </div>
            <div className="grid place-items-center">
                <div className="hidden md:flex container relative">
                    <div className="flex space-x-[70px]">
                        <ImageWrapper props={{
                            url: '/assets/chat.png',
                            alt: "iOS chat page",
                            className: "scale-95"
                        }} />
                        <ImageWrapper props={{
                            url: '/assets/detail.png',
                            alt: "iOS detail page",
                            className: "scale-95"
                        }} />
                    </div>
                    <div className="absolute top-0 left-[185px]">
                        <ImageWrapper props={{
                            url: '/assets/schedule.png',
                            alt: "iOS schedule"
                        }} />
                    </div>
                </div>
            </div>
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
                <ImageWrapper props={{
                    url: '/assets/schedule.png',
                    alt: "iOS schedule"
                }} />
            </div>
        </div>
    </>
}

export default Initial