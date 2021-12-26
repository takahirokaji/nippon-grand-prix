import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseInit from "./firebaseInit";
import { userExist, createNewAccount, setUserState } from "./useFirestore";

export const useAuth = () => {
  const loginWithGoogle = async () => {
    const auth = getAuth(firebaseInit);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    // .then((result) => {
    //   console.log("run");
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   const user = result;
    //   userExist(user.uid).then(async (exist) => {
    //     if (exist === true) {
    //       setUserState(user.uid);
    //     } else if (exist === false) {
    //       await createNewAccount(user.uid, user.displayName, user.photoURL);
    //       setUserState(user.uid);
    //     } else {
    //       throw console.error("unexpected error");
    //     }
    //   });
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.email;
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    // });
  };

  const stateCheck = () => {
    const auth = getAuth(firebaseInit);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await userExist(user.uid).then(async (exist) => {
          if (exist === true) {
            setUserState(user.uid);
          } else if (exist === false) {
            await createNewAccount(user.uid, user.displayName, user.photoURL);
            setUserState(user.uid);
          } else {
            throw console.error("unexpected error");
          }
        });
        const router = useRouter();
        router.push("/about");
      } else {
        console.log("error");
      }
    });
    // getRedirectResult(auth)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access Google APIs.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;

    //     // The signed-in user info.
    //     const user = result.user;
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
  };

  return {
    loginWithGoogle,
    stateCheck,
  };
};
