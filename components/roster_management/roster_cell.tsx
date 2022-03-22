import Avatar from "./avatar"

type RosterCellProps = {
    email: string
    name: string
}

const RosterCell = ({ props }: { props: RosterCellProps }) => {
    return <>
        <div key={`${props.email}`} className="bg-bgdk-800 flex rounded-md p-2 flex-co w-full">
            <Avatar props={{
                email: props.email,
                name: props.name
            }} />
            <div className="flex justify-center items-center ml-4 font-semibold">
                <span>{props.name}</span>
            </div>
        </div>
    </>
}

export default RosterCell