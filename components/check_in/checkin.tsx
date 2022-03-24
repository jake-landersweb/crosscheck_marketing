import Content from "../misc/content"
import ImageWrapper from "../misc/image"

const CheckIn = () => {
    return <>
        <Content props={{
            title: "Attendance Tracking",
            description: <>
                With our powerful attendance tracker know the who, when, where and why for your games and events. In addition to subs and custom fields, make sure you know the who, what, and why for your games and events.
            </>,
            content: <div className="md:flex md:space-x-8">
                <ImageWrapper props={{
                    url: '/assets/checkin.png',
                    alt: "iOS checkin model"
                }} />
                <ImageWrapper props={{
                    url: '/assets/statuses.png',
                    alt: "iOS available statuses"
                }} />
            </div>,
            reverse: true
        }} />
    </>
}

export default CheckIn