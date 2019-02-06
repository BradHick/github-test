import { connect } from 'react-redux';

const mapStateToProps = ({ commit }) => ({
  commitsList: commit.commits,
  loading: commit.loading
  // isRequest: profile.isRequest
});

const mapDispatchToProps = ({ commit }) => ({
  fetchCommits: commit.fetchCommits
});

export default component => connect(mapStateToProps,mapDispatchToProps)(component);