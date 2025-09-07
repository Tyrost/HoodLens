'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = ({ path, size = 120, cursor = true }: { path: string, size?: number, cursor?: boolean }) => {
    const router = useRouter()

    const handleBackHome = () => {
        router.push("/")
    }

    return (
        <div className={cursor ? "flex items-center space-x-4 cursor-pointer" : "flex items-center space-x-4"}>
            <Image src={path} alt="Hood Lens Logo" width={size} height={size} onClick={cursor? handleBackHome: undefined}/>
        </div>
    );
    };

export default Logo;
