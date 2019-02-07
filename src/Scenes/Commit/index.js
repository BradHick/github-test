import React, { Component, Fragment } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { Formik } from 'formik';

// Container
import container from './container';

// Components
import { 
  If,
  Card,
  Commit,
  Title,
  Button,
  Input,
  Form,
  Loading,
  BackPage
} from '../../components';


const filterCommits = (items, text) => {
  return items.filter( item => item.commit.message.toLowerCase().search(text.toLowerCase()) !== -1);
}

class CommitList extends Component {

  state ={
    commits: [],
    paginatedCommits: [],
    per_page: 20,
    hasMore: true,
    loadingState: false
  };

  infinityScroll = () => {
    const { fetchCommits, loading, match: { params } } = this.props;
    if(!loading){
      window.onscroll = e => {
        if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 25) {
          if (params.username && params.repos) {
            fetchCommits(params);
          }
        }
      };
    }
  }

  componentDidMount = () => {
    const { fetchCommits, match: { params } } = this.props;
    this.infinityScroll();
    if (params.username && params.repos) {
      fetchCommits(params);
    }
  };

  componentWillUnmount(){
    const { resetCommits } = this.props;
    resetCommits();
  }
    
  render() {
    const { commitsList, loading, match: { params } } = this.props;
    return (
      <Fragment>
        <Title> Commits </Title>


        <Card>
            <h2><center>Filter commits</center></h2>
            <Formik 
              initialValues={{ text:''}}
              onSubmit={values => {
                this.setState({ 
                  commits: filterCommits(commitsList, values.text),
                 })
              }}

              render={({handleSubmit, handleChange}) => (
                <Form onSubmit={handleSubmit} flex>
                  
                  <Input
                    name='text'
                    placeholder='Text to search (ignore case)'
                    onChange={handleChange}
                  />
                  
                  <Button type='submit'>
                    {'Filter'}
                  </Button>

                </Form>
              )}
            />
            
          </Card>

        <BackPage to={`/${params.username}`} />

        <If condition={commitsList}>
          { this.state.commits.length > 0 ?
            this.state.commits.map(({ commit, author }, i) => {
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
            }) : 
            commitsList.map(({ commit, author }, i) => {
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
            })
          }
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
      </Fragment>
    );
  }
}

export default container(CommitList);
