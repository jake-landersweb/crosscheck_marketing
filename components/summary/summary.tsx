import SumItem from "./sum_item"
import { IoStatsChart, IoPeople, IoChatboxOutline, IoSettingsOutline } from 'react-icons/io5';

const Summary = () => {
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            <SumItem props={{
                title: "Attendance Tracking",
                anchor: "Attendance",
                image: <>
                    <IoPeople size="50px" />
                </>,
                description: "GOING, NOT GOING, or UNDECIDED, along with a note and custom defined fields, get all the information you need on a user's check in."
            }} />
            <SumItem props={{
                title: "Stats",
                anchor: "Stats",
                image: <>
                    <IoStatsChart size="50px" />
                </>,
                description: "Goals, assists, and penalty minutes to everything in between, keep track of the stats important to your team from season to season."
            }} />
            <SumItem props={{
                title: "Chat",
                anchor: "Chat",
                image: <>
                    <IoChatboxOutline size="50px" />
                </>,
                description: "With different chat rooms on each season, keep in touch with your team in a centralized location connected to the schedule."
            }} />
            <SumItem props={{
                title: "Powerful Customization",
                anchor: "Custom",
                image: <>
                    <IoSettingsOutline size="50px" />
                </>,
                description: "The powerful custom field engine allows you to add any functionality to the app you see missing. This in addition to icon, color, and brightness."
            }} />
        </div>
    </>
}

export default Summary