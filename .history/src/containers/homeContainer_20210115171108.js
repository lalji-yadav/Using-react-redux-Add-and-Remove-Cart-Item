import {connect} from 'react-redux'

import Home from "../components/home";
import { addToCart } from "../Services/Action/action";



const mapStateToProps=(state)=>({
       data:state.cardItems.cardData
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

//export default Home;
                                                                   