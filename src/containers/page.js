import NavigationActions from '../actions/navigationActions';
import PageWidget from '../components/page';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    return {
        navigationState: state.navigation,
        name: 'Original'
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return{
        backAction: ()=>{
            dispatch(NavigationActions.navigatePop())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PageWidget);
