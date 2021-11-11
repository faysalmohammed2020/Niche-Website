import { useEffect, useState } from "react";
import initializefirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

initializefirebase();
const provider = new GoogleAuthProvider();
const useFirebase = () =>{
    const[user,setUser] =useState({});
    const[error,setError] = useState('');
    const[isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    
    const registerUser = (email, password ,history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setError('');
              history.replace('/');
          })
          .catch((error) => {
              setError(error.message);
              console.log(error);
          })
          .finally(() => setIsLoading(false));
  }



  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
}







    const signInWithGoogle = () =>{
        setIsLoading(true);
        
        return signInWithPopup(auth, provider)
        .then(result =>setUser(result.user))
        .finally(()=> setIsLoading(false))
          
        
    }
    const logOut = () =>{
        setIsLoading(true);
       signOut(auth)
       .then(()=>{
           setUser({});
       })
       .finally(()=> setIsLoading(false))
    }

    useEffect(()=>{
       const unSubscribed = onAuthStateChanged(auth, (user) =>{
         if(user){
             console.log('Inside State Change',user)
             setUser(user);
         }
         else{
             setUser({});
         }
         setIsLoading(false);
        });
        return  () => unSubscribed;
    },[])
    return{
        user,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut,
        isLoading,
        error
    }
}

export default useFirebase;