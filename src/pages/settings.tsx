// page with main layout

import getMainLayout from '@/components/layouts/MainLayout';
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const SettingsPage : NextPageWithLayout = () => {
    return (
        <div>
            <h1>Settings</h1>
        </div>
    );
}

SettingsPage.getLayout = getMainLayout;

export default SettingsPage;