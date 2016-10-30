import NavigationActions from '../actions/navigationActions';
import AppWidget from '../components/app';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    return {
        navigationState: state.navigation
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return{
        backAction: ()=>{
            dispatch(NavigationActions.navigatePop())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppWidget);
