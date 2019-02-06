import React, { Component, Fragment } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

// Container
import container from './container';

// Components
import { 
  If,
  Card,
  Commit,
  Title,
  Loading,
  BackPage
} from '../../components';

class CommitList extends Component {
  componentDidMount = () => {
    const { fetchCommits, match: { params } } = this.props;
    // this.scrollInfiniy();
    if (params.username && params.repos) {
      fetchCommits(params);
    }
  };

  // scrollInfiniy = () => {
  //   const {
  //     isRequest,
  //     getListCommits,
  //     match: { params }
  //   } = this.props;

  //   const query = {};

  //   if (params.username && params.repos) {
  //     query.username = params.username;
  //     query.repos = params.repos;
  //     getListCommits(query);
  //   }

  //   if (!isRequest) {
  //     window.onscroll = e => {
  //       if (
  //         window.innerHeight + window.scrollY >=
  //         document.body.offsetHeight - 25
  //       ) {
  //         getListCommits(query);
  //       }
  //     };
  //   }
  // };

  render() {
    const { commitsList, loading, match: { params } } = this.props;
    return (
      <Fragment>
        <Title> Commits </Title>
        <If condition={commitsList}>
          {commitsList.map(({ commit, author }, i) => {
            return (
              <Card key={i}>
                <Commit
                  username={commit.author.name}
                  message={commit.message}
                  date={moment(commit.committer.date).format('DD/MM/YYYY')}
                  img={author.avatar_url}
                />
              </Card>
            );
          })}
        </If>
        <If condition={loading}>
          <Loading>
            <Loader 
              type='Bars'
              color='#313541'
              height='100'	
              width='100'
            />
          </Loading>
        </If>
        <BackPage to={`/${params.username}`} />
      </Fragment>
    );
  }
}

export default container(CommitList);
