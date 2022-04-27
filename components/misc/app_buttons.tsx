import ImageWrapper from "./image"
import MobileStoreButton from "./mobile_button"

const AppButtons = () => {
    return <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            <MobileStoreButton props={{
                store: "ios",
                url: "https://apps.apple.com/pk/app/crosscheck-hockey/id1585600361",
            }} />
            <MobileStoreButton props={{
                store: "android",
                url: "https://play.google.com/store/apps/details?id=com.landersweb.pnflutter",
            }} />
            <a href="https://teams.crosschecksports.com" target="_blank" rel="noopener noreferrer" className="bg-black border-gray-400 border-[1px] rounded-lg md:ml-4">
                <div className="flex space-x-2 items-center pt-[6px]">
                    <ImageWrapper props={{
                        url: "/assets/xcheck_blue.svg",
                        alt: "Crosscheck Logo",
                        className: "max-w-[50px] pl-[6px]"
                    }} />
                    <div className="space-y-[-5px] text-white">
                        <p className="text-sm font-normal">Visit on the</p>
                        <p className="text-2xl font-semibold">Website</p>
                    </div>
                </div>
            </a>
        </div>
    </>
}

export default AppButtons