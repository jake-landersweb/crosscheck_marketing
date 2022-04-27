import React, { useState } from 'react';
import AppButtons from './misc/app_buttons';
import ImageWrapper from './misc/image';
import ProductItem from './misc/product_item';
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
        <div className="lg:flex items-center justify-center">
            <div className="lg:max-w-[50%]">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white text-opacity-70">
                    Your Customizable team management solution
                </h1>
                <div className="flex items-center justify-center p-4">
                    <AppButtons />
                </div>
            </div>
            <div className="grid place-items-center">
                <ImageWrapper props={{
                    url: "/assets/xcheck_3.png",
                    alt: "Crosscheck Sports App screenshots, schedule, chat, and event details",
                    className: "xs:max-w-[650px]"
                }} />
            </div>
        </div>
    </>
}

export default Initial