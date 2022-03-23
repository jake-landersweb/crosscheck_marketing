import { useEffect, useState } from "react"
import Content from "../misc/content"
import RosterHolder from "./roster_holder"

const Roster = () => {
    const [showTeam, setShowTeam] = useState(false)
    const [showSeason, setShowSeason] = useState(false)
    const [showEvent, setShowEvent] = useState(false)

    const emails = [
        "ared@crosschecksports.com",
        "jake@landersweb.com",
        "jake@pucknorris.com",
        "jakerlanders@gmail.com",
        "timmer@crosschecksports.com",
        "ttodd@crosschecksports.com",
        "mbro@crosschecksports.com",
        // "rickp@crosschecksports.com",
        // "jsbarnes@crosschecksports.com"
    ]

    const names = [
        "Aaron Redd",
        "Virginia Hughes",
        "Michelle Gray",
        "Jake Landers",
        "Tim Murphy",
        "Todd Thomas",
        "Melissa Brown",
        // "Richard Peters",
        // "Jason Barnes",
    ]

    useEffect(() => {
        setTimeout(function () {
            setShowTeam(true)
        }, 1000);
        setTimeout(function () {
            setShowSeason(true)
        }, 2000);
        setTimeout(function () {
            setShowEvent(true)
        }, 3000);
    })

    return <>
        <Content props={{
            title: "Explicate Roster Control",
            description: <>
                The powerful roster engine allows portable rosters between your seasons and games. Select and choose from a team roster to design your season and game rosters.
            </>,
            content: <div className="lg:flex lg:space-x-10 items-center justify-between space-y-4 lg:space-y-0">
                <div className={`${showTeam ? "opacity-100" : "opacity-0"} grow transition-opacity duration-1000`}>
                    <RosterHolder props={{
                        emails: emails,
                        names: names,
                        title: "Team"
                    }} />
                </div>
                <div className={`${showSeason ? "opacity-100" : "opacity-0"} grow transition-opacity duration-1000`}>
                    <RosterHolder props={{
                        emails: emails.filter((element) => element != "mbro@crosschecksports.com" && element != "ttodd@crosschecksports.com"),
                        names: names.filter((element) => element != "Melissa Brown" && element != "Todd Thomas"),
                        title: "Season"
                    }} />
                </div>
                <div className={`${showEvent ? "opacity-100" : "opacity-0"} grow transition-opacity duration-1000`}>
                    <RosterHolder props={{
                        emails: emails.filter((element) => element != "mbro@crosschecksports.com" && element != "ttodd@crosschecksports.com" && element != "jake@pucknorris.com"),
                        names: names.filter((element) => element != "Melissa Brown" && element != "Todd Thomas" && element != "Michelle Gray"),
                        title: "Game"
                    }} />
                </div>
            </div>,
            reverse: false,
        }} />
    </>
}

export default Roster