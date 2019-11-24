import React from 'react';
import {
    WorkWrapper,
    WorkTitle,
    WorkItem,
    ItemIcon,
    ItemTitle,
    TitleLine,
    ItemDesc
} from './styles.js';

const Work = _ => {
    return (
        <WorkWrapper>
            <div className="container">
                <WorkTitle><span>My</span> Work</WorkTitle>
                <WorkItem first={1}>
                    <ItemIcon className="icon fa fa-chain fa-2x"></ItemIcon>
                    <ItemTitle>Mobile Ux</ItemTitle>
                    <TitleLine />
                    <ItemDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </ItemDesc>
                </WorkItem>
                <WorkItem>
                    <ItemIcon className="icon fa fa-bolt fa-2x"></ItemIcon>
                    <ItemTitle>Mobile Ux</ItemTitle>
                    <TitleLine />
                    <ItemDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </ItemDesc>
                </WorkItem>
                <WorkItem last={1}>
                    <ItemIcon className="icon fa fa-tachometer fa-2x"></ItemIcon>
                    <ItemTitle>Mobile Ux</ItemTitle>
                    <TitleLine />
                    <ItemDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </ItemDesc>
                </WorkItem>
            </div>
        </WorkWrapper>
    )
}

export default Work