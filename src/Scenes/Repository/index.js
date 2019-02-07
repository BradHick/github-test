import React, { Component, Fragment } from 'react';
import differenceInDays from 'date-fns/difference_in_days';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Formik } from 'formik';

// Container
import container from './container';

// Components
import {
  If,
  Card,
  Info,
  Avatar,
  Loading,
  Select,
  Button,
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

const sortRepos = (items, field, order) => {
  let arr = [...items];

  if (order === 'desc'){
    return arr.sort((a,b) => (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0));
  }

  return arr.sort((a,b) => (a[[field]] > b[[field]]) ? 1 : ((b[[field]] > a[[field]]) ? -1 : 0));

};

class Repository extends Component {

  state = {
    sortedRepos: [],
  };
  
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

  componentWillUnmount(){
    const { resetRepos } = this.props;
    resetRepos();
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
          
          <Card>
            <Formik 
              initialValues={{ field:'stargazers_count', order: 'desc'}}
              onSubmit={values => {
                this.setState({ sortedRepos: sortRepos(repos, values.field, values.order) })
              }}

              render={({handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit}>
                  <h2><center>Select filter</center></h2>
                  <Select name='field' onChange={handleChange}>
                    <option value='stargazers_count'>Stars</option>
                    <option value='watchers_count'>Watchers</option>
                    <option value='updated_at'>Updated at</option>
                  </Select>
                  <Select name='order' onChange={handleChange}>
                    <option value='desc'>Desc</option>
                    <option value='asc'>Asc</option>
                  </Select>
                  <Button type='submit'>
                    {'Sort'}
                  </Button>

                </form>
              )}
            />
            
          </Card>
          <BackPage to={'/'} />
          { 
            this.state.sortedRepos.length > 0 ?
            this.state.sortedRepos.map(({ name, updated_at, description, watchers_count, stargazers_count }, i) => {
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
                    stars={stargazers_count}
                    watchers={watchers_count}
                  />
                </Link>
              </Card>
            );
            }) :
            repos.map(({ name, updated_at, description, watchers_count, stargazers_count }, i) => {
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
                      stars={stargazers_count}
                      watchers={watchers_count}
                    />
                  </Link>
                </Card>
              );
              })
          }
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
      </Fragment>
    );
  }
}

export default container(Repository);
