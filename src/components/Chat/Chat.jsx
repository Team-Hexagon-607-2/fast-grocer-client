import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FcMms } from "react-icons/fc";
import io from "socket.io-client";
import { StateContext } from "../../contexts/AuthProvider";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const endPoint = "http://localhost:4001/";

let socket, selectedChatCompare;

const Chat = () => {
  const { user } = useContext(StateContext);
  console.log(user);
  const [showChat, setShowChat] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);

  //   const handleOpenChat = () => {
  //     setShowChat(true);
  //   };

  //   const handleCloseChat = () => {
  //     setShowChat(false);
  //   };

  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const send = () => {
    socket.emit("message", { message, id });
    setMessage("");
  };

  console.log(messages);

  useEffect(() => {
    socket = io(endPoint);

    socket.on("setup", user);

    socket.on("connection", (user) => setSocketConnected(true));

    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.emit("join-chat", user?.uid);

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("disconnect", (user) => {
      console.log("user disconnected");
    });
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div className="dropdown dropdown-top dropdown-end">
      <label
        tabIndex={0}
        className="flex p-1 items-center justify-center gap-4 bg-rose-400"
      >
        <FcMms className="text-4xl" />
        <p>Live chat</p>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow z-50 bg-slate-300 rounded-box w-[350px] h-[450px]"
      >
        <div className="h-[10%] w-full bg-slate-800"></div>
        <div className="h-[80%] w-full bg-rose-100">
          <ScrollToBottom className="w-full h-full">
            {messages.map((item, i) => (
              <Message
                user={item.id === id ? "" : item.user}
                message={item.message}
                classs={item.id === id ? "right" : "left"}
              />
            ))}
          </ScrollToBottom>
        </div>
        <div className="h-[10%]  w-full items-center flex-row flex">
          <input
            onKeyUp={(event) => (event.key === "Enter" ? send() : null)}
            type="text"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            className="w-[300px] h-full"
          />
          <button onClick={send} className="">
            <img
              src="https://i.ibb.co/YN2hLsQ/sm-5b29c1e7b8dd3-removebg-preview.png"
              alt="Send"
              className="w-[50px]  bg-white"
            />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Chat;

{
  /* <div className="w-full">
<button
  className="flex py-2 px-4 rounded-sm items-center  text-white  text-xl bg-[#EF691E] justify-center gap-4"
  onClick={handleOpenChat}
>
  <FcMms className="" />
  <p>Live chat</p>
</button>
{showChat && (
  <div className="chat-container-background">
    <div className="chat-container">
      <h1>Chat</h1>
      <button onClick={handleCloseChat}>Close</button>
    </div>
  </div>
)}
</div> */
}
