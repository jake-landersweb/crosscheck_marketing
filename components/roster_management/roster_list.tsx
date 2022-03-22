import RosterCell from "./roster_cell"

type RosterListProps = {
    emails: string[]
    names: string[]
}

const RosterList = ({ props }: { props: RosterListProps }) => {
    const listItems = []

    for (var i = 0; i < props.emails.length; i++) {
        listItems.push(
            <div key={`${props.emails[i]}`} className="pb-2">
                <RosterCell props={{
                    email: props.emails[i],
                    name: props.names[i],
                }} />
            </div>
        )
    }

    return <>
        <div className="">
            {listItems}
        </div>
    </>
}

export default RosterList