type SumItemProps = {
    title: string
    anchor: string
    image: React.ReactNode
    description: string
}

const SumItem = ({ props }: { props: SumItemProps }) => {
    return <>
        <a href={`#${props.anchor}`} className="group">
            <div className="flex items-center space-x-4 p-2 group-hover:opacity-50 transition-all">
                <div className="text-primary rounded-full bg-primary bg-opacity-30 p-4">
                    {props.image}
                </div>
                <div className="">
                    <h2 className="text-2xl font-semibold">
                        {props.title}
                    </h2>
                    <h3 className="text-lg">
                        {props.description}
                    </h3>
                </div>
            </div>
        </a>
    </>
}

export default SumItem