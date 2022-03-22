import Content from "../misc/content"

const Chat = () => {
    return <>
        <Content props={{
            title: "In-App Chat",
            description: <>A built in localized chat service in app allows your team to stay connected from season to season. </>,
            content: <>
                <div className="w-[300px]">
                    <img src="/assets/chat.png" />
                </div>
            </>,
            reverse: true
        }} />
    </>
}

export default Chat