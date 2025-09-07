'use client';
import Image from "next/image";

const SigninButton = () => {
    return (
        <>
        <Image
            src="/user_logged_img.png"
            alt="Sign in User"
            width={36}
            height={36}
            className="rounded-full border border-white"
        />
        </>
    );
}

export default SigninButton;