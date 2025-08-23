import React from 'react';
import GitHubIcon from './../assets/github.svg?react';
import GitLabIcon from './../assets/gitlab.svg?react';
import LinkedInIcon from './../assets/linkedin.svg?react';
import Document from './../assets/document.svg?react';
import GitHubRound from './../assets/githubround.svg?react';

export const SVG = ({name}) => {
    if(name === 'github')
        return <GitHubIcon />
    else if(name === 'gitlab')
        return <GitLabIcon />
    else if(name === 'linkedin')
        return <LinkedInIcon />
    else if(name === 'document')
        return <Document />
    else if(name === 'githubround')
        return <GitHubRound />
}

export const Resource = ({ href, icon }) => {
    return (
        <div>
            <a  
                href={href}
                target="_blank" 
                rel="noopener noreferrer" 
                className="mx-2 mt-4 inline-block text-3xl py-2 px-3 border-2 border-gray-900 transition delay-150 duration-300 ease-in-out hover:border-indigo-300 hover:cursor-pointer"
            >
                <SVG name={icon}/>
            </a>
        </div>
    )
}

