import Content from "../misc/content"

const Stats = () => {
    return <>
        <Content props={{
            title: "Stat Engine",
            description: <>
                The stats you track on games all collect to season and team levels. this gives a powerful way to view your players stats across seasons and all time on the team.
            </>,
            content: <div className="w-[300px]">
                <img src="/assets/stats.png" />
            </div>,
            reverse: false
        }} />
    </>
}

export default Stats