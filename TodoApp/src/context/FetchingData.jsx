import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
const Fetching = createContext();

const FetchingProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [user, setUser] = useState(null);
  const navigator = useNavigate();
  const login = async (email, password) => {
    setIsFetching(true);

    await axios
      .get(`https://localhost:7247/api/User/login/${email}/${password}`)
      .then((res) => {
        setIsFetching(false);

        // make todo id equal to index of array
        

        setUser(res.data);
        localStorage.setItem("TodoUser", JSON.stringify(res.data));
        navigator("/");
      });
    useEffect(() => {
      localStorage.setItem("TodoUser", JSON.stringify(user));
    }, [user]);
  };
  return (
    <Fetching.Provider
      value={{ isFetching, setIsFetching, login, user, setUser }}
    >
      {children}
    </Fetching.Provider>
  );
};

export function useFetching() {
  return useContext(Fetching);
}
export default FetchingProvider;
