import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    //createdAt, updatedAt => message.createdAt: 15:00
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
