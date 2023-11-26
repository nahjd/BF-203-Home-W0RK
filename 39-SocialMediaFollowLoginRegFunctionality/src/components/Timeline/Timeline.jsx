import React, { useState } from 'react';
import "./Timeline.css";
import Post from './Posts/Post';
import Suggestions from './Suggestions';
function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "aysun.hp_",
            postImage: "https://images.pexels.com/photos/887393/pexels-photo-887393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            likes: 1124,
            timestamp: "5h"
        },
        {
            user: "nahjd._",
            postImage: "https://images.pexels.com/photos/3732790/pexels-photo-3732790.jpeg?auto=compress&cs=tinysrgb&w=1600",
            likes: 1180,
            timestamp: "12h"
        },
        {
            user: "sa3ina",
            postImage: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            likes: 1400,
            timestamp: "2d"
        },
        {
            user: "taghhizadehh",
            postImage: "https://efsanekareler.com/upload/media/entries/2020-05/20/140-0-74f8775cc10b9afe7af5701c7d2ba346.jpg",
            likes: 1280,
            timestamp: "3d"
        },
        {
            user: "_.nazdi._",
            postImage: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            likes: 2500,
            timestamp: "5d"
        },
    ]);
    return (<div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map((post) => (
                    <Post
                        user={post.user} postImage={post.postImage}
                        likes={post.likes}
                        timestamp={post.timestamp}
                    />
                ))}

            </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
    );
}

export default Timeline;