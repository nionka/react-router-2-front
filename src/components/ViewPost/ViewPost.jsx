import IdContext from "../../context/IdContext";
import {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import ava from '../../img/ava.jpg';

function ViewPost() {
    const create = useContext(IdContext);
    const [clickDel, setClickDel] = useState(false);
    const [clickEdit, setClickEdit] = useState(false);

    const onEdit = () => {
        setClickEdit(true)
    }

    const onDelete = () => {

        try {
            fetch(`${process.env.REACT_APP_URL}/posts/${create.id}`, {method: 'DELETE'})
              .then(response => response)
              .then(result => setClickDel(true))
              .catch(err => console.log(err))
          } catch (err) {
            console.log(err)
          }
    }
        
    return (
        <div className="list">
            <div className="item">
                <header>
                    <div className="img-box">
                        <img src={ava} alt="person"></img>
                    </div>
                    <div className="user">Ivan Petrov</div>
                </header>
                <div className="content">{create.content}</div>
                <div className="control">
                    <button className="btn" onClick={onEdit}>Изменить</button>
                    <button className="btn delete" onClick={onDelete}>Удалить</button>
                    {clickDel ? <Redirect to="/" /> : null}
                    {clickEdit ? <Redirect to="/posts/edit" /> : null}
                </div>
            </div>
        </div>
    )
}

export default ViewPost