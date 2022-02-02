import mongoose from 'mongoose';

export interface UserStateDocument extends mongoose.Document {
  state: string;
  userId: string;
  username: string;
  channelId: string;
  channelName: string;
  createdAt: Date;
  updatedAt: Date;
}

const userStateSchema = new mongoose.Schema({
    state: {
        type: Array,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    },
    channelId: {
        type: String,
        required: true
    },
    channelName: {
        type: String,
        required: true
    },
}, { timestamps: true });

const UserState = mongoose.model<UserStateDocument>("UserState", userStateSchema);
export default UserState;
