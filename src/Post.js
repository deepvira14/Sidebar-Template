import React from 'react';
import "./css/Post.css";

const Post = () => {
    return ( 
        <div className="post">
            <div className="post__image">
                <img src="https://images.pexels.com/photos/1888883/pexels-photo-1888883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
            </div>
            <div className="post__card">
                <div className="image1">
                <img src="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>

                </div>
                <div className="image1">
                    <p style={{fontSize: "20px"}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nostrum error consequatur, optio modi reiciendis odio, aperiam quasi suscipit praesentium saepe voluptatibus expedita unde id sequi. Quis, vitae sunt! Sint?
                    </p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Post;