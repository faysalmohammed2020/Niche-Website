import { useEffect, useState } from "react";
import initializefirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";

initializefirebase();
const provider = new GoogleAuthProvider();
const useFirebase = () =>{
    const[user,setUser] =useState({});
    const[error,setError] = useState('');
    const[isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    
    const registerUser = (email, password,name ,history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                console.log(newUser);
                setUser(newUser);
                // save user to the database
                saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/Dashboard');
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
            const destination = location?.state?.from || '/Dashboard';
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


const saveUser = (email,displayName) =>{
    const user = {email,displayName};
    fetch('http://localhost:5000/users',{
        method : 'POST',
        headers :{
            'content-type' : 'application/json',
        },
        body: JSON.stringify(user)
    })
}


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