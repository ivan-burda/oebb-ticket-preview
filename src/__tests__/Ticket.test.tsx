import { expect, test } from '../../playwright/test';
import { App } from '../App.tsx';

test('see ticket details', async ({ mount }) => {
    const component = await mount(<App />, '/');

    await expect(
        component.getByRole('heading', { name: 'Your train ticket' }),
    ).toBeVisible();

    await expect(
        component.getByText('Valid from: August 19, 2026'),
    ).toBeVisible();
    await expect(
        component.getByText('Directions: Vienna, AT → Bratislava, SK'),
    ).toBeVisible();
    await expect(component.getByText('Price: €19.00')).toBeVisible();

    await expect(
        component.getByRole('link', { name: 'Download' }),
    ).toHaveAttribute('download', 'ticket.pdf');
});
