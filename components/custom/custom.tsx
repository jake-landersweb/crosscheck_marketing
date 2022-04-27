import Content from "../misc/content"
import ImageWrapper from "../misc/image"

const Custom = () => {
    return <>
        <Content props={{
            title: "Customize Your Experience",
            description: <>You have full control over the look and functionality of your app. Crosscheck&apos;s powerful custom field system allows you to add any fields to teams, seasons, events, and all users to add any functionality that is missing from the base app. In addition to a theme color, background color, and logo uploads, make this experience truly yours.</>,
            content: <div className="md:flex md:space-x-8">
                <ImageWrapper props={{
                    url: "/assets/custom_3.png",
                    alt: "Crosscheck Sports custom fields and logo customization",
                    className: "xs:max-w-[650px]"
                }} />
            </div>,
            reverse: false
        }} />
    </>
}

export default Custom