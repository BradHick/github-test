import { connect } from 'react-redux';

const mapStateToProps = ({ commit }) => ({
  commitsList: commit.commits,
  loading: commit.loading,
  hasMoreCommits: commit.hasMoreCommits,
  commitPage: commit.commitPage
});

const mapDispatchToProps = ({ commit }) => ({
  fetchCommits: commit.fetchCommits,
  resetCommits: commit.resetCommits
});

export default component => connect(mapStateToProps,mapDispatchToProps)(component);