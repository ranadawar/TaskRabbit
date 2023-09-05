//login
const handleLogin = (values) => {
  setLoading(true);
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      Alert.alert("Success", "User logged in successfully");
      setLoading(false);
      // ...
    })
    .catch((error) => {
      setLoading(false);
      const errorMessage = error.message;
      Alert.alert("Error", errorMessage);
    });
};

const handleSignUp = (values) => {
  setLoading(true);
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(db, "users", user.uid), {
        name: values.name,
        email: values.email,
        uid: user.uid,
        joined: moment().format("MMMM Do YYYY, h:mm:ss a"),
        isAdmin: false,
        isVerified: false,
      }).then(() => {
        Alert.alert("Account Created Successfully");
        const userData = {
          email: values.email,
          name: values.name,
          isAdmin: false,
          isVerified: false,
          joined: moment().format("MMMM Do YYYY, h:mm:ss a"),
        };
        AsyncStorage.setItem("user", JSON.stringify(userData));
        setLoading(false);
      });
    })
    .catch((error) => {
      Alert.alert("Error", error.message);
      setLoading(false);
    });
};
