import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { RingLoader } from 'react-spinners';

// Containers
import container from './container';

// Components
import {
  Card,
  Input,
  If,
  UsersList,
  Title,
  Loading,
  NotFound
} from '../../components';

class Home extends Component {
  render() {
    const { name, avatar_url, bio, location, id, login } = this.props.user;
    const { fetchUser, fetchRepos } = this.props;
    return (
      <Fragment>
        <Title>search by username</Title>
        <Card>
          <Input
            placeholder='search for a username'
            onBlur={e => fetchUser(e.target.value)}
          />
        </Card>
        <If condition={this.props.profile && !this.props.errorRequest}>
          <Card onClick={() => fetchRepos()}>
            <Link style={{ textDecoration: 'none' }} to={`/${login}`}>
              <UsersList
                img={avatar_url}
                name={name}
                bio={bio}
                location={location}
                id={id}
              />
            </Link>
          </Card>
        </If>
        <If condition={this.props.errorRequest}>
          <NotFound />
        </If>
        <Loading>
          {/* <RingLoader color={'#123abc'} loading={this.props.loading} /> */}
        </Loading>
      </Fragment>
    );
  }
}

export default container(Home);