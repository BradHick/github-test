import { connect } from 'react-redux';

const mapStateToProps = ({ user, repo, commit }) => ({
  repos: repo.repos,
  user: user.user,
  loading: repo.loading,
});

const mapDispatchToProps = ({ user, repo, commit }) => ({
  fetchUser: user.fetchUser,
  fetchRepos: repo.fetchRepos,
  resetRepos: repo.resetRepos,
  fetchCommits: commit.fetchCommits
});

export default component => connect(mapStateToProps, mapDispatchToProps)(component);
