import { connect } from 'react-redux';

import Info from '../components/Info';

const mapStateToProps = ({login, repos, followers}) => ({
    login,
    repos,
    followers,
});

const mapDispatchToProps = () => ({
});

const ConInfo = connect(mapStateToProps, mapDispatchToProps)(Info);

export default ConInfo;