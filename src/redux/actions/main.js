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
      centered: true,
    });
  }
}

const error = (msg) => {
  return () => {
    Modal.error({
      title: 'Error!!',
      content: msg,
      centered: true,
    });
  }
}

export const check_login = (history, isAuth = false) => {
    return (dispatch) => {      
      dispatch(toggle_loader(true)) 
      if(isAuth && token) {  
        dispatch(error("Already Login"))
        history.push('/')
      }
      else if(!token && !isAuth) {
        dispatch(toggle_popup("modal_alert", true, false, false))        
        history.push('/')
      }
      dispatch(toggle_loader(false))
      // const payload = {}
      // axios
      // .post('/checkLogin', payload, config)
      // .then((resp) => {
      //   if (isAuth) {
      //   } 
      //   else dispatch(put_data('user_check', resp.data))
      // })
      // .catch((err) => {  
      //   if (!isAuth) {          
      //     history.push('/')
      //     dispatch(toggle_popup("modal_alert", true, false, false))
      //   }  
      // })
      // .then(() => {
      //   dispatch(toggle_loader(false))
      // });
      // }
    };
};
export const logout = () => {
  return (dispatch) => {
    dispatch(toggle_loader(true))
    setTimeout(() => {
      ls.removeItem('token');
      ls.removeItem('id_user');
      ls.removeItem('name_user');
      dispatch(toggle_loader(false))
      window.location.href = `${process.env.REACT_APP_BASE_URL}`;      
    }, 1500);
  };
};

export const filter_research = (listRes) => {
  return (dispatch) => {   
    dispatch(toggle_loader(true)) 
    const a = []
    if (listRes.includes("MostRead")) {
      a.push(["downloadCount", -1])      
    }
    if (listRes.includes("AZ")) {
      a.push(["articleTitle", 1])      
    }
    if (listRes.includes("ZA")) {
      a.push(["articleTitle", -1])      
    }
    if (listRes.includes("Newest")) {
      a.push(["publicationDate", -1])      
    }
    if (listRes.includes("Oldest")) {
      a.push(["publicationDate", 1])      
    }

    const payload = {
        filter: a,
        idUser: ls.id_user        
    }
    console.log(payload)
    axios
      .post('/file/filterResearch', payload, config)
      .then((resp) => {
          dispatch(put_data('list_research', resp.data.result))
      })
      .catch((err) => {
        dispatch(error(err?.response?.data))
      })
      .then(() => {
        dispatch(toggle_loader(false))
      });
  };
};
export const post_view_user = (id) => {
  return (dispatch) => {   
    dispatch(toggle_loader(true)) 
    const payload = {
        id
    }
    axios
      .post('/user/viewUser', payload, config)
      .then((resp) => {
        dispatch(put_data('profile_data', resp.data))
      })
      .catch((err) => {                       
        dispatch(error(err?.response?.data))
      })
      .then(() => {
        dispatch(toggle_loader(false))
      });
  };
};

// export const get_user_id = () => {
//     return (dispatch) => {   
//       dispatch(toggle_loader(true)) 
//       const payload = {
//           id: ls.id_user
//       }
//       axios
//         .post('/user/getUser', payload, config)
//         .then((resp) => {
//             dispatch(put_data('user_data', resp.data.result))
//         })
//         .catch((err) => {
//           dispatch(error(err))
//         })
//         .then(() => {
//           dispatch(toggle_loader(false))
//         });
//     };
// };

// export const get_user_research = () => {
//     return (dispatch) => {    
//       const payload = {
//           id: ls.id_user
//       }
//       axios
//         .post('/user/getUserResearch', payload, config)
//         .then((resp) => {                        
//             console.log(resp.data)
//             dispatch(put_data('user_research', resp.data.msg))
//         })
//         .catch((err) => {                       
//         })
//         .then(() => {
          
//         });
//     };
// };

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
            if(resp.data?.result?.photoProfile) {
              dispatch(put_data("url_avatar", resp.data?.result?.photoProfile))
            }
        })
        .catch((err) => {
          dispatch(error(err?.response?.data))
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};

// export const get_data = (url, key) => {
//     return (dispatch) => {      
//       axios
//         .get(url, config)
//         .then((resp) => {                        
//             console.log(resp.data)
//             dispatch(put_data(key, resp.data))
//         })
//         .catch((err) => {       
//           dispatch(error(err?.response?.data))                
//         })
//         .then(() => {
          
//         });
//     };
// };


export const post_login = (data, history) => {
    return (dispatch) => {   
      dispatch(toggle_loader(true))
      axios
        .post('/login', data)
        .then((resp) => {                    
            ls.setItem('token', resp.data.token);
            ls.setItem('id_user', resp.data?.payload[0]?.id);
            ls.setItem('name_user', resp.data?.payload[0]?.fullname);
            dispatch(put_data('user_data', resp.data));
            window.location.href = `${process.env.REACT_APP_BASE_URL}`;
        })
        .catch((err) => {   
          console.log(err?.response?.data)
          dispatch(error(err?.response?.data))
        })
        .then(() => {
            dispatch(toggle_loader(false))               
        });
    };
};
export const post_register = (data, history) => {
    return (dispatch) => {
      dispatch(toggle_loader(true))      
      const payload = {
        fullName: data.fullname,
        affiliation: data.affiliation,
        email: data.email,
        password: data.password,          
      }      
      axios
        .post('/register', payload)
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data('posts', resp.data))
            dispatch(success("Registeration Success"))
            history.push('/login')
        })
        .catch((err) => {  
          dispatch(error(err?.response?.data))
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};

export const post_edit_user = (payload, history) => {
    return (dispatch) => {
      dispatch(toggle_loader(true))
      axios
        .put('/user/editUser', payload, config)
        .then((resp) => {                        
            console.log(resp.data)
            ls.setItem('name_user', payload.fullname);
            history.push('/profile')
            dispatch(success("Profil User Berhasil Diupdate"))
        })
        .catch((err) => {
          dispatch(error(err?.response?.data))
        })
        .then(() => {
          dispatch(toggle_loader(false))
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
        let idUser = ''
        if(ls.id_user) {
          idUser = ls.id_user
        }         
        const payload = {
          id: idUser
        }
        axios
          .post('/file/research', payload)
          .then((resp) => {                        
              console.log(resp.data)
              dispatch(put_data('list_research', resp.data.fileData))
          })
          .catch((err) => {      
              console.log(err)                 
          })
          .then(() => {
              dispatch(toggle_loader(false))
          });
    };
};

// export const post_user_research = () => {
//     return (dispatch) => {          
//         dispatch(toggle_loader(true))  
//         const payload = {
//           id: ls.id_user
//         }          
//         axios
//             .post('/user/getUserResearch', payload, config)
//             .then((resp) => {                        
//                 console.log(resp.data)
//                 dispatch(put_data('user_research', resp.data))
//             })
//             .catch((err) => {      
//                 console.log(err)                 
//             })
//             .then(() => {
//                 dispatch(toggle_loader(false))
//             });
//     };
// };

export const post_create_bookmark = (idResearch) => {
  return (dispatch) => {          
    dispatch(toggle_loader(true))  
    const payload = {
      idUser: ls.id_user,
      idResearch
    }          
    axios
      .post('/user/bookmarkResearch', payload, config)
      .then((resp) => {                        
        console.log(resp.data)
        dispatch(success("Research Berhasil Ditambahkan ke Bookmark"))
        dispatch(post_data("/user/viewUser", "profile_data"))
        dispatch(post_data("/user/getAllBookmark", "bookmarks_data"))
        dispatch(post_research_detail(idResearch))
        dispatch(get_research())        
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
          id,
          idUser: ls.id_user,
        }
        axios
            .post('/file/getDetailResearch', payload, config)
            .then((resp) => {                        
                console.log(resp.data)
                dispatch(put_data('detail_research', resp.data.result))
            })
            .catch((err) => {      
                console.log(err)                 
            })
            .then(() => {
                dispatch(toggle_loader(false))
            });
    };
};
export const delete_research = (id) => {
    return (dispatch) => {          
      dispatch(toggle_loader(true))  
      const payload = {
        id
      }
      axios
        .post('/file/deleteResearch', payload, config)
        .then((resp) => {
          console.log(resp.data)
          dispatch(success("Research Berhasil Dihapus"))
          dispatch(post_data("/user/viewUser", "profile_data"))
          dispatch(post_data("/user/getAllBookmark", "bookmarks_data"))
          dispatch(get_research())
        })
        .catch((err) => {      
          console.log(err)
          dispatch(error("Ada error saat penghapusan"))          
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};

export const delete_bookmark = (idResearch) => {
  return (dispatch) => {          
    dispatch(toggle_loader(true))  
    const payload = {        
      idUser: ls.id_user,
      idResearch
    }
    axios
      .post('/user/deleteBookmarks', payload, config)
      .then((resp) => {
        console.log(resp.data)
        dispatch(success("Bookmark Berhasil Dihapus"))
        dispatch(get_research())
        dispatch(post_data("/user/viewUser", "profile_data"))
        dispatch(post_data("/user/getAllBookmark", "bookmarks_data"))        
        dispatch(post_research_detail(idResearch))
      })
      .catch((err) => {      
        console.log(err)
        dispatch(error("Ada error saat penghapusan"))          
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

export const upload_photo = (file, payload, history) => {
    return (dispatch) => {  
      dispatch(toggle_loader(true))      
      let data = new FormData();
      let token = window.localStorage.token;      
      data.append('id', ls.id_user);      
      data.append('photoProfile', file);      
            
      const config_form = {
        headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' }
      };
      axios
        .put('/user/uploadProfile', data, config_form)
        .then((resp) => {                        
            console.log(resp.data)
            dispatch(put_data("url_avatar", resp.data?.linkImage))            
            dispatch(post_edit_user(payload, history))            
        })
        .catch((err) => {      
            console.log(err)                 
        })
        .then(() => {
          dispatch(toggle_loader(false))
        });
    };
};