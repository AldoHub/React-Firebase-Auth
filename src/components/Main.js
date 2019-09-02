import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/config";
import img from "../2669626.svg";


const Main = () => {

    const [posts, setPosts] = useState([]);
    
    const getPosts = async() => {
        let _posts = [];
        const postsArray = await firebase.getPosts().catch( err => {
            console.log(err);
        });

        postsArray.forEach(doc => {
           _posts.push({id: doc.id, data: doc.data()});
        });
        setPosts(_posts);
    }


    useEffect(() => {
        getPosts();
    }, []);


    return(
        <React.Fragment>
           <header>
             <div>
              <h1>React Hooks <br/> Firebase</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus congue dignissim. Vestibulum et ex nisl. Vestibulum eu luctus nisi. Fusce sit amet vehicula nisl. </p>
             </div>
             <img src={img} />
           </header>
           <div className="posts">
            {posts.map(post => {
                return (
                    <div className="post" key={post.id}>
                        <p>{post.data.title}</p>
                        
                        <Link to={"post/" + post.id}>
                            <div style={{backgroundImage: "url(" + post.data.cover + ")" }} />
                        </Link>
                    </div>
                )
            })}

           </div>
        </React.Fragment>
    )
}

export default Main;