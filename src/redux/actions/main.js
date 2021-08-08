import axios from 'axios';

export const put_data = (key, data) => ({
    type: "PUT_DATA",
    key,
    data
})
const ls = window.localStorage
let token = ls.token;
const config = {
    headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' }
};

export const get_item = () => {
    return (dispatch) => {      
      axios
        .get('/posts')
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data('posts', resp.data))
        })
        .catch((err) => {                       
        })
        .then(() => {
          
        });
    };
};


export const post_login = (data, history) => {
    return (dispatch) => {      
      axios
        .post('/login', data)
        .then((resp) => {                        
            console.log(resp.data)
            ls.setItem('token', resp.data.token);
            ls.setItem('user_data', resp.data.payload[0]);
            dispatch(put_data('user_data', resp.data))
            history.push('/')
        })
        .catch((err) => {                       
        })
        .then(() => {
          
        });
    };
};
export const post_register = (data) => {
    return (dispatch) => {      
        const payload = {
            fullname: 'angga',
            username: data.username,
            password: data.password,
            workStatus: "Teacher"
        }
      axios
        .post('/register', payload)
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data('posts', resp.data))
        })
        .catch((err) => {                       
        })
        .then(() => {
          
        });
    };
};

export const get_research = () => {
    return (dispatch) => {                      
        axios
            .get('/file/research', config)
            .then((resp) => {                        
                console.log(resp.data)
                dispatch(put_data('list_research', resp.data.result))
            })
            .catch((err) => {      
                console.log(err)                 
            })
            .then(() => {
            
            });
    };
};


export const post_research = (formValue) => {
    return (dispatch) => {      
        let data = new FormData();
        let token = window.localStorage.token;
        console.log(formValue.dragger[0])
        data.append('name', formValue.title);
        data.append('author', formValue.authors);
        data.append('publicationDate', formValue.publicationDate.format('YYYY-MM-DD'));
        data.append('journalTitle', formValue.journal);
        data.append('volume', formValue.volume);
        data.append('issue', formValue.no);
        data.append('pages', formValue.pages);
        data.append('description', formValue.desc);
        data.append('file', formValue.dragger[0].originFileObj);
        data.append('uploaderID', '1234abcd');
        data.append('uploaderName', 'John Doe');
        
        console.log(data)
        const config = {
            headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' }
        };
        axios
            .post('/file/createFile', data, config)
            .then((resp) => {                        
                console.log(resp.data)
                dispatch(put_data('posts_research', resp.data))
            })
            .catch((err) => {      
                console.log(err)                 
            })
            .then(() => {
            
            });
    };
};