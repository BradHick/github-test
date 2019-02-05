import React, { Component, Fragment } from 'react';
// import differenceInDays from 'date-fns/difference_in_days';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import moment from 'moment';

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

// import layout from '../../config/layout';

class Repository extends Component {

  getReposList = () => {
    const { fetchRepos, match: { params } } = this.props;

    const query = {};

    if (params.username) {
      query.username = params.username;
      fetchRepos(query);
    }
  };

  // differenceDates = lastCommit => {
  //   // const { warning, danger, success } = layout.colors;

  //   const dateNow = new Date();
  //   const lastCommitDate = differenceInDays(dateNow, lastCommit);
  //   let result = {};

  //   if (lastCommitDate <= 30) {
  //     result.color = 'green';
  //     result.message = 'Latest Updates';
  //   }
  //   if (lastCommitDate > 30 && lastCommitDate <= 60) {
  //     result.color = 'orange';
  //     result.message = 'between 30 and 60 days';
  //   }

  //   if (lastCommitDate > 60) {
  //     result.color = 'red';
  //     result.message = 'No recent updates';
  //   }
  //   return result;
  // };

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
    this.getReposList();
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
              value={user ? user.public_repos : null}
              description={'repos publics'}
            />
            <Info
              value={user ? user.followers : null}
              description={'followers'}
            />
          </Card>
          {repos.map(({ name, updated_at, description }, i) => {
            return (
              <Card key={i} onClick={() => fetchCommits(name)}>
                <Link
                  to={`/list-commits/${user.login}/${name}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Repo
                    name={name}
                    description={description}
                    commitStatus={moment(updated_at)}
                    // commitStatus={this.differenceDates(updated_at)}
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
