import _Avatar from '@material-ui/core/Avatar';
import _Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import {pure} from 'recompose';
import styled from '../../../../Theme/style';

const Styled = {
    Avatar: styled(_Avatar)`
        &&{
            margin: 6px;
            width: 32px;
            height: 32px;
        }
    `,
    Root: styled(_Paper)`
        && {
            width: 100%;
            max-height: 60px;
            margin: 4px;
            display: flex;
            overflow: hidden;
        }
    `,
};

type Props = {
    account: string,
    target: IDataType["status"],
    handleClick: Function,
}

const handleClick = (props: Props) => (e: any) => {
    e.preventDefault();
    props.handleClick({
        account: props.account,
        id: props.target[StatusProperties.id],
    });
};

const StatusCard: React.SFC<Props> = (props: Props) => (
    <Styled.Root onClick={handleClick(props)}>
        <Styled.Avatar src={props.target.avatarImage} />
        <Typography variant="body1">{props.target.content}</Typography>
    </Styled.Root>
);

export const StatusCard_ = StatusCard;
export default pure(StatusCard);
