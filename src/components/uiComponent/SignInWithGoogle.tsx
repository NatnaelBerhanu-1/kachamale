"use client";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { Button } from "../ui/button";
import Image from "next/image";
import { signUserWithGoogle } from "@/actions/googleUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function SignInWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    getRedirectResult(auth)
      .then((response) => {
        setLoading(true);
        //@ts-ignore
        const user = response?.user?.reloadUserInfo;
        signUserWithGoogle({
          email: user.email,
          name: user.displayName,
          profile: user.photoUrl,
        })
          .then((userId) => {
            if (userId?.uid) {
              localStorage.setItem("et_uid", userId?.uid.toString());
              push("/");
            }
            setLoading(false);
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const signInUser = async () => {
    signInWithRedirect(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
