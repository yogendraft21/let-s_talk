import ChatArea from "@/components/chatarea";
import ChatUserList from "@/components/chatusers";


const Conversation = () => {
  return (
    <div
      className="flex h-screen border-t-2"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <ChatUserList />
      <ChatArea />
    </div>
  );
};

export default Conversation;
