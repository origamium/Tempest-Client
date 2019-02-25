import * as React from "react";
import styled from "@styled/style";
import { IUser, UserProperties } from "@data/src/Contents/User";
import { UserCard } from "../../Card/UserCard";

interface UserEventComponentProps extends IUser {
    account: string,
    column: string,
}

const Styled = {
    Root: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 1em 0.5em;
    `,
}

export const UserEvent: React.FC<UserEventComponentProps> = React.memo((props: UserEventComponentProps) => {
    return (
        <Styled.Root>
            <UserCard
                account={props.account}
                id={props[UserProperties.id]}
                displayName={props[UserProperties.displayName]}
                screenName={props[UserProperties.screenName]}
                avatar={props[UserProperties.avatarImage]}
                header={props[UserProperties.headerImage]}
            />
        </Styled.Root>
    )
})

export default UserEvent
