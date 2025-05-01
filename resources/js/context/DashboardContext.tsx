import React, { createContext, useContext, useState } from 'react';

const DashboardCtx = createContext(null);

export const DashboardProvider = ({ children }) => {

    return (
        <DashboardCtx.Provider value={{}}>
            {children}
        </DashboardCtx.Provider>
    )
}