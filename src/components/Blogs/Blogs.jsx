import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [counts, setCounts] = useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data => setCounts(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;