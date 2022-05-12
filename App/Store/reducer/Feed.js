import { createSlice } from '@reduxjs/toolkit'

export const FeedSlice = createSlice({
  name: 'FeedPost',
  initialState: {
    allPost: [],
    ownallPost : [],
    isLoading : true,
    isFetching : true,
    onSwipeRefresh : false
  },
  reducers: {
    getSocialPost(state,action) {
      state.onSwipeRefresh = action.payload;
    },
    getOwnSocialPost(state,action) {
       state.onSwipeRefresh = action.payload;
    },
    setAllPost(state,action) {
      //  console.log("all post =>>>>",JSON.stringify(action.payload))
       return {...state, allPost:action.payload, isLoading : false, onSwipeRefresh : false}
    },
    setOwnPost(state,action) {
      return {...state, ownallPost:action.payload, isFetching : false, onSwipeRefresh : false}
   },
    updatePostLike(state,action) {
      const data = action.payload;
      let LikeData = state.allPost.filter((it) => it.id == data.post_id)[0].likeData;
      let check =  LikeData.filter((it)=> it.user_id == data.user_id);
      if (check.length > 0) {
          LikeData = LikeData.filter((it)=> it.user_id != data.user_id);
      }else{
          LikeData = [...LikeData, data]
      }
      void(state.allPost.filter((it) => it.id == data.post_id)[0].likeData = LikeData);
   },
   
   updateComments(state,action){
    const data = action.payload;
    let commentData = state.allPost.filter((it) => it.id == data.post_id)[0].commentData;
     commentData = [...commentData, data];
     void(state.allPost.filter((it) => it.id == data.post_id)[0].commentData = commentData);
   },

   deletePost(state,action) {
    const postId = action.payload;
    let newData = state.allPost.filter((it) => it.id != postId);
    let newDataown = state.ownallPost.filter((it) => it.id != postId);
    return {...state, allPost:newData, ownallPost: newDataown }
   }
  }
})

export const { 
  getSocialPost,
  getOwnSocialPost,
  setAllPost, 
  setOwnPost,
  updatePostLike,updateComments, deletePost } = FeedSlice.actions;

export default FeedSlice.reducer;
