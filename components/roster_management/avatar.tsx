import React, { useEffect, useMemo } from "react";
import randomColor from "../../functions/random_color"

type AvatarProps = {
    email: string
    name: string
}

const Avatar = ({ props }: { props: AvatarProps }) => {
    // use memo to avoid recalculation on every re-render
    const color = randomColor(props.email);

    return <div className="">
        <div key={`${props.email}`} style={{ backgroundColor: color }} className="circle w-[50px] h-[50px] rounded-full flex place-items-center place-content-center text-2xl font-bold">{props.name.substring(0, 1).toUpperCase()}</div>
    </div>
}

export default Avatar
