import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS:", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji
        />
      ))}
      {loading ? (
        <span className="LOADING loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
