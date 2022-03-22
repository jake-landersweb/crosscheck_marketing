import Content from "../misc/content"

const CheckIn = () => {
    return <>
        <Content props={{
            title: "Attendance Tracking",
            description: <>
                With our powerful <span className="text-primary">attendance tracker</span> know the who, when, where and why for your <span className="text-primary">games</span> and <span className="text-primary">events</span>. In addition to subs and custom fields, make sure you know the who, what, and why for your games and events.
            </>,
            content: <div className="md:flex md:space-x-8">
                <div className="w-[300px]">
                    <img src="/assets/checkin.png" />
                </div>
                <div className="hidden md:flex w-[300px]">
                    <img src="/assets/statuses.png" />
                </div>
            </div>,
            reverse: true
        }} />
    </>
}

export default CheckIn