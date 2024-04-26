import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  reviews:[
    {img:'/assets/img/product/client.webp',name:'SIARHEI DZENISENKA',date:'5/15/2022, 2:53:39 PM',
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor",rating:4},
    {img:'/assets/img/product/client-2.webp',name:'TOMMY JARVIS',date:'3/05/2022, 3:53:39 PM',
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor",rating:5},
    {img:'/assets/img/product/client-3.webp',name:'JOHNNY CASH',date:'1/09/2022, 5:53:39 PM',
    review:"This is cardigan is a comfortable warm classic piece. Great to layer with a light top and you can dress up or down given the jewel buttons. I'm 5'8” 128lbs a 34A and the Small fit fine.",rating:4},
  ]
}

export const productSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    add_reviews:(state,{payload}) => {
      state.reviews.push(payload)
    }
  }
})


export const {add_reviews} = productSlice.actions;

export default productSlice.reducer;