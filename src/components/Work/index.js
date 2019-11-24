import React, {Component} from 'react';
import axios from 'axios'

import {
    WorkWrapper,
    WorkTitle,
    WorkItem,
    ItemIcon,
    ItemTitle,
    TitleLine,
    ItemDesc
} from './styles.js';

class Work extends Component {
constructor(props) {
    super(props);

    this.state = {
        works: []
    }
}

componentDidMount() {
    axios.get('js/data.json')
        .then(response => this.setState({works: response.data.works}))
        .catch(error => console.log(error));
}

    render() {
        const {works} = this.state,
                worksItems = works.map(item => {
                    return (
                        <WorkItem first={item.id} key={item.id}>
                            <ItemIcon className={item.icon_name}></ItemIcon>
                            <ItemTitle>{item.title}</ItemTitle>
                            <TitleLine />
                            <ItemDesc>{item.body}</ItemDesc>
                        </WorkItem>
                    )
                });

        return (
            <WorkWrapper>
                <div className="container">
                    <WorkTitle><span>My</span> Work</WorkTitle>
                    {worksItems}
                </div>
            </WorkWrapper>
        )
    }
}

export default Work