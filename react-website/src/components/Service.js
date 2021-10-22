import React from "react";
import Card from './Card'
import Image1 from "../images/slider1.jpg"
import Image2 from "../images/slider2.jpg"
import Image3 from "../images/slider3.jpg"
import Image4 from "../images/slider11.jpg"


const posts = [
    {
        'title':'django',
        image: Image1
        // 'image':'https://picsum.photos/200/300'
    },
    {
        'title':'Python',
        image: Image2
        // 'image':'https://picsum.photos/200/300'
    },
    {
        'title':'React',
        image: Image3
        // 'image':'https://picsum.photos/200/300'
    },
    {
        'title':'Node.js',
        image: Image1
        // 'image':'https://picsum.photos/200/300'
    },
    {
        'title':'React',
        image: Image2
        // 'image':'https://picsum.photos/200/300'
    },
    {
        'title':'Javascript',
        image: Image4
        // 'image':'https://picsum.photos/200/300'
    },
    {
        'title':'Php',
        image: Image1
        // 'image':'https://picsum.photos/200/300'
    },
]


const Service = () =>{
    return(
        <>
        <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                posts.map((post, index)=>{
                                    return <Card
                                        key = {index}
                                        title={post.title}
                                        image = {post.image}
                                    />
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
                        
        </>
    )
}

export default Service;