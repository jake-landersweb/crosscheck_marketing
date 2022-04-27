import Content from "../misc/content"
import ImageWrapper from "../misc/image"

const Stats = () => {
    return <>
        <Content props={{
            title: "Stat Engine",
            description: <>
                The stats you track on games all collect to season and team levels. this gives a powerful way to view your players stats across seasons and all time on the team.
            </>,
            content:
                <ImageWrapper props={{
                    url: '/assets/stats.png',
                    alt: "iOS stat page",
                    className: "xs:max-w-[350px]"
                }} />,
            reverse: false
        }} />
    </>
}

export default Stats