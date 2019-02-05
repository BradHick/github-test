import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => {
  return {
    user: user.user,
    errors: user.errors,
    loading: user.loading
  };
};

const mapDispatchToProps = ({ user, repo }) => ({
  fetchUser: user.fetchUser,
  fetchRepos: repo.fetchRepos
});

export default component => 
  connect( mapStateToProps, mapDispatchToProps)(component);