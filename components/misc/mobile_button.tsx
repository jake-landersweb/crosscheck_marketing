const imageLinks = {
    ios: '/assets/app_store.svg',
    android: '/assets/play_store.svg',
};

type MobileStoreButtonProps = {
    store: string,
    url: string,
    height?: number,
    width?: number
}

const MobileStoreButton = ({ props }: { props: MobileStoreButtonProps }) => {

    return (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={`${imageLinks[props.store as keyof typeof imageLinks]}`} height={`${props.height ?? 60}px`} width={`${props.width ?? 180}px`} />
        </a>
    );
}

export default MobileStoreButton;