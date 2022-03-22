const Join = () => {
    return <>
        <div className="space-y-12">
            <div className="grid grid-cols-1 place-items-center gap-4">
                <h2 className="text-4xl font-bold text-txt-300">
                    Ready to Begin Building Your Team? Register Now!
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <a href="https://teams.crosschecksports.com">
                        <div className="grid place-items-center rounded-full border-primary border-2 hover:opacity-50 px-4 py-2">
                            Login
                        </div>
                    </a>
                    <a href="https://teams.crosschecksports.com">
                        <div className="grid place-items-center rounded-full bg-primary hover:opacity-50 px-4 py-2">
                            Create Account
                        </div>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 place-items-center gap-4">
                <h2 className="text-4xl font-bold text-txt-300">
                    Looking for a More Custom Solution?
                </h2>
                <h3 className="text-lg font-medium">
                    <a href="https://landersweb.com" target="_blank" className="underline hover:opacity-50">Talk with our team</a> about building out a custom website and app for your team extending the Crosscheck Sports team engine.
                </h3>
            </div>
        </div>
    </>
}

export default Join