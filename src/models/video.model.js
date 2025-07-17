import mongoose, { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    videoFile:{
        type:String, //cloudinary url
        required: true,
    },
    thumbnail:{
        type:String, //cloudinary url
        required: true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    duration:{
        type:Number,//It will fetch from cloudinary
        required: true,
    },
    views:{
        type:Number,
        required: true,
        default: 0,
    },
    isPublished:{
        type:Boolean,
        default: true,
    },
}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate) //aggregation pipelines
export const Video = model("Video", videoSchema);
