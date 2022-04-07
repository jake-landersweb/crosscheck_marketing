import MobileStoreButton from "../misc/mobile_button"


const Join = () => {
    return <>
        <div className="space-y-12">
            <div className="grid grid-cols-1 place-items-center gap-4">
                <h2 className="text-4xl font-bold text-txt-300">
                    Ready to Begin Building Your Team? <a href="https://teams.crosschecksports.com/Account/Register" target="_blank" rel="noreferrer" className="underline text-primary hover:opacity-50 transition-opacity">Register Now!</a>
                </h2>
                <div className="grid gris-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                    <MobileStoreButton props={{
                        store: "ios",
                        url: "https://apps.apple.com/pk/app/crosscheck-hockey/id1585600361",
                        height: 67,
                        width: undefined
                    }} />
                    <MobileStoreButton props={{
                        store: "android",
                        url: "https://play.google.com/store/apps/details?id=com.landersweb.pnflutter",
                        height: 100,
                        width: undefined,
                    }} />
                </div>
            </div>
            <div className="grid grid-cols-1 place-items-center gap-4">
                <h2 className="text-4xl font-bold text-txt-300">
                    Looking for a More Custom Solution?
                </h2>
                <h3 className="text-lg font-medium">
                    <a href="https://landersweb.com" target="_blank" rel="noreferrer" className="underline hover:opacity-50">Talk with our team</a> about building out a custom website and app for your team extending the Crosscheck Sports team engine.
                </h3>
            </div>
        </div>
    </>
}

export default Join