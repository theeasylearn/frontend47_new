import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

var WithHook = (Component) => {
  const ComponentWithHooks = (props) => {
    let params = useParams();
    let navigate = useNavigate();
    let [cookies, setCookie, removeCookie] = useCookies();

    return (
      <Component
        {...props}
        params={params}
        navigate={navigate}
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
    );
  };
  return ComponentWithHooks;
};

export default WithHook;