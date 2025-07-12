import { test, expect } from '@playwright/test';

test.describe('Xserver VPS Auto renew', () => {
  test('should extend server life', async ({ page }) => {
    const EMAIL = process.env.XSERVER_EMAIL;
    const PASS = process.env.XSERVER_PASSWORD;

    if (!EMAIL || !PASS) {
      throw new Error('XSERVER_EMAIL and XSERVER_PASSWORD must be set in .env file');
    }

    // XServerのログインページにアクセス
    await page.goto('/xapanel/login/xserver/');

    await page.fill('input[type="text"]', EMAIL);

    await page.fill('input[type="password"]', PASS);

    await page.getByRole('button', { name: 'ログインする' }).click();

    await page.waitForURL('/xapanel/xserver/index');

    // VPS管理ページに移動
    await page.goto('/xapanel/xvps/index');

    // 契約情報ページに移動
    await page.getByRole('table').nth(0).getByRole('row').nth(1).getByRole('cell').nth(0).getByRole('link').click();

    await page.waitForURL('/xapanel/xvps/server/detail?id=*');

    // 契約更新確認画面に移動
    await page.getByRole('link', { name: '更新する' }).click();

    await page.waitForURL('/xapanel/xvps/server/freevps/extend/index?id_vps=*');

    await page.getByRole('button', { name: '引き続き無料VPSの利用を継続する' }).click();

    await page.waitForURL('/xapanel/xvps/server/freevps/extend/conf');

    try {
      // 更新画面で「無料VPSの利用を継続する」ボタンが表示されることを確認
      await expect(page.getByText('無料VPSの利用を継続する')).toBeVisible();

      // 契約更新！！
      await page.getByRole('button', { name: '無料VPSの利用を継続する' }).click();

      await page.screenshot({ path: 'test-results/confirm-extend.png' });

      console.log('Successfully extended free VPS plan.');

    } catch (error) {
      console.log('Skipping extend, Already extended?');
    }
  });
});
