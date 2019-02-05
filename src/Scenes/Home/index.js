import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

// Container
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

const checkEmptyInput = (e, fetchUser) => {
  if (e.target.value !== '' ){
    return fetchUser(e.target.value);
  }
}

class Home extends Component {
  render() {
    const { user, errors, loading } = this.props;
    const { name, avatar_url, bio, location, id, login } = user;
    const { fetchUser, fetchRepos } = this.props;
    console.log('====================================');
    console.log('this.props ->', this.props);
    console.log('====================================');
    return (
      <Fragment>
        <Title>search by username</Title>
        <Card>
          <Input
            placeholder='search for a username'
            onBlur={e => checkEmptyInput(e, fetchUser)}
          />
        </Card>
        <If condition={ user.id && !errors.response }>
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
        <If condition={this.props.errors.response}>
          <NotFound />
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

export default container(Home);