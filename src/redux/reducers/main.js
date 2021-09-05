const main_state = {
	posts: false,
	user_data: false,
	list_research: false,
	profile_data: false,
  profile_navbar: false,
  detail_research: false,
  url_avatar: false,
	loader: false,

  modal_msg: false,
  modal_data: false,
  modal_alert: false,
  modal_tnc: false,
}

const main = (state = main_state, action) => {
	switch (action.type) {
		case "PUT_DATA":
			return { ...state, [action.key]: action.data };				
		case "TOGGLE_LOADER":
			return { ...state, loader: action.data };
    case "TOGGLE_POPUP":
      return { ...state, [action.tipe]: action.bool, modal_msg: action.msg, modal_data: action.data};
		case "SEARCH_RESEARCH":
      let a = [...state.list_research];
      let newA = a.filter((dt) => dt.articleTitle.includes(action.key))      
			return { ...state, list_research: newA };	
		default:
			return state;
	}
};

export default main;