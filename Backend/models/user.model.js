import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        sparse: true 
    },
    fullName: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
    coverImage: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    // Password for local login (not required for Google/GitHub users)
    password: {
        type: String,
        required: function () {
            return !this.googleId && !this.githubId; // only required if no OAuth
        }
    },

    // OAuth fields
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true
    },

    provider: {
        type: String,
        enum: ["local", "google", "github"],
        default: "local"
    },

    bio: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: ""
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    // Relations
    content: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }],
    canva: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CanvasImage'
    }],
    savedNotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
});

const User = mongoose.model("User", UserSchema);
export default User;
