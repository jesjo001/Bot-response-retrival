import mongoose from 'mongoose';

export interface HobbyDocument extends mongoose.Document {
    hobbies:  Array<string>;
    userId: string;
    username: string;
    channelId: string;
    channelName: string;
    createdAt: Date;
    updatedAt: Date;
}

const hobbiesSchema = new mongoose.Schema({
    hobbies: {
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

const Hobby = mongoose.model<HobbyDocument>("Hobbie", hobbiesSchema);
export default Hobby;
