import Content from "../misc/content"

const Custom = () => {
    return <>
        <Content props={{
            title: "Customize Your Experience",
            description: <>With options such as a light or dark background, custom accent colors, and logo uploading, customize the app experience for your users to tailor match your team.</>,
            content: <div className="md:flex md:space-x-8">
                <div className="w-[300px]">
                    <img src="/assets/custom_2.png" />
                </div>
                <div className="hidden md:flex w-[300px]">
                    <img src="/assets/custom_1.png" />
                </div>
            </div>,
            reverse: false
        }} />
    </>
}

export default Custom