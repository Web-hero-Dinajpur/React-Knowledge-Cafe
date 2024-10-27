import PropTypes from 'prop-types';
const Blog = ({ blog, HandleBookmarks }) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className=' w-full rounded' src={cover} alt=''/>
            <div className='flex justify-between items-center my-8'>
                <div className='flex'>
                    <img className='w-12 mr-6' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={HandleBookmarks}> <img className='w-6 ml-2' src="https://img.icons8.com/?size=32&id=26087&format=png" alt="" /> </button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p className='my-8'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;