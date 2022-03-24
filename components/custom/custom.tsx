import Content from "../misc/content"
import ImageWrapper from "../misc/image"

const Custom = () => {
    return <>
        <Content props={{
            title: "Customize Your Experience",
            description: <>With options such as a light or dark background, custom accent colors, and logo uploading, customize the app experience for your users to tailor match your team.</>,
            content: <div className="md:flex md:space-x-8">
                <ImageWrapper props={{
                    url: '/assets/custom_2.png',
                    alt: "iOS custom color"
                }} />
                <ImageWrapper props={{
                    url: '/assets/custom_1.png',
                    alt: "iOS dark mode"
                }} />
            </div>,
            reverse: false
        }} />
    </>
}

export default Custom