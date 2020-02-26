import { connect } from "react-redux";

import { fetchLikedPhotos, clearInfPhotos } from "../../actions/photo_actions";
import { setLoading, setFinished } from "../../actions/loading_actions";
import Likedphotos from "./likedphotos";

const msp = state => ({
  infPhotos: state.entities.infPhotos,
  hasMore: state.ui.hasMore,
  loading: state.ui.loading
});

const mdp = dispatch => ({
  setLoading: () => dispatch(setLoading()),
  setFinished: () => dispatch(setFinished()),
  fetchLikedPhotos: filters => dispatch(fetchLikedPhotos(filters)),
  clearInfPhotos: () => dispatch(clearInfPhotos())
});

export default connect(msp, mdp)(Likedphotos);
