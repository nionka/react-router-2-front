import ava from '../../img/ava.jpg';
import {useContext} from 'react';
import IdContext from '../../context/IdContext';
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

function PostItem({ post }) {
	const create = useContext(IdContext)

	const onClick = () => {
		create.id = post.id
		create.content = post.content
		create.created = post.created
	}

    return (
		<Link to={`/posts/${post.id}`}>
			<li className="item" onClick={onClick}>
				<header>
					<div className="img-box">
						<img src={ava} alt="person"></img>
					</div>
					<div className="user">
						<p>Ivan Petrov</p>
						<p className="date">{moment(new Date(post.created), 'YYYYMMDDhhmm').fromNow()}</p>
					</div>
				</header>
				<div className="content">{post.content}</div>
			</li>
	  	</Link>
    )
}

export default PostItem