import React, { Component } from 'react';
import Post from './Post';

export default class Blog extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                posts: [
                    {
                        title: "wow, what a blog",
                        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta, laborum iusto, veniam praesentium placeat, atque numquam ad commodi voluptate hic illo? Consectetur, veniam blanditiis expedita iste numquam labore accusantium?",
                        comments: ['I love this blog', 'some other comment', 'wowza']
                    },
                    {
                        title: "post 2",
                        body: ';alskdfj;lsakfj;lakdsfj;lakdsjf;lakdsjf;lksadjfa;lsdjf;laksdjf;laskjf;sa',
                        comments: ['wow', 'such blog', 'woohoo']
                    },
                    {
                        title: 'Post 3333',
                        body: 'akfdjalkfdjagdjdsjgasgdajs;ldajdskaj;sa;lkgdjkdsaj;lgalkgdsj;slgdaj;kdlkj;kgjlakjlkkj;lskjjaglkj;s;lkajgsald;kgsakdg',
                        comments: ['yeet', 'nice', 'ytes']

                    }
                ]
             }
        }
        render() {
            const posts = this.state.posts.map(postObj => (
                <Post postInfo={postObj} key={postObj.title}
                />
            ))
            return ( 
                <div classname="blog">
                    {/*blogposts here */}
                    Blog
                    {posts}
                </div>
             );
        }
    }
     
    
