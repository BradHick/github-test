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
                  img={author ? author.avatar_url : 'https://camo.githubusercontent.com/17dfc9f3bbe544abb10021fbe62a3640fe935b23/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f39363230333535376238396136386563653331623238306666373366303835613f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d3430'}
                />
              </Card>
            );
          })}
        </If>
        <If condition={commitsList.length <= 0}>
          <Card>
            <Commit
              username={'Empty :('}
              message={'This repository has no commits'}
              img={'https://camo.githubusercontent.com/17dfc9f3bbe544abb10021fbe62a3640fe935b23/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f39363230333535376238396136386563653331623238306666373366303835613f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d3430'}
            />
          </Card>
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
