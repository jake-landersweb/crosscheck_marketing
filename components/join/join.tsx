import AppButtons from "../misc/app_buttons"

const Join = () => {
    return <>
        <div className="space-y-12">
            <div className="grid grid-cols-1 place-items-center gap-4">
                <h2 className="text-4xl font-bold text-txt-300">
                    Ready to Begin Building Your Team?
                </h2>
                <div className="flex items-center justify-center">
                    <AppButtons />
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