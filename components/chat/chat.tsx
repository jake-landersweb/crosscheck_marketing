import Content from "../misc/content"
import ImageWrapper from "../misc/image"

const Chat = () => {
    return <>
        <Content props={{
            title: "In-App Chat",
            description: <>A built in localized chat service in app allows your team to stay connected from season to season. </>,
            content: <>
                <ImageWrapper props={{
                    url: '/assets/chat.png',
                    alt: "iOS chat page"
                }} />
            </>,
            reverse: true
        }} />
    </>
}

export default Chat