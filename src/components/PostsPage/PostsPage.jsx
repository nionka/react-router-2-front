import useFetch from '../../hooks/useFetch';
import {Link} from 'react-router-dom';
import PostItem from '../PostItem/PostItem';

function PostsPage() {
  const { data, error } = useFetch(`${process.env.REACT_APP_URL}/posts`);

  return (
    <ul className="list">
			<li className="item item-btn">
				<Link to="/posts/new"><button className="btn">Создать пост</button></Link>
			</li>
				{error && <li className="error">Что-то пошло не так!!!</li>}
				{data && data.map(post => <PostItem key={post.id} post={post} />)}  
    </ul>

        
  )
}

export default PostsPage