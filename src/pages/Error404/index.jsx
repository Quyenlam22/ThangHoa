import { Button, Flex } from 'antd';
import "./Error404.scss";
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

function Error404() {
  const navigate = useNavigate();
  
  useTitle("404");

  return (
    <Flex className="error-page" align="center" justify="center">
      <div className="error-page__container">
        <div className="error-page__code">
          <h3 className="error-page__subtitle">Ôi! Không tìm thấy trang này!</h3>
          <h1 className="error-page__number">
            <span>4</span><span>0</span><span>4</span>
          </h1>
        </div>
        <h2 className="error-page__message">
          Rất tiếc, nhưng trang bạn yêu cầu không được tìm thấy.
        </h2>
        <Button className="error-page__button" size='large' onClick={() => navigate('/')}>
          Quay lại Trang chủ
        </Button>
      </div>
    </Flex>
  );
}

export default Error404;
