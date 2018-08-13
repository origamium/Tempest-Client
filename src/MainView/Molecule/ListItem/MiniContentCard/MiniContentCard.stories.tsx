/*tslint:disable*/
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import {withInfo} from "@storybook/addon-info";
import {Theme, ThemeProvider} from '../../../../Theme/style'

import {StatusCard_} from "./StatusCard";
import {UserCard_} from "./UserCard";

import Icons from '../../../../__testdata__/icon/icon';
import Headers from '../../../../__testdata__/header/header';

const sampleId = 'sample-id-0123456789';

storiesOf("Content/Card/StatusCard", module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('info', withInfo("")(
        () => (
            <ThemeProvider theme={Theme.Light}>
                <StatusCard_
                    account={text('account', 'accountid@example.org')}
                    id={text('id', sampleId)}
                    avatar={Icons.origami}
                    content={text("status text", "woaoooooaooao")}
                    handleClick={action('status clicked!')}/>
            </ThemeProvider>
        )
    ))
;

storiesOf("Content/Card/AccountCard", module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('info', withInfo("")(
        () => (
            <ThemeProvider theme={Theme.Light}>
                <UserCard_
                    account={text('account', 'accountid@example.org')}
                    id={text('id', sampleId)}
                    displayName={text("displayName", "シミュラクラ")}
                    screenName={text("screenName", "twitter.com@arclisp")}
                    avatar={Icons.origami}
                    header={Headers.sample}
                    handleClick={action('status clicked!')}/>
            </ThemeProvider>
        )
    ))
;
