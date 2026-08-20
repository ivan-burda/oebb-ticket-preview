import { expect, test } from '../../playwright/test';
import { App } from '../App.tsx';

test('preview appears when show button is clicked', async ({ mount }) => {
  const component = await mount(<App />, '/');
  const showPreviewAction = component.getByTestId('show-ticket-preview-action');
  const preview = component.getByTestId('ticket-preview');

  await expect(preview).toHaveCount(0);

  await showPreviewAction.click();

  await expect(preview).toHaveCount(1);
});

test('preview disappears when show button is clicked again', async ({ mount }) => {
  const component = await mount(<App />, '/');
  const showPreviewAction = component.getByTestId('show-ticket-preview-action');
  const preview = component.getByTestId('ticket-preview');

  await showPreviewAction.click();
  await expect(preview).toHaveCount(1);

  await showPreviewAction.click();
  await expect(preview).toHaveCount(0);
});
