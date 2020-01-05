import React, { Suspense } from "react";
import CharacterView from './CharacterView';

export default function DashboardView() {
    return (
        <Suspense fallback={<h1>Loading characters...</h1>}>
            <div className='dashboardView'>
                <CharacterView />
            </div>
        </Suspense>
    );
}




