"use client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "../ui/button";
import Image from "next/image";
import { signUserWithGoogle } from "@/actions/googleUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function SignInWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [uid, setUid] = useState("");
  const [saveUserId, setSaveUserId] = useState<boolean>(false);
  const { push } = useRouter();

  useEffect(() => {
    if (saveUserId && uid) {
      localStorage.setItem("et_uid", uid.toString());
      push("/");
    }
  }, [saveUserId, uid]);

  const signInUser = async () => {
    try {
      const signin = await signInWithPopup(auth, provider);
      //@ts-ignore
      const user: any = signin.user.reloadUserInfo;
      const userId = await signUserWithGoogle({
        email: user.email,
        name: user.displayName,
        profile: user.photoUrl,
      });

      if (userId?.uid) {
        setSaveUserId(true);
        setUid(userId.uid);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      className="bg-transparent text-black hover:bg-black/5 border flex gap-1 w-full"
      onClick={() => signInUser()}
    >
      <Image
        src={"/assets/googleIcon.png"}
        alt="google icon"
        width={50}
        height={50}
        className="h-4 w-4 object-contain"
      />
      <p>Continue in with Google</p>
    </Button>
  );
}

export default SignInWithGoogle;
