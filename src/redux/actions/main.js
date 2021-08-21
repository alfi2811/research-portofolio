import axios from 'axios';
import { Modal } from 'antd';

const ls = window.localStorage
let token = ls.token;
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const put_data = (key, data) => ({
    type: "PUT_DATA",
    key,
    data
})
export const search_research = (key) => {
  return (dispatch) => {
    dispatch(toggle_loader(true))
    setTimeout(() => {
      dispatch({type: "SEARCH_RESEARCH", key})      
      dispatch(toggle_loader(false))
    }, 1000);
  }
}

export const toggle_loader = (data) => ({
    type: 'TOGGLE_LOADER',
    data : data
})

export const toggle_popup = (tipe, bool, msg, data) => ({
	type: "TOGGLE_POPUP",
	tipe,
	bool,
	msg,
	data
})

const success = (msg) => {
  return () => {
    Modal.success({
      content: msg,
      onOk() {
        console.log('OK');
      },
    });
  }
}

export const check_login = (history) => {
    return () => {      
      if(!token) {
        history.push('/login')   
      }
    };
};

export const filter_research = (listRes, filtered) => {
    return () => {      
      if(filtered.includes('AZ')) {
        let newData =  [].concat(listRes).sort((a, b) => a.articleTitle.toLowerCase() > b.articleTitle.toLowerCase() && a.downloadCount < b.downloadCount ? 1 : -1)        
        console.log(newData)
      }
    };
};
export const get_profile = () => {
    return (dispatch) => {   
      dispatch(toggle_loader(true)) 
      const payload = {
          id: ls.id_user
      }
      axios
        .post('/user/viewUser', payload, config)
        .then((resp) => {
            dispatch(put_data('profile_data', resp.data.dataUser))
        })
        .catch((err) => {                       
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};

export const get_user_research = () => {
    return (dispatch) => {    
      const payload = {
          id: ls.id_user
      }
      axios
        .post('/user/getUserResearch', payload, config)
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data('user_research', resp.data.msg))
        })
        .catch((err) => {                       
        })
        .then(() => {
          
        });
    };
};

export const post_data = (url, key) => {
    return (dispatch) => {
      dispatch(toggle_loader(true))   
      const payload = {
        id: ls.id_user
      }
      axios
        .post(url, payload, config)
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data(key, resp.data))
        })
        .catch((err) => {
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};

export const get_data = (url, key) => {
    return (dispatch) => {      
      axios
        .get(url, config)
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data(key, resp.data))
        })
        .catch((err) => {                       
        })
        .then(() => {
          
        });
    };
};


export const post_login = (data, history) => {
    return (dispatch) => {   
      dispatch(toggle_loader(true))
      axios
        .post('/login', data)
        .then((resp) => {                    
            ls.setItem('token', resp.data.token);
            ls.setItem('id_user', resp.data?.payload[0]?.id);
            ls.setItem('name_user', resp.data?.payload[0]?.fullname);
            dispatch(put_data('user_data', resp.data))            
            window.location.href = `${process.env.REACT_APP_BASE_URL}`;
        })
        .catch((err) => {   
          console.log(err)
        })
        .then(() => {
            dispatch(toggle_loader(false))               
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

export const get_waiting_research = () => {
    return (dispatch) => {          
        dispatch(toggle_loader(true))            
        axios
            .get('/admin/waitResearch', config)
            .then((resp) => {                        
                console.log(resp.data)
                dispatch(put_data('list_waiting_research', resp.data.result))
            })
            .catch((err) => {      
                console.log(err)                 
            })
            .then(() => {
                dispatch(toggle_loader(false))
            });
    };
};

export const get_research = () => {
    return (dispatch) => {          
        dispatch(toggle_loader(true))            
        axios
            .get('/file/research')
            .then((resp) => {                        
                console.log(resp.data)
                dispatch(put_data('list_research', resp.data.result))
            })
            .catch((err) => {      
                console.log(err)                 
            })
            .then(() => {
                dispatch(toggle_loader(false))
            });
    };
};

export const post_user_research = () => {
    return (dispatch) => {          
        dispatch(toggle_loader(true))  
        const payload = {
          id: ls.id_user
        }          
        axios
            .post('/user/getUserResearch', payload, config)
            .then((resp) => {                        
                console.log(resp.data)
                dispatch(put_data('user_research', resp.data))
            })
            .catch((err) => {      
                console.log(err)                 
            })
            .then(() => {
                dispatch(toggle_loader(false))
            });
    };
};

export const post_research_detail = (id) => {
    return (dispatch) => {          
        dispatch(toggle_loader(true))  
        const payload = {
          id
        }
        axios
            .post('/file/getDetailResearch', payload, config)
            .then((resp) => {                        
                console.log(resp.data)
                dispatch(put_data('detail_research', resp.data.result[0]))
            })
            .catch((err) => {      
                console.log(err)                 
            })
            .then(() => {
                dispatch(toggle_loader(false))
            });
    };
};

export const post_admin_research = (url, id) => {
    return (dispatch) => {          
      dispatch(toggle_loader(true))  
      const payload = {
        id
      }
      axios
      .put(url, payload, config)
      .then((resp) => {                        
          console.log(resp.data)
          dispatch(success(resp.data.result))
          dispatch(get_waiting_research())
        })
        .catch((err) => {
          console.log(err)                 
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};

export const put_download_research = (id) => {
    return (dispatch) => {          
      dispatch(toggle_loader(true))  
      const payload = {
        id
      }
      axios
      .put("/file/download", payload, config)
      .then((resp) => {                        
          console.log(resp.data)
          // dispatch(success(resp.data.result))
          dispatch(post_research_detail(id))
        })
        .catch((err) => {
          console.log(err)                 
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};


export const post_research = (formValue, history) => {
    return (dispatch) => {  
      dispatch(toggle_loader(true))      
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
      data.append('uploaderID', ls.id_user);
      data.append('uploaderName', ls.name_user);
      
      console.log(data)
      const config_form = {
          headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' }
      };
      axios
        .post('/file/createFile', data, config_form)
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data('posts_research', resp.data))
            dispatch(success(resp.data.msg))
            history.push('/profile')
        })
        .catch((err) => {      
            console.log(err)                 
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};