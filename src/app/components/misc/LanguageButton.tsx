import Image from "next/image";

const LanguageButton = () => {

    return (
        <>
            <Image
            src={"globe.svg"}
            alt="Change display language"
            width={36}
            height={36}
            className="rounded-full"
            />
        </>
    )
}

export default LanguageButton;