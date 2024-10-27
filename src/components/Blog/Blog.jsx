import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
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
                <div>
                    <span>{reading_time} min read</span>
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