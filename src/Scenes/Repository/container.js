import { connect } from 'react-redux';

const mapStateToProps = ({ user, repo, commit }) => ({
  repos: repo.repos,
  user: user.user,
  loading: repo.loading,
  // page: profile.pageRepository,
  // isRequest: profile.isRequest
});

const mapDispatchToProps = ({ user, repo, commit }) => ({
  fetchUser: user.fetchUser,
  fetchRepos: repo.fetchRepos,
  fetchCommits: commit.fetchCommits
});

export default component => connect(mapStateToProps, mapDispatchToProps)(component);
