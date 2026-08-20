import type { RouteObject } from 'react-router-dom';
import { TrainTicketPage } from './TrainTicketPage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <TrainTicketPage />,
    },
];
