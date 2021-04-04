import {useContext, useState} from 'react';
import IdContext from '../../context/IdContext';
import {Link, Redirect} from 'react-router-dom';

function PostEdit() {
    const create = useContext(IdContext);
    const [value, setValue] = useState(create.content);
    const [click, setClick] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!value.trim()) return

        const body = {id: create.id, content: value};
        
        try {
            fetch(`${process.env.REACT_APP_URL}/posts`, { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                .then(response => response)
                .then(result => {
                    setValue('');
                    setClick(true)
            })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }   
    }

    return (
        <div className="newPost">
            <div className="newPost__box">
                <div>Редактировать пост
                    <Link to={`/posts/${create.id}`}><button className="btn-close">X</button></Link>
                </div>
                <form className="form" onSubmit={onSubmit}>
                <textarea className="textarea" value={value} onChange={onChange}></textarea>
                <button type="submit" className="btn">Сохранить
                {click ? <Redirect to="/" /> : null}
                </button>
                </form>
            </div> 
        </div>
    )
}

export default PostEdit