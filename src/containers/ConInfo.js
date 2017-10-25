import { connect } from 'react-redux';

import Info from '../components/Info';

const mapStateToProps = ({login, repos, followers, image}) => ({
    login,
    repos,
    followers,
    image,
});

const mapDispatchToProps = () => ({
});

const ConInfo = connect(mapStateToProps, mapDispatchToProps)(Info);

export default ConInfo;