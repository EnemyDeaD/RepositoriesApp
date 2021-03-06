import React, { useCallback } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RepositoriesActions, RepositoriesTypes } from '../Model'
import { Link } from '../../../UI/Atoms'
import { dateParser } from '../../../lib/dateParser'

const RepositoryItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background: #f2f3f4;
    color: black;
    padding: 10px 10px;
    text-align: center;
    &:hover {
        background: white;
    }
    border-right: 1px solid black;
    border-left: 1px solid black;
    border: 1px solid black;
    word-break: break-word;
`

const Name = styled.div`
    cursor: pointer;
    text-transform: none;
    word-break: break-word;
`
const CountStars = styled.span`
    border-right: 1px solid black;
    border-left: 1px solid black;
    word-break: break-word;
`
const DateLastCommit = styled.span`
    border-right: 1px solid black;
    word-break: break-word;
`
const LinkOnGithub = styled(Link)`
    text-transform: none;
    text-decoration: none;
    word-break: break-word;
    margin-left: 10px;
    color: inherit;
`

interface RepositoriesPropsType {
    name: string
    countOfStars: number
    dateLastCommit: string
    linkOnGithub: string
    repoID: number
    fullName: string
}

export const Repository: React.FC<RepositoriesPropsType> = ({
    name,
    countOfStars,
    dateLastCommit,
    linkOnGithub,
    repoID,
    fullName,
}) => {
    const dispatch = useDispatch()
    const onGetInfoOfRepository = useCallback(() => {
        dispatch(RepositoriesActions.setActiveRepository(repoID))
        dispatch({
            type: RepositoriesTypes.CONTRIBUTES_OF_ACTIVE_REPOSITORY,
            payload: { fullName },
        })
    }, [dispatch, repoID, fullName])

    const date = dateParser(dateLastCommit)
    return (
        <RepositoryItem>
            <Name>
                <NavLink
                    onClick={onGetInfoOfRepository}
                    to={'/user/' + repoID}
                    style={{
                        textTransform: 'none',
                        textDecoration: 'none',
                        color: 'black',
                    }}
                >
                    {name}
                </NavLink>
            </Name>
            <CountStars>{countOfStars}</CountStars>
            <DateLastCommit>{date}</DateLastCommit>
            <LinkOnGithub href={linkOnGithub} target="_blank">
                {' '}
                Link
            </LinkOnGithub>
        </RepositoryItem>
    )
}
