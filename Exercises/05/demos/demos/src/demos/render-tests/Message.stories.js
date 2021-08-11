import React from 'react';
import Message from './Message';

export default {
  component: Message,
  title: 'Message'
};

export const Default = () => (
    <Message content="I see everything twice" isImportant={false} />
);

export const Important = () => (
    <Message content="I see everything twice" isImportant />
);
