import axios from "axios";
import React, { createContext, useState, useCallback } from "react";

export const AppContext = createContext();

const GlobalContext = ({ children }) => {
  let [subjectId, setSubjectId] = useState(62);
  let [javaValue, setJavaValue] = useState("");
  let [javaOutput, setJavaOutput] = useState("");

  const onchangeJava = useCallback(value => {
    setJavaValue(value);
  }, []);
  const handleJavaOutput = async () => {
    setJavaOutput(null);
    let payload = {
      source_code: javaValue,
      language_id: subjectId,
      stdin: "",
    };
    let { data } = await axios.post(
      "http://37.61.213.213:2358/submissions?base64_encoded=false&wait=false",
      payload,
      {
        headers: {
          "X-Auth-Token": "f6583e60-b13b-4228-b554-2eb332ca64e7",
        },
      }
    );

    console.log(data.token, "token");
    if (data.token) {
      setTimeout(async () => {
        let res = await axios.get(
          `http://37.61.213.213:2358/submissions/${data.token}?base64_encoded=false&wait=false`
        );
        console.log(res.data, "response");
        setJavaOutput(res.data.stdout);
      }, 5000);
    }
  };
  return (
    <AppContext.Provider
      value={{
        subjectId,
        setSubjectId,
        handleJavaOutput,
        javaValue,
        setJavaValue,
        javaOutput,
        setJavaOutput,
        onchangeJava,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
