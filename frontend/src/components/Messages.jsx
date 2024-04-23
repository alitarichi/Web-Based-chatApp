import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </div>
  );
};

export default Messages;
