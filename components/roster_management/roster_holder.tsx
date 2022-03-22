import RosterList from "./roster_list"

type RosterHolderProps = {
    emails: string[]
    names: string[]
    title: string
}

const RosterHolder = ({ props }: { props: RosterHolderProps }) => {
    return <div className="bg-bgdk-800 bg-opacity-50 p-4 rounded-xl">
        <RosterList props={{
            emails: props.emails,
            names: props.names
        }} />
        <div className="grid place-items-center pt-2">
            <h3 className="font-bold text-xl">
                {props.title}
            </h3>
        </div>
    </div>
}

export default RosterHolder