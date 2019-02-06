import React, { Component, Fragment } from 'react';
import differenceInDays from 'date-fns/difference_in_days';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

// Container
import container from './container';

// Components
import {
  If,
  Card,
  Info,
  Avatar,
  Loading,
  BackPage,
  Repo
} from '../../components';

const getTimeRange = lastCommit => {

  const dateNow = new Date();
  const lastCommitDate = differenceInDays(dateNow, lastCommit);
  let result = {};

  if (lastCommitDate <= 30) {
    result.color = '#28c38d';
    result.message = 'Updates: Earlier 30 days';
  }
  if (lastCommitDate > 30 && lastCommitDate <= 60) {
    result.color = '#ffbc34';
    result.message = 'Updates: Between 30 and 60 days';
  }

  if (lastCommitDate > 60 && lastCommitDate <= 90) {
    result.color = '#f2f2f2';
    result.message = 'Updates: Between 60 and 90 days';
  }

  if (lastCommitDate > 90) {
    result.color = '#ff6666';
    result.message = 'Updates: After 90 days without update';
  }
  return result;
};

const getReposList = (params, fetchRepos, fetchUser) => {
  if (params.username) {
    fetchRepos(params.username);
    fetchUser(params.username);
  }
};

const sortRepos = (items) => {
  let arr = [...items];
  return arr.sort((a,b) => (a.updated_at > b.updated_at) ? -1 : ((b.updated_at > a.updated_at) ? 1 : 0));
};

class Repository extends Component {

  

  // scrollInfiniy = () => {
  //   const { isRequest } = this.props;
  //   if (!isRequest) {
  //     window.onscroll = e => {
  //       if (
  //         window.innerHeight + window.scrollY >=
  //         document.body.offsetHeight - 25
  //       ) {
  //         this.getRepositoryList();
  //       }
  //     };
  //   }
  // };

  componentDidMount() {
    const { fetchRepos, fetchUser, match: { params } } = this.props;
    getReposList(params, fetchRepos, fetchUser);
    // this.scrollInfiniy();
  }

  render() {
    const { repos, user, fetchCommits, loading } = this.props;
    return (
      <Fragment>
        <If condition={repos && repos.length}>
          <Avatar src={user.avatar_url} />
          <Card info>
            <Info
              value={user ? user.following : null}
              description={'following'}
            />
            <Info
              value={user ? user.followers : null}
              description={'followers'}
            />
            <Info
              value={user ? user.public_repos : null}
              description={'public repos'}
            />
            <Info
              value={user ? user.public_gists : null}
              description={'public gists'}
            />
          </Card>
          {sortRepos(repos).map(({ name, updated_at, description }, i) => {
            return (
              <Card key={i} onClick={() => fetchCommits(user.login,name)}>
                <Link
                  to={`/commits-list/${user.login}/${name}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Repo
                    name={name}
                    description={description}
                    commitStatus={getTimeRange(updated_at)}
                  />
                </Link>
              </Card>
            );
          })}
        </If>
        <Loading>
          <If condition={loading}>
            <Loader 
              type='Bars'
              color='#313541'
              height='100'	
              width='100'
            />
          </If>
        </Loading>
        <BackPage to={'/'} />
      </Fragment>
    );
  }
}

export default container(Repository);
