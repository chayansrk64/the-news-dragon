import React, {useContext} from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return  <div style={{height:"400px" }} className='d-flex align-items-center justify-content-center'>
                    <Spinner  animation="border" variant="success" />
                </div>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
};

export default PrivateRoute;
/**
 * ---------------------
 *          STEPS
 * ---------------------
 * 1. Check the user is logged in or not.
 * 2. if user is logged in then, allow them to visit private route.
 * 3. if not redirect to login page.
 * 4. setup private route
 * 5. handle loading (prevent: {if you load page then take it to login page again})
 * 
*/