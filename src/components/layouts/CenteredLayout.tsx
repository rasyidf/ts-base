import React, { PropsWithChildren } from "react";

export const CenteredLayout = ({ children }: PropsWithChildren<{}>) => (
    <div style={{ margin: '0 auto', maxWidth: 650 }}>
        {children}
    </div>
);