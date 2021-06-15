import { useEffect, useState } from "react";
import React from 'react';
import './index.css'

export const  Tab = ({children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);

    useEffect(() => {
        let data = [];

        React.Children.forEach(children, element => {
            if(!React.isValidElement(element)) return;

            const {props: { tab, children}} = element;
            data.push({ tab, children});
        })

        setTabsData(data);
    },[children])

    return (
        <div className="w-100 custom-tab">
            <ul className="nav nav-tabs">
                {
                    tabsData.map(({tab}, idx) => (
                        <li className="nav-item">
                            <button className={`nav-link ${idx === activeTab ? "active" : ""}`} href="#" onClick={() => setActiveTab(idx)}>
                                {tab}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="tab-content p-3">
                {tabsData[activeTab] && tabsData[activeTab].children}
            </div>
        </div>
    )
}

const TabPane = ({children}) => {
    return{children}
}

Tab.TabPane = TabPane;
