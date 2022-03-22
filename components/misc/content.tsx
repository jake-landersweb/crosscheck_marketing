type ContentProps = {
    title: String
    description: React.ReactNode
    content: React.ReactNode
    reverse: boolean
}

const Content = ({ props }: { props: ContentProps }) => {
    return <>
        <div className="hidden lg:flex">
            <div className="grid grid-cols-2 place-items-center space-x-8">
                {props.reverse ? <></> : props.content}
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold grid place-items-center text-txt-300">
                        {props.title}
                    </h2>
                    <h3 className="font-bold text-2xl">
                        {props.description}
                    </h3>
                </div>
                <div className="md:hidden flex">
                    {props.content}
                </div>
                {props.reverse ? props.content : <></>}
            </div>
        </div>
        <div className="lg:hidden">
            <div className="space-y-4">
                <div className="space-y-8">
                    <div className="grid place-items-center">
                        <h2 className="text-4xl font-bold grid place-items-center text-txt-300">
                            {props.title}
                        </h2>
                    </div>
                    <div className="grid place-items-center">
                        <h3 className="font-bold text-2xl">
                            {props.description}
                        </h3>
                    </div>
                </div>
                <div className="grid place-items-center">
                    {props.content}
                </div>
            </div>
        </div>
    </>
}

export default Content