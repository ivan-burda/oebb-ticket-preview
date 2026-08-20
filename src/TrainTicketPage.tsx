import { DownloadAction } from './DownloadAction.tsx';
import { PreviewAction } from './PreviewAction.tsx';
import { TicketPreview } from './TicketPreview.tsx';
import { useState } from 'react';


export const TrainTicketPage = () => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);

    const togglePreview = () => {
        setIsPreviewVisible(!isPreviewVisible);
    };

    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white max-w-[600px] w-full min-h-[600px] rounded-lg shadow">
                <div className="flex items-center gap-6 px-10 py-6 border-b border-gray-200">
                    <img
                        src="/oebb-logo.svg"
                        alt="ÖBB"
                        className="h-8 w-auto shrink-0"
                    />
                    <h1 className="text-2xl font-bold">Your train ticket</h1>
                </div>
                <div className="p-10">
                    <dl className="flex flex-col gap-1 my-2">
                        <div className="flex gap-2 text-lg text-[#222]">
                            <dt className="font-bold">Valid from:</dt>{' '}
                            <dd>August 19, 2026</dd>
                        </div>
                        <div className="flex gap-2 text-lg text-[#222]">
                            <dt className="font-bold">Directions:</dt>{' '}
                            <dd>Vienna, AT → Bratislava, SK</dd>
                        </div>
                        <div className="flex gap-2 text-lg text-[#222]">
                            <dt className="font-bold">Price:</dt>{' '}
                            <dd>€19.00</dd>
                        </div>
                    </dl>
                    <div className="mt-5 flex items-center gap-3">
                        <DownloadAction/>
                        <PreviewAction onShowPreview={togglePreview} />
                    </div>
                    {isPreviewVisible &&<TicketPreview/>}
                </div>
            </div>
        </main>
    );
};
